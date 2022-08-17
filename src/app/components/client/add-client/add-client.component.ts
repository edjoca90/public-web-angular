import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientCrudService } from '../../../services/client-crud.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  clientForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private clientCrudService: ClientCrudService
  ) {
    this.clientForm = this.formBuilder.group({
      client_id: 0,
      name: [''],
      email: [''],
      rol: 0,
      password: [''],
      phone: [''],
      document_number: [''],
      wallet: [''],
      account_number: [''],
      country: [''],
      user_photo: [''],
      doc_image_front: [''],
      doc_image_back: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.clientCrudService.AddClient(this.clientForm.value).subscribe({
      next: () => {
        alert('Cliente creado satisfactoriamente');
        this.ngZone.run(() => this.router.navigateByUrl('/clients'));
      },
      error: (err) => alert(err),
    });
  }
}
