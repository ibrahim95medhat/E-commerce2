import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss'
})
export class DealsComponent {
faAngleLeft=faAngleLeft;
faAngleRight=faAngleRight;
}
