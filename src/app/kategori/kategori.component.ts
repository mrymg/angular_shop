import { Component, OnInit } from '@angular/core';
import { Kategori } from './kategori';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  title = "Kategoriler";
  categories : Kategori[] = [
    {id:1, name: "Telefon"},
    {id:2, name: "Televizya"},
    {id:3, name: "Elektronika"},
    {id:4, name: "Kişisel"},
    {id:5, name: "Bilgisayarlar"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
