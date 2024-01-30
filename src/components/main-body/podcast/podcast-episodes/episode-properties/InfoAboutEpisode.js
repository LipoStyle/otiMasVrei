import DateRealesedOfEpisode from "./info-about-podcast/DateRealesedOfEpisode"
import DurationOfEpisode from "./info-about-podcast/DurationOfEpisode"
import LinkToListenEpisode from "./info-about-podcast/LinkToListenEpisode"
import TitleOfEpisode from "./info-about-podcast/TitleOfEpisode"

const InfoAboutEpisode = ({props}) => {
  return(
    <div classname="info-about-episode">
      <TitleOfEpisode title={props.titleOfEpisode}/>
      <DateRealesedOfEpisode date={props.dateRealesedOfEpisode}/>
      <DurationOfEpisode duration={props.durationOfEpisode}/>
      <LinkToListenEpisode link={props.linkToListenEpisode}/>
    </div>
  )
}

export default InfoAboutEpisode