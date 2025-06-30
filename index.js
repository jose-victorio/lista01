const input = document.getElementById("input")
const listaDeItens = document.getElementById("lista-de-compras")
const botao = document.getElementById("botao-adicionar")
let contador = 0

botao.addEventListener("click", (evento) => {
    evento.preventDefault()
        if(input.value === ""){
            alert("Nada escrito.")
        }
            
            const itemDaLista = document.createElement("li")
            const containerDaLista = document.createElement("div")
            containerDaLista.classList.add("lista-item-container") //acessar a classe
            const inputCheckbox = document.createElement("input")
            inputCheckbox.type = "checkbox" //deficiniu o input
            inputCheckbox.id = "checkbox-" + contador++ //criou o "id que muda" com o checkbox + a variavel contador
            const itemInserido = document.createElement("p")
            itemInserido.innerText = input.value 

            containerDaLista.appendChild(inputCheckbox)//adicionando filhos ao containerDaLista
            containerDaLista.appendChild(itemInserido)

            itemDaLista.appendChild(containerDaLista)

            listaDeItens.appendChild(itemDaLista)

})




