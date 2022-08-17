import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountDetailComponent } from './client-account-detail.component';

describe('ClientAccountDetailComponent', () => {
  let component: ClientAccountDetailComponent;
  let fixture: ComponentFixture<ClientAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
