
let textWeb=document.querySelector('#text_web')
let imagen=document.querySelector('#imagen')
let caixaAnimation=[textWeb,imagen]

let myObserve=new IntersectionObserver(evt=>{
  evt.map((e)=>{
    if(e.isIntersecting==true){
      e.target.classList.toggle("visto")
    }
  })
})



caixaAnimation.map((el)=>{
  myObserve.observe(el)
})


let mais= [...document.querySelectorAll('.mais')]
let menos=[...document.querySelectorAll('.menos')]
let produto=[...document.querySelectorAll('.produto')]

let quantosprodutos=0

function sale(){
  mais.map((soma) => {
    soma.addEventListener('click', () => {
      ++quantosprodutos
      produto.map((valor)=>{
        valor.innerHTML=quantosprodutos
      })
    })
  })
}
sale()