import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DetalhesComponent } from "./detalhes.component";
import { httpClientSpyObject } from "../functions/test-functions";

describe("DetalhesComponent", () => {
  let component: DetalhesComponent;
  let httpClientSpy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpClientSpy = httpClientSpyObject;
    component = new DetalhesComponent(httpClientSpy);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
