import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import Swal from 'sweetalert2'

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { UniversiteService } from 'src/app/services/universite/universite.service';
import { Universite } from 'src/app/models/Universite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.scss']
})
export class UniversitesComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  universites: Universite[];
  constructor(private universiteService: UniversiteService,  private router: Router,) {}



  ngOnInit() {
    this.universiteService.getUniversites().subscribe(
      (data) => {
        this.universites = data;
        console.log(this.universites);
      },
      (error) => {
        // Handle error here
        console.error('Error fetching universities:', error);
      }
    );
    
    }
    navigateToEditUniversite(idUniversite: number) {
      this.router.navigate(['/edit-universite', idUniversite]);
    }
    deleteUniversite(idUniversite: number) {

      Swal.fire({

        title: "Est-ce que vous etes sur de supprimer cette université?",
        showCancelButton: true,
        confirmButtonText: "Supprimer",
        denyButtonText: `Cancel`
      
      
      }).then((result) => {
        if (result.isConfirmed) {
                // Call the service to delete the Universite
      this.universiteService.deleteUniversite(idUniversite).subscribe(
        response => {
          // Handle the response, e.g., remove the Universite from the list in the UI
          this.universites = this.universites.filter(u => u.idUniversite !== idUniversite);
        },
        error => {
          // Handle any errors here
          console.error('Error deleting universite', error);
        }
      );

      Swal.fire("Deleted!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });



    }
}
