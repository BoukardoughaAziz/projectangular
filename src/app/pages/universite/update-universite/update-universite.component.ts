import { Component, OnInit } from '@angular/core';
import { UniversiteService } from 'src/app/services/universite/universite.service';
import { Universite } from '../../../models/Universite';
import { Foyer } from 'src/app/models/Foyer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.scss']
})
export class UpdateUniversiteComponent implements OnInit {
  universite: Universite;

  constructor(
    private universiteService: UniversiteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id'); // '+' converts the string to a number
      if (id) {
        this.loadUniversiteForEdit(id);
      }
    });
  }

  loadUniversiteForEdit(id: number) {
    this.universiteService.getUniversiteById(id).subscribe(
      data => {
        this.universite = data;
        console.log(this.universite)
      },
      
      error => {
        console.error('Error fetching universite', error);
      }
    );
  }

}
