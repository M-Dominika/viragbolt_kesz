import { Component } from '@angular/core';
import { ViragService } from '../virag.service';

@Component({
  selector: 'app-kiiratas',
  standalone: false,
  templateUrl: './kiiratas.component.html',
  styleUrl: './kiiratas.component.css'
})
export class KiiratasComponent {
  flowers: any[] = [];
  newflower = { id: 0, nev: '', kategoria: { id: 0, nev: '' }, leiras: '', keszlet: '', ar: '', kepUrl: '' };
  constructor(private viragService: ViragService) { }
  ngOnInit(): void {
    this.betoltes();
  }
  betoltes(): void {
    this.viragService.get().subscribe((data) => {
      this.flowers = data;
    });
  }

}
