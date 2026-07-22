import { About, Blog, Cv, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { LocalizedText } from "@/i18n/LanguageProvider";
const person: Person = {
  firstName: "Mehmet Ali",
  lastName: "Gümüşler",
  name: `Mehmet Ali Gümüşler`,
  role: "Computer Engineering Student · AI & Software Developer",
  avatar: "/images/avatar.jpg",
  email: "gumuslermehmetali@gmail.com",
  location: "Europe/Istanbul",
  languages: ["Turkish", "English (B1)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My newsletter about AI, cybersecurity, and autonomous systems</>,
};

const social: Social = [
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/mehmetaligmslr",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mehmetaligumusler/",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mehmetaligumusler",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.name} · AI & Software Portfolio`,
  description: "AI, cybersecurity, computer vision and full-stack projects by Mehmet Ali Gümüşler.",
  headline: (
    <LocalizedText
      en={<>Building reliable <span className="text-gradient">AI and software systems.</span></>}
      tr={<>Güvenilir <span className="text-gradient">yapay zekâ ve yazılım sistemleri</span> geliştiriyorum.</>}
    />
  ),
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      <LocalizedText
        en={<>I&apos;m {person.firstName}, a Computer Engineering student focused on <strong>AI/ML</strong>, <strong>cybersecurity</strong>, <strong>computer vision</strong>, and production-minded software. I turn research problems into measurable, deployable systems.</>}
        tr={<>Ben {person.firstName}; <strong>yapay zekâ</strong>, <strong>siber güvenlik</strong>, <strong>bilgisayarlı görü</strong> ve üretim odaklı yazılımlar üzerine çalışan bir Bilgisayar Mühendisliği öğrencisiyim. Araştırma problemlerini ölçülebilir ve uygulanabilir sistemlere dönüştürüyorum.</>}
      />
</>
  ),
};

const about: About = {
  path: "/about",
  label: "Profile",
  title: `About – ${person.name}`,
  description: `Experience, education, awards and technical skills of ${person.name}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "About Me",
    description: (
      <>
        <LocalizedText
          en={<>I am a Computer Engineering student specializing in artificial intelligence, computer vision, cybersecurity, and autonomous systems. My experience spans AI-based intrusion detection, telecommunications network quality, TÜBİTAK research, and TEKNOFEST engineering competitions. I enjoy building systems that connect rigorous experimentation with real-world deployment.</>}
          tr={<>Yapay zekâ, bilgisayarlı görü, siber güvenlik ve otonom sistemler alanlarında uzmanlaşan bir Bilgisayar Mühendisliği öğrencisiyim. Yapay zekâ tabanlı saldırı tespiti, telekomünikasyon ağ kalitesi, TÜBİTAK araştırmaları ve TEKNOFEST mühendislik yarışmalarında deneyim sahibiyim. Titiz deneysel çalışmaları gerçek dünyada çalışan sistemlere dönüştürmeyi seviyorum.</>}
        />
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Turkcell İletişim Hizmetleri A.Ş.",
        timeframe: <LocalizedText en="Jul 2026 - Present" tr="Tem 2026 - Devam ediyor" />,
        role: <LocalizedText en="Summer Intern · Network Information & Quality Solutions" tr="Yaz Stajyeri · Network Information & Quality Solutions" />,
        achievements: [
          <LocalizedText en="Continuing with the Network Information & Quality Solutions team in Istanbul." tr="İstanbul'da Network Information & Quality Solutions ekibiyle devam ediyorum." />,
          <LocalizedText en="Building on my prior internship at the same department, deepening network information, service quality, and telecommunications workflows." tr="Aynı departmandaki önceki stajımın üzerine ağ bilgisi, hizmet kalitesi ve telekomünikasyon iş akışlarında uzmanlığımı derinleştiriyorum." />,
        ],
        images: [],
      },
      {
        company: "Turkcell İletişim Hizmetleri A.Ş.",
        timeframe: <LocalizedText en="Feb 2026 - May 2026" tr="Şub 2026 - May 2026" />,
        role: <LocalizedText en="Long-Term Intern · Network Information & Quality Solutions" tr="Uzun Dönem Stajyer · Network Information & Quality Solutions" />,
        achievements: [
          <LocalizedText en="Worked with the Network Information & Quality Solutions department in Istanbul." tr="İstanbul'da Network Information & Quality Solutions departmanında görev aldım." />,
          <LocalizedText en="Gained hands-on experience with network information, service quality, and large-scale telecommunications workflows." tr="Ağ bilgisi, hizmet kalitesi ve büyük ölçekli telekomünikasyon iş akışlarında uygulamalı deneyim kazandım." />,
        ],
        images: [],
      },
      {
        company: "Renewasoft Energy & Software Inc.",
        timeframe: <LocalizedText en="Jun 2025 - Sep 2025" tr="Haz 2025 - Eyl 2025" />,
        role: <LocalizedText en="AI & Cybersecurity Intern" tr="Yapay Zekâ ve Siber Güvenlik Stajyeri" />,
        achievements: [
          <>
            <LocalizedText en="Contributed to R&D activities on AI-based cybersecurity, focusing on adversarial attack detection and defense methods." tr="Yapay zekâ tabanlı siber güvenlik alanında adversarial saldırı tespiti ve savunma yöntemlerine odaklanan Ar-Ge çalışmalarına katkı sağladım." />
          </>,
          <>
            <LocalizedText en="Contributed to attack detection systems using DNN, CNN, LSTM, and Autoencoder architectures on the CICIoT2023 dataset." tr="CICIoT2023 veri kümesi üzerinde DNN, CNN, LSTM ve Autoencoder mimarileri kullanan saldırı tespit sistemlerine katkı sağladım." />
          </>,
          <>
            <LocalizedText en="Performed data preprocessing (labeling, cleaning, feature engineering, normalization) and hyperparameter optimization." tr="Veri etiketleme, temizleme, özellik mühendisliği, normalizasyon ve hiperparametre optimizasyonu çalışmaları gerçekleştirdim." />
          </>,
          <>
            <LocalizedText en="Analyzed model performance using confusion matrix, precision-recall, and F1-score metrics." tr="Model performansını karmaşıklık matrisi, kesinlik-duyarlılık ve F1 skoru metrikleriyle analiz ettim." />
          </>,
          <>
            <LocalizedText en="Automated performance reports and visualizations, including loss/accuracy curves and confusion matrices." tr="Kayıp/doğruluk eğrileri ve karmaşıklık matrislerini içeren performans raporlarını ve görselleştirmeleri otomatikleştirdim." />
          </>,
          <>
            <LocalizedText en="Actively participated in defense industry-focused AI-based cybersecurity R&D projects." tr="Savunma sanayisine yönelik yapay zekâ tabanlı siber güvenlik Ar-Ge projelerinde aktif rol aldım." />
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Recep Tayyip Erdogan University",
        description: <LocalizedText en="Bachelor's Degree in Computer Engineering · Sep 2021 - Present · EQF Level 6" tr="Bilgisayar Mühendisliği Lisans Programı · Eyl 2021 - Devam ediyor · EQF Seviye 6" />,
      },
    ],
  },
  highlights: {
    display: true,
    title: "Awards & Highlights",
    items: [
      {
        title: "TEKNOFEST 2025 · 5G Positioning · 4th Place",
        timeframe: "Aug 2025",
        description: <LocalizedText en="Built a fingerprint-based positioning model from 5G base-station signals and achieved 0.20 m MAE." tr="5G baz istasyonu sinyallerinden parmak izi tabanlı bir konumlandırma modeli geliştirerek 0,20 m MAE elde ettim." />,
      },
      {
        title: "IDEF 2025 International Defence Industry Fair",
        timeframe: "Jul 2025",
        description: <LocalizedText en="Presented an AI-based fault and anomaly detection project for rotary UAVs in Istanbul." tr="Döner kanatlı İHA'lar için yapay zekâ tabanlı arıza ve anomali tespit projesini İstanbul'da sundum." />,
        link: "https://rteuai2x.idef.com.tr/",
      },
      {
        title: "SAYZEK Datathon 2024 · Top 10 Finalist",
        timeframe: "Oct 2024",
        description: <LocalizedText en="Designed a YOLOv5 model to detect silos, football fields, and road intersections in satellite imagery." tr="Uydu görüntülerinde silo, futbol sahası ve yol kavşağı tespiti yapan bir YOLOv5 modeli tasarladım." />,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming & Application Development",
        description: (
          <LocalizedText en="Languages and frameworks used across full-stack, data, and engineering projects." tr="Full-stack, veri ve mühendislik projelerinde kullandığım diller ve framework'ler." />
        ),
        tags: [
          { name: "Python" },
          { name: "C / C++ / C#" },
          { name: "Java" },
          { name: "JavaScript", icon: "javascript" },
          { name: "MATLAB" },
          { name: "R" },
          { name: "SQL" },
        ],
        images: [],
      },
      {
        title: "Front-End Development",
        description: (
          <LocalizedText en="Web technologies and component libraries used to build responsive, accessible interfaces." tr="Duyarlı ve erişilebilir arayüzler oluşturmak için kullandığım web teknolojileri ve bileşen kütüphaneleri." />
        ),
        tags: [
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Sass" },
          { name: "React" },
          { name: "React Router" },
          { name: "MUI 5" },
          { name: "Styled Components" },
        ],
        images: [],
      },
      {
        title: "Cloud, DevOps & Platforms",
        description: (
          <LocalizedText en="Tools and platforms used to build, ship, and operate software." tr="Yazılım geliştirme, yayınlama ve işletme süreçlerinde kullandığım araçlar ve platformlar." />
        ),
        tags: [
          { name: "Git & GitHub" },
          { name: "GitLab" },
          { name: "Docker" },
          { name: "Jenkins" },
          { name: "Kubernetes" },
          { name: "OpenShift" },
          { name: "Microservices" },
          { name: "Linux" },
          { name: "Windows" },
          { name: "AWS & Azure" },
          { name: "PostgreSQL" },
        ],
        images: [],
      },
      {
        title: "Computer Vision & AI",
        description: (
          <LocalizedText en="Model development, evaluation, and visual intelligence workflows." tr="Model geliştirme, değerlendirme ve görsel zekâ iş akışları." />
        ),
        tags: [
          { name: "OpenCV" },
          { name: "TensorFlow / Keras" },
          { name: "scikit-learn" },
          { name: "Pandas / NumPy" },
          { name: "YOLO" },
          { name: "DNN / CNN / LSTM" },
          { name: "Autoencoders" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `AI, computer vision, autonomous systems and full-stack projects by ${person.name}.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A visual journal of landscapes, places, and moments curated by ${person.name}.`,
  images: [
    { src: "/images/gallery/1.jpg", alt: "Gallery photo 1", orientation: "horizontal" },
    { src: "/images/gallery/2.jpg", alt: "Gallery photo 2", orientation: "vertical" },
    { src: "/images/gallery/3.jpg", alt: "Gallery photo 3", orientation: "horizontal" },
    { src: "/images/gallery/4.jpg", alt: "Gallery photo 4", orientation: "horizontal" },
    { src: "/images/gallery/5.jpg", alt: "Gallery photo 5", orientation: "horizontal" },
    { src: "/images/gallery/6.jpg", alt: "Gallery photo 6", orientation: "vertical" },
    { src: "/images/gallery/7.jpg", alt: "Gallery photo 7", orientation: "horizontal" },
    { src: "/images/gallery/8.jpg", alt: "Gallery photo 8", orientation: "vertical" },
    { src: "/images/gallery/9.jpg", alt: "Gallery photo 9", orientation: "vertical" },
    { src: "/images/gallery/10.jpg", alt: "Gallery photo 10", orientation: "horizontal" },
    { src: "/images/gallery/11.jpg", alt: "Gallery photo 11", orientation: "vertical" },
    { src: "/images/gallery/12.jpg", alt: "Gallery photo 12", orientation: "vertical" },
    { src: "/images/gallery/13.jpg", alt: "Gallery photo 13", orientation: "horizontal" },
    { src: "/images/gallery/14.jpg", alt: "Gallery photo 14", orientation: "horizontal" },
    { src: "/images/gallery/15.jpg", alt: "Gallery photo 15", orientation: "horizontal" },
    { src: "/images/gallery/16.jpg", alt: "Gallery photo 16", orientation: "vertical" },
    { src: "/images/gallery/17.jpg", alt: "Gallery photo 17", orientation: "vertical" },
    { src: "/images/gallery/18.jpg", alt: "Gallery photo 18", orientation: "vertical" },
    { src: "/images/gallery/19.jpg", alt: "Gallery photo 19", orientation: "horizontal" },
    { src: "/images/gallery/20.jpg", alt: "Gallery photo 20", orientation: "horizontal" },
    { src: "/images/gallery/21.jpg", alt: "Gallery photo 21", orientation: "horizontal" },
    { src: "/images/gallery/22.jpg", alt: "Gallery photo 22", orientation: "horizontal" },
    { src: "/images/gallery/23.jpg", alt: "Gallery photo 23", orientation: "horizontal" },
    { src: "/images/gallery/24.jpg", alt: "Gallery photo 24", orientation: "vertical" },
    { src: "/images/gallery/25.jpg", alt: "Gallery photo 25", orientation: "horizontal" },
    { src: "/images/gallery/26.jpg", alt: "Gallery photo 26", orientation: "horizontal" },
    { src: "/images/gallery/27.jpg", alt: "Gallery photo 27", orientation: "horizontal" },
    { src: "/images/gallery/28.jpg", alt: "Gallery photo 28", orientation: "horizontal" },
    { src: "/images/gallery/29.jpg", alt: "Gallery photo 29", orientation: "horizontal" },
    { src: "/images/gallery/30.jpg", alt: "Gallery photo 30", orientation: "horizontal" },
  ],
};

const cv: Cv = {
  path: "/cv",
  label: "CV",
  title: `CV – ${person.name}`,
  description: `Curriculum vitae of ${person.name} — work experience, education, awards, and technical skills.`,
};

export { person, social, newsletter, home, about, blog, work, gallery, cv };
