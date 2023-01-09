import * as cheerio from 'cheerio'

const MAIN_URL = {
  mainLink: 'https://gamepress.gg/arknights/tools/interactive-operator-list#tags=null##cn##stats'
}
const URLS = []

async function scrape (url) {
  const res = await fetch(url)
  const html = await res.text()
  return cheerio.load(html)
}
async function getScrapingLinks () {
  // Decimos a cheerio que cargue el html
  const $ = await scrape(MAIN_URL.mainLink)
  const $rows = $('#operators-list .operators-row')

  $rows.each((index, el) => {
    const $el = $(el)

    URLS.push(`https://gamepress.gg${$el
    .find('.operator-cell a')
    .attr('href')}`)

    return URLS
  })
}

async function scrapingArknightsInfo (url) {
  // Decimos a cheerio que cargue el html
  for (let i = 0; i < url.length; i++) {
    const $ = await scrape(url[i])
    const $rows = $('body main #content')

    $rows.each((index, el) => {
      const $el = $(el)

      const operatorName = $el.find('h1').text()

      console.log({
        operatorName
      })
    })
  }
}

await getScrapingLinks()
await scrapingArknightsInfo(URLS)

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Una vez cargado podemos pedirle que recupero la info
/* $('#operators-list .operators-row').each((index, el) => {
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
    const numberOfTarget = $(el).find('.target-damage-type .target-cell').text()
    const damageType = $(el).find('.damage-type-cell').text()
    const trait = $(el).find('.traits-section').text()
    const skills = $(el).find('.skills-container').text()
    const talents = [
        $(el).find('.talents-section .skill-title').text(), $(el).find('.talents-section .skill-desc').text()
    ]
    const evaluation = $(el).find('.evaluation-section span').text()
    const abilityTags = $(el).find('.ability-tags-section').text()
    const obtainMethod = $(el).find('.obtain-method-section .obtain-title').text()
    const releases = $(el).find('.obtain-method-section div').text()
    const module = [
        {
            moduleImg: `https://gamepress.gg${$(el).find('.modules-section .module-on-operator-list img').attr('src')}`,

        }
    ] */

/* console.log({
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
    //resAndBlock,
    //redeploy,
    //intervalAtk,
    numberOfTarget,
    damageType,
    trait,
    //skills,
    talents,
    evaluation,
    abilityTags,
    obtainMethod,
    releases,
    module
    }) */
/* }) */

/* const operatorInfo = [{
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
}] */
