import { Component, h } from "@stencil/core";

@Component({
  tag: "my-component"
})
export class MyComponent {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
