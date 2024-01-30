import Home from './home/Home'
import Podcast from './podcast/Podcast'
import Authors from './authors/Authors'

const MainBody = (props) => {

  return(
    <div className="main-body">
      {props.bodyToPreview === 'home' && <Home />}
      {props.bodyToPreview === 'podcast' && <Podcast />}
      {props.bodyToPreview === 'authors' && <Authors />}
    </div>
  )
}

export default MainBody