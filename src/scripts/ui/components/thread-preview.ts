import { lilComponent } from "lil-framework"
import { globalState } from "../../state/globalState"
import { MessageThread } from "../../state/MessageThread"

const name = "thread-preview"

const template = /*html*/`
  <style>
    thread-preview {
      background: white;
      display: block;
      padding: 4px 8px;
      margin: 6px;
      border: 2px solid #aaa;
      border-bottom-width: 4px;
      border-left-width: 4px;
      border-radius: 6px;
      box-sizing: border-box;
      cursor: pointer;
      transition: border 0.2s;
    }
    thread-preview.is-selected {
      border-color: #777;
      border-top-width: 4px;
      border-right-width: 4px;
      border-bottom-width: 2px;
      border-left-width: 2px;
    }
    thread-preview:hover {
      border-color: #777;
    }
    .message-preview {
      color: #777;
      font-size: 0.8em;
    }
    .thread-name {
      color: #333;
      text-transform: uppercase;
    }
    thread-preview .message-preview {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 300px;
    }
  </style>
  <div class="thread-name">{{threadName}}</div>
  <div class="message-preview">{{messagePreview}}</div>
`

lilComponent({
  name,
  template,
  data: {
    thread: null,
    messagePreview: "loading..."
  },
  hooks: {
    mounted: [function() {
      this.addEventListener("click", () => {
        console.log("uh", this.state.threadName)
        globalState.selectedThread = this.state.threadName
        document.querySelector("thread-preview.is-selected")?.classList.remove("is-selected")
        this.classList.add("is-selected")
      })
    }],
    threadName: [async function(threadName: string) {
      // should get last message in thread and set preview
      console.log(`should get last message in ${threadName} and set preview`)
      if (threadName) {
        const thread = new MessageThread(threadName)
        await thread.initialized
        this.state.messagePreview = `"${thread.messages[thread.messages.length - 1]?.body}"`
      }
    }]
  }
})