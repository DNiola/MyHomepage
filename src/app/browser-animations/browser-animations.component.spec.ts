import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsComponent } from './browser-animations.component';

describe('BrowserAnimationsComponent', () => {
  let component: BrowserAnimationsComponent;
  let fixture: ComponentFixture<BrowserAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowserAnimationsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BrowserAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
