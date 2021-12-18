let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    let reg = /^(menu)$/i
    let isMenu = reg.exec(m.text)
    if (isMenu && !m.fromMe) {
        conn.sendFile(m.chat, './src/sticker/menu.webp', MessageType.sticker)
    }

    let reg2 = /(irwan|irwann|irwannnn|irwannn)/i
    let isIrwan = reg2.exec(m.text)
    if (isIrwan && !m.fromMe) {
        m.reply(`Wwaaann ada yang manggil tuh woii!!!!`)
    }
}
 module.exports = handler
 