import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedInLinksComponent } from './signed-in-links.component';

describe('SignedInLinksComponent', () => {
  let component: SignedInLinksComponent;
  let fixture: ComponentFixture<SignedInLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedInLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedInLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
