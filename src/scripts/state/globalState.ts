// @ts-ignore
import { stateObject } from "lil-framework/dist/stateObject";

export const globalState = stateObject(
  {},
  {
    data: {
      apiToken: window.localStorage.getItem("habbiton_apiToken"),
      threadNames: JSON.parse(window.localStorage.getItem("habbiton_threads")) || ["Narrator"],
      selectedThread: window.localStorage.getItem("habbiton_selectedThread")
    }
  }
)

export function bindAttribute(el: HTMLElement, key: string) {
  console.log("yuh", el, key)
  globalState.addHook(key, (newVal: any) => {
    console.log("bruh", key, newVal)
    el.setAttribute(key, newVal)
  })
}