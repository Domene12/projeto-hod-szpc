// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
// - passo 2 - dar um jeito de identificar o clique do usuario no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // passo 3 - desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector(".selecionado");
        console.log(botaoSelecionado.classlist);

        botaoSelecionado.classList.remove("selecionado");

        // passo 4 - marcar o botao clicando como se estivesse selecionado
        botao.classList.add("selecionado");

        //- passo 5 esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        //passo 6 - mostrar a imagem do prox botao
        imagens[indice].classList.add("ativa");

        // passo 7 - esconder info do dragao anterior
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        
        // passo 8 - mostrar info correta
        informacoes[indice].classList.add("ativa");

    });
});
