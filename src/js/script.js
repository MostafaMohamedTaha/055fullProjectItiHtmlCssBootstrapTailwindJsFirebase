// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav= document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
const products=[
    {id:1,name:"garden",price:35,category:{garden:"largeGarden",flour:"red",pot:"",name:"",class:""},rate:4}
]