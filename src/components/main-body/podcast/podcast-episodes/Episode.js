import ImageOfEpisode from "./episode-properties/ImageOfEpisode"
import InfoAboutEpisode from "./episode-properties/InfoAboutEpisode"
import NumberOfEpisode from "./episode-properties/NumberOfEpisode"

const Episode = ({episode}) =>{
  return(
    <div className="episode">
      <NumberOfEpisode no={episode.numberOfEpisode} />
      <ImageOfEpisode url={episode.imageOfEpisode}/>
      <InfoAboutEpisode props={episode}/>
    </div>
  )
}

export default Episode