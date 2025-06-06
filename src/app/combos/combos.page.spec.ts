import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CombosPage } from './combos.page';

describe('CombosPage', () => {
  let component: CombosPage;
  let fixture: ComponentFixture<CombosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CombosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
