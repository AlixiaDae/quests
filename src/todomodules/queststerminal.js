const queststerminal = () => {
    let quests = []

    const getQuests = () => quests

    const getQuest = (newQuest) => quests.find(quest => quest.name == newQuest.name)

    const containsQuest = (newQuest) => quests.some(quest => quest.name === newQuest.name)

    const addQuest = (newQuest) => {
        if(quests.find(quest => quest.name === newQuest.name)) return
        quests.push(newQuest)
    }

    const removeQuest = (newQuest) => {
        const questToDelete = quests.find(quest => quest.name == newQuest.name)
        quests.splice(quests.indexOf(questToDelete),1)
    }

    return {
        getQuests,
        getQuest,
        containsQuest,
        addQuest,
        removeQuest
    }
}

export default queststerminal