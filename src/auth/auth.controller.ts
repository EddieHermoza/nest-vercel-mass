import {  Body,  Controller,  Get,  HttpCode,  HttpStatus, Post,  Request,  UseGuards } from '@nestjs/common';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('/signIn')
    async signIn(@Body() signInDto:SignInDto) {
      return await this.authService.signIn(signInDto)
    }
  
    @UseGuards(AuthGuard)
    @Get('/profile')
    getProfile(@Request() req) {
      return req.user
    }
  }