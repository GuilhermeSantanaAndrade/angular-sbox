import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ClientesComponent } from "./clientes.component";
import { asyncData, httpClientSpyObject } from "../functions/test-functions";

describe("ClientesComponent", () => {
  let component: ClientesComponent;
  let fixture: ComponentFixture<ClientesComponent>;
  let httpClientSpy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
