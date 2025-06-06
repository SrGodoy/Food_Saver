import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratosQuentesPage } from './pratos-quentes.page';

describe('PratosQuentesPage', () => {
  let component: PratosQuentesPage;
  let fixture: ComponentFixture<PratosQuentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosQuentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
