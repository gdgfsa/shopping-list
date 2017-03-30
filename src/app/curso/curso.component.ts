import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'curso',
  template: '{{ nome }}',
  styleUrls: ['./curso.component.css'],
  inputs:['nome']
})
export class CursoComponent implements OnInit {

  //@Input('curso')
   nome: string='';
  constructor() { }

  ngOnInit() {
  }

}
