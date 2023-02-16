import { QuestJournal } from "../questModules/questjournal"
import { Mission } from "../questModules/missions"

function domObjectives(quest, objectivesContainer) {
    let missions = document.querySelectorAll(".mission-name")

    missions.forEach(mission => 
        mission.addEventListener("click", (e) => {
            objectivesContainer.innerHTML = ''
            let missionObjectives = quest.getMission(e.target.textContent).getObjectives()
            for(let i = 0; i < missionObjectives.length; i++) {
                const obj = document.createElement("button")
                obj.textContent = missionObjectives[i]
                obj.classList.add("objective-name")
                objectivesContainer.appendChild(obj)
            }
        }))
}


export default domObjectives