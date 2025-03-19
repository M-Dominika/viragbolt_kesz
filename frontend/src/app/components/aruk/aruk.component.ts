import { Component } from '@angular/core';
import { AdatokService } from '../../services/adatok.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aruk',
  standalone: false,
  templateUrl: './aruk.component.html',
  styleUrl: './aruk.component.css'
})
export class ArukComponent {

  viragok: any[] = [];
  constructor(private adatok:AdatokService, private router:Router) {}

  ngOnInit(){
    this.lekeres();
  }

  lekeres(){
    this.adatok.get().subscribe((adat) => {
      this.viragok = adat;
    });
  }

  kivalasztott(id:number){
    this.adatok.id_mentes(id);
    this.router.navigate(["megrendeles"]);
  }

}
