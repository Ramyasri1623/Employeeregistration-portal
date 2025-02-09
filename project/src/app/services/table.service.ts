import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
private baseurl='http://localhost:8091/api/v1/getall';
private baseurl1='http://localhost:8091/api/v1/insert';
  constructor(private http:HttpClient) { 

  }
  onsubmit():Observable<any[]>{
 
    return this.http.get<any[]>(`${this.baseurl}`);
  }
  post(reg:Table):Observable<any>{
      
    return this.http.post<any>(`${this.baseurl1}`,reg);
  }
}
