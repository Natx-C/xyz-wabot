let handler = async(m) => {
    let donasi = `${ucapan()}... Have a great day
    ╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
    ┃╭┈─────────────⩵꙰ཱི࿐ 
    ┃╰──*DONATE*──➤ ↶↷* 
    ╰•͙✩̣̣ ${namabot}
    ⁙┃ ુོ DANA     : 0888-2611-841
    ⁙┃ ુོ OVO      : 0888-2611-841
    ⁙┃ 
    ⁙┃ ુོ SAWERIA  : https://saweria.co/irwanxyans
    ⁙┃ 
    ⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°`    
    const buttons = [
        {buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1}
      ]
      
      const buttonMessage = {
      location: { jpegThumbnail: await(await require('node-fetch')(fla + 'Donasi')).buffer()},
          caption: donasi,
          footer: wm,
          buttons: buttons,
          headerType: 6
      }
      
      const sendMsg = await sock.sendMessage(m.chat, buttonMessage, {quoted: m, fromMe: false})
    }
    handler.help = ['donasi']
    handler.tags = ['info']
    handler.command = /^dona(te|si)$/i
    module.exports = handler
    
    function ucapan() {
      const time = require('moment-timezone').tz('Asia/Jakarta').format('HH')
      res = "Selamat dinihari"
      if (time >= 4) {
        res = "Selamat pagi"
      }
      if (time > 10) {
        res = "Selamat siang"
      }
      if (time >= 15) {
        res = "Selamat sore"
      }
      if (time >= 18) {
        res = "Selamat malam"
      }
      return res
    }