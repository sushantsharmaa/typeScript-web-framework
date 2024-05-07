import { User } from './models/User';

const user = new User({});

user.set({ name: 'Honey', age: 40 });

console.log(user.get('name'));
