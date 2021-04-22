import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Auth } from './auth';


export class Permission implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any  {
    return Auth.canAccess(route.data) || false;
  }
}
