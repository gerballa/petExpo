import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Animal } from '../model/animal';

@Injectable({
    providedIn: 'root'
})
export class PetApiService {

    constructor(private http: HttpClient) {
    }


    getPetsDetails(pet: 'dogs' | 'cats' | 'birds', id: string): Observable<Animal> {
        return this.http.get<any>('https://freetestapi.com/api/v1/' + pet + '/' + id).pipe(
            map(data => {
                return this.convertToAnimal(pet, data);
            })
        )

    }

    getSearchResults(pet: 'dogs' | 'cats' | 'birds', query: string): Observable<Animal[]> {
        return this.http.get<any[]>('https://freetestapi.com/api/v1/' + pet + '?search=' + query)
            .pipe(map((data: any[]) => {
                const animals: Animal[] = [];
                data.forEach(element => {
                    let animal = this.convertToAnimal(pet, element);
                    animals.push(animal);
                })
                return animals;
            }))
    }

    private convertToAnimal(pet: 'dogs' | 'cats' | 'birds', backendData: any): Animal {
        let animal: Animal = {
            type: pet,
            id: backendData.id,
            name: backendData.name,
            description: backendData.description,
            image: backendData.image
        };
        let additionalInfo: any = {}
        switch (pet) {
            case 'cats':
                additionalInfo.temperament = backendData.temperament;
                additionalInfo.origin = backendData.origin;
                additionalInfo.colors = backendData.colors;
                break;
            case 'dogs':
                additionalInfo.temperament = backendData.temperament;
                additionalInfo.colors = backendData.colors;
                additionalInfo.origin = backendData.origin;
                additionalInfo.breed_group = backendData.breed_group;
                additionalInfo.size = backendData.size;
                additionalInfo.lifespan = backendData.lifespan;
                break;
            case 'birds':
                additionalInfo.diet = backendData.diet;
                additionalInfo.family = backendData.family;
                additionalInfo.habitat = backendData.habitat
                additionalInfo.place_of_found = backendData.place_of_found;
                additionalInfo.species = backendData.species;
                additionalInfo.weight_kg = backendData.weight_kg;
                additionalInfo.wingspan_cm = backendData.wingspan_cm;
                break;
        }

        animal.additionalInfo = additionalInfo;
        return animal;
    }
}

