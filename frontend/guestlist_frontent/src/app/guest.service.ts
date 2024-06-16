import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private apiUrl = 'http://localhost:3000/guest';

  constructor(private http: HttpClient) { }

  getGuests(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteGuest(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
