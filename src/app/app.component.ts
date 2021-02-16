import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { UserAlertService } from './user-alert.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  breakdowns: any[] = [];
  //store paginated elements
  paginatedBreakdowns: any[] = [];
  breakdownData = [];
  //Total Number of pages
  PAGES_NMBER = 4;
  //Current Page
  currentPage = 0;

  constructor(private _userAlertService:UserAlertService) { }


  ngOnInit(): void {
    //get all breakdowns
    this.breakdowns = this._userAlertService.getBreakdowns();
    //initialize pagination, we start with page (0)
    this.getBreakdownsByPage(0);
  }
  //get paginated elements for a specific page index
  getBreakdownsByPage = (page: number) => {
   this.paginatedBreakdowns = this.breakdowns.filter((b, index) => index >= this.PAGES_NMBER * page &&
    index <= this.PAGES_NMBER * (page + 1 ) - 1);
   this.currentPage = page;
  }


  ngAfterViewInit(): void {
    // get search input element
    const searchBox: any = document.getElementById('search');

    // observable t catch input value and make some action when input changed
    fromEvent<any>(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      startWith(''), // emit empty value to initialize obervable
      debounceTime(10), // number of ms between two data entry
      distinctUntilChanged(),// catch only changed value
      switchMap(searchTerm => this.doSearch(searchTerm)) //filter search
    ).subscribe(results => {
      this.breakdowns = results;
      this.getBreakdownsByPage(0); // initlize paginition after filter search
    });
  }

  //search term
  doSearch = (term: string) => {
    if (term) {
    return of(this._userAlertService.getBreakdowns().filter((b: any) =>
       b.AlertType.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
       b.vehicleModel.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
       b.registrationNo.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
       b.pilotName.toLowerCase().indexOf(term.toLowerCase()) !== -1)
     );
    }
      return of(this._userAlertService.getBreakdowns());
  }

  //order elment
  applayOrder = (value: string) => {
  this.breakdowns.sort((b1, b2)  => {
   return b1[value].localeCompare(b2[value]);
  });
  this.getBreakdownsByPage(this.currentPage);
  }

}
