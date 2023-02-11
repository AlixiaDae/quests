import { Mission } from "./missions";
import { Objective } from "./objectives";

export class QuestJournal {
    constructor(name) {
        this.journal = []
        this.journal.push(new Mission('Current Mission'))
    }

    getJournal() {
        return this.journal
    }

    getMission(missionName) {
        return this.getJournal().find(mission => mission.name === missionName)
    }
}