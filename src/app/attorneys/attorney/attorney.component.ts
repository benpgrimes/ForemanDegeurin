import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Attorney, AttorneysViewModel } from "../attorneys-view-model";
import { slideUpAnimation } from "../slideUpAnimation";

@Component({
    selector: 'attorney-component',
    templateUrl: './attorney.component.html',
    styleUrls: ['./attorney.component.scss'],
  })
  export class AttorneyComponent implements OnInit {
    attorney: Attorney;

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly titleService: Title) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const firstName: string = params['attorneyName'];
            const attorney = AttorneysViewModel.find(attorney => attorney.firstName.toLowerCase() == firstName);

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