import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Showcase} from "./showcase.component";
import {LazyComponent} from "./lazy-testing/lazy.component";


const routes: Routes = [
    {path: '', component: Showcase, pathMatch: 'full'},
    {path: 'start', component: Showcase},
    {path: 'lazy', component: LazyComponent}
//    {path: 'lazy', loadChildren: './lazy-testing/lazy-testing.module#LazyTestingModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
