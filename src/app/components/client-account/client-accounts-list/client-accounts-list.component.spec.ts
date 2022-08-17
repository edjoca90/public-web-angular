import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountsListComponent } from './client-accounts-list.component';

describe('ClientAccountsListComponent', () => {
  let component: ClientAccountsListComponent;
  let fixture: ComponentFixture<ClientAccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
