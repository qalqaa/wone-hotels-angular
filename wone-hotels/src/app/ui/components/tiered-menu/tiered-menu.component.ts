import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  menuOpen = false;

  toggleMenu(event: Event) {
    this.menuOpen = !this.menuOpen;
    const button = event.currentTarget as HTMLElement;
    button.classList.toggle('open', this.menuOpen);
  }

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
        command: () => {
          this.router.navigate(['']);
        },
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
