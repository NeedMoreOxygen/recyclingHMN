import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Resource {
  title: string;
  description: string;
  link: string;
  category: string;
}

@Component({
  selector: 'app-ressourcen-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ressourcen-links.component.html',
  styleUrls: ['./ressourcen-links.component.css']
})
export class RessourcenLinksComponent {
  resources: Resource[] = [
    {
      title: 'Europäische Stakeholder-Plattform für die Kreislaufwirtschaft',
      description: 'EU-Plattform mit Strategien, bewährten Verfahren und politischen Dokumenten zur Kreislaufwirtschaft.',
      link: 'https://circulareconomy.europa.eu',
      category: 'EU-Initiativen'
    },
    {
      title: 'Kunststoff Europa',
      description: 'Branchendaten zu Kunststoffproduktion, Recycling und Nachhaltigkeit.',
      link: 'https://plasticseurope.org',
      category: 'Datenbanken'
    },
    {
      title: 'RecyClass',
      description: 'Werkzeug zur Bewertung der Wiederverwertbarkeit von Kunststoffverpackungen.',
      link: 'https://recyclass.eu',
      category: 'Werkzeuge'
    },
    {
      title: 'Eurostat - Recycling-Daten',
      description: 'Offizielle EU-Statistiken über Abfallwirtschaft und Recycling.',
      link: 'https://ec.europa.eu/eurostat',
      category: 'Datenbanken'
    },

  ];

  categories: string[] = ['All', ...new Set(this.resources.map(r => r.category))];
  selectedCategory = 'All';

  filteredResources(): Resource[] {
    if (this.selectedCategory === 'All') {
      return this.resources;
    }
    return this.resources.filter(r => r.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
