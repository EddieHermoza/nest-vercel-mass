import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export interface QueryProps {
    limit: number;
    query: string;
    status: boolean | null;
    page: number;
}
export declare class ValidateQueryPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
