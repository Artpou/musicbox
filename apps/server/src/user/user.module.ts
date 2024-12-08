import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';

import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [DrizzleModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}