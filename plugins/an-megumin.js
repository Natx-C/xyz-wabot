let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendTemplate2UrlButtonImg(m.chat, 'Istri gweh', wm, await(await fetch(json.url)).buffer(), 'Megumin', '#megumin', m, { fileCount: 898, fileLength: 10928, thumbnail: Buffer.alloc(0) })
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i

handler.limit = true

module.exports = handler