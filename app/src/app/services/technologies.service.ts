import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
//import interface 
import { Technologies} from '../interfaces/technologies';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private http: HttpClient) { }

   getTechnologies(){
  	const path = '/api/v1/technologies';
  	//I dont know but, if i let the brackets beside technologies, command window showme a bug
  	return this.http.get<Technologies>(path);
  }

  getOneTechnology(id: number){
  	const path = `/api/v1/technology/${id}`;
  	return this.http.get<Technologies>(path);
  }
}
