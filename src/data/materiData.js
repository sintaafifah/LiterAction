
const buatMateri = (title, description, content, example, summary) => ({
  title,
  description,
  content,
  example,
  summary,
});

export const materiData = {
  // MODUL 1 - MENGENAL PERANGKAT DIGITAL
  1: [
    {
      id: 1,
      ...buatMateri(
        'Mengenal Perangkat Keras',
        'Memahami komponen fisik komputer dan perangkat digital.',
        [
          {
            heading: 'Apa itu perangkat keras?',
            text: 'Perangkat keras atau hardware adalah bagian fisik dari komputer yang dapat dilihat dan disentuh. Perangkat ini bekerja sama untuk menerima, memproses, menyimpan, dan menampilkan informasi.'
          },
          {
            heading: 'Jenis-jenis perangkat keras',
            text: 'Contohnya adalah keyboard dan mouse sebagai perangkat masukan, monitor dan printer sebagai perangkat keluaran, serta prosesor dan RAM sebagai komponen pemrosesan.'
          }
        ],
        'Ketika mengetik tugas, kamu menggunakan keyboard untuk memasukkan teks. Hasilnya ditampilkan melalui monitor.',
        [
          'Hardware merupakan bagian fisik perangkat digital.',
          'Setiap perangkat memiliki fungsi berbeda.',
          'Hardware bekerja sama menjalankan komputer.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Mengenal Perangkat Lunak',
        'Memahami fungsi aplikasi dan sistem yang digunakan perangkat digital.',
        [
          {
            heading: 'Apa itu perangkat lunak?',
            text: 'Perangkat lunak atau software adalah sekumpulan program yang memberikan instruksi kepada komputer untuk melakukan tugas tertentu. Software tidak dapat disentuh secara fisik.'
          },
          {
            heading: 'Jenis perangkat lunak',
            text: 'Perangkat lunak dapat berupa sistem operasi, aplikasi pengolah kata, browser, aplikasi desain, dan aplikasi komunikasi. Setiap software memiliki fungsi yang mendukung kebutuhan pengguna.'
          }
        ],
        'Microsoft Word merupakan perangkat lunak yang dapat digunakan untuk membuat dan mengedit dokumen tugas kuliah.',
        [
          'Software berupa program atau instruksi.',
          'Software membantu pengguna menjalankan tugas.',
          'Contohnya adalah browser dan aplikasi pengolah kata.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Memahami Sistem Operasi',
        'Mengenal sistem operasi dan perannya dalam perangkat digital.',
        [
          {
            heading: 'Apa itu sistem operasi?',
            text: 'Sistem operasi adalah perangkat lunak utama yang mengatur kerja perangkat digital. Sistem operasi menjadi penghubung antara pengguna, aplikasi, dan perangkat keras.'
          },
          {
            heading: 'Fungsi sistem operasi',
            text: 'Sistem operasi mengelola penyimpanan, memori, aplikasi, dan perangkat yang terhubung. Contoh sistem operasi adalah Windows, Android, macOS, dan Linux.'
          }
        ],
        'Ketika membuka aplikasi di laptop Windows, sistem operasi mengatur agar aplikasi tersebut dapat berjalan dengan baik.',
        [
          'Sistem operasi mengatur kerja perangkat.',
          'Sistem operasi menghubungkan hardware dan software.',
          'Contohnya Windows, Android, dan Linux.'
        ]
      )
    }
  ],

  // MODUL 2 - MENCARI INFORMASI YANG TEPAT
  2: [
    {
      id: 1,
      ...buatMateri(
        'Teknik Pencarian Informasi',
        'Mempelajari cara mencari informasi secara efektif di internet.',
        [
          {
            heading: 'Menggunakan mesin pencari',
            text: 'Mesin pencari membantu menemukan informasi dari berbagai situs web. Pengguna dapat memasukkan kata kunci sesuai topik yang ingin diketahui.'
          },
          {
            heading: 'Memilih kata kunci',
            text: 'Gunakan kata kunci yang spesifik dan jelas agar hasil pencarian lebih relevan. Hindari kalimat yang terlalu umum jika membutuhkan informasi tertentu.'
          }
        ],
        'Daripada mengetik "teknologi", gunakan kata kunci "manfaat kecerdasan buatan dalam pendidikan" agar hasilnya lebih sesuai.',
        [
          'Mesin pencari membantu menemukan informasi.',
          'Gunakan kata kunci yang spesifik.',
          'Periksa hasil pencarian sebelum menggunakannya.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Mengenali Sumber Informasi Terpercaya',
        'Menilai kredibilitas sumber sebelum mempercayai informasi.',
        [
          {
            heading: 'Ciri sumber terpercaya',
            text: 'Sumber terpercaya biasanya mencantumkan penulis, tanggal publikasi, referensi, dan informasi yang dapat diverifikasi. Identitas penerbit juga perlu diperhatikan.'
          },
          {
            heading: 'Membandingkan beberapa sumber',
            text: 'Jangan hanya mengandalkan satu sumber. Bandingkan informasi dari beberapa situs yang memiliki reputasi baik untuk memastikan kesesuaian isi.'
          }
        ],
        'Saat mencari informasi beasiswa, utamakan situs resmi penyelenggara dibandingkan unggahan dari akun yang tidak dikenal.',
        [
          'Periksa identitas penulis dan penerbit.',
          'Perhatikan tanggal publikasi.',
          'Bandingkan informasi dari beberapa sumber.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Memeriksa Kebenaran Informasi',
        'Mempelajari cara memverifikasi informasi sebelum membagikannya.',
        [
          {
            heading: 'Mengapa informasi perlu diperiksa?',
            text: 'Informasi di internet tidak selalu benar. Informasi palsu dapat menimbulkan kesalahpahaman, kepanikan, bahkan merugikan orang lain.'
          },
          {
            heading: 'Langkah verifikasi',
            text: 'Periksa sumber asli, tanggal kejadian, konteks informasi, dan bukti pendukung. Kamu juga dapat menggunakan layanan pemeriksa fakta untuk membantu memastikan kebenarannya.'
          }
        ],
        'Ketika menerima berita tentang bencana, periksa informasi tersebut melalui kanal resmi pemerintah atau lembaga terkait sebelum menyebarkannya.',
        [
          'Tidak semua informasi di internet benar.',
          'Periksa sumber dan bukti pendukung.',
          'Jangan menyebarkan informasi yang belum terverifikasi.'
        ]
      )
    }
  ],

  // MODUL 3 - JEJAK DIGITAL DAN IDENTITAS
  3: [
    {
      id: 1,
      ...buatMateri(
        'Mengenal Jejak Digital',
        'Memahami rekam aktivitas yang ditinggalkan saat menggunakan internet.',
        [
          {
            heading: 'Apa itu jejak digital?',
            text: 'Jejak digital adalah rekaman aktivitas seseorang ketika menggunakan layanan digital. Aktivitas tersebut dapat berupa pencarian, komentar, unggahan foto, dan riwayat penggunaan aplikasi.'
          },
          {
            heading: 'Jenis jejak digital',
            text: 'Jejak digital aktif muncul dari tindakan yang sengaja dilakukan, seperti mengunggah foto. Jejak digital pasif dapat terbentuk melalui data yang dikumpulkan secara otomatis, seperti lokasi dan aktivitas penggunaan.'
          }
        ],
        'Komentar yang kamu tulis di media sosial dapat tersimpan dan berpotensi dilihat kembali oleh orang lain di kemudian hari.',
        [
          'Aktivitas internet dapat meninggalkan jejak digital.',
          'Jejak digital dapat bersifat aktif dan pasif.',
          'Perhatikan aktivitas sebelum mengunggah sesuatu.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Membangun Identitas Digital Positif',
        'Membentuk citra diri yang baik dan bertanggung jawab di internet.',
        [
          {
            heading: 'Apa itu identitas digital?',
            text: 'Identitas digital adalah gambaran diri seseorang di dunia online yang terbentuk melalui informasi, aktivitas, dan interaksi digital.'
          },
          {
            heading: 'Membangun identitas positif',
            text: 'Gunakan bahasa yang sopan, bagikan konten bermanfaat, dan tunjukkan sikap menghargai orang lain. Hindari unggahan yang dapat merugikan diri sendiri maupun orang lain.'
          }
        ],
        'Mahasiswa yang membagikan karya, pengalaman organisasi, dan pencapaian akademik secara profesional dapat membangun citra positif di dunia digital.',
        [
          'Identitas digital menggambarkan diri di internet.',
          'Jaga kesopanan dalam berinteraksi.',
          'Bagikan konten yang positif dan bermanfaat.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Mengelola Reputasi di Internet',
        'Menjaga nama baik dan mengelola informasi tentang diri sendiri secara online.',
        [
          {
            heading: 'Apa itu reputasi digital?',
            text: 'Reputasi digital merupakan penilaian orang lain terhadap seseorang berdasarkan aktivitas dan informasi yang ditemukan di internet.'
          },
          {
            heading: 'Cara menjaga reputasi',
            text: 'Periksa kembali unggahan, atur privasi akun, dan tanggapi kritik dengan bijak. Jika menemukan informasi pribadi yang tidak sesuai, cari tahu cara melaporkan atau meminta penghapusannya melalui layanan terkait.'
          }
        ],
        'Sebelum melamar pekerjaan, seseorang dapat memeriksa kembali profil media sosialnya untuk memastikan tidak ada unggahan yang tidak pantas.',
        [
          'Reputasi digital terbentuk dari aktivitas online.',
          'Periksa kembali konten yang dibagikan.',
          'Kelola privasi dan tanggapi kritik secara bijak.'
        ]
      )
    }
  ],

  // MODUL 4 - BERINTERAKSI DI RUANG DIGITAL
  4: [
    {
      id: 1,
      ...buatMateri(
        'Etika Berkomunikasi Digital',
        'Menerapkan sopan santun saat berkomunikasi melalui media digital.',
        [
          {
            heading: 'Pentingnya etika digital',
            text: 'Komunikasi digital memungkinkan seseorang berinteraksi tanpa bertemu langsung. Oleh karena itu, pengguna perlu menjaga sikap dan memilih kata-kata agar pesan tidak menimbulkan kesalahpahaman.'
          },
          {
            heading: 'Prinsip komunikasi yang baik',
            text: 'Gunakan bahasa yang sopan, hindari kata-kata kasar, perhatikan konteks percakapan, dan jangan mengirim pesan berulang yang mengganggu orang lain.'
          }
        ],
        'Saat mengirim pesan kepada dosen melalui WhatsApp, awali dengan salam, perkenalkan diri, dan sampaikan tujuan secara jelas.',
        [
          'Komunikasi digital tetap membutuhkan sopan santun.',
          'Gunakan bahasa yang sesuai dengan situasi.',
          'Pikirkan dampak pesan sebelum mengirimnya.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Menghargai Perbedaan di Internet',
        'Membangun interaksi yang menghormati keberagaman pendapat dan latar belakang.',
        [
          {
            heading: 'Keberagaman di ruang digital',
            text: 'Internet mempertemukan orang dengan latar belakang, pengalaman, dan pandangan yang berbeda. Perbedaan tersebut merupakan bagian dari kehidupan sosial di ruang digital.'
          },
          {
            heading: 'Menghormati pendapat',
            text: 'Sampaikan ketidaksetujuan dengan alasan yang jelas tanpa menghina. Hindari komentar yang merendahkan, diskriminatif, atau menyerang identitas seseorang.'
          }
        ],
        'Ketika berdiskusi tentang pilihan teknologi, kamu dapat menyampaikan pendapat berbeda tanpa mengejek pilihan orang lain.',
        [
          'Internet mempertemukan beragam pandangan.',
          'Hormati pendapat yang berbeda.',
          'Hindari komentar diskriminatif dan penghinaan.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Membangun Interaksi Positif',
        'Menciptakan lingkungan digital yang aman, nyaman, dan saling mendukung.',
        [
          {
            heading: 'Apa itu interaksi positif?',
            text: 'Interaksi positif adalah hubungan antar pengguna digital yang didasari sikap saling menghormati, membantu, dan bertanggung jawab.'
          },
          {
            heading: 'Menerapkan interaksi positif',
            text: 'Berikan komentar yang membangun, bantu pengguna yang membutuhkan informasi, dan jangan ikut menyebarkan perundungan. Laporkan konten yang melanggar aturan platform.'
          }
        ],
        'Ketika melihat teman mendapatkan komentar negatif, kamu dapat memberikan dukungan dan melaporkan komentar yang mengandung perundungan.',
        [
          'Interaksi positif menciptakan ruang digital yang sehat.',
          'Berikan dukungan dan komentar membangun.',
          'Jangan ikut menyebarkan perundungan.'
        ]
      )
    }
  ],

  // MODUL 5 - BIJAK BERBAGI INFORMASI
  5: [
    {
      id: 1,
      ...buatMateri(
        'Memahami Informasi di Media Sosial',
        'Mengenali karakteristik informasi yang beredar di media sosial.',
        [
          {
            heading: 'Informasi di media sosial',
            text: 'Media sosial menjadi tempat berbagi berita, pendapat, foto, video, dan berbagai informasi lainnya. Informasi dapat tersebar dengan cepat karena pengguna bisa membagikannya kepada banyak orang.'
          },
          {
            heading: 'Menggunakan media sosial secara bijak',
            text: 'Pengguna perlu memahami konteks informasi, mengenali sumbernya, dan membedakan fakta dengan opini. Popularitas sebuah unggahan tidak selalu menunjukkan bahwa isinya benar.'
          }
        ],
        'Unggahan yang memiliki ribuan tanda suka belum tentu berisi informasi yang akurat. Periksa sumbernya sebelum mempercayai.',
        [
          'Informasi di media sosial tersebar dengan cepat.',
          'Bedakan fakta dan opini.',
          'Jumlah tanda suka bukan bukti kebenaran.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Mengenali Hoaks dan Disinformasi',
        'Membedakan informasi palsu dan informasi yang menyesatkan.',
        [
          {
            heading: 'Apa itu hoaks?',
            text: 'Hoaks adalah informasi palsu yang disebarkan seolah-olah benar. Informasi tersebut dapat menggunakan judul sensasional, gambar yang tidak sesuai, atau sumber yang tidak jelas.'
          },
          {
            heading: 'Mengenali disinformasi',
            text: 'Disinformasi merupakan informasi salah yang sengaja dibuat atau disebarkan untuk menyesatkan. Periksa konteks, sumber, tanggal, dan bukti sebelum mempercayai sebuah informasi.'
          }
        ],
        'Pesan berantai yang menyatakan bahwa semua pengguna akan mendapatkan hadiah jika membagikan tautan tertentu perlu diperiksa terlebih dahulu.',
        [
          'Hoaks merupakan informasi palsu.',
          'Disinformasi sengaja digunakan untuk menyesatkan.',
          'Periksa sumber dan bukti sebelum percaya.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Bijak Membagikan Informasi',
        'Memahami tanggung jawab sebelum menyebarkan konten di internet.',
        [
          {
            heading: 'Tanggung jawab saat berbagi',
            text: 'Setiap pengguna bertanggung jawab atas informasi yang dibagikan. Konten yang tidak benar atau melanggar privasi dapat merugikan orang lain.'
          },
          {
            heading: 'Hal yang perlu diperiksa',
            text: 'Pastikan informasi benar, sumbernya jelas, dan tidak mengandung data pribadi orang lain tanpa izin. Pertimbangkan manfaat serta dampak konten sebelum membagikannya.'
          }
        ],
        'Sebelum membagikan foto teman, mintalah izin terlebih dahulu meskipun foto tersebut diambil dalam kegiatan bersama.',
        [
          'Periksa kebenaran informasi.',
          'Hormati privasi orang lain.',
          'Pertimbangkan dampak sebelum membagikan konten.'
        ]
      )
    }
  ],

  // MODUL 6 - MENGHARGAI KARYA ORANG LAIN
  6: [
    {
      id: 1,
      ...buatMateri(
        'Mengenal Hak Cipta Digital',
        'Memahami perlindungan terhadap karya yang dibuat dan dibagikan secara digital.',
        [
          {
            heading: 'Apa itu hak cipta?',
            text: 'Hak cipta merupakan hak eksklusif pencipta atas karya yang dihasilkan. Perlindungan ini dapat berlaku pada tulisan, foto, musik, video, ilustrasi, dan karya lainnya sesuai ketentuan hukum.'
          },
          {
            heading: 'Hak cipta di dunia digital',
            text: 'Karya yang ditemukan di internet tidak otomatis bebas digunakan. Pengguna perlu memperhatikan izin, lisensi, dan ketentuan penggunaan sebelum menyalin atau menyebarkan karya.'
          }
        ],
        'Mengunduh ilustrasi dari internet untuk digunakan dalam poster tidak berarti kamu bebas mengaku sebagai pembuat ilustrasi tersebut.',
        [
          'Hak cipta melindungi karya pencipta.',
          'Karya di internet tetap memiliki aturan penggunaan.',
          'Periksa izin dan lisensi sebelum menggunakan karya.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Mengenali Plagiarisme Digital',
        'Memahami tindakan menyalin karya tanpa pengakuan yang semestinya.',
        [
          {
            heading: 'Apa itu plagiarisme?',
            text: 'Plagiarisme adalah tindakan menggunakan ide, tulisan, atau karya orang lain tanpa memberikan pengakuan yang sesuai. Tindakan ini dapat melanggar etika akademik dan aturan yang berlaku.'
          },
          {
            heading: 'Cara menghindari plagiarisme',
            text: 'Gunakan parafrasa dengan pemahaman sendiri, cantumkan sumber referensi, dan berikan kutipan ketika menggunakan kalimat asli. Jangan hanya mengganti beberapa kata dari tulisan orang lain.'
          }
        ],
        'Menyalin seluruh paragraf dari artikel internet ke dalam tugas tanpa mencantumkan sumber merupakan contoh plagiarisme.',
        [
          'Plagiarisme menggunakan karya orang lain tanpa pengakuan.',
          'Gunakan parafrasa secara benar.',
          'Cantumkan sumber referensi.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Menggunakan Konten Secara Bertanggung Jawab',
        'Menerapkan penggunaan konten digital sesuai izin dan etika.',
        [
          {
            heading: 'Memahami lisensi konten',
            text: 'Lisensi menjelaskan bagaimana suatu karya boleh digunakan oleh orang lain. Beberapa karya dapat digunakan dengan syarat tertentu, misalnya mencantumkan nama pencipta atau tidak menggunakannya untuk tujuan komersial.'
          },
          {
            heading: 'Menggunakan konten dengan etis',
            text: 'Pilih konten yang memiliki izin penggunaan sesuai kebutuhan. Cantumkan atribusi jika diwajibkan dan jangan mengubah karya dengan cara yang melanggar ketentuan lisensinya.'
          }
        ],
        'Saat membuat presentasi, gunakan gambar berlisensi Creative Commons sesuai ketentuannya dan cantumkan nama pembuat gambar.',
        [
          'Perhatikan lisensi setiap konten.',
          'Ikuti syarat penggunaan karya.',
          'Berikan atribusi sesuai ketentuan.'
        ]
      )
    }
  ],

  // MODUL 7 - MENGENALI PHISHING
  7: [
    {
      id: 1,
      ...buatMateri(
        'Mengenal Phishing',
        'Memahami pengertian, tujuan, dan cara kerja phishing.',
        [
          {
            heading: 'Apa itu phishing?',
            text: 'Phishing adalah bentuk penipuan digital yang dilakukan dengan menyamar sebagai pihak tepercaya untuk memperoleh informasi pribadi korban, seperti kata sandi, kode OTP, atau data rekening.'
          },
          {
            heading: 'Bagaimana phishing bekerja?',
            text: 'Pelaku biasanya mengirimkan pesan melalui email, SMS, atau media sosial. Pesan tersebut sering berisi tautan palsu yang mengarahkan korban ke halaman tiruan untuk mencuri informasi.'
          },
          {
            heading: 'Mengapa phishing berbahaya?',
            text: 'Informasi yang berhasil dicuri dapat digunakan untuk mengambil alih akun, menyalahgunakan identitas, atau melakukan transaksi tanpa izin.'
          }
        ],
        'Kamu menerima pesan yang mengaku dari bank dan meminta kamu mengeklik tautan untuk memperbarui data rekening. Pesan tersebut bisa jadi merupakan upaya phishing.',
        [
          'Phishing merupakan bentuk penipuan digital.',
          'Pelaku menyamar sebagai pihak tepercaya.',
          'Tujuannya mencuri informasi pribadi.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Mengidentifikasi Ciri-Ciri Penipuan',
        'Mengenali tanda-tanda pesan dan tautan phishing.',
        [
          {
            heading: 'Pesan yang mendesak',
            text: 'Pelaku sering menggunakan kalimat yang membuat korban panik, seperti ancaman pemblokiran akun atau hadiah yang harus segera diklaim.'
          },
          {
            heading: 'Tautan mencurigakan',
            text: 'Alamat situs bisa menyerupai situs resmi, tetapi memiliki ejaan, domain, atau susunan alamat yang berbeda.'
          },
          {
            heading: 'Permintaan informasi rahasia',
            text: 'Pesan yang meminta kata sandi, PIN, atau kode OTP melalui tautan yang tidak jelas patut dicurigai.'
          }
        ],
        'Sebuah pesan mengatakan akun media sosialmu akan dihapus dalam 10 menit jika kamu tidak mengisi kata sandi melalui tautan tertentu.',
        [
          'Waspadai pesan yang memaksa dan mengancam.',
          'Periksa alamat situs sebelum membukanya.',
          'Jangan membagikan PIN dan kode OTP.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Cara Menghindari Serangan Phishing',
        'Menerapkan langkah aman saat menerima pesan mencurigakan.',
        [
          {
            heading: 'Periksa identitas pengirim',
            text: 'Pastikan pesan benar-benar berasal dari pihak resmi. Jangan langsung percaya pada nama akun atau logo yang digunakan.'
          },
          {
            heading: 'Jangan sembarang mengeklik tautan',
            text: 'Akses layanan melalui aplikasi atau alamat situs resmi yang kamu ketahui, bukan melalui tautan dari pesan mencurigakan.'
          },
          {
            heading: 'Lindungi informasi pribadi',
            text: 'Jangan pernah memberikan kata sandi, PIN, atau kode OTP kepada orang lain. Aktifkan autentikasi dua faktor jika tersedia.'
          }
        ],
        'Jika menerima pesan hadiah dari nomor tidak dikenal, jangan mengeklik tautannya. Periksa informasi tersebut melalui kanal resmi penyelenggara.',
        [
          'Verifikasi identitas pengirim.',
          'Gunakan situs dan aplikasi resmi.',
          'Jaga kerahasiaan informasi akun.'
        ]
      )
    }
  ],

  // MODUL 8 - MENJAGA DATA PRIBADI
  8: [
    {
      id: 1,
      ...buatMateri(
        'Mengenal Data Pribadi',
        'Memahami informasi pribadi yang perlu dilindungi di internet.',
        [
          {
            heading: 'Apa itu data pribadi?',
            text: 'Data pribadi adalah informasi tentang seseorang yang dapat digunakan untuk mengenali atau mengidentifikasi dirinya. Contohnya nama lengkap, alamat, nomor telepon, dan informasi identitas lainnya.'
          },
          {
            heading: 'Data pribadi yang perlu dijaga',
            text: 'Beberapa informasi memiliki risiko tinggi jika disalahgunakan, seperti nomor identitas, data rekening, kata sandi, PIN, dan kode OTP. Informasi tersebut tidak boleh dibagikan sembarangan.'
          }
        ],
        'Mengunggah foto kartu identitas yang memperlihatkan seluruh nomor identitas dapat meningkatkan risiko penyalahgunaan data.',
        [
          'Data pribadi berkaitan dengan identitas seseorang.',
          'Tidak semua informasi aman untuk dibagikan.',
          'Lindungi data yang bersifat rahasia.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Risiko Penyalahgunaan Data',
        'Mengenali dampak ketika informasi pribadi jatuh ke pihak yang tidak bertanggung jawab.',
        [
          {
            heading: 'Bagaimana data dapat disalahgunakan?',
            text: 'Data pribadi dapat diperoleh melalui penipuan, kebocoran data, aplikasi tidak aman, atau unggahan yang terlalu terbuka. Pelaku dapat menggunakan informasi tersebut tanpa persetujuan pemiliknya.'
          },
          {
            heading: 'Dampak penyalahgunaan data',
            text: 'Penyalahgunaan data dapat menyebabkan penipuan identitas, pengambilalihan akun, gangguan privasi, hingga kerugian finansial.'
          }
        ],
        'Seseorang yang membagikan kode OTP kepada orang tidak dikenal berisiko kehilangan akses ke akun pribadinya.',
        [
          'Data dapat bocor melalui berbagai cara.',
          'Penyalahgunaan data dapat merugikan korban.',
          'Jangan memberikan informasi rahasia kepada pihak lain.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Cara Melindungi Data Pribadi',
        'Menerapkan kebiasaan aman untuk menjaga informasi pribadi.',
        [
          {
            heading: 'Mengatur keamanan akun',
            text: 'Gunakan kata sandi yang kuat dan berbeda untuk setiap akun. Aktifkan autentikasi dua faktor serta periksa pengaturan privasi secara berkala.'
          },
          {
            heading: 'Berhati-hati saat menggunakan layanan digital',
            text: 'Unduh aplikasi dari sumber resmi, periksa izin akses aplikasi, dan hindari menggunakan jaringan publik untuk aktivitas yang melibatkan informasi sensitif.'
          }
        ],
        'Sebelum memasang aplikasi baru, periksa apakah aplikasi tersebut benar-benar membutuhkan akses ke kontak, kamera, atau lokasi perangkat.',
        [
          'Gunakan kata sandi yang kuat dan unik.',
          'Aktifkan autentikasi dua faktor.',
          'Periksa izin aplikasi dan pengaturan privasi.'
        ]
      )
    }
  ],

  // MODUL 9 - KATA SANDI YANG KUAT
  9: [
    {
      id: 1,
      ...buatMateri(
        'Ciri-Ciri Kata Sandi yang Kuat',
        'Mengenali karakteristik kata sandi yang sulit ditebak.',
        [
          {
            heading: 'Mengapa kata sandi harus kuat?',
            text: 'Kata sandi menjadi salah satu lapisan perlindungan akun digital. Kata sandi yang mudah ditebak dapat meningkatkan risiko akses tidak sah oleh orang lain.'
          },
          {
            heading: 'Karakteristik kata sandi kuat',
            text: 'Kata sandi sebaiknya panjang, unik, dan tidak menggunakan informasi pribadi yang mudah diketahui. Kombinasi huruf, angka, serta simbol dapat membantu meningkatkan kekuatannya.'
          }
        ],
        'Kata sandi yang menggunakan tanggal lahir atau nama sendiri lebih mudah ditebak dibandingkan kombinasi panjang yang unik.',
        [
          'Kata sandi melindungi akses ke akun.',
          'Gunakan kombinasi yang panjang dan unik.',
          'Hindari informasi pribadi yang mudah ditebak.'
        ]
      )
    },
    {
      id: 2,
      ...buatMateri(
        'Membuat Kata Sandi yang Aman',
        'Mempelajari langkah membuat kata sandi yang kuat dan sulit ditebak.',
        [
          {
            heading: 'Membuat kata sandi unik',
            text: 'Buat kata sandi yang berbeda untuk setiap akun. Hindari menggunakan nama, tanggal lahir, atau urutan angka sederhana yang mudah diketahui orang lain.'
          },
          {
            heading: 'Menggunakan frasa sandi',
            text: 'Frasa sandi merupakan rangkaian beberapa kata yang mudah diingat oleh pemiliknya tetapi sulit ditebak orang lain. Pastikan frasa tersebut cukup panjang dan tidak menggunakan informasi pribadi yang mudah ditemukan.'
          }
        ],
        'Daripada menggunakan kata sandi sederhana seperti "password123", buat frasa sandi panjang yang unik dan hanya digunakan untuk satu akun.',
        [
          'Buat kata sandi yang berbeda untuk setiap akun.',
          'Hindari kombinasi yang mudah ditebak.',
          'Gunakan kata sandi yang panjang dan unik.'
        ]
      )
    },
    {
      id: 3,
      ...buatMateri(
        'Mengelola Kata Sandi dengan Baik',
        'Menjaga keamanan kata sandi agar akun tetap terlindungi.',
        [
          {
            heading: 'Menyimpan kata sandi',
            text: 'Hindari menuliskan kata sandi di tempat yang mudah dilihat orang lain atau menyimpannya dalam catatan yang tidak terlindungi. Pengelola kata sandi dapat membantu menyimpan informasi login secara lebih teratur.'
          },
          {
            heading: 'Memperbarui keamanan akun',
            text: 'Jangan membagikan kata sandi kepada orang lain. Jika menduga akun telah diakses tanpa izin, segera ganti kata sandi dan periksa aktivitas login.'
          }
        ],
        'Jika menerima pemberitahuan login dari perangkat yang tidak dikenal, segera periksa keamanan akun dan ubah kata sandi melalui layanan resmi.',
        [
          'Simpan kata sandi di tempat yang aman.',
          'Jangan membagikan kata sandi.',
          'Periksa aktivitas akun secara berkala.'
        ]
      )
    }
  ],
};
