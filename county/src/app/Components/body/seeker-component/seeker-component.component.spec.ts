import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerComponentComponent } from './seeker-component.component';

describe('SeekerComponentComponent', () => {
  let component: SeekerComponentComponent;
  let fixture: ComponentFixture<SeekerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeekerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
