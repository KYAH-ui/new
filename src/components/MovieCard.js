import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4 w-48">
<img alt="MovieCard" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard