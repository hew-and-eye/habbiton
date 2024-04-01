/**
 * Entity class for a single conversation with an NPC.
 * Handles persisting messages to an IndexedDB table, creating tables as needed.
 */

import { openDB, IDBPDatabase } from "idb";

const singletonRegistry: Record<string, MessageThread> = {}
export function MessageThreadSingleton(name: string) {
  singletonRegistry[name] ||= new MessageThread(name)
  return singletonRegistry[name]
}

export interface Message {
  sender: string;
  body: string;
  timestamp: string;
}

export class MessageThread {
  public static DB_NAME = "habbiton"
  name: string;
  db: IDBPDatabase<any>;
  initialized: Promise<boolean>;
  sendMessageListeners: Function[];
  receiveMessageListeners: Function[];
  loadMessagesListeners: Function[];
  messages: Message[];
  
  async send(body: string) {
    if (!this.initialized) {
      console.error(`Tried to send message to thread before initialization.\nthread: ${this.name}\nmessage: ${body}`)
    }
    const message: Message = {
      sender: "You",
      body,
      timestamp: new Date().toString()
    }
    this.messages.push(message)
    const tx = this.db.transaction(this.storeName, "readwrite")
    const id = await tx.store.put(message)
    tx.done
    const receiveMessageListeners = this.receiveMessageListeners
    const respond = async (response: Message) => {
      this.messages.push(response)
      const tx = this.db.transaction(this.storeName, "readwrite")
      const id = await tx.store.put(response)
      tx.done
      receiveMessageListeners.forEach(callback => {
        callback({ ...response, id })
      })
    }
    this.sendMessageListeners.forEach(callback => {
      callback({ message: { ...message, id }, respond })
    })
    tx.done
  }

  addEventListener(event: "sendMessage" | "receiveMessage" | "loadMessages", callback: Function) {
    this[`${event}Listeners`] ||= []
    this[`${event}Listeners`].push(callback)
  }

  deleteHistory() {
    this.db.clear(this.storeName)
  }

  constructor(name: string) {
    this.name = name
    this.sendMessageListeners = []
    this.receiveMessageListeners = []
    this.loadMessagesListeners = []
    this.messages = []
    const context = this
    this.initialized = new Promise(async (resolve, reject) => {
      try {
        // Would it be more performant for each MessageThread instance to share a static db instance? Too lazy to benchmark.
        context.db = await openDB('habbiton', 1, {
          upgrade(db) {
            // Create or open a specific table for the MessageThread instance
            if (!db.objectStoreNames.contains(context.storeName)) {
              db.createObjectStore(context.storeName, { keyPath: 'id', autoIncrement: true });
            }
          }
        });
        // Read all transactions from object store
        const storedMessages = await context.db.transaction(context.storeName).store.getAll()
        this.messages = storedMessages
        this.loadMessagesListeners.forEach(callback => callback(storedMessages))
        resolve(true)
      } catch(err) {
        console.error("Failed to initialize thread", err)
        reject(false)
      }
    })
  }
  get storeName() {
    return `thread_${this.name}`
  }
}
