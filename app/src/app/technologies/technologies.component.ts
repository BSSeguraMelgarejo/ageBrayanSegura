import { Component, OnInit } from '@angular/core';

import { TechnologiesService } from '../services/technologies.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations'

//to use jquery -> that's easier
  import * as $ from'jquery'


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

//variables to change the name, expansion and army type
  nameTechnology="Archer";
  descriptionTechnology="Quick and light. Weak at close range; excels at battle from distance";
  expansionTechnology="Age of Kings";
  

  	//variable to change the image
  imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/d/dd/Archer_aoe2DE.png/revision/latest?cb=20200401184234"


  constructor(private TechnologiesService: TechnologiesService) { }

  /*ngOnInit(): void {
  }*/

ngOnInit(){
  $(document).ready(function(){
    //on click in a miniature image
          $(".imgMin4").on({
            click: function(){
            
            //animate information
            $(".information4").animate({opacity: "0"},800);
            $(".information4").animate({opacity: "1"},800);
            
            //animate the principal image
            $(".imgPrincipal4").animate({opacity: "0"},800);
            $(".imgPrincipal4").animate({opacity: "1"},800);
          }
          });
  });
}


  getTechnologies(){
  	this.TechnologiesService.getTechnologies().subscribe(dataTechnologies =>{
  		console.log(dataTechnologies);
  	});
  }

  /*function to change the information, the name of function is "get"+"nameOfTechnology" for each one*/
getOneTechnology(idNumber){
  	this.TechnologiesService.getOneTechnology(idNumber).subscribe(dataJustOne =>{
  		/*console.log(dataJustOne);
  		console.log(dataJustOne.name);
  		console.log(dataJustOne.expansion);
  		console.log(dataJustOne.army_type);*/

  		/*change the information*/
  		this.nameTechnology=dataJustOne.name;
  		this.descriptionTechnology=dataJustOne.description;
  		this.expansionTechnology=dataJustOne.expansion;

      /*depending the selection, choose the image*/
      switch(idNumber) 
      { 
         case 1: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/d/dd/Archer_aoe2DE.png/revision/latest?cb=20200401184234"
            break; 
         } 
         case 2: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/d/d1/Crossbowman_aoe2DE.png/revision/latest?cb=20200331010220"
            break; 
         } 

         case 3: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/d/dc/Arbalester_aoe2DE.png/revision/latest?cb=20200403030432"
            break; 
         } 

         case 4: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/b/b1/Cavalryarcher_aoe2DE.png/revision/latest?cb=20200401184346"
            break; 
         } 

         case 5: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/e/ec/Heavycavalryarcher_aoe2de.png/revision/latest?cb=20200417072541"
            break; 
         } 

         case 6: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/4/47/Hand_cannoneer_aoe2DE.png/revision/latest?cb=20200331011457"
            break; 
         } 

         case 7: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/1/11/Skirmisher_aoe2DE.png/revision/latest?cb=20200331010927"
            break; 
         } 

         case 8: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/8/8e/Elite_skirmisher_aoe2DE.png/revision/latest?cb=20200331011145"
            break; 
         } 

         case 9: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/c/c7/Eaglewarrior_aoe2DE.png/revision/latest?cb=20200331191113"
            break; 
         } 

         case 10: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/c/c7/Eaglewarrior_aoe2DE.png/revision/latest?cb=20200331191113"
            break; 
         } 

         case 11: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/a5/Eliteeaglewarrior_aoe2DE.png/revision/latest?cb=20200331191114"
            break; 
         } 

         case 12: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/5/5b/Spearman_aoe2DE.png/revision/latest?cb=20200331022103"
            break; 
         } 

         case 13: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/a6/Aoe2-infantry-2-pikeman.png/revision/latest?cb=20200402184138"
            break; 
         } 

         case 14: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/aa/Halberdier_aoe2DE.png/revision/latest?cb=20200403174747"
            break; 
         } 

         case 15: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/3a/MilitiaDE.png/revision/latest?cb=20200330152943"
            break; 
         } 

         case 16: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/9/96/Manatarms_aoe2DE.png/revision/latest?cb=20200331001819"
            break; 
         } 

         case 17: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/1/1a/Longswordsman_aoe2DE.png/revision/latest?cb=20200401184348"
            break; 
         } 

         case 18: { 
            this.imgTechnologyVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/3c/Twohanded_aoe2DE.png/revision/latest?cb=20200401184348"
            break; 
         } 
         default: { 
            alert("Sorry, we don't have the pic you are looking for") 
            break; 
         } 
      } 


  	});
  }

}
