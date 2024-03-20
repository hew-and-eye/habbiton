/**
 * Renders all messages in a thread.
 * Includes UI for sending messages from the user.
 * Emits events whenever the user sends a message.
 */

import { lilComponent } from "lil-framework"
import { bindAttribute, globalState } from "../../state/globalState"

const name = "messages-view"

const template = /*html*/`
  <style>
    messages-view {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 220 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E text %7B fill: %23999; font-size: 16px; font-family: VT323, monospace; %7D %3C/style%3E%3Ctext x='0' y='12'%3E(Select a conversation)%3C/text%3E%3C/svg%3E%0A");
      background-position: center;
      background-size: 200px 100px;
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
  <messages-list class="{{threadSelectedClass}}"></messages-list>
  <message-input class="{{threadSelectedClass}}"></message-input>
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
    selectedThread: [function(thread: string) {
      console.log("hmmmm", thread)
      this.state.threadSelectedClass = thread ? "thread-selected" : "no-thread-selected"
    }]
  }
})