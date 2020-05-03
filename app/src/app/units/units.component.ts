import { Component, OnInit } from '@angular/core';
import { UnitsService } from '../services/units.service'
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
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

	//variables to change the name, expansion and army type
  nameUnit="Archer";
  descriptionUnit="Quick and light. Weak at close range; excels at battle from distance";
  expansionUnit="Age of Kings";
  

  	//variable to change the image
  imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/d/dd/Archer_aoe2DE.png/revision/latest?cb=20200401184234"

  constructor(private UnitsService: UnitsService) { }

 /*ngOnInit(): void {
  }*/

ngOnInit(){
  $(document).ready(function(){
    //on click in a miniature image
          $(".imgMin2").on({
            click: function(){
            
            //animate information
            $(".information2").animate({opacity: "0"},800);
            $(".information2").animate({opacity: "1"},800);
            
            //animate the principal image
            $(".imgPrincipal2").animate({opacity: "0"},800);
            $(".imgPrincipal2").animate({opacity: "1"},800);
          }
          });
  });
}


  getUnits(){
  	this.UnitsService.getUnits().subscribe(dataUnits =>{
  		console.log(dataUnits);
  	});
  }

  /*function to change the information, the name of function is "get"+"nameOfUnit" for each one*/
getOneUnit(idNumber){
  	this.UnitsService.getOneUnit(idNumber).subscribe(dataJustOne =>{
  		/*console.log(dataJustOne);
  		console.log(dataJustOne.name);
  		console.log(dataJustOne.expansion);
  		console.log(dataJustOne.army_type);*/

  		/*change the information*/
  		this.nameUnit=dataJustOne.name;
  		this.descriptionUnit=dataJustOne.description;
  		this.expansionUnit=dataJustOne.expansion;

      /*depending the selection, choose the image*/
      switch(idNumber) 
      { 
         case 1: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/d/dd/Archer_aoe2DE.png/revision/latest?cb=20200401184234"
            break; 
         } 
         case 2: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/d/d1/Crossbowman_aoe2DE.png/revision/latest?cb=20200331010220"
            break; 
         } 

         case 3: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/d/dc/Arbalester_aoe2DE.png/revision/latest?cb=20200403030432"
            break; 
         } 

         case 4: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/b/b1/Cavalryarcher_aoe2DE.png/revision/latest?cb=20200401184346"
            break; 
         } 

         case 5: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/e/ec/Heavycavalryarcher_aoe2de.png/revision/latest?cb=20200417072541"
            break; 
         } 

         case 6: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/4/47/Hand_cannoneer_aoe2DE.png/revision/latest?cb=20200331011457"
            break; 
         } 

         case 7: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/1/11/Skirmisher_aoe2DE.png/revision/latest?cb=20200331010927"
            break; 
         } 

         case 8: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/8/8e/Elite_skirmisher_aoe2DE.png/revision/latest?cb=20200331011145"
            break; 
         } 

         case 9: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/c/c7/Eaglewarrior_aoe2DE.png/revision/latest?cb=20200331191113"
            break; 
         } 

         case 10: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/c/c7/Eaglewarrior_aoe2DE.png/revision/latest?cb=20200331191113"
            break; 
         } 

         case 11: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/a5/Eliteeaglewarrior_aoe2DE.png/revision/latest?cb=20200331191114"
            break; 
         } 

         case 12: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/5/5b/Spearman_aoe2DE.png/revision/latest?cb=20200331022103"
            break; 
         } 

         case 13: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/a6/Aoe2-infantry-2-pikeman.png/revision/latest?cb=20200402184138"
            break; 
         } 

         case 14: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/aa/Halberdier_aoe2DE.png/revision/latest?cb=20200403174747"
            break; 
         } 

         case 15: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/3a/MilitiaDE.png/revision/latest?cb=20200330152943"
            break; 
         } 

         case 16: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/9/96/Manatarms_aoe2DE.png/revision/latest?cb=20200331001819"
            break; 
         } 

         case 17: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/1/1a/Longswordsman_aoe2DE.png/revision/latest?cb=20200401184348"
            break; 
         } 

         case 18: { 
            this.imgUnitVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/3c/Twohanded_aoe2DE.png/revision/latest?cb=20200401184348"
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
