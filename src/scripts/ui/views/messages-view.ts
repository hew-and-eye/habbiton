/**
 * Renders all messages in a thread.
 * Includes UI for sending messages from the user.
 * Emits events whenever the user sends a message.
 */

import { lilComponent } from "lil-framework"
import { bindAttribute, globalState } from "../../state/globalState"
import { Message, MessageThread, MessageThreadSingleton } from "../../state/MessageThread"

const name = "messages-view"

const template = /*html*/`
  <style>
    messages-view {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 200px 100px;
      max-height: 100vh;
      overflow: hidden;
    }
    .no-thread-selected {
      display: none;
    }
    messages-list {
      flex: 1;
    }
    messages-list,
    message-input {
      background: white;
    }
  </style>
  <div class="select-thread-cta"></div>
  <messages-list threadName="{{selectedThread}}" class="{{threadSelectedClass}}"></messages-list>
  <message-input lfhandle="handleMessage:sendMessage" class="{{threadSelectedClass}}"></message-input>
`

lilComponent({
  name,
  template,
  data: {
    threadSelectedClass: "no-thread-selected",
    selectedThread: null
  },
  hooks: {
    mounted: [function() {
      bindAttribute(this, "selectedThread")
    }],
    selectedThread: [async function(thread: string) {
      this.state.threadSelectedClass = thread ? "thread-selected" : "no-thread-selected"
      if (!thread) {
        this.state.thread = null
      } else {
        this.state.thread = MessageThreadSingleton(thread)
      }
    }]
  },
  handlers: {
    async handleMessage(event: CustomEvent) {
      this.state.thread?.send(event.detail)
    }
  }
})