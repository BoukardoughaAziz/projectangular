import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public currentTitle: string;  // Declare the currentTitle property

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef  // Inject ChangeDetectorRef
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });

    this.updateTitle(); // Update the title initially
  }

  updateTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        this.currentTitle = this.listTitles[item].title;
        this.changeDetectorRef.detectChanges();  // Manually trigger change detection
        return;
      }
    }
    this.currentTitle = 'Dashboard';
    this.changeDetectorRef.detectChanges();  // Manually trigger change detection
  }

  getTitle() {
    return this.currentTitle;
  }
}
