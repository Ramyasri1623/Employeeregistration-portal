import { Component } from '@angular/core';
import { TableService } from '../services/table.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formgroup!: FormGroup;
  constructor(private service: TableService, private fb: FormBuilder) {
    this.formgroup = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      phonenumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
    })
  }
  onsubmit():void {
    if (this.formgroup.valid) {
      this.service.post(this.formgroup.value).subscribe(data => {
        alert('sucessfully inserted');
      })
    }
  }


}
