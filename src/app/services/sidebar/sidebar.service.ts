import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isSidebarClosedSource = new BehaviorSubject<boolean>(false);
  isSidebarClosed$ = this.isSidebarClosedSource.asObservable();

  private isDarkThemeSource = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSource.asObservable();

  toggleSidebar(): void {
    this.isSidebarClosedSource.next(!this.isSidebarClosedSource.value);
  }

  toggleDarkTheme(isDarkTheme: boolean): void {
    this.isDarkThemeSource.next(isDarkTheme);
  }
}
