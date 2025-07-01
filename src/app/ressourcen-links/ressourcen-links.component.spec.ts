import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcenLinksComponent } from './ressourcen-links.component';

describe('RessourcenLinksComponent', () => {
  let component: RessourcenLinksComponent;
  let fixture: ComponentFixture<RessourcenLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourcenLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RessourcenLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
