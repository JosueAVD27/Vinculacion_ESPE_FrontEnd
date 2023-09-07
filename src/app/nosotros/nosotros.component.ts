import { Component } from '@angular/core';
import { datosMovil, datosWeb } from './datos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent {

  datosWeb: datosWeb[] = [
    {name: 'Josue Velasquez', range: 'Estudiante', gmail: 'ajvelasquez4@espe.edu.ec', url:'../../assets/img/administradores/JosueVelasquez.png'},
    {name: 'Mónica Jara', range: 'Estudiante', gmail: 'mejara1@espe.edu.ec', url:'../../assets/img/administradores/MonicaJara.jpg'},
    {name: 'Brandon Bermello', range: 'Estudiante', gmail: 'bjbermello@espe.edu.ec', url:'../../assets/img/administradores/BrandonBermello.jpg'}
  ];

  datosMovil: datosMovil[] = [
    {name: 'Lesly Gaibor', range: 'Estudiante', gmail: 'lcgaibor@espe.edu.ec', url:'../../assets/img/administradores/LeslyGaibor.jpg'},
    {name: 'Melany Caicedo', range: 'Estudiante', gmail: 'mkcaicedo@espe.edu.ec', url:'../../assets/img/administradores/MelanyCaicedo.jpg'},
    {name: 'Bryan Ponce', range: 'Estudiante', gmail: 'bsponce1@espe.edu.ec', url:'../../assets/img/administradores/BrayanPonce.jpg'},
    {name: 'Miguel Ajila', range: 'Estudiante', gmail: 'maajila1@espe.edu.ec', url:'../../assets/img/administradores/MiguelAjila.jpg'}
  ];

}
