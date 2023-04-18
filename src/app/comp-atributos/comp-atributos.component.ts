import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'disabled';
  corFundo: string = 'white';
  corFonte: string = 'pink';
  item: string = '';
  lista: string[] = [];

  constructor() {}

  adicionarLista() {
    this.lista.push(this.item);
  }

  ngOnInit(): void {}

  trocar() {
    if (this.estilo === 'disabled') {
      this.estilo = 'enabled';
    } else {
      this.estilo = 'disabled';
    }
  }
}
