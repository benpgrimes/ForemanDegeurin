import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Attorney } from '../../attorneys-view-model';

@Component({
  selector: 'attorneys-profile-picture',
  templateUrl: './attorney-profile-picture.component.html',
  styleUrls: ['./attorney-profile-picture.component.scss'],
})
export class AttorneyProfilePictureComponent { 
    @Input() attorney: Attorney;

  constructor(private readonly router: Router) { }

  navigateToAttorneyPage() {
    this.router.navigateByUrl(`attorneys/${this.attorney.firstName.toLowerCase()}`);
  }
}
