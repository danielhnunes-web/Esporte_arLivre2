import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaListComponent } from './atleta-list.component';

describe('AtletaListComponent', () => {
  let component: AtletaListComponent;
  let fixture: ComponentFixture<AtletaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtletaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
