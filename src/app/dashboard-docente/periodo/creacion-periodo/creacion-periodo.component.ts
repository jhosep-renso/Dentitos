import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";

@Component({
    selector: 'app-creacion-periodo',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './creacion-periodo.component.html',
    styleUrl: './creacion-periodo.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionPeriodoComponent { }
