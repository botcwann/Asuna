/**
 * Base By Dika Ardnt.
 * Recode By Romli Suhanda
 * Sc Ya Gua Enc
 * Harga Sc No Enc 20k
 * Kalau Mau Recode, Edit Aja Di confiq.js
 * Contact Me On wa.me/6281322667077
 * Follow https://github.com/romlisuhanda
 */

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
    //gausah di apa² in!
    zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
    //gausah di apa² in, udah free apikey :)
    'https://zenzapis.xyz': 'GuaAbuzz17',
}

//—————「 Set Nama Bot & Own & Agama 」—————//
//kok pake agama bang? fitur toleransi bang
global.namabot = 'ZxyuuBotz'
global.namaowner = 'Romli Suhanda'
global.agama = 'Islam'

//—————「 Setting Owner 」—————//
global.owner = ['6281322667077', '6281215710461']
global.premium = ['6281215710461']

//—————「 Setting Nomor Donasi 」—————//
//ubah aja kalau ada yg gapunya kasih tanda -
global.telkomsel = ['6281224804625']
global.telkomsel = ['6281215710461']
global.indosat = ['-']
global.tri = ['-']
global.smartfren = ['-']
global.gopay = ['-']
global.dana = ['-']
global.ovo = ['-']
global.saweria = ['-']

//—————「 Set Kebutuhan Button 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :)
global.github = 'https://github.com/romlisuhanda'
global.scbot = 'https://github.com/romlisuhanda/Asuna'
global.myweb = '-'

//—————「 Set Wm 」—————//
global.packname = 'ZxyuuRomz'
global.author = 'Xzyuu Naii'

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']

//—————「 Set Simbol 」—————//
//terserah mau ubah atau nggak
global.sp = '☆'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak
global.mess = {
    success: 'Done Ngab..!',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: 'Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: 'Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
global.rpg = {
    darahawal: 100,
    besiawal: 15,
    goldawal: 10,
    emeraldawal: 5,
    umpanawal: 5,
    potionawal: 1
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./storage/menu/IMG-20220530-WA0018.jpg')
global.visoka = {
    url: 'https://telegra.ph/file/de381b0caeb315a99c68a.mp4'
}

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
