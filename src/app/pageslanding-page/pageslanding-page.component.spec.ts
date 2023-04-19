import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageslandingPageComponent } from './pageslanding-page.component';

describe('PageslandingPageComponent', () => {
  let component: PageslandingPageComponent;
  let fixture: ComponentFixture<PageslandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageslandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageslandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
