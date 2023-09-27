import { App } from '@/app';
import { EventRoute } from '@/routes/events.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new EventRoute()]);

app.listen();
