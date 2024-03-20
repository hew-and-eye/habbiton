import { lilComponent } from "lil-framework"
import { globalState } from "../../state/globalState"

const name = "thread-preview"

const template = /*html*/`
  <style>
    thread-preview {
      display: block;
      padding: 8px;
      border-bottom: 1px solid #aaa;
      box-sizing: border-box;
      width: 100%;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    thread-preview.is-selected {
      background-color: #f0f0f0;
    }
    thread-preview:hover {
      background-color: #f4f4f4;
    }
    .message-preview {
      color: #777;
    }
    .thread-name {
      color: #333;
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
    threadName: [function(threadName: string) {
      // should get last message in thread and set preview
      console.log(`should get last message in ${threadName} and set preview`)
    }]
  }
})