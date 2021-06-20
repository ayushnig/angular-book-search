import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'search/:id', component: BookDetailComponent},
  {path: '**', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
  })

export class AppRoutingModule { }
