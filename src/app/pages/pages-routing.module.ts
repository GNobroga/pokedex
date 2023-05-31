import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeitailsComponent } from './deitails/deitails.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'details/:id',
        component: DeitailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
