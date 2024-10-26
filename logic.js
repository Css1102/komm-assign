async function adviseGen(e){
console.log("called")
const advise=document.getElementsByClassName('fact')
console.log(advise)
const response=await fetch('https://api.adviceslip.com/advice')
const jsonres=await response.json()
console.log(jsonres.slip.advice)
// .length>50?jsonres.slip.advice:null;
const inputstr= jsonres.slip.advice
if(inputstr){
advise[0].innerHTML=`
<p>"${inputstr}"</p>
`
}
const wrapchild=document.getElementById('two')
let val=Number(wrapchild.textContent)
console.log(val)
wrapchild.innerText=val+1
}


function hovercolor(e){
    console.log("hover called!")
 e.target.firstElementChild.firstElementChild.fill='hsl(250, 100%, 66%)'

}
const dice=document.getElementById('clicker')
console.log(dice)


dice.addEventListener('mouseover',hovercolor)

dice.removeEventListener('mouseover',hovercolor)

dice.addEventListener("click",adviseGen)
