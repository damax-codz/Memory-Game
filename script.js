let gameContainer = document.getElementById('game-container')
let arr = ['<i class="fas fa-lemon" data-name="lemon"></i>','<i class="fas fa-carrot" data-name="carrot"></i>',
'<i class="fas fa-hamburger" data-name="hamburger"></i>','<i class="fas fa-pizza-slice" data-name="pizza"></i>',
'<i class="fas fa-fish" data-name="fish"></i>','<i class="fas fa-pepper-hot" data-name="pepper"></i>',
'<i class="fas fa-ice-cream" data-name="ice-cream"></i>','<i class="fas fa-bread-slice" data-name="bread"></i>'
]

let counter = 0
let currentName = ''
let namearr=[]
let idname=[]
const resetCounter = () => {
    // counter = 0
    currentName = ''
}

//this function creates about 16 div tags with icons and insert them into the div tag with id 'game-container'
function loadingGame(){
    
    for(let i=0;i<16;i++){
        let rand = Math.floor(Math.random()*8)
       
        gameContainer.innerHTML +=`<div id="${i}" onclick="onClickBtn(${i})" data-show=${true}>${arr[rand]}</div>`

        // console.log(document.getElementsByTagName('i')[i].className)
    }
    //after the function loads it sets a delay for a function which wpuld hide all the icons in the div tags
    setTimeout(hide,5000)
  
    
} 

    //this settimeout sets a delay of about 2 seconds before the function loading game loads 
    setTimeout(loadingGame,2000)


function hide(){
   
        for(let i=0;i<16;i++){
            document.getElementById(i).dataset.show = false;
            document.getElementById(i).children[0].style.display='none'
        }
  
}
let i = 0
let j = -1
const onClickBtn = (id) => {
    const iconParent = document.getElementById(id)
    const icon = iconParent.children[0]
    if (iconParent.dataset.show == "false") {
         icon.style.display='inline'
         
         currentid=iconParent.id
         currentName=icon.className

         namearr.push(currentName)
         idname.push(currentid)
         j++
         
         //  console.log(currentName)
         console.log(namearr);
         console.log(j-1);
         console.log(j);
         console.log(namearr[j-1]);
         console.log(namearr[j])
         if(namearr[j-1]===namearr[j]){
             document.getElementById('score').innerHTML=`score:${i+=5}`
             document.getElementById(idname[j]).style.backgroundColor='green'
             document.getElementById(idname[j-1]).style.backgroundColor='green'
             document.getElementById('myaudio').play()
         }
         else if(namearr[j-1]!=namearr[j]&&j%2==1){
            document.getElementById(idname[j]).style.backgroundColor='red'
            document.getElementById(idname[j-1]).style.backgroundColor='red'
            document.getElementById('myaudiotwo').play()
         }
        
         
    }
    
    else {
        icon.style.display='none'
    }
}

function restart(){
    document.getElementById('game-container').innerHTML=''
    document.getElementById('score').innerHTML='score:0'
    loadingGame()
}

