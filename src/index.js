import adventureline from "./todomodules/adventureline";
import objective from "./todomodules/objective";
import quest from "./todomodules/quest";
import UI from "./uimodules/ui";

const adventure = adventureline()

const firstQuest = quest('Starting Quest', 'First Quest in line', 'today')
const firstObjective = objective('Starting Objective', 'First Objective in Starting Quest', 'Incomplete')
const secondObjective = objective('Second Objective', 'Second Objective in Starting Quest', 'Incomplete')
const thirdObjective = objective('Third Objective', 'Third objective of starting quest', 'Incomplete')

firstQuest.addObjective(firstObjective)
firstQuest.addObjective(secondObjective)
firstQuest.addObjective(thirdObjective)
firstQuest.removeObjective(firstObjective)


const secondQuest = quest('Second Quest', 'Second Quest in line', 'today')
const firstObj = objective('First Objective', 'First Objective in Second Quest', 'Incomplete')

secondQuest.addObjective(firstObj)

const thirdQuest = quest('Third Quest', 'Third quest in line', 'today')
const first = objective('First objective', 'First objective in third quest','Incomplete')

adventure.addQuest(firstQuest)
adventure.addQuest(secondQuest)
adventure.addQuest(thirdQuest)


console.log(adventure.getQuests().map(quest => quest.getObjectives()))

UI