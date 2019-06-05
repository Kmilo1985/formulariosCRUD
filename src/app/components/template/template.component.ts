import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `.ng-invalid.ng-touched:not form {
      border: solid 1px red
    }`

  ]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: 'CRI',
    genero: 'Hombre',
    acepta: false

  };

  datos: any[] =[
    {
    codigo: 'CRI',
    nombre: 'Costa rica'
  },
  { 
    codigo: 'ESP',
    nombre: 'España'
  }
];

generos: string[] = ['Hombre', 'Mujer'];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm ) {
    console.log('ngForm', forma);
    console.log('valor fORMA', forma.value);
    console.log('Usuario', this.usuario);
    console.log('datos', this.datos);

  }

}
