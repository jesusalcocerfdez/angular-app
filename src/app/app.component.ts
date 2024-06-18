import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';//* importado manualmente
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],//agregado CommondModule manualmente
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo con Angular desde Componente';
  users :string[]=['Pepe','Luis','Maria','Lupe'];
}
