import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZukunftInnovationComponent } from './zukunft-innovation.component';

describe('ZukunftInnovationComponent', () => {
  let component: ZukunftInnovationComponent;
  let fixture: ComponentFixture<ZukunftInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZukunftInnovationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZukunftInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
