import { Component } from '@angular/core';
import { Item } from '../../../entities/items';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../../services/item/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent {

  item!: Item;
  itemForm!: FormGroup;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private fb: FormBuilder,
  ) {
    this.itemForm = this.fb.group({
      id: [1],
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.loadItem();
  }

  loadItem() {
    this.item = this.itemService.getSelectedItem();
    if (this.item) {

      this.itemForm.patchValue({
        id: this.item.id,
        name: this.item.name,
        description: this.item.description,
        price: this.item.price
      })
    } else {
      console.log("no item");

    }
  }

  update() {
    if (this.itemForm.valid) {
      this.item.name = this.itemForm.get('name')?.value;
      this.item.description = this.itemForm.get('description')?.value;
      this.item.price = this.itemForm.get('price')?.value;

      this.itemService.updateItem(this.item).subscribe(
        response => {
          this.router.navigate(['/dashboard/item/show-all-items'])
        }
      );
    } else {
      this.itemForm.markAllAsTouched();
    }
  }

}
