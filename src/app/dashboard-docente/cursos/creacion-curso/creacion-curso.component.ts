import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";

@Component({
    selector: 'app-creacion-curso',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './creacion-curso.component.html',
    styleUrl: './creacion-curso.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionCursoComponent { }
