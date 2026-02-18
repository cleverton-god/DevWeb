const os = require('os');

function mostrarInfoSistema() {
    console.log("🖥 Sistema Operacional:", os.type());
    console.log("💾 Memória Total:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
    console.log("📉 Memória Livre:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");
    console.log("⚙ Arquitetura do Processador:", os.arch());
}

module.exports = { mostrarInfoSistema };
