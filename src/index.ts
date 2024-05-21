import { UserList } from './views/UserList';
import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

// const user = User.buildUser({ name: 'Zayn', age: 30 });

// const rootElement = document.getElementById('root');

// if (rootElement) {
//   const userEdit = new UserEdit(rootElement, user);

//   userEdit.render();
// } else {
//   throw new Error('Root element not found!');
// }

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
