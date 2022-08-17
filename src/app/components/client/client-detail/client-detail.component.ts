import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientCrudService } from '../../../services/client-crud.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
})
export class ClientDetailComponent implements OnInit {
  getId: any;
  updateClientForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private clientCrudService: ClientCrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.updateClientForm = this.formBuilder.group({
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

    this.clientCrudService.GetClient(this.getId).subscribe({
      next: (res) => {
        this.updateClientForm.setValue({
          name: res['NAME'],
          email: res['EMAIL'],
          rol: res['ROL'],
          password: res['PASSWORD'],
          phone: res['PHONE'],
          document_number: res['DOCUMENT_NUMBER'],
          wallet: res['WALLET'],
          account_number: res['ACCOUNT_NUMBER'],
          country: res['COUNTRY'],
          user_photo: res['USER_PHOTO'],
          doc_image_front: res['DOC_IMAGE_FRONT'],
          doc_image_back: res['DOC_IMAGE_BACK'],
        });
      },
    });
  }

  ngOnInit(): void {}

  onUpdate(): any {
    this.clientCrudService
      .UpdateClient(this.getId, this.updateClientForm.value)
      .subscribe({
        next: () => {
          alert('Cliente actualizado satisfactoriamente');
          this.ngZone.run(() => this.router.navigateByUrl('/clients'));
        },
      });
  }

  onCancel(): any {
    this.updateClientForm = this.formBuilder.group({
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
    this.ngZone.run(() => this.router.navigateByUrl('/clients'));
  }
}
