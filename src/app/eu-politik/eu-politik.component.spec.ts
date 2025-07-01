import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuPolitikComponent } from './eu-politik.component';

describe('EuPolitikComponent', () => {
  let component: EuPolitikComponent;
  let fixture: ComponentFixture<EuPolitikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuPolitikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EuPolitikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
