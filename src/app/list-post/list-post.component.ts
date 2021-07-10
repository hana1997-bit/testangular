import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
 tab=JSON.parse(localStorage.getItem('pubs'))||[];
  constructor() { }

  ngOnInit() {
  }
  delete(id: number) {
    this.tab.splice(id, 1);
    localStorage.setItem('pubs', JSON.stringify(this.tab));
  }

}
