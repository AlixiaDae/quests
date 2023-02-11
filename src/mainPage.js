import { Mission } from './missions'
import { QuestJournal } from './questjournal'
import './style.css'

const mainPage = (() => {
    const header = document.createElement("div")
    document.body.appendChild(header)

    const name = document.createElement("h1")
    name.textContent = "Your Quests"
    header.appendChild(name)

    // Content Box

    const contentBox = document.createElement("div")
    contentBox.classList.add("content-box")
    document.body.appendChild(contentBox)

    // Missions Bar

    const missionsBar = document.createElement("div")
    missionsBar.classList.add("missions-bar")
    contentBox.appendChild(missionsBar)

    const missionsHeader = document.createElement("h2")
    missionsHeader.textContent = "Missions"
    missionsBar.appendChild(missionsHeader)

    const missionsBox = document.createElement("div")
    missionsBox.classList.add("missions-box")
    missionsBar.appendChild(missionsBox)

    let quest = new QuestJournal()
    
    function showMissions() {
        for(let i = 0; i < quest.getJournal().length; i++) {
            let name = quest.getJournal()[i].name
            createMissionCard(missionsBox, name)
        }
    }

    function createMissionCard(container, name) {
        const missionName = document.createElement("div")
        missionName.textContent = name
        container.appendChild(missionName)
    }

    showMissions()


    // Objectives Bar

    const objectivesBar = document.createElement("div")
    objectivesBar.classList.add("objectives-bar")
    contentBox.appendChild(objectivesBar)

    const objectivesHeader = document.createElement("h2")
    objectivesHeader.textContent = "Objectives"
    objectivesBar.appendChild(objectivesHeader)

})()

export default mainPage