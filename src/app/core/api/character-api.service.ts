import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CharacterApiService {

  readonly API = `${environment.baseUrl}/character`;

  constructor(private http: HttpClient) { }

  list(search: string, nextUrl: string = this.API): Observable<any> {
    return this.http.get<any>(nextUrl, { params: { name: search } });
  }

  read(id: number): Observable<any> {
    return this.http.get<any>(this.API, { params: { id } });
  }
}
