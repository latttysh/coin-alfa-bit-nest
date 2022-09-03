import { Body, Controller, Get, Post } from "@nestjs/common";
import { WalletService } from "./wallet.service";

@Controller('/api/wallet')
export class WalletController {

  constructor(private walletSerivce: WalletService) {
  }

  @Post()
  create(@Body() data){
    return this.walletSerivce.createWallet(data)
  }

  @Get()
  getAll(){
    return this.walletSerivce.getAllWallets()
  }

  @Post("/delete")
  delete(@Body() id){
    return this.walletSerivce.deleteWallet(id)
  }
}
