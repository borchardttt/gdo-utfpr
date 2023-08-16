import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-system-sidebar',
  templateUrl: './system-sidebar.component.html',
})
export class SystemSidebarComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializeSidebar();
  }

  onMovimentacoesClick(): void {
  }

  onDashboardClick(): void {
  }

  onUsuariosClick(): void {
  }

  onEntidadesClick(): void {
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

    const menuBar = this.elementRef.nativeElement.querySelector('.content nav .bx.bx-menu');
    const sideBar = this.elementRef.nativeElement.querySelector('.sidebar');
    menuBar.addEventListener('click', () => {
      if (sideBar.classList.contains('close')) {
        this.renderer.removeClass(sideBar, 'close');
      } else {
        this.renderer.addClass(sideBar, 'close');
      }
    });
  }
}
