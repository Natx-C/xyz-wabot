let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/sticker/menu.webp')
conn.sendMessage(m.chat, stc, MessageType.sticker, { mimetype: Mimetype.webp})
}
handler.customPrefix = /^(menu|menuu)$/i
handler.command = new RegExp

module.exports = handler