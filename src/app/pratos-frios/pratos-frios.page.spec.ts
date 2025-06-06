import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratosFriosPage } from './pratos-frios.page';

describe('PratosFriosPage', () => {
  let component: PratosFriosPage;
  let fixture: ComponentFixture<PratosFriosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosFriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
