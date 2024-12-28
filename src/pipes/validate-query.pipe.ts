import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

export interface QueryProps {
  limit:number,
  query:string,
  status:boolean | null
  page:number 
}

@Injectable()
export class ValidateQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const limit = parseInt(value.limit?.toString() || "5")
    const page = parseInt(value.page?.toString() || "1")
    const query = value.query?.toString() || ""

    const statusMap: { [key: string]: boolean | null } = {
      "true": true,
      "false": false,
      "all": null
    }

    const status = statusMap[value.status] ?? null
    
    
    if (value.status && value.status !== 'true' && value.status !== 'false' && value.status !== 'all') {
      throw new BadRequestException('El parámetro status es inválido')
    }
    if (isNaN(limit) || limit <= 0) {
      throw new BadRequestException('el atributo Limit debe ser un entero');
    }
    if (isNaN(page) || page <= 0) {
      throw new BadRequestException(' el atributo Page debe ser un entero');
    }

    return { ...value, limit, page, query, status };
  }
}