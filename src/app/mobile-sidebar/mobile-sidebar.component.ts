// mobile-sidebar.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.css']
})
export class MobileSidebarComponent implements OnInit {
  @Input() isActive: (route: string) => boolean = () => false;

  constructor() { }

  ngOnInit(): void {
  }
}