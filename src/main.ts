import { ApplicationContext } from "./app.context";

async function bootstrap() {
  const app = await ApplicationContext();
  await app.listen(3000);
}

bootstrap();