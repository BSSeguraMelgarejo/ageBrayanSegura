import { Component, OnInit } from '@angular/core';
import { CivilizationsService } from '../services/civilizations.service'
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
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css'],


})
export class CivilizationsComponent implements OnInit {

 
	//variables to change the name, expansion and army type
  nameCivilization="Aztecs";
  expansionCivilization="The Conquerors";
  army_typeCivilization="Infantry and Monk";

  	//variable to change the image
  imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/37/Wonderaztecs.png/revision/latest?cb=20160106072210"

  constructor(private CivilizationsService: CivilizationsService) { }

 /*ngOnInit(): void {
  }*/

ngOnInit(){
  $(document).ready(function(){
    //on click in a miniature image
          $(".imgMin").on({
            click: function(){
            
            //animate information
            $(".information").animate({opacity: "0"},800);
            $(".information").animate({opacity: "1"},800);
            
            //animate the principal image
            $(".imgPrincipal").animate({opacity: "0"},800);
            $(".imgPrincipal").animate({opacity: "1"},800);
          }
          });
  });
}




          //remember the syntax from w3schools
           /* 
          $("p").on({
          mouseenter: function(){
            $(this).css("background-color", "lightgray");
          },
          mouseleave: function(){
            $(this).css("background-color", "lightblue");
          },
          click: function(){
            $(this).css("background-color", "yellow");
          }
          });
          */
  

  getCivilizations(){
  	this.CivilizationsService.getCivilizations().subscribe(dataCivilizations =>{
  		console.log(dataCivilizations);

  	// just looking for one civilization
	/*var civilizaciones = dataCivilizations.civilizations;
	console.log(civilizaciones[0].name);
	console.log(civilizaciones[0].expansion);
    console.log(civilizaciones[0].army_type);*/

  	});
  }

  /*function to change the information, the name of function is "get"+"nameOfCivilization" for each one*/
  getOneCivilization(idNumber){
  	this.CivilizationsService.getOneCivilization(idNumber).subscribe(dataJustOne =>{
  		/*console.log(dataJustOne);
  		console.log(dataJustOne.name);
  		console.log(dataJustOne.expansion);
  		console.log(dataJustOne.army_type);*/

  		/*change the information*/
  		this.nameCivilization=dataJustOne.name;
  		this.expansionCivilization=dataJustOne.expansion;
  		this.army_typeCivilization=dataJustOne.army_type;

      /*depending the selection, choose the image*/
      switch(idNumber) 
      { 
         case 1: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/37/Wonderaztecs.png/revision/latest?cb=20160106072210"
            break; 
         } 
         case 2: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/0/0a/Wonderbritons.png/revision/latest?cb=20160106072814"
            break; 
         } 

         case 3: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/5/51/Wonderbyzantines.png/revision/latest?cb=20160106072949"
            break; 
         } 

         case 4: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/6/6d/Wondercelts.png/revision/latest?cb=20160106073125"
            break; 
         } 

         case 5: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/6/69/Wonderchinese.png/revision/latest?cb=20160106073304"
            break; 
         } 

         case 6: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/9/9a/Wonderfranks.png/revision/latest?cb=20160106074054"
            break; 
         } 

         case 7: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/ae/Wondergoths.png/revision/latest?cb=20160106074209"
            break; 
         } 

         case 8: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/b/bc/Wonderhuns.png/revision/latest?cb=20160106074333"
            break; 
         } 

         case 9: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/1/1c/Wonderjapanese.png/revision/latest?cb=20160106075259"
            break; 
         } 

         case 10: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/8/89/Wonderkoreans.png/revision/latest?cb=20160106075420"
            break; 
         } 

         case 11: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/0/07/Wondermayans.png/revision/latest?cb=20160106075913"
            break; 
         } 

         case 12: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/b/b9/Wondermongols.png/revision/latest?cb=20160106080044"
            break; 
         } 

         case 13: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/a1/Wonderpersians.png/revision/latest?cb=20160106080215"
            break; 
         } 

         case 14: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/8/81/Wondersaracens.png/revision/latest?cb=20160106080507"
            break; 
         } 

         case 15: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/ad/Wonderspanish.png/revision/latest?cb=20160106080801"
            break; 
         } 

         case 16: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/c/c7/Wonderteutons.png/revision/latest?cb=20160106080922"
            break; 
         } 

         case 17: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/a/ab/Wonderturks.png/revision/latest?cb=20160106081034"
            break; 
         } 

         case 18: { 
            this.imgCivilizationVariable="https://vignette.wikia.nocookie.net/ageofempires/images/2/29/Wondervikings.png/revision/latest?cb=20160106081152"
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
