import { TestBed } from "@angular/core/testing";

import { ClienteService } from "./clientes.service";
import { httpClientSpyObject, asyncData } from "../../shared/test-functions";
import { ICliente } from "./icliente";

describe("ClienteService", () => {
  let service: ClienteService;
  let httpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = httpClientSpyObject;
    service = new ClienteService(httpClientSpy);
  });

  it("deve ser criado", () => {
    expect(service).toBeTruthy();
  });

  it("deve listar clientes", async () => {
    const expectedResult: ICliente[] = [
      {
        id: "0",
        nome: "Exemplo 1",
        idade: 18
      },
      {
        id: "1",
        nome: "Exemplo 2",
        idade: 18
      }
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedResult));

    const result = await service.list();
    expect(result).toBeInstanceOf(Array);
    expect(result).toBe(expectedResult, "Não retornou conforme esperado.");
  });
});
