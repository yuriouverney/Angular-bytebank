import { Component } from '@angular/core';
//o  "app" como prefixo no selector é devido ao prefixo que está colocado no angular.json
@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})


export class NovaTransferenciaComponent{
  valor!: number;
  destino!: number;

  transferir(){
    console.log('Nova transferencia realizada');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}