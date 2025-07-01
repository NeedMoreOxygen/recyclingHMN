import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclingProjekteComponent } from './recycling-projekte.component';

describe('RecyclingProjekteComponent', () => {
  let component: RecyclingProjekteComponent;
  let fixture: ComponentFixture<RecyclingProjekteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecyclingProjekteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecyclingProjekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
