import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = [
   ['51921826291', 'SoyMaycol', true],
    ['180650938249287', 'SoyMaycol', true]
]

global.botname = '𝐍𝐚𝐠𝐚𝐭𝐨𝐫𝐨'        // estilo negrita elegante
global.namebot = '𝗡𝗮𝗴𝗮𝘁𝗼𝗿𝗼 𝐁𝐨𝐭'     // estilo bold moderno
global.bot = 'NagatoroMD'      // estilo ancho tipo monoespaciado
global.packname = 'ᴺᵃᵍᵃᵗᵒʳᵒᴹᴰ'  // estilo cuadriculado divertido
global.wm = '☆ Nagatoro MD ☆'           // estilo simple con decoraciones
global.author = '˚₊· ͟͟͞͞➳❥ 𝚂𝚘𝚢𝙼𝚊𝚢𝚌𝚘𝚕'
global.dev =  '˚₊· ͟͟͞͞➳❥ 𝚂𝚘𝚢𝙼𝚊𝚢𝚌𝚘𝚕'

global.banner = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNeozi6CC76xk5uEgR_l0tRlDKqcb7aAhYoIpbS11fvgYKkERNX12rABu&s=10'
global.icon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPqu7EWG2q-3WKcSuMyPX2FtpY91HuKfGSEbSGVTGsQAQiCfG5KyNh74&s=10'
global.currency = '★ 𝐘𝐞𝐧𝐞𝐬 ★'
global.sessions = 'sessions/principal'
global.jadi = 'sessions/subs'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Diamond'
}

global.my = {
  ch1: '120363372883715167@newsletter',
  name4: '𝐒𝐨𝐲𝐌𝐚𝐲𝐜𝐨𝐥 <𝟑 • Actualizaciones'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
