
let winmusic= new Audio('music.mp3')
let turnmusic= new Audio('ting.mp3')
let turn="X";
let gameover=false;

document.querySelector('.xturn').style.backgroundColor="white"

const trunchange=()=>{

    
    return turn==="X" ? "0":"X";
}


let boxes = document.querySelectorAll(".box");
boxes.forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{

        
        
        if(!gameover)
        {
        
                if(boxtext.innerText === ''){
                    boxtext.innerText = turn;
                    turn=trunchange();
                    if(turn==="X")
                    {
                        document.querySelector('.xturn').style.backgroundColor="white"
                        document.querySelector('.oturn').style.backgroundColor=""


                    }else{
                        document.querySelector('.oturn').style.backgroundColor="white"
                        document.querySelector('.xturn').style.backgroundColor=""


                    }
                    turnmusic.play()
                    checkwin();


                 }
            
        }
    })
})

const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2,17,-10,90],
        [3,4,5,17,0,90],
        [6,7,8,17,10,90],
        [0,4,8,17,0,135],
        [2,4,6,17,0,225],
        [0,3,6,7,0,0],
        [1,4,7,17,0,0],
        [2,5,8,27,0,0]
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText&& boxtext[e[1]].innerText==boxtext[e[2]].innerText&& boxtext[e[0]].innerText!=''){
        document.querySelector('.line').style.width='3px'
        document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector('.result').innerText=boxtext[e[0]].innerText+" Won";
        document.querySelector('img').style.width="300px";
       gameover=true
       winmusic.play()
        }else if(!gameover && [...boxtext].every(elem=>elem.innerText!="") ){
        resetbtn()

        }

    })

}
const resetbtn=()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    boxtext.forEach(elem=>{
        elem.innerText='';
    })
    winmusic.pause()
    document.querySelector('.line').style.width='0px'
    document.querySelector('.xturn').style.backgroundColor="white"
    document.querySelector('.oturn').style.backgroundColor=""


    turn="X"
    gameover=false
    document.querySelector('img').style.width = "0px"
    document.querySelector('.result').innerText=""


}


reset.addEventListener('click',()=>{
    resetbtn()


})