import { Component } from './component';

export class pet extends Component {
  constructor(
    selector: string,
    public id: string,
    public name: string,
    public specie: string,
    public isadopted: boolean
  ) {
    super(selector);
    // Alt this.brand = brand
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
   <ul>
   <li>${this.name}</li>
   <li>${this.id}</li>
   <li>${this.specie}</li>
   <li>${this.isadopted}</li>
   <ul>
    `;
  }
}
