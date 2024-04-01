import { lilComponent } from "lil-framework"

const name = "message-input"

const template = /*html*/`<input lfhandle="handleEnter:keyup" lfbind="message:input" placeholder="Write something"/>`

lilComponent({
  name,
  template,
  handlers: {
    handleEnter(event: KeyboardEvent) {
      if (event.key === "Enter") {
        this.dispatchEvent(new CustomEvent("sendMessage", { detail: this.state.message }))
        setTimeout(() => {
          (event.target as HTMLInputElement).value = ""
        }, 0)
      }
    }
  }
})