import { Component, OnInit } from '@angular/core';
import { StructuresService } from '../services/structures.service'
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
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {

	//variables to change the name, expansion and army type 
  nameStructure="Barracks";
  ageStructure="Dark";
  expansionStructure="Age of Kings";
  

  	//variable to change the image
  imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/5/50/Barracks_aoe2DE.png/revision/latest?cb=20200405044034"

  constructor(private StructuresService : StructuresService) { }

 /*ngOnInit(): void {
  }*/

ngOnInit(){
  $(document).ready(function(){
    //on click in a miniature image
          $(".imgMin3").on({
            click: function(){
            
            //animate information
            $(".information3").animate({opacity: "0"},800);
            $(".information3").animate({opacity: "1"},800);
            
            //animate the principal image
            $(".imgPrincipal3").animate({opacity: "0"},800);
            $(".imgPrincipal3").animate({opacity: "1"},800);
          }
          });
  });
}

  getStructures(){
  	this.StructuresService.getStructures().subscribe(dataStructures =>{
  		console.log(dataStructures);
  	});
  }

   /*function to change the information, the name of function is "get"+"nameOfUnit" for each one*/
getOneStructure(idNumber){
  	this.StructuresService.getOneStructure(idNumber).subscribe(dataJustOne =>{
  		/*console.log(dataJustOne);
  		console.log(dataJustOne.name);
  		console.log(dataJustOne.expansion);
  		console.log(dataJustOne.army_type);*/

  		/*change the information*/
  		this.nameStructure=dataJustOne.name;
  		this.ageStructure=dataJustOne.age;
  		this.expansionStructure=dataJustOne.expansion;

      /*depending the selection, choose the image*/
      switch(idNumber) 
      { 
         case 1: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/5/50/Barracks_aoe2DE.png/revision/latest?cb=20200405044034"
            break; 
         } 
         case 2: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/4/49/Dock_aoe2de.png/revision/latest?cb=20200410030938"
            break; 
         } 

         case 3: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/9/98/FarmDE.png/revision/latest?cb=20200330133935"
            break; 
         } 

         case 4: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/8/8c/Fish_trap_aoe2DE.png/revision/latest?cb=20200403193055"
            break; 
         } 

         case 5: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/37/House_aoe2DE.png/revision/latest?cb=20200403193055"
            break; 
         } 

         case 6: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/2/28/Lumber_camp_aoe2de.png/revision/latest?cb=20200410030939"
            break; 
         } 

         case 7: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/5/5a/Mill_aoe2de.png/revision/latest?cb=20200410030939"
            break; 
         } 

         case 8: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/32/Mining_camp_aoe2de.png/revision/latest?cb=20200410030940"
            break; 
         } 

         case 9: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/6/68/Towncenter_aoe2DE.png/revision/latest?cb=20200403062001"
            break; 
         } 

         case 10: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/4/42/Archery_range_aoe2DE.png/revision/latest?cb=20200405044033"
            break; 
         } 

         case 11: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/5/50/Barracks_aoe2DE.png/revision/latest?cb=20200405044034"
            break; 
         } 

         case 12: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/6/64/Blacksmith_aoe2de.png/revision/latest?cb=20200410030937"
            break; 
         } 

         case 13: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/4/49/Dock_aoe2de.png/revision/latest?cb=20200410030938"
            break; 
         } 

         case 14: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/37/House_aoe2DE.png/revision/latest?cb=20200403193055"
            break; 
         } 

         case 15: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/2/28/Lumber_camp_aoe2de.png/revision/latest?cb=20200410030939"
            break; 
         } 

         case 16: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/3b/Market_aoe2DE.png/revision/latest?cb=20200405044035"
            break; 
         } 

         case 17: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/5/5a/Mill_aoe2de.png/revision/latest?cb=20200410030939"
            break; 
         } 

         case 18: { 
            this.imgStructureVariable="https://vignette.wikia.nocookie.net/ageofempires/images/3/32/Mining_camp_aoe2de.png/revision/latest?cb=20200410030940"
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
