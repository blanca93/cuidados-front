import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCuidadoComponent } from './add-cuidado.component';

describe('AddCuidadoComponent', () => {
  let component: AddCuidadoComponent;
  let fixture: ComponentFixture<AddCuidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCuidadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCuidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
