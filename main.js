var canvas = document.querySelector('.gamezone')
var context = canvas.getContext('2d')
var birdimg= new Image();
var hinhnenchinh=new Image();
var ongtren= new Image();
var ongduoi=new Image();
birdimg.src="images/bird.png";
hinhnenchinh.src="images/nenchinh.png";
ongtren.src="images/ongtren.png";
ongduoi.src="images/ongduoi.png";
class ongtrend {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  ongtrens = []
  ong = {
      x: 500,
      y: 0 
  }
var bird = {
    x:100,
    y:250
}

var distance = 140
const gamerun = () =>{
    context.drawImage(hinhnenchinh,0,0)
    context.drawImage(birdimg,bird.x,bird.y)  
    bird.y += 3
    ong.x +=250
    ong.y =  Math.floor(Math.random() * 200)-200
    //console.log(ong.y);
    
    ongtrens.push( new ongtrend (ong.x,ong.y))
    // if(ongtrens.length >10 ) {
    //     ongtrens.shift()
        
    // }
    for ( var i = 0; i< ongtrens.length; i++){
        context.drawImage(ongtren,ongtrens[i].x,ongtrens[i].y)
    context.drawImage(ongduoi,ongtrens[i].x,(ongtren.height+ongtrens[i].y)+distance)
    ongtrens[i].x -= 5
    
      
     
        if(( ongtrens[i].x == 100 && bird.y-birdimg.height <  (ongtren.height+ongtrens[i].y))
        ||( ongtrens[i].x == 100 && bird.y+birdimg.height >  (ongtren.height+ongtrens[i].y+distance))){
        
            return
        }
     
    }
     
    // for ( var i = 0; i< ongtrens.length; i++){
    // if(ongtrens[i].x ==0 )ongtrens  .splice(0,1);}
    // console.log(ongtrens);
    
    if(bird.y+birdimg.height > 500 || bird.y-birdimg.height < 0 )
        {
        return
    }
    setTimeout(gamerun,15)
}   
document.addEventListener('keydown',key =>{
    if (key.keyCode == 32){
        bird.y -= 70    
    }
    
})  


gamerun()