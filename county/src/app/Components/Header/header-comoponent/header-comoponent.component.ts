import { CommonModule} from '@angular/common';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header-comoponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-comoponent.component.html',
  styleUrl: './header-comoponent.component.scss'
})
export class HeaderComoponentComponent implements OnInit {

  showContent: boolean = true

    textLabel = 'Ligth Mode'
  constructor(@Inject(DOCUMENT) private document: Document) {
    
  }
  

    onButtonClick(): void{

      if (this.showContent ===  true) {
        this.document.body.classList.add('my-body-class');
        this.textLabel = 'Dark Mode'
        this.showContent = false
      }else{
        this.document.body.classList.remove('my-body-class');
        this.textLabel = 'Ligth Mode'
        this.showContent = true
      }
      
    }

    ngOnInit(): void {
     
    }

}
