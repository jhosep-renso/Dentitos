import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";

@Component({
    selector: 'app-lista-curso',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './lista-curso.component.html',
    styleUrl: './lista-curso.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaCursoComponent { }
