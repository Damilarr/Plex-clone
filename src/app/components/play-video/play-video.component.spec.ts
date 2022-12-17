import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideoComponent } from './play-video.component';

describe('PlayVideoComponent', () => {
  let component: PlayVideoComponent;
  let fixture: ComponentFixture<PlayVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
