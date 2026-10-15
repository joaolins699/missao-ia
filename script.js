const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que eu sair da escola, vou cursar Engenharia Mecânica. Em qual tipo de faculdade você acha que eu devo estudar?",
        alternativas: [
            {
                texto: "Faculdade pública, como a Unioeste ou UTFPR.",
                afirmacao: [
                    "Acha mais vantajoso o ensino em universidades públicas.",
                    "Busca foco em pesquisa e laboratórios de engenharia sem custo de mensalidade.",
                ],
            },
            {
                texto: "Faculdade privada, como a FAG ou PUCPR.",
                afirmacao: [
                    "Prefere a infraestrutura e redes de contatos de instituições privadas.",
                    "Tem disponibilidade para investir em mensalidades acadêmicas.",
                ],
            },
        ],
    },
    {
        enunciado: "Dentro da Engenharia Mecânica, qual área de atuação tem mais a ver com o meu perfil?",
        alternativas: [
            {
                texto: "Setor automotivo, aeronáutico ou robótica industrial.",
                afirmacao: "Sente forte atração por tecnologia de ponta e desenvolvimento de máquinas modernas."
            },
            {
                texto: "Gestão de manutenção, climatização (HVAC) ou linhas de produção.",
                afirmacao: "Prefere focar na eficiência operacional e gerenciamento de processos industriais."
            }
        ]
    },
    {
        enunciado: "E qual pós-graduação ou especialização eu devo escolher para me destacar no mercado?",
        alternativas: [
            {
                texto: "Especialização em Robótica, Mecatrônica ou Simulação Computacional (FEA/CFD).",
                afirmacao: "Tem interesse em projeto digital, automação e simulações avançadas."
            },
            {
                texto: "Especialização em Gestão de Projetos ou Engenharia de Segurança do Trabalho.",
                afirmacao: "Visa posições de liderança, gestão de equipes e conformidade industrial."
            }
        ]
    },
    {
        enunciado: "Onde você imagina que devo exercer a profissão após me formar?",
        alternativas: [
            {
                texto: "Trabalhar em polos industriais no Brasil, como no Paraná ou em São Paulo.",
                afirmacao: "Prefere construir carreira consolidada em grandes indústrias nacionais."
            },
            {
                texto: "Buscar oportunidades no exterior, como na Alemanha, Itália ou Estados Unidos.",
                afirmacao: "Tem o objetivo de trabalhar no mercado internacional de engenharia."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de cálculo estrutural em grupo para entregar na semana que vem. O trabalho está atrasado e um colega usou uma IA para gerar todos os memoriais de cálculo, mas o resultado contém erros visíveis. O que você faz?",
        alternativas: [
            {
                texto: "Refazer os cálculos manualmente e validar cada etapa do projeto com o grupo.",
                afirmacao: "Valoriza a precisão técnica e a responsabilidade com a segurança do projeto."
            },
            {
                texto: "Entregar o trabalho gerado pela IA como está para cumprir o prazo.",
                afirmacao: "Priorizou a entrega rápida, sem checar os detalhes operacionais."
            }
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2027";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
