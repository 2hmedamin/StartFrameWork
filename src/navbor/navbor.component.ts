import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbor',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbor.component.html',
  styleUrl: './navbor.component.css'
})
export class NavborComponent {

}
