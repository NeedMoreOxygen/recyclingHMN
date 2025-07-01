import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projekt {
  titel: string;
  beschreibung: string;
  bildUrl: string;
  details: string;
}

@Component({
  selector: 'app-recycling-projekte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recycling-projekte.component.html',
  styleUrls: ['./recycling-projekte.component.css'],
})
export class RecyclingProjekteComponent {
  fallbackBildUrl = 'https://via.placeholder.com/300x180?text=Recycling+Bild';

  projekte = [
    {
      titel: 'PlasticRoad Niederlande',
      beschreibung:
        'Straßen aus recyceltem Plastik für bessere Drainage und CO₂-Reduktion.',
      bildUrl: '', // Kein Bild angegeben
      details:
        'PlasticRoad verwendet recycelte Kunststoffe für modulare Straßensegmente.',
      linkk:
        'https://www.dutchwatersector.com/news/new-plasticroad-elements-include-storm-water-sewer',
    },
    {
      titel: 'Loop Industries (Kanada)',
      beschreibung:
        'Innovative PET-Kunststoff-Recyclingtechnologie mit minimalem Energieeinsatz.',
      bildUrl: '',
      details:
        'Loop Industries recycelt PET-Kunststoffe mit einer energiearmen Methode.',
      linkk: 'https://loopindustries.com/',
    },
    {
      titel: 'ReCircle Schweiz',
      beschreibung:
        'Mehrwegsystem für Takeaway-Verpackungen mit QR-Code-basiertem Rückgabesystem.',
      bildUrl: '',
      details:
        'ReCircle ist ein schweizer System mit über 1.000 Partnern für nachhaltige Verpackungen.',
      linkk:
        'https://www.stv-fst.ch/nachhaltigkeit/nachhaltigkeitsplattform/produkte-dienstleistungen/recircle',
    },
  ];

  selectedProjekt: any = null;

  showDetails(projekt: any) {
    this.selectedProjekt = projekt;
  }

  closeModal() {
    this.selectedProjekt = null;
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
