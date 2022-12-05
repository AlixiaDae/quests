import adventureline from "./todomodules/adventureline";
import objective from "./todomodules/objective";
import quest from "./todomodules/quest";

// const questLine = QuestLine()
// const newObjective = objective('First objective', 'First objective of first quest', 'Incomplete')

// const firstQuest = Quest('First Quest', 'starting quest', 'today')

// questLine.addQuest(firstQuest)
// firstQuest.addObjective(newObjective)

// console.log(questLine.getQuests().map(quest => quest.getQuestName()))
// console.log(firstQuest.getObjectives().map(objective => objective.name))

// document.body.appendChild(uiobjective(questLine.getQuest(firstQuest).getObjective(newObjective)))


const adventure = adventureline()

const firstQuest = quest('Starting Quest', 'First Quest in line', 'today')
const firstObjective = objective('Starting Objective', 'First Objective in Starting Quest', 'Incomplete')
const secondObjective = objective('Second Objective', 'Second Objective in Starting Quest', 'Incomplete')
const thirdObjective = objective('Third Objective', 'Third objective of starting quest', 'Incomplete')

firstQuest.addObjective(firstObjective)
firstQuest.addObjective(secondObjective)
firstQuest.addObjective(thirdObjective)
firstQuest.removeObjective(secondObjective)

const secondQuest = quest('Second Quest', 'Second Quest in line', 'today')
const firstObj = objective('First Objective', 'First Objective in Second Quest', 'Incomplete')

secondQuest.addObjective(firstObj)

const thirdQuest = quest('Third Quest', 'Third quest in line', 'today')

adventure.addQuest(firstQuest)
adventure.addQuest(secondQuest)
adventure.addQuest(thirdQuest)
adventure.removeQuest(secondQuest)


console.log(adventure.getQuests())

