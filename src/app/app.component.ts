import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './componentes/employee-list/employee-list.component';
import { MyModalComponent } from './componentes/my-modal/my-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    EmployeeListComponent,
    MyModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = '50260-clase-05-comunicacion-componentes';

  empleadosEnVacaciones = ['Martin', 'Rodolfo', 'Carolina'];

  empleadosNuevos = ['Cynthia', 'Marcos', 'Matias'];

  @ViewChild(MyModalComponent)
  modalElement?: MyModalComponent;

  @ViewChild('btnModal')
  btnModal?: ElementRef<HTMLButtonElement>;

  // empleadosMap = new Map([
  //   [1, 'Juan Carlos'],
  //   [2, 'Cecilia Perez'],
  //   [3, 'Martina Gomez'],
  // ])

  constructor() {
    console.log(this.modalElement);
  }

  ngAfterViewInit(): void {
    console.log('Ciclo de vida AfterViewInit');
    console.log(this.modalElement?.visible);

    // this.modalElement && (this.modalElement.visible = true);
    // throw new Error('Method not implemented.');
  }

  modalVisible = false;

  abrirModal() {
    this.modalVisible = true;
  }

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
