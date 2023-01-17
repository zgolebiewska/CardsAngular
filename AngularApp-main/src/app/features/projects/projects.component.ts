import {Component, Injectable, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import * as Http from "http";
import projects from '../../../assets/resources/projects.json'
import {Counter} from "../../models/counter.model";
import {select, Store} from "@ngrx/store";
import {count, Observable} from "rxjs";
import {Decrement, Increment, Reset} from "../../store/actions/counter.action";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent {


  public projectList: {id: number, title: string, prize: number, amount:number, img:string}[] = projects;

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
