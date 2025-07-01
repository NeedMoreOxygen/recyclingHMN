import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  label: string;
  value: string;
  source: string;
}

@Component({
  selector: 'app-einleitung',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './einleitung.component.html',
  styleUrls: ['./einleitung.component.css'],
})
export class EinleitungComponent {
  stats: Stat[] = [
    {
      label: 'Gesamtrecyclingquote in der EU',
      value: '44 %',
      source:
        'https://www.eea.europa.eu/en/circularity/thematic-metrics/materialsandwaste/wasterecycling',
    },
    {
      label: 'Kreislaufmaterialverbrauchsrate',
      value: '11,5 %',
      source:
        'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20231114-2',
    },
    {
      label: 'Recyclingquote von Verpackungen',
      value: '65 %',
      source: 'https://www.destatis.de/Europa/DE/Thema/Umwelt-Energie/Muell_und_Recycling.html',
    },
  ];
}
