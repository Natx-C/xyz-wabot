let handler = async (m, { conn, usedPrefix }) => {
    let pp = './src/avatar_contact.png'
    try {
      pp = await conn.profilePictureUrl(m.sender, 'image')
    } catch (e) {
  
    } finally {
      let name = m.fromMe ? conn.user : conn.contacts[m.sender]
      let str = `
Name: ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} (@${m.sender.replace(/@.+/, '')})
Number: +${m.sender.split`@`[0]}
Link: https://wa.me/${m.sender.split`@`[0]}
  ${readMore}
  \n\n*Mau nge check isi inventorymu? Ketik ${usedPrefix}inv*
  `.trim()
      let mentionedJid = [m.sender]
      conn.send2TemplateButtonLoc(m.chat, str, wm, await(await require('node-fetch')(pp)).buffer(), 'Inventory', '#inv', 'Menu', '#menu', m, { contextInfo: { mentionedJid }})
    }
  }
  handler.help = ['profile']
  handler.tags = ['rpg']
  handler.command = /^(profile|profil|pp|propile|propil)$/i
  module.exports = handler
  
  const more = String.fromCharCode(8206)
  const readMore = more.repeat(4001)