import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../Service/authentication.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

authService:AuthenticationService = inject(AuthenticationService)
user : any = this.authService.GetCurrentUser()
userName : string = this.authService.GetCurrentUser()?.name?? "Not Connected"

  
}
