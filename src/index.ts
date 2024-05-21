import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'Zayn', age: 30 });

const rootElement = document.getElementById('root');

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);

  userEdit.render();
} else {
  throw new Error('Root element not found!');
}
