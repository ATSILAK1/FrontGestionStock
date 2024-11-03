import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProduitDisplayComponent } from "../../produit/produit-display/produit-display.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [NavbarComponent, ProduitDisplayComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
