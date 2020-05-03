import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
//import interface 
import { Structures} from '../interfaces/structures';

@Injectable({
  providedIn: 'root'
})
export class StructuresService {

  constructor(private http: HttpClient) { }

  //https://age-of-empires-2-api.herokuapp.com/api/v1/units

  getStructures(){
  	const path = '/api/v1/structures';
  	//I dont know but, if i let the brackets beside structures, command window showme a bug
  	return this.http.get<Structures>(path);
  }

  getOneStructure(id: number){
  	const path = `/api/v1/structure/${id}`;
  	return this.http.get<Structures>(path);
  }
}
