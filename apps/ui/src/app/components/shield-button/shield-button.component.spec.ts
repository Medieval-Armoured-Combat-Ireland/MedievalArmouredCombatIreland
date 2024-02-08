import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShieldButtonComponent } from './shield-button.component';

describe('ShieldButtonComponent', () => {
  let component: ShieldButtonComponent;
  let fixture: ComponentFixture<ShieldButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShieldButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShieldButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
