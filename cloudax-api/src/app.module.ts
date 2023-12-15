import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from './services/app.service';
import { UserController } from './controllers/users/user.controller';
import { UsersService } from './services/user.service';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/cloudax-db'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService, AppGateway],
})
export class AppModule {}
