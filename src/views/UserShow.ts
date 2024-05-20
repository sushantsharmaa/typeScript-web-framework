import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
         <h1>User Details</h1>
         <p>User Name: ${this.model.get('name')}</p>
         <p>User Name: ${this.model.get('age')}</p>
      </div>
    `;
  }
}
