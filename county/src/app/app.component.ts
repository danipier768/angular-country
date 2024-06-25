import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComoponentComponent } from './Components/Header/header-comoponent/header-comoponent.component';
import { SeekerComponentComponent } from './Components/body/seeker-component/seeker-component.component';
import { CardComponentComponent } from './Components/body/card-component/card-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComoponentComponent, SeekerComponentComponent, CardComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'country';
  valueSearch: string = '';
  valueRegions: any = []
  valueFilter: string = '';
  constructor(private cdr: ChangeDetectorRef){}
  
  onSearchChange(value: string){
    this.valueSearch = value;
  }
  repetNot(regions: any){
    if(regions.length > 0){
      this.valueRegions = regions
    }
  }
  regFilter(filter: any){
    if(filter.length > 0){
      this.valueFilter = filter
    }
  }
}
