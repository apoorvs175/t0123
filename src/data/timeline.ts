export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

// Using Pexels stock photos for demonstration
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "March 10, 2021",
    title: "When We First Met",
    description: "I still remember how nervous I was when we first met. Something about your smile put me at ease immediately.",
    imageUrl: "https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    date: "April 23, 2021",
    title: "Our First Date",
    description: "That little café where we talked for hours. I knew then that you were someone special.",
    imageUrl: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    date: "June 15, 2021",
    title: "First 'I Love You'",
    description: "Under the stars, with the sound of waves in the background. I'll never forget that perfect moment.",
    imageUrl: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    date: "September 8, 2021",
    title: "Our First Trip Together",
    description: "That weekend getaway where we got lost but found the most beautiful viewpoint. Sometimes getting lost leads to the best discoveries.",
    imageUrl: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    date: "December 24, 2021",
    title: "Our First Holiday Together",
    description: "Making new traditions and blending our families. Your gift was so thoughtful, it brought tears to my eyes.",
    imageUrl: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    date: "February 14, 2022",
    title: "Valentine's Day Surprise",
    description: "When you planned that elaborate scavenger hunt that led me to our special spot. You put so much thought into every detail.",
    imageUrl: "https://images.pexels.com/photos/5708057/pexels-photo-5708057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    date: "June 15, 2022",
    title: "Our One Year Anniversary",
    description: "A whole year of loving you. It feels like both a moment and forever at the same time.",
    imageUrl: "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    date: "August 30, 2022",
    title: "Moving In Together",
    description: "Starting our life together under one roof. I love building our home with you.",
    imageUrl: "https://images.pexels.com/photos/7937979/pexels-photo-7937979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 9,
    date: "Today",
    title: "Today and Every Day",
    description: "Each day with you is a gift. I can't wait to see what the future holds for us.",
    imageUrl: "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];