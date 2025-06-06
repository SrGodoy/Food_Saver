import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaesPage } from './paes.page';

describe('PaesPage', () => {
  let component: PaesPage;
  let fixture: ComponentFixture<PaesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
