import { Component, OnInit, Input } from "@angular/core";
import { EventBusService } from "../../../shared/services/event-bus.service";
import { ICliente } from "../../clientes/icliente";
import { ClienteService } from "../../clientes/clientes.service";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.scss"]
})
export class DetalhesComponent implements OnInit {
  cliente: ICliente;

  constructor(private _clienteService: ClienteService) {}

  ngOnInit(): void {
    EventBusService.clienteUpdated.subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  onClose() {
    this.cliente = undefined;
  }

  async handleSubmit() {
    try {
      //await this._clienteService.insert(this.cliente);
      window.alert("Cadastrado com sucesso!");
    } catch (error) {
      window.alert(error);
    }
  }
}
