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
exports.ProvidersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ProvidersService = class ProvidersService {
    constructor(db) {
        this.db = db;
    }
    async create(createProviderDto) {
        return await this.db.provider.create({
            data: createProviderDto
        });
    }
    async findAll({ limit, page, query, status }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.provider.findMany({
            where: {
                AND: [
                    query ? { name: { contains: query, mode: client_1.Prisma.QueryMode.insensitive } } : {},
                    status !== null && status !== undefined ? { isActive: status } : {},
                ],
                isArchived: false
            },
            skip: skip,
            take: limit,
        });
    }
    async findOne(id) {
        const provider = await this.db.provider.findFirst({
            where: {
                id,
                isArchived: false
            }
        });
        if (!provider)
            throw new common_1.NotFoundException(`El proveedor del id ${id} no existe`);
        return provider;
    }
    async update(id, updateProviderDto) {
        const updatedProvider = await this.db.provider.update({
            where: {
                id,
                isArchived: false
            },
            data: updateProviderDto
        });
        if (!updatedProvider)
            throw new common_1.NotFoundException(`El proveedor del id ${id} no existe`);
        return updatedProvider;
    }
    async remove(id) {
        const archivedProvider = await this.db.provider.update({
            where: {
                id
            },
            data: {
                isActive: false,
                isArchived: true
            }
        });
        if (!archivedProvider)
            throw new common_1.NotFoundException(`El proveedor del id ${id} no existe`);
        return archivedProvider;
    }
};
exports.ProvidersService = ProvidersService;
exports.ProvidersService = ProvidersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProvidersService);
//# sourceMappingURL=providers.service.js.map