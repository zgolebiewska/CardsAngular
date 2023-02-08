import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  count$: Observable<number> = this.store.pipe(select('count'));

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }
  ngOnInit(): void {
  }


}
