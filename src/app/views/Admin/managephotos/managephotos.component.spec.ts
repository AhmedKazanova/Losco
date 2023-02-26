import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagephotosComponent } from './managephotos.component';

describe('ManagephotosComponent', () => {
  let component: ManagephotosComponent;
  let fixture: ComponentFixture<ManagephotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagephotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagephotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
