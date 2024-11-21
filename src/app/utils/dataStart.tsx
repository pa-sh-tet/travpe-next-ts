// import React from "react";
import { PostData, UserData } from "../utils/types";
// import mountains from "../images/mountains.png";

export const startMainPosts: PostData[] = [
  {
    image: null,
    description:
      "Lorem #dasasd ipsum dolor sit amet consectetur, adipisicing elit. Sunt illum, dolore ipsam saepe reprehenderit fuga natus quam. Odit eos voluptates aliquid ea facilis minus. Est quos labore et soluta dolore.",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["johndoe"],
    placeLocation: "Mountains",
  },
  {
    image: null,
    description: "Mountains",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["asdsadsadsad", "johndoe", "asdasc"],
    placeLocation: "Mountains",
  },
  {
    image: null,
    description: "Mountains",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["asdsadsadsad", "sadsad", "asdasc"],
    placeLocation: "Mountains",
  },
];

export const startUserPosts: PostData[] = [
  {
    image: null,
    description: "mooooooon",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["johndoe", "sadsad", "asdasc"],
    placeLocation: "Mountains",
  },
  {
    image: null,
    description: "Mountains",
    author: "John Doe",
    date: "June 15, 2022",
    likes: ["asdsadsadsad", "sadsad", "asdasc"],
    placeLocation: "Mountains",
  },
];

export const startUsers: UserData[] = [
  {
    name: "name",
    email: "email@email.com",
    password: "password",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: null,
    followers: 100,
    following: 50,
    aboutMe: "I'm a software developer.",
    tag: "johndoe",
  },
];

export const startUser: UserData = {
  name: "admin",
  email: "IzT9u@example.com",
  password: "password",
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  avatar: null,
  followers: 100,
  following: 50,
  aboutMe: "I'm a software developer.",
  tag: "johndoe",
};
