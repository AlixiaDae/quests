import { Mission } from "./missions";
import { Objective } from "./objectives";

export class QuestJournal {
    constructor(name) {
        this.journal = []
        this.journal.push(new Mission('Current Mission'))
    }

    addMission(newMission) {
        if(this.journal.find(mission => mission.name === newMission)) return
        this.journal.push(new Mission(newMission))
    }

    getJournal() {
        return this.journal
    }

    getMission(missionName) {
        return this.getJournal().find(mission => mission.name === missionName)
    }

}