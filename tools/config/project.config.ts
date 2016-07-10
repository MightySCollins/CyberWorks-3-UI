import { join } from 'path';
import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
    'node_modules/bootstrap/dist/fonts/**',
    'node_modules/font-awesome/fonts/**'
  ];

  constructor() {
    super();
    this.APP_TITLE = 'Cyberworks UI';

    // Add third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      {src: 'jquery-slimscroll/jquery.slimscroll.min.js', inject: true},
      {src: 'pace-progress/pace.min.js', inject: true},
      {src: 'metismenu/dist/metisMenu.min.js', inject: true},
      {src: 'metismenu/dist/metisMenu.min.css', inject: true},
      {src: 'chart.js/dist/Chart.bundle.min.js', inject: true},
      {src: 'ng2-toastr/bundles/ng2-toastr.min.js', inject: true},
      {src: 'ng2-toastr/bundles/ng2-toastr.min.css', inject: true},
      {src: 'font-awesome/css/font-awesome.min.css', inject: true},
    ];

    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      {src: `${this.ASSETS_SRC}/scripts.js`, inject: true, vendor: false},
    ];

    this.ENABLE_SCSS = true;

    /* Add to or override NPM module configurations: */
    //this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });

    // (<any>this.SYSTEM_CONFIG_DEV.paths)['angular2-jwt'] =
    //   `${this.APP_BASE}node_modules/angular2-jwt/angular2-jwt`;
    this.SYSTEM_CONFIG_DEV.paths['angular2-jwt'] =
      `${this.APP_BASE}node_modules/angular2-jwt/angular2-jwt`;

    this.SYSTEM_BUILDER_CONFIG.packages['angular2-jwt'] = {
      main: 'angular2-jwt.js',
      defaultExtension: 'js'
    }
  }
}
