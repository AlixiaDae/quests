import '../style.css'
import queststerminal from '../todomodules/queststerminal'
import quest from '../todomodules/quest'
import uiQuest from './uiquest'
import uiObjective from './uiobjective'

const UI = (() => {
    //Quest Terminal

    const questLine = queststerminal()

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
    questName.name = 'name'
    questField.appendChild(questName)

    const questDescriptionLabel = document.createElement('label')
    questDescriptionLabel.textContent = 'Quest Description: '
    questDescriptionLabel.setAttribute('for', 'description')
    questField.appendChild(questDescriptionLabel)

    const questDescription = document.createElement('textarea')
    questDescription.name = 'description'
    questField.appendChild(questDescription)

    const questUrgencyLabel = document.createElement('label')
    questUrgencyLabel.textContent = 'Urgency: '
    questUrgencyLabel.setAttribute('for', 'urgency')
    questField.appendChild(questUrgencyLabel)

    const questUrgencySelect = document.createElement('select')
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

    const formSubmitBtn = document.createElement('button')
    formSubmitBtn.id = 'submit-quest'
    formSubmitBtn.textContent = 'Submit Quest'
    formSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const name = questName.value
        const description = questDescription.value
        const priority = questUrgencySelect.value
        if(name == '' || description == '') {
            alert('Please do not leave name or description blank!')
            return
        }
        const newQuest = quest(name,description,priority)
        if(questLine.containsQuest(newQuest)) {
            return
        } else {
            questBox.appendChild(uiQuest(newQuest))
            questLine.addQuest(newQuest)
        }
    })
    questField.appendChild(formSubmitBtn)
    
    const logTerminal = document.createElement('div')
    logTerminal.classList.add('log-terminal')
    questTerminalBox.appendChild(logTerminal)

    questTerminalBox.appendChild(uiObjective())

    const objectiveForm = document.querySelector('.objective-form')

    addQuestBtn.addEventListener('click', () => {
        if(questForm.style.display == 'none') {
            questForm.style.display = 'block'
            objectiveForm.style.display = 'none'
        } else {
            questForm.style.display = 'none'
        }
    })

    const addObjectiveBtn = document.getElementById('add-objective-button')
    addObjectiveBtn.addEventListener('click', (e) => {
        if(objectiveForm.style.display == 'none') {
            objectiveForm.style.display = 'block'
            questForm.style.display = 'none'
        } else {
            objectiveForm.style.display = 'none'
        }
    })   

    logTerminal.appendChild(questForm)

    return questTerminalWrapper
})()

export default UI