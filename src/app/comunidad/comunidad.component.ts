import { Component } from '@angular/core';
import { categoria } from '../interfaces/incidentes.interface';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent {

  popupData: any;

  selectedFilterValue = 'Entidad Pública';

  categoria: categoria[] = [
    // Categorías de ejemplo
    //Organismos
    {
      title: 'UPC',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/PoliciaNacional.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/UPC/UPC.jpg',
      atencion: '00:00am – 23:59pm',
      contacto: '022 233 283',
      correo: 'dnpolco.servicios@gmail.com',
      ubicacion: 'https://goo.gl/maps/fzFyUXTvZGEezhL3A'
    },
    {
      title: 'Ministerio de Salud Pública',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/MinisterioDeSaludPublica.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/MSP/MSP.jpg',
      atencion: '24 horas',
      contacto: '(+593) 2-2381-4400 ext. 110, 1109',
      correo: 'ventanillaunica.msp@msp.gob.ec',
      ubicacion: 'https://goo.gl/maps/RYYiFo5Kkjr6UbB58'
    },
    {
      title: 'Cuerpo de Bomberos',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/Bomberos.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/Bomberos/Foto1.jpg',
      atencion: 'Lunes a Viernes 8:00am -16:30pm',
      contacto: '911 – 102',
      correo: 'info@bpvm.gob.ec',
      ubicacion: 'https://goo.gl/maps/v9kNgeRwV59yi5cQ7'
    },
    //Escuelas
    {
      title: 'Unidad Educativa "Luz de America"',
      category: 'Escuela',
      img: '../../assets/img/DirectorioComunidad/Escuelas/LuzAmerica.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Escuelas/LuzAmerica/foto1.jpg',
      atencion: 'Lunes a Viernes de 7:00 am - 15:00 pm',
      contacto: '02 272 2231',
      correo: 'ueluzdeamerica2@hotmail.com',
      ubicacion: 'https://goo.gl/maps/8yBheA9HbrS1Wy2QA'
    },
    {
      title: 'Unidad Educativa "13 de Abril"',
      category: 'Escuela',
      img: '../../assets/img/DirectorioComunidad/Escuelas/TreceAbril.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Escuelas/TreceAbril/foto1.jpg',
      atencion: 'Lunes a Viernes de 7:00 am - 15:00 pm',
      contacto: '02 272 2109',
      correo: 'escuelatrecedeabril@gmail.com',
      ubicacion: 'https://goo.gl/maps/rLetQZyVfoB6rGyt9'
    },
    //Negocios
    {
      title: 'Costeñito',
      category: 'Negocio',
      img: '../../assets/img/default/default_foto3.jpg',
      imgPop: 'https://costeñito',
      atencion: 'horario costeñito',
      contacto: 'contacto consteñito',
      correo: 'costeñito@gmail.com',
      ubicacion: 'https://ubicacionCosteñito'
    },
    {
      title: 'Restaurante 2',
      category: 'Negocio',
      img: '../../assets/img/default/default_foto4.jpg',
      imgPop: 'https://restaurante2',
      atencion: 'horario restaurante 2',
      contacto: 'contacto restaurante 2',
      correo: 'restaurante2@gmail.com',
      ubicacion: 'https://ubicacionRestaurante2'
    },
    {
      title: 'Restaurante 3',
      category: 'Negocio',
      img: '../../assets/img/default/default_foto5.jpg',
      imgPop: 'https://restaurante3',
      atencion: 'horario restaurante 3',
      contacto: 'contacto restaurante 3',
      correo: 'restaurante3@gmail.com',
      ubicacion: 'https://ubicacionRestaurante3'
    },
    {
      title: 'Restaurante 4',
      category: 'Negocio',
      img: '../../assets/img/default/default_foto6.jpg',
      imgPop: 'https://restaurante4',
      atencion: 'horario restaurante 4',
      contacto: 'contacto restaurante 4',
      correo: 'restaurante4@gmail.com',
      ubicacion: 'https://ubicacionRestaurante4'
    },
  ];

  selectFilterValue(value: string): void {
    this.selectedFilterValue = value;
  }

  isFilterItemActive(category: string): boolean {
    return category === this.selectedFilterValue;
  }

  filterByCategoria(proyectos: categoria[], categoria: string): categoria[] {
    return proyectos.filter(p => p.category === categoria);
  }

  openPopup(categoria: any): void {
    this.popupData = categoria;
  }

  closePopup(): void {
    this.popupData = null;
    setTimeout(() => {
      this.popupData = null;
    }, 300);
  }
}
