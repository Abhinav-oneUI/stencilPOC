/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PrimaryButton {
        "btnType": string;
        "label": string;
        "loader": boolean;
    }
    interface SecondaryButton {
        "label": string;
        "loader": boolean;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPrimaryButtonElement extends Components.PrimaryButton, HTMLStencilElement {
    }
    var HTMLPrimaryButtonElement: {
        prototype: HTMLPrimaryButtonElement;
        new (): HTMLPrimaryButtonElement;
    };
    interface HTMLSecondaryButtonElement extends Components.SecondaryButton, HTMLStencilElement {
    }
    var HTMLSecondaryButtonElement: {
        prototype: HTMLSecondaryButtonElement;
        new (): HTMLSecondaryButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "primary-button": HTMLPrimaryButtonElement;
        "secondary-button": HTMLSecondaryButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PrimaryButton {
        "btnType"?: string;
        "label"?: string;
        "loader"?: boolean;
    }
    interface SecondaryButton {
        "label"?: string;
        "loader"?: boolean;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "primary-button": PrimaryButton;
        "secondary-button": SecondaryButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "primary-button": LocalJSX.PrimaryButton & JSXBase.HTMLAttributes<HTMLPrimaryButtonElement>;
            "secondary-button": LocalJSX.SecondaryButton & JSXBase.HTMLAttributes<HTMLSecondaryButtonElement>;
        }
    }
}
