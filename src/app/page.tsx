import React from "react";
// import Post from "../Post/Post";
// import { PostData, UserData } from "../../utils/types";

function Home() {
  //   {
  //   posts,
  //   currentUser,
  //   onAddPost,
  //   onPostLike,
  //   onPostDelete,
  // }: {
  //   posts: PostData[];
  //   currentUser: UserData;
  //   onAddPost: () => void;
  //   onPostLike: (post: PostData) => void;
  //   onPostDelete: (post: PostData) => void;
  // }
  // const tradingDestinations: Record<string, number> = posts.reduce(
  //   (acc: Record<string, number>, post) => {
  //     const location = post.placeLocation;
  //     if (acc[location]) {
  //       acc[location]++;
  //     } else {
  //       acc[location] = 1;
  //     }
  //     return acc;
  //   },
  //   {}
  // );

  // const sortedDestinations: string[] = Object.keys(tradingDestinations).sort(
  //   (a, b) => tradingDestinations[b] - tradingDestinations[a]
  // );

  // const topDestinations: string[] = sortedDestinations.slice(0, 5);

  // const hashtags: Record<string, number> = posts.reduce(
  //   (acc: Record<string, number>, post) => {
  //     const text = post.description;
  //     const regex = /\B#\w+/g;
  //     const matches = text.match(regex);
  //     if (matches) {
  //       matches.forEach((hashtag) => {
  //         acc[hashtag] = (acc[hashtag] || 0) + 1;
  //       });
  //     }
  //     return acc;
  //   },
  //   {}
  // );

  // const sortedHashtags: string[] = Object.keys(hashtags).sort(
  //   (a, b) => hashtags[b] - hashtags[a]
  // );

  // const trendingTags: string[] = sortedHashtags.slice(0, 5);
  const currentUser = {
    avatar: "https://example.com/avatar.jpg",
    name: "John Doe",
    tag: "johndoe",
    summary: "This is a summary about me",
    followers: 100,
    following: 50,
    aboutMe: "I'm a traveler and a photographer",
  };

  return (
    <section className="main">
      <div className="main__info-column">
        <div className="main__profile block-style">
          <div className="main__profile-face">
            <div
              className="main__profile-avatar"
              style={{ backgroundImage: "url(" + currentUser.avatar + ")" }}
            ></div>
            <div className="main__profile-info">
              <h3 className="main__profile-name">{currentUser.name}</h3>
              <p className="main__profile-tag">@{currentUser.tag}</p>
            </div>
          </div>
          <div className="main__profile-stats">
            <div className="main__profile-stats-item">
              {/* TODO отображать посты пользователя */}
              {/* <p className="main__profile-stats-value">{posts.length}</p> */}
              <p className="main__profile-stats-name">Posts</p>
            </div>
            <div className="main__profile-stats-item">
              <p className="main__profile-stats-value">
                {currentUser.followers}
              </p>
              <p className="main__profile-stats-name">Followers</p>
            </div>
            <div className="main__profile-stats-item">
              <p className="main__profile-stats-value">
                {currentUser.following}
              </p>
              <p className="main__profile-stats-name">Following</p>
            </div>
          </div>
        </div>
        <div className="main__destinations block-style">
          {/* TODO сделать через массив, можно также сделать слайдер */}
          <h2 className="main__destinations-title">Trending Destinations</h2>
          <ul className="main__destinations-list">
            {/* {topDestinations.map((destination) => (
              <li className="main__destinations-item">
                <div className="main__destinations-item-image"></div>
                <p className="main__destinations-item-name">{destination}</p>
              </li>
            ))} */}
          </ul>
        </div>
        <div className="main__tags block-style">
          <h2 className="main__tags-title">Trending Tags</h2>
          <ul className="main__tags-list">
            {/* {trendingTags.map((hashtag) => (
              <li className="main__tags-item">{hashtag}</li>
            ))} */}
          </ul>
        </div>
      </div>
      <div className="main__posts-column">
        <button
          className="main__post-add-button block-style"
          // onClick={onAddPost}
        >
          <div className="main__post-add-button-icon"></div>Create new post
        </button>
        <div className="main__posts">
          {/* {posts.map((post, index) => (
            <Post
              key={index}
              {...post}
              onPostLike={onPostLike}
              currentUser={currentUser}
              onPostDelete={onPostDelete}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Home;
