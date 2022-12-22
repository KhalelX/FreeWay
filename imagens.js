// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemDoCarro = loadImage("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens/carro-3.png");
  imagemDoCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
  somTrilha = loadSound("Sons/trilha.mp3");
  somColisao = loadSound("Sons/colidiu.mp3");
  somPonto = loadSound("Sons/pontos.wav");
  
}