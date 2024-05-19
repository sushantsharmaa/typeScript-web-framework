import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Zayn', age: 30 });

const rootElement = document.getElementById('root');

if (rootElement) {
  const userForm = new UserForm(rootElement, user);

  userForm.render();
} else {
  throw new Error('Root element not found!');
}
