const Quest = (name,description,priority) => {
    let objectives = []

    const getQuestName = () => name

    //remove .name later

    const getObjectives = () => objectives//.map(objective => objective.name)
    
    const getObjective = (chosenObjective) => objectives.find(objective => objective.name == chosenObjective.name)

    const addObjective = (newObjective) => {
        if(objectives.find(objective => objective.name == newObjective.name)) return
        objectives.push(newObjective)
    }

    const removeObjective = (chosenObjective) => {
        const objectiveToDelete = objectives.find(objective => objective.name == chosenObjective.name)
        objectives.splice(objectives.indexOf(objectiveToDelete),1)
    }

    const completeObjective = (chosenObjective) => {
        const objectiveToComplete = objectives.find(objective => objective.name == chosenObjective.name)
        return objectiveToComplete.status = 'Complete'
    }

    return {
        getQuestName,
        getObjectives,
        getObjective,
        addObjective,
        removeObjective,
        completeObjective
    }
}

export default Quest