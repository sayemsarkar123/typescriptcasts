import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.send('Access denied');
}

@controller('')
class RootController {
  @get('/')
  root(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <h1>You are now logged in</h1>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <h1>You are now logged out</h1>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  protected(req: Request, res: Response) {
    res.send(`
    <div>
      <h1>Welcome to my protected route!</h1>
      <h2>We've got cookies</h2>
    </div>
  `);
  }
}
