import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GasLeakAlertServiceBase } from "./base/gasLeakAlert.service.base";

@Injectable()
export class GasLeakAlertService extends GasLeakAlertServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
