import { NgModule } from '@angular/core';
import { StartActiveComponent } from './start-active/start-active';
import { JobCreateComponent } from './job-create/job-create';
import { JobListComponent } from './job-list/job-list';
import { CreateUserComponent } from './create-user/create-user';
import { LoginComponent } from './login/login';
import { ArchiveListComponent } from './archive-list/archive-list';
import { JobArchiveComponent } from './job-archive/job-archive';
@NgModule({
    declarations: [StartActiveComponent,
        JobCreateComponent,
        JobListComponent,
        CreateUserComponent,
        LoginComponent,
    LoginComponent,
    ArchiveListComponent,
    JobArchiveComponent,],
    imports: [],
    exports: [StartActiveComponent,
        JobCreateComponent,
        JobListComponent,
        CreateUserComponent,
    LoginComponent,
    ArchiveListComponent,
    JobArchiveComponent]
})
export class ComponentsModule { }
