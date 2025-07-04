import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { HeaderTagsComponent } from '../header-tags/header-tags.component';
import { CatergoriesComponent } from '../catergories/catergories.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderTagsComponent, CatergoriesComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeSlide', [
      state('void', style({ opacity: 0, transform: 'translateY(10px)' })),
      transition(':enter', [
        animate('250ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  showCategoryMenu = false;
  hoverTimeout: any;

  onTagHover(tag: string) {
    if (tag === 'kategoriler') {
      clearTimeout(this.hoverTimeout);
      this.showCategoryMenu = true;
    }
  }

  onTagLeave() {
    this.hoverTimeout = setTimeout(() => {
      this.showCategoryMenu = false;
    }, 100);
  }

  onPanelEnter() {
    clearTimeout(this.hoverTimeout);
  }

  onPanelLeave() {
    this.hoverTimeout = setTimeout(() => {
      this.showCategoryMenu = false;
    }, 100);
  }
}
