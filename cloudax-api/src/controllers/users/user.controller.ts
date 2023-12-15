import { Controller } from '@nestjs/common';
import { UsersService } from 'src/services/user.service';

@Controller()
export class UserController {
  constructor(private readonly appService: UsersService) {}
}
