import { Request, Response } from 'express';
import { controller, get, post, requiredAttrs } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  authScreen(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email">
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
  `);
  }

  @post('/login')
  @requiredAttrs('email', 'password')
  userAuth(req: Request, res: Response): void {
    const { email, password } = req.body;
    if (email === 'user@email.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Incorrect email or password.');
    }
  }

  @get('/logout')
  userLogout(req: Request, res: Response) {
    req.session = null;
    res.redirect('/');
  }
}
