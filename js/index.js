const nav = document.querySelector("nav")
const tagUl = document.querySelector("ul")

/***********************************   
 ↓ FUNÇÃO PARA RENDEREIZAR OS CARDS ↓
 ***********************************/


function renderCards(productList, section) {

  section.innerHTML = ""

  for (let i = 0; i < productList.length; i++) {

    let product = productList[i]

    let card = createCardProduct(product)

    section.appendChild(card)
  }
}

renderCards(data, tagUl)


/**********************************************************   
 ↓ FUNÇÃO PARA CRIAR OS ELEMENTOS E ATRIBUIR SEU CONTEUDO ↓
 **********************************************************/


function createCardProduct(data) {

  let img = data.img
  let name = data.nameItem
  let description = data.description
  let value = data.value
  let addCart = data.addCart
  let tag = data.class
  let type = data.type

  let tagLi = document.createElement("li")

  let tagDivTopLi = document.createElement("div")
  tagDivTopLi.className = "box_card"

  let tagImgLi = document.createElement("img")
  tagImgLi.className = "imgMaior"

  let tagDivBottomLi = document.createElement("div")
  tagDivBottomLi.className = "box_li_content"


  let tagImgClass = document.createElement("img")
  tagImgClass.className = "span_section"

  let divDescription = document.createElement("div")
  divDescription.className = "divDescription"

  let tagH4Li = document.createElement("h4")
  let tagPLi = document.createElement("p")
  let tagSpanClass = document.createElement("span")
  let tagSpanRanged = document.createElement("span")
  let tagSpanType = document.createElement("span")

  tagImgLi.src = img
  tagH4Li.innerText = name
  tagPLi.innerText = description
  tagSpanClass.innerText = value
  tagSpanRanged.innerText = addCart
  tagSpanType.innerText = type
  tagImgClass.src = tag 

  tagLi.appendChild(tagDivTopLi)

  tagDivTopLi.appendChild(tagImgLi)
  tagDivTopLi.appendChild(tagDivBottomLi)

  tagDivBottomLi.appendChild(tagImgClass)
  tagDivBottomLi.appendChild(tagH4Li)
  tagDivBottomLi.appendChild(tagPLi)
  divDescription.appendChild(tagSpanClass)
  divDescription.appendChild(tagSpanRanged)
  divDescription.appendChild(tagSpanType)

  tagDivBottomLi.appendChild(divDescription)

  return tagLi
}



/***************************************************   
 ↓ ADICIONANDO FUNÇÃO DE PESQUISA ATRAVÉS DE INPUT ↓
 ***************************************************/


let inputSearch = document.querySelector("input")

inputSearch.addEventListener("keyup", handleSearch)

function handleSearch() {

  let searchResult = []

  if (!inputSearch.value) {
    renderCards(data, tagUl)
  }
  for (let i = 0; i < data.length; i++) {

    let NameValue = data[i].nameItem

    if (NameValue.toLowerCase().includes(inputSearch.value.toLowerCase())) {
      searchResult.push(data[i])
    }
  }

  renderCards(searchResult, tagUl)
}


/****************************************************************   
 ↓ FILTRANDO CARDS RENDERIZADOS ATRAVÉS DOS BOTÕES DE NAVEGAÇÃO ↓
 ****************************************************************/


let buttonAll = document.querySelector("#buttonAll")
let buttonMago = document.querySelector("#buttonMago")
let buttonCaçador = document.querySelector("#buttonCaçador")
let buttonAssassino = document.querySelector("#buttonAssassino")
let buttonGuardiao = document.querySelector("#buttonGuardiao")
let buttonGuerreiro = document.querySelector("#buttonGuerreiro")


nav.addEventListener("click", showSelect)


function showSelect(event) {

  let buttonAll = event.target
  let buttonMago = event.target
  let buttonCaçador = event.target
  let buttonAssassino = event.target
  let buttonGuardiao = event.target
  let buttonGuerreiro = event.target

  let cardShow = []
  if (buttonAll.tagName == "BUTTON") {

    for (let i = 0; i < data.length; i++) {

      if (buttonAll.value == "Todos") {
        cardShow.push(data[i])
      } else if (buttonMago.value == data[i].value) {
        cardShow.push(data[i])
      } else if (buttonCaçador.value == data[i].value) {
        cardShow.push(data[i])
      } else if (buttonAssassino.value == data[i].value) {
        cardShow.push(data[i])
      } else if (buttonGuardiao.value == data[i].value) {
        cardShow.push(data[i])
      } else if (buttonGuerreiro.value == data[i].value) {
        cardShow.push(data[i])
      }
    }
    renderCards(cardShow, tagUl)
  }
}

