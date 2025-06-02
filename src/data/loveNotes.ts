export interface LoveNote {
  id: number;
  title: string;
  content: string;
  date: string;
  isSecret?: boolean;
}

export const loveNotes: LoveNote[] = [
  {
    id: 1,
    title: "When I First Knew",
    content: "I knew I loved you when I realized my day wasn't complete until I heard your voice. Something about the way you laugh makes everything better. I find myself smiling just thinking about you.",
    date: "June 20, 2021"
  },
  {
    id: 2,
    title: "What I Admire About You",
    content: "Your kindness to others amazes me. I've watched you go out of your way to help strangers, always with a smile. Your compassionate heart is one of the many reasons I fall more in love with you each day.",
    date: "August 15, 2021"
  },
  {
    id: 3,
    title: "The Little Things",
    content: "I love how you always remember my coffee order. How you text me good morning every day. The way you scrunch your nose when you laugh really hard. These little things make up the beautiful mosaic of who you are to me.",
    date: "October 3, 2021"
  },
  {
    id: 4,
    title: "Dreams With You",
    content: "When I imagine my future, you're always there. I dream of quiet evenings and grand adventures, all with you by my side. Thank you for making my tomorrow something to look forward to.",
    date: "January 12, 2022"
  },
  {
    id: 5,
    title: "Through Challenges",
    content: "Even on our hardest days, I'm grateful it's you I'm facing them with. Your strength inspires me, and your patience grounds me. We make an incredible team, don't we?",
    date: "March 28, 2022"
  },
  {
    id: 6,
    title: "Midnight Thoughts",
    content: "Sometimes I stay awake just thinking about how lucky I am to have found you in this vast world. Of all the paths I could have taken, I'm so thankful mine led to you.",
    date: "July 5, 2022",
    isSecret: true
  },
  {
    id: 7,
    title: "My Promise",
    content: "I promise to choose you, every day. To love you through changes and challenges. To build a life filled with laughter and understanding. To be your partner in all things. This is my daily promise to you.",
    date: "December 24, 2022"
  },
  {
    id: 8,
    title: "Forever Grateful",
    content: "Thank you for loving me exactly as I am. For seeing both my flaws and my potential. For encouraging me to grow while making me feel completely accepted. You are my greatest blessing.",
    date: "February 14, 2023",
    isSecret: true
  }
];