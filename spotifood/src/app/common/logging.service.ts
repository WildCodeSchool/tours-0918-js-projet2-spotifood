import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  isLogged: boolean;
  constructor() { }

  logAdmin() {
    this.isLogged = true;
    sessionStorage.setItem('adminLogged', 'true');
  }

  logOut() {
    this.isLogged = false;
    sessionStorage.removeItem('adminLogged');
  }

  getLogStatus() {
    return sessionStorage.adminLogged ? true : false;
  }
}
