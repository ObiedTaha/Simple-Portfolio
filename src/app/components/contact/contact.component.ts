import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StarComponent } from '../star/star.component';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, StarComponent, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  userMessage: string = '';

  constructor(private _FormBuilder: FormBuilder, private _Router: Router, private _ToastrService: ToastrService) { }


  registerForm: FormGroup = this._FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    message: ['', [Validators.required]],

  })

  sendMessag(): void {
    if (this.registerForm.value.name!=''&&this.registerForm.value.email!=''&&this.registerForm.value.phone!=''&&this.registerForm.value.message!=''){

      this._Router.navigate(['/home']);
      this._ToastrService.success('Your Message Send Successfully');
    }
    else
      this._ToastrService.error('Fill all input')
  }
}
