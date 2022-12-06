const uiQuest = (newQuest) => {
    const quest = document.createElement('button')
    quest.textContent = newQuest.name

    quest.addEventListener('click', () => {

    })
    
    return quest
}

export default uiQuest