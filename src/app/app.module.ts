import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ClientesModule } from "./clientes/clientes.module";
import { DetalhesComponent } from "./detalhes/detalhes.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, DetalhesComponent],
  imports: [BrowserModule, ClientesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
