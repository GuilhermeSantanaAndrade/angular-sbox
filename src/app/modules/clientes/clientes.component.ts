import { Component, OnInit } from "@angular/core";
import { ICliente } from "./icliente";
import { EventBusService } from "../../shared/services/event-bus.service";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"]
})
export class ClientesComponent implements OnInit {
  currentCliente: ICliente = {
    id: "",
    nome: "guilherme",
    idade: 28
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
    EventBusService.clienteUpdated.emit(this.currentCliente);
  }
}
