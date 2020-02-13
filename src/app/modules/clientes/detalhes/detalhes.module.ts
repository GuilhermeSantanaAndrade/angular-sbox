import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DetalhesComponent } from "./detalhes.component";

@NgModule({
  declarations: [DetalhesComponent],
  imports: [CommonModule, FormsModule],
  exports: [DetalhesComponent]
})
export class DetalhesModule {}
