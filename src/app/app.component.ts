import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    let xx = document.querySelector<HTMLElement>("body >  div") 
    if (xx){
      xx.style.display="none"
    }
   // this._ServicesService.sidenav=this.sidenav
  }
  public DummyData: Object=[
    {Id:1,
    Name:"alex",
    Email:"ale@aze.com"
  }, 
  {Id:2,
    Name:"sam",
    Email:"sam@aze.com"
  },
  ]
}
