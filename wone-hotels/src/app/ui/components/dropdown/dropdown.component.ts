import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface Data {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  dataArray: Data[] | undefined;

  selectedData: Data | undefined;

  ngOnInit() {
    this.dataArray = [
      { name: 'Концепция', code: '1' },
      { name: 'Rome', code: '2' },
      { name: 'London', code: '3' },
      { name: 'Istanbul', code: '4' },
      { name: 'Paris', code: '5' },
    ];
    this.selectedData = this.dataArray[0];
  }
}
