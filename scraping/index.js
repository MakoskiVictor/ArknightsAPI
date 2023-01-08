import * as cheerio from 'cheerio'

const res = await fetch('https://gamepress.gg/arknights/tools/interactive-operator-list#tags=null##cn##stats')
const html = await res.text()

//Decimos a cheerio que cargue el html
const $ = cheerio.load(html)

//Una vez cargado podemos pedirle que recupero la info
$('#operators-list .operators-row').each((index, el) => {
    const icon = `https://gamepress.gg${$(el).find('.operator-icon img').attr('src')}`
    const name = $(el).find('.operator-title-actual').text()
    const archetypeClass = $(el).find('.prof-title').text()
    const archetypeClassIcon = `https://gamepress.gg${$(el).find('.info-div img').attr('src')}`
    const archetypeSubClass = $(el).find('.prof-title').text()
    const archetypeSubClassIcon = `https://gamepress.gg${$(el).find('.subprofession-icon-container-db img').attr('src')}`
    const baseStats = {hp_atk_def_cost: $(el).find('.baseStat td').text()}
    const potentialStats = {hp_atk_def_cost: $(el).find('.potentialStat td').text()}
    const trustStats = {hp_atk_def_cost: $(el).find('.trustStat td').text()}
    const fullStats = {hp_atk_def_costBase_costFullPotential: $(el).find('.fullStat td').text()}
    const resAndBlock = $(el).find('.stats-table-cell .stats-table').text()
    const redeploy = $(el).find('.stats-table-cell .stats-table .base-potential-cell').text()
    const intervalAtk = $(el).find('.stats-table-cell .stats-table').text()



    console.log({
        name,
        icon,
        archetypeClass,
        archetypeClassIcon,
        archetypeSubClass,
        archetypeSubClassIcon,
        baseStats,
        potentialStats,
        trustStats,
        fullStats,
        resAndBlock,
        redeploy,
        intervalAtk
        })
})

const operatorInfo = [{
    name: String,
    icon: String,
    archetypeClass: String,
    archetypeClassIcon: String,
    archetypeSubClass: String,
    archetypeSubClassIcon: String,
    baseStats: Number,
    potentialStats: Number,
    trustStats: Number,
    fullStats: Number
}]