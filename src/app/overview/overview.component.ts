import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'overview-component',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Our firm represents clients in sensitive matters nationally and internationally. Whether our client is an individual accused of a crime, a corporation that is the subject of a government investigation, or a person seeking to investigate a matter themselves, we provide legal services supported by years of experience. We have successfully handled a wide variety of disputed legal matters for our clients all around the globe.' });
    this.meta.addTag({ name: 'keywords', content: 'criminal defense attorney, Houston, Texas, criminal charges, legal representation, law firm' });
  }
}
