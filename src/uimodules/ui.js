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
        
    })
    questBox.appendChild(addQuestBtn)
    
    return questTerminalWrapper
})()

export default UI