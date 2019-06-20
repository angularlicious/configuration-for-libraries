import { Injectable, Optional } from '@angular/core';
import { ConfigurationContext } from './configuration-context';
import { Subject, ReplaySubject } from 'rxjs';
import { IConfiguration } from './i-configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  settings$: Subject<IConfiguration> = new ReplaySubject<IConfiguration>(1);

  constructor(@Optional() context: ConfigurationContext) {
    if (context) {
      this.settings$.next(context.config);
    }
  }
}
