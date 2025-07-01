import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Esta importación SÍ se usa (para <router-outlet>)
  template: `
    <main>
      <!-- RouterOutlet es usado aquí -->
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class App {
  title = 'ejemplo01'; // Puedes eliminar esta línea si no la usas
}