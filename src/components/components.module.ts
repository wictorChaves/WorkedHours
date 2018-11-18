import { NgModule } from '@angular/core';
import { StartActiveComponent } from './start-active/start-active';
import { JobCreateComponent } from './job-create/job-create';
@NgModule({
    declarations: [StartActiveComponent,
        JobCreateComponent,],
    imports: [],
    exports: [StartActiveComponent,
        JobCreateComponent]
})
export class ComponentsModule { }
