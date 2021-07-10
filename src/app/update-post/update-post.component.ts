import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  pubs={id:0,titre:"",date:"",description:"",choix:""};
 form:any
  tab=JSON.parse(localStorage.getItem('pubs'))||[];
 id:number;
 pub:any
 constructor(
  private router: Router,
  private route: ActivatedRoute
) {
}

  ngOnInit() {
    this.form = new FormGroup({
      titre: new FormControl("",Validators.required),
      choix: new FormControl("",Validators.required),
      date: new FormControl("",Validators.required),
      description: new FormControl("",Validators.required),

    });
    this.tab = JSON.parse(localStorage.getItem('pubs'))||[];
    console.log(this.tab);
    this.id = parseInt(this.route.snapshot.params['id']);
    console.log(this.id + ' snapshat');
    this.pub = this.tab.filter(item => {

      return item.id === this.id;
    });
    this.pub = this.pub[0];
    console.log(this.pub)
  }
  submitForm(){
    this.pubs.choix=this.form.value.choix;
    this.pubs.titre=this.form.value.titre;
    this.pubs.date=this.form.value.date;
    this.pubs.description=this.form.value.description;
    this.pubs.id=this.pub.id
    this.tab=JSON.parse(localStorage.getItem("pubs"))||[];
    this.tab.splice(this.id,1)
    this.tab.push(this.pub);
    localStorage.setItem('pubs',JSON.stringify(this.tab));
    this.form.reset();
  this.router.navigate(['list']);

  }

}
