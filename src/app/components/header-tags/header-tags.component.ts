import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-tags.component.html',
  styleUrl: './header-tags.component.css'
})
export class HeaderTagsComponent {
  isHovered = false;
  @Output() tagHovered = new EventEmitter<string>();
  @Output() tagLeft = new EventEmitter<void>();
}
