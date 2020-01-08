import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelContentComponent } from './level-content.component';

describe('LevelContentComponent', () => {
  let component: LevelContentComponent;
  let fixture: ComponentFixture<LevelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
