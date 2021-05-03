import { EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';

export class Auth { // Roger
  // tslint:disable-next-line:variable-name
  private static _user: User;
  static  userEmitter = new EventEmitter<User>();

  // pentru update uri in real time

  static set user(user: User){
    this._user = user;
    this.userEmitter.emit(user);
  }

  static get user(): User{
    return this._user;
  }

  static canAccess(permissions): any{
    if (!this._user){
      return false;
    }

    return this._user.permissions.filter(
      p => permissions.indexOf(p) !== -1
    ).length > 0;
  }
}
