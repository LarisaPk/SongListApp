import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListPage } from './song-list.page';

describe('SongListPage', () => {
  let component: SongListPage;
  let fixture: ComponentFixture<SongListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
