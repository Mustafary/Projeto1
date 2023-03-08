function toggleMode() {
const body = document.body
body.classList.toggle('light')


//pega tag img
const img = document.querySelector(" #profile img ")

// substituir a imagem 
if(body.classList.contains('light')){
  // se tiver light mode , adicionar light
  img.setAttribute('src' , './assets/avatar2.png')
} else {
   // se tiver sem light mode, manter a imagem normal
  img.setAttribute('src' , './assets/avatar.png')
}


}