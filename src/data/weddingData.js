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
  groom: 'Ibrahim',
  bride: 'Layla',
  coupleNames: 'Ibrahim & Layla',

  event: {
    date: new Date('2026-09-30T21:00:00'),
    dateFormatted: 'Wednesday, September 30th 2026',
    time: '9:00 PM',
    venue: 'Solitaire Hall — Menouf, Menoufia',
    mapsUrl: 'https://maps.app.goo.gl/nDWtRY7esALqASew5',
  },

  hennaEvent: {
    dateFormatted: 'Friday, September 25th',
    venue: 'عزبة السلخانة القديمة',
  },

  story: {
    title: 'Our Story Began Here...',
    subtitle: 'Among thousands of paths that could have brought us together, God chose one — and that made all the difference.',
    description: 'A love story written by fate long before we were born. God brought us together at the right moment, in the right place — to begin the most beautiful chapter of our lives.',
    image: logoImg,
    milestones: [
      {
        emoji: '💫',
        title: 'First Meeting',
        date: '2023',
        description: 'We met for the first time — not knowing that this encounter would change the course of our lives forever.',
      },
      {
        emoji: '💍',
        title: 'First Date',
        date: '2023',
        description: 'We spent hours talking as if we had known each other for years. Something beautiful was beginning.',
      },
      {
        emoji: '❤️',
        title: 'The Engagement',
        date: '2024',
        description: 'In a moment we will never forget, the heart decided what words could not say.',
      },
      {
        emoji: '✨',
        title: 'Wedding Night',
        date: '2026',
        description: 'And here we are — standing at the door of the most beautiful day of our lives. We want you by our side.',
      },
    ],
  },

  gallery: [
    { id: 1, alt: 'Engagement Moment',    placeholder: img1, featured: true },
    { id: 2, alt: 'Together Always',      placeholder: img2 },
    { id: 3, alt: 'Joyful Moments',       placeholder: img3 },
    { id: 4, alt: 'A Love Story',         placeholder: img4 },
    { id: 5, alt: 'Royal Wedding',        placeholder: img5 },
    { id: 6, alt: 'Night of a Lifetime',  placeholder: img6 },
    { id: 7, alt: 'Beautiful Memories',   placeholder: img7 },
    { id: 8, alt: 'Forever and Always',   placeholder: img8 },
    { id: 9, alt: 'Our Special Day',      placeholder: logoImg },
  ],

  initialMessages: [
    {
      id: 1,
      name: 'Um Kareem',
      message: 'Congratulations to the beautiful couple! May God bless you with happiness and love forever ❤️',
      date: '2026-09-20',
    },
    {
      id: 2,
      name: 'Mohamed & Family',
      message: 'Wishing you a lifetime filled with joy, laughter, and endless love. Mabrook! 🌹',
      date: '2026-09-21',
    },
    {
      id: 3,
      name: 'Sarah',
      message: 'One of the most beautiful weddings! Congratulations Ibrahim & Layla ✨💍',
      date: '2026-09-22',
    },
  ],

  music: {
    src: songAsset,
    title: 'Wedding Music',
  },
};
