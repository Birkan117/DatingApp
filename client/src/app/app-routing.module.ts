import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListsComponent } from "./lists/lists.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthGuard } from "./_guards/auth.guard";

const routes: Routes = [
    //when someone browesers to localhost 4200 the default component that will be loaded up is HomeComponent
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children:[
            {path: 'members', component: MemberListComponent, canActivate:[AuthGuard]},
            {path: 'memebers/:id', component: MemberDetailComponent},
            {path: 'lists', component: ListsComponent},
            {path: 'messages', component: MessagesComponent},
            {path: '**', component: HomeComponent, pathMatch: 'full'},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}