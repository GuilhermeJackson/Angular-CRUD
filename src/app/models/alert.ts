import { Unit } from "../../shared/models/unit";
import { Variable } from "../../shared/models/variable";
import { Equipment } from "../../shared/models/equipment";

export interface Alert {
    equipment: Equipment;
    uuid: string;
    alertDate: string;
    alertValue: string;
    alertUpperLimitValue: string;
    alertLowerLimitValue: string;
    status?: string;
}