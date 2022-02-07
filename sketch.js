/* ##########################jogo do aluno Gabriel Moyses###########################
*******História: um garoto se deita para dormir, sua mãe te dá um beijo de boa noite,
então ele entra em um sono profundo e sonha que é um guerreiro, que deve salvar uma princesa.
*****Regras do jogo: o personagem segue andando e desviando dos obstáculos, para cada faze o jogo 
muda para ele poder infrentar um fechão que o levará para outra fase. --Ass.: Prof Carla */


/*!!!!!Precisamos criar o estado de jogo, lembrando que cada momento que ele encontra com o chefão 
o estado de jogo muda, então precisa ser criado as animações que vão ser chamadas para cada batalha.
pensei em usar motores de física apenas nas batalhas. fala o que vc está achando das ideias e modificações
todos tudo que for feito quero que vc comente e assine,blz? --Ass.: Prof Carla */




// declaração das variáveis --Ass.: Prof Carla 

var menino, meninoImg;
var chao, chaoImg;
var obstaculos;
var chefao;



//carregar as imagens com a função preload --Ass.: Prof Carla 

function preload(){
  meninoImg = loadAnimation("p1.png", "p2.png","p3.png", "p4.png");

  //precisa criar a imagem do solo para poder loadar aqui. e os obstáculos tbm --Ass.: Prof Carla 

}

//criação dos sprits na função setup --Ass.: Prof Carla 
function setup(){
  createCanvas(1200, 600);
  chao = createSprite(600, 450, 1200, 60);
  menino = createSprite(100, 400, 80, 80);
  menino.addAnimation("meninoAndando", meninoImg);

  


}

//programação das regras na função draw --Ass.: Prof Carla 
function draw(){
  background(200);




  drawSprites();
}

//funções adicionais --Ass.: Prof Carla 
