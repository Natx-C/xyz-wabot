const {
    //default: makeWASocket,
    //useSingleFileAuthState,
    WAMessage,
    proto,
    generateWAMessageFromContent
  } = require('@adiwajshing/baileys-md')
const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} california`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let capt= `*Judul:* ${title}
*Ukuran File Audio:* ${filesizeF}
*Ukuran File Video:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}`

const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
    templateMessage: {
        hydratedTemplate: {
            locationMessage: { jpegThumbnail: await (await fetch(thumb)).buffer()},
            hydratedContentText: capt.trim(),
            hydratedFooterText: wm1,
            hydratedButtons: [{
              index: 0,
               urlButton: {
                    displayText: 'Donasi',
                    url: 'https://saweria.co/irwanxyans'
                }
            }, {
              index: 1,
               urlButton: {
                    displayText: 'Source Code!',
                    url: 'https://github.com/irwanx/xyz-wabot'
                }
            },
            {
               quickReplyButton: {
                    displayText: 'Video',
                    id: `.ytv ${vid.url}`
                },
                selectedIndex: 2
            },
            {
               quickReplyButton: {
                    displayText: 'Audio',
                    id: `.yta ${vid.url}`
                },
                selectedIndex: 3
            },
            {
               quickReplyButton: {
                    displayText: 'Menu',
                    id: '#menu'
                },
                selectedIndex: 4
            }]
        }
    }
}), { userJid: m.participant || m.key.remoteJid, quoted: m });
return await conn.relayMessage(
    m.key.remoteJid,
    template.message,
    { messageId: template.key.id }
)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler

