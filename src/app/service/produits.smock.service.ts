import { Injectable } from '@angular/core';
import {Produit} from '../shared/produitClass';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private PRODUITS: Produit[] = [];
  constructor() {
    let p1: Produit = new Produit('Livre',50,20);
    let p2: Produit = new Produit('Cahier',60,5.2);
    let p3: Produit = new Produit('Sac',50,10);
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p2);
   }

   public getProduit(): Produit[] {
     return this.PRODUITS;
   }
}
