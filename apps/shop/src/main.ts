import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config.js';  // Add .js extension
import { App } from './app/app';  // Add .js extension

bootstrapApplication(App, appConfig).catch((err) =>
  console.error(err)
);