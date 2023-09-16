import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent implements OnInit {

  password: string = '';
  message: string = '';
  passwordLength: number = 1;
  includeUppercase!: boolean;
  includeLowercase!: boolean;
  includeNumbers!: boolean;
  includeSpecialChars!: boolean;

  ngOnInit(): void {

  }

  generatePassword(length: number, useUppercase: boolean, useLowercase: boolean, useNumbers: boolean, useSpecialChars: boolean): void {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_+=[]{}|;:,.<>?';

    let characters = '';
    if (useUppercase) characters += uppercaseChars;
    if (useLowercase) characters += lowercaseChars;
    if (useNumbers) characters += numberChars;
    if (useSpecialChars) characters += specialChars;

    if (characters.length === 0) {
      this.password = ''
      this.message = 'Select at least one character type.';
      setTimeout(() => {
        this.message = '';
      }, 5000); // 5000 milliseconds = 5 seconds
      return;
    }


    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      console.log(randomIndex, "index");
      generatedPassword += characters[randomIndex];
    }
    this.password = generatedPassword;
  }

  lengthPlus() {
    if (this.passwordLength < 50) {
      this.passwordLength++
    } else {
      this.password = 'Maximum lenghth is 50'
    }
  }
  lengthMinus() {
    if (this.passwordLength > 1) {
      this.passwordLength--
    } else {
      this.password = 'Minimum lenghth is 1'
    }
  }
}
