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
exports.ProvidersController = void 0;
const common_1 = require("@nestjs/common");
const providers_service_1 = require("./providers.service");
const create_provider_dto_1 = require("./dto/create-provider.dto");
const update_provider_dto_1 = require("./dto/update-provider.dto");
const validate_query_pipe_1 = require("../pipes/validate-query.pipe");
const validate_id_pipe_1 = require("../pipes/validate-id.pipe");
let ProvidersController = class ProvidersController {
    constructor(providersService) {
        this.providersService = providersService;
    }
    create(createProviderDto) {
        return this.providersService.create(createProviderDto);
    }
    async findAll(params) {
        return await this.providersService.findAll(params);
    }
    findOne(id) {
        return this.providersService.findOne(id);
    }
    update(id, updateProviderDto) {
        return this.providersService.update(id, updateProviderDto);
    }
    remove(id) {
        return this.providersService.remove(id);
    }
};
exports.ProvidersController = ProvidersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_provider_dto_1.CreateProviderDto]),
    __metadata("design:returntype", void 0)
], ProvidersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(validate_query_pipe_1.ValidateQueryPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProvidersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_provider_dto_1.UpdateProviderDto]),
    __metadata("design:returntype", void 0)
], ProvidersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', validate_id_pipe_1.ValidateId)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProvidersController.prototype, "remove", null);
exports.ProvidersController = ProvidersController = __decorate([
    (0, common_1.Controller)('providers'),
    __metadata("design:paramtypes", [providers_service_1.ProvidersService])
], ProvidersController);
//# sourceMappingURL=providers.controller.js.map