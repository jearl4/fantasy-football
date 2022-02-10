import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanyeQuoteComponent } from './kanye-quote.component';

describe('KanyeQuoteComponent', () => {
  let component: KanyeQuoteComponent;
  let fixture: ComponentFixture<KanyeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanyeQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanyeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
