const uiQuest = (newQuest) => {
    const quest = document.createElement('button')
    quest.textContent = newQuest.name

    const objectivesWrapper = document.querySelector('.objectives-wrapper')

    quest.addEventListener('click', (e) => {
        console.log(e)
        objectivesWrapper.style.display = 'grid'
    })
    
    return quest
}

export default uiQuest