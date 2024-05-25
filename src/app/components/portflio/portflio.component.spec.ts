import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortflioComponent } from './portflio.component';

describe('PortflioComponent', () => {
  let component: PortflioComponent;
  let fixture: ComponentFixture<PortflioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortflioComponent]
    });
    fixture = TestBed.createComponent(PortflioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
