import { Component, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-system-sidebar',
  templateUrl: './system-sidebar.component.html',
})
export class SystemSidebarComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initializeSidebar();
  }

  onMovimentacoesClick(): void {
    // Implement your logic for the onMovimentacoesClick event here
  }

  onDashboardClick(): void {
    // Implement your logic for the onDashboardClick event here
  }

  onUsuariosClick(): void {
    // Implement your logic for the onUsuariosClick event here
  }

  onEntidadesClick(): void {
    // Implement your logic for the onEntidadesClick event here
  }

  initializeSidebar(): void {
    const sideLinks = this.elementRef.nativeElement.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
    sideLinks.forEach((item: any) => {
      const li = item.parentElement;
      item.addEventListener('click', () => {
        sideLinks.forEach((i: any) => {
          i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
      });
    });
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event): void {
    if (this.elementRef.nativeElement.contains(event.target)) {
      const menuBar = this.elementRef.nativeElement.querySelector('.content nav .menu-icon');
      const sideBar = this.elementRef.nativeElement.querySelector('.sidebar');

      if (menuBar) {
        menuBar.addEventListener('click', () => {
          if (sideBar.classList.contains('close')) {
            this.renderer.removeClass(sideBar, 'close');
          } else {
            this.renderer.addClass(sideBar, 'close');
          }
        });
      }

      const searchBtn = this.elementRef.nativeElement.querySelector('.content nav form .form-input button');
      const searchBtnIcon = this.elementRef.nativeElement.querySelector('.content nav form .form-input button .bx');
      const searchForm = this.elementRef.nativeElement.querySelector('.content nav form');

      searchBtn.addEventListener('click', (e: any) => {
        if (window.innerWidth < 576) {
          e.preventDefault();
          searchForm.classList.toggle('show');
          if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
          } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
          }
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
          sideBar.classList.add('close');
        } else {
          sideBar.classList.remove('close');
        }
        if (window.innerWidth > 576) {
          searchBtnIcon.classList.replace('bx-x', 'bx-search');
          searchForm.classList.remove('show');
        }
      });

      const toggler = this.elementRef.nativeElement.querySelector('#theme-toggle');

      toggler.addEventListener('change', () => {
        if (toggler.checked) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      });
    }
  }
}
