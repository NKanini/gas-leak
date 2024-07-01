import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GasLeakAlertService } from "./gasLeakAlert.service";
import { GasLeakAlertControllerBase } from "./base/gasLeakAlert.controller.base";

@swagger.ApiTags("gasLeakAlerts")
@common.Controller("gasLeakAlerts")
export class GasLeakAlertController extends GasLeakAlertControllerBase {
  constructor(protected readonly service: GasLeakAlertService) {
    super(service);
  }
}
