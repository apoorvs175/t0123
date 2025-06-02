export interface Photo {
  id: number;
  imageUrl: string;
  title: string;
  date?: string;
  location?: string;
  description?: string;
}

// Using Pexels stock photos for demonstration
export const photos: Photo[] = [
  {
    id: 1,
    imageUrl: "https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Our First Date",
    date: "June 15, 2021",
    location: "Central Park",
    description: "Remember that perfect sunset walk? You were so beautiful that day."
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Beach Getaway",
    date: "August 3, 2021",
    location: "Malibu Beach",
    description: "That weekend escape when we built sandcastles and watched the waves."
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/1974521/pexels-photo-1974521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Dinner Date Night",
    date: "October 12, 2021",
    location: "Bella Ristorante",
    description: "That candlelit dinner where we couldn't stop laughing."
  },
  {
    id: 4,
    imageUrl: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hiking Adventure",
    date: "April 22, 2022",
    location: "Eagle Mountain",
    description: "That challenging hike with the most rewarding view at the top."
  },
  {
    id: 5,
    imageUrl: "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Our Anniversary",
    date: "June 15, 2022",
    location: "Home Sweet Home",
    description: "One year of loving you and the special dinner I prepared."
  },
  {
    id: 6,
    imageUrl: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Holiday Lights",
    date: "December 24, 2022",
    location: "Winter Wonderland Festival",
    description: "The magical night with all the Christmas lights and your beautiful smile."
  },
  {
    id: 7,
    imageUrl: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Road Trip",
    date: "July 8, 2023",
    location: "Coastal Highway",
    description: "Wind in our hair, music blasting, and endless possibilities ahead."
  },
  {
    id: 8,
    imageUrl: "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Picnic in the Park",
    date: "May 14, 2023",
    location: "Meadow Gardens",
    description: "Strawberries, cheese, and poetry readings under the shade of old trees."
  }
];