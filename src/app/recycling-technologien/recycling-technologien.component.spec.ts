import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclingTechnologienComponent } from './recycling-technologien.component';

describe('RecyclingTechnologienComponent', () => {
  let component: RecyclingTechnologienComponent;
  let fixture: ComponentFixture<RecyclingTechnologienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecyclingTechnologienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecyclingTechnologienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
