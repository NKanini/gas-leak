import * as graphql from "@nestjs/graphql";
import { GasLeakAlertResolverBase } from "./base/gasLeakAlert.resolver.base";
import { GasLeakAlert } from "./base/GasLeakAlert";
import { GasLeakAlertService } from "./gasLeakAlert.service";

@graphql.Resolver(() => GasLeakAlert)
export class GasLeakAlertResolver extends GasLeakAlertResolverBase {
  constructor(protected readonly service: GasLeakAlertService) {
    super(service);
  }
}
