import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Cat') private catModel:Model<any>,
    @InjectModel('Member') private memberModel: Model<any>){
    
  }

  async getItems(){
    return await this.memberModel.find();
  }

  createItem() {
    this.memberModel.create([
        {
            firstname: 'firstname',
            lastname: 'lastname',
            email: 'email',
            password: 'password',
            id: 1,
            position: 'post',
            image: 'img',
            role: 2
        }
    ]);
}
  /*createItem(){
   const model = new this.catModel({name: new Date().toString() ,age:Math.random()});
   model.save();
  }

  getHello(): string {
    return 'Hello World!';
  }*/
}
