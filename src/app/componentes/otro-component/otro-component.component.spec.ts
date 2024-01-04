import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroComponentComponent } from './otro-component.component';

describe('OtroComponentComponent', () => {
  let component: OtroComponentComponent;
  let fixture: ComponentFixture<OtroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtroComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
