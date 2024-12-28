import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SignInDto } from './dto/signIn.dto';


@Injectable()
export class AuthService {

    constructor( private readonly userService:UsersService, private readonly jwtService:JwtService ){}

    async register() {


    }

    async signIn ({email,password}:SignInDto) {

        const user = await this.userService.findOneByEmail(email)

        const match = await bcrypt.compare(password,user.password)

        if (!match) throw new UnauthorizedException("La contraseña es incorrecta")

        const payload = { id: user.id, username: user.name+" "+user.lastName,email:user.email, role:user.role }

        return this.jwtService.signAsync(payload)
    }

    async signOut () {
        
    }


}
