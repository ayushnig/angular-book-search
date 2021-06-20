import { Injectable } from '@angular/core';
import { Book } from './model/book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  apiRoot = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  getBooks(author: any): Observable<Book[]> {
    if (!author) {
      return of([]);
    }
    return this.http
      .get<Book[]>(
        `${this.apiRoot}?q=intitle:"${author}"&langRestrict=en&maxResults=12`
      )
      .pipe(
        tap((_) => console.log('Fetching books' + JSON.stringify(_))),
        catchError((e) => throwError(e))
      );
  }

  public findBookById(id: String): Observable<Book> {
    if (!id) {
      return of();
    }
    return this.http.get<Book>(`${this.apiRoot}/${id}`)
      .pipe(
        tap((_) => console.log('Fetching book' + JSON.stringify(_))),
        catchError((e) => throwError(e))
      );
  }
}
