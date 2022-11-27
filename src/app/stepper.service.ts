import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  constructor(private http: HttpClient) {}

  getAllComments(): Observable<any> {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
  }
}
