import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDashboardComponent } from './navbar-dashboard.component';

describe('NavbarDashboardComponent', () => {
  let component: NavbarDashboardComponent;
  let fixture: ComponentFixture<NavbarDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
