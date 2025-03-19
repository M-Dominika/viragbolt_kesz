import { Component } from '@angular/core';
import { AdatokService } from '../../services/adatok.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-megrendeles',
  standalone: false,
  templateUrl: './megrendeles.component.html',
  styleUrl: './megrendeles.component.css'
})
export class MegrendelesComponent {

  viragok: any[] = [];
  rendelt_darab: number = 0;

  constructor(private adatok: AdatokService, private router:Router) { }

  ngOnInit() {
    this.lekeres();
  }

  lekeres() {
    this.adatok.getid().subscribe((adat) => {
      this.viragok = adat;
    });
  }

  rendeles(id: number) {
    const virag = this.viragok.find(v => v.id === id);

    const eredeti_keszlet = virag.keszlet;

    const modositott = {
      keszlet: eredeti_keszlet - this.rendelt_darab
    };
    if(modositott.keszlet<0)
    {
      alert('Nincs elegendő a raktáron!')
    }
    else{
      this.adatok.put(id, modositott).subscribe({
        next: () => {
          alert("Sikeres rendelés!");
          this.router.navigate(["aruk"]);
        },
        error: () => {
          alert("Nem sikerült a rendelés!");
        }
      });
    }
  }

}