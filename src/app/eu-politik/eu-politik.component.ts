import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Law {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-eu-politik',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './eu-politik.component.html',
  styleUrls: ['./eu-politik.component.css']
})
export class EUPolitikComponent implements OnInit {
  laws: Law[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Law[]>('assets/laws.json').subscribe({
      next: data => this.laws = data,
      error: err => console.error('Fehler beim Laden der Daten:', err)
    });
  }
}
