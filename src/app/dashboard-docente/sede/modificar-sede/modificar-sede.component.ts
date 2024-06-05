import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';

@Component({
    selector: 'app-modificar-sede',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './modificar-sede.component.html',
    styleUrl: './modificar-sede.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarSedeComponent { }
