let nivel = Number(process.argv[2]);

if(nivel >= 31) {
    console.log("você é Veterano");
}else if(nivel >= 11 && nivel <=30) {
    console.log("você é Intermediário");
}else{
    console.log("você é Iniciante");
}