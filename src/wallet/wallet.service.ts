import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Wallet } from "./wallet.model";
import axios from 'axios'

@Injectable()
// @ts-ignore
export class WalletService {

  constructor(@InjectModel(Wallet) private walletRepository: typeof Wallet) {
  }

  async createWallet(data){
    // @ts-ignore
    const wallet = await this.walletRepository.create({name: data.name, address: data.address})
    return wallet
  }

  async getAllWallets(){
    // @ts-ignore
    const wallets = await this.walletRepository.findAll({include: {all:true}})
    return wallets
  }

  async deleteWallet(id){
    // @ts-ignore
    const wallet = await this.walletRepository.findOne({where:{id: id.id}})
    await wallet.destroy()
    return true
  }

  async convert(deposit, withdraw,amount){
    let res = await axios.get(`https://api.coinconvert.net/convert/${deposit}/${withdraw}?amount=${amount}`)
    return res.data
  }
}
