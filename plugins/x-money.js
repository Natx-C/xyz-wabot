let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    sock.reply(m.chat, `*${user.limit}* Limit\n*${user.exp}* XP\nLevel *${user.level}*\nRole *${user.role}*\nMoney *${user.money}*`, m)
}
handler.help = ['my', 'my @user']
handler.tags = ['xp']
handler.command = /^(my)$/i

module.exports = handler