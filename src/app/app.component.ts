import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Netflix';

  manuOpened = false;

  setMenuState(state: boolean){
    this.manuOpened = state
  }

  closeMenu(){
    this.manuOpened = false;
  }

}
