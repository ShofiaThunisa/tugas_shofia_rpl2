// import exspress
import express  from "express";

// int exspress router
const router = express.Router();

// basic route
router.get('/biodata/:nama/:tempat/:tanggal/:jenis_kelamin/:agama/:alamat/:telepon/:email/:hobi/:cita_cita',(req, res)=>{
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var tanggal_lahir = req.params.tanggal;
    var jenis_kelamin = req.params.jenis_kelamin;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita_cita;

    res.send(

    'nama :' + nama + '<br>' +
    'tempat_lahir :' + tempat_lahir + '<br>' + 
    'tanggal_lahir :' + tanggal_lahir + '<br>' +
    'Jenis_kelamin :' + jenis_kelamin + '<br>' +
    'Agama :' + agama + '<br>' +
    'alamat : ' + alamat +'<br>' +
    'telepon : ' + telepon + '<br>' +
    'email :' + email + '<br>' +
    'hobi :' + hobi + '<br>' +
    'cita_cita :' + cita_cita + '<br>');
});
router.get('/test/:nama/:kelas/:pts/:pas',(req, res)=>{
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);
    var rapot = (pts + pas) / 2;

    
    if (rapot >= 90 && rapot <= 100) {
        var grade = 'Grade A';
    }else if (rapot >= 80) {
        var grade = 'Grade B';
    }else if (rapot >= 70) {
        var grade = 'Grade C';
    }else if (rapot >= 60) {
        var grade = 'Grade D';
    }else if (rapot >= 50) {
        var grade = 'Grade E';
    }else if (rapot >= 0) {
        var grade = 'Sing Getol Diajar!!!'
    } else {
        var grade = 'Nilai tidak valid'
    }
       
    res.send(
        'Nama : ' + nama + '<br>' +
        'Kelas : ' + kelas + '<br>' +
        'Nilai Pts : ' + pts + '<br>' +
        'Nilai Pas : ' + pas + '<br>' +
        'Nilai Rapot : ' + rapot + '<br>' +
        'Keterangan :' + grade
    
        
    );
});
router.get('/aritmatika', (req, res)=> {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;

    var bilangan3 = 15;
    var bilangan4 = 20;
    var kurang = bilangan3 - bilangan4;

    var bilangan5 = 25;
    var bilangan6 = 5;
    var pembagian = bilangan5 / bilangan6;

    var bilangan7 = 5
    var bilangan8 = 10
    var perkalian = bilangan7 * bilangan8;
    res.send(
        '<h3>Penjumlahan</h3>' +
        'bilangan ke 1 : ' + bilangan1 + '<br>' +
        'bilangan ke 2 : ' + bilangan2 + '<br>' +
        'hasil : ' + tambah + '<hr>' +
        
        '<h3>Pengurangan</h3>' +
        'bilangan ke 1 :' + bilangan3 + '<br>' +
        'bilangan ke 2 :' + bilangan4 + '<br>' +
        'hasil :' + kurang + '<hr>' +
        
        '<h3>Pembagian</h3>' +
        'bilangan ke 1 :' + bilangan5 + '<br>' +
        'bilangan ke 2 :' + bilangan6 + '<br>' +
        'hasil :' + pembagian + '<hr>' +
        
        '<h3>Perkalian</h3>' +
        'bilangan ke 1 :' + bilangan7 + '<br>' +
        'bilangan ke 2 :' + bilangan8 + '<br>' +
        'hasil :' + perkalian + '<hr>'
    );
});
router.get('/bangun_datar',(req, res)=>{
   var sisi1 = 35;
   var sisi2 =5;

   var luas_persegi = sisi1 * sisi2;
   var panjang = 17;
   var lebar = 6;

   var persegi_panjang = panjang * lebar
   var alas = 27;
   var tinggi = 17;

   var luas_segitiga = alas * tinggi
   var jari_jari1 = 27
   var lingkaran= 2 * 3.14 * jari_jari1
   var luas_lingkaran = jari_jari1 * lingkaran
    res.send(
    '<h3>Persegi</h3>' +
    'Nilai sisi1 : ' + sisi1 + '<br>' +
    'hasil : ' + luas_persegi + '<hr>,</hr><br>' +

    '<h3>Persegi Panjang</h3>' +
    'Nilai panjang : ' + panjang + '<br>' +
    'Nilai lebar : ' + lebar + '<br>' +
    'hasil : ' + persegi_panjang + '<hr>,</hr>br>' +

    '<h3>Segitiga</h3>' +
    'Nilai alas : ' + alas + '<br>' +
    'Nilai tinggi : ' + tinggi + '<br>' +
    'hasil : ' + luas_segitiga + '<hr>,</hr><br>' +

    '<h3> Lingkaran</h3>' +
    'Nilai Jari - Jari :' + jari_jari1 + '<br>' +
    'Rumus Lingkara n:' + lingkaran + '<br>' +
    'Hasil Lingkaran :' + luas_lingkaran + '<hr>,</hr><br>'
    );
});        
router.get('/bersarang/:nama/:jurusan/:kelas',(req, res)=>{
    
    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;

    if (jurusan =='RPL') {
        if (kelas == '10 RPL ') {
        var ket = 'Anda kelas 10 RPL';
    }else if (kelas == '11 RPL') {
        var ket = 'Anda kelas 11 RPL';
    }else if (kelas == '12 RPL') {
        var ket = 'Anda kelas 12 RPL';
    } else {
        var ket = 'ANDA SUDAH LULUS'; 
    }


    } else if (jurusan =='TKRO') {
         if (kelas == '10 TKRO') {
        var ket = 'Anda kelas 10 TKRO';
    }else if (kelas == '11 TKRO') {
        var ket = 'Anda kelas 11 TKRO';
    }else if (kelas == '12 TKRO') {
        var ket = 'Anda kelas 12 TKRO';
    } else {
        var ket = 'ANDA SUDAH LULUS'; 
    }

    } else if (jurusan =='TBSM') {
        if (kelas == '10 TBSM') {
        var ket = 'Anda kelas 10 TBSM';
    }else if (kelas == '11 TBSM') {
        var ket = 'Anda kelas 11 TBSM';
    }else if (kelas == '12 TBSM') {
        var ket = 'Anda kelas 12 TBSM';
    } else {
        var ket = 'ANDA SUDAH LULUS' 
    } 
    } else {
        var ket = 'jurusan tidak tersedia';
    }
    
    res.send(
        'Nama : ' + nama + '<br>' +
        'Jurusan : ' + ket 
    );
});       
router.get('/latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah',(req, res)=>{
    var nama = req.params.nama;
    var tanggal = req.params.tanggal;
    var jenis = req.params.jenis;
    var pesanan = req.params.pesanan;
    var jumlah = req.params.jumlah;
   
    if (jenis == 'makanan') {
    if (pesanan == 'nasi_goreng'){
        var harga = "20000";
    } else if (pesanan == 'Ayam_goreng') {
        var harga = "40000";
    } else if (pesanan == 'mie_goreng') {
        var harga = "30000";
    } else {
        var pesanan = 'Tidak ada harga'
    }
}
    if (jenis == 'Minuman') {
        if (pesanan == 'Air_Mineral'){
        var harga = "10000";
    } else if (jenis == 'jus') {
        var harga = "20.000";
    } else if (pesanan == 'kopi') {
        var harga = "30.000";
    } else {
        var pesanan = 'Anda tidak ada pilihan';
    }
}

    var total = jumlah * harga;
    if (total >= 100000) {
        var diskon = total * 0.5;
    } else {
        var diskon = 0
    }
    var total_bayar = total - diskon;

    res.send(
        '<h1>Starbuck lokal</h1><br>' +
        'Nama : ' + nama + '<br>' +
        'Tanggal : ' + tanggal + '<br>' +
        'Jenis : ' + jenis + '<br>' +
        'Pesanan : ' + pesanan + '<br>' +
        'Harga : ' + harga + '<br>' +
        'Jumlah : ' + jumlah + '<br>' +
        '<hr></hr>' + '<br>' +
        'Total : ' + total + '<br>' +
        'Diskon 50% : ' + diskon + '<br>' +
        'Total Pembayaran : ' + total_bayar 
        
    );
});    
router.get('/sempel',(req, res)=>{
    res.send(
        '<h3>Selamat Datang</h3>'
        );
    });    

// export default router
export default router;