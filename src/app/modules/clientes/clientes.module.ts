import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ClientesComponent } from "./clientes.component";

@NgModule({
  declarations: [ClientesComponent],
  imports: [CommonModule, FormsModule],
  exports: [ClientesComponent]
})
export class ClientesModule {}
