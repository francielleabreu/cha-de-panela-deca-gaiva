import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  itens = [
    {
      title: 'Airfryer',
      description:
        'Fritadeira Elétrica Sem Óleo Air Fryer Mondial Family AFN40FB 4 L – Preta',
      price: 284,
      link: 'https://www.casasbahia.com.br/fritadeira-eletrica-sem-oleo-air-fryer-mondial-family-afn40fb-4-l-preta/p/55043353?utm_campaign=DescontoEspecial&utm_medium=BuscaOrganica&utm_source=Google',
      image: 'https://imgs.casasbahia.com.br/55043353/1g.jpg',
    },
    {
      title: 'Chaleira Elétrica',
      description:
        'Chaleira Elétrica K2200 Com Controle de Temperatura Preta 220v 2 Litros Black + decker',
      price: 136,
      link: 'https://www.americanas.com.br/produto/5504370734/chaleira-eletrica-k2200-com-controle-de-temperatura-preta-220v-2-litros-black-decker?pfm_carac=chaleira-eletrica-controle-temperatura&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=62e1d24fadbc5f39b9f44e49&chave=b2wads_665dd049b3e3a80016eff8a6_21009346000120_5504370734_a22e1f24-eed7-4093-a9e9-e3d3dbb7a6d4',
      image:
        'https://images-americanas.b2w.io/produtos/5504370734/imagens/chaleira-eletrica-k2200-com-controle-de-temperatura-preta-220v-2-litros-black-decker/5504370734_2_xlarge.jpg',
    },
    {
      title: 'Mixer 3v em 1',
      description:
        'Mixer Mallory Trikxer Pratic 3 em 1 Mixer, Processador e Batedor 500W Branco - 220V',
      price: 129,
      link: 'https://www.americanas.com.br/produto/7469438694/mixer-mallory-trikxer-pratic-3-em-1-mixer-processador-e-batedor-500w-branco-220v?pfm_carac=mixer&pfm_index=11&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=65e858dfcc55309385f75aec',
      image:
        'https://images-americanas.b2w.io/produtos/7469438694/imagens/mixer-mallory-trikxer-pratic-3-em-1-mixer-processador-e-batedor-500w-branco-220v/7469438694_1_xlarge.jpg',
    },
    {
      title: 'Dolce Gusto',
      description:
        'Cafeteira Expresso Dolce Gusto Mini Me Preta/Vermelha - Arno',
      price: 420,
      link: 'https://www.americanas.com.br/produto/130321195/cafeteira-expresso-dolce-gusto-mini-me-preta-vermelha-arno?pfm_carac=dulve-gusto&pfm_index=9&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=654bbc50cc553093853ee460&voltagem=220V&condition=NEW',
      image:
        'https://images-americanas.b2w.io/produtos/130321195/imagens/cafeteira-expresso-dolce-gusto-mini-me-preta-vermelha-arno/130321195_2_xlarge.jpg',
    },
  ];
}
