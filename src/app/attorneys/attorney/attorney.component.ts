import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, startWith } from 'rxjs';
import { Attorney, AttorneysViewModelEn, AttorneysViewModelEs } from '../attorneys-view-model';

@Component({
  selector: 'attorney-component',
  templateUrl: './attorney.component.html',
  styleUrls: ['./attorney.component.scss'],
})
export class AttorneyComponent implements OnInit {
  viewModel: Attorney[];
  attorney: Attorney;

  constructor(
    private readonly translateService: TranslateService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title)
  { }

  ngOnInit(): void {
    combineLatest([this.translateService.onLangChange.pipe(startWith({lang: this.translateService.currentLang})), this.activatedRoute.params])
      .subscribe(([language, params]) => {
        this.viewModel = language.lang == 'en' 
          ? AttorneysViewModelEn
          : AttorneysViewModelEs;

        const firstName: string = params['attorneyName'];
        const attorney = this.viewModel.find(attorney => attorney.firstName.toLowerCase() == firstName);

        if (attorney != null) {
          this.attorney = attorney;
          this.titleService.setTitle(`${attorney.firstName} ${attorney.lastName}`);
        }
        else
        {
          this.router.navigateByUrl('/attorneys');
        }
      });
  }
}