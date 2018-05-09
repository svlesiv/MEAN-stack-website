import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YosemitePageComponent } from './yosemite-page.component';

describe('YosemitePageComponent', () => {
  let component: YosemitePageComponent;
  let fixture: ComponentFixture<YosemitePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YosemitePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YosemitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
