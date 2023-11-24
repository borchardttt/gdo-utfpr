import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-system-navbar',
  templateUrl: './system-navbar.component.html',
  styleUrls: ['./system-navbar.component.css']
})
export class SystemNavbarComponent {
  constructor(private sidebarService: SidebarService) {}

  onBxMenuClick(): void {
    this.sidebarService.toggleSidebar();
  }

  onThemeToggleChange(): void {
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;
    this.sidebarService.toggleDarkTheme(themeToggle.checked);
  }
}
