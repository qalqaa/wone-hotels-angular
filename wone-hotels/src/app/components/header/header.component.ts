import { Component } from '@angular/core';
import { TieredMenuComponent } from '../../ui/components/tiered-menu/tiered-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TieredMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  navigateToSearch() {
    this.router.navigate(['/search']);
  }
}
