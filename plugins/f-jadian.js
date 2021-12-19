let handler = async (m, { conn, participants, command, usedPrefix }) => {
    //let member = participants.map(u => u.jid)
    for (let member of participants) {
        //teks += `⁙┃ ુོ @${mem.id.split('@')[0]}\n`
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `@${orang.id.replace('@')[0]} ❤️ @${jodoh.id.replace('@')[0]}`.trim()
    let mentionedJid = [orang, jodoh]
    await conn.sendButton(m.chat, jawab, wm, null, [[`${command}`, usedPrefix + command]], m, { contextInfo: { mentionedJid } })
}}
handler.help = ['jodohin', 'jodohku']
handler.tags = ['fun']
handler.command = /^jodoh(in|ku)|jadian$/i
handler.group = true
handler.disabled = true

module.exports = handler