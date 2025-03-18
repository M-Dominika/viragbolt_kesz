import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiiratasComponent } from './kiiratas.component';

describe('KiiratasComponent', () => {
  let component: KiiratasComponent;
  let fixture: ComponentFixture<KiiratasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KiiratasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiiratasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
