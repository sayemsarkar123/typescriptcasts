import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const router = AppRouter.getInstance();

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['test'] }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
