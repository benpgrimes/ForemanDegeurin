import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { slideInAnimation } from './animations';
import { TranslateService } from '@ngx-translate/core';

enum PageTabEnum {
  Overview = 0,
  Attorneys = 1,
  Legacy = 2,
  Contact = 3,
}

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  readonly tabValues: PageTabEnum[] = Object.values(PageTabEnum).filter(i => _isNumberValue(i)) as unknown as number[];
  readonly tabNames: string[] = Object.getOwnPropertyNames(PageTabEnum).filter(i => isNaN(+i));

  activeTab = new FormControl<PageTabEnum>(0);

  constructor(private readonly router: Router, private readonly contexts: ChildrenOutletContexts, private readonly translateService: TranslateService) {
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void {
    this.setActiveTab();
    this.router.events.subscribe(() => {
      this.setActiveTab();
    });
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  tabIndexChange(tabIndex: number): void {
    this.activeTab.setValue(tabIndex);
    const path = this.tabNames[tabIndex].toLowerCase() === 'overview' ? '' : this.tabNames[tabIndex].toLowerCase();

    this.router.navigateByUrl(`/${path}`);
  }

  changeLanguage() {
    if(this.translateService.currentLang == 'en') {
      this.translateService.use('es');
    } else {
      this.translateService.use('en');
    }
  }

  private setActiveTab(): void {
    this.activeTab.setValue(this.tabNames.indexOf(
      this.tabNames.find(tab => {
        const route = this.router.url.substring(1);
        return route.includes(tab.toLowerCase());
      }) as string
    ));
  }
}
