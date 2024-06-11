import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  readonly gifs = ['mel.gif', 'leo.jpeg', 'leo-comemorando.gif'];
  gifUrl = this.randomImage();

  firstScreen = true;
  sendMoney = false
  sendPresent = false

  @Output() onHide: EventEmitter<void> = new EventEmitter<void>();
  @Input() item: any;
  @Input() visible: boolean = false;

  randomImage() {
    return (
      'assets/gifs/' + this.gifs[Math.floor(Math.random() * this.gifs.length)]
    );
  }

  copyPix() {
    navigator.clipboard.writeText(
      `00020126590014BR.GOV.BCB.PIX0128danielmariadasilva@gmail.com0205${this.item.title}5204000053039865405${this.item.price}.005802BR5921Daniel Maria da Silva6009SAO PAULO62140510gFcbW8wILf6304E84D`
    );
    this.firstScreen = false;
  }

  hide() {
    this.firstScreen = true;
    this.visible = false;
    this.sendMoney = false
    this.sendPresent = false
    this.onHide.emit();
  }

  onChangeToSendMoney() {
    this.sendMoney = true
    this.sendPresent = false
  }

  onChangeToBuy() {
    this.sendMoney = false
    this.sendPresent = true

  }
}
