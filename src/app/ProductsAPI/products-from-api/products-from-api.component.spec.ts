import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFromAPIComponent } from './products-from-api.component';

describe('ProductsFromAPIComponent', () => {
  let component: ProductsFromAPIComponent;
  let fixture: ComponentFixture<ProductsFromAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFromAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFromAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
