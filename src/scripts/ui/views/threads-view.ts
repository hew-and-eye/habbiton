/**
 * Renders a preview of all available threads (e.g., thread name, most recent message, etc).
 * Emits an event when the user clicks on a thread.
 */

import { lilComponent } from "lil-framework"
import { globalState } from "../../state/globalState"

const name = "threads-view"

const template = /*html*/``

lilComponent({
  name,
  template,
  data: {
    threadNames: [],
  },
  hooks: {
    mounted: [function() {
      console.log("List of threads????", globalState.threadNames)
      this.state.threadNames = globalState.threadNames
    }],
    threadNames: [function(threadNames: string[]) {
      console.log("Should display a list of threads")
      this.innerHTML = ""
      threadNames.forEach(name => {
        const previewEl = document.createElement("thread-preview")
        previewEl.setAttribute("threadName", name)
        this.appendChild(previewEl)
      })
    }]
  }
})