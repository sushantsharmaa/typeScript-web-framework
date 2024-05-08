import { User } from './models/User';

const user = new User({});

user.on('change', () => {
  console.log('User changed!');
});

user.on('save', () => {
  console.log('User saved!');
});

user.trigger('change');
