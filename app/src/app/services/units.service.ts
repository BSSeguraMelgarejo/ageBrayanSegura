import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import interface 
import { Units} from '../interfaces/units';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http: HttpClient) { }

  //https://age-of-empires-2-api.herokuapp.com/api/v1/units

  getUnits(){
  	const path = '/api/v1/units';
  	//I dont know but, if i let the brackets beside units, command window showme a bug
  	return this.http.get<Units>(path);
  }

  getOneUnit(id: number){
  	const path = `/api/v1/unit/${id}`;
  	return this.http.get<Units>(path);
  }

}
