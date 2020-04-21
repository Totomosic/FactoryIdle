import { ItemId } from "../../items";
import { Employee, WorkField } from "../employees/employee";

export abstract class ResourceDeposit {

    protected _itemId: ItemId
    protected _field: WorkField
    protected _maxWorkers: number
    protected _requiredWorkerLevel: number
    protected _assignedWorkers: Employee[] = []

    private _lastTimeMilliseconds: number = 0
    private _referenceTimeMilliseconds: number = 0

    constructor(itemId: ItemId, field: WorkField, maxWorkers: number, requiredWorkerLevel: number = 1) {
        this._itemId = itemId
        this._field = field
        this._maxWorkers = maxWorkers
        this._requiredWorkerLevel = requiredWorkerLevel
    }

    public get itemId(): ItemId {
        return this._itemId
    }

    public get maxWorkers(): number {
        return this._maxWorkers
    }

    public get requiredWorkerLevel(): number {
        return this._requiredWorkerLevel
    }

    public get field(): WorkField {
        return this._field
    }

    public get assignedWorkers(): Employee[] {
        return this._assignedWorkers
    }

    public canAssignWorker(worker: Employee): boolean {
        return worker.getLevel(this.field) >= this.requiredWorkerLevel && this.assignedWorkers.length < this._maxWorkers
    }

    public assignWorker(worker: Employee): boolean {
        if (this.canAssignWorker(worker)) {
            this._assignedWorkers.push(worker)
            return true
        }
        return false
    }

    public unassignWorker(worker: Employee): boolean {
        const index = this._assignedWorkers.indexOf(worker)
        if (index >= 0) {
            this._assignedWorkers.splice(index, 1)
            return true
        }
        return false
    }

    // Compute how fast the resource is acquired given the number and quality of workers
    public calculateTotalEfficiency(): number {
        return 1.0
    }

    public update(lastTimeMilliseconds: number): number {
        this._lastTimeMilliseconds = lastTimeMilliseconds
        return 0
    }

    protected getTimeSinceReset(): number {
        return this._lastTimeMilliseconds - this._referenceTimeMilliseconds
    }

    protected resetTime() {
        this._referenceTimeMilliseconds = this._lastTimeMilliseconds
    }
}