import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegistraionComponent } from './edit-registraion.component';

describe('EditRegistraionComponent', () => {
  let component: EditRegistraionComponent;
  let fixture: ComponentFixture<EditRegistraionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegistraionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
