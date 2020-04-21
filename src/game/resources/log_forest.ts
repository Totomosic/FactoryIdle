import { ResourceDeposit } from "./resource_deposit";
import { ItemId } from "../../items";
import { WorkField } from "../employees/employee";

export class LogForest extends ResourceDeposit {

    private static BASE_MS_PER_LOG: number = 1000

    constructor() {
        super(ItemId.Logs, WorkField.Woodcutting, 10, 1)
    }

    public update(lastTimeMs: number): number {
        super.update(lastTimeMs)
        const timePassed = this.getTimeSinceReset()
        const efficiency = this.calculateTotalEfficiency()
        if (efficiency > 0) {
            const timePerLog = LogForest.BASE_MS_PER_LOG / efficiency
            const logs = Math.floor(timePassed / timePerLog)
            if (logs > 0) {
                this.resetTime()
            }
            return logs
        }
        return 0
    }
}