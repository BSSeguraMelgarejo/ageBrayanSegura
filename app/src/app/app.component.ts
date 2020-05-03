import { Component } from '@angular/core';

//to use jquery -> that's easier
  import * as $ from'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  
abrirModal(){
 $(".modalbg").addClass("bg-active");
};

cerrarModal(){
  $(".modalbg").removeClass("bg-active");
};

}

