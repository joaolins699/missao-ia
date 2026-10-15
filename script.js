const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que eu sair da escola, vou fazer alguma faculdade. Você acha que eu curso em qual faculdade?",
        alternativas: [
            {
                texto: "Faculdade pública, como a Unioeste.",
                afirmacao: [
                    "Acha mais interessante faculdades públicas.",
                    "Não tem dinheiro para pagar faculdade particular.",
                ],
            },
            {
                texto: "Faculdade privada, como a FAG.",
                afirmacao: [
                   "Acha mais interessante faculdades privadas.",
                   "Tem dinheiro para pagar mensalidade.",
                ],
            },           
            
        ],

    },
    {
        enunciado: "E qual curso você acha que eu devo escolher, levando em consideração que eu gosto de biologia e gosto de ajudar as pessoas?",
        alternativas: [
            {
                texto:"Cursos da área da saúde, como Medicina.",
                afirmacao: "Gosta mais da área da saúde."
            },
            {
                texto: "Cursos da área de exatas, como as Engenharias, ou humanas, como Jornalismo.",
                afirmacao: "Gosta mais da área de exatas."
            }
        ]
    },
    {
        enunciado: "E qual especialização ou pós-graduação eu devo fazer?",
        alternativas: [
            {
                texto:"Ginecologia  obstetrícia caso o curso for Medicina.",
                afirmacao:"Interesse na saúde da mulher e bebês."
            },
            {
                texto:"Engenharia civil ou Repórter da RPC.",
                afirmacao:"Interesse em outras áreas."
            }
            
        ]
    },
    {
        enunciado: "Quando eu terminar meus estudos:",
        alternativas: [
            {
                texto:"Ficar no Brasil, no Paraná ou em São Paulo.",
                afirmacao:"Preefere território nacional."
            },
            {
                texto:"Ir para fora do Brasil, nos Estados Unidos ou na Itália.",
                afirmacao:"Prefere território internacional."
            }
            
        ]
    },
    {
        enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Fazer cursos de especialização.",
                afirmacao:"Acha importante estudar."
            },
            {
                texto: "Não se especializar em nenhuma área.",
                afirmacao:"Não vê necessidade no estudo."
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
