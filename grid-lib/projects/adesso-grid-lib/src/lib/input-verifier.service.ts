import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputVerifierService {

  constructor() { }

  exists(parent: any, parentName: string, property: string) {
    if (!parent[property]) {
      throw new Error('Property "' + property + '"  is missing in ' + parentName + '!');
    }
  }

  allExist(parent: any, parentName: string, properties: string[]) {
    for (const property of properties) {
      this.exists(parent, parentName, property);
    }
  }
}
