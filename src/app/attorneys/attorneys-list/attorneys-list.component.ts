import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Attorney, AttorneysViewModelEn, AttorneysViewModelEs } from '../attorneys-view-model';
import { slideUpAnimation } from '../slideUpAnimation';

@Component({
  selector: 'attorneys-list-component',
  templateUrl: './attorneys-list.component.html',
  styleUrls: ['./attorneys-list.component.scss'],
  animations: [slideUpAnimation],
})
export class AttorneysListComponent { 
  readonly viewModel: Attorney[];
  
  constructor(translateService: TranslateService) {
    if (translateService.currentLang == 'en') {
      this.viewModel = AttorneysViewModelEn;
    }
    else {
      this.viewModel = AttorneysViewModelEs;
    }
  }
}
