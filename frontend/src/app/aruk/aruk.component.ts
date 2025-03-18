import { Component } from '@angular/core';

import { AdatokService } from '../adatok.service';

@Component({
  selector: 'app-aruk',
  standalone: false,
  templateUrl: './aruk.component.html',
  styleUrl: './aruk.component.css'
})
export class ArukComponent {

  viragok: any[] = [];

  constructor(private adatok:AdatokService) {}

  ngOnInit(){
    this.lekeres();
  }

  lekeres(){
    this.adatok.get().subscribe((adat) => {
      this.viragok = adat;
    });
  }

}