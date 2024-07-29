import { Component } from '@angular/core';
import { UserReviewComponent } from '../../components/user-review/user-review.component';
import { DropdownComponent } from '../../ui/components/dropdown/dropdown.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UserReviewComponent, DropdownComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
