import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import {UsuariService} from "../usuari.service";
import {Router} from "@angular/router";

interface Datos {
  data_compra: string;
  producte_comprat: string;
  quantitat: number;
  oferta: boolean;
}

@Component({
  selector: 'app-grafics',
  templateUrl: './grafics.component.html',
  styleUrls: ['./grafics.component.css', '../../assets/css/Default.css']
})
export class GraficsComponent {
  dades: any[] = [];
  autenticat= this.usuariServei.autenticat;

  constructor(private http: HttpClient,private usuariServei: UsuariService,public router:Router) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Nom;
      if(this.usuariServei.arrClients.clients[this.usuariServei.posAutenticat].Rol == 'root'){
        this.root = true;
      }
      else{
        this.root=false
        this.router.navigate(['/']);
      };
    }else{
      this.router.navigate(['/']);
    }
    this.http.get<Datos[]>('http://localhost:3080/dadescompres').subscribe((data: Datos[]) => {
      this.dades = data;
      this.renderChart();
    });
  }

  renderChart() {
    // Agrupar los datos por fecha y producto
    const groupedData = this.dades.reduce((result, d) => {
      const key = `${d.data_compra}-${d.producte_comprat}`;
      if (!result[key]) {
        result[key] = {
          label: d.producte_comprat,
          data: [],
          backgroundColor: this.getRandomColor(),
        };
      }
      result[key].data.push(d.quantitat);
      return result;
    }, {});

    // Crear un conjunto de datos para cada grupo de datos
    const datasets = Object.keys(groupedData).map(key => groupedData[key]);

    // Configurar la gráfica de barras
    new Chart('grafic-ventes', {
      type: 'bar',
      data: {
        labels: this.getUniqueDates(),
        datasets: datasets,
      },
      options: {
        responsive: true,
        scales: {
          y: {
            stacked: false,
          },
          x: {
            beginAtZero: true,
            stacked: false,
          },
        },
      },
    });
    const groupedDataOferta = this.dades.reduce((result, d) => {
      const key = `${d.data_compra}-${d.oferta}`;
      if (!result[key]) {
        result[key] = {
          label: d.oferta ? 'En Oferta' : 'Cap Oferta',
          data: [],
          borderColor: d.oferta ? 'green' : 'red',
          fill: false,
        };
      }
      result[key].data.push(d.quantitat);
      return result;
    }, {});

    // Crear un conjunto de datos para cada grupo de datos
    const datasetsOferta = Object.keys(groupedDataOferta).map(key => groupedDataOferta[key]);

    // Configurar la gráfica de líneas
    new Chart('grafic-oferta', {
      type: 'line',
      data: {
        labels: this.getUniqueDates(),
        datasets: datasetsOferta,
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

// Obtener una lista de todas las fechas únicas en los datos
  private getUniqueDates(): string[] {
    return [...new Set(this.dades.map(d => d.data_compra))];
  }

// Generar un color aleatorio para cada conjunto de datos
  nomAutenticat: any;
  root: any;
  private getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  tancarSessio() {
    this.usuariServei.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
}
