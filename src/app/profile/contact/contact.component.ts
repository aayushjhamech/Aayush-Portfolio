import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: any = {};
  submitted = false;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  onSubmit(form: any) {
    this.submitted = true;

    if (form.invalid || this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.profileService.sendContactMessage(this.model).subscribe(
      () => {
        this.isLoading = false;
        this.successMessage = '✅ Message sent successfully! I will get back to you soon.';
        form.resetForm();
        this.model = {};
        this.submitted = false;

        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      },
      () => {
        this.isLoading = false;
        this.errorMessage = '❌ Failed to send message. Please try again or email me directly.';
      }
    );
  }
}
