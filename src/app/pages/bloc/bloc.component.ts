import { Component, OnInit } from '@angular/core';
import { Bloc } from 'src/app/models/Bloc';
import { BlocService } from 'src/app/services/bloc/bloc.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent implements OnInit {
  blocs : Bloc[] =[];
  constructor(private BlocService : BlocService){
    this.BlocService.getBlocs().subscribe((data) => {
    this.blocs = data;
    console.log(this.blocs);
    }); 
  }

  ngOnInit() {

  }
  



}
