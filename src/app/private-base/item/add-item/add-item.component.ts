import { Component } from '@angular/core';
import { Item } from '../../../entities/items';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../../services/item/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  item: Item = new Item(0n, '', '', 0, new Date(), new Date(),);

  itemForm!: FormGroup;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.itemForm = this.fb.group({
      id:[1],
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required]],
    });
  }

  save() {
    if (this.itemForm.valid) {
      this.item.id = this.itemForm.get('id')?.value,
      this.item.name = this.itemForm.get('name')?.value;
      this.item.description = this.itemForm.get('description')?.value;
      this.item.price = this.itemForm.get('price')?.value;

      this.itemService.saveItem(this.item).subscribe(
        response =>{
          this.router.navigate(['/dashboard/item/show-all-items'])
        }
      );
    } else {
      this.itemForm.markAllAsTouched();
    }
  }

} 
