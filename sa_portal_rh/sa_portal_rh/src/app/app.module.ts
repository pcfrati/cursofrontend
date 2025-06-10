import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { FormsModule } from '@angular/forms';
import { CurriculoFormComponent } from './views/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './views/curriculo-list/curriculo-list.component';
import { CurriculoDetailComponent } from './views/curriculo-detail/curriculo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CurriculosComponent,
    VagasComponent,
    HomeComponent,
    PainelVagasComponent,
    CurriculoFormComponent,
    CurriculoListComponent,
    CurriculoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
