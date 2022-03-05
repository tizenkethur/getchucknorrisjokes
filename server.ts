import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.get('http://api.icndb.com/jokes/random', (_req: Request, res: Response) => {
  res.json();
});
