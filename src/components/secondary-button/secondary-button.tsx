import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'secondary-button',
  styleUrl: 'secondary-button.css',
  shadow: true,
})
export class SecondaryButton {
  @Prop() label: string;
  @Prop() loader: boolean;
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

  render() {
    return (
      <button class="secondary-button" disabled={this.isDisabled} onClick={() => this.handleClick()}>
        {this.getLabel()}
      </button>
    );
  }
}
