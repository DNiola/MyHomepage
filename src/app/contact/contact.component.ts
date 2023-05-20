import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
  });


  @ViewChild('myForm') myForm!: ElementRef | undefined;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  emailWasSend: boolean;

  constructor() {
  }


  async sendMail() {
    console.log("Email sent", this.myForm);
    let emailData = this.getEmailData()
    this.fieldsAnimation(emailData);
    await this.fetchEmail(emailData);
    this.fieldsAnimationEnd(emailData);
  }


  getEmailData() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton;
    return { nameField, emailField, messageField, sendButton }
  }


  fieldsAnimation(emailData: any) {
    let button = emailData.sendButton
    emailData.nameField.disabled = true;
    emailData.emailField.disabled = true;
    emailData.messageField.disabled = true;
    button.disabled = true;
  }


  async fetchEmail(emailData) {
    let fd = new FormData();
    fd.append('name', emailData.nameField.value);
    fd.append('email', emailData.emailField.value);
    fd.append('message', emailData.messageField.value);
    await fetch('https://niola-davide.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )
    this.emailWasSend = true;
  }


  fieldsAnimationEnd(emailData) {
    emailData.nameField.disabled = false;
    emailData.emailField.disabled = false;
    emailData.messageField.disabled = false;
  }


  scrollToElement(element: string): void {
    const targetElement = document.getElementById(element);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Element with ID "${element}" not found.`);
    }
  }


  validateInput(control: AbstractControl) {
    control.markAsTouched();
  }
}