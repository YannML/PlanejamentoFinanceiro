let DIV_content_types_invest = document.getElementById("content_types_invest");

function clearContent_types_invest()
{
    DIV_content_types_invest.innerText = " ";
}

window.addEventListener("load", () => {
    loadTXT();
  });

function loadTXT(){
    planejamento_txt();
}

function planejamento_txt(){
    clearContent_types_invest();

    p1 = document.createElement("p");
    p2 = document.createElement("p");
    p3 = document.createElement("p");
    p4 = document.createElement("p");
    p5 = document.createElement("p");
    p5 = document.createElement("p");

    paragrafo = document.createTextNode("Ao analisar seu saldo financeiro e considerando suas metas de investimento, gostaria de compartilhar um planejamento que pode se alinhar aos seus objetivos financeiros.");
    p1.appendChild(paragrafo);
    paragrafo = document.createTextNode("Sugiro considerar a diversificação do seu portfólio através de uma combinação de investimentos. A alocação em ativos de renda fixa pode proporcionar estabilidade, enquanto a inclusão de ativos de renda variável pode oferecer oportunidades de crescimento a longo prazo.");
    p2.appendChild(paragrafo); 
    paragrafo = document.createTextNode("Além disso, explorar opções como Fundos de Investimento Imobiliário (FIIs) ou Exchange-Traded Funds (ETFs) pode adicionar uma camada adicional de diversificação, aproveitando oportunidades em setores específicos do mercado.");
    p3.appendChild(paragrafo); 
    paragrafo = document.createTextNode("Lembre-se, qualquer decisão de investimento deve ser tomada com base em uma compreensão sólida de seus objetivos, tolerância ao risco e horizonte de investimento. Recomendo discutir estas opções com um consultor financeiro para garantir que suas escolhas estejam alinhadas com sua situação financeira e metas.");
    p4.appendChild(paragrafo); 
    paragrafo = document.createTextNode("45% Reserva, 25% Investimentos...");
    p5.appendChild(paragrafo);                 
    
    DIV_content_types_invest.appendChild(p1);
    DIV_content_types_invest.appendChild(p2);
    DIV_content_types_invest.appendChild(p3);
    DIV_content_types_invest.appendChild(p4);
    DIV_content_types_invest.appendChild(p5);
    
    document.getElementById("PS").className="active";
    document.getElementById("RF").className="";
    document.getElementById("AS").className="";
    document.getElementById("BS").className="";
    document.getElementById("FS").className="";
    document.getElementById("ES").className="";
    document.getElementById("CM").className="";

    DIV_content_types_invest.scrollTo({
        top:0,
        behavior:"smooth",
    });
    
    //Gráfico
    graph = document.createElement("div");
    graph.setAttribute("id","chartdiv");
    DIV_content_types_invest.appendChild(graph);
    am5.ready(function() {

        // Create root and chart
        var root = am5.Root.new("chartdiv");
        
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        var chart = root.container.children.push( 
          am5percent.PieChart.new(root, {
            layout: root.verticalLayout
          }) 
        );
        
        // Create series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: "percent",
            categoryField: "type",
            fillField: "color",
            alignLabels: false
          })
        );
        
        series.slices.template.set("templateField", "sliceSettings");
        series.labels.template.set("radius", 10);
        
        // Set up click events
        series.slices.template.events.on("click", function(event) {
          console.log(event.target.dataItem.dataContext)
          if (event.target.dataItem.dataContext.id != undefined) {
            selected = event.target.dataItem.dataContext.id;
          } else {
            selected = undefined;
          }
          series.data.setAll(generateChartData());
        });
        
        // Define data
        var selected;
        var types = [{
          type: "Reserva",
          percent: 45,
          color: series.get("colors").getIndex(0),
          subs: [{
            type: "Tesouro direto IPCA+",
            percent: 25
          }, {
            type: "CDB",
            percent: 20
          },]
            }, {
          type: "Investimentos",
          percent: 25,
          color: series.get("colors").getIndex(1),
          subs: [{
            type: "FIIs",
            percent: 12
          }, {
            type: "Ações",
            percent: 7
          }, {
            type: "BDRs",
            percent: 3
          }, {
            type: "ETFs",
            percent: 2
          }, {
            type: "Criptomoedas",
            percent: 1
          }]
            }, {
            type: "Pessoal",
            percent: 30,
            color: series.get("colors").getIndex(2),
            subs: [{
              type: "Dia a dia",
              percent: 20
            }, {
              type: "Mimos",
              percent: 10
            },]
        }
        ];
        series.data.setAll(generateChartData());
        
        
        function generateChartData() {
          var chartData = [];
          for (var i = 0; i < types.length; i++) {
            if (i == selected) {
              for (var x = 0; x < types[i].subs.length; x++) {
                chartData.push({
                  type: types[i].subs[x].type,
                  percent: types[i].subs[x].percent,
                  color: types[i].color,
                  pulled: true,
                  sliceSettings: {
                    active: true
                  }
                });
              }
            } else {
              chartData.push({
                type: types[i].type,
                percent: types[i].percent,
                color: types[i].color,
                id: i
              });
            }
          }
          return chartData;
        }
        
    }); // end am5.ready()
}

function rendafixa_txt(){
    clearContent_types_invest();

    p1 = document.createElement("p");
    p2 = document.createElement("p");
    p3 = document.createElement("p");
    p4 = document.createElement("p");
    p5 = document.createElement("p");
    p6 = document.createElement("p");
    p7 = document.createElement("p");
    p8 = document.createElement("p");

    paragrafo = document.createTextNode("Renda fixa é uma categoria de investimentos onde o investidor conhece, no momento da aplicação, as condições de remuneração ou os critérios para sua obtenção. Em outras palavras, é um tipo de investimento em que a rentabilidade ou a forma de cálculo são previamente estabelecidas.Existem diversos produtos de renda fixa, sendo alguns dos mais comuns:");
    p1.appendChild(paragrafo);

    paragrafo = document.createTextNode("Títulos Públicos: São emitidos pelo governo federal e podem ser adquiridos por meio do Tesouro Direto. Exemplos incluem o Tesouro Selic, Tesouro IPCA, entre outros.");
    p2.appendChild(paragrafo);

    paragrafo = document.createTextNode("CDB (Certificado de Depósito Bancário): São emitidos por bancos para captar recursos. O investidor empresta dinheiro ao banco por um período determinado e, em troca, recebe juros.");
    p3.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("LCI (Letra de Crédito Imobiliário) e LCA (Letra de Crédito do Agronegócio): São títulos emitidos por instituições financeiras para financiar setores específicos (imobiliário e agronegócio, respectivamente). São isentos de Imposto de Renda para pessoas físicas.");
    p4.appendChild(paragrafo);

    paragrafo = document.createTextNode("Debêntures: São títulos de dívida emitidos por empresas para captar recursos. Quem investe em debêntures, na prática, está emprestando dinheiro para a empresa emissora.");
    p5.appendChild(paragrafo);

    paragrafo = document.createTextNode( "Letras de Câmbio: São títulos emitidos por financeiras para captar recursos. Funcionam de maneira semelhante aos CDBs.");
    p6.appendChild(paragrafo);

    paragrafo = document.createTextNode("A principal característica da renda fixa é a previsibilidade de retorno. O investidor, ao aplicar seu dinheiro nesses ativos, geralmente sabe quanto irá receber no final do período de investimento. Isso a torna uma opção mais conservadora em comparação com a renda variável, onde os retornos não são predefinidos e podem variar significativamente.");
    p7.appendChild(paragrafo);

    paragrafo = document.createTextNode("É importante destacar que, embora a renda fixa seja considerada mais segura em comparação com a renda variável, ela também está sujeita a riscos, como o risco de crédito (possibilidade de a instituição não honrar seus compromissos) e o risco de mercado (mudanças nas taxas de juros, por exemplo).Antes de investir, é sempre aconselhável buscar orientação financeira e entender bem as características e riscos dos produtos de renda fixa disponíveis no mercado.");
    p8.appendChild(paragrafo);                
    
    DIV_content_types_invest.appendChild(p1);
    DIV_content_types_invest.appendChild(p2);
    DIV_content_types_invest.appendChild(p3);
    DIV_content_types_invest.appendChild(p4);
    DIV_content_types_invest.appendChild(p5);
    DIV_content_types_invest.appendChild(p6);
    DIV_content_types_invest.appendChild(p7);
    DIV_content_types_invest.appendChild(p8);

    document.getElementById("RF").className="active";
    document.getElementById("AS").className="";
    document.getElementById("BS").className="";
    document.getElementById("FS").className="";
    document.getElementById("ES").className="";
    document.getElementById("CM").className="";

    DIV_content_types_invest.scrollTo({
        top:0,
        behavior:"smooth",
    });
}

function acoes_txt(){
    clearContent_types_invest();
    p1 = document.createElement("p");
    p3 = document.createElement("p");
    p4 = document.createElement("p");
    p5 = document.createElement("p");
    p6 = document.createElement("p");
    p7 = document.createElement("p");
    p8 = document.createElement("p");
    p9 = document.createElement("p");
    p10 = document.createElement("p");
    p11 = document.createElement("p");
    p12 = document.createElement("p");

    paragrafo = document.createTextNode("Ações representam uma forma de propriedade em uma empresa. Quando você compra ações de uma empresa, torna-se acionista e, portanto, detentor de uma parcela do capital da empresa. As ações são negociadas em bolsas de valores, onde os investidores podem comprá-las e vendê-las.Principais Conceitos:");
    p1.appendChild(paragrafo);

    paragrafo = document.createTextNode("Acionista: Pessoa que possui ações de uma empresa. Os acionistas têm direitos proporcionais à quantidade de ações que possuem.");
    p3.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Dividendos: Algumas empresas distribuem parte de seus lucros aos acionistas na forma de dividendos. Isso representa uma fonte de renda para os detentores de ações.");
    p4.appendChild(paragrafo);

    paragrafo = document.createTextNode("Valorização e Desvalorização: O preço das ações pode variar com base em vários fatores, como desempenho financeiro da empresa, condições econômicas e eventos do mercado. A valorização das ações pode resultar em lucro para os investidores.");
    p5.appendChild(paragrafo);

    paragrafo = document.createTextNode("Risco e Retorno: Investir em ações envolve riscos, pois os preços podem flutuar. No entanto, historicamente, o mercado de ações tem proporcionado retornos significativos a longo prazo.");
    p6.appendChild(paragrafo);

    paragrafo = document.createTextNode( "Índices de Ações: Indicadores como o Ibovespa no Brasil ou o S&P 500 nos Estados Unidos representam o desempenho médio de um grupo de ações e são usados para avaliar o mercado como um todo.");
    p7.appendChild(paragrafo);

    paragrafo = document.createTextNode("Oferta e Demanda: O preço das ações é influenciado pela oferta e demanda no mercado. Se há mais compradores do que vendedores, os preços tendem a subir, e vice-versa.");
    p8.appendChild(paragrafo);

    paragrafo = document.createTextNode("Como Investir em Ações:");
    p9.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Corretora de Valores: Para comprar ações, é necessário abrir uma conta em uma corretora de valores. Elas atuam como intermediárias entre o investidor e o mercado de ações.");
    p10.appendChild(paragrafo);  

    paragrafo = document.createTextNode("Análise: Antes de investir, muitos investidores realizam análises fundamentalistas (avaliando a saúde financeira da empresa) e técnica (analisando gráficos de preços) para tomar decisões informadas.");
    p11.appendChild(paragrafo);  

    paragrafo = document.createTextNode("Diversificação: Diversificar investimentos em diferentes setores e empresas ajuda a reduzir o risco. Isso significa não colocar todo o seu dinheiro em uma única ação.Investir em ações pode ser emocionante e oferecer a oportunidade de crescimento significativo, mas é importante estar ciente dos riscos envolvidos e ter uma estratégia bem definida. Consultar um profissional financeiro é sempre recomendado, especialmente para quem está começando.");
    p12.appendChild(paragrafo);  
    
    DIV_content_types_invest.appendChild(p1);
    DIV_content_types_invest.appendChild(p3);
    DIV_content_types_invest.appendChild(p4);
    DIV_content_types_invest.appendChild(p5);
    DIV_content_types_invest.appendChild(p6);
    DIV_content_types_invest.appendChild(p7);
    DIV_content_types_invest.appendChild(p8);
    DIV_content_types_invest.appendChild(p9);
    DIV_content_types_invest.appendChild(p10);
    DIV_content_types_invest.appendChild(p11);
    DIV_content_types_invest.appendChild(p12);

    document.getElementById("PS").className="";
    document.getElementById("RF").className="";
    document.getElementById("AS").className="active";
    document.getElementById("BS").className="";
    document.getElementById("FS").className="";
    document.getElementById("ES").className="";
    document.getElementById("CM").className="";

    DIV_content_types_invest.scrollTo({
        top:0,
        behavior:"smooth",
    });

}

function bdrs_txt(){
    clearContent_types_invest();

    p1 = document.createElement("p");
    p2 = document.createElement("p");
    p3 = document.createElement("p");
    p4 = document.createElement("p");
    p5 = document.createElement("p");
    p6 = document.createElement("p");
    p7 = document.createElement("p");
    p8 = document.createElement("p");
    p9 = document.createElement("p");

    paragrafo = document.createTextNode("BDRs, ou Brazilian Depositary Receipts, são uma forma de investir em ações estrangeiras na bolsa brasileira. Esses instrumentos financeiros permitem que investidores brasileiros tenham acesso a empresas listadas em mercados internacionais sem a necessidade de abrir contas em corretoras estrangeiras. A ideia é simplificar o processo de investimento em ativos estrangeiros para os investidores locais.");
    p1.appendChild(paragrafo);

    paragrafo = document.createTextNode("Aqui estão alguns pontos-chave sobre BDRs:");
    p2.appendChild(paragrafo);

    paragrafo = document.createTextNode("Representação de Ativos Estrangeiros: Os BDRs representam ações de empresas estrangeiras e são negociados na B3 (Bolsa de Valores brasileira). Essas ações são custodiadas no exterior, geralmente nos Estados Unidos.");
    p3.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Níveis de Acesso:Existem três níveis de BDRs, sendo o Nível I destinado a investidores de varejo, o Nível II para investidores institucionais e de varejo e o Nível III para empresas que desejam captar recursos no mercado brasileiro.");
    p4.appendChild(paragrafo);

    paragrafo = document.createTextNode("Classificação por Segmento:Os BDRs são classificados em diferentes segmentos, como BDRs Patrocinados e Não Patrocinados. BDRs Patrocinados são quando a empresa estrangeira participa ativamente do processo, enquanto BDRs Não Patrocinados ocorrem quando a empresa estrangeira não está envolvida.");
    p5.appendChild(paragrafo);

    paragrafo = document.createTextNode("Negociação na B3:A compra e venda de BDRs acontecem na B3, e os investidores podem negociá-los da mesma forma que fariam com ações de empresas brasileiras.");
    p6.appendChild(paragrafo);

    paragrafo = document.createTextNode("Riscos e Retornos:Investir em BDRs envolve os riscos associados aos mercados internacionais, como flutuações cambiais e condições econômicas externas. Os retornos estão diretamente ligados ao desempenho das empresas estrangeiras representadas pelos BDRs.");
    p7.appendChild(paragrafo);

    paragrafo = document.createTextNode("Custos e Tributação:Como qualquer investimento, é importante entender os custos associados à negociação de BDRs, como taxas de corretagem. Além disso, há considerações tributárias específicas para investimentos em ativos estrangeiros.");
    p8.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Os BDRs oferecem aos investidores brasileiros a oportunidade de diversificar seus portfólios, acessando empresas globais sem a necessidade de lidar diretamente com o mercado internacional. Entretanto, é crucial realizar uma análise cuidadosa e compreender os riscos associados a investimentos estrangeiros antes de decidir investir em BDRs.");
    p9.appendChild(paragrafo);
    
    DIV_content_types_invest.appendChild(p1);
    DIV_content_types_invest.appendChild(p2);
    DIV_content_types_invest.appendChild(p3);
    DIV_content_types_invest.appendChild(p4);
    DIV_content_types_invest.appendChild(p5);
    DIV_content_types_invest.appendChild(p6);
    DIV_content_types_invest.appendChild(p7);
    DIV_content_types_invest.appendChild(p8);
    DIV_content_types_invest.appendChild(p9);

    document.getElementById("PS").className="";
    document.getElementById("RF").className="";
    document.getElementById("AS").className="";
    document.getElementById("BS").className="active";
    document.getElementById("FS").className="";
    document.getElementById("ES").className="";
    document.getElementById("CM").className="";

    DIV_content_types_invest.scrollTo({
        top:0,
        behavior:"smooth",
    });
}

function fiis_txt(){
    clearContent_types_invest();

    p1 = document.createElement("p");
    p2 = document.createElement("p");
    p3 = document.createElement("p");
    p4 = document.createElement("p");
    p5 = document.createElement("p");
    p6 = document.createElement("p");
    p7 = document.createElement("p");
    p8 = document.createElement("p");
    p9 = document.createElement("p");

    paragrafo = document.createTextNode("FII é a abreviação para Fundos de Investimento Imobiliário. Esses fundos são uma forma de investir em empreendimentos imobiliários de maneira coletiva, permitindo que diversos investidores participem do mercado imobiliário, mesmo com recursos mais limitados. Aqui estão alguns pontos-chave sobre FIIs:");
    p1.appendChild(paragrafo);

    paragrafo = document.createTextNode("Estrutura: Os FIIs são constituídos como condomínios fechados, com gestão profissional por uma administradora. Os recursos captados são investidos em empreendimentos imobiliários ou ativos relacionados.");
    p2.appendChild(paragrafo);

    paragrafo = document.createTextNode("Objetivo: O principal objetivo dos FIIs é gerar renda através da locação, arrendamento, venda de imóveis ou outros instrumentos relacionados ao setor imobiliário. A renda gerada é distribuída periodicamente aos cotistas.");
    p3.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Cotas: Os investidores que aplicam dinheiro em FIIs recebem cotas proporcionais ao valor investido. O número total de cotas é limitado, e a valorização ou desvalorização dessas cotas no mercado secundário é determinada pela demanda e oferta no mercado.");
    p4.appendChild(paragrafo);

    paragrafo = document.createTextNode("Rendimento: Os FIIs geralmente oferecem rendimentos periódicos aos cotistas na forma de distribuição de renda, que pode ser mensal, trimestral, ou conforme estabelecido no regulamento do fundo.");
    p5.appendChild(paragrafo);

    paragrafo = document.createTextNode("Diversificação: Ao investir em FIIs, os cotistas obtêm exposição a uma carteira diversificada de ativos imobiliários, o que pode incluir imóveis comerciais, industriais, residenciais, entre outros.");
    p6.appendChild(paragrafo);

    paragrafo = document.createTextNode("Liquidez: As cotas de FIIs são negociadas em bolsa de valores, proporcionando liquidez aos investidores que desejam comprar ou vender suas participações.");
    p7.appendChild(paragrafo);

    paragrafo = document.createTextNode("Gestão Profissional: A gestão do fundo é realizada por uma administradora e, muitas vezes, por um gestor profissional. Esses profissionais são responsáveis por tomar decisões relacionadas à compra, venda e administração dos ativos imobiliários.");
    p8.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Riscos: Os FIIs estão sujeitos a riscos associados ao mercado imobiliário, como vacância, inadimplência, e também a riscos macroeconômicos que podem afetar o setor.Os FIIs oferecem uma maneira acessível e diversificada para os investidores participarem do mercado imobiliário, mesmo sem a necessidade de comprar propriedades diretamente. No entanto, é fundamental entender o funcionamento do fundo, analisar os ativos que compõem a carteira e considerar os riscos associados antes de investir em FIIs.");
    p9.appendChild(paragrafo);
    
    DIV_content_types_invest.appendChild(p1);
    DIV_content_types_invest.appendChild(p2);
    DIV_content_types_invest.appendChild(p3);
    DIV_content_types_invest.appendChild(p4);
    DIV_content_types_invest.appendChild(p5);
    DIV_content_types_invest.appendChild(p6);
    DIV_content_types_invest.appendChild(p7);
    DIV_content_types_invest.appendChild(p8);
    DIV_content_types_invest.appendChild(p9);

    document.getElementById("PS").className="";
    document.getElementById("RF").className="";
    document.getElementById("AS").className="";
    document.getElementById("BS").className="";
    document.getElementById("FS").className="active";
    document.getElementById("ES").className="";
    document.getElementById("CM").className="";

    DIV_content_types_invest.scrollTo({
        top:0,
        behavior:"smooth",
    });
}

function etfs_txt(){
    clearContent_types_invest();

    p1 = document.createElement("p");
    p2 = document.createElement("p");
    p3 = document.createElement("p");
    p4 = document.createElement("p");
    p5 = document.createElement("p");
    p6 = document.createElement("p");
    p7 = document.createElement("p");
    p8 = document.createElement("p");
    p9 = document.createElement("p");
    p10 = document.createElement("p");

    paragrafo = document.createTextNode("ETFs, ou Exchange-Traded Funds, são fundos de investimento negociados em bolsa de valores. Eles combinam características de fundos mútuos e ações, oferecendo uma maneira eficiente e acessível para os investidores diversificarem seus portfólios. Aqui estão alguns pontos-chave sobre ETFs:");
    p1.appendChild(paragrafo);

    paragrafo = document.createTextNode("Cesta de Ativos:Um ETF detém uma cesta de ativos, como ações, títulos, commodities ou uma combinação destes. O desempenho do ETF reflete o desempenho dessa cesta.");
    p2.appendChild(paragrafo);

    paragrafo = document.createTextNode("Negociados em Bolsa:Assim como ações, os ETFs são comprados e vendidos em bolsas de valores durante o horário de funcionamento do mercado. Isso proporciona liquidez e flexibilidade aos investidores.");
    p3.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Rastreamento de Índices:Muitos ETFs são projetados para rastrear o desempenho de índices específicos, como o S&P 500. Esses são chamados de ETFs de índice e oferecem uma maneira fácil de os investidores ganharem exposição a todo um mercado ou setor.");
    p4.appendChild(paragrafo);

    paragrafo = document.createTextNode("Custo Eficiente:Comparados a fundos mútuos tradicionais, os ETFs geralmente têm custos mais baixos. Isso se deve em parte à sua estrutura de gestão passiva, que busca replicar o desempenho de um índice, em vez de tomar decisões ativas de compra e venda de ativos.");
    p5.appendChild(paragrafo);

    paragrafo = document.createTextNode("Diversificação:Os ETFs permitem que os investidores diversifiquem seu portfólio com um único investimento. Ao comprar um ETF de índice, por exemplo, você está efetivamente investindo em todas as empresas que compõem esse índice.");
    p6.appendChild(paragrafo);

    paragrafo = document.createTextNode("Flexibilidade:Os investidores podem negociar ETFs ao longo do dia a preços de mercado em tempo real. Isso oferece flexibilidade para comprar ou vender a qualquer momento durante o horário de funcionamento do mercado.");
    p7.appendChild(paragrafo);

    paragrafo = document.createTextNode("Setores e Estratégias Específicos:Além de ETFs de índice, existem ETFs que se concentram em setores específicos, commodities, estratégias de investimento, entre outros. Isso permite que os investidores personalizem suas alocações de acordo com seus objetivos e visões de mercado.");
    p8.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Riscos:Embora os ETFs sejam considerados instrumentos de investimento de menor risco em comparação com ações individuais, ainda estão sujeitos a flutuações de mercado. Além disso, os ETFs de gestão ativa podem ter custos mais elevados e estão sujeitos a riscos de desempenho do gestor.");
    p9.appendChild(paragrafo);

    paragrafo = document.createTextNode("Os ETFs se tornaram uma ferramenta popular para investidores individuais e institucionais devido à sua simplicidade, eficiência de custos e diversificação. Antes de investir em um ETF específico, é importante entender sua composição, estratégia de investimento e os riscos associados.");
    p10.appendChild(paragrafo);
    
    DIV_content_types_invest.appendChild(p1);
    DIV_content_types_invest.appendChild(p2);
    DIV_content_types_invest.appendChild(p3);
    DIV_content_types_invest.appendChild(p4);
    DIV_content_types_invest.appendChild(p5);
    DIV_content_types_invest.appendChild(p6);
    DIV_content_types_invest.appendChild(p7);
    DIV_content_types_invest.appendChild(p8);
    DIV_content_types_invest.appendChild(p9);
    DIV_content_types_invest.appendChild(p10);

    document.getElementById("PS").className="";
    document.getElementById("RF").className="";
    document.getElementById("AS").className="";
    document.getElementById("BS").className="";
    document.getElementById("FS").className="";
    document.getElementById("ES").className="active";
    document.getElementById("CM").className="";

    DIV_content_types_invest.scrollTo({
        top:0,
        behavior:"smooth",
    });
}

function criptomoedas_txt(){
    clearContent_types_invest();
    p1 = document.createElement("p");
    p2 = document.createElement("p");
    p3 = document.createElement("p");
    p4 = document.createElement("p");
    p5 = document.createElement("p");
    p6 = document.createElement("p");
    p7 = document.createElement("p");
    p8 = document.createElement("p");
    p9 = document.createElement("p");
    p10 = document.createElement("p");
    p11 = document.createElement("p");

    paragrafo = document.createTextNode("As criptomoedas são formas digitais de dinheiro que utilizam a criptografia para garantir segurança nas transações, controlar a criação de novas unidades e verificar a transferência de ativos. O Bitcoin, lançado em 2009, foi a primeira criptomoeda e permanece a mais conhecida, mas desde então várias outras foram criadas. Aqui estão alguns pontos-chave sobre criptomoedas:");
    p1.appendChild(paragrafo);

    paragrafo = document.createTextNode("Descentralização: Ao contrário das moedas tradicionais emitidas por governos (também conhecidas como moedas fiduciárias), as criptomoedas são descentralizadas e baseadas em tecnologia de blockchain. Isso significa que não são controladas por uma única autoridade, como um banco central.");
    p2.appendChild(paragrafo);

    paragrafo = document.createTextNode("Blockchain: A blockchain é uma tecnologia de registro distribuído que forma a base das criptomoedas. Ela consiste em blocos de informações encadeados sequencialmente, tornando as transações transparentes, seguras e imutáveis.");
    p3.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Bitcoin e Altcoins: O Bitcoin é a primeira e mais conhecida criptomoeda, mas existem milhares de outras, conhecidas como altcoins (moedas alternativas). Algumas delas, como o Ethereum, foram criadas para além das transações financeiras e permitem a execução de contratos inteligentes.");
    p4.appendChild(paragrafo);

    paragrafo = document.createTextNode("Mineração: Muitas criptomoedas, incluindo o Bitcoin, utilizam um processo chamado mineração para validar e adicionar transações à blockchain. A mineração envolve resolver problemas matemáticos complexos e requer poder computacional significativo.");
    p5.appendChild(paragrafo);

    paragrafo = document.createTextNode("Carteira Digital: Para armazenar criptomoedas, os usuários precisam de uma carteira digital. Existem diferentes tipos de carteiras, como carteiras online, offline, de hardware e de papel, cada uma com níveis diferentes de segurança.");
    p6.appendChild(paragrafo);

    paragrafo = document.createTextNode("Volatilidade: As criptomoedas são conhecidas por sua volatilidade. Os preços podem flutuar significativamente em curtos períodos de tempo, proporcionando oportunidades de lucro, mas também aumentando os riscos.");
    p7.appendChild(paragrafo);

    paragrafo = document.createTextNode("Aceitação e Regulação: A aceitação de criptomoedas como meio de pagamento tem crescido, mas ainda varia globalmente. A regulação também varia de país para país, o que pode impactar a legalidade e a facilidade de uso das criptomoedas em diferentes regiões.");
    p8.appendChild(paragrafo);

    paragrafo = document.createTextNode("ICO e Tokens: As Ofertas Iniciais de Moedas (ICOs) são eventos onde novas criptomoedas são lançadas e oferecidas ao público para financiamento. Tokens são ativos digitais criados em plataformas blockchain, muitas vezes representando ativos específicos ou utilidade em uma rede.");
    p9.appendChild(paragrafo);
    
    paragrafo = document.createTextNode("Investimento e Especulação: Muitos investidores veem as criptomoedas como uma classe de ativos alternativa e especulativa. No entanto, devido à sua volatilidade, investir em criptomoedas carrega riscos significativos e requer uma compreensão detalhada.");
    p10.appendChild(paragrafo);  

    paragrafo = document.createTextNode("É importante notar que o cenário das criptomoedas está em constante evolução, e novos desenvolvimentos podem impactar significativamente o mercado. Antes de investir em criptomoedas, os investidores devem realizar pesquisas detalhadas, compreender os riscos envolvidos e considerar o seu perfil de investimento.");
    p11.appendChild(paragrafo);   
    
    DIV_content_types_invest.appendChild(p1);
    DIV_content_types_invest.appendChild(p2);
    DIV_content_types_invest.appendChild(p3);
    DIV_content_types_invest.appendChild(p4);
    DIV_content_types_invest.appendChild(p5);
    DIV_content_types_invest.appendChild(p6);
    DIV_content_types_invest.appendChild(p7);
    DIV_content_types_invest.appendChild(p8);
    DIV_content_types_invest.appendChild(p9);
    DIV_content_types_invest.appendChild(p10);
    DIV_content_types_invest.appendChild(p11);

    document.getElementById("PS").className="";
    document.getElementById("RF").className="";
    document.getElementById("AS").className="";
    document.getElementById("BS").className="";
    document.getElementById("FS").className="";
    document.getElementById("ES").className="";
    document.getElementById("CM").className="active";

    DIV_content_types_invest.scrollTo({
        top:0,
        behavior:"smooth",
    });
}



