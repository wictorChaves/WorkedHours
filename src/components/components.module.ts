import { NgModule } from '@angular/core';
import { StartActiveComponent } from './start-active/start-active';
import { JobCreateComponent } from './job-create/job-create';
import { JobListComponent } from './job-list/job-list';
import { CreateUserComponent } from './create-user/create-user';
import { LoginComponent } from './login/login';
import { ArchiveListComponent } from './archive-list/archive-list';
@NgModule({
    declarations: [StartActiveComponent,
        JobCreateComponent,
        JobListComponent,
        CreateUserComponent,
        LoginComponent,
    LoginComponent,
    ArchiveListComponent,],
    imports: [],
    exports: [StartActiveComponent,
        JobCreateComponent,
        JobListComponent,
        CreateUserComponent,
    LoginComponent,
    ArchiveListComponent]
})
export class ComponentsModule { }
