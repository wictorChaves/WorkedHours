import { NgModule } from '@angular/core';
import { StartActiveComponent } from './start-active/start-active';
import { JobCreateComponent } from './job-create/job-create';
import { JobListComponent } from './job-list/job-list';
import { CreateUserComponent } from './create-user/create-user';
@NgModule({
    declarations: [StartActiveComponent,
        JobCreateComponent,
        JobListComponent,
        CreateUserComponent,],
    imports: [],
    exports: [StartActiveComponent,
        JobCreateComponent,
        JobListComponent,
        CreateUserComponent]
})
export class ComponentsModule { }
