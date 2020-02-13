import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICliente } from "./icliente";

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  constructor(private _http: HttpClient) {}

  async list(): Promise<ICliente[]> {
    const result = await this._http
      .get<ICliente[]>("localhost:3000/clientes")
      .toPromise();
    return Promise.resolve(result);
  }

  async insert(cliente: ICliente): Promise<string> {
    const result = await this._http
      .post<ICliente>("localhost:3000/clientes", cliente)
      .toPromise();
    return result.id;
  }
}
