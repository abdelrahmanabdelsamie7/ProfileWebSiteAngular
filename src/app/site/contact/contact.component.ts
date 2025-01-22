import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email: string = 'abdelrhmanabdelsamie@gmail.com';
  msg = '';
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  constructor(private ContactService: ContactService) {}
  sendMsg(contactForm: FormGroup) {
    this.ContactService.addContactData(contactForm.value).subscribe({
      next: (data: any) => {
        this.msg = 'شكرا لتواصلك معنا';
        contactForm.reset();
      },
      error: (err) => {
           this.msg = 'حدث خطأ ما';
      },
    });
  }
}
