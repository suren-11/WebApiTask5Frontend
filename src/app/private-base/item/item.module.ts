import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowItemsComponent } from './show-items/show-items.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';


const routes: Routes = [
  { path: '', component: AddItemComponent },
  { path: 'show-all-items', component: ShowItemsComponent },
  { path: 'update-item', component: UpdateItemComponent }
];

@NgModule({
  declarations: [
    ShowItemsComponent,
    AddItemComponent,
    UpdateItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class ItemModule { }
