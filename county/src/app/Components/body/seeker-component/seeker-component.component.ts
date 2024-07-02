import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter, SimpleChanges, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-seeker-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seeker-component.component.html',
  styleUrl: './seeker-component.component.scss'
})
export class SeekerComponentComponent implements OnChanges{

  @Input() repetRegion: any = [];
  @Output() searchChange = new EventEmitter<string>();
  @Output() filterReg = new EventEmitter<string>();
  arrayRegions: any = []
  selectedRegion: string = '';

  OninputChange(event: any){
    this.searchChange.emit(event.target.value)
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes['repetRegion']) {
      this.arrayRegions = changes['repetRegion'].currentValue
    }
  }

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedRegion = selectElement.value;
    this.filterReg.emit(this.selectedRegion)
  }

}
