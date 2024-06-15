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
      // `00020126590014BR.GOV.BCB.PIX0128danielmariadasilva@gmail.com0205${this.item.title}5204000053039865405${this.item.price}.005802BR5921Daniel Maria da Silva6009SAO PAULO62140510gFcbW8wILf6304E84D`
      //  00020126330014BR.GOV.BCB.PIX0111007690170025204000053039865802BR5921Debora Maria da Silva6009SAO PAULO62140510LL1vbbDuSN63041934//
      `00769017002`
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

  redirecionarParaURL() {
    if (this.item && this.item.link) {
      window.open(this.item.link, '_blank');
    } else {
      console.error('URL não encontrada para o item selecionado.');
    }
  }

  messagemWhatsapp() {
    let textoWhatsapp = `Olá, Deca! Estou te presenteando com ${this.item.title} no valor de ${this.item.price}`;
    textoWhatsapp = textoWhatsapp.replaceAll(" ", "%20");
    const whatsappUrl = 'https://wa.me/5551993142141?text=' + textoWhatsapp;
    window.open(whatsappUrl, '_blank');
  }

  messagemWhatsappEnvio() {
    let textoWhatsapp = `Olá, Deca! Quero te presentear com ${this.item.title} e preciso do seu endereço para realizar a entrega.`;
    textoWhatsapp = textoWhatsapp.replaceAll(" ", "%20");
    const whatsappUrl = 'https://wa.me/5551993142141?text=' + textoWhatsapp;
    window.open(whatsappUrl, '_blank');
  }
}