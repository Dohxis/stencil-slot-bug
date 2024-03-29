/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {}
  interface MySlot {
    'name': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMySlotElement extends Components.MySlot, HTMLStencilElement {}
  var HTMLMySlotElement: {
    prototype: HTMLMySlotElement;
    new (): HTMLMySlotElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'my-slot': HTMLMySlotElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {}
  interface MySlot extends JSXBase.HTMLAttributes<HTMLMySlotElement> {
    'name': string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'my-slot': MySlot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


