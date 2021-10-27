import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
ngOnInit(): void {
  }
coins(){
    this.router.navigate(['ticket'], {relativeTo:this.route});
  }
notes(){
    this.router.navigate(['live'], {relativeTo:this.route});
  }
  online(){
    this.router.navigate(['online'], {relativeTo:this.route});
  }
}