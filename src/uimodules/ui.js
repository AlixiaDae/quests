import '../style.css'
import queststerminal from '../todomodules/queststerminal'
import quest from '../todomodules/quest'
import uiQuestForm from './uiquestform'

const UI = (() => {
    //Quest Terminal
    const questLine = queststerminal()
    const startingQuest = quest('Starting Quest', 'First quest in line', 'defconone')

    questLine.addQuest(startingQuest)

    const questTerminalWrapper = document.createElement('div')
    questTerminalWrapper.classList.add('quest-wrapper')
    document.body.appendChild(questTerminalWrapper)

    const questTerminalHeader = document.createElement('h2')
    questTerminalHeader.textContent = 'Quest Terminal'
    questTerminalWrapper.appendChild(questTerminalHeader)

    const questTerminalBox = document.createElement('div')
    questTerminalBox.classList.add('content-box')
    questTerminalWrapper.appendChild(questTerminalBox)

    //Quest Box
    const questBox = document.createElement('div')
    questBox.classList.add('quest-box')
    questTerminalBox.appendChild(questBox)

    const questBoxHeader = document.createElement('p')
    questBoxHeader.textContent = 'Quests'
    questBox.appendChild(questBoxHeader)

    const addQuestBtn = document.createElement('button')
    addQuestBtn.textContent = '+ Add Quest'
    questBox.appendChild(addQuestBtn)

    //Objective Box

    const objectiveBox = document.createElement('div')
    objectiveBox.classList.add('objective-box')
    questTerminalBox.appendChild(objectiveBox)
 
    const objectiveBoxHeader = document.createElement('p')
    objectiveBoxHeader.textContent = "Objectives"
    objectiveBox.appendChild(objectiveBoxHeader)

    const objectivesWrapper = document.createElement('div')
    objectivesWrapper.classList.add('objectives-wrapper')
    objectiveBox.appendChild(objectivesWrapper)

    //Log Terminal
    
    const logTerminal = document.createElement('div')
    logTerminal.classList.add('log-terminal')
    questTerminalBox.appendChild(logTerminal)

    logTerminal.appendChild(uiQuestForm())

    //for each objective of a quest, append it to the objective box

    const questForm = document.querySelector('.quest-form')
    const questFormSubmitBtn = document.getElementById('submit-quest')

    questFormSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
    })

    addQuestBtn.addEventListener('click', () => {
        if(questForm.style.display == 'none') {
            questForm.style.display = 'block'
        } else {
            questForm.style.display = 'none'
        }
    })

    return questTerminalWrapper
})()

export default UI