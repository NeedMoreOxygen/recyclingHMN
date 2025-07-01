import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EUPolitikComponent } from "./eu-politik/eu-politik.component";
import { EinleitungComponent } from "./einleitung/einleitung.component";
import { RecyclingTechnologienComponent } from "./recycling-technologien/recycling-technologien.component";
import { ZukunftInnovationComponent } from "./zukunft-innovation/zukunft-innovation.component";
import { RecyclingProjekteComponent } from "./recycling-projekte/recycling-projekte.component";
import { RessourcenLinksComponent } from "./ressourcen-links/ressourcen-links.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EUPolitikComponent, EinleitungComponent, RecyclingTechnologienComponent, ZukunftInnovationComponent, RecyclingProjekteComponent, RessourcenLinksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recycling';
}
