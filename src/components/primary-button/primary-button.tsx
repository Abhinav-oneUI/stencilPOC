import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'primary-button',
  styleUrl: 'primary-button.css',
  shadow: true,
})
export class PrimaryButton {
  @Prop() label: string;
  @Prop() loader: boolean;
  @Prop() btnType: string;
  @State() isDisabled: boolean = false;

  handleClick() {
    if (this.loader) {
      this.isDisabled = true;
      setTimeout(() => {
        this.isDisabled = false;
      }, 3000);
    }
  }

  private getLabel(): string {
    return format(this.label);
  }
  private getClass(): string {
    console.log('btnType',this.btnType);
    return this.btnType ? this.btnType : 'primary';
  }

  render() {
    return (
      <button class={`${this.getClass()}`} disabled={this.isDisabled} onClick={() => this.handleClick()}>
        {this.getLabel()}
      </button>
    );
  }
}
