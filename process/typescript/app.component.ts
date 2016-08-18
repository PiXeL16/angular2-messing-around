import {Component} from 'angular2/core';
import {PetItemComponent} from './pet.item.component';
import {PetDetailComponent} from './pet.detail.component';
import {Pet} from './pet';
import {SearchPipe} from './search.pipe'

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  directives: [PetItemComponent,PetDetailComponent],
  pipes:[SearchPipe]
})

export class AppComponent {

    name = 'Pantufla fea';
    pets = PETS;
    currentPet: Pet;

    showDetail(item){
      this.currentPet = item;
    }

    addFriend(value){
      this.pets.push({
                        name: value,
                        type: ''
                        });

    }
}

var PETS: Pet[] = [
    {
        name:'Bruno',
        type:'Perro'
    },
    {
        name:'Pantufla',
        type:'Perro'
    }
]
