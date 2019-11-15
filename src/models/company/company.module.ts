import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schema/company.schema';
import { CompanyService } from './company.service';

@Module({

    imports:[
        MongooseModule.forFeature([{name:'Company',schema:CompanySchema}]),
    ],

    exports: [CompanyService],
    providers:[CompanyService]
})
export class CompanyModule {}
