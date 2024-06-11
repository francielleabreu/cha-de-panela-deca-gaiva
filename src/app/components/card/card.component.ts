import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item: any;
  visible = false;

  showDialog() {
    this.visible = true;
  }

  onDialogHide() {
    this.visible = false;
  }

  //https://wa.me/31625303414?text=olateste
}
