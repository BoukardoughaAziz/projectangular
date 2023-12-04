import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { UniversiteService } from 'src/app/services/universite/universite.service';
import { Universite } from '../../../models/Universite';
import { Foyer } from 'src/app/models/Foyer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.scss']
})
export class AddUniversiteComponent implements OnInit {
  universite: Universite = new Universite(); // Adjust based on your Universite model
  foyers: Foyer[] = [];

  constructor(private universiteService: UniversiteService) {}

  ngOnInit() {
    this.foyers = [
      new Foyer(1, 'Foyer Lumière', 100),
      new Foyer(2, 'Foyer Horizon', 120),
      new Foyer(3, 'Foyer Étoile', 80),
      new Foyer(4, 'Foyer Soleil', 150)
      // Add more fake foyers as needed
    ];
  }

  onSubmit() {
    this.universiteService.addUniversite(this.universite).subscribe(
      response => {
        console.log('Université added', response);
        // Handle response
      },
      error => {
        console.error('Error adding université', this.universite);
      }
    );
  }
}
