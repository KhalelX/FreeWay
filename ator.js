//codigo do ator
let xAtor = 80;
let yAtor = 366;
let colisao = false
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);

}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
     yAtor += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemDoCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15);
    if (colisao){
    voltaAtor();
      somColisao.play();
      if (maiorZero()){
         meusPontos -=1;
      }
    }
  }
}

function voltaAtor (){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(0,250,154)
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos +=1;
    somPonto.play();
    voltaAtor();
  }
}

function maiorZero(){
 return meusPontos > 0
}

function podeSeMover(){
  return yAtor <366
}









