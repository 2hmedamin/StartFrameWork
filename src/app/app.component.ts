import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavborComponent } from "../navbor/navbor.component";
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavborComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
