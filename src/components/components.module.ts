import { NgModule } from '@angular/core';
import { StartActiveComponent } from './start-active/start-active';
import { JobCreateComponent } from './job-create/job-create';
import { JobListComponent } from './job-list/job-list';
import { CreateUserComponent } from './create-user/create-user';
import { LoginComponent } from './login/login';
@NgModule({
    declarations: [StartActiveComponent,
        JobCreateComponent,
        JobListComponent,
        CreateUserComponent,
        LoginComponent,
    LoginComponent,],
    imports: [],
    exports: [StartActiveComponent,
        JobCreateComponent,
        JobListComponent,
        CreateUserComponent,
    LoginComponent]
})
export class ComponentsModule { }
