import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { WalletService } from './wallet/wallet.service';
import { WalletController } from './wallet/wallet.controller';
import { WalletModule } from './wallet/wallet.module';
import { Wallet } from "./wallet/wallet.model";
@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      // @ts-ignore
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      // password: "NeXXX4665683",
      password: "root",
      // database: "nest_genshindonate",
      database: "coinalfabit",
      models: [Wallet],
      autoLoadModels: true,
    }),
    WalletModule
  ],
})
export class AppModule {}
