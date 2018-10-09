import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomablecanvasComponent } from './zoomablecanvas.component';

describe('ZoomablecanvasComponent', () => {
  let component: ZoomablecanvasComponent;
  let fixture: ComponentFixture<ZoomablecanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomablecanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomablecanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
