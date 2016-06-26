import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { LifeDashboardRoutes } from "./armalife/index";

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LifeDashboardRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
