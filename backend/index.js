// *    M O D U L O K
const express = require('express')
const mysql = require('mysql2')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyparser.json())

// *    K A P C S O L O D A S    A Z    A D A T B A Z I S H O Z
const adatb = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'viragbolt'
})

adatb.connect(err => {
    if (err) {
        console.error('Nem sikerült csatlakozni az adatbázishoz:', err)
        return
    }
    console.log('Sikeres kapcsolat az adatbázissal.')
})

// *    M E T H O D U S O K
//  GET - minden adat lekérése
app.get('/api/categories', (req, res) => {
    const query = 'SELECT * FROM kategoriak'
    adatb.query(query, (err, results) => {
        if (err) throw err
        res.json(results)
    })
})

app.get('/api/flowers', (req, res) => {
    const lekerdezes = `SELECT a.id, a.nev, k.id AS kategoriaId, k.nev AS kategoriaNev, 
                        a.leiras, a.keszlet, a.ar, a.kepUrl
                        FROM aruk a
                        INNER JOIN kategoriak k ON a.kategoriaId = k.id;`;
    adatb.query(lekerdezes, (err, results) => {
        if (err) throw err

        const atalakitott = results.map(adat => ({
            id: adat.id,
            nev: adat.nev,
            kategoria: {
                id: adat.kategoriaId,
                nev: adat.kategoriaNev
            },
            leiras: adat.leiras,
            keszlet: adat.keszlet,
            ar: adat.ar,
            kepUrl: adat.kepUrl
        }));
        res.json(atalakitott)
    })
})

//  GET - egy adat lekérése id alapján
app.get('/api/flowers/:id', (req, res) => {
    const { id } = req.params;
    const lekerdezes =`SELECT a.id, a.nev, k.id AS kategoriaId, k.nev AS kategoriaNev, 
                        a.leiras, a.keszlet, a.ar, a.kepUrl
                        FROM aruk a
                        INNER JOIN kategoriak k ON a.kategoriaId = k.id
                        WHERE a.id = ?`;
    adatb.query(lekerdezes, [id], (err, results) => {
        if (err) {
            return res.status(404).json({ error : "A virág nem található!" })
        }
        const atalakitott = results.map(adat => ({
            id: adat.id,
            nev: adat.nev,
            kategoria: {
                id: adat.kategoriaId,
                nev: adat.kategoriaNev
            },
            leiras: adat.leiras,
            keszlet: adat.keszlet,
            ar: adat.ar,
            kepUrl: adat.kepUrl
        }));
        res.json(atalakitott)
    })
})

//  POST - új adat feltöltése
app.post('/api/flowers', (req, res) => {
    const { nev, kategoriaId, leiras, keszlet, ar, kepUrl } = req.body
    const lekerdezes = 'INSERT INTO aruk (nev, kategoriaId, leiras, keszlet, ar, kepUrl) VALUES (?, ?, ?, ?, ?, ?)'
    adatb.query(lekerdezes, [nev, kategoriaId, leiras, keszlet, ar, kepUrl], (err, results) => {
            if (err) {
                return res.status(400).json({ error : 'Hiányos adatok!' })
            }
            res.status(201).send('CREATED')
        }
    )
})

//  PUT - adat módosítás id alapján
app.put('/api/flowers/:id', (req, res) => {
    const { id } = req.params
    const { keszlet } = req.body
    const lekerdezes = 'UPDATE aruk SET keszlet = ? WHERE id = ?'
    adatb.query(lekerdezes, [keszlet, id], (err, results) => {
        if (err) {
            return res.status(404).json({ error : "A virág nem található!" })
        }
        res.json('Sikeres módosítás')
    })
})

//  DELETE - adat törlés id alapján
app.delete('/api/flowers/:id', (req, res) => {
    const { id } = req.params
    const lekerdezes = 'DELETE FROM aruk WHERE id = ?'
    adatb.query(lekerdezes, [id], (err, results) => {
        if (err) {
            return res.status(404).json({ error : "A virág nem található!" })
        }
        res.json('Sikeres törlés')
    })
})

// *    S Z E R V E R
const port = 3000
app.listen(port, () => {
    console.log(`A szerver fut: http://localhost:${port}`)
})