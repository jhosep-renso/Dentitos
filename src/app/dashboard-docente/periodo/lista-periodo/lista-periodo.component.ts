import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";

@Component({
    selector: 'app-lista-periodo',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './lista-periodo.component.html',
    styleUrl: './lista-periodo.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaPeriodoComponent { }
