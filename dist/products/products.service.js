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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ProductsService = class ProductsService {
    constructor(db) {
        this.db = db;
    }
    async create(createProductDto) {
        return await this.db.product.create({
            data: createProductDto
        });
    }
    async findAll({ limit, page, status, query }) {
        const pages = page || 1;
        const skip = (pages - 1) * limit;
        return await this.db.product.findMany({
            select: {
                id: true,
                created: true,
                updated: true,
                name: true,
                description: true,
                img: true,
                price: true,
                discount: true,
                orderLimit: true,
                isActive: true
            },
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
        const product = await this.db.product.findFirst({
            where: {
                id,
                isArchived: false
            }
        });
        if (!product)
            throw new common_1.NotFoundException(`El producto del id ${id} no existe`);
        return product;
    }
    async update(id, updateProductDto) {
        const updatedProduct = await this.db.product.update({
            where: {
                id,
                isArchived: false
            },
            data: updateProductDto
        });
        if (!updatedProduct)
            throw new common_1.NotFoundException(`El producto del id ${id} no existe`);
        return updatedProduct;
    }
    async remove(id) {
        const archivedProduct = await this.db.product.update({
            where: {
                id
            },
            data: {
                isActive: false,
                isArchived: true
            }
        });
        if (!archivedProduct)
            throw new common_1.NotFoundException(`El producto del id ${id} no existe`);
        return archivedProduct;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map