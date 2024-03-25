import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmessagesComponent } from './appmessages.component';

describe('AppmessagesComponent', () => {
  let component: AppmessagesComponent;
  let fixture: ComponentFixture<AppmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppmessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
