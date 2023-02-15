import { Objective } from "./objectives"

export class Mission {
    constructor(name) {
        this.name = name
        this.missionsLog = []
    }

    getObjectives() {
        return this.missionsLog
    }

    addObjectives(newObj) {
        if(this.getObjectives().find(obj => obj.name === newObj)) return
        this.missionsLog.push(newObj)
    }
    
    removeObjective(objName) {
        this.missionsLog = this.missionsLog.filter(obj => obj.name !== objName)
    }

}