import '../style.css'
import nasaImage from '../images/nasa.jpg'

const UI = (() => {
    document.body.style.backgroundImage = `url(${nasaImage})`
    const main = document.createElement('div')
    main.id = 'main'
    document.body.appendChild(main)

    const header = document.createElement('h1')
    header.classList.add('header')
    header.textContent = 'You drift in space, your ship in pieces and with little materials left to repair it.'
    main.appendChild(header)

    const adventureBox = document.createElement('div')
    adventureBox.classList.add('adventure-box')
    main.appendChild(adventureBox)

    const adventureBoxHeader = document.createElement('h2')
    adventureBoxHeader.textContent = 'Adventure Line'
    adventureBox.appendChild(adventureBoxHeader)

    const questsWrapper = document.createElement('div')
    questsWrapper.classList.add('quests-wrapper')
    adventureBox.appendChild(questsWrapper)

    const questsBox = document.createElement('div')
    questsBox.textContent = 'Quests'
    questsBox.classList.add('quests-header')
    questsWrapper.appendChild(questsBox)

    const objectivesHeader = document.createElement('div')
    objectivesHeader.classList.add('objectives-header')
    objectivesHeader.textContent = 'Objectives'
    questsWrapper.appendChild(objectivesHeader)

    return main
})()

export default UI