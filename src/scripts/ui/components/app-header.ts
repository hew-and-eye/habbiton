import { lilComponent } from "lil-framework"

const name = "app-header"

const template = /*html*/`
<style>
  app-header {
    grid-area: header;
    box-shadow: 0px 2px 8px 4px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    padding-left: 8px;
    background: #333;
    color: white;
    font-size: 1.2em;
    font-weight: 400;
    text-shadow: 3px 3px rgba(0, 255, 255, 0.5);
  }
</style>
Habbiton
`

lilComponent(
  {
    name,
    template
  }
)