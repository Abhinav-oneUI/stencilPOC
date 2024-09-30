import type { Components, JSX } from "../types/components";

interface PrimaryButton extends Components.PrimaryButton, HTMLElement {}
export const PrimaryButton: {
    prototype: PrimaryButton;
    new (): PrimaryButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
