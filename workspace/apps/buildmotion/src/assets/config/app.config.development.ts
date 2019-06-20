import { IConfiguration, IErrorHandingConfig, ILogglyConfig } from '@angularlicious/configuration';
import { ILoggingConfig } from '@angularlicious/logging';

export class AppConfig implements IConfiguration {
  applicationName: 'BuildMotion';
  version: '2.0.0';
  loggingConfig: ILoggingConfig = {
    applicationName: this.applicationName,
    isProduction: false,
    version: this.version
  };
  errorHandlingConfig: IErrorHandingConfig = {
    applicationName: this.applicationName,
    includeDefaultErrorHandling: true
  };
  logglyConfig: ILogglyConfig = {
    apiKey: 'YOUR-API-KEY-HERE',
    sendConsoleErrors: true
  };
}
