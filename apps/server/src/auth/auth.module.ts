import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    DrizzleModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: 'secreeet',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
