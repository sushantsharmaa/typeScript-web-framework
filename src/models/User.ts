import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  age?: number;
  name?: string;
}

const rootUrl: string = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();

  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
