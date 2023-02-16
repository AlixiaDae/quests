import { Mission } from '../questModules/missions'
import { QuestJournal } from '../questModules/questjournal'
import './style.css'
import domObjectives from './domObjectives'

const mainPage = (() => {
    const header = document.createElement("div")
    document.body.appendChild(header)

    const name = document.createElement("h1")
    name.textContent = "Your Quests"
    header.appendChild(name)

    // Content Box for missions and objectives

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
    
    //Add mission button and form
    const addMissionsBtn = document.createElement("button")
    addMissionsBtn.textContent = "Add Mission"
    addMissionsBtn.id = "add-mission-button"
    missionsBar.appendChild(addMissionsBtn)

    const addMissionForm = document.createElement("form")

    const aMFieldSet = document.createElement("fieldset")
    addMissionForm.appendChild(aMFieldSet)

    const aMLegend = document.createElement("legend") 
    aMLegend.textContent = "New Mission"
    aMFieldSet.appendChild(aMLegend)

    //Quest and placeholders

    let quest = new QuestJournal()
    quest.addMission('Another One')
    let currentMission = quest.getMission("Current Mission")
    currentMission.addObjectives("this")
    currentMission.addObjectives("that")
    let anotherMission = quest.getMission("Another One")
    anotherMission.addObjectives("first")
    anotherMission.addObjectives("second")

    // Objectives Bar

    const objectivesBar = document.createElement("div")
    objectivesBar.classList.add("objectives-bar")
    contentBox.appendChild(objectivesBar)

    const objectivesHeader = document.createElement("h2")
    objectivesHeader.textContent = "Objectives"
    objectivesBar.appendChild(objectivesHeader)

    const objectivesBox = document.createElement("div")
    objectivesBox.classList.add("objectives-box")
    objectivesBar.appendChild(objectivesBox)

    // Functions

    function setMissionsBoxDisplay() {
        if(missionsBox.classList.contains("missions-box")) {
            missionsBox.classList.remove("missions-box")
            missionsBox.classList.add("missions-box-flex")
        } else {
            missionsBox.classList.remove("missions-box-flex")
            missionsBox.classList.add("missions-box")
        }
    }

    function showMissionForm() {
        missionsBox.appendChild(addMissionForm)
    }

    function removeMissionForm() {
        addMissionForm.remove()
    }

    addMissionsBtn.addEventListener("click", () => {
        if(missionsBox.contains(addMissionForm)) {
            setMissionsBoxDisplay()
            removeMissionForm()
            showMissions()
        } else {
            missionsBox.textContent = ''
            setMissionsBoxDisplay()
            showMissionForm()
        }
    })

    function showMissions() {
        missionsBox.textContent = ''
        for(let i = 0; i < quest.getJournal().length; i++) {
            let name = quest.getJournal()[i].name
            createMissionCard(missionsBox, name)
        }
    }

    function createMissionCard(container, name) {
        const missionName = document.createElement("div")
        missionName.classList.add("mission-name")
        missionName.id = name
        missionName.textContent = name
        container.appendChild(missionName)
    }

    showMissions()

    const missionButtons = document.querySelectorAll(".mission-name")
    
    function setMissionColor(button) {
        missionButtons.forEach(button => {
            if(button !== this) {
                button.classList.remove("focus")
            }
        })
        button.classList.add("focus")
    }

    missionButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            setMissionColor(e.target)
        })
    })

    domObjectives(quest, objectivesBox)

})()

export default mainPage