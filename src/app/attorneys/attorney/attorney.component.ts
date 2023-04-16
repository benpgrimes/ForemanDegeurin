import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Attorney, AttorneysViewModelEn, AttorneysViewModelEs } from "../attorneys-view-model";
import { slideUpAnimation } from "../slideUpAnimation";

@Component({
    selector: 'attorney-component',
    templateUrl: './attorney.component.html',
    styleUrls: ['./attorney.component.scss'],
  })
  export class AttorneyComponent implements OnInit {
    readonly viewModel: Attorney[];
    attorney: Attorney;

    constructor(
        translateService: TranslateService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly titleService: Title)
    {
        this.viewModel = translateService.currentLang == 'en' 
            ? AttorneysViewModelEn
            : AttorneysViewModelEs;
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
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