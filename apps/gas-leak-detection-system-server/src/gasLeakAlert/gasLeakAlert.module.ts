import { Module } from "@nestjs/common";
import { GasLeakAlertModuleBase } from "./base/gasLeakAlert.module.base";
import { GasLeakAlertService } from "./gasLeakAlert.service";
import { GasLeakAlertController } from "./gasLeakAlert.controller";
import { GasLeakAlertResolver } from "./gasLeakAlert.resolver";

@Module({
  imports: [GasLeakAlertModuleBase],
  controllers: [GasLeakAlertController],
  providers: [GasLeakAlertService, GasLeakAlertResolver],
  exports: [GasLeakAlertService],
})
export class GasLeakAlertModule {}
