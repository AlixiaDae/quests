const uiObjective = (newObjective,quest) => {
    const objective = document.createElement('p')
    objective.textContent = newObjective.name

    const objectiveDelete = document.createElement('button')
    objectiveDelete.textContent = 'x'
    objective.appendChild(objectiveDelete)

    objectiveDelete.addEventListener('click', () => {
        objective.remove()
        quest.removeObjective(newObjective)
    })

    return objective
}

export default uiObjective