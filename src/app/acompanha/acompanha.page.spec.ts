import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcompanhaPage } from './acompanha.page';

describe('AcompanhaPage', () => {
  let component: AcompanhaPage;
  let fixture: ComponentFixture<AcompanhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
