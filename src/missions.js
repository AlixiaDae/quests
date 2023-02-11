import { Objectives } from "./objectives"

export class Mission {
    constructor(name) {
        this.name = name
        this.missionsLog = []
    }

    getObjectives() {
        return this.missionsLog
    }

    addObjectives(newObj) {
        if(this.missionsLog.find(obj => obj.name === newObj.name)) return
        this.missionsLog.push(newObj)
    }
    
    removeObjective(objName) {
        this.missionsLog = this.missionsLog.filter(obj => obj.name !== objName)
    }

}