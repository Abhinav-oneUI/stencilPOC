import { r as registerInstance, h } from './index-839c33ab.js';
import { f as format } from './utils-11fcde98.js';

const secondaryButtonCss = ".secondary-button{background-color:gray;color:white;border:none;padding:10px 20px;font-size:16px;cursor:pointer;border-radius:5px}.secondary-button:hover{background-color:darkgray}.secondary-button:disabled,.secondary-button[disabled]{background-color:lightgray;color:white;cursor:not-allowed}";

const SecondaryButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = undefined;
        this.loader = undefined;
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
    render() {
        return (h("button", { key: 'dcecb9551985d7bd7dd4f72c6be137079a7cf48b', class: "secondary-button", disabled: this.isDisabled, onClick: () => this.handleClick() }, this.getLabel()));
    }
};
SecondaryButton.style = secondaryButtonCss;

export { SecondaryButton as secondary_button };

//# sourceMappingURL=secondary-button.entry.js.map