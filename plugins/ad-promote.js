let handler = async (m, { conn, participants }) => {
  if(m.quoted){
    if(m.quoted.sender ===  m.quoted.sender === conn.user.jid) return;
    let usr = m.quoted.sender;
    conn.groupMakeAdmin(m.chat, [usr]); return;
    }
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
}
handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')
handler.tags = ['admin']

handler.command = /^(promote|admin|\^|↑)$/i

handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler