import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SupplyInventory-card.component.html',
  styleUrls: ['./SupplyInventory-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SupplyInventory-card]': 'true'
  }
})

export class SupplyInventoryCardComponent {


}