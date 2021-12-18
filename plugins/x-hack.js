//let { getBuffer, succes } = require('../lib/functions.js');
let fs = require('fs')

let handler = async (m, { conn, text }) => {

let data = fs.readFileSync('./lib/hack.js')
let parse = JSON.parse(data)
let random = Math.floor(Math.random() * parse.length);
let json = parse[random]

  conn.sendButton(m.chat, `Sukses Bobol Bank Satria\n\nSaldo & Limit Yang Diambil ${json.money}\nKamu Bisa Cek LIMIT/EXP/MONEY KAMU Di Bawah Ini`, wm, null, [['Cek', '#limit'], ['Hack Lagi', 'xhack']], m)
   global.db.data.users[m.sender].exp += json.exp * 1
   global.db.data.users[m.sender].limit += json.exp * 1
}
handler.help = ['hack']
handler.tags = ['xp']
handler.command = /^hack$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 150

module.exports = handler