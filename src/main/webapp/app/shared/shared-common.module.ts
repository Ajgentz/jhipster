import { NgModule } from '@angular/core';

import { JhipsterInclassSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterInclassSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterInclassSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterInclassSharedCommonModule {}
