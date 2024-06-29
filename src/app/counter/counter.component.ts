import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',//etiqueta del componente (podemos ponerle el nombre que queramos)
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
  
ngOnInit(): void {
 // throw new Error('Method not implemented.');  //eliminamos esta linea
 console.log('creando componente');
 this.counter = parseInt(localStorage.getItem('counter')!) || 0;
 
 
}  
counter:number=0;  
@Input() title!: string;                             
setCounter():void{
  this.counter=this.counter+1; 
  localStorage.setItem('counter',this.counter.toString());
}
}
