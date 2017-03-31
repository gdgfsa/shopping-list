import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  template: `<button class="pure-button" (click)="decrementa()">-</button>
  <input type="text" size="3" [value]="contador" readonly/>
  <button class="pure-button" (click)="incrementa()">+</button>`,
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {


  @Input('valor') contador: number=0;

  @Output() mudouValor: EventEmitter<number>=new EventEmitter();
  constructor() { }

  decrementa(){
    this.contador--;
    this.mudouValor.emit(this.contador);
  }

  incrementa(){
    this.contador++;
    this.mudouValor.emit(this.contador);
  }

  ngOnInit() {
  }

}
