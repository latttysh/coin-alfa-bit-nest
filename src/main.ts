import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function start(){
  const PORT =  4444;
  const app = await NestFactory.create(AppModule)
  app.enableCors();
  await app.listen(PORT, ()=> console.log("Сервер запущен")).catch(err => console.log(err))
}

start().then(()=>console.log("Функция старта успешно отработала")).catch(err => console.log(err))