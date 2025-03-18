import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegrendelesComponent } from './megrendeles.component';

describe('MegrendelesComponent', () => {
  let component: MegrendelesComponent;
  let fixture: ComponentFixture<MegrendelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MegrendelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegrendelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
