import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidasSemPage } from './bebidas-sem.page';

describe('BebidasSemPage', () => {
  let component: BebidasSemPage;
  let fixture: ComponentFixture<BebidasSemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasSemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
