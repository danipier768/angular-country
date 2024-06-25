import { Component, OnInit, Input, Output, OnChanges, SimpleChange, SimpleChanges, EventEmitter } from '@angular/core';
import { ProductsService } from '../../../services/product.service';
import { ProductInterface } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent implements OnInit, OnChanges{
  //comunicacion entre padre e hijo
  @Input () searchValue: string = '';
  @Output() sinRep = new EventEmitter<any>();
  @Input() 
  //Variables 
  productList: ProductInterface[] = []
  productListCopy: any;

//Escuhcadro input
  constructor(private productsService: ProductsService){}
  ngOnChanges(changes: SimpleChanges): void{
    if (changes['searchValue']) { 
      this.filterSeeker()
    }
  }

  //Filter 
  filterSeeker(): void {
    if (this.searchValue.length > 0) {
      const filterData = this.productListCopy.filter((res: any) => res.name.common.toLowerCase().includes(this.searchValue.toLowerCase()));
      this.productList = filterData;
    }else{
      this.productList = this.productListCopy
    }
  }

  ngOnInit(): void {
    this.getProducts()
  }

  //filtro region
  eliminarRepetido(country: any[]): void{
    const regions = country.map((element)=> element.region);
    const oneRegion =  new Set(regions)
    const result = [...oneRegion]
    if(result.length > 0){
      setTimeout(() => {
        this.sinRep.emit(result)
      }, 100);
     
    }
  }                                                                                                 

// GetApi
  getProducts(){
    this.productsService.getProducts().subscribe({
      next: (result) => {
        this.productList = result;
        this.productListCopy = result;
        this.eliminarRepetido(this.productList)
      },
      error: (err) =>{
        console.log(err);
      }
    })
    
  }
  
  


}
