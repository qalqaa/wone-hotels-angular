import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-tiered-menu',
  standalone: true,
  imports: [TieredMenuModule],
  templateUrl: './tiered-menu.component.html',
  styleUrl: './tiered-menu.component.scss',
})
export class TieredMenuComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Day Spa',
      },
      {
        label: 'Spa-зона',
      },
      {
        label: 'Фитнес центр',
      },
      {
        label: 'Рестораны',
      },
      {
        label: 'Детский клуб',
      },
      {
        label: 'Прайс-лист',
      },
      {
        label: 'О нас',
      },
      {
        label: 'Акции и новости',
      },
      {
        label: 'Правовая документация',
      },
    ];
  }
}
