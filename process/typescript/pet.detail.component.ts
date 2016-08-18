import {Component} from 'angular2/core';
import {Pet} from './pet';

@Component({
  selector:'pet-detail',
  templateUrl:'partials/petdetail.html',
  inputs:['pet']
})

export class PetDetailComponent{

}
