import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';

@Component({
    selector: 'app-creacion-sede',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './creacion-sede.component.html',
    styleUrl: './creacion-sede.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionSedeComponent { }
