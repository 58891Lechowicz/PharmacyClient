import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PharmacyService {

  constructor(private http: HttpClient) { }

  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>('https://localhost:7083/Medication');
  }
}

export interface Medication {
  id: number;
  name: string;
  activeSubstance: string;
  doseMg: number;
  prescriptionRequired: boolean;
  manufacturer: string;
}
