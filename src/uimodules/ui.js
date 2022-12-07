import '../style.css'
import queststerminal from '../todomodules/queststerminal'
import quest from '../todomodules/quest'
import uiQuestButtonPage from './uiquestPage'

const UI = (() => {
    const questLine = queststerminal()
    const startingQuest = quest('Starting Quest', 'Default quest', 'Today')
    const testQuest = quest('Test quest', 'testing', 'Today')
    questLine.addQuest(startingQuest)
    questLine.addQuest(testQuest)

    //Quest Terminal
    const questTerminalWrapper = document.createElement('div')
    questTerminalWrapper.classList.add('questline-wrapper')
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

    const questButtonsWrapper = document.createElement('div')
    questButtonsWrapper.classList.add('quest-buttons-wrapper')
    questBox.appendChild(questButtonsWrapper)

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

    logTerminal.appendChild(questForm())

    addQuestBtn.addEventListener('click', showQuestForm)

    const questFormSubmitBtn = document.getElementById('submit-quest')

    questFormSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let questName = document.querySelector('.quest-name')
        let questDescription = document.querySelector('.quest-description')
        let questUrgencySelect = document.querySelector('.quest-urgency')
        const newQuest = quest(questName.value, questDescription.value, questUrgencySelect.value)
        if(questName.value == '') {
            alert('Please do not leave quest name empty!')
            return
        }
        if(questLine.containsQuest(newQuest)) return
        questLine.addQuest(newQuest)
        questButtonsWrapper.textContent = ''
        for(let i = 0; i < questLine.getQuests().length; i++) {
            questButtonsWrapper.appendChild(uiQuestButtonPage(questLine.getQuests()[i]))
        }
        questName.value = ''
        questDescription.value = ''
    })

    questButtonsWrapper.appendChild(uiQuestButtonPage(questLine.getQuest(startingQuest)))

    questButtonsWrapper.appendChild(uiQuestButtonPage(questLine.getQuest(testQuest)))

    
    return questTerminalWrapper
})()

function questForm() {
    const questForm = document.createElement('form')
    questForm.classList.add('quest-form')
    questForm.style.display = 'none'
    
    const questField = document.createElement('fieldset')
    questForm.appendChild(questField)

    const fieldLegend = document.createElement('legend')
    fieldLegend.textContent = 'New Quest'
    questField.appendChild(fieldLegend)

    const questNameLabel = document.createElement('label')
    questNameLabel.textContent = 'Quest Name: '
    questNameLabel.setAttribute('for', 'name')
    questField.appendChild(questNameLabel)

    const questName = document.createElement('input')
    questName.classList.add('quest-name')
    questName.name = 'name'
    questField.appendChild(questName)

    const questDescriptionLabel = document.createElement('label')
    questDescriptionLabel.textContent = 'Quest Description: '
    questDescriptionLabel.setAttribute('for', 'description')
    questField.appendChild(questDescriptionLabel)

    const questDescription = document.createElement('textarea')
    questDescription.classList.add('quest-description')
    questDescription.name = 'description'
    questField.appendChild(questDescription)

    const questUrgencyLabel = document.createElement('label')
    questUrgencyLabel.textContent = 'Urgency: '
    questUrgencyLabel.setAttribute('for', 'urgency')
    questField.appendChild(questUrgencyLabel)

    const questUrgencySelect = document.createElement('select')
    questUrgencySelect.classList.add('quest-urgency')
    questUrgencySelect.name = 'urgency'
    questField.appendChild(questUrgencySelect)
    
    const defconOneOption = document.createElement('option')
    defconOneOption.textContent = 'DEFCON 1'
    defconOneOption.value = 'defconone'
    questUrgencySelect.appendChild(defconOneOption)

    const defconTwoOption = document.createElement('option')
    defconTwoOption.textContent = 'DEFCON 2'
    defconTwoOption.value = 'defcontwo'
    questUrgencySelect.appendChild(defconTwoOption)

    const defconThreeOption = document.createElement('option')
    defconThreeOption.textContent = 'DEFCON 3'
    defconThreeOption.value = 'defconthree'
    questUrgencySelect.appendChild(defconThreeOption)

    const defconFourOption = document.createElement('option')
    defconFourOption.textContent = 'DEFCON 4'
    defconFourOption.value = 'defconfour'
    questUrgencySelect.appendChild(defconFourOption)

    const dedfconFiveOption = document.createElement('option')
    dedfconFiveOption.textContent = 'DEFCON 5'
    dedfconFiveOption.value = 'defconfive'
    questUrgencySelect.appendChild(dedfconFiveOption)

    const questFormSubmitBtn = document.createElement('button')
    questFormSubmitBtn.id = 'submit-quest'
    questFormSubmitBtn.textContent = 'Submit Quest'
    questField.appendChild(questFormSubmitBtn)

    return questForm
}

function showQuestForm() {
    const questForm = document.querySelector('.quest-form')
    if(questForm.style.display == 'none') {
        questForm.style.display = 'block'
    } else {
        questForm.style.display = 'none'
    }
}

export default UI