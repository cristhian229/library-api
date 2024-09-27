import { IsDate, IsOptional, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    title:string

    @IsString()
    author:string

    @IsDate()
    @IsOptional()
    published_date: Date

    @IsString()
    genre:string
}
