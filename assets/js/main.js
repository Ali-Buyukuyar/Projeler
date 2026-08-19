/* =========================================================
   ALI BUYUKUYAR — PORTFOLIO
   Data-driven project sections + interactions
   ========================================================= */

(function(){
  "use strict";

  /* ---------------------------------------------------
     1. PROJECT DATA
     Tek yerden düzenlenebilir proje veri kümesi.
     images: assets/img/<isim>.webp altında bulunmalı
  --------------------------------------------------- */
  const PROJECTS = [
    {
      tag: "SYS-01",
      title: "MDB–SQL Data Viewer",
      subtitle: "SQL (.ACCDB) veritabanı yönetim aracı",
      desc: "Excel VBA ve SQL ile geliştirilen bu araç, .ACCDB formatlı veritabanlarının sıfırdan oluşturulmasını ve içeriğinin doğrudan Excel arayüzünden görüntülenip düzenlenmesini sağlar.",
      bullets: [
        "SQL (.ACCDB) formatlı veritabanı dosyaları oluşturur ve düzenler",
        "Tablo, sütun ve satır işlemlerini tek panelden yönetir",
        "Seçili tabloyu anlık önizleme ile listeler"
      ],
      tech: ["Excel VBA", "SQL"],
      images: [
        { src: "mdb-sql-viewer", caption: "MDB–SQL Data Viewer — tablo ve veri önizleme paneli" }
      ]
    },
    {
      tag: "SYS-02",
      title: "Montaj V4 — Üretim Veri Takip Sistemi",
      subtitle: "Vardiya, verim ve operasyon takibi bir arada",
      desc: "Üretim hattındaki üretim adedi, hurda adedi ve kayıp zaman gibi verileri anlık kaydeden; bu verilerden yola çıkarak personel bazlı günlük / aylık / yıllık verim hesaplayan uçtan uca bir montaj takip platformu.",
      bullets: [
        "Üretim adedi, hurda adedi ve kayıp zaman verilerinin kaydını tutar",
        "Personellerin günlük, aylık ve yıllık verimlerini otomatik hesaplar",
        "Operasyon sürelerini takip ederek MÇF bilgilerini günceller",
        "Yöneticiler için filtrelenebilir, Excel'e aktarılabilir detaylı rapor modülü sunar",
        "Açık (A) / Bitmiş (B) / Kapalı (K) etiketleriyle planlama birimine entegre olur",
        "Mola saatlerine göre kayıp zamanı hesaplar, teknik resmi sunucudan çekip gösterir",
        "Kişi bazlı günlük / aylık / yıllık verim kartları oluşturur"
      ],
      tech: ["Excel VBA"],
      images: [
        { src: "veri-takip-4-1", caption: "Data Entry — üretim, hurda ve verim girişi" },
        { src: "veri-takip-4-2", caption: "Yöneticiler için detaylı rapor modülü" },
        { src: "veri-takip-4-3", caption: "Mola saatleri ve teknik resim görüntüleme modülleri" },
        { src: "veri-takip-4-4", caption: "Kişi bazlı verim takip kartı" }
      ]
    },
    {
      tag: "SYS-03",
      title: "Depo Stok Kayıt Sistemi",
      subtitle: "Depo giriş / çıkış ve raf yönetimi",
      desc: "Depoya giren ve üretime çıkan malzemelerin kaydını tutan, SQL üzerinden planlama birimiyle entegre çalışan stok ve raf yönetim uygulaması.",
      bullets: [
        "Depoya giren ve üretime çıkartılan malzemelerin kaydını tutar",
        "SQL ile veri aktarımı yaparak planlama birimiyle entegre olur",
        "Ürünlerin takım bütünlüğünü kontrol ederek kayıtsız ürün analizi yapar",
        "Boş / dolu rafları sıralayarak raf doluluk oranını kontrol eder"
      ],
      tech: ["Excel VBA", "SQL"],
      images: [
        { src: "depo-stok-kayit", caption: "Depo stok kayıt ve raf kontrol ekranı" }
      ]
    },
    {
      tag: "SYS-04",
      title: "Vardiya & İş Emri Takip Paneli",
      subtitle: "Sahadan yönetime canlı üretim akışı",
      desc: "Operatörlerin vardiya bazlı işi başlatıp bitirdiği, üretilen parçalara ait iş emirlerinin gerçek zamanlı izlendiği iki modüllü saha uygulaması.",
      bullets: [
        "Üretim adedi, hurda adedi ve kayıp zaman verilerinin kaydını tutar",
        "Personel verimlerini günlük / aylık / yıllık olarak hesaplar",
        "Operasyon sürelerini takip ederek MÇF bilgilerini günceller",
        "Güncel iş emirlerini arama ve filtreleme ile anlık listeler"
      ],
      tech: ["Excel VBA"],
      images: [
        { src: "veri-takip-2", caption: "Vardiya paneli — üretim başlat / bitir akışı" },
        { src: "veri-takip-3", caption: "Güncel iş emirleri ve AYD boru işleme takibi" }
      ]
    },
    {
      tag: "SYS-05",
      title: "İş Emri Çıkartma & Rota–Resim Modülü",
      subtitle: "Planlamadan depoya otomatik iş emri üretimi",
      desc: "Planlama biriminin oluşturduğu iş emirlerini bileşen, operasyon, adet ve teknik resim bilgileriyle otomatik çıktı haline getiren; ürün rotasını ve teknik resmi tek ekranda gösteren yardımcı modül.",
      bullets: [
        "Bileşenleri, operasyon sırasını, adet ve diğer bilgileri çekerek iş emrini oluşturur",
        "Her bileşenin arkasına sunucudan teknik resmi çekip yapıştırarak yazdırır",
        "Ürün rotasını ve teknik resmi tek pencerede gösterir"
      ],
      tech: ["Excel VBA"],
      images: [
        { src: "is-emri-cikartma", caption: "İş emri çıktısı — bileşen ve operasyon listesi" },
        { src: "rota-resim", caption: "Rota ve teknik resim görüntüleme modülü" }
      ]
    },
    {
      tag: "SYS-06",
      title: "STP — Sevkiyat Takip Platformu",
      subtitle: "Sevkten SQL'e, SQL'den rapora",
      desc: "Sevkiyat biriminin yaptığı sevkleri SQL üzerinden kaydeden, ilgili birimlere anlık ileten ve gelişmiş bir hata günlüğüyle (error log) desteklenen üç modüllü sevkiyat sistemi.",
      bullets: [
        "Sevkleri kayıt altına alarak SQL ile ilgili birimlere iletir",
        "Sevk kayıtları SQL üzerinden anlık olarak takip ekranına yansır",
        "Gelişmiş Error Log modülü, hatayı kod ve zaman detayıyla yöneticiye e-postayla bildirir ve yerel log tutar"
      ],
      tech: ["Excel VBA", "SQL"],
      images: [
        { src: "stp-sevk", caption: "STP — sevk kaydı ve ürün bazlı sekmeler" },
        { src: "stp-log", caption: "Gelişmiş Error Log modülü" },
        { src: "stp-takip", caption: "STP Viewer — anlık sevkiyat takip ekranı" }
      ]
    },
    {
      tag: "SYS-07",
      title: "KKP — Kalite Kontrol Paneli",
      subtitle: "Birim, görev ve devamsızlık takibi",
      desc: "Birim personelinin görevlerini ve devamsızlık kayıtlarını tek panelden yöneten, CRM girişine ve toplu Excel aktarımına imkân tanıyan yönetim aracı.",
      bullets: [
        "Personellerin ve yapılacak görevlerin kayıt-takibini yapar",
        "Görev oluşturma, kapatma ve aciliyet seviyesi ekleme işlemlerini yürütür",
        "Personel devamsızlık kayıtlarını tarih ve gerekçeleriyle tutar"
      ],
      tech: ["Excel VBA"],
      images: [
        { src: "kkp-giris", caption: "KKP — Kalite Kontrol Paneli giriş ekranı" },
        { src: "kkp-gorev", caption: "Görev oluşturma ve takip ekranı" },
        { src: "kkp-devamsizlik", caption: "Devamsızlık takip ekranı" }
      ]
    },
    {
      tag: "SYS-08",
      title: "Stok, Satış ve Çek / Senet Takip Sistemi",
      subtitle: "Uçtan uca ticari takip",
      desc: "Firmanın satışlarını, çek-senet hareketlerini ve cari bakiyelerini tek noktadan yöneten, firma bazlı özel raporlama sunan ticari takip yazılımı.",
      bullets: [
        "Firmalara yapılan satışların kaydını tutar",
        "Çek / senet takibini ve yaklaşan vade uyarılarını yönetir",
        "Firma bazlı alacak–verecek bakiye raporları üretir"
      ],
      tech: ["Excel VBA"],
      images: [
        { src: "goktas-giris", caption: "Uygulama giriş ekranı" },
        { src: "satis-modulu", caption: "Satış modülü — firma bazlı satış kaydı" },
        { src: "bakiye-modulu", caption: "Bakiye modülü — firmaya özel raporlama" }
      ]
    },
    {
      tag: "SYS-09",
      title: "Hurda Analiz & Raporlama Sistemi",
      subtitle: "Ham veriden yönetim kararına",
      desc: "Şirket içi birimlerden gelen hurda verilerini analiz ederek zarar / maliyet raporları üreten, otomatik e-posta entegrasyonuyla ilgili birimleri anlık bilgilendiren raporlama motoru.",
      bullets: [
        "Hurda verilerini analiz ederek yöneticiler için zarar / maliyet raporu üretir",
        "Otomatik mail sistemiyle sorumlulara bilgilendirme ve raporlama gönderir",
        "Hata koduna göre otomatik yorum üretir, ürün tarihçesini otomatik oluşturur",
        "Departman / alt departman kırılımında maliyet raporlaması yapar"
      ],
      tech: ["Excel VBA"],
      images: [
        { src: "hurda-arayuz", caption: "Hurda & Tashih Raporlama Programı — ana arayüz" },
        { src: "hurda-rapor-1", caption: "Hata kodu ve hatlara göre grafiksel rapor" },
        { src: "hurda-rapor-2", caption: "Ürün tarihçesi ve otomatik yorum modülü" },
        { src: "hurda-rapor-4", caption: "Departman / alt departman kırılımlı rapor" }
      ]
    }
  ];

  const IMG_BASE = "assets/img/";
  const IMG_EXT = ".webp";

  /* ---------------------------------------------------
     2. RENDER PROJECTS
  --------------------------------------------------- */
  const listEl = document.getElementById("projectList");
  const galleryState = []; // { images, index, container }

  PROJECTS.forEach((p, pi) => {
    const section = document.createElement("article");
    section.className = "project reveal" + (pi % 2 === 1 ? " is-reversed" : "");
    section.id = "proj-" + pi;

    const bulletsHTML = p.bullets.map(b => `<li>${b}</li>`).join("");
    const techHTML = p.tech.map(t => `<span class="tech-pill">${t}</span>`).join("");

    section.innerHTML = `
      <div class="project-info">
        <span class="project-tag">${p.tag}</span>
        <h3 class="project-title">${p.title}</h3>
        <span class="project-subtitle">${p.subtitle}</span>
        <p class="project-desc">${p.desc}</p>
        <ul class="project-bullets">${bulletsHTML}</ul>
        <div class="project-tech">${techHTML}</div>
      </div>
      <div class="project-media">
        <div class="panel-frame">
          <div class="panel-frame-bar">
            <span class="panel-dot"></span><span class="panel-dot"></span><span class="panel-dot"></span>
            <span class="panel-frame-label"><span class="status-dot"></span>CANLI GÖRÜNÜM</span>
          </div>
          <div class="panel-screen" data-gallery="${pi}">
            <span class="panel-scanline" aria-hidden="true"></span>
            <img src="${IMG_BASE}${p.images[0].src}${IMG_EXT}" alt="${p.title} — ${p.images[0].caption}" loading="lazy">
          </div>
          ${p.images.length > 1 ? `<div class="gallery-dots" data-dots="${pi}"></div>` : ""}
          <div class="gallery-caption" data-caption="${pi}">${p.images[0].caption}</div>
        </div>
      </div>
    `;
    listEl.appendChild(section);

    galleryState[pi] = { images: p.images, index: 0, title: p.title };

    // build dots
    if (p.images.length > 1) {
      const dotsWrap = section.querySelector(`[data-dots="${pi}"]`);
      p.images.forEach((img, ii) => {
        const dot = document.createElement("button");
        dot.className = "gallery-dot" + (ii === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", `Görsel ${ii + 1}`);
        dot.addEventListener("click", () => setGalleryImage(pi, ii));
        dotsWrap.appendChild(dot);
      });
    }
  });

  function setGalleryImage(pi, ii, openLightbox){
    const state = galleryState[pi];
    state.index = ((ii % state.images.length) + state.images.length) % state.images.length;
    const img = state.images[state.index];
    const screen = document.querySelector(`.panel-screen[data-gallery="${pi}"] img`);
    const caption = document.querySelector(`[data-caption="${pi}"]`);
    if (screen){
      screen.src = IMG_BASE + img.src + IMG_EXT;
      screen.alt = state.title + " — " + img.caption;
    }
    if (caption) caption.textContent = img.caption;
    const dotsWrap = document.querySelector(`[data-dots="${pi}"]`);
    if (dotsWrap){
      [...dotsWrap.children].forEach((d, di) => d.classList.toggle("is-active", di === state.index));
    }
    if (openLightbox) openLightboxAt(pi, state.index);
  }

  /* ---------------------------------------------------
     3. LIGHTBOX
  --------------------------------------------------- */
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbCaption = document.getElementById("lightboxCaption");
  let currentPi = null;

  function openLightboxAt(pi, ii){
    currentPi = pi;
    const state = galleryState[pi];
    state.index = ii;
    renderLightbox();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function renderLightbox(){
    const state = galleryState[currentPi];
    const img = state.images[state.index];
    lbImg.src = IMG_BASE + img.src + IMG_EXT;
    lbImg.alt = state.title + " — " + img.caption;
    lbCaption.textContent = `${state.title} — ${img.caption}  (${state.index + 1}/${state.images.length})`;
  }
  function closeLightbox(){
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function stepLightbox(dir){
    if (currentPi === null) return;
    const state = galleryState[currentPi];
    setGalleryImage(currentPi, state.index + dir, false);
    state.index = ((state.index + dir) % state.images.length + state.images.length) % state.images.length;
    renderLightbox();
  }

  document.addEventListener("click", (e) => {
    const screen = e.target.closest(".panel-screen");
    if (screen){
      const pi = Number(screen.dataset.gallery);
      openLightboxAt(pi, galleryState[pi].index);
    }
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  /* ---------------------------------------------------
     4. SCROLL REVEAL
  --------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  revealEls.forEach(el => io.observe(el));

  /* ---------------------------------------------------
     5. HERO STAT COUNTERS
  --------------------------------------------------- */
  const counters = document.querySelectorAll(".stat-num");
  const counted = new WeakSet();
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted.has(entry.target)){
        counted.add(entry.target);
        animateCount(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));

  function animateCount(el){
    const target = Number(el.dataset.count || 0);
    const dur = 1100;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------------------------------------------------
     6. NAV: scrollspy + mobile toggle + scroll progress
  --------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => { nav.classList.remove("is-open"); navToggle.setAttribute("aria-expanded","false"); });
  });

  const navLinks = [...document.querySelectorAll(".nav-links a[data-nav]")];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute("href")));
  const underline = document.getElementById("navUnderline");

  function updateUnderline(link){
    if (!link){ underline.style.opacity = 0; return; }
    const navRect = document.querySelector(".nav-inner").getBoundingClientRect();
    const r = link.getBoundingClientRect();
    underline.style.left = (r.left - navRect.left) + "px";
    underline.style.width = r.width + "px";
    underline.style.opacity = 1;
  }

  const scrollProgress = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");
  const toTopProgress = document.getElementById("toTopProgress");
  const RING = 107; // 2 * PI * 17 (approx, matches CSS dasharray)

  function onScroll(){
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const pct = height > 0 ? (scrollTop / height) : 0;

    scrollProgress.style.width = (pct * 100) + "%";
    toTopProgress.style.strokeDashoffset = String(RING - pct * RING);
    toTop.classList.toggle("is-visible", scrollTop > 700);

    // active section
    let activeLink = null;
    const probe = scrollTop + window.innerHeight * 0.35;
    sections.forEach((sec, i) => {
      if (!sec) return;
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (probe >= top && probe < bottom) activeLink = navLinks[i];
    });
    navLinks.forEach(l => l.classList.toggle("active", l === activeLink));
    updateUnderline(activeLink);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("load", onScroll);
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

})();
