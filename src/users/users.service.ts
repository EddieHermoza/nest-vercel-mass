import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, UserRole } from '@prisma/client';
import { QueryProps } from '../pipes/validate-query.pipe';


@Injectable()
export class UsersService {

  constructor(private readonly db:PrismaService ){}

  async create(createUserDto: CreateUserDto) {
    return await this.db.user.create({
      data:createUserDto
    })
  }

  async findAll(role:UserRole, { limit, query, status, page }: QueryProps) {

    const pages = page || 1;
    const skip = (pages - 1) * limit;
  
    return await this.db.user.findMany({
      where: {
        AND: [
          query ? { name: { contains: query, mode: Prisma.QueryMode.insensitive } } : {},
          status !== null && status !== undefined ? { isActive: status } : {},
          role ? { role: role } : {},
        ],
        isArchived:false
      },
      skip: skip,
      take: limit,
    })
  }

  async findOne(id: number) {
    const user = await this.db.user.findFirst({
      where:{
        id,
        isArchived:false
      }
    })

    if (!user) throw new NotFoundException(`El usuario del id ${id} no existe`)

    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.db.user.update({
      where:{
        id,
        isArchived:false
      },
      data:updateUserDto
      
    })
    
    if (!updatedUser) throw new NotFoundException(`El usuario del id ${id} no existe`)

    return updatedUser
  }

  async remove(id: number) {
    const archivedUser =  await this.db.user.update({
      where:{
        id
      },
      data:{
        isActive:false,
        isArchived:true
      }
    })

    if (!archivedUser) throw new NotFoundException(`El usuario del id ${id} no existe`)

    return archivedUser
  }

  async findOneByEmail(email:string) {
    const user = await this.db.user.findFirst({
      where:{
        email,
        isActive:true,
        isArchived:false

      },
    })

    if (!user) throw new NotFoundException(`El usuario del email ${email} no existe`)

    return user
  }
}
