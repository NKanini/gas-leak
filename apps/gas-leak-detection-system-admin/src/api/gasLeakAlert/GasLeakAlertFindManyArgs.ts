import { GasLeakAlertWhereInput } from "./GasLeakAlertWhereInput";
import { GasLeakAlertOrderByInput } from "./GasLeakAlertOrderByInput";

export type GasLeakAlertFindManyArgs = {
  where?: GasLeakAlertWhereInput;
  orderBy?: Array<GasLeakAlertOrderByInput>;
  skip?: number;
  take?: number;
};
