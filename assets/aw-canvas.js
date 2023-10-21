




document.addEventListener(
"DOMContentLoaded",init);

var particles=[]

var colors=[]
//main code goes here↓
function run(){



anim()
}


//animations here↓
function anim(){
refresh()



requestAnimationFrame(anim)
}


















//event listners ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎================================


//resize ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 
function eventu(){
window.addEventListener("resize",()=>{
can.height=window.innerHeight 
can.width=window.innerWidth
run() 
})
//touch move ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
window.addEventListener("touchmove",(event)=>{
    mouse.x=event.touches[0].clientX
    mouse.y=event.touches[0].clientY
})
//tap ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
window.addEventListener("mousemove",(event)=>{
    mouse.x=event.clientX
    mouse.y=event.clientY 
})

}


//initialization ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎================================

function init(){
    can=document.querySelector("canvas")
    can.width=window.innerWidth
    can.height=window.innerHeight
    c=can.getContext("2d")
    run()
    eventu()
    
    
}




//object circle ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎================================
class Circle{

constructor(x,y,rad,vx,vy,cl="white"){
this.x=x
this.y=y
this.rad=rad
this.vx=vx
this.vy=vy
this.col=cl
this.spinx=x
this.spiny=y
this.radian=0
}
//methods-draw()‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
draw(){
    c.beginPath()
    c.fillStyle=this.col
    c.arc(this.x,this.y,this.rad,0,Math.PI*2,false)
    c.strokeStyle=this.col
    c.stroke()
    c.fill()
}
//methods-update()‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎
    update(){
        if(this.x+this.rad>innerWidth||this.x-this.rad<0){
     this.vx=-this.vx
        }
if(this.y+this.rad>innerHeight||this.y-this.rad<0){
     this.vy=-this.vy
}
     this.x+=this.vx
     this.y+=this.vy
     this.draw()
    }
//methods-updateG()‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
   updateG(f,g){
        if(this.x+this.rad>innerWidth||this.x-this.rad<0){
     this.vx=-this.vx
        }
if(this.y+this.rad+this.vy>can.height){
    this.vy=-this.vy*f
}else{
    this.vy+=g
    
}

     this.x+=this.vx
     this.y+=this.vy
     this.draw()
    } 
//methods-updateN()‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 

    updateN(){
       this.x+=this.vx
     this.y+=this.vy
     this.draw() 
        
}
//methods-updateC()‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
updateC(spinv,rot,rot2){
this.draw()
this.radian+=spinv
    this.x=this.spinx+Math.cos(this.radian)*rot
    this.y=this.spiny+Math.sin(this.radian)*rot2
}
        
    }

     
//object square ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎================================

class Square{

constructor(x,y,w,h,vx,vy,col){

    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.vx=vx
    this.vy=vy
    this.col=col
    this.spinx=x
    this.spiny=y
    this.radian=0
}


//methods-draw()
    draw(){
        c.beginPath()
    c.fillStyle=this.col
    c.rect(this.x,this.y,this.w,this.h)
    c.strokeStyle=this.col
    c.stroke()
    c.fill()
    }
    
//methods-update()
update(){
        if(this.x+this.w>innerWidth||this.x<0){
     this.vx=-this.vx
        }
if(this.y+this.h>innerHeight||this.y<0){
     this.vy=-this.vy
}
     this.x+=this.vx
     this.y+=this.vy
     this.draw()
    }    

//methods-updateG()‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
   updateG(f,g){
        if(this.x+this.w>innerWidth||this.x<0){
     this.vx=-this.vx
        }
if(this.y+this.h+this.vy>can.height){
    this.vy=-this.vy*f
}else{
    this.vy+=g
    
}

this.x+=this.vx
     this.y+=this.vy
     this.draw()
}   
    
    
//methods-updateN()
updateN(){
       this.x+=this.vx
     this.y+=this.vy
     this.draw()
}


//methods-updateC()
updateC(spinv,rot,rot2){
this.draw()
this.radian+=spinv
    this.x=this.spinx+Math.cos(this.radian)*rot
    this.y=this.spiny+Math.sin(this.radian)*rot2
}

    
    
    
}

//object spriteSheet                         ============================


class SpriteSheet{


constructor(imgLink,nrx,nry){
//no of rows in x direction=>nrx
//no of rows in y direction=>nry

this.img=new Image()
this.img.src=imgLink
this.nrx=nrx
this.nry=nry
this.img.addEventListener("load",()=>{

this.spriteH=this.img.height/this.nry
this.spriteW=this.img.width/this.nrx  

this.nx=0
this.ny=0



   
})

}

draw(nx,ny,px,py,pw=this.spriteW,ph=this.spriteH){

this.nx=nx
this.ny=ny
    c.drawImage(this.img,this.spriteW*this.nx,this.spriteH*this.ny,this.spriteW,this.spriteH,px,py,pw,ph)
    
}

update(){
    if(this.nx<3){
        this.nx++
    }else{
        this.nx=0
    }
}



    
}




//object mouse ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎================================

var mouse={
    x:innerWidth/2,
    y:innerHeight/2
}






//utility functions ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎================================ 
     
    
    
//inbuilt randomizer ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ 
function random(g,l=0){
    return Math.floor(Math.random()*(g-l+1)+l
  )  
}

//inbuilt arraychoicer ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
function chooser(ar){
    return ar[Math.floor(Math.random()*ar.length)]
}

//inbuilt frame refresher ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
function refresh(){
    c.clearRect(0,0,can.width,can.height)
}
//inbuilt neon trail ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 

function trail(color){
    c.fillStyle=color
    c.fillRect(0,0,can.width,can.height)
}


//collision dectector ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ 

function collisionCircle(n1,n2){
xcr=n2.x-n1.x
ycr=n2.y-n2.y
var diffrec=Math.sqrt(Math.pow(xcr,2)+Math.pow(ycr,2))
if(n1==0||n2==0){
    return diffrec
}else{

   if(diffrec<=n1.rad+n2.rad){
       
      return true

   }else{
       return false
   }}
     
}

function collisionSquare(rect1,rect2){
    if (rect1.x < rect2.x + rect2.w &&
   rect1.x + rect1.w > rect2.x &&
   rect1.y < rect2.y + rect2.h &&
   rect1.y + rect1.h> rect2.y) {
    
    return true
}else{
    return false
}
}




//=========THE END=============
/*this template model is written by atomic wave */


/*==perlin noise by chris courses===*/



const PERLIN_YWRAPB = 4
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB
const PERLIN_ZWRAPB = 8
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB
const PERLIN_SIZE = 4095

let perlin_octaves = 4 // default to medium smooth
let perlin_amp_falloff = 0.5 // 50% reduction/octave

const scaled_cosine = (i) => 0.5 * (1.0 - Math.cos(i * Math.PI))

let perlin 

 const noise = function(x, y = 0, z = 0) {
  if (perlin == null) {
    perlin = new Array(PERLIN_SIZE + 1)
    for (let i = 0; i < PERLIN_SIZE + 1; i++) {
      perlin[i] = Math.random()
    }
  }

  if (x < 0) {
    x = -x
  }
  if (y < 0) {
    y = -y
  }
  if (z < 0) {
    z = -z
  }

  let xi = Math.floor(x),
    yi = Math.floor(y),
    zi = Math.floor(z)
  let xf = x - xi
  let yf = y - yi
  let zf = z - zi
  let rxf, ryf

  let r = 0
  let ampl = 0.5

  let n1, n2, n3

  for (let o = 0; o < perlin_octaves; o++) {
    let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB)

    rxf = scaled_cosine(xf)
    ryf = scaled_cosine(yf)

    n1 = perlin[of & PERLIN_SIZE]
    n1 += rxf * (perlin[(of + 1) & PERLIN_SIZE] - n1)
    n2 = perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE]
    n2 += rxf * (perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2)
    n1 += ryf * (n2 - n1)

    of += PERLIN_ZWRAP
    n2 = perlin[of & PERLIN_SIZE]
    n2 += rxf * (perlin[(of + 1) & PERLIN_SIZE] - n2)
    n3 = perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE]
    n3 += rxf * (perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3)
    n2 += ryf * (n3 - n2)

    n1 += scaled_cosine(zf) * (n2 - n1)

    r += n1 * ampl
    ampl *= perlin_amp_falloff
    xi <<= 1
    xf *= 2
    yi <<= 1
    yf *= 2
    zi <<= 1
    zf *= 2

    if (xf >= 1.0) {
      xi++
      xf--
    }
    if (yf >= 1.0) {
      yi++
      yf--
    }
    if (zf >= 1.0) {
      zi++
      zf--
    }
  }
  return r
}


const noiseDetail = function(lod, falloff) {
  if (lod > 0) {
    perlin_octaves = lod
  }
  if (falloff > 0) {
    perlin_amp_falloff = falloff
  }
}


const noiseSeed = function(seed) {
  
  const lcg = (() => {

    const m = 4294967296
    // a - 1 should be divisible by m's prime factors
    const a = 1664525
    // c and m should be co-prime
    const c = 1013904223
    let seed, z
    return {
      setSeed(val) {
        
        z = seed = (val == null ? Math.random() * m : val) >>> 0
      },
      getSeed() {
        return seed
      },
      rand() {
        z = (a * z + c) % m
        
        return z / m
      }
    }
  })()

  lcg.setSeed(seed)
  perlin = new Array(PERLIN_SIZE + 1)
  for (let i = 0; i < PERLIN_SIZE + 1; i++) {
    perlin[i] = lcg.rand()
  }
}




