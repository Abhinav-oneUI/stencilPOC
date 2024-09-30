import type { Components, JSX } from "../types/components";

interface SecondaryButton extends Components.SecondaryButton, HTMLElement {}
export const SecondaryButton: {
    prototype: SecondaryButton;
    new (): SecondaryButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
