import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-system-sidebar',
  templateUrl: './system-sidebar.component.html',
  styleUrls: ['./system-sidebar.component.css']
})
export class SystemSidebarComponent implements OnInit {
  isSidebarClosed: boolean = this.shouldCloseSidebar(window.location.pathname);
  isDarkTheme: boolean = false;

  constructor(private router: Router, private sidebarService: SidebarService) { }

  toggleSidebar(): void {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSidebarClosed = this.shouldCloseSidebar(event.url);
      }
    });

    this.sidebarService.isSidebarClosed$.subscribe((isClosed) => {
      this.isSidebarClosed = isClosed;
    });

    this.sidebarService.isDarkTheme$.subscribe((isDarkTheme) => {
      this.isDarkTheme = isDarkTheme;

      const body = document.body;
      body.classList.toggle('dark', this.isDarkTheme);
    });

    // Verifica novamente após um curto período para garantir que todos os elementos foram carregados
    
  }

  shouldCloseSidebar(url: string): boolean {
    return !url.includes('/home') && !url.includes('/movimentar-orcamento');
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isSidebarClosed = this.isMobile();
  }

  isMobile(): boolean {
    const breakpoint = 768;
    return window.innerWidth <= breakpoint;
  }
}
