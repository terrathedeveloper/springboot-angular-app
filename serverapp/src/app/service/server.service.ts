import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CustomResponse } from '../interface/custom-response';
import { Server } from '../interface/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
 
  private readonly apiUrl = ''
  constructor(private http:HttpClient) { 

  }
  /*getServers():Observable<CustomResponse>{
    return this.http.get<CustomResponse>(`http://localhost:8082/server/list`);
  }*/
  servers$ =<Observable<CustomResponse>> 
  this.http.get<CustomResponse>(`${this.apiUrl}/server/list`)
  .pipe(
    tap(console.log),catchError(this.handleError)
  )
  save$ =(server:Server)=><Observable<CustomResponse>> 
  this.http.post<CustomResponse>(`${this.apiUrl}/server/save`, server)
  .pipe(
    tap(console.log),catchError(this.handleError)
  )
  ping$ =(ipAddress:string)=><Observable<CustomResponse>> 
  this.http.get<CustomResponse>(`${this.apiUrl}/server/ping${ipAddress}`)
  .pipe(
    tap(console.log),catchError(this.handleError)
  )
  delete$ =(serverId:string)=><Observable<CustomResponse>> 
  this.http.delete<CustomResponse>(`${this.apiUrl}/server/delete${serverId}`)
  .pipe(
    tap(console.log),catchError(this.handleError)
  )
  handleError(handleError: any): Observable<never> {
    return throwError('Method not implemented.');
  }
}
