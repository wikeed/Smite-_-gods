const boxButtonsNav = document.querySelector(".boxButtonsNav")
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

  let tagLi = document.createElement("li")

  let tagDivTopLi       = document.createElement("div")
  tagDivTopLi.className = "box_card"

  let tagImgLi          = document.createElement("img")
  tagImgLi.className    = "imgMaior"

  let tagDivBottomLi       = document.createElement("div")
  tagDivBottomLi.className = "box_li_content"

  let tagImgClass          = document.createElement("img")
  tagImgClass.className    = "span_section"

  let divDescription       = document.createElement("div")
  divDescription.className = "divDescription"

  let tagH4Li             = document.createElement("h4")
  let tagPLi              = document.createElement("p")
  let tagSpanClass        = document.createElement("span")
  let tagSpanRanged       = document.createElement("span")
  let tagSpanType         = document.createElement("span")

  tagImgLi.src            = data.img
  tagH4Li.innerText       = data.nameItem
  tagPLi.innerText        = data.description
  tagSpanClass.innerText  = data.value
  tagSpanRanged.innerText = data.addCart
  tagSpanType.innerText   = data.type
  tagImgClass.src         = data.classIcon
  

  tagImgLi.setAttribute("alt", `imagem de ${data.nameItem}`)
  tagImgClass.setAttribute("alt", `icone da classe ${data.value}`)
  
  tagLi.appendChild(tagDivTopLi)
  
  tagDivTopLi.appendChild(tagImgLi)
  tagDivTopLi.appendChild(tagDivBottomLi)

  tagDivBottomLi.append(tagImgClass, tagH4Li, tagPLi)
  divDescription.append(tagSpanClass, tagSpanRanged, tagSpanType)
  
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


let buttonNav = document.querySelectorAll(".buttonNav")
let divButtons = document.querySelector(".boxButtonsNav")
let children = divButtons.children

for (let i = 0; i < children.length; i++) {

 let buttonSelect = children[i]
 buttonAll.style.color = "#00ccff"
 buttonSelect.addEventListener("click", showSelect)
}

function showSelect(event) {

  buttonNav.forEach(e=>{
    e.style.color = "gold";
  })
  let button = event.target

  let cardShow = []

  if (button.tagName == "BUTTON") {

    for (let i = 0; i < data.length; i++) {

      if (button.value == "Todos") {
        button.style.color = "#00ccff"
        cardShow.push(data[i])
      } else if (button.value == data[i].value) {
        cardShow.push(data[i])
        button.style.color = "#00ccff"
      }
    }
    renderCards(cardShow, tagUl)
    toggleMenu()
  }
}


const nav = document.querySelector("nav")
const buttonMobile = document.getElementById("buttonMobile")

function toggleMenu() {

  nav.classList.toggle("active")
}

buttonMobile.addEventListener("click", toggleMenu)
