import { Component } from '@angular/core';
import { TieredMenuComponent } from '../../ui/components/tiered-menu/tiered-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TieredMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
