import { defer } from "rxjs";

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export const httpClientSpyObject = jasmine.createSpyObj("HttpClient", [
  "get",
  "post",
  "put",
  "delete"
]);
