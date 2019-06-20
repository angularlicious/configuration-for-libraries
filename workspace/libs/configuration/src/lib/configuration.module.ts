import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationContext } from './configuration-context';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
  providers: []
})
export class ConfigurationModule {
  static forRoot(configContext: ConfigurationContext): ModuleWithProviders {
    console.log(`Preparing to handle configuration context.`);
    return {
      ngModule: ConfigurationModule,
      providers: [
        {
          provide: ConfigurationContext,
          useValue: configContext
        },
        HttpClientModule
      ]
    };
  }
}
