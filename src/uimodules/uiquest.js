const uiQuest = (newQuest) => {
    const objectiveBox = document.querySelector('.objective-box')
    const quest = document.createElement('button')
    quest.textContent = newQuest.name

    const objective = document.createElement('div')
    objective.classList.add('objective')
    objective.style.display = 'grid'

    const addObjectiveBtn = document.createElement('button')
    addObjectiveBtn.textContent = '+ Add Objective'
    objective.appendChild(addObjectiveBtn)

    const logTerminal = document.querySelector('.log-terminal')

    const questForm = document.querySelector('form')

    quest.addEventListener('click', () => {
        if(questForm.style.display == 'none') return
        questForm.style.display = 'none'
        objectiveBox.appendChild(objective)
        logTerminal.textContent = 'You are doing ' + newQuest.name + '.'
    })
    
    return quest
}

export default uiQuest