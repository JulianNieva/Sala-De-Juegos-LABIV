import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoResultadosComponent } from './listado-resultados.component';

describe('ListadoResultadosComponent', () => {
  let component: ListadoResultadosComponent;
  let fixture: ComponentFixture<ListadoResultadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoResultadosComponent]
    });
    fixture = TestBed.createComponent(ListadoResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
