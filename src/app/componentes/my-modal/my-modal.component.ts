import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss',
})
export class MyModalComponent {
  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter();

  cerrarModal() {
    // this.visible = false;
    this.visibleChange.emit(false);
  }
}
