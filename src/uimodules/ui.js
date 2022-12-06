import '../style.css'

const UI = (() => {
    //Quest Terminal

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
    addQuestBtn.addEventListener('click', () => {
        if(questForm.style.display === 'none') {
            questForm.style.display = 'block'
        } else {
            questForm.style.display = 'none'
        }
    })
    questBox.appendChild(addQuestBtn)

    const questForm = document.createElement('form')
    
    const field = document.createElement('fieldset')
    questForm.appendChild(field)

    const fieldLegend = document.createElement('legend')
    fieldLegend.textContent = 'New Quest'
    field.appendChild(fieldLegend)

    const questNameLabel = document.createElement('label')
    questNameLabel.textContent = 'Quest Name: '
    questNameLabel.setAttribute('for', 'name')
    field.appendChild(questNameLabel)

    const questName = document.createElement('input')
    questName.name = 'name'
    field.appendChild(questName)

    const questDescriptionLabel = document.createElement('label')
    questDescriptionLabel.textContent = 'Quest Description: '
    questDescriptionLabel.setAttribute('for', 'description')
    field.appendChild(questDescriptionLabel)

    const questDescription = document.createElement('textarea')
    questDescription.name = 'description'
    field.appendChild(questDescription)

    //Select

    const questUrgencyLabel = document.createElement('label')
    questUrgencyLabel.textContent = 'Urgency: '
    questUrgencyLabel.setAttribute('for', 'urgency')
    field.appendChild(questUrgencyLabel)

    const questUrgencySelect = document.createElement('select')
    questUrgencySelect.name = 'urgency'
    field.appendChild(questUrgencySelect)
    
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
    formSubmitBtn.id = 'submit'
    formSubmitBtn.textContent = 'Submit Quest'
    field.appendChild(formSubmitBtn)

    //Objective Box

    const objectiveBox = document.createElement('div')
    objectiveBox.classList.add('objective-box')
    questTerminalBox.appendChild(objectiveBox)

    const objectiveBoxHeader = document.createElement('p')
    objectiveBoxHeader.textContent = "Objectives"
    objectiveBox.appendChild(objectiveBoxHeader)

    objectiveBox.appendChild(questForm)

    return questTerminalWrapper
})()

export default UI