const input = document.getElementById("input")
const listaDeItens = document.getElementById("lista-de-compras")
const botao = document.getElementById("botao-adicionar")
let contador = 0

botao.addEventListener("click", (evento) => {
    evento.preventDefault()
        if(input.value === ""){
            alert("Nada escrito.")
            target
        }
            
        const itemDaLista = document.createElement("li")
        const containerDaLista = document.createElement("div")
        containerDaLista.classList.add("lista-item-container")
        const inputcheckbox = document.createElement("input")
        inputcheckbox.type = "checkbox"
        inputcheckbox.id = "checkbox-" + contador++
        const itemInserido = document.createElement("p")
        itemInserido.innerText = input.value
        
        
        containerDaLista.appendChild(inputcheckbox)
        containerDaLista.append(itemInserido)

        itemDaLista.appendChild(containerDaLista)
        listaDeItens.appendChild(itemDaLista)

        
})





