"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateQueryPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateQueryPipe = class ValidateQueryPipe {
    transform(value, metadata) {
        const limit = parseInt(value.limit?.toString() || "5");
        const page = parseInt(value.page?.toString() || "1");
        const query = value.query?.toString() || "";
        const statusMap = {
            "true": true,
            "false": false,
            "all": null
        };
        const status = statusMap[value.status] ?? null;
        if (value.status && value.status !== 'true' && value.status !== 'false' && value.status !== 'all') {
            throw new common_1.BadRequestException('El parámetro status es inválido');
        }
        if (isNaN(limit) || limit <= 0) {
            throw new common_1.BadRequestException('el atributo Limit debe ser un entero');
        }
        if (isNaN(page) || page <= 0) {
            throw new common_1.BadRequestException(' el atributo Page debe ser un entero');
        }
        return { ...value, limit, page, query, status };
    }
};
exports.ValidateQueryPipe = ValidateQueryPipe;
exports.ValidateQueryPipe = ValidateQueryPipe = __decorate([
    (0, common_1.Injectable)()
], ValidateQueryPipe);
//# sourceMappingURL=validate-query.pipe.js.map