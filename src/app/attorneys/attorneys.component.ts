import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'attorneys-component',
  templateUrl: './attorneys.component.html',
  styleUrls: ['./attorneys.component.scss']
})
export class AttorneysComponent {

  @ViewChild('MichaelDialog') private readonly MichaelDialogTemplateRef: TemplateRef<any>;
  @ViewChild('MikeDialog') private readonly MikeDialogTemplateRef: TemplateRef<any>;
  @ViewChild('AndresDialog') private readonly AndresDialogTemplateRef: TemplateRef<any>;
  @ViewChild('BryanDialog') private readonly BryanDialogTemplateRef: TemplateRef<any>;

  constructor(readonly matDialog: MatDialog) {}

  openMikeDialog() {
    this.matDialog.open(this.MikeDialogTemplateRef);
  }

  openMichaelDialog() {
    this.matDialog.open(this.MichaelDialogTemplateRef);
  }

  openAndresDialog() {
    this.matDialog.open(this.AndresDialogTemplateRef);
  }

  openBryanDialog() {
    this.matDialog.open(this.BryanDialogTemplateRef);
  }
}
