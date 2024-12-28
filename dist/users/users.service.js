"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let UsersService = class UsersService {
    constructor(db) {
        this.db = db;
    }
    async create(createUserDto) {
        return await this.db.user.create({
            data: createUserDto
        });
    }
    async findAll(role, { limit, query, status, page }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.user.findMany({
            where: {
                AND: [
                    query ? { name: { contains: query, mode: client_1.Prisma.QueryMode.insensitive } } : {},
                    status !== null && status !== undefined ? { isActive: status } : {},
                    role ? { role: role } : {},
                ],
                isArchived: false
            },
            skip: skip,
            take: limit,
        });
    }
    async findOne(id) {
        const user = await this.db.user.findFirst({
            where: {
                id,
                isArchived: false
            }
        });
        if (!user)
            throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
        return user;
    }
    async update(id, updateUserDto) {
        const updatedUser = await this.db.user.update({
            where: {
                id,
                isArchived: false
            },
            data: updateUserDto
        });
        if (!updatedUser)
            throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
        return updatedUser;
    }
    async remove(id) {
        const archivedUser = await this.db.user.update({
            where: {
                id
            },
            data: {
                isActive: false,
                isArchived: true
            }
        });
        if (!archivedUser)
            throw new common_1.NotFoundException(`El usuario del id ${id} no existe`);
        return archivedUser;
    }
    async findOneByEmail(email) {
        const user = await this.db.user.findFirst({
            where: {
                email,
                isActive: true,
                isArchived: false
            },
        });
        if (!user)
            throw new common_1.NotFoundException(`El usuario del email ${email} no existe`);
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map