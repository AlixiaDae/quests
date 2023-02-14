import { QuestJournal } from "./questjournal"
import { Mission } from "./missions"

function domObjectives(quest, objectivesContainer) {
    let missions = document.querySelectorAll(".mission-name")

    missions.forEach(mission => 
        mission.addEventListener("click", (e) => {
            objectivesContainer.innerHTML = ''
            let missionObjectives = quest.getMission(e.target.textContent).getObjectives()
            for(let i = 0; i < missionObjectives.length; i++) {
                const obj = document.createElement("div")
                obj.textContent = missionObjectives[i]
                objectivesContainer.appendChild(obj)
            }
        }))

    

}


export default domObjectives