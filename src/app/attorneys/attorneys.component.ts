import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'attorneys-component',
  templateUrl: './attorneys.component.html',
  styleUrls: ['./attorneys.component.scss']
})
export class AttorneysComponent {

  @ViewChild('MichaelDialog') MichaelDialogtemplateRef: TemplateRef<Element>;
  @ViewChild('MichaelDialog') MikeDialogtemplateRef: TemplateRef<Element>;

  constructor(readonly MatDialog: MatDialog) {}

  openMikeDialog() {
    this.MatDialog.open(this.MichaelDialogtemplateRef);
  }

  openMichaelDialog() {
    this.MatDialog.open(this.MikeDialogtemplateRef);
  }
}
