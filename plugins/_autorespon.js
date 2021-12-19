let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    let reg = /^(menu)$/i
    let isMenu = reg.exec(m.text)
    if (isMenu && !m.fromMe) {
        conn.sendFile(m.chat, './src/sticker/menu.webp', MessageType.sticker)
    }
    let reg1 = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg1.exec(m.text)
    if (isSalam && !m.fromMe) {
        sock.sendTemplateLoc(m.chat, `وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam Warohmatullahi Wabarakatuh_`, wm1, await(await require('node-fetch')(fla + 'Salam')).buffer(), m)
    }
    let reg2 = /(irwan|irwann|irwannnn|irwannn)/i
    let isIrwan = reg2.exec(m.text)
    if (isIrwan && !m.fromMe) {
        sock.reply(m.chat, `Wwaaann ada yang manggil tuh woii!!!!`, m)
    }
}
 module.exports = handler
 