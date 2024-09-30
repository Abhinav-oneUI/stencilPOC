import { r as registerInstance, h } from './index-839c33ab.js';
import { f as format } from './utils-11fcde98.js';

const primaryButtonCss = ".primary-button{background-color:orange;color:white;border:none;padding:10px 20px;font-size:16px;cursor:pointer;border-radius:5px}.primary-button:hover{background-color:darkorange}.primary-button:disabled,.primary-button[disabled]{background-color:black;color:white;cursor:not-allowed}.secondary-button{background-color:gray;color:white;border:none;padding:10px 20px;font-size:16px;cursor:pointer;border-radius:5px}.secondary-button:hover{background-color:darkgray}.secondary-button:disabled,.secondary-button[disabled]{background-color:lightgray;color:white;cursor:not-allowed}";

const PrimaryButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = undefined;
        this.loader = undefined;
        this.btnType = undefined;
        this.isDisabled = false;
    }
    handleClick() {
        if (this.loader) {
            this.isDisabled = true;
            setTimeout(() => {
                this.isDisabled = false;
            }, 3000);
        }
    }
    getLabel() {
        return format(this.label);
    }
    getClass() {
        console.log('btnType', this.btnType);
        return this.btnType ? this.btnType : 'primary';
    }
    render() {
        return (h("button", { key: '0dd9c1d0daa29f9a8c06d68d103e2229ef32c302', class: `${this.getClass()}`, disabled: this.isDisabled, onClick: () => this.handleClick() }, this.getLabel()));
    }
};
PrimaryButton.style = primaryButtonCss;

export { PrimaryButton as primary_button };

//# sourceMappingURL=primary-button.entry.js.map