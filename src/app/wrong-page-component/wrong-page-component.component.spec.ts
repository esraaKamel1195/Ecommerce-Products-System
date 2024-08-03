import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongPageComponentComponent } from './wrong-page-component.component';

describe('WrongPageComponentComponent', () => {
  let component: WrongPageComponentComponent;
  let fixture: ComponentFixture<WrongPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrongPageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
