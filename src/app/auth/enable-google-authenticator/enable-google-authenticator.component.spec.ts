import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableGoogleAuthenticatorComponent } from './enable-google-authenticator.component';

describe('EnableGoogleAuthenticatorComponent', () => {
  let component: EnableGoogleAuthenticatorComponent;
  let fixture: ComponentFixture<EnableGoogleAuthenticatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EnableGoogleAuthenticatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableGoogleAuthenticatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
