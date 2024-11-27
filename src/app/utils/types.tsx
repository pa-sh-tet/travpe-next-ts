export interface PostData {
  image: File | null | string;
  description: string;
  author: string;
  date: string;
  likes: string[];
  placeLocation: string;
}

export interface UserData {
  image: string;
  name: string;
  email: string;
  password: string;
  summary: string;
  avatar: string | null;
  followers: number;
  following: number;
  aboutMe: string;
  tag: string;
}
