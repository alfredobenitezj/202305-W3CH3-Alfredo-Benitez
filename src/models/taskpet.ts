/* eslint-disable no-unused-vars */
export type PetStructure = {
  id: string;
  name: string;
  specie: string;
  isadopted: boolean;
};

export class Task implements PetStructure {
  static generateID() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  id: string;
  isadopted: boolean;

  constructor(public title: string, public owner: string) {
    this.id = Task.generateID();
    this.isadopted = false;
  }
}
