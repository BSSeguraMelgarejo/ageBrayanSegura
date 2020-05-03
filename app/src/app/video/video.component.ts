import { Component, OnInit } from '@angular/core';

//to use jquery -> that's easier
  import * as $ from'jquery'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {


	public onTimeUpdate(value){
		if(value.target.currentTime>56){
			console.log("finish");
			/*this.superVideo.trigger('pause');*/
			$(".bigVideo").css("-webkit-filter", "blur(5px)");
			$(".header-overlay2").css("display","block");
			$(".v-header").css("display","flex");
			$(".principal").prop("volume", 0);

			}
		}

  constructor() { }



  ngOnInit() : void{}
 

}

