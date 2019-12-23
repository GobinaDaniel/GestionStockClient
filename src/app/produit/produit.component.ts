import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProduitServiceSmock} from '../service/produits.service';
import {Produit} from '../shared/produitClass';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits : Produit[];
  produitForm : FormGroup;

  constructor(private produitService: ProduitServiceSmock, private fb: FormBuilder) {
      this.produitForm = this.fb.group({
        ref : ['', Validators.required],
        quantite : '',
        PU : ''
      });
   }

  ngOnInit() {
    this.loadProduit();
  }

  loadProduit(){
    this.produitService.getProduits().subscribe(
      data => {this.produits = data},
      error => {console.log('An error was occured')},
      () => {console.log('loading produit was done')}
    );
  }
}
