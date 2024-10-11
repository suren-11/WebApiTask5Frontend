import { Component, OnInit } from '@angular/core';
import { Item } from '../../../entities/items';
import { Router } from '@angular/router';
import { ItemService } from '../../../services/item/item.service';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrl: './show-items.component.css'
})
export class ShowItemsComponent implements OnInit {
  items: Item[] = []; 

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadAllItems()
  }

  loadAllItems() {
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (error) => {
        console.error("Error Employee fetching ", error);
      }
    });
  }

  goToUpdate(item: Item) {
    this.itemService.setItem(item);
    this.router.navigate(['/dashboard/item/update-item']);
  }
}
