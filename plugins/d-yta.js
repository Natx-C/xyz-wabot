let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys-md')
let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return m.reply('Uhm... urlnya mana?')
    let chat = global.db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    conn.reply(m.chat, wait, m)
    if (!isLimit) //conn.sendMessage(m.chat,{ audio: { url: dl_link }}, {quoted: m})
    conn.sendFile(m.chat, dl_link, `mp3-downloader.mp3`, 0, m, 0, { title: `${title}.mp3`, ptt = false, mtype: 'documentMessage', thumbnail: Buffer.alloc(0), mimetype: 'audio/mpeg' })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler