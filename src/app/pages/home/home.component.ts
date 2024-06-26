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
      sent: true,
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
      sent: true,
      link: 'https://www.amazon.com.br/dp/B0BXQM66XR?ref=cm_sw_r_mwn_dp_6W5E84CVH1M4MZCFM8T4&ref_=cm_sw_r_mwn_dp_6W5E84CVH1M4MZCFM8T4&social_share=cm_sw_r_mwn_dp_6W5E84CVH1M4MZCFM8T4&language=en_US&th=1',
      image: 'https://m.media-amazon.com/images/I/51c6OkPOPKL._AC_SL1000_.jpg',
    },
    {
      title: 'Jogo de Copos',
      description:
        'Jogo 6 Copo de vidro 360ml',
      price: 37,
      sent: true,
      link: 'https://www.magazineluiza.com.br/jogo-6-copo-de-vidro-casual-360ml-class-home/p/fkk1588ke9/ud/coco/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/jogo-6-copo-de-vidro-casual-360ml-class-home/lizpremium/1646-6/ee586267080518c701738880507b8243.jpeg',
    },
    {
      title: 'Airfryer',
      description:
        'Fritadeira Elétrica - 220V',
      price: 332,
      sent: true,
      link: 'https://www.magazineluiza.com.br/fritadeira-eletrica-sem-oleo-air-fryer-philips-walita-spectre-preta-41l/p/237973200/ep/efso/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/fritadeira-eletrica-sem-oleo-air-fryer-philips-walita-spectre-preta-41l/magazineluiza/237973200/a7a56cd18563cd190ff8e4afeb303613.jpg',
    },
    {
      title: 'Chaleira Elétrica',
      description:
        'Chaleira Elétrica Com Controle de Temperatura - 220v 2l',
      price: 136,
      sent: true,
      link: 'https://www.americanas.com.br/produto/5504370734/chaleira-eletrica-k2200-com-controle-de-temperatura-preta-220v-2-litros-black-decker?pfm_carac=chaleira-eletrica-controle-temperatura&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=62e1d24fadbc5f39b9f44e49&chave=b2wads_665dd049b3e3a80016eff8a6_21009346000120_5504370734_a22e1f24-eed7-4093-a9e9-e3d3dbb7a6d4',
      image:
        'https://images-americanas.b2w.io/produtos/5504370734/imagens/chaleira-eletrica-k2200-com-controle-de-temperatura-preta-220v-2-litros-black-decker/5504370734_2_xlarge.jpg',
    },
    {
      title: 'Processador',
      description:
        'Processador de Alimentos - 220V',
      price: 300,
      link: 'https://www.oster.com.br/processador-de-alimentos-oster-up-down-com-painel-touch/p',
      image:
        'https://jcsbrasil.vteximg.com.br/arquivos/ids/180256-1000-1000/OMPR550-04.jpg?v=637474402813470000',
    },
    {
      title: 'Cafeteira Nescafe',
      description:
        'Cafeteira Expresso Dolce Gusto - 220v',
      price: 420,
      sent: true,
      link: 'https://www.magazineluiza.com.br/cafeteira-nescafe-dolce-gusto-mini-me-preta-automatica-220v-nescafe-dolce-gusto/p/fak425ec29/ep/cfex/',
      image:
        'https://a-static.mlcdn.com.br/1500x1500/cafeteira-nescafe-dolce-gusto-mini-me-preta-automatica-110v-nescafe-dolce-gusto/nescafedolcegustooficial/57494976321fb14b8a56a98c28e3e784/d37d86c5f5c8e7b8d3d6763cc02ba1a6.jpeg',
    },
    {
      title: 'Liquidificador',
      description:
        'Liquidificador Philco 12 Velocidades 1200W - 220v',
      price: 115,
      sent: true,
      link: 'https://www.magazineluiza.com.br/liquidificador-philco-ph900-preto-com-filtro-12-velocidades-1200w/p/021749100/ep/lqac/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/liquidificador-philco-ph900-preto-com-filtro-12-velocidades-1200w/magazineluiza/021749100/187c83df39d333ecbf91e9f1e23b288e.jpg',
    },
    {
      title: 'Porta Bolo',
      description:
        'Porta Bolos Para Torta com Tampa',
      price: 55,
      sent: true,
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
      title: 'Forma de Silicone',
      description:
        'Forma Quadrada de Silicone para Air Fryer',
      price: 30,
      sent: true,
      link: 'https://www.amazon.com.br/dp/B0BPYT6NL2?ref=cm_sw_r_mwn_dp_B8YBGNTA63JHEDX3XB49&ref_=cm_sw_r_mwn_dp_B8YBGNTA63JHEDX3XB49&social_share=cm_sw_r_mwn_dp_B8YBGNTA63JHEDX3XB49&language=en_US',
      image: 'https://m.media-amazon.com/images/I/61t32B8aPCL._AC_SL1500_.jpg',
    },
    {
      title: 'Lixeira Embutir',
      description:
        'Lixeira Embutir Granito 5 Litros ',
      price: 134,
      link: 'https://www.magazineluiza.com.br/lixeira-embutir-granito-em-inox-5-litros-nao-enferruja-american-steel/p/kc590f73b1/cj/lixe/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/lixeira-embutir-granito-em-inox-5-litros-nao-enferruja-american-steel/eletrocubas/100-4/07750e4c9e1f454e9192fb91a51bd9a5.jpeg',
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
      title: 'Escova Privada',
      description:
        'Escova de Limpar Vaso Sanitário Privada',
      price: 40,
      link: 'https://www.magazineluiza.com.br/escova-de-limpar-vaso-sanitario-privada-aco-inox-escovinha-variedades4you/p/fj8c11bege/ud/esvs/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/escova-de-limpar-vaso-sanitario-privada-aco-inox-escovinha-variedades4you/variedades4you/15876821368/c10c3ef3a6402c0b34d31750b048aa6c.jpeg',
    },
    {
      title: 'Secador de Cabelo',
      description:
        'Secador de Cabelo GAMA - 220v',
      price: 222,
      sent: true,
      link: 'https://www.mercadolivre.com.br/secador-de-cabelo-gama-italy-new-lumina-red-3d-bechd0000002470-vermelho-220v/p/MLB18731956?product_trigger_id=MLB18731955&attributes=COLOR%3AVermelho%2CVOLTAGE%3A220V&quantity=1',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_985539-MLA48885229241_012022-F.webp',
    },
    {
      title: 'Jogo de Toalhas',
      description:
        'Jogo de Toalhas de Banho 4 Peças',
      price: 54,
      sent: true,
      link: 'https://www.magazineluiza.com.br/jogo-de-toalhas-de-banho-atlantica-delicata-garden-gengibre-4-pecas/p/220559300/cm/joto/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/jogo-de-toalhas-de-banho-atlantica-delicata-garden-gengibre-4-pecas/magazineluiza/220559300/234182fac69df5cfadd0e2eab31b6161.jpg',
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
      title: 'Organizadores',
      description:
        'Kit c/ 3 Caixas Organizadoras c/ Tampa',
      price: 65,
      sent: true,
      link: 'https://www.amazon.com.br/dp/B09F71JWLX?ref=cm_sw_r_mwn_dp_YDV4NQP568TJAPE8AD13&ref_=cm_sw_r_mwn_dp_YDV4NQP568TJAPE8AD13&social_share=cm_sw_r_mwn_dp_YDV4NQP568TJAPE8AD13&language=en_US',
      image: 'https://m.media-amazon.com/images/I/51nmB7PVXjL._AC_SL1200_.jpg',
    },
    {
      title: 'Organizador Talher',
      description:
        'Organizador Talher Cozinha Gaveta',
      price: 58,
      sent: true,
      link: 'https://produto.mercadolivre.com.br/MLB-3609808815-organizador-talher-cozinha-gaveta-escritorio-7-divisorias-_JM',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_864614-MLB74674770178_022024-F.webp',
    },
    {
      title: 'Mini Processador',
      description:
        'Mini Processador Triturador Mixer de Alimento Manual',
      price: 13,
      sent: true,
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
      sent: true,
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
      title: 'Garrafa',
      description:
        'Garrafinha de Aluminio Infantil',
      price: 40,
      link: 'https://www.amazon.com.br/dp/B08JXFHB77?ref=cm_sw_r_apan_dp_PKKECB8K3QJPYHSW8TTK&ref_=cm_sw_r_apan_dp_PKKECB8K3QJPYHSW8TTK&social_share=cm_sw_r_apan_dp_PKKECB8K3QJPYHSW8TTK&language=pt-BR&th=1',
      image: 'https://m.media-amazon.com/images/I/51bAnFjt+sS._AC_SL1000_.jpg',
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
      title: 'Potes de Vidro',
      description:
        'Jogo 4 Potes de Vidro Hermético Tampa 4 Travas 640ml',
      price: 53,
      sent: true;
      link: 'https://www.magazineluiza.com.br/jogo-4-potes-de-vidro-hermetico-marmita-tampa-4-travas-640ml-casa-linda/p/dd9a6ek93d/ud/poud/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/jogo-4-potes-de-vidro-hermetico-marmita-tampa-4-travas-640ml-casa-linda/donalaurautilidadesdomesticas/9905580976/264567d7833c18c63f0c009a55230bd1.jpeg',
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
      title: 'Tábua Churrasco',
      description:
        'Tábua de Churrasco',
      price: 46,
      sent: true,
      link: 'https://www.magazineluiza.com.br/tabua-para-corte-bamboo-50cm-x-30cm-mor/p/abj970feak/ud/cjxu/?partner_id=64068&utm_source=pdp&utm_medium=share',
      image: 'https://a-static.mlcdn.com.br/1500x1500/tabua-para-corte-bamboo-50cm-x-30cm-mor/morcasaelazer/786/5ecd2f2feaa363b77b1639aeb10148cc.jpeg',
    },
    {
      title: 'Gamela Madeira',
      description:
        'Gamela Madeira Bambu Churrasco',
      price: 125,
      sent: true,
      link: 'https://www.magazineluiza.com.br/gamela-bamboo-30cm-x-45cm-mor/p/gf4abje674/ud/gaml/?partner_id=64068&utm_source=pdp&utm_medium=share',
      image: 'https://a-static.mlcdn.com.br/1500x1500/gamela-bamboo-30cm-x-45cm-mor/morcasaelazer/790/33d5613bca89b76bdbd6550785479fc5.jpeg',
    },
    {
      title: 'Kit Espeto',
      description:
        'Kit Espeto Tradicional Cabo de Madeira',
      price: 190,
      link: 'https://espetogauchooficial.com.br/product/kit-espeto-c-cabo-tradicional/',
      image: 'https://espetogauchooficial.com.br/wp-content/uploads/2022/09/Sem-nome-1500-%C3%97-2000-px-1500-%C3%97-1500-px-4-1.png',
    },
    {
      title: 'Rodo Esfregão',
      description:
        'Rodo Mágico Esfregão Espuma',
      price: 72,
      link: 'https://www.magazineluiza.com.br/rodo-magico-esfregao-espuma-pva-original-com-1-refil-extra/p/hk749f92a7/ud/rodu/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/rodo-magico-esfregao-espuma-pva-original-com-1-refil-extra/vendasshop/27249p/9583a2c030540fe02e1b22643fa7bae6.jpeg',
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
      sent: true,
      link: 'https://www.magazineluiza.com.br/panela-de-pressao-rochedo-smart-antiaderente-fechamento-externo-76l/p/ag2776jghc/ud/udpp/',
      image: 'https://a-static.mlcdn.com.br/1500x1500/panela-de-pressao-rochedo-smart-antiaderente-fechamento-externo-76l/lojaslebiscuit/2147441014/fc0b4e5fbb97c056bef70e43d83817ff.jpeg',
    },
    {
      title: 'Panela Fondue',
      description:
        'Panela Elétrica para Fondue',
      price: 270,
      link: 'https://www.oster.com.br/panela-eletrica-para-fondue-oster-cinza/p',
      image: 'https://jcsbrasil.vteximg.com.br/arquivos/ids/196921-1000-1000/OFND100.2--chocolate.jpg?v=637829635896900000',
    },
    {
      title: 'Vale Tramontina',
      description:
        'Valor para compra de acessórios de cozinha na Loja Tramontina',
      price: 500,
      sent: true,
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
      title: 'Fogão Cooktop',
      description:
        'Fogão Cooktop Fischer Bivolt',
      price: 766,
      sent: true,
      link: 'https://www.amazon.com.br/dp/B07GWV5FCN?ref=cm_sw_r_mwn_dp_DPS6C5ZM9HPM2P1Z5Z3S&ref_=cm_sw_r_mwn_dp_DPS6C5ZM9HPM2P1Z5Z3S&social_share=cm_sw_r_mwn_dp_DPS6C5ZM9HPM2P1Z5Z3S&language=en_US',
      image: 'https://m.media-amazon.com/images/I/51ukbnnkxPL._AC_SL1000_.jpg',
    },
    {
      title: 'Micro-ondas',
      description:
        'Micro-ondas Philco 34L',
      price: 600,
      sent: true,
      link: 'https://www.philco.com.br/micro_ondas_philco_33_litros_espelhado/p?gad_source=1&gclid=Cj0KCQjw4MSzBhC8ARIsAPFOuyWEjydEWa86Iuo8L7tHe3L0uBRHElTQ3lLiEcGIQUDfxvydGFTUXPMaApXREALw_wcB&idsku=8957&skuId=8957',
      image: 'assets/images/microondas.png',
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
      price: 3500,
      donated: 1870,
      link: '',
      image: 'https://m.media-amazon.com/images/I/418W2M249EL._AC_SL1000_.jpg',
    },
  ];
}
