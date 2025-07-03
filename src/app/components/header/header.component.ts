import { Component } from '@angular/core';
import { HeaderTagsComponent } from "../header-tags/header-tags.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderTagsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
