export type SectionType = 
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'highlight'; content: string; title?: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export type TheoryType = {
  id: string;
  title: string;
  shortTitle: string;
  tags: string[];
  sections: SectionType[];
};

export const theories: Record<string, TheoryType> = {
  buzzer_introduction: {
    id: 'buzzer_introduction',
    shortTitle: 'Buzzer Phenomenon Introduction',
    title: 'Gen Z dalam Pusaran Buzzer: Understanding Gen-Z Awareness Against Buzzers in Indonesian Political Social Media',
    tags: ['Social Media', 'Political Communication', 'Gen Z', 'Indonesia'],
    sections: [
      {
        type: 'paragraph',
        content: 'Media sosial merupakan suatu lingkup daring yang besar, yang kini merekap semua informasi dan opini yang telah disebarkan di dalamnya. Media sosial tentu memiliki algoritmanya sendiri yang memiliki peran sentral dalam mempengaruhi cara pengguna berinteraksi dengan konten politik. Algoritma memungkinkan personalisasi dan penyaringan yang dapat menghasilkan efek kontradiktif pada pengalaman pengguna.'
      },
      {
        type: 'paragraph',
        content: 'Algoritma ini mampu merinci konten yang diperlihatkan kepada pengguna berdasarkan preferensi dan perilaku mereka, menciptakan umpan berita yang sesuai dengan pandangan individu. Hal ini pun menjadi kesempatan buzzer untuk "melempar kayu bakar dalam api yang membara". Dengan adanya bantuan algoritma media sosial, akan semakin mudah bagi buzzer untuk menggiring opini publik tentang pemilu di media sosial sebagai salah satu bagian politik Indonesia.'
      },
      {
        type: 'highlight',
        title: 'Research Problem',
        content: 'Buzzer dapat mengganggu proses politik dan pencemaran citra pemerintah yang menyebabkan penurunan rasa nasionalisme, terutama di kalangan Gen Z yang rentan terhadap fenomena FOMO (Fear of Missing Out).'
      },
      {
        type: 'paragraph',
        content: 'Masalah tersebut menjadi acuan keresahan karya ilmiah ini, yang mendasari pengembangan website BuzzerLurker.com untuk mengedukasi, menyadarkan, dan menjabarkan pola kerja buzzer. Website ini memberikan contoh langsung dari pola kerja buzzer di media sosial dan mengidentifikasi suatu komentar atau postingan, terutama dalam masa pemilu.'
      }
    ]
  },

  social_media_ethics: {
    id: 'social_media_ethics',
    shortTitle: 'Social Media Ethics Violations',
    title: 'Media Sosial dan Penyimpangan Etika dalam Penggunaannya',
    tags: ['Social Media Ethics', 'Digital Communication', 'FOMO', 'Information Literacy'],
    sections: [
      {
        type: 'paragraph',
        content: 'Pada awalnya, media sosial berperan sebagai jembatan komunikasi antar setiap individual. Namun, sekarang media sosial memiliki banyak kegunaan dan sudah menjadi platform daring untuk berkomunikasi dengan teman dan keluarga, mencari informasi, berbagi konten, hingga berbisnis dan berpolitik.'
      },
      {
        type: 'paragraph',
        content: 'Tidak semua hal yang dijabarkan di media sosial merupakan hal yang baik. Banyak juga penyalahgunaan media sosial seperti penyebaran hoax, konten negatif, ujaran kebencian, dan bahkan pornografi. Media sosial tidak hanya digunakan untuk berkomunikasi, melainkan juga menjadi platform untuk seseorang mengekspos kehidupan pribadinya.'
      },
      {
        type: 'heading',
        content: 'Fenomena FOMO dan Pengaruhnya'
      },
      {
        type: 'paragraph',
        content: 'Hal ini menyebabkan standarisasi sosial dan ketakutan akan ketinggalan informasi, tren, atau pengalaman yang sedang terjadi di media sosial, atau disebut juga Fear of Missing Out (FOMO). Orang yang mengalami kegelisahan tersebut cenderung mengikuti opini orang lain karena takut ketinggalan atau merasa tidak diakui.'
      },
      {
        type: 'highlight',
        title: 'Critical Impact',
        content: 'Dengan banyaknya informasi dan opini yang beredar di media sosial, individu yang memiliki kegelisahan terhadap ketertinggalan akan mudah terseret dalam opini-opini yang bertebaran di media sosial dan berpihak ke opini mayoritas agar dapat merasa diakui.'
      },
      {
        type: 'paragraph',
        content: 'Disinilah peran buzzer berperan dalam mempengaruhi opini suatu individual, terutama Gen Z yang memiliki hubungan yang melekat dengan media sosial dan tidak bisa dihindari.'
      }
    ]
  },

  algorithm_response: {
    id: 'algorithm_response',
    shortTitle: 'Gen Z and Social Media Algorithms',
    title: 'Respon Gen Z Terhadap Algoritma Media Sosial dalam Pandangan Politik dan Pemerintah',
    tags: ['Social Media Algorithm', 'Political Views', 'Echo Chamber', 'Filter Bubble'],
    sections: [
      {
        type: 'paragraph',
        content: 'Algoritma media sosial adalah langkah sistematis dan terstruktur untuk mengolah kumpulan data melalui sebuah instruksi, dengan tujuan menyaring dan memilih konten yang akan diberikan terhadap pengguna media sosial. Namun, konten media sosial cenderung menyediakan konten yang sejalan dengan pengguna.'
      },
      {
        type: 'heading',
        content: 'Echo Chamber dan Filter Bubble'
      },
      {
        type: 'paragraph',
        content: 'Hal ini menyebabkan Gen Z sering terpapar oleh informasi yang memihak pandangannya mereka sendiri, termasuk disinformasi media. Kondisi ini mendorong terbentuknya echo chamber dan bubble, di mana Gen Z hanya terekspos opini yang memperkuat mereka. Dalam konteks pemilu, ini menjadi ancaman berbahaya karena akan mempersempit wawasan politik, memperkuat polarisasi, dan mempersulit diskusi yang sehat antar kelompok dengan pandangan berbeda.'
      },
      {
        type: 'paragraph',
        content: 'Algoritma yang mendorong engagement tinggi sering kali lebih mengutamakan konten provokatif dibandingkan konten informatif, sehingga meningkatkan penyebaran hoaks dan manipulasi opini politik.'
      },
      {
        type: 'highlight',
        title: 'Gen Z Awareness',
        content: 'Gen Z sadar bahwa pesatnya perkembangan saat berinteraksi antar pengguna media sosial sehingga pendorongan untuk ikut menyebarkan konten sangat cepat. Peran pengguna media sosial menjadi kunci dalam penggunaan media sosial karena pusat penyebarluasan konten ada di pengguna itu sendiri.'
      },
      {
        type: 'heading',
        content: 'Dualisme Sikap Gen Z'
      },
      {
        type: 'paragraph',
        content: 'Respon Gen Z terhadap konten politik yang dipengaruhi algoritma media sosial sangat beragam. Sebagian besar Gen Z aktif menggunakan media sosial untuk mengekspresikan pandangan politik mereka, baik melalui bentuk kritik serius maupun humor, meme, dan satire. Namun, paparan terhadap konten algoritmis ini juga menimbulkan dualisme sikap.'
      },
      {
        type: 'paragraph',
        content: 'Sebagian merasa skeptis terhadap politik dan memilih untuk golput sebagai bentuk ketidakpercayaan terhadap sistem yang ada. Sebagian lainnya justru makin sadar politik, didorong oleh kampanye kreatif para kandidat yang mengikuti tren digital. Hal ini menunjukkan bahwa meskipun algoritma sosial media berpotensi mempersempit wawasan, ada juga peluang positif di mana Gen Z dapat menggunakan media sosial sebagai alat untuk meningkatkan kesadaran politik mereka.'
      }
    ]
  },

  election_phenomenon: {
    id: 'election_phenomenon',
    shortTitle: 'Indonesian Election 2024',
    title: 'Fenomena Pemilu Terakhir Indonesia dalam Dunia Politik',
    tags: ['Indonesian Election', 'Political Propaganda', 'Social Media Campaign', 'Digital Politics'],
    sections: [
      {
        type: 'paragraph',
        content: 'Baru-baru ini, telah terjadi fenomena kegegeran publik tentang pemilu terakhir yang menggoyahkan politik Indonesia, yaitu pemilu tahun 2024. Kandidat dalam pemilu memanfaatkan metode baru untuk pendekatan sosial kepada rakyat, yaitu dengan memanfaatkan pola algoritma media sosial.'
      },
      {
        type: 'paragraph',
        content: 'Hal ini digunakan sebagai pembentuk persepsi publik dalam pemilihan umum yang diakibatkan peran sentral algoritma yang diperankan dalam media sosial. Algoritma ini dapat menciptakan "filter bubble" dimana pengguna hanya terpapar pandangan yang sejalan dengan kepercayaan mereka, serta "echo chamber," di mana individu hanya terpapar informasi yang memperkuat pandangan mereka.'
      },
      {
        type: 'heading',
        content: 'Strategi Propaganda Digital'
      },
      {
        type: 'paragraph',
        content: 'Propaganda ini memanfaatkan tagar, bot, akun palsu, serta teknik retorika dan psikologi emosional. Penggunaan tagar membuat percakapan menjadi trending topic, sementara bot, buzzer, dan akun palsu digunakan untuk menyebarkan pesan dengan cepat dan luas.'
      },
      {
        type: 'highlight',
        title: 'Post-Election Controversy',
        content: 'Setelah pemilu yang berlangsung pada tanggal 14 Februari 2024 di Indonesia telah menimbulkan berbagai pendapat tentang dugaan kecurangan pemilu di platform media sosial, terutama Twitter.'
      },
      {
        type: 'paragraph',
        content: 'Tidak hanya itu, banyak juga penuduhan pengalihan isu terhadap program pemerintah yang baru akan atau bahkan sudah diselenggarakan dengan kemungkinan sifat ketidaksukaan akan kandidat yang menang. Hal ini menciptakan polarisasi yang semakin dalam dalam masyarakat Indonesia.'
      },
      {
        type: 'paragraph',
        content: 'Fenomena ini menunjukkan bagaimana media sosial dan teknologi digital telah mengubah lanskap politik Indonesia secara fundamental, menciptakan tantangan baru dalam menjaga integritas demokratis dan kohesi sosial.'
      }
    ]
  },

  opinion_manipulation: {
    id: 'opinion_manipulation',
    shortTitle: 'Buzzer Opinion Manipulation',
    title: 'Penggiringan Opini Politik Gen Z oleh Buzzer di Indonesia',
    tags: ['Opinion Manipulation', 'Political Identity', 'Digital Activism', 'Misinformation'],
    sections: [
      {
        type: 'paragraph',
        content: 'Studi sebelumnya telah menunjukkan bahwa politik identitas dan penggunaan media sosial merupakan pendorong signifikan partisipasi politik digital di kalangan pemilih Milenial dan Gen Z di Indonesia. Politik identitas menumbuhkan rasa memiliki dan tujuan, memotivasi individu untuk terlibat dalam kegiatan politik daring.'
      },
      {
        type: 'paragraph',
        content: 'Platform media sosial memperkuat keterlibatan ini dengan menyediakan ruang yang dinamis untuk wacana, aktivisme, dan mobilisasi politik. Namun, efek dari media sosial juga menimbulkan tantangan, seperti penyebaran informasi yang salah dan menguatnya narasi-narasi yang memecah belah berdasarkan identitas.'
      },
      {
        type: 'heading',
        content: 'Peran Buzzer dalam Pembentukan Pandangan Politik'
      },
      {
        type: 'paragraph',
        content: 'Dengan demikian peran buzzer muncul dalam pembentukan pandangan baru terhadap dunia politik di Indonesia serta citra pemerintah. Seperti yang telah didiskusikan sebelumnya, dengan sifat kegelisahan terhadap ketertinggalan (FOMO) yang dianut kebanyakan Gen Z tentu mempermudah bagi para buzzer untuk menggiring opini Gen Z.'
      },
      {
        type: 'highlight',
        title: 'Critical Vulnerability',
        content: 'Gen Z yang memiliki sifat FOMO cenderung mudah terpengaruh oleh buzzer untuk memiliki pandangan yang serupa terhadap politik Indonesia yang bersifat krusial bagi citra pemerintah negara.'
      },
      {
        type: 'paragraph',
        content: 'Kondisi ini menciptakan lingkaran setan di mana informasi yang salah atau bias terus menerus diperkuat dan disebarkan, mengakibatkan distorsi pemahaman politik yang signifikan di kalangan generasi muda Indonesia.'
      }
    ]
  },

  buzzer_patterns: {
    id: 'buzzer_patterns',
    shortTitle: 'Buzzer Working Patterns',
    title: 'Pola Kerja Buzzer di Media Sosial Terhadap Politik di Indonesia',
    tags: ['Buzzer Operations', 'Social Media Manipulation', 'Coordinated Campaigns', 'Fake Accounts'],
    sections: [
      {
        type: 'paragraph',
        content: 'Memahami pola kerja buzzer sangat penting untuk mengidentifikasi dan melawan manipulasi opini di media sosial. Buzzer memiliki strategi yang terorganisir dan sistematis dalam menjalankan operasinya.'
      },
      {
        type: 'heading',
        content: '1. Briefing dan Arahan'
      },
      {
        type: 'paragraph',
        content: 'Buzzer menerima arahan atau topik dari pihak yang menyewa mereka, seperti politisi, perusahaan, atau tokoh publik. Arahan bisa berupa konten yang harus disebarkan, narasi tertentu yang harus dibangun, atau pihak yang harus dijatuhkan. Proses ini biasanya melibatkan instruksi yang sangat spesifik mengenai pesan yang ingin disampaikan dan target audiens yang dituju.'
      },
      {
        type: 'heading',
        content: '2. Koordinasi Melalui Grup Tertutup'
      },
      {
        type: 'paragraph',
        content: 'Buzzer sering tergabung dalam grup tertutup melalui platform seperti WhatsApp, Telegram, atau Discord untuk koordinasi massal. Di dalam grup ini, mereka diberi template komentar, jadwal posting yang terkoordinasi, dan hashtag yang harus dipopulerkan. Koordinasi ini memastikan bahwa pesan yang sama disebarkan secara serentak untuk menciptakan ilusi konsensus publik.'
      },
      {
        type: 'heading',
        content: '3. Aksi Massal dan Serentak'
      },
      {
        type: 'paragraph',
        content: 'Mereka menyerang atau mendukung suatu isu secara bersamaan di berbagai platform seperti Twitter, Instagram, TikTok, YouTube, dan platform lainnya. Tujuannya adalah untuk memanipulasi opini publik dan membuat topik tersebut trending, sehingga menciptakan kesan bahwa opini tersebut didukung oleh mayoritas masyarakat.'
      },
      {
        type: 'highlight',
        title: 'Coordinated Inauthentic Behavior',
        content: 'Aksi massal dan serentak ini merupakan bentuk Coordinated Inauthentic Behavior yang dirancang untuk mengecoh algoritma media sosial dan menciptakan artificial engagement.'
      },
      {
        type: 'heading',
        content: '4. Penggunaan Akun Palsu atau Anonim'
      },
      {
        type: 'paragraph',
        content: 'Banyak buzzer menggunakan akun palsu atau anonim agar tidak terlacak identitas aslinya. Satu orang bisa mengelola banyak akun (multi-akun) dengan identitas berbeda, masing-masing dengan persona dan karakteristik yang berbeda untuk menghindari deteksi. Akun-akun ini sering kali memiliki foto profil yang dicuri dari internet dan riwayat posting yang dibuat secara artifisial.'
      },
      {
        type: 'heading',
        content: '5. Repetisi dan Distorsi Opini'
      },
      {
        type: 'paragraph',
        content: 'Mereka memanfaatkan pengulangan narasi untuk mempengaruhi netizen awam. Komentar-komentar mereka menyisipkan informasi yang bisa jadi tidak sepenuhnya benar, tetapi terus diulang agar dianggap fakta. Teknik ini dikenal sebagai "illusory truth effect" di mana informasi yang sering diulang cenderung dipercaya sebagai kebenaran.'
      },
      {
        type: 'paragraph',
        content: 'Strategi ini sangat efektif karena memanfaatkan bias kognitif manusia dan kecenderungan untuk mempercayai informasi yang sering kita dengar, terlepas dari kebenarannya.'
      }
    ]
  },

  research_methodology: {
    id: 'research_methodology',
    shortTitle: 'Research Methodology',
    title: 'Metodologi Penelitian dan Solusi BuzzerLurker.com',
    tags: ['Research Methods', 'Educational Website', 'Quantitative Analysis', 'Digital Literacy'],
    sections: [
      {
        type: 'paragraph',
        content: 'Penelitian ini menggunakan metode kuantitatif dengan tujuan untuk mengukur, menguji hipotesis dan generalisasi sejauh mana kewaspadaan Gen Z terhadap fenomena buzzer di media sosial dalam berpolitik di Indonesia. Penelitian dilaksanakan di SMA Khalifa Insan Madani Sejahtera pada tahun ajaran 2024/2025, dimulai dari tanggal 8 Februari hingga 27 April 2025.'
      },
      {
        type: 'heading',
        content: 'Alat dan Bahan Penelitian'
      },
      {
        type: 'paragraph',
        content: 'Penelitian ini menggunakan Google Forms untuk mendistribusikan survei kuesioner terhadap responden, jurnal ilmiah untuk mendapatkan dasar teori dan analisis data, artikel online untuk melengkapi informasi tambahan, dan perangkat lunak SPSS untuk mengelola dan menganalisa data kuantitatif dengan akurat dan terpercaya.'
      },
      {
        type: 'heading',
        content: 'Langkah-langkah Edukasi dari Situs BuzzerLurker.com'
      },
      {
        type: 'paragraph',
        content: 'Situs BuzzerLurker menawarkan berbagai fitur yang dirancang untuk mengedukasi Gen Z agar lebih kritis terhadap pengaruh buzzer di media sosial. Website ini dapat mengedukasi Gen Z terhadap pola-pola buzzer dan memberikan informasi terkait cara mengenali konten yang mencurigakan.'
      },
      {
        type: 'highlight',
        title: 'Educational Impact',
        content: 'Setelah mengakses materi edukatif yang disediakan oleh BuzzerLurker, Gen Z diharapkan dapat mengembangkan kesadaran kritis terhadap konten yang mereka temui di media sosial.'
      },
      {
        type: 'paragraph',
        content: 'Dengan pemahaman yang lebih mendalam tentang cara kerja buzzer dan algoritma media sosial, Gen Z akan lebih berhati-hati dalam menerima informasi, serta mampu mempertahankan pandangan mereka yang lebih objektif dan berdasarkan fakta, tidak mudah terjebak dalam opini mayoritas yang dibentuk oleh buzzer.'
      },
      {
        type: 'heading',
        content: 'Efektivitas Situs BuzzerLurker'
      },
      {
        type: 'paragraph',
        content: 'Efektivitas BuzzerLurker dalam mendidik Gen Z akan diuji melalui survei atau kuesioner yang mengukur perubahan sikap dan kewaspadaan mereka terhadap konten yang dipengaruhi oleh buzzer. Penelitian ini bertujuan untuk menilai apakah penggunaan situs ini dapat mengurangi dampak negatif dari buzzer terhadap pemikiran politik Gen Z.'
      },
      {
        type: 'paragraph',
        content: 'Tujuan akhirnya adalah memastikan bahwa Gen Z merasa lebih siap dalam membuat keputusan politik yang lebih cerdas dan berdasarkan informasi yang benar, terutama dalam menghadapi pemilu mendatang dan tantangan politik di era digital.'
      }
    ]
  },

  research_objectives: {
    id: 'research_objectives',
    shortTitle: 'Research Objectives and Hypothesis',
    title: 'Tujuan Penelitian, Hipotesis, dan Manfaat Studi Buzzer',
    tags: ['Research Goals', 'Hypothesis Testing', 'Academic Benefits', 'Social Impact'],
    sections: [
      {
        type: 'heading',
        content: 'Rumusan Masalah Penelitian'
      },
      {
        type: 'paragraph',
        content: 'Penelitian ini berupaya menjawab tiga pertanyaan kunci: Bagaimana pengaruh buzzer terhadap pandangan Gen Z terhadap politik dan citra pemerintahan di Indonesia? Seperti apa pola buzzer di media sosial pada masa pemilu di Indonesia? Seberapa besar pengaruh buzzer dalam penggiringan opini Gen Z terhadap politik di Indonesia?'
      },
      {
        type: 'heading',
        content: 'Tujuan Penelitian'
      },
      {
        type: 'paragraph',
        content: 'Tujuan utama penelitian ini adalah agar anak muda tidak mudah terseret dalam pusaran buzzer di media sosial, mengidentifikasi provokator atau buzzer pada platform seperti Instagram, Twitter (X), Facebook, dan platform lainnya, serta mendorong penggunaan website yang dapat membantu Gen Z untuk berperan aktif dalam mengenal politik di Indonesia.'
      },
      {
        type: 'heading',
        content: 'Hipotesis Penelitian'
      },
      {
        type: 'paragraph',
        content: 'Hipotesis diajukan berdasarkan anggapan bahwa dengan adanya media sosial yang menyediakan informasi yang begitu luas, opini dan pandangan politik atau pemilu Gen Z berubah dengan adanya algoritma dan seruan dari buzzer. Hal ini diperparah oleh fenomena FOMO yang kini sangat rawan dimiliki oleh Gen Z.'
      },
      {
        type: 'highlight',
        title: 'Critical Hypothesis',
        content: 'FOMO menyebabkan Gen Z menanamkan citra jelek terhadap pemerintah dan sistem politik Indonesia yang dapat meregangkan rasa nasionalisme generasi kedepannya.'
      },
      {
        type: 'paragraph',
        content: 'Hipotesis ini akan diuji melalui kuesioner Google Form secara kuantitatif, serta dengan pembuktian dari kutipan karya ilmiah lainnya untuk memberikan validasi empiris terhadap asumsi-asumsi yang dibuat.'
      },
      {
        type: 'heading',
        content: 'Manfaat Teoritis'
      },
      {
        type: 'paragraph',
        content: 'Secara teoritis, penelitian ini memberikan wawasan tentang pengaruh buzzer di media sosial, khususnya dalam politik Indonesia. Penelitian ini juga bertujuan mengetahui pola dan tujuan buzzer di media sosial, terutama dalam berpolitik, serta mengembangkan teknologi untuk mengenali dan menyeleksi pola buzzer di media sosial dalam masa pemilu dan berpolitik.'
      },
      {
        type: 'heading',
        content: 'Manfaat Praktis'
      },
      {
        type: 'paragraph',
        content: 'Bagi penulis, penelitian ini dapat menambah pengetahuan dan wawasan tentang cara berperilaku di media sosial dan berpikir secara kritis terhadap politik Indonesia. Bagi penduduk Indonesia terutama Gen Z, penelitian ini diharapkan dapat membentuk pola pikir yang berkualitas dan menumbuhkan prinsip yang baik tentang politik di Indonesia.'
      },
      {
        type: 'paragraph',
        content: 'Bagi bangsa Indonesia secara keseluruhan, penelitian ini dapat menjadi bahan pertimbangan nyata dalam memilih pemimpin yang akan menentukan masa depan bangsa Indonesia, serta meningkatkan literasi digital dan kesadaran politik generasi muda.'
      }
    ]
  },

  digital_literacy_importance: {
    id: 'digital_literacy_importance',
    shortTitle: 'Digital Literacy Importance',
    title: 'Pentingnya Literasi Digital di Era Disinformasi', 
    tags: ['Digital Literacy', 'Critical Thinking', 'Disinformation', 'Media Education'],
    sections: [
      {
        type: 'paragraph',
        content: 'Di era digital saat ini, kemampuan untuk memilah informasi yang benar dari disinformasi menjadi krusial. Literasi digital bukan hanya tentang kemampuan menggunakan teknologi, tetapi juga memahami bagaimana informasi diproduksi, disebarkan, dan dikonsumsi di platform digital. Tanpa literasi digital yang kuat, individu, terutama generasi muda, sangat rentan terhadap berbagai bentuk manipulasi, termasuk kampanye buzzer.'
      },
      {
        type: 'image',
        src: '/images/prove1.jpg',
        alt: 'Ilustrasi tentang literasi digital dengan seseorang sedang membaca berita di tablet dan dikelilingi oleh ikon-ikon media sosial dan informasi.',
        caption: 'Meningkatkan literasi digital adalah kunci untuk melawan penyebaran disinformasi.'
      },
      {
        type: 'paragraph',
        content: 'Meningkatkan literasi digital melibatkan pengembangan kemampuan berpikir kritis, evaluasi sumber informasi, dan pemahaman tentang bias media. Ini memberdayakan individu untuk menjadi konsumen informasi yang lebih bertanggung jawab dan aktif dalam ekosistem digital.'
      },
      {
        type: 'highlight',
        title: 'Empowering Citizens',
        content: 'Literasi digital membekali masyarakat dengan alat untuk mengenali dan menolak narasi palsu, serta berkontribusi pada ruang publik yang lebih informatif dan demokratis.'
      }
    ]
  }
};