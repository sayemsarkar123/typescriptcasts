import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

collection.on('change', () => {
  new UserList(document.getElementById('root'), collection).render();
});

collection.fetch();
