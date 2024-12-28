import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signIn.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    register(): Promise<void>;
    signIn({ email, password }: SignInDto): Promise<string>;
    signOut(): Promise<void>;
}
