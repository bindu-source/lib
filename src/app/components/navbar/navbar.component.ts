import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectOption(option: string) {
    console.log(`Selected option: ${option}`);
  }

  showNavbar: boolean = true;

constructor(private route: ActivatedRoute) {
  route.data.subscribe((data) => {
    this.showNavbar = !data['hideNavbar'];
  });
}

 
  
}
