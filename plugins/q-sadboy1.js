let handler = async(m) => {
let sadboy11 = pickRandom(global.sadboy1)
    const tytyd = [
  {buttonId: '/sadboy1', buttonText: {displayText: 'Next!!!!'}, type: 1},
]

const kntl = {
    location: { jpegThumbnail: await(await require('node-fetch')(fla + 'Sad')).buffer()},
    text: sadboy11,
    footer: wm,
    buttons: tytyd,
    headerType: 6
}

const sendMsg = await sock.sendMessage(m.chat, kntl, {quoted: m, fromMe: false})
}
handler.help = ['sadboy1', 'sadgirl1']
handler.tags = ['quotes', 'update']
handler.command = /^(sadboy1|sadgirl1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
global.sadboy1 = [
        "Aku berharap kamu menjadi pelangi yang muncul setelah hujan, tapi nyatanya kamu malah pergi bahkan sebelum hujan datang",
        "Kau tau perbedaan aku dan kamu? Kau yang suka melukai dan aku yang suka memaklumi.",
        "Sebelum kau sedingin hamparan hujan deras. Kau pernah sehangat hembusan nafas.",
        "Pernah berjuang untuk sebuah senyuman, hingga akhirnya tinggal kenangan. Pernah menjadi bayangan, lalu hilang terbawa angan",
        "Menyapamu, aku lupa diri. Diabaikanmu, aku tahu diri. Hati bilang gas pol. Otak bilang rem.- Fiersa Besari",
        "Kau bisa melakukan kesalahan sama berulang kali. Bisa meminta maaf berulang kali. Tapi, seseorang belum tentu bisa memaafkanmu berulang kali. - Fiersa Besari",
        "Kalau membunuh perasaan sendiri kena pidana, sudah sejak lama saya dipenjara. - Fiersa Besari",
        "Di sudut rasa bersalah yang kusesali, aku betul-betul menunggumu kembali.- Wira Nagara",
        "Baru kusesali setelah ia pergi, dan menginginkannya kembali setelah ia menemukan pujaan hati",
        "Kita adalah sisa-sisa kepastian yang tak dipastikan",
        "Aku tahu, hidupmu memang bukan tentang aku saja. Tapi mengertilah, aku cemburu jika kamu terlalu asik dengan yang lain dibanding aku",
        "Cemburu adalah cinta yang sedang khawatir. Benci adalah cinta yang pernah tersakiti. Tapi semua itu dasarnya tetap satu yaitu cinta. - Cak Nun",
        "Terlalu sayang pangkal kehilangan. - Rintik Sedu",
        "Bertahan tapi tak ditahan. Menunggu tapi tak ditunggu.",
        "Ku memberimu yang terbaik, mengapa Ia yang mendapatkan yang terbaik darimu.- Fiersa Besari",
        "Tapi...yang kamu kodein juga lagi kodein orang lain.- Rintik Sedu",
        "Mungkin akhirnya kita tak akan bersama. Setidaknya, pernah saling berbagi cerita. Tentang lelahmu mengikuti dia. Tentang sedihku mendengar sedihmu sepanjang usia. - Boy Candra",
        "Saya tetap sama. Masih sayang kamu. Bedanya, rasa sayang itu hadir dalam bentuk bahagia melihatmu dengan yang lain. Mengertilah, teguhkan hatimu padanya.- Boy Candra",
        "Tak ada hubungan tanpa pertengkaran. Hanya saja, ada yang berhasil meredam dan ada yang membakar hangus",
        "Dulu saling sapa. Sekarang masih saling sapa. Bedanya, dulu kau sendiri. Sekarang di sebelah dia kau berdiri. Hai, katamu senang. Hai juga, jawabku berusaha tenang.  Boy Candra",
        "Kenapa harus membawa nama lain untuk hal-hal tentang kita? - Wira Nagara",
        "Harus sampai berapa dini hari hingga aku tak merasa berjuang sendiri? - Wira Nagara",
        "Kau tak sungguh. Hanya aku yang bertaruh. Kau tak ikut bertarung. Kau menanti saja, melihat aku yang terluka.- Boy Candra",
        "Kita tidak dirasuki apa pun. Hanya pemilik harapan yang tak pernah siap akan hal-hal di luar ekspektasi, bahagia yang akhirnya kembali ditangisi",
        "Jangan sengaja pergi agar dicari. Jangan sengaja lari agar dikejar. Berjuang tak sebercanda itu.- Sudjiwo Tejo",
        "Tukeran hati yuk. Biar kamu bisa ngerasain apa yang aku rasain",
        "Mencintaimu adalah hal yang paling mudah untuk aku lakukan, tetapi untuk mendapatkan cintamu itu lah hal yang paling sulit untuk aku lakukan",
        "Berhentilah memakerkan seseorang yang ternyata adalah jodoh orang lain. Kau hanya sekadar tukang temani makan, temani jalan, dan nutupi kekurangan uang jajan - Boy Candra",
        "Aku pernah mencintaimu hingga hancur lebur hingga jadi humus dan tumbuh dalam bentuk lain. Itulah kenapa sekarang kamu asing bagiku. Aku tidak mengenali lagi aroma yang kau bawa. Kita tak bisa lagi merawat batang pohon yang sama.- Boy Candra",
        "Aku adalah seseorang yang mencintaimu secara utuh meski dicintai secara separuh",
        "Jika perempuan dan laki-laki bersahabat, ujian terberatnya adalah perasaan - Rintik Sedu",
        "Dulu 'jangan pilih-pilih teman' sekarang, 'jangan bawa perasaan ke dalam pertemanan- Rintik Sedu",
        "Kalau cuma ingin mengusir sepi, mari bertukar cerita saja. Jangan sampai mengajak bertukar hati.",
        "Karena terlalu nyaman, aku lupa bahwa kita hanya sebatas teman.",
        "Ada rindu yang tak sempat tersalurkan. Ada kebersamaan yang hilang tanpa sempat ada hubungan",
        "Hindari pertemanan rasa pacaran. Sebab seerat apapun perasaannya, ujung-ujungnya tetap cuma teman.",
        "Dia dekat denganmu, tapi belum tentu mendekatimu. Dia bahagia bersamamu, tapi belum tentu jatuh cintanya denganmu. Bawa perasaan boleh, asal tahu waktu dan tempatnya",
        "Sering ngobrol, sering curhat, lalu nyaman itu bukan berarti sayang. Hati-hati dengan jebakan friend-zone",
        "Bila kau butuh telinga tuk mendengar. Bahu tuk bersandar. Raga tuk berlindung. Akulah orang yang selalu ada untukmu, walau hanya sebatas teman",
        "Beberapa orang diciptakan menjadi terlalu dekat untuk dipandangi namun terlalu jauh untuk digapai.",
        "Akan ada saatnya di mana percayamu dikecewakan. Lalu hatimu dengan sengaja dipatahkan. Dan saat itu kamu akan tahu apa maksud dari keikhlasan"
]