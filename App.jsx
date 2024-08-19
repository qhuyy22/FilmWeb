import { useState } from "react";
import "./App.css";

const animeData = [
  {
    id: "1",
    movieName: "Weather With You",
    description: "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi...",
    image: "/anime/One.png",
    bannerImage: "/anime/One.png",
  },
  {
    id: "2",
    movieName: "Once Peace",
    description: "One Piece là bộ truyện tranh dành cho thiếu niên...",
    image: "/anime/Group 4.png",
    bannerImage: "/anime/Group 4.png",
  },
  {
    id: "3",
    movieName: "Boruto: Naruto Next Generations",
    description:
      "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto...",
    image: "/anime/Group 2.png",
    bannerImage: "/anime/Group 2.png",
  },
  {
    id: "4",
    movieName: "Spy X Family",
    description: "Bộ phim là phần phim điện ảnh của series anime nổi tiếng...",
    image: "/anime/card_movie.png",
    bannerImage: "/anime/card_movie.png",
  },
  {
    id: "5",
    movieName: "Shingeki no kyojin",
    description:
      "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ...",
    image: "/anime/card_movie (1).png",
    bannerImage: "/anime/card_movie (1).png",
  },
  {
    id: "6",
    movieName: "Captain Tsubasa",
    description: "Tsubasa Oozora là nhân vật chính trong bộ truyện này...",
    image: "/anime/card_movie (2).png",
    bannerImage: "/anime/card_movie (2).png",
  },
  {
    id: "7",
    movieName: "Ao Ashi",
    description: "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng...",
    image: "/anime/One.png",
    bannerImage: "/anime/One.png",
  },
];

const App = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);

  const handleClick = (anime) => {
    setSelectedAnime(anime);
  };

  const defaultBannerImage = "/anime/carousel.png";

  return (
    <div className="main">
      <header className="header">
        <div className="item1">
          <h1>Anonime</h1>
        </div>
        <div className="item2">
          <h4>Home</h4>
        </div>
        <div className="item3">
          <h4>List anime</h4>
        </div>
        <div className="item4">
          <input type="text" placeholder="Search anime or movie" />
        </div>
      </header>

      <main className="content">
        <section className="text2">
          <h2>Explore</h2>
        </section>
        <section className="text3">
          <h3>
            {selectedAnime
              ? `What are you gonna watch today?`
              : "Select an anime to see details"}
          </h3>
        </section>

        <img
          src={selectedAnime ? selectedAnime.bannerImage : defaultBannerImage}
          alt="Banner"
          className="banner-img"
        />

        {selectedAnime && (
          <section className="animeDetails">
            <h2>{selectedAnime.movieName}</h2>
            <p>{selectedAnime.description}</p>
          </section>
        )}

        <section className="text4">
          <h1>New Release</h1>
        </section>
        <section className="itemimg">
          {animeData.map((anime) => (
            <div className={`img${anime.id}`} key={anime.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(anime);
                }}
              >
                <img src={anime.image} alt={anime.movieName} />
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
