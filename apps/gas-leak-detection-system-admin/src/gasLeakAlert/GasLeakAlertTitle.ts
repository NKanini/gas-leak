import { GasLeakAlert as TGasLeakAlert } from "../api/gasLeakAlert/GasLeakAlert";

export const GASLEAKALERT_TITLE_FIELD = "alertLevel";

export const GasLeakAlertTitle = (record: TGasLeakAlert): string => {
  return record.alertLevel?.toString() || String(record.id);
};
