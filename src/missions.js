import { Objectives } from "./objectives"

export class Missions {
    constructor() {
        this.missions = []
    }

    getMissions() {
        return this.missions
    }

    addObjectives(newObj) {
        if(this.missions.find(obj => obj.name === newObj.name)) return
        this.missions.push(newObj)
    }
    
    removeObjective(objName) {
        this.missions = this.missions.filter(obj => obj.name !== objName)
    }

}