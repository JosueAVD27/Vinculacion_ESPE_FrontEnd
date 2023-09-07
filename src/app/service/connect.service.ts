import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environmen';
import { Transaction } from '../interfaces/incidentes.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class ConnectService {
  private filteredTransactionsSubject: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);
  public filteredTransactions: Observable<Transaction[]> = this.filteredTransactionsSubject.asObservable();

  constructor(private http: HttpClient) { }

  cargarAnios() {
    const url = `${base_url}/grafica/anios`;
    return this.http.get<any>(url);
  }

  cargarSector() {
    const url = `${base_url}/grafica/sectores`;
    return this.http.get<any>(url);
  }

  cargarTotalIncidentes() {
    const url = `${base_url}/grafica/incidentes`;
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorSector(sector: string) {
    const url = `${base_url}/grafica/incidentesPorSector?sector=${sector}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorSectorYAnio(year: string, sector: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYAnio?year=${year}&sector=${sector}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorSectorYAnioYMes(year: string, month: string, sector: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYAnioYMes?year=${year}&month=${month}&sector=${sector}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorSectorYAnioYMesYDia(year: string, month: string, day: string, sector: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYAnioYMesYDia?year=${year}&month=${month}&day=${day}&sector=${sector}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorAnio(year: string) {
    const url = `${base_url}/grafica/incidentesPorAnio?year=${year}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorAnioYMes(year: string, month: String) {
    const url = `${base_url}/grafica/incidentesPorAnioYMes?year=${year}&month=${month}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorAnioYMesYDia(year: string, month: string, day: string) {
    const url = `${base_url}/grafica/incidentesPorAnioYMesYDia?year=${year}&month=${month}&day=${day}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  setFilteredTransactions(transactions: Transaction[]): void {
    this.filteredTransactionsSubject.next([...transactions]); // Hacer una copia del arreglo de transacciones
  }
}