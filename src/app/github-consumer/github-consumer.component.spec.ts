import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubConsumerComponent } from './github-consumer.component';

describe('GithubConsumerComponent', () => {
  let component: GithubConsumerComponent;
  let fixture: ComponentFixture<GithubConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
