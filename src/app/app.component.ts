import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './componentes/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '50260-clase-05-comunicacion-componentes';

  empleadosEnVacaciones = ['Martin', 'Rodolfo', 'Carolina'];

  empleadosNuevos = ['Cynthia', 'Marcos', 'Matias'];

  // empleadosMap = new Map([
  //   [1, 'Juan Carlos'],
  //   [2, 'Cecilia Perez'],
  //   [3, 'Martina Gomez'],
  // ])

  eliminarEmpleado(nombreEmpleadoAEliminar: string) {
    // this.empleadosMap.delete(1)
    // console.log('nombreEmpleadoAEliminar', nombreEmpleadoAEliminar);
    this.empleadosEnVacaciones = this.empleadosEnVacaciones.filter(
      (nombreEmpleado) => nombreEmpleado != nombreEmpleadoAEliminar
    );
  }

  addEmpleado() {
    const nombre = prompt('Ingrese el nombre');
    if (nombre) {
      this.empleadosNuevos.push(nombre);
    }
  }
}
