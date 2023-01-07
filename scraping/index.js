const res = await fetch('https://gamepress.gg/arknights/tools/interactive-operator-list#tags=null##stats')
const text = await res.text()

console.log(text)