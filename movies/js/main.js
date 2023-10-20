//35feeb9e key
//url:http://www.omdbapi.com/?i=tt3896198&apikey=35feeb9e

const input = document.querySelector('#form')

const btn   = document.querySelector('#btn')
btn.addEventListener('click',()=>{
  const pesquisa = input.value
  if(pesquisa==""){
    alert("coloca algo ai fela da pulta")
  }
})