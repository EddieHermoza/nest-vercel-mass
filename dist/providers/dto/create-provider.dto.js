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
exports.CreateProviderDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProviderDto {
}
exports.CreateProviderDto = CreateProviderDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "El ruc debe ser un string" }),
    (0, class_validator_1.Length)(11, 11, { message: "El ruc debe tener 11 digitos" }),
    __metadata("design:type", String)
], CreateProviderDto.prototype, "ruc", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "El nombre debe ser un string" }),
    __metadata("design:type", String)
], CreateProviderDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "El legal debe ser un string" }),
    __metadata("design:type", String)
], CreateProviderDto.prototype, "legal", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "La web debe ser un string" }),
    __metadata("design:type", String)
], CreateProviderDto.prototype, "web", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'El correo electrónico no es válido.' }),
    __metadata("design:type", String)
], CreateProviderDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "La número debe ser un string" }),
    (0, class_validator_1.Length)(9, 9, { message: 'El número debe tener 9 caracteres.' }),
    __metadata("design:type", String)
], CreateProviderDto.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: 'El campo isActive debe ser un booleano' }),
    __metadata("design:type", Boolean)
], CreateProviderDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-provider.dto.js.map