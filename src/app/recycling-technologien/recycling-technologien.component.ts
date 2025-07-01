import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Verfahren {
  name: string;
  icon: string;
  description: string;
  tooltip: string;
}

@Component({
  selector: 'app-recycling-technologien',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recycling-technologien.component.html',
  styleUrls: ['./recycling-technologien.component.css'],
})
export class RecyclingTechnologienComponent {
  verfahren: Verfahren[] = [
    {
      name: 'Mechanisches Recycling',
      icon: '♻️',
      description:
        'Sortierung, Zerkleinerung, Waschen, Extrusion – ideal für PET & thermoplastische Kunststoffe.',
      tooltip:
        'Ideal für mono-thermoplastische Abfallströme wie PET-Flaschen (Quelle: zerowasteeurope.eu)',
    },
    {
      name: 'Chemisches Recycling',
      icon: '🧪',
      description:
        'Verfahren wie Pyrolyse oder Depolymerisation, um Kunststoffe in Grundstoffe zurückzuführen.',
      tooltip:
        'Nützlich für schwer recycelbare Kunststoffe. Quellen: chemicalrecycling.eu, plasticseurope.org',
    },
    {
      name: 'Closed‑Loop Recycling',
      icon: '🔁',
      description:
        'Material wird im selben Produktzyklus wiederverwendet, z. B. Flasche zu Flasche.',
      tooltip:
        'Effizienter Recyclingkreislauf für gleiche Produkte. Quelle: en.wikipedia.org',
    },
  ];
}
