import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // substitui o browsermodule em um modulo de funcionalidade

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component'; 
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
