import { CanActivateFn , Router } from '@angular/router';
import { AuthenticationService } from './authentication.service'; // Chemin à ajuster selon votre projet
import { inject } from '@angular/core';



export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService); // Injection du service
  const isLoggedIn = authService.isLoggedIn(); // Vérifiez si l'utilisateur est connecté
  const router = inject(Router)
  if (!isLoggedIn) {
  router.navigate(['/login'])
    return false; // Refuser l'accès
  }

  return true; // Autoriser l'accès
};
