import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton, MatIconButton } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { Animal } from '../../model/animal';
import { PetApiService } from '../../services/pet-api.service';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import { NgForOf } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import {
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelTitle
} from '@angular/material/expansion';

@Component({
    selector: 'app-animals-list',
    standalone: true,
    imports: [
        HttpClientModule,
        MatMenuTrigger,
        MatMenu,
        MatButton,
        MatMenuItem,
        ReactiveFormsModule,
        MatFormField,
        MatOption,
        MatSelect,
        MatFormFieldModule,
        MatInput,
        MatIcon,
        MatCardActions,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardImage,
        MatCardTitle,
        MatCardSubtitle,
        NgForOf,
        MatToolbar,
        MatIconButton,
        MatExpansionPanel,
        MatExpansionPanelDescription,
        MatExpansionPanelTitle,
        MatExpansionModule,

    ],
    templateUrl: './animals-list.component.html',
    styleUrl: './animals-list.component.scss'
})
export class AnimalsListComponent implements OnInit {
    public form: FormGroup;
    public petList: Animal[] = [];


    constructor(private route: ActivatedRoute,
                private petApiService: PetApiService,
                private formBuilder: FormBuilder, private router: Router) {
        this.form = this.formBuilder.group({
            search_by: ['cats', [Validators.required]],
            search_query: ['', []]
        })
        this.route.queryParams.subscribe((params: any) => {
            if(params.search_by) {
                this.form.get('search_by')?.patchValue(params.search_by)
            }
        })
    }

    ngOnInit() {
        this.searchPets();
    }


    searchPets() {
        const searchBy = this.form.value.search_by;
        const query = this.form.value.search_query;
        this.petApiService.getSearchResults(searchBy, query).subscribe({
            next: (data: Animal[]) => {
                this.petList = data;
            }
        })

    }

    openPetsDetails(type: string, id: string) {
        this.router.navigate(['pet-details/' + type + '/' + id])
    }
}
