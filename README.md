# test-prudential-jakarta
Test Frontend Developer untuk Prudential Jakarta 

Untuk memulai inisiasi source code yang ada pada github ini sebelumnya installah tools2 berikut ini 
- 1.Visual Studio Code untuk digunakan sebagai text editor
- 2.Nodejs untuk NPM sebagai package manager 

Setelah tools2 diatas sudah terinstal maka bukalah Zip file dari repository ini yang sudah terdownload
- 1.Buka menggunakan visual studio code
- 2.Melalu terminal ketikkan "npm install" untuk melakukannya instalasi dependency dan package lain yang diperlukan
- 3.Ketikkan "npm start" untuk menjalankan project ke browser

Pada Folder project akan terdapat susunan file sebagai berikut: 
- App.js (Yang mana component utama pada react js ini) 
- App.css (file css untuk App.js)
- Dashboard.js ( yang merupakan component untuk dashboard user , komponen ini berisi dari tampilan UI dan logic untuk menampilkan product atau aktivitas user lainnya)
- Dashboard.css ( file css untuk Dashboard.js)
- Index.js (komponen Root dari reactjs)
- Login.js (komponen yang berisikan tampilan UI dari halaman Login , sekaligus logic SEND/REQUEST datanya)
- Register.js (Komponen yang berisikan tampilan UI dari halaman register sekaligus logic SEND/REQUEST datanya)
- modalEdit.js (komponen react yang berisikan logic dari tampilan modal ketika muncul ketika tombol edit pada tampilan dashboard di klik , komponen ini berisikan sekaligus logic dari SEND/REQUEST datanya)

Untuk Dokumentasi REST API dapat menuju ke https://testbinar.docs.apiary.io/# 

Terdapat dokumentasi untuk Endpoint Login, Create User, Show Data, Show Data by ID , Edit Data, Delete Data

Namun pada Dokumentasi terdapat kekurangan antaralain:
- 1. ketika SEND request pada endpoint Login , ketika mengalami error tetap menampilkan status code 200
- 2. ketika berhasil SEND request pada endpoint Show data product dan create data product menampilkan status code 500 walaupun success
