import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AnimalsListComponent, MatToolbar, MatIconButton, MatIcon, MatButton, MatButtonModule, MatDialogModule, MatMenu, MatMenuTrigger, MatMenuItem, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'petExpo';

    onActivate() {
        window.scroll(0, 0);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }


}
