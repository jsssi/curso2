//35feeb9e key
//url:http://www.omdbapi.com/?i=tt3896198&apikey=35feeb9e

const input = document.querySelector('#form')
const key="35feeb9e"

const btn   = document.querySelector('#btn')
btn.addEventListener('click',()=>{
  const pesquisa = input.value
  if(pesquisa==""){
    alert("coloca algo ai fela da pulta");
  }
  const filme = input.value
  fetch(`http://www.omdbapi.com/?s=${filme}&apikey=${key}`).then(result => result.json()).then(json => carregalista(json));
  
})
const carregalista = (json) =>{
  const list = document.querySelector(".cards")
  list.innerHTML= "";
  json.Search.forEach(element => {
    console.log(element)

    let item = document.createElement("div")
    item.classList.add("card")

    item.innerHTML = `<img src="${element.Poster}"</img><h3>${element.Title}</h3><p>${element.overview}</p>`
    list.appendChild(item)  

  });


}
