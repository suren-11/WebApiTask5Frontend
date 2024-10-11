import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../../entities/items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = '/api/Item'
  constructor(private http: HttpClient) { }

  itemData!: Item;

  setItem(item: Item) {
    this.itemData = item
  }

  getSelectedItem(): Item {
    return this.itemData;
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  saveItem(item: Item) {
    return this.http.post(this.apiUrl, item);
  }

  updateItem(item: Item) {
    return this.http.put(this.apiUrl, item);
  }
}
