import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventuramatematicaComponent } from './aventuramatematica.component';

describe('AventuramatematicaComponent', () => {
  let component: AventuramatematicaComponent;
  let fixture: ComponentFixture<AventuramatematicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AventuramatematicaComponent]
    });
    fixture = TestBed.createComponent(AventuramatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
