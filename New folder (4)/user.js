function todoList() {
    event.preventDefault()
const item = document.getElementById('todoInput').value
const text = document.createTextNode(item)
const newItem = document.createElement('li')
const newH3 = document.createElement('button')
const H3 = document.createElement('button')
newItem.appendChild(text)
document.getElementById('todoList').appendChild(newItem)
document.getElementById('todoList').appendChild(newH3)
document.getElementById('todoList').appendChild(H3)
newH3.innerHTML += `
<img class="white" src="./img/react_img/like (2).png">
`
H3.style.visibility = 'hidden'
H3.innerHTML +=`
<img class="blue" src="./img/react_img/like (1).png">`

H3.style.transform = "translateX(-100%)"
H3.style.marginLeft = "75%"
newH3.style.marginLeft = "75%"
H3.style.transform = "translateY(-100%)"
H3.style.border = "none"
newH3.style.border = "none"
H3.style.outline = "none"
newH3.style.outline = "none"
H3.style.background = "transparent"
newH3.style.background = "transparent"

newH3.addEventListener('click',function(){
    H3.style.visibility = 'visible'
    newH3.style.visibility = 'hidden'
})

H3.addEventListener('click',function(){
    H3.style.visibility = 'hidden'
    newH3.style.visibility = 'visible'
})
}


const dark = document.querySelector('.dark')
const day = document.querySelector('.slider')
const btnDay = document.querySelector('.btnD')
const btnDark = document.querySelector('.btnN')
const body = document.querySelector('body')
const btn = document.querySelector('.btn')
const head = document.querySelector('.head')
const list = document.querySelector('#todoList')
const item  = document.getElementById('todoInput')
const cont = document.querySelector('.container')
const like = document.querySelector('.like')

dark.addEventListener('dblclick',function(){
    body.style.background = '#1c1e21'
    btn.style.background = '#fff'
    btn.style.borderRadius = '50px'
    item.style.background = '#fff'
    cont.style.background = '#cfcfcf'
})

day.addEventListener('click',function(){
    body.style.background = 'rgba(216, 216, 216, 0.397)'
    btn.style.color = 'rgb(0, 0, 0)'
    btn.style.background = '#cfcfcf'
    cont.style.background = '#fff'
    item.style.background = '#cfcfcf'
})

like.addEventListener('click',function(){
    event.preventDefault()
    list.innerHTML += `<li id="like"><img src="./img/like.png"></li>
    `
})

