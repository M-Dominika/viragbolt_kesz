// *    M O D U L O K 
const mysql = require("mysql2");
const fs = require("fs");

// *    A D A T B A Z I S
const adatb = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'viragbolt',
});

// *    F A J L   B E O L V A S A S
const fajl = JSON.parse(fs.readFileSync("aruk.json", "utf8"));

// *    A D A T O K   F E L T O L T E S E
const adatfeltoltes = () => {
    const lekerdezes = "INSERT INTO aruk (nev, kategoriaId, leiras, keszlet, ar, kepUrl) VALUES (?, ?, ?, ?, ?, ?)";
    fajl.forEach((adat) => {
        adatb.query(lekerdezes, [adat.nev, adat.kategoriaId, adat.leiras, adat.keszlet, adat.ar, adat.kepUrl], (err) => {
            if (err) {
                console.error("Hiba történt az adat beszúrása közben:", err);
            } else {
                console.log(`Sikeresen beszúrtuk: ${adat.nev}`);
            }
        });
    });
    adatb.end();
};

// *    K A P C S O L O D A S   A Z   A D A T B A Z I S H O Z
adatb.connect((err) => {
    if (err) throw err;
    console.log('Sikeresen csatlakozott az adatbázishoz');
    adatfeltoltes();
});