import { Controller } from '@nestjs/common';
import { HealthCheckService, MongooseHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
    constructor(
        private health:HealthCheckService,
        private mongo: MongooseHealthIndicator
    ){}

    check(){
        return this.health.check([
            async()=>this.mongo.pingCheck('postgress',{timeout:1500}),
        ])
    }

}
