import { MaintenanceLog as TMaintenanceLog } from "../api/maintenanceLog/MaintenanceLog";

export const MAINTENANCELOG_TITLE_FIELD = "id";

export const MaintenanceLogTitle = (record: TMaintenanceLog): string => {
  return record.id?.toString() || String(record.id);
};
