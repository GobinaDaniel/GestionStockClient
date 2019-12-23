import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ProduitsService} from './service/produits.smock.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import {ProduitServiceSmock} from './service/produits.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProduitsService, ProduitServiceSmock],
  bootstrap: [AppComponent]
})
export class AppModule { }
