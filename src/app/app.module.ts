import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./modules/core/header/header.component";
import { ClientesModule } from "./modules/clientes/clientes.module";
import { DetalhesModule } from "./modules/detalhes/detalhes.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, ClientesModule, HttpClientModule, DetalhesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
