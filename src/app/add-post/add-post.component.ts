import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  form:any;
  tab=[];
  pub={id:0,titre:"",date:"",description:"",choix:""};
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      titre: new FormControl("",Validators.required),
      choix: new FormControl("",Validators.required),
      date: new FormControl("",Validators.required),
      description: new FormControl("",Validators.required),

    });
  }
  submitForm(){
    this.pub.choix=this.form.value.choix;
    this.pub.titre=this.form.value.titre;
    this.pub.date=this.form.value.date;
    this.pub.description=this.form.value.description;
    if (JSON.parse(localStorage.getItem('pubs'))!=null) {
      this.pub.id=JSON.parse(localStorage.getItem('pubs')).length;
    }
    this.tab=JSON.parse(localStorage.getItem("pubs"))||[];
    this.tab.push(this.pub);
    localStorage.setItem('pubs',JSON.stringify(this.tab));
    this.form.reset();
  this.router.navigate(['list']);

  }
}
