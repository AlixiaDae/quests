import '../style.css'
import queststerminal from '../todomodules/queststerminal'
import quest from '../todomodules/quest'
import uiObjective from './uiobjectiveform'
import uiObjectiveForm from './uiobjectiveform'
import uiQuestButton from './uiquestbutton'
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

    const addObjectiveBtn = document.createElement('button')
    addObjectiveBtn.id= 'add-objective-button'
    addObjectiveBtn.textContent = '+ Add objective'
    objectivesWrapper.appendChild(addObjectiveBtn)

    //Log Terminal
    
    const logTerminal = document.createElement('div')
    logTerminal.classList.add('log-terminal')
    questTerminalBox.appendChild(logTerminal)

    logTerminal.appendChild(uiQuestForm())
    logTerminal.appendChild(uiObjectiveForm())

    const questForm = document.querySelector('.quest-form')
    const objectiveForm = document.querySelector('.objective-form')

    questBox.appendChild(uiQuestButton(startingQuest))

    const questButtons = document.querySelectorAll('.quest-navigation')

    //for each objective of a quest, append it to the objective box

    questButtons.forEach(button => 
        button.addEventListener('click', () => {
            objectiveForm.style.display = 'none'
            questForm.style.display = 'none'
        }))

    addQuestBtn.addEventListener('click', () => {
        if(questForm.style.display == 'none') {
            questForm.style.display = 'block'
            objectiveForm.style.display = 'none'
        } else {
            questForm.style.display = 'none'
        }
    })

    addObjectiveBtn.addEventListener('click', (e) => {
        if(objectiveForm.style.display == 'none') {
            objectiveForm.style.display = 'block'
            questForm.style.display = 'none'
        } else {
            objectiveForm.style.display = 'none'
        }
    })   

    return questTerminalWrapper
})()

export default UI