// system-sidebar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-system-sidebar',
  templateUrl: './system-sidebar.component.html',
  styleUrls: ['./system-sidebar.component.css']
})
export class SystemSidebarComponent implements OnInit {
  isSidebarClosed: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSidebarClosed = this.shouldCloseSidebar(event.url);
      }
    });
  }

  shouldCloseSidebar(url: string): boolean {
    return !url.includes('/home') && !url.includes('/movimentar-orcamento');
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
