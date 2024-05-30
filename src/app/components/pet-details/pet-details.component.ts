import { Component } from '@angular/core';
import { PetApiService } from '../../services/pet-api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Animal } from '../../model/animal';
import { Location, NgForOf } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-pet-details',
    standalone: true,
    imports: [
        NgForOf,
        MatButton,
        RouterLink
    ],
    templateUrl: './pet-details.component.html',
    styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent {

    public pet: Animal | undefined = undefined;

    constructor(private petApiService: PetApiService,
                private location: Location,
                private route: ActivatedRoute) {

        this.route.params.subscribe((params: any) => {
            this.petApiService.getPetsDetails(params.type, params.id).subscribe({
                    next: (data: Animal) => {
                        this.pet = data;
                    }
                })
        });
    }


    public goBack() {
        this.location.back()
    }
}
