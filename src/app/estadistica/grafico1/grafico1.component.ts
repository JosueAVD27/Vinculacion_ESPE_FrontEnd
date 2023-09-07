import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ResultObject, Transaction } from 'src/app/interfaces/incidentes.interface';
import { ConnectService } from 'src/app/service/connect.service';

@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})

export class Grafico1Component implements OnInit {
  @ViewChild('chart', { static: true }) chart: any;
  @Input() transactions: Transaction[] = [];

  public dataIncidentes: ResultObject = {
    robo: 0,
    emergenciaMedica: 0,
    incendio: 0,
    desastreNatural: 0,
    accidenteDeTrafico: 0,
    sinIncidente: 0,
    otros: 0
  };

  public total: number = 0;
  public roboRes: number = 0;
  public emergenciaRes: number = 0;
  public incendioRes: number = 0;
  public desastreRes: number = 0;
  public accidenteRes: number = 0;
  public sinIncidenteRes: number = 0;
  public otrosRes: number = 0;

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
    this.inicializarDatos();
  }

  inicializarDatos() {
    this.connectService.cargarTotalIncidentes().subscribe((res: any) => {
      this.dataIncidentes = res;

      this.total = this.dataIncidentes.robo + 
                   this.dataIncidentes.emergenciaMedica + 
                   this.dataIncidentes.incendio + 
                   this.dataIncidentes.desastreNatural + 
                   this.dataIncidentes.accidenteDeTrafico +
                   this.dataIncidentes.sinIncidente +
                   this.dataIncidentes.otros;

      this.roboRes = (this.dataIncidentes.robo / this.total) * 100;
      this.emergenciaRes = (this.dataIncidentes.emergenciaMedica / this.total) * 100;
      this.incendioRes = (this.dataIncidentes.incendio / this.total) * 100;
      this.desastreRes = (this.dataIncidentes.desastreNatural / this.total) * 100;
      this.accidenteRes = (this.dataIncidentes.accidenteDeTrafico / this.total) * 100;
      this.sinIncidenteRes = (this.dataIncidentes.sinIncidente / this.total) * 100;
      this.otrosRes = (this.dataIncidentes.otros / this.total) * 100;

      this.chartOptions = {
        animationEnabled: true,
        title: {
          text: "Total de Incidentes"
        },
        data: [{
          type: "doughnut",
          yValueFormatString: "#,###.##'%'",
          indexLabel: "{name}: {y}",
          dataPoints: [
            // { y: this.sinIncidenteRes, name: "Sin Incidentes" },
            { y: this.accidenteRes, name: "Accidente de Tráfico" },
            { y: this.emergenciaRes, name: "Emergencia Médica" },
            { y: this.roboRes, name: "Robo" },
            { y: this.incendioRes, name: "Incendios" },
            { y: this.desastreRes, name: "Desastres Naturales" },
            { y: this.otrosRes, name: "Otros" }
          ]
        }]
      };
      this.chartInstance.render();
    });
  }

  chartOptions: any = {};

  chartInstance: any;
  actualizarGrafica(): void {
    this.chartInstance?.render();
  }

  ngOnChanges(): void {
    this.actualizarGrafica();
  }
}