import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';//* importado manualmente
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,CounterComponent],//agregado CommondModule manualmente //importamos CounterComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo con Angular desde Componente';
  subTitle = 'Contador con estado de session';
  users :string[]=['Pepe','Luis','Maria','Lupe'];
  //users :string[]=[];
  visible:boolean=false;
  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('hemos hecho clic en setVisible');
  }
}
