import { NgModule } from '@angular/core';
import { StartActiveComponent } from './start-active/start-active';
import { JobCreateComponent } from './job-create/job-create';
import { JobListComponent } from './job-list/job-list';
@NgModule({
    declarations: [StartActiveComponent,
        JobCreateComponent,
    JobListComponent,],
    imports: [],
    exports: [StartActiveComponent,
        JobCreateComponent,
    JobListComponent]
})
export class ComponentsModule { }
