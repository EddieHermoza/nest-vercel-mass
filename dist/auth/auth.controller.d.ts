import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<string>;
    getProfile(req: any): any;
}
