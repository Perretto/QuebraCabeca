import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VitoriaPage } from '../vitoria/vitoria.page';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.page.html',
  styleUrls: ['./jogo.page.scss'],
})

export class JogoPage implements OnInit {
  public folder: string;
  public matrizTela: number[][];
  public sequencia: number[];
  public mov: number;
  constructor(private activatedRoute: ActivatedRoute, private modalCtrl: ModalController) { 
    
  }

  ngOnInit() {
    this.mov = 0;
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.misturar();
    this.desenhar();

  }

  misturar(){
    this.sequencia = [];
    var quantidade = 9;
    for (let index = 0; index < quantidade; index++) {      
      this.sequencia.push(index);      
    }
    this.sequencia = this.embaralhar(this.sequencia);
  }

// Algoritmo de embaralhamento de Fisher–Yates
embaralhar(array) {
  for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  desenhar(){
    for (const key in this.sequencia) {
      if (Object.prototype.hasOwnProperty.call(this.sequencia, key)) {
        const element = this.sequencia[key];
        var elem = <HTMLImageElement>document.getElementById('campo' + key);
        elem.src = "../assets/img/" + element + ".jpg";        
      }
    }
  }

  onSwipe(elem){
    var porlinha = 3;
    //direita
    if(this.sequencia[elem + 1] == 0 && elem != 2 && elem != 5){
      this.atualizarCampo(elem, elem + 1);
    }
    
    //esquerda
    if(this.sequencia[elem - 1] == 0 && elem != 0 && elem != 3 && elem != 6){
      this.atualizarCampo(elem, elem - 1);
    }
    
    //baixo
    var novo = (elem + 1) + porlinha;
    if(this.sequencia[novo - 1] == 0 && elem != 6 && elem != 7 && elem != 8){
      this.atualizarCampo(elem, novo - 1);
    }

    //cima
    novo = (elem + 1) - porlinha;
    if(this.sequencia[novo - 1] == 0 && elem != 0 && elem != 1 && elem != 2){
      this.atualizarCampo(elem, novo - 1);
    }

    this.mov++;
  }

  atualizarCampo(antigo, novo){
    var valor = this.sequencia[antigo];    
    var valornovo = this.sequencia[novo];

    if(valornovo == 0){
      this.sequencia[novo] = valor;
      this.sequencia[antigo] = 0;
      console.log(this.sequencia);
      this.desenhar();
    }
    
    if(this.verificar()){
      this.desenharVitoria();
    }
  } 

  verificar(){
    var ganhou = true;
    for (let index = 0; index < this.sequencia.length; index++) {
      const element = this.sequencia[index];
      if(((index + 1) != element && (index + 1) != this.sequencia.length) || (index + 1) == 9 && element != 0){
        ganhou = false;
        break;
      }      
    }

    return ganhou;
  }

  desenharVitoria(){
    this.createModal();
    this.ngOnInit();
  }

  async createModal() {
    const modal = await this.modalCtrl.create({
      component: VitoriaPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();
  }

}
