import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import interface 
import { Civilizations} from '../interfaces/civilizations';

@Injectable({
  providedIn: 'root'
})
export class CivilizationsService {

  constructor(private http: HttpClient) { }

  getCivilizations(){
  	const path = '/api/v1/civilizations';
  	//I dont know but, if i let the brackets beside civilizations, command window showme a bug
  	return this.http.get<Civilizations>(path);
  }

  getOneCivilization(id: number){
  	const path = `/api/v1/civilization/${id}`;
  	return this.http.get<Civilizations>(path);
  }
}
