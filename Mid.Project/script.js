// ============ MENUNGGU DOM SIAP ============
document.addEventListener('DOMContentLoaded', function() {
    console.log("Halaman Blog dimuat");
    
    initHeaderScroll();
    
    const currentPage = getCurrentPage();
    
    if (currentPage === 'index') {
        initHomePage();
    } else if (currentPage === 'blog') {
        initBlogPage();
    } else if (currentPage === 'contact') {
        initContactPage();
    } else if (currentPage === 'gallery') {
        initGalleryPage();
    }
});

// ============ FUNGSI UTILITY ============
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/' || path === '') {
        return 'index';
    }
    if (path.includes('Gallery.html')) {
        return 'gallery';
    }
    if (path.includes('Blog.html')) {
        return 'blog';
    }
    if (path.includes('Contact.html')) {
        return 'contact';
    }
    return 'index';
}

// ============ HEADER SCROLL EFFECT ============
function initHeaderScroll() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();
}

// ============ HOME PAGE ============
function initHomePage() {
    initSkillModal();
    initImageHoverEffect();
}

function initSkillModal() {
    const modal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalSkillTitle');
    const modalDesc = document.getElementById('modalSkillDesc');
    const closeSpan = document.querySelector('.close-modal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const skillBoxes = document.querySelectorAll('.skill-box');
    
    if (!modal || skillBoxes.length === 0) return;
    
    function openModal(skillName, skillDesc) {
        modalTitle.textContent = skillName;
        modalDesc.innerHTML = '<p><strong>Tentang ' + skillName + ':</strong></p>' +
                               '<p>' + skillDesc + '</p>' +
                               '<p style="margin-top: 15px; color: #e67e22;">Klik skill lain untuk info lebih lanjut</p>';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    for (let i = 0; i < skillBoxes.length; i++) {
        const box = skillBoxes[i];
        box.addEventListener('click', function(e) {
            e.stopPropagation();
            const skillName = this.getAttribute('data-skill');
            const skillDesc = this.getAttribute('data-desc');
            openModal(skillName, skillDesc);
        });
    }
    
    if (closeSpan) closeSpan.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') closeModal();
    });
}

function initImageHoverEffect() {
    const profileImg = document.getElementById('profileImg');
    if (!profileImg) return;
    
    profileImg.addEventListener('mouseenter', function() {
        profileImg.style.transform = 'scale(1.05)';
        profileImg.style.boxShadow = '0 10px 30px rgba(230, 126, 34, 0.3)';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        profileImg.style.transform = 'scale(1)';
        profileImg.style.boxShadow = 'none';
    });
}

// ============ GALLERY PAGE ============
function initGalleryPage() {
    // fungsi kosong untuk gallery page
}

// ============ BLOG PAGE ============
function initBlogPage() {
    renderBlogArticles();
    initBlogModal();
}

// ============ DATA ARTIKEL ============
const articles = [
    {
        id: 1,
        title: "Revolusi Kecerdasan Buatan (AI): Dari Machine Learning Menuju Agentic AI yang Mengubah Dunia",
        date: "28 Maret 2026",
        author: "Jonathan Tulle",
        excerpt: "Saat ini AI bukanlah sekedar tren melainkan sebuah revolusi industri baru. Nvidia memproyeksikan investasi infrastruktur AI global mencapai 3 sampai 4 triliun dollar hingga tahun 2030...",
        hasVideo: true,
        videoUrl: "Video/Movie1.mp4",
        videoWidth: "1000",
        videoHeight: "520",
        videoPoster: "",
        videoSource: "https://www.pexels.com/video/binary-code-digital-data-animation-31699353/",
        fullContent: '<p> Saat ini AI bukanlah sekedar tren melainkan sebuah revolusi industri baru. ' +
                     'Nvidia memproyeksikan investasi infrastruktur AI global mencapai 3 sampai 4 triliun dollar hingga tahun 2030. ' +
                     'Sementara itu, perusahaan besar seperti Amazon, Meta, Alphabet, dan Microsoft diperkirakan akan meningkatkan belanja AI mereka dari $350 miliar pada 2025 menjadi $402 miliar pada 2026.<br>' +
                     'Dari algoritma sederhana hingga sistem yang mampu menulis kode, mendiagnosis penyakit, ' +
                     'bahkan menciptakan karya seni, AI telah berkembang menjadi teknologi paling transformatif di abad ke-21. ' +
                     'Artikel ini akan membahas mengenai teknologi AI bekerja, inovasi terkini yang telah mengubah lanskap industri saat ini, ' +
                     'serta masa depan umat manusia di era kecerdasan buatan.</p>' +
                     '<ol> <li>Memahami hierarki kecerdasan buatan (AI):</li>' +
                     '<ul>' +
                     '<li>Machine Learning (ML): Teknologi yang memungkinkan komputer belajar dari data tanpa harus diprogram secara manual.</li>' +
                     '<li>Deep Learning: Evolusi dari ML yang menggunakan jaringan saraf tiruan berlapis untuk memproses data kompleks, seperti pengenalan wajah atau suara.</li>' +
                     '<li>Generative AI: Generasi terbaru (seperti chatbot AI yang sudah dikenal yaitu ChatGPT) yang tidak hanya menganalisis data, ' +
                     'tetapi mampu menciptakan hal baru seperti teks, gambar, video, hingga kode pemrograman.</li>' +
                     '</ul>' +
                     '<li>Inovasi terbaru: Agentic AI</li>' +
                     '<p>Sebelum Agentic AI hadir kita hanya mengenal AI sebagai chatbot tanya jawab, akan tetapi era sudah berubah sekarang tren menunjukkan perubahan dengan bergeser ' +
                     'ke arah Agentic AI. Agentic AI merupakan asisten digital otonom yang bisa merencanakan tugas kompleks, menggunakan berbagai aplikasi secara mandiri, ' +
                     'dan berkolaborasi dengan sistem lain untuk menyelesaikan pekerjaan manusia secara otomatis. Menariknya, biaya operasional model AI canggih ini kini turun drastis, ' +
                     'membuatnya lebih mudah diakses oleh perusahaan kecil maupun individu.</p>' +
                     '<li>Masa depan dan tantangan yang menanti</li>' +
                     '<p>Kedepannya teknologi AI akan semakin menyatu dengan kehidupan sehari-hari melalui Multi-Modal AI (mampu memproses teks, suara, dan video secara bersamaan) ' +
                     'serta melakukan komputasi kuantum. Kemajuan ini membawa dua tantangan besar, yaitu:</p>' +
                     '<ul>' +
                     '<li>Kesenjangan Keterampilan: Pekerja dituntut untuk cepat belajar (upskilling) agar bisa menggunakan AI.</li>' +
                     '<li>Risiko Psikologis: Dengan asisten AI yang semakin personal, muncul risiko keterikatan emosional manusia terhadap mesin yang perlu diantisipasi secara etis.</li>' +
                     '</ul></ol' +
                     '<p>Dengan teknologi AI yang berkembang dengan kecepatan yang tidak pernah diperkirakan sebelumnya, pada akhirnya masa depan bukanlah tentang AI melawan manusia ' +
                     'melainkan tentang manusia melakukan sebuah kolaborasi. Intinya kita harus bisa memanfaatkan kecerdasan buatan (AI) secara bijak untuk mempermudah pekerjaan kita, ' +
                     'seperti yang kita semua sudah ketahui teknologi pada dasarnya merupakan alat untuk mempermudah pekerjaan manusia bukan menggantikan manusia.</p>',
        sources: [
            { title: "Radio Republik Indonesia (RRI) - Perkembangan Teknologi AI yang Mengubah Dunia di 2025", url: "https://gayahidup.rri.co.id/bovendigoel/iptek/1799212/perkembangan-teknologi-ai-yang-mengubah-dunia-di-2025" },
            { title: "The 2025 AI Index Report", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
            { title: "McKinsey Technology Trends Outlook 2025", url: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-top-trends-in-tech" },
            { title: "What's Next for AI in 2025", url: "https://www.technologyreview.com/2025/01/08/1109188/whats-next-for-ai-in-2025/" }
        ]
    },
    {
        id: 2,
        title: "Monumen Nasional (Monas): Ikon Bersejarah di Jantung Kota Jakarta Menjadi Destinasi Favorite Wisata Sejarah di Indonesia",
        date: "28 Maret 2026",
        author: "Jonathan Tulle",
        excerpt: "Di tengah kepadatan aktivitas ibu kota, Jakarta memiliki berbagai tempat wisata yang tidak bisa dilewatkan untuk dikunjungi, salah satunya yaitu destinasi yang paling terkenal dan ikonik di Indonesia yaitu Monumen Nasional atau lebih dikenal dengan sebutan Monas...",
        hasVideo: false,
        videoUrl: null,
        fullContent: '<p>Di tengah kepadatan aktivitas ibu kota, Jakarta memiliki berbagai tempat wisata yang tidak bisa dilewatkan untuk dikunjungi, ' +
                 'salah satunya yaitu destinasi yang paling terkenal dan ikonik di Indonesia yaitu Monumen Nasional atau lebih dikenal dengan sebutan Monas. ' +
                 'Monas bukan hanya menjadi landmark ibu kota, tetapi juga menjadi simbol perjuangan bangsa Indonesia dalam meraih kemerdekaan. ' +
                 'Dengan bentuknya yang megah dan nilai sejarah yang tinggi, Monas menjadi salah satu ikon wisata nasional yang sering dikunjungi ' +
                 'oleh masyarakat dari berbagai daerah seluruh Indonesia.</p>' +
                 '<p>Tugu setinggi sekitar 132 meter ini berdiri megah di tengah Lapangan Medan Merdeka, sebuah kawasan terbuka yang luas ' +
                 'dan menjadi tempat berkumpulnya masyarakat. Pembangunan Monumen ini dimulai pada tanggal 17 Agustus 1961 dan diresmikan pada tahun 1975. ' +
                 'Di puncak Monas terdapat lidah api berlapis emas yang melambangkan semangat perjuangan yang tidak akan pernah padam. ' +
                 'Tentu Monas sebagai tempat wisata menawarkan berbagai pengalaman yang bersejarah dan tidak akan pernah dilupakan bagi para pengunjung. ' +
                 'Salah satunya adalah kesempatan untuk naik ke pelataran puncak Monas yang membuat para pengunjung dapat melihat pemandangan kota Jakarta dari ketinggian.</p>' +
                 '<p>Monas juga memiliki Museum Sejarah Indonesia yang terletak di bagian dasar dari monumen ini. ' +
                 'Di dalamnya terdapat berbagai miniatur sejarah yang menggambarkan perjalanan bangsa Indonesia mulai dari masa kerajaan di Nusantara, ' +
                 'masa penjajahan, hingga perjuangan menuju kemerdekaan. Miniatur yang dipajang dapat membantu pengunjung memahami sejarah Indonesia ' +
                 'dengan cara yang lebih baik karena dapat dilihat bukan hanya dalam bentuk tulisan. Bukan hanya di dalam Monas saja yang bisa dijadikan tempat rekreasi, ' +
                 'akan tetapi pengunjung atau wisatawan pun bisa memanfaatkan taman yang luas dan tertata rapi di area sekitar Monas sebagai kawasan untuk berjalan santai, ' +
                 'berolahraga, dan berkumpul bersama keluarga. Pada hari libur Monas biasanya dipenuhi oleh pengunjung yang datang bahkan menurut pengalaman pribadi penulis ' +
                 'lebih baik jika ingin memasuki Monas sampai pelataran atas tugu bisa berkunjung di hari biasa jangan di hari libur baik libur nasional maupun akhir pekan ' +
                 'karena antrean pengunjung bisa sangat panjang untuk naik ke atas.</p>' +
                 '<p>Dengan segala daya tarik dan nilai sejarahnya, Monumen Nasional layak menjadi salah satu destinasi wisata utama di Indonesia. ' +
                 'Monas merupakan pilihan yang bijak untuk dikunjungi bagi siapa saja yang ingin menikmati wisata sejarah sekaligus melihat Jakarta dari ketinggian.</p>',
        sources: [
            { title: "Kompasiana - Monas : Ikon Bersejarah di Jakarta", url: "https://www.kompasiana.com/nicholaskennetheddyson5390/69c2a80eed64154a80194a04/monas-ikon-bersejarah-di-jakarta" }
        ]
    },
    {
        id: 3,
        title: "Pola Hidup Sehat: Meningkatkan Kualitas Hidup",
        date: "28 Maret 2026",
        author: "Jonathan Tulle",
        excerpt: "Tidak dapat dibantah kesehatan dari dulu merupakan aspek terpenting dalam kehidupan manusia. Dengan tubuh yang sehat, seseorang dapat menjalankan aktivitas sehari-hari secara optimal...",
        hasVideo: false,
        videoUrl: null,
        fullContent: '<p> Tidak dapat dibantah kesehatan dari dulu merupakan aspek terpenting dalam kehidupan manusia. ' +
                 'Dengan tubuh yang sehat, seseorang dapat menjalankan aktivitas sehari-hari secara optimal, bekerja dengan produktif, ' +
                 'serta menikmati hidup dengan lebih baik. Akan tetapi, di era modern saat ini banyak orang mulai mengabaikan ' +
                 'atau meremehkan pentingnya menjaga kesehatan mulai dari penggunaan gadget atau laptop secara berlebihan, ' +
                 'pola makan tidak teratur, kurang olahraga, begadang, pola makan serba instan, dan stress berlebihan. ' +
                 'Pola hidup sehat merupakan gaya hidup yang memperhatikan keseimbangan antara asupan nutrisi, aktivitas fisik, ' +
                 'istirahat yang cukup, kebersihan, serta kesehatan mental. Kebiasaan-kebiasaan ini akan meningkatkan kualitas hidup ' +
                 'dan mencegah berbagai gangguan kesehatan.</p>' +
                 '<ol>' +
                 '<li><strong>Pola makan dengan gizi seimbang</strong>' +
                 '<p>Apa yang kita makan sangat menentukan kondisi kesehatan tubuh. Makanan merupakan sumber energi utama bagi tubuh. ' +
                 'Kebiasaan mengonsumsi makanan tinggi gula, garam, dan lemak dapat meningkatkan risiko berbagai penyakit, ' +
                 'seperti obesitas, diabetes, dan penyakit jantung. Oleh karena itu, penerapan gizi seimbang dengan mengonsumsi karbohidrat, ' +
                 'protein, lemak, sayur, dan buah dalam porsi yang cukup menjadi langkah penting yang dapat dilakukan siapa saja. ' +
                 'Pola makan sehat juga tidak harus mahal atau rumit, cukup dimulai dengan kebiasaan sederhana seperti sarapan, ' +
                 'makan tepat waktu, serta mengurangi konsumsi makanan instan dan minuman manis.</p></li>' +
                 '<li><strong>Rutin berolahraga</strong>' +
                 '<p>Olahraga merupakan bagian penting dari pola hidup sehat. Aktivitas fisik membantu menjaga kebugaran tubuh, ' +
                 'meningkatkan fungsi jantung, memperkuat otot dan tulang, serta membantu mengontrol berat badan. ' +
                 'Selain manfaat fisik, olahraga juga dapat memperbaiki suasana hati dan mengurangi stres. ' +
                 'Olahraga tidak harus selalu dilakukan di tempat khusus atau dengan intensitas tinggi. ' +
                 'Jalan kaki, bersepeda, senam, jogging, atau melakukan peregangan ringan di rumah juga termasuk aktivitas yang bermanfaat. ' +
                 'Yang terpenting adalah melakukannya secara rutin.</p></li>' +
                 '<li><strong>Istirahat yang cukup</strong>' +
                 '<p>Tubuh membutuhkan waktu untuk beristirahat agar dapat memulihkan energi dan memperbaiki sel-sel yang rusak. ' +
                 'Kurang tidur dapat menyebabkan tubuh mudah lelah, sulit berkonsentrasi, menurunnya daya tahan tubuh, ' +
                 'dan meningkatkan risiko berbagai penyakit. Orang dewasa umumnya membutuhkan tidur sekitar 7 sampai 9 jam setiap malam. ' +
                 'Tidur yang cukup dan berkualitas akan membantu tubuh dan pikiran tetap segar sehingga aktivitas sehari-hari ' +
                 'dapat berjalan dengan lebih baik.</p></li>' +
                 '<li><strong>Minum air putih yang cukup</strong>' +
                 '<p>Air memiliki peran penting dalam menjaga keseimbangan fungsi tubuh. Kekurangan cairan dapat menyebabkan dehidrasi, ' +
                 'lemas, pusing, dan menurunnya konsentrasi. Oleh karena itu, kebutuhan cairan tubuh harus dipenuhi setiap hari. ' +
                 'Secara umum, dianjurkan untuk minum sekitar 8 gelas air per hari, meskipun kebutuhan setiap orang bisa berbeda ' +
                 'tergantung aktivitas, usia, dan kondisi tubuh.</p></li>' +
                 '<li><strong>Mengelola stress</strong>' +
                 '<p>Kesehatan mental sama pentingnya dengan kesehatan fisik. Stres yang tidak dikelola dengan baik dapat berdampak pada tubuh, ' +
                 'seperti menyebabkan gangguan tidur, tekanan darah meningkat, dan menurunkan daya tahan tubuh. ' +
                 'Oleh karena itu, penting untuk memiliki cara yang sehat dalam menghadapi tekanan hidup. ' +
                 'Beberapa cara mengelola stres antara lain berbicara dengan orang terdekat, melakukan hobi, beribadah, ' +
                 'meditasi, relaksasi, serta mengatur waktu dengan baik. Jika diperlukan, seseorang juga dapat mencari bantuan profesional.</p></li>' +
                 '<li><strong>Menjaga kebersihan diri serta lingkungan</strong>' +
                 '<p>Kebersihan adalah bagian penting dari kesehatan. Menjaga kebersihan diri seperti mandi secara teratur, ' +
                 'mencuci tangan sebelum makan, dan menjaga kebersihan gigi dapat membantu mencegah infeksi dan penyakit. ' +
                 'Selain itu, lingkungan yang bersih juga mendukung kesehatan yang lebih baik. Kebiasaan sederhana seperti membuang sampah pada tempatnya, ' +
                 'membersihkan rumah, dan memastikan sirkulasi udara yang baik dapat membantu menciptakan lingkungan yang sehat dan nyaman.</p></li>' +
                 '</ol>' +
                 '<p>Pada akhirnya, pola makan sehat termasuk minum air putih (bukan yang berwarna ataupun yang memiliki kandungan gula) yang cukup, ' +
                 'rutin olahraga atau beraktivitas fisik yang cukup dan secara teratur, menjaga kebersihan diri dan lingkungan, ' +
                 'serta perhatian terhadap kesehatan mental merupakan kunci utama untuk menjalani hidup yang lebih sehat dan berkualitas ' +
                 'di tengah tantangan era modern. Dalam jangka panjang, pola hidup sehat dapat mengurangi biaya pengobatan ' +
                 'karena risiko terkena penyakit menjadi lebih rendah. Hal ini tentu berdampak positif pada kesejahteraan individu maupun keluarga. ' +
                 'Dengan kata lain, pola hidup sehat bukan hanya investasi bagi tubuh, tetapi juga bagi masa depan.</p>',
        sources: [
            { title: "Kompasiana - Pola Hidup Sehat di Era Modern", url: "https://www.kompasiana.com/silviyanaanggraini7186/696e0e9b34777c3187171fb8/pola-hidup-sehat-di-era-modern" }
        ]
    },
    {
        id: 4,
        title: "Libur Panjang 18 Sampai 24 Maret 2026: Nggak Mudik, Nggak Healing, Tapi Tetap Menyenangkan",
        date: "28 Maret 2026",
        author: "Jonathan Tulle",
        excerpt: "Tanggal merah yang jika dihitung jumlah harinya bisa sampai satu minggu biasanya banyak yang mudik balik ke kampung halamannya, jalan jalan, kumpul keluarga, atau sekedar healing ke tempat wisata yang di inginkan atau yang sedang viral...",
        hasVideo: false,
        videoUrl: null,
        fullContent: '<p> Tanggal merah yang jika dihitung jumlah harinya bisa sampai satu minggu biasanya banyak yang mudik balik ke kampung halamannya, ' +
                 'jalan jalan, kumpul keluarga, atau sekedar healing ke tempat wisata yang di inginkan atau yang sedang viral. ' +
                 'Tapi realitanya tidak semua orang menjalani liburan dengan cara seperti itu. Ada juga yang memilih atau memang harus tetap tinggal di rumahnya, ' +
                 'di kos, atau kontrakan. Nah tahun ini di libur dari cuti bersama hari suci Nyepi di tanggal 18 Maret sampai cuti bersama Idul Fitri di tanggal 24 Maret ' +
                 'saya termasuk salah satu orang yang tidak mudik atau pulang kampung. Tidak ada agenda pulang kampung, tidak ada agenda ke tempat wisata, ' +
                 'intinya tidak ada foto foto estetik di tempat liburan. Awalnya memang terasa biasa saja, bahkan sempat muncul rasa bosan ' +
                 'karena melihat berita di televisi begitu banyaknya orang yang mudik dan pergi ke tempat wisata. ' +
                 'Tapi setelah dijalani ternyata diam di kos juga bisa menjadi momen yang tenang, nyaman dan penuh makna.</p>' +
                 '<p>Salah satu hal yang langsung terasa selama libur panjang yakni suasana kos yang berubah drastis menjadi sepi karena ada yang pulang kampung. ' +
                 'Biasanya ramai oleh suara orang lalu lalang, dan suara pintu kamar dibuka dan ditutup seketika saat itu suasana jadi jauh lebih sepi. ' +
                 'Awalnya suasana ini terasa aneh, tetapi lama kelamaan justru ada rasa nyaman di dalam ketenangan itu, ' +
                 'saya jadi tidak terasa terganggu seperti saat hari hari biasa. Suasana yang saya rasakan saat itu yaitu ketenangan, ' +
                 'tidak berisik dan cocok untuk beristirahat dari rutinitas sebelum liburan.</p>' +
                 '<p>Di hari libur ini saya benar benar memanfaatkannya dengan baik yaitu dengan cara beristirahat dengan cukup, ' +
                 'menata kamar menjadi lebih rapi bahkan mengubah posisi barang barang agar suasana kamar terasa baru, ' +
                 'memanfaatkan waktu libur ini dengan belajar hal baru yang terkait dengan materi yang saya sukai. ' +
                 'Bahkan saat hari libur ini saya menjadi bisa bangun lebih siang dari hari biasanya. Keuntungan lain yaitu saya tidak perlu merasakan capek di perjalanan ' +
                 'dan orang tua saya bisa menghemat uang dengan tidak perlu membiayai saya untuk pulang kampung. ' +
                 'Dan rasanya saya punya lebih banyak waktu yang bisa saya pakai sesuka hati mulai dari menonton film atau serial di Netflix setelah menata kamar. ' +
                 'Selama liburan walaupun saya tidak mudik atau berwisata ke tempat wisata saya tetap bahagia ' +
                 'dan saya mulai belajar bahwa kebahagiaan itu dari dalam hati bukan dari luar atau kondisi.</p>' +
                 '<p>Pada intinya saya memahami bahwa liburan tidak selalu diisi dengan pergi jauh, dengan tidak pulang kampung saja saya masih bisa bersenang senang ' +
                 'dengan menikmati waktu yang ada dengan melakukan hal hal yang disukai dan selama liburan juga saya bisa memperbanyak ilmu dengan belajar dari internet. ' +
                 'Serta liburan ini memberikan saya pelajaran bahwa menikmati waktu sendiri juga penting.</p>',
        sources: []
    }
];

// ============ RENDER ARTIKEL ============
function renderBlogArticles() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const card = document.createElement('article');
        card.className = 'blog-card';
        card.setAttribute('data-id', article.id);
        
        let cardHTML = '';
        cardHTML += '<h3 class="blog-title">' + article.title + '</h3>';
        cardHTML += '<div class="blog-meta">' + article.date + ' | ' + article.author + '</div>';
        
        if (article.hasVideo && article.videoUrl) {
            cardHTML += '<div class="video-container">';
            cardHTML += '<video width="100%" controls poster="' + article.videoPoster + '">';
            cardHTML += '<source src="' + article.videoUrl + '" type="video/mp4">';
            cardHTML += 'Browser tidak mendukung video tag';
            cardHTML += '</video>';
            cardHTML += '</div>';
            cardHTML += '<div class="video-source">';
            cardHTML += 'Sumber video: <a href="' + article.videoSource + '" target="_blank">' + article.videoSource + '</a>';
            cardHTML += '</div>';
        }
        
        cardHTML += '<div class="article-content">';
        cardHTML += '<p>' + article.excerpt + '</p>';
        cardHTML += '</div>';
        cardHTML += '<button class="read-more" data-id="' + article.id + '">Baca Selengkapnya</button>';
        
        if (article.sources && article.sources.length > 0) {
            cardHTML += '<div class="sources">';
            cardHTML += '<strong>Sumber:</strong>';
            cardHTML += '<ol>';
            for (let j = 0; j < article.sources.length; j++) {
                let sourceTitle = article.sources[j].title;
                if (sourceTitle.length > 50) {
                    sourceTitle = sourceTitle.substring(0, 50) + '...';
                }
                cardHTML += '<li><a href="' + article.sources[j].url + '" target="_blank">' + sourceTitle + '</a></li>';
            }
            cardHTML += '</ol>';
            cardHTML += '</div>';
        }
        
        card.innerHTML = cardHTML;
        blogGrid.appendChild(card);
    }
    
    const readMoreButtons = document.querySelectorAll('.read-more');
    for (let i = 0; i < readMoreButtons.length; i++) {
        const btn = readMoreButtons[i];
        btn.addEventListener('click', function() {
            const articleId = parseInt(this.getAttribute('data-id'));
            openArticleModal(articleId);
        });
    }
}

// ============ MODAL BACA SELENGKAPNYA ============
function initBlogModal() {
    const modal = document.getElementById('articleModal');
    const closeSpan = document.querySelector('.close-modal');
    const closeBtn = document.getElementById('modalCloseBtn');
    
    if (!modal) return;
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (closeSpan) closeSpan.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') closeModal();
    });
}

function openArticleModal(articleId) {
    let article = null;
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].id === articleId) {
            article = articles[i];
            break;
        }
    }
    
    if (!article) return;
    
    const modal = document.getElementById('articleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = article.title;
    
    let contentHTML = '';
    contentHTML += '<div class="blog-meta" style="margin-bottom: 15px;">' + article.date + ' | ' + article.author + '</div>';
    
    if (article.hasVideo && article.videoUrl) {
        contentHTML += '<div class="modal-video">';
        contentHTML += '<video width="100%" controls poster="' + article.videoPoster + '">';
        contentHTML += '<source src="' + article.videoUrl + '" type="video/mp4">';
        contentHTML += 'Browser tidak mendukung video tag';
        contentHTML += '</video>';
        contentHTML += '<p style="font-size: 0.85em; color: #666; margin-top: 8px;">Sumber video: <a href="' + article.videoSource + '" target="_blank">' + article.videoSource + '</a></p>';
        contentHTML += '</div>';
    }
    
    contentHTML += article.fullContent;
    
    if (article.sources && article.sources.length > 0) {
        contentHTML += '<div class="sources-list">';
        contentHTML += '<strong>Sumber Referensi:</strong>';
        contentHTML += '<ol style="margin-top: 10px; margin-left: 20px;">';
        for (let i = 0; i < article.sources.length; i++) {
            contentHTML += '<li><a href="' + article.sources[i].url + '" target="_blank">' + article.sources[i].title + '</a></li>';
        }
        contentHTML += '</ol>';
        contentHTML += '</div>';
    }
    
    modalBody.innerHTML = contentHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ============ CONTACT PAGE ============
function initContactPage() {
    initContactForm();
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    function showToast(message) {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(function() {
            toast.remove();
        }, 3000);
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showToast('Semua field harus diisi');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showToast('Email tidak valid');
            return;
        }
        
        showToast('Pesan berhasil dikirim, terima kasih ' + name);
        contactForm.reset();
    });
}