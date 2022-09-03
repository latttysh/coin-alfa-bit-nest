import { Module } from '@nestjs/common';
import { WalletController } from "./wallet.controller";
import { WalletService } from "./wallet.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Wallet } from "./wallet.model";

@Module({
  controllers: [WalletController],
  providers: [WalletService],
  imports:[
    SequelizeModule.forFeature([Wallet])
  ],
  exports:[
    WalletService
  ]
})
export class WalletModule {}
