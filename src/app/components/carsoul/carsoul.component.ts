import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-carsoul',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './carsoul.component.html',
  styleUrl: './carsoul.component.scss'
})
export class CarsoulComponent {
faAngleLeft=faAngleLeft;
faAngleRight=faAngleRight;
}
