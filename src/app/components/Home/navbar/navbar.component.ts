import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../Service/authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

authService:AuthenticationService = inject(AuthenticationService)
userName : string = this.authService.GetCurrentUser()?.name?? "Not Connected"
  
}
