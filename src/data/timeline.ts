export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "March 25, 2023",
    title: "When Our Story Began",
    description: "The day that changed everything. Your smile lit up my world, and I knew you were someone special.",
    imageUrl: "https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg"
  },
  {
    id: 2,
    date: "April 15, 2023",
    title: "First Time I Called You Kushu",
    description: "The nickname just came naturally - as sweet and adorable as you are. It stuck, and now you'll always be my Kushu.",
    imageUrl: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg"
  },
  {
    id: 3,
    date: "May 20, 2023",
    title: "Our First Date",
    description: "A perfect evening that felt like a dream. Your laughter was the most beautiful sound I'd ever heard.",
    imageUrl: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
  },
  {
    id: 4,
    date: "July 10, 2023",
    title: "When You Became My Penguin",
    description: "Because you waddle so cutely when you're excited - my adorable little penguin!",
    imageUrl: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg"
  },
  {
    id: 5,
    date: "September 30, 2023",
    title: "Our First Adventure Together",
    description: "Exploring new places with you made me realize how much better everything is when you're by my side.",
    imageUrl: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg"
  },
  {
    id: 6,
    date: "December 25, 2023",
    title: "Our First Christmas",
    description: "The day you called me 'Appii' for the first time. It made my heart skip a beat.",
    imageUrl: "https://images.pexels.com/photos/5708057/pexels-photo-5708057.jpeg"
  },
  {
    id: 7,
    date: "January 15, 2024",
    title: "My Mera Fool Sa Balak",
    description: "Your innocence and pure heart make you my precious 'fool sa balak'. I promise to always protect that innocence.",
    imageUrl: "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg"
  },
  {
    id: 8,
    date: "March 25, 2024",
    title: "Our First Anniversary",
    description: "One year of loving my sweety, my Kushu, my penguin, my everything. Here's to many more years together.",
    imageUrl: "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg"
  }
];