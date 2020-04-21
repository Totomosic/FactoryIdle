export enum WorkField {
    Mining,
    Woodcutting
}

export class Employee {

    private _levelMap = new Map<WorkField, number>()
    private _efficiencyBase: number = 1.0
    private _assigned: boolean = false

    constructor(efficiencyBase: number = 1.0) {
        this._efficiencyBase = efficiencyBase
    }

    public get efficiencyBase(): number {
        return this._efficiencyBase
    }

    public set efficiencyBase(efficiency: number) {
        this._efficiencyBase = efficiency
    }

    public get assigned(): boolean {
        return this._assigned
    }

    public set assigned(isAssigned: boolean) {
        this._assigned = isAssigned
    }

    public getTotalLevel(): number {
        let level = 0
        this._levelMap.forEach((l) => level += l)
        return level
    }

    public getEfficiency(field: WorkField): number {
        return this._efficiencyBase
    }

    public getLevel(field: WorkField): number {
        const value = this._levelMap.get(field)
        if (value !== undefined) {
            return value
        }
        return 1
    }

    public setLevel(field: WorkField, level: number) {
        this._levelMap.set(field, level)
    }

    public incrementLevel(field: WorkField, amount: number = 1) {
        const currentLevel = this.getLevel(field)
        if (currentLevel !== undefined) {
            this.setLevel(field, currentLevel + amount)
        }
    }

}