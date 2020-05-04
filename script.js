function rpsGame(yourchoice){
var humanChoice =yourchoice.alt;
var random=Math.floor(Math.random()*3)
var bot=['rock','paper','scissors'][random]
var result=decide(humanChoice,bot)
console.log(result)
 var message=finalMessage(result)
 console.log(message)
 rpsFrontend(humanChoice,bot,message)
}

function decide(x,y) {
    var rpsDatabase={
        'rock':{'rock':0.5,'scissors':1,'paper':0},
        'paper':{'paper':0.5,'scissors':0,'rock':1},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}

    }
    var yourscore=rpsDatabase[x][y]
    return yourscore

}

function finalMessage(score){
  if (score==0) {
    return {'message':'You lost!','color':'red'}
  }
  else if(score==0.5){
    return {'message':"it's a tie!",'color':'yellow'}
  }
  
  else{
    return {'message':'You won!','color':'green'}
  
  }
}

function rpsFrontend(humanimage,botimage,message) {
  var imageDatabase={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
  }
  document.getElementById('rock').remove()
  document.getElementById('paper').remove()
  document.getElementById('scissors').remove()

  var humandiv=document.createElement('div')
  var botdiv=document.createElement('div')
  var messagediv=document.createElement('div')

humandiv.innerHTML="<img src='"+imageDatabase[humanimage]+"'  width='250' height='200'/img>"
humandiv.style.boxShadow=' 0px 10px 40px blue'
document.getElementById('flex').appendChild(humandiv)

messagediv.innerHTML="<h1>"+message.message+"</h1>" //or message['message']
messagediv.style.color=message.color //or message['color']
document.getElementById('flex').appendChild(messagediv)

botdiv.innerHTML="<img src='"+imageDatabase[botimage]+"'  width='250' height='200'/img>"
botdiv.style.boxShadow=' 0px 10px 40px red'
document.getElementById('flex').appendChild(botdiv)

document.getElementById('container').style.backgroundColor='black'
document.getElementById('h1').style.color='white'

setTimeout("location.reload(true)",1000)
}