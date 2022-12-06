const uiObjective = (quest) => {
    const objective = document.createElement('div')
    objective.classList.add('objectives')

    const addObjectiveBtn = document.createElement('button')
    addObjectiveBtn.textContent = '+ Add Objective'
    objective.appendChild(addObjectiveBtn)

    return objective
}

export default uiObjective