import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidasComPage } from './bebidas-com.page';

describe('BebidasComPage', () => {
  let component: BebidasComPage;
  let fixture: ComponentFixture<BebidasComPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasComPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
