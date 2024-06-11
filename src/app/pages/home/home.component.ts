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
        'Fritadeira Elétrica - 220V',
      price: 332,
      link: 'https://www.magazineluiza.com.br/fritadeira-eletrica-sem-oleo-air-fryer-philips-walita-spectre-preta-41l/p/237973200/ep/efso/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/fritadeira-eletrica-sem-oleo-air-fryer-philips-walita-spectre-preta-41l/magazineluiza/237973200/a7a56cd18563cd190ff8e4afeb303613.jpg',
    },
    {
      title: 'Chaleira Elétrica',
      description:
        'Chaleira Elétrica Com Controle de Temperatura - 220v 2l',
      price: 136,
      link: 'https://www.americanas.com.br/produto/5504370734/chaleira-eletrica-k2200-com-controle-de-temperatura-preta-220v-2-litros-black-decker?pfm_carac=chaleira-eletrica-controle-temperatura&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=62e1d24fadbc5f39b9f44e49&chave=b2wads_665dd049b3e3a80016eff8a6_21009346000120_5504370734_a22e1f24-eed7-4093-a9e9-e3d3dbb7a6d4',
      image:
        'https://images-americanas.b2w.io/produtos/5504370734/imagens/chaleira-eletrica-k2200-com-controle-de-temperatura-preta-220v-2-litros-black-decker/5504370734_2_xlarge.jpg',
    },
    {
      title: 'Mixer 3 em 1',
      description:
        'Mixer Mallory 3 em 1 Mixer, Processador e Batedor - 220V',
      price: 129,
      link: 'https://www.americanas.com.br/produto/7469438694/mixer-mallory-trikxer-pratic-3-em-1-mixer-processador-e-batedor-500w-branco-220v?pfm_carac=mixer&pfm_index=11&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=65e858dfcc55309385f75aec',
      image:
        'https://images-americanas.b2w.io/produtos/7469438694/imagens/mixer-mallory-trikxer-pratic-3-em-1-mixer-processador-e-batedor-500w-branco-220v/7469438694_1_xlarge.jpg',
    },
    {
      title: 'Cafeteira Nescafe',
      description:
        'Cafeteira Expresso Dolce Gusto - 220v',
      price: 420,
      link: 'https://www.magazineluiza.com.br/cafeteira-nescafe-dolce-gusto-mini-me-preta-automatica-220v-nescafe-dolce-gusto/p/fak425ec29/ep/cfex/',
      image:
        'https://a-static.mlcdn.com.br/1500x1500/cafeteira-nescafe-dolce-gusto-mini-me-preta-automatica-110v-nescafe-dolce-gusto/nescafedolcegustooficial/57494976321fb14b8a56a98c28e3e784/d37d86c5f5c8e7b8d3d6763cc02ba1a6.jpeg',
    },
    {
      title: 'Liquidificador',
      description:
        'Liquidificador Philco 12 Velocidades 1200W - 220v',
      price: 115,
      link: 'https://www.magazineluiza.com.br/liquidificador-philco-ph900-preto-com-filtro-12-velocidades-1200w/p/021749100/ep/lqac/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/liquidificador-philco-ph900-preto-com-filtro-12-velocidades-1200w/magazineluiza/021749100/187c83df39d333ecbf91e9f1e23b288e.jpg',
    },
    {
      title: 'Porta Tempero',
      description:
        'Porta Tempero Giratório Inox 16 Potes',
      price: 73,
      link: 'https://www.magazineluiza.com.br/porta-tempero-giratorio-inox-16-potes-quadrado-preto-dubai/p/agkj36j1e7/ud/port/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/porta-tempero-giratorio-inox-16-potes-quadrado-preto-dubai/dubaiimportadoraedistribuidora/842404/4492a3c76029620cf4833a6211d43491.jpeg',
    },
    {
      title: 'Utensílios de Cozinha',
      description:
        'Jogo Kit Com 12 Peças Utensílios De Cozinha',
      price: 48,
      link: 'https://www.magazineluiza.com.br/jogo-kit-com-12-pecas-utensilios-de-cozinha-colheres-espatulas-pegador-silicone-copo-suporte-prime/p/de7d9kc0ca/ud/cjtu/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/jogo-kit-com-12-pecas-utensilios-de-cozinha-colheres-espatulas-pegador-silicone-copo-suporte-prime/magaprimer/3714731ae92111ed96804201ac185033/f8bffb9ea1fd7873b17cdac291574cfb.jpeg',
    },
    {
      title: 'Jogo de Copos',
      description:
        'Jogo 6 Copo de vidro 360ml',
      price: 37,
      link: 'https://www.magazineluiza.com.br/jogo-6-copo-de-vidro-casual-360ml-class-home/p/fkk1588ke9/ud/coco/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/jogo-6-copo-de-vidro-casual-360ml-class-home/lizpremium/1646-6/ee586267080518c701738880507b8243.jpeg',
    },
    {
      title: 'Tábua de Churrasco',
      description:
        'Tábua De Churrasco Tramontina Em Madeira',
      price: 36,
      link: 'https://www.magazineluiza.com.br/tabua-de-churrasco-tramontina-em-madeira-com-acabamento-natural-28cm/p/ch9jch06h0/ud/tbpc/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/tabua-de-churrasco-tramontina-em-madeira-com-acabamento-natural-28cm/alfixshop/11806/44496f0e31c7ed20482def9f287daea8.jpeg',
    },
    {
      title: 'Vale Casa Maria',
      description:
        'Valor para compra de acessórios de cozinha na Loja Casa Maria',
      price: 350,
      link: 'https://bazarcasamaria.com.br/',
      image: 'assets/images/casa-maria.png',
    },
    {
      title: 'Porta Bolo',
      description:
        'Porta Bolos Para Torta com Tampa',
      price: 55,
      link: 'https://www.magazineluiza.com.br/porta-bolos-boleira-suporte-para-torta-com-tampa-tres-triangulos/p/eeg7d6086g/ud/bole/',
      image: 'https://a-static.mlcdn.com.br/800x560/porta-bolos-boleira-suporte-para-torta-com-tampa-tres-triangulos/tuberiascomercioltda/tb000042/0c6e009f9e220b6114554af4fa27b1f5.jpeg',
    },
    {
      title: 'Porta Pão',
      description:
        'Porta Pão de Forma Rocambole Torta Fria com Tampa',
      price: 60,
      link: 'https://www.magazineluiza.com.br/porta-pao-de-forma-rocambole-torta-fria-premium-com-tampa-uz-preto-uz-utilidades/p/bd71g26586/ud/popb/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/porta-pao-de-forma-rocambole-torta-fria-premium-com-tampa-uz-preto-uz-utilidades/zanlinebazareutensilios/7895155784355/18891bec934d3513c5b7e0bedc1c3822.jpeg',
    },
    {
      title: 'Lixeira Banheiro',
      description:
        'Lixeira Pedal Cesto Banheiro 12 Litros De Plástico',
      price: 43,
      link: 'https://www.magazineluiza.com.br/lixeira-pedal-cesto-cozinha-banheiro-12-litros-de-plastico-preto-home-utilities/p/ce2798g70b/ud/udli/',
      image: 'https://a-static.mlcdn.com.br/800x560/lixeira-pedal-cesto-cozinha-banheiro-12-litros-de-plastico-preto-home-utilities/spexpresscompany/00463/3533848df576bb4623a8ef3dbcc8f2a0.jpeg',
    },
    {
      title: 'Secador de Cabelo',
      description:
        'Secador de Cabelo Mondial 2000W - 220v',
      price: 96,
      link: 'https://www.magazineluiza.com.br/secador-de-cabelo-mondial-black-purple-scn-01-tourmaline-2000w-2-velocidades/p/227789600/pf/psec/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/secador-de-cabelo-mondial-black-purple-scn-01-tourmaline-2000w-2-velocidades/magazineluiza/227789600/f1f04dd2302f7c26f68a3e5d76f8565b.jpg',
    },
    {
      title: 'Jogo de Toalhas',
      description:
        'Jogo de Toalhas de Banho 4 Peças',
      price: 54,
      link: 'https://www.magazineluiza.com.br/jogo-de-toalhas-de-banho-atlantica-delicata-garden-gengibre-4-pecas/p/220559300/cm/joto/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/jogo-de-toalhas-de-banho-atlantica-delicata-garden-gengibre-4-pecas/magazineluiza/220559300/234182fac69df5cfadd0e2eab31b6161.jpg',
    },
    {
      title: 'Jogo Potes de Vidro',
      description:
        'Jogo 4 Potes de Vidro Hermético Tampa 4 Travas 640ml',
      price: 53,
      link: 'https://www.magazineluiza.com.br/jogo-4-potes-de-vidro-hermetico-marmita-tampa-4-travas-640ml-casa-linda/p/dd9a6ek93d/ud/poud/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/jogo-4-potes-de-vidro-hermetico-marmita-tampa-4-travas-640ml-casa-linda/donalaurautilidadesdomesticas/9905580976/264567d7833c18c63f0c009a55230bd1.jpeg',
    },
    {
      title: 'Aspirador de Pó',
      description:
        'Aspirador de Pó 2 em 1 Mondial 1100W - 220v',
      price: 350,
      link: 'https://www.magazineluiza.com.br/aspirador-de-po-2-em-1-mondial-1100w-turbo-cycle-ap-36-vermelho-e-preto/p/237623200/ep/eapa/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/aspirador-de-po-2-em-1-mondial-1100w-turbo-cycle-ap-36-vermelho-e-preto/magazineluiza/237623200/052909eec7320362ad423c783ffe0c3e.jpg',
    },
    {
      title: 'Vale Tramontina',
      description:
        'Valor para compra de acessórios de cozinha na Loja Tramontina',
      price: 500,
      link: 'https://tramontina.com.br/',
      image: 'assets/images/tramontina.png',
    },
  ];
}
