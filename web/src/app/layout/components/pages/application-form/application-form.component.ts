import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  // Variables for pagination
  currentPage: number = 1;
  totalPages: number = 5;

  // Form data
  formData: any = {
    jobHubCentreName: '',
    county: '',
    fullName: '',
    gender: '',
    dateOfBirth: '',
    mobileNumber: '',
    idNumber: '',
    emailAddress: '',
    parentGuardianName: '',
    parentGuardianMobileNumber: '',
    maritalStatus: '',
    highestLevelOfEducation: '',
    currentlyInSchool: '',
    usedComputer: '',
    currentlyEmployed: '',
    willingToLearn: '',
    additionalInfo: '',
    commitToTraining: '',
    commitToWorkHours: '',
    motivation: '',
    reasonToJoin: '',
    source: ''
  };

  // List of counties
  counties: string[] = [
    'Mombasa', 'Kwale', 'Kilifi', 'Tana River', 'Lamu', 'Taita-Taveta',
    'Garissa', 'Wajir', 'Mandera', 'Marsabit', 'Isiolo', 'Meru',
    'Tharaka-Nithi', 'Embu', 'Kitui', 'Machakos', 'Makueni', 'Nyandarua',
    'Nyeri', 'Kirinyaga', 'Murang\'a', 'Kiambu', 'Turkana', 'West Pokot',
    'Samburu', 'Trans Nzoia', 'Uasin Gishu', 'Elgeyo-Marakwet', 'Nandi',
    'Baringo', 'Laikipia', 'Nakuru', 'Narok', 'Kajiado', 'Kericho',
    'Bomet', 'Kakamega', 'Vihiga', 'Bungoma', 'Busia', 'Siaya', 'Kisumu',
    'Homa Bay', 'Migori', 'Kisii', 'Nyamira', 'Nairobi City'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Method to go to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Method to go to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Method to handle form submission
  submitForm(): void {
    console.log('Form Data:', this.formData);
  }
}
  