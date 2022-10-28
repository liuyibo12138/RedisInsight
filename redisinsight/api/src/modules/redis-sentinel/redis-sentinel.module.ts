import { Module } from '@nestjs/common';
import { SharedModule } from 'src/modules/shared/shared.module';
import { RedisSentinelService } from 'src/modules/redis-sentinel/redis-sentinel.service';
import { RedisSentinelController } from 'src/modules/redis-sentinel/redis-sentinel.controller';
import { RedisSentinelAnalytics } from 'src/modules/redis-sentinel/redis-sentinel.analytics';

@Module({
  imports: [
    SharedModule,
  ],
  controllers: [RedisSentinelController],
  providers: [
    RedisSentinelService,
    RedisSentinelAnalytics,
  ],
  exports: [
    RedisSentinelService,
    RedisSentinelAnalytics,
  ],
})
export class RedisSentinelModule {}
