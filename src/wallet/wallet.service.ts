import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Wallet } from "./wallet.model";

@Injectable()
export class WalletService {

  constructor(@InjectModel(Wallet) private walletRepository: typeof Wallet) {
  }

  async createWallet(data){
    const wallet = await this.walletRepository.create({name: data.name, address: data.address})
    return wallet
  }

  async getAllWallets(){
    const wallets = await this.walletRepository.findAll({include: {all:true}})
    return wallets
  }

  async deleteWallet(id){
    const wallet = await this.walletRepository.findOne({where:{id: id.id}})
    await wallet.destroy()
    return true
  }
}
