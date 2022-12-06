const uiQuestForm = () => {
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

    const questFormSubmitBtn = document.createElement('button')
    questFormSubmitBtn.id = 'submit-quest'
    questFormSubmitBtn.textContent = 'Submit Quest'
    questField.appendChild(questFormSubmitBtn)

    return questForm
}

export default uiQuestForm