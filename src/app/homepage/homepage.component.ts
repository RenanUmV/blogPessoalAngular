import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if (environment.token == ''){
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/login'])
    }
  }

}
