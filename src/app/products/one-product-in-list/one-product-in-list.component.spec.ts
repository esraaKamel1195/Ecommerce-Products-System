import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProductInListComponent } from './one-product-in-list.component';

describe('OneProductInListComponent', () => {
  let component: OneProductInListComponent;
  let fixture: ComponentFixture<OneProductInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneProductInListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneProductInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
