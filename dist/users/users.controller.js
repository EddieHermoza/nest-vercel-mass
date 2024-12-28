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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const bcrypt = require("bcryptjs");
const utils_1 = require("../lib/utils");
const validate_id_pipe_1 = require("../pipes/validate-id.pipe");
const validate_query_pipe_1 = require("../pipes/validate-query.pipe");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(createUserDto) {
        const hash = await bcrypt.hash(createUserDto.password, 10);
        const UserDto = { ...createUserDto, password: hash };
        return this.usersService.create(UserDto);
    }
    async findAllWorkers(params) {
        const users = await this.usersService.findAll('VENDEDOR', params);
        const formattedUsers = users.map((user) => ({
            ...user,
            created: (0, utils_1.formatDate)(new Date(user.created)),
            updated: (0, utils_1.formatDate)(new Date(user.updated)),
        }));
        return formattedUsers;
    }
    async findAllCustomers(params) {
        const users = await this.usersService.findAll('CLIENTE', params);
        const formattedUsers = users.map((user) => ({
            ...user,
            created: (0, utils_1.formatDate)(new Date(user.created)),
            updated: (0, utils_1.formatDate)(new Date(user.updated)),
        }));
        return formattedUsers;
    }
    async findAllAdmins(params) {
        const users = await this.usersService.findAll('ADMINISTRADOR', params);
        const formattedUsers = users.map((user) => ({
            ...user,
            created: (0, utils_1.formatDate)(new Date(user.created)),
            updated: (0, utils_1.formatDate)(new Date(user.updated)),
        }));
        return formattedUsers;
    }
    async findOne(id) {
        return await this.usersService.findOne(id);
    }
    async update(id, updateUserDto) {
        return await this.usersService.update(id, updateUserDto);
    }
    async remove(id) {
        return await this.usersService.remove(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get-sellers'),
    __param(0, (0, common_1.Query)(validate_query_pipe_1.ValidateQueryPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllWorkers", null);
__decorate([
    (0, common_1.Get)('/get-customers'),
    __param(0, (0, common_1.Query)(validate_query_pipe_1.ValidateQueryPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllCustomers", null);
__decorate([
    (0, common_1.Get)('/get-admins'),
    __param(0, (0, common_1.Query)(validate_query_pipe_1.ValidateQueryPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllAdmins", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map