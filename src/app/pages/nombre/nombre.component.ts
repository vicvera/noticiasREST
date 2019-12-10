import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.scss']
})
export class NombreComponent  {
  @Input()
  titulo: string;

  name: string;
  show: boolean;
  boton: string;
  colorBoton: string;

  constructor() {
    this.name = 'Vic';
    this.show = true;
    this.boton = 'Ocultar';
    this.colorBoton = 'warn';
  }

  muestra(muestra: boolean) {
    this.show = muestra;
    if (this.show) {
      this.boton = 'Ocultar';
      this.colorBoton = 'warn';
    } else {
      this.boton = 'Mostrar';
      this.colorBoton = 'primary';
    }
  }
}
