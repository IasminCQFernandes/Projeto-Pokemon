//trocar tema claro pra escuro

//1 passo - pegar no js o elemento html correspondente ao  botao
const botaoAlterarTema = document.getElementById("botao-alterar-tema");



//passo 2 - pegar no js o elemento html correspondente ao body
const body = document.querySelector("body");
console.log("body");


const imagemTrocaTema = document.querySelector(".imagem-botao");

//passo 3 - identificar quando o usuario clica no botão tema
botaoAlterarTema.addEventListener("click", () => {
    //alternar em claro e escuro
    //remover classe modo-escuro
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    if (body.classList.contains("modo-escuro")){
        //remover classe modo-escuro
        body.classList.remove("modo-escuro");

        //trocar imagem da lua para sol
        imagemTrocaTema.setAttribute("src", "src/imagens/sun.png");

    }else{
        //adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        //trocar imagem do botao para lua
        imagemTrocaTema.setAttribute("src", "src/imagens/moon.png");
    }



//outra forma de fazer utilizando o toggle
/*
botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (body.classList.contains("modo-escuro")){
        imagemTrocaTema.setAttribute("src", "src/imagens/sun.png");

    }else{
        imagemTrocaTema.setAttribute("src", "src/imagens/moon.png");
    }
*/

    
});






