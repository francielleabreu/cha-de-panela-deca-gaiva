import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  itens = [
    {
      title: 'Porta Temperos',
      description:
        'Porta Tempero Giratório Inox 16 Potes',
      price: 73,
      link: 'https://www.magazineluiza.com.br/porta-tempero-giratorio-inox-16-potes-quadrado-preto-dubai/p/agkj36j1e7/ud/port/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/porta-tempero-giratorio-inox-16-potes-quadrado-preto-dubai/dubaiimportadoraedistribuidora/842404/4492a3c76029620cf4833a6211d43491.jpeg',
    },
    {
      title: 'Utensílios Cozinha',
      description:
        'Jogo Kit Com 12 Peças Utensílios De Cozinha',
      price: 55,
      link: 'https://www.amazon.com.br/dp/B0BXQM66XR?ref=cm_sw_r_mwn_dp_6W5E84CVH1M4MZCFM8T4&ref_=cm_sw_r_mwn_dp_6W5E84CVH1M4MZCFM8T4&social_share=cm_sw_r_mwn_dp_6W5E84CVH1M4MZCFM8T4&language=en_US&th=1',
      image: 'https://m.media-amazon.com/images/I/51c6OkPOPKL._AC_SL1000_.jpg',
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
      title: 'Tábua Churrasco',
      description:
        'Tábua de Churrasco',
      price: 46,
      link: 'https://www.magazineluiza.com.br/tabua-para-corte-bamboo-50cm-x-30cm-mor/p/abj970feak/ud/cjxu/?partner_id=64068&utm_source=pdp&utm_medium=share',
      image: 'https://a-static.mlcdn.com.br/1500x1500/tabua-para-corte-bamboo-50cm-x-30cm-mor/morcasaelazer/786/5ecd2f2feaa363b77b1639aeb10148cc.jpeg',
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
      title: 'Potes de Vidro',
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
    {
      title: 'Vale Casa Maria',
      description:
        'Valor para compra de acessórios de cozinha na Loja Casa Maria',
      price: 300,
      link: 'https://bazarcasamaria.com.br/',
      image: 'assets/images/casa-maria.png',
    },
    {
      title: 'Organizadores',
      description:
        'Kit c/ 3 Caixas Organizadoras c/ Tampa',
      price: 65,
      link: 'https://www.amazon.com.br/dp/B09F71JWLX?ref=cm_sw_r_mwn_dp_YDV4NQP568TJAPE8AD13&ref_=cm_sw_r_mwn_dp_YDV4NQP568TJAPE8AD13&social_share=cm_sw_r_mwn_dp_YDV4NQP568TJAPE8AD13&language=en_US',
      image: 'https://m.media-amazon.com/images/I/51nmB7PVXjL._AC_SL1200_.jpg',
    },
    {
      title: 'Forma de Silicone',
      description:
        'Forma Quadrada de Silicone para Air Fryer',
      price: 30,
      link: 'https://www.amazon.com.br/dp/B0BPYT6NL2?ref=cm_sw_r_mwn_dp_B8YBGNTA63JHEDX3XB49&ref_=cm_sw_r_mwn_dp_B8YBGNTA63JHEDX3XB49&social_share=cm_sw_r_mwn_dp_B8YBGNTA63JHEDX3XB49&language=en_US',
      image: 'https://m.media-amazon.com/images/I/61t32B8aPCL._AC_SL1500_.jpg',
    },
    {
      title: 'Jogo de Facas',
      description:
        'Jogo Facas 6 Peças Tramontina',
      price: 80,
      link: 'https://www.amazon.com.br/dp/B07K32CH6K?ref=cm_sw_r_mwn_dp_4GZWZ6VRNKTMQJNJWPEN&ref_=cm_sw_r_mwn_dp_4GZWZ6VRNKTMQJNJWPEN&social_share=cm_sw_r_mwn_dp_4GZWZ6VRNKTMQJNJWPEN&language=en_US',
      image: 'https://m.media-amazon.com/images/I/518Y9L-71uL._AC_SL1000_.jpg',
    },
    {
      title: 'Mini Processador',
      description:
        'Mini Processador Triturador Mixer de Alimento Manual',
      price: 13,
      link: 'https://www.amazon.com.br/dp/B0B2QFX5SC?ref=cm_sw_r_mwn_dp_D2MYWA2QSQXNJTN96HPR&ref_=cm_sw_r_mwn_dp_D2MYWA2QSQXNJTN96HPR&social_share=cm_sw_r_mwn_dp_D2MYWA2QSQXNJTN96HPR&language=en_US',
      image: 'https://m.media-amazon.com/images/I/51Wh9sy5i6L._AC_SL1500_.jpg',
    },
    {
      title: 'Espátula Silicone',
      description:
        'Utensílios Espátula de Silicone',
      price: 13,
      link: 'https://www.amazon.com.br/dp/B07D1K5BVP?ref=cm_sw_r_mwn_dp_E00JJ9XBS656VQGA6FR0&ref_=cm_sw_r_mwn_dp_E00JJ9XBS656VQGA6FR0&social_share=cm_sw_r_mwn_dp_E00JJ9XBS656VQGA6FR0&language=en_US&th=1',
      image: 'https://m.media-amazon.com/images/I/31JsH9lpJ7L._AC_SL1000_.jpg',
    },
    {
      title: 'Descanso Panela',
      description:
        'Descanso Panela Bambu 6 unidades',
      price: 80,
      link: 'https://www.amazon.com.br/dp/B07XH4P2V9?ref=cm_sw_r_mwn_dp_TQA45WTJBS7A6WT3D5DJ&ref_=cm_sw_r_mwn_dp_TQA45WTJBS7A6WT3D5DJ&social_share=cm_sw_r_mwn_dp_TQA45WTJBS7A6WT3D5DJ&language=en_US&th=1',
      image: 'https://m.media-amazon.com/images/I/61Av50lZaNL._AC_SL1000_.jpg',
    },
    {
      title: 'Tesoura Cozinha',
      description:
        'Tesoura Inox para Cozinha ',
      price: 20,
      link: 'https://www.amazon.com.br/dp/B07QSB4WGQ?ref=cm_sw_r_mwn_dp_8PCN649XKN0ZE9PS6GTF_1&ref_=cm_sw_r_mwn_dp_8PCN649XKN0ZE9PS6GTF_1&social_share=cm_sw_r_mwn_dp_8PCN649XKN0ZE9PS6GTF_1&language=en_US',
      image: 'https://m.media-amazon.com/images/I/51kbkByBMGL._AC_SL1000_.jpg',
    },
    {
      title: 'Secador de Salada',
      description:
        'Secador De Salada 4 L ',
      price: 54,
      link: 'https://www.amazon.com.br/dp/B07CFW6DP2?ref=cm_sw_r_mwn_dp_8MJJE5JKTPTVX704NWWA&ref_=cm_sw_r_mwn_dp_8MJJE5JKTPTVX704NWWA&social_share=cm_sw_r_mwn_dp_8MJJE5JKTPTVX704NWWA&language=en_US',
      image: 'https://m.media-amazon.com/images/I/41+NvNgl76L._AC_SL1000_.jpg',
    },
    {
      title: 'Rolo para Massa',
      description:
        'Rolo Para Massa',
      price: 16,
      link: 'https://www.amazon.com.br/dp/B07F8LF79X?ref=cm_sw_r_mwn_dp_QJY1VQBZ1W84GFNAYFG2&ref_=cm_sw_r_mwn_dp_QJY1VQBZ1W84GFNAYFG2&social_share=cm_sw_r_mwn_dp_QJY1VQBZ1W84GFNAYFG2&language=en_US',
      image: 'assets/images/rolo-massa.png',
    },
    {
      title: 'Amassador',
      description:
        'Amassador de Batatas',
      price: 36,
      link: 'https://www.amazon.com.br/dp/B074HR9K2S?ref=cm_sw_r_mwn_dp_CSVMHDK50FB452FVGHNN&ref_=cm_sw_r_mwn_dp_CSVMHDK50FB452FVGHNN&social_share=cm_sw_r_mwn_dp_CSVMHDK50FB452FVGHNN&language=en_US',
      image: 'https://m.media-amazon.com/images/I/410EIT-JTRS._AC_SL1181_.jpg',
    },
    {
      title: 'Jogo Peneiras',
      description:
        'Jogo 3 peneiras em Aço Kit',
      price: 40,
      link: 'https://www.amazon.com.br/dp/B0CX26T7KZ?ref=cm_sw_r_mwn_dp_2FBNZ7ZP2B5PJDJ9K861&ref_=cm_sw_r_mwn_dp_2FBNZ7ZP2B5PJDJ9K861&social_share=cm_sw_r_mwn_dp_2FBNZ7ZP2B5PJDJ9K861&language=en_US',
      image: 'https://m.media-amazon.com/images/I/61UbDELFHfL._AC_SL1200_.jpg',
    },
    {
      title: 'Kit Potes Plásticos',
      description:
        'Kit Fácil com 10 Potes Plásticos Quadrados 530ml',
      price: 47,
      link: 'https://www.amazon.com.br/dp/B0C4LW7VTY?ref=cm_sw_r_mwn_dp_ASRQWQW5A1FQHZ4KVVPZ&ref_=cm_sw_r_mwn_dp_ASRQWQW5A1FQHZ4KVVPZ&social_share=cm_sw_r_mwn_dp_ASRQWQW5A1FQHZ4KVVPZ&language=en_US',
      image: 'https://m.media-amazon.com/images/I/61N2YZf3I6L._AC_SX679_.jpg',
    },
    {
      title: 'Kit Potes Plásticos',
      description:
        'Kit Fácil com 10 Potes Plásticos Retangulares de 280ml',
      price: 38,
      link: 'https://www.amazon.com.br/dp/B0C4LSZTW9?ref=cm_sw_r_mwn_dp_7SXTXNTGWBEM1GDVH4RN&ref_=cm_sw_r_mwn_dp_7SXTXNTGWBEM1GDVH4RN&social_share=cm_sw_r_mwn_dp_7SXTXNTGWBEM1GDVH4RN&language=en_US',
      image: 'https://m.media-amazon.com/images/I/61Kt4+lfmPL._AC_SL1500_.jpg',
    },
    {
      title: 'Kit Potes Plásticos',
      description:
        'Conjunto com 6 Potes Plásticos Herméticos 785ml',
      price: 39,
      link: 'https://www.amazon.com.br/dp/B0BD8Z2W4S?ref=cm_sw_r_mwn_dp_FTDQTW6SKNE4QHSBA5AE&ref_=cm_sw_r_mwn_dp_FTDQTW6SKNE4QHSBA5AE&social_share=cm_sw_r_mwn_dp_FTDQTW6SKNE4QHSBA5AE&language=en_US&th=1',
      image: 'https://m.media-amazon.com/images/I/61-+Nb10SGL._AC_SL1200_.jpg',
    },
    {
      title: 'Gamela Madeira',
      description:
        'Gamela Madeira Bambu Churrasco',
      price: 125,
      link: 'https://www.magazineluiza.com.br/gamela-bamboo-30cm-x-45cm-mor/p/gf4abje674/ud/gaml/?partner_id=64068&utm_source=pdp&utm_medium=share',
      image: 'https://a-static.mlcdn.com.br/1500x1500/gamela-bamboo-30cm-x-45cm-mor/morcasaelazer/790/33d5613bca89b76bdbd6550785479fc5.jpeg',
    },
    {
      title: 'Cesto Prendedores',
      description:
        'Cesto de Prendedores de roupa Compact, 48 Peças',
      price: 29,
      link: 'https://www.amazon.com.br/dp/B07JCN8JBZ?ref=cm_sw_r_apan_dp_HMV8780CTA7S0PQ10MK6&ref_=cm_sw_r_apan_dp_HMV8780CTA7S0PQ10MK6&social_share=cm_sw_r_apan_dp_HMV8780CTA7S0PQ10MK6&language=pt-BR',
      image: 'https://m.media-amazon.com/images/I/716I4qRqtqL._AC_SL1500_.jpg',
    },
    {
      title: 'Varal Roupas',
      description:
        'Varal Roupas Íntimas 26 Prendedores Dobrável',
      price: 26,
      link: 'https://www.amazon.com.br/dp/B07D9T8SCG?ref=cm_sw_r_apan_dp_PB1G121Z6THFDNE1QRE3&ref_=cm_sw_r_apan_dp_PB1G121Z6THFDNE1QRE3&social_share=cm_sw_r_apan_dp_PB1G121Z6THFDNE1QRE3&language=pt-BR',
      image: 'https://m.media-amazon.com/images/I/51pyklfUgwL._AC_SL1000_.jpg',
    },
    {
      title: 'Varal de Chão',
      description:
        'Varal de Chão Dobrável 3 Andares',
      price: 79,
      link: 'https://www.amazon.com.br/dp/B01C3O0EBK?ref=cm_sw_r_apan_dp_65MJXS1W321XQEPVYD12&ref_=cm_sw_r_apan_dp_65MJXS1W321XQEPVYD12&social_share=cm_sw_r_apan_dp_65MJXS1W321XQEPVYD12&language=pt-BR',
      image: 'https://m.media-amazon.com/images/I/51At0Jhy7qL._AC_SL1080_.jpg',
    },
    {
      title: 'Panela Pressao',
      description:
        'Panela de Pressão 7,6L',
      price: 198,
      link: 'https://www.magazineluiza.com.br/panela-de-pressao-rochedo-smart-antiaderente-fechamento-externo-76l/p/ag2776jghc/ud/udpp/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/panela-de-pressao-rochedo-smart-antiaderente-fechamento-externo-76l/lojaslebiscuit/2147441014/fc0b4e5fbb97c056bef70e43d83817ff.jpeg',
    },
    {
      title: 'Garrafa',
      description:
        'Garrafinha de Aluminio Infantil',
      price: 40,
      link: 'https://www.amazon.com.br/dp/B08JXFHB77?ref=cm_sw_r_apan_dp_PKKECB8K3QJPYHSW8TTK&ref_=cm_sw_r_apan_dp_PKKECB8K3QJPYHSW8TTK&social_share=cm_sw_r_apan_dp_PKKECB8K3QJPYHSW8TTK&language=pt-BR&th=1',
      image: 'https://m.media-amazon.com/images/I/51bAnFjt+sS._AC_SL1000_.jpg',
    },
    {
      title: 'Fogão Cooktop',
      description:
        'Fogão Cooktop Fischer Bivolt',
      price: 766,
      link: 'https://www.amazon.com.br/dp/B07GWV5FCN?ref=cm_sw_r_mwn_dp_DPS6C5ZM9HPM2P1Z5Z3S&ref_=cm_sw_r_mwn_dp_DPS6C5ZM9HPM2P1Z5Z3S&social_share=cm_sw_r_mwn_dp_DPS6C5ZM9HPM2P1Z5Z3S&language=en_US',
      image: 'https://m.media-amazon.com/images/I/51ukbnnkxPL._AC_SL1000_.jpg',
    },
    {
      title: 'Forno Elétrico',
      description:
        'Forno Elétrico Fischer Embutir 44L',
      price: 1080,
      link: 'https://www.amazon.com.br/dp/B07JH9NBHH?ref=cm_sw_r_mwn_dp_5RN4PWWPSCH3ETKSQ68B&ref_=cm_sw_r_mwn_dp_5RN4PWWPSCH3ETKSQ68B&social_share=cm_sw_r_mwn_dp_5RN4PWWPSCH3ETKSQ68B&language=en_US&th=1',
      image: 'https://m.media-amazon.com/images/I/411iIpKAHGL._AC_SL1000_.jpg',
    },
    {
      title: 'Vaquinha para Geladeira',
      description:
        'Ajude com o valor de sua preferência para a compra da geladeira',
      price: '',
      link: '',
      image: 'https://m.media-amazon.com/images/I/418W2M249EL._AC_SL1000_.jpg',
    },
  ];
}
