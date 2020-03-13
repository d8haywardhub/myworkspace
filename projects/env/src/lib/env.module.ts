import { NgModule } from '@angular/core';
import { EnvComponent } from './env.component';

import { EnvServiceProvider } from './env.service.provider';
//import { EnvService } from './env.service';


@NgModule({
  declarations: [EnvComponent],
  imports: [ ],
  providers: [EnvServiceProvider],
  exports: [EnvComponent]
})
export class EnvModule { }
