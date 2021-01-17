import { NgModule } from "@angular/core";
import { UsersComponent } from './users/users.component';
import { CommonModule } from "@angular/common";
import { HighlighterDirective } from "../Directives/highlighter.directive";
import { DirectivesModule } from "../Directives/directives.module";

@NgModule({
    declarations:[UsersComponent],
    imports:[CommonModule, DirectivesModule],
    exports:[UsersComponent]
})

export class ComponentsModule{

}