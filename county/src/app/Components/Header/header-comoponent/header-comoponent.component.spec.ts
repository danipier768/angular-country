import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComoponentComponent } from './header-comoponent.component';

describe('HeaderComoponentComponent', () => {
  let component: HeaderComoponentComponent;
  let fixture: ComponentFixture<HeaderComoponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComoponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
