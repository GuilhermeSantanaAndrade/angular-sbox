import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ClientesComponent } from "./form/clientes.component";
import { DetalhesComponent } from "./detalhes/detalhes.component";

@NgModule({
  declarations: [ClientesComponent, DetalhesComponent],
  imports: [CommonModule, FormsModule],
  exports: [ClientesComponent, DetalhesComponent]
})
export class ClientesModule {}
