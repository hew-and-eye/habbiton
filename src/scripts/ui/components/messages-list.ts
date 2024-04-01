import { lilComponent } from "lil-framework"
import { Message, MessageThread, MessageThreadSingleton } from "../../state/MessageThread"

const name = "messages-list"
const style = /*html*/`
<style>
  messages-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: auto;
    padding: 0 24px;
  }
  messages-list .spacer {
    flex: 1;
    min-height: 400px;
  }
  messages-list .message {
    border: 2px solid #777;
    display: inline-block;
    margin: 4px;
    margin-top: 32px;
    border-radius: 6px;
    padding: 4px 8px;
    max-width: 80%;
  }
  messages-list .right+.right,
  messages-list .left+.left {
    margin-top: 2px;
    margin-bottom: 2px;
  }
  messages-list .message.right {
    align-self: flex-end;
    border-bottom-width: 4px;
    border-right-width: 4px;
  }
  messages-list .message .timestamp {
    font-size: 0.7em;
    opacity: 0.7;
    float: right;
  }
</style>
`
const template = /*html*/`
<div
  style="height: 100%; display: flex; justify-content: center; align-items: center">
  There are no messages in this thread
</div>`

lilComponent({
  name,
  template,
  hooks: {
    threadName: [function(name: string | undefined) {
      if (!name) {
        return
      }
      const thread = MessageThreadSingleton(name)
      thread.addEventListener("loadMessages", () => renderMessages(this, thread.messages))
      thread.addEventListener("sendMessage", ({ message, respond }: { message: Message, respond: Function}) => {
        renderMessages(this, thread.messages)
        setTimeout(() => {
          const response: Message = {
            sender: name,
            body: `This is a hardcoded response to "${message.body}"`,
            timestamp: new Date().toString()
          }
          respond(response)
        }, 4000)
      })
      thread.addEventListener("receiveMessage", () => renderMessages(this, thread.messages))
    }],
  }
})

function renderMessages(wrapper: HTMLElement, messages: Message[]) {
  wrapper.innerHTML = /*html*/`${style}<span class="spacer"></span>` + messages.map((message: Message) => {
    return /*html*/`
      <div class="message ${message.sender === "You" ? "right" : "left"}">
        <div class="message-body">${message.body}</div>
        <div class="timestamp">${message.timestamp.toString().split(" ")[4]}</div>
      </div>`
    }).join("")
  setTimeout(() => {
    wrapper.scrollTop = wrapper.scrollHeight + 1000000
  }, 10)
}