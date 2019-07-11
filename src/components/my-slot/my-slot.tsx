import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "my-slot"
})
export class MySlot {
  @Prop() name!: string;

  render() {
    return <div>{this.name}</div>;
  }
}
