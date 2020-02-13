import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventBusService {
  static clienteUpdated = new EventEmitter();

  constructor() {}
}
