import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Milestone {
  year: number;
  title: string;
  description: string;
  source: string;
}

@Component({
  selector: 'app-zukunft-innovation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zukunft-innovation.component.html',
  styleUrls: ['./zukunft-innovation.component.css'],
})
export class ZukunftInnovationComponent {
  milestones: Milestone[] = [
    {
      year: 2024,
      title: 'ESPR tritt formal in Kraft',
      description:
        'Am 7. Juli 2024 wird die Ecodesign for Sustainable Products Regulation (ESPR) offiziell gültig.',
      source: 'en.wikipedia.org',
    },
    {
      year: 2024,
      title: 'Einführung des digitalen Produktpasses',
      description:
        '2024–2025 startet die Umsetzung von ESPR mit digitalen Produktpässen für viele Produktgruppen.',
      source: 'www3.weforum.org',
    },
    {
      year: 2025,
      title: 'Fahrzeug-Recycling-Gesetz beschlossen',
      description:
        'Am 17. Juni 2025 beschließt der EU-Rat verbindliche Recyclingquoten in der Automobilindustrie.',
      source: 'reuters.com',
    },
    {
      year: 2026,
      title: 'Pilot- und Delegated-Act-Phase',
      description:
        'Branchen wie Batterien, Textilien und Elektronik starten mit der schrittweisen DPP-Umsetzung.',
      source: 'digitalproductpassport.com',
    },
    {
      year: 2027,
      title: 'DPP wird verpflichtend',
      description:
        'Ab 2027 wird der Digitale Produktpass für viele Produktgruppen Pflicht – oft per QR oder RFID.',
      source: 'parson-europe.com',
    },
  ];
}
