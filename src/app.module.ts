import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {CatSchema} from './schemas/cat.schema';
import { memberSchema } from './schemas/member.schemas';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ex_test'),
    MongooseModule.forFeature([
      {name : 'Cat',schema:CatSchema },
      { name: 'Member', schema: memberSchema }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
