import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  classShow = ''

  handleSHowNavbar(){
    var ele = document.getElementById('navbarSupportedContent') as HTMLElement
    ele.classList.remove('show')
    }
}
