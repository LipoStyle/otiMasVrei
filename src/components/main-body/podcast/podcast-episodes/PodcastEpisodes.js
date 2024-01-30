import Episode from "./Episode"

const PodcastEpisodes = () => {
  const episodes = {
    episode1: {
      numberOfEpisode: 1,
      imageOfEpisode: "./img/episodio1.jpg",
      titleOfEpisode: "Γιατι να κανεις Podcast",
      dateRealesedOfEpisode: "22 dec 2023",
      durationOfEpisode: 42,
      linkToListenEpisode: "spotify.com/otimasvrei"
    },
    episode2: {
      numberOfEpisode: 2,
      imageOfEpisode: "./img/episodio2.png",
      titleOfEpisode: "Γιατι να κανεις Podcast",
      dateRealesedOfEpisode: "22 dec 2023",
      durationOfEpisode: 42,
      linkToListenEpisode: "spotify.com/otimasvrei"
    },
    episode3: {
      numberOfEpisode: 3,
      imageOfEpisode: "./img/episodio3.png",
      titleOfEpisode: "Γιατι να κανεις Podcast",
      dateRealesedOfEpisode: "22 dec 2023",
      durationOfEpisode: 42,
      linkToListenEpisode: "spotify.com/otimasvrei"
    },
    episode4: {
      numberOfEpisode: 4,
      imageOfEpisode: "./img/episodio4.png",
      titleOfEpisode: "Γιατι να κανεις Podcast",
      dateRealesedOfEpisode: "δΕΚΕΜΒΡΙΟς 23, 2023",
      durationOfEpisode: 42,
      linkToListenEpisode: "spotify.com/otimasvrei"
    },
    episode5: {
      numberOfEpisode: 5,
      imageOfEpisode: "./img/episodio5.png",
      titleOfEpisode: "Γιατι να κανεις Podcast",
      dateRealesedOfEpisode: "22 dec 2023",
      durationOfEpisode: 42,
      linkToListenEpisode: "spotify.com/otimasvrei"
    }
  }
  
  return(
    <div className="podcast-episode">
      <Episode episode={episodes.episode5}/>
      <Episode episode={episodes.episode4}/>
      <Episode episode={episodes.episode3}/>
      <Episode episode={episodes.episode2}/>
      <Episode episode={episodes.episode1}/>
    </div>
  )
}

export default PodcastEpisodes