import { Component } from '@angular/core';
import { UserReviewComponent } from '../../components/user-review/user-review.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UserReviewComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
