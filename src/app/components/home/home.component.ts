import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        MatButton,
        RouterLink
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.fragment.subscribe((fragment: string | null) => {
            if (fragment) this.jumpToSection(fragment);
        });
    }

    jumpToSection(section: string | null) {
        if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }

}
