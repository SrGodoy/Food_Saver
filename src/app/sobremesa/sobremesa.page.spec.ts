import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobremesaPage } from './sobremesa.page';

describe('SobremesaPage', () => {
  let component: SobremesaPage;
  let fixture: ComponentFixture<SobremesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
