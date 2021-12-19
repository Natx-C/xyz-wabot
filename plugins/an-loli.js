let fetch = require("node-fetch")
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/random/loli.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
sock.sendTemplate2UrlButtonImg(m.chat, `Nihhh Ketemuu`, wm1, await (await fetch(cita)).buffer(), `Loli`, `#loli`, m)
}
handler.tags = ['anime']
handler.help = ['loli']
handler.command = /^(loli)$/i
handler.limit = true

module.exports = handler