import { User } from './models/User';

const user = new User({ name: 'Sushant', age: 28 });

user.save();
