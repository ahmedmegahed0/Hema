// Wedding configuration — edit this file to change all details
import songAsset from '../assets/song.mp3';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';
import logoImg from '../assets/logo.jpeg';
export const weddingData = {
  groom: 'إبراهيم',
  bride: 'ليلى',
  coupleNames: 'إبراهيم وليلى',

  event: {
    date: new Date('2026-09-30T21:00:00'),
    dateFormatted: 'الأربعاء، 30 سبتمبر 2026',
    time: '9:00 مساءً',
    venue: 'قاعة سوليتاير — منوف، المنوفية',
    mapsUrl: 'https://maps.app.goo.gl/nDWtRY7esALqASew5',
  },

  hennaEvent: {
    dateFormatted: 'الجمعة، 25 سبتمبر',
    venue: 'عزبة السلخانة القديمة',
  },

  story: {
    title: 'حكايتنا بدأت هنا...',
    subtitle: 'من بين ألف طريق كان ممكن يجمعنا، ربنا اختار طريق واحد — وده اللي فرق في حياتنا كلها.',
    description: 'قصة حب مكتوبة من قبل ما نتولد. ربنا جمعنا في الوقت الصح والمكان الصح — عشان نبدأ أجمل حكاية في حياتنا.',
    image: logoImg,
    milestones: [
      {
        emoji: '💫',
        title: 'أول مرة نتقابل',
        date: '2023',
        description: 'اتقابلنا لأول مرة — ومكناش نعرف إن الصدفة دي هتغير حياتنا كلها.',
      },
      {
        emoji: '💍',
        title: 'أول خروجة',
        date: '2023',
        description: 'قعدنا نتكلم ساعات كأننا نعرف بعض من سنين. كان في حاجة حلوة بتبدأ.',
      },
      {
        emoji: '❤️',
        title: 'الخطوبة',
        date: '2024',
        description: 'في لحظة عمرنا ما هننساها، القلب قال اللي الكلام مقدرش يوصفه.',
      },
      {
        emoji: '✨',
        title: 'ليلة الفرح',
        date: '2026',
        description: 'وأدينا هنا — واقفين على باب أجمل يوم في حياتنا. ونفسنا تكونوا معانا.',
      },
    ],
  },

  gallery: [
    { id: 1, alt: 'لحظة الخطوبة',    placeholder: img1, featured: true },
    { id: 2, alt: 'مع بعض دايماً',      placeholder: img2 },
    { id: 3, alt: 'لحظات حلوة',       placeholder: img3 },
    { id: 4, alt: 'قصة حب',         placeholder: img4 },
    { id: 5, alt: 'فرحة العمر',        placeholder: img5 },
    { id: 6, alt: 'ليلة العمر',  placeholder: img6 },
    { id: 7, alt: 'ذكريات جميلة',   placeholder: img7 },
    { id: 8, alt: 'لحد آخر العمر',   placeholder: img8 },
    { id: 9, alt: 'يومنا المميز',      placeholder: logoImg },
  ],

  initialMessages: [
    {
      id: 1,
      name: 'أم كريم',
      message: 'ألف مبروك يا عرسان! ربنا يسعدكم ويهنيكم وتفضلوا مع بعض طول العمر ❤️',
      date: '2026-09-20',
    },
    {
      id: 2,
      name: 'محمد والعيلة',
      message: 'ربنا يجعل أيامكم كلها فرح وضحك وحب مبيخلصش. ألف مبروك يا غاليين! 🌹',
      date: '2026-09-21',
    },
    {
      id: 3,
      name: 'سارة',
      message: 'من أحلى الأفراح اللي شفتها! ألف مبروك إبراهيم وليلى ✨💍',
      date: '2026-09-22',
    },
  ],

  music: {
    src: songAsset,
    title: 'أغنية الفرح',
  },
};
