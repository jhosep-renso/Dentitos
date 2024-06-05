import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';

@Component({
    selector: 'app-lista-sede',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './lista-sede.component.html',
    styleUrl: './lista-sede.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaSedeComponent { }
