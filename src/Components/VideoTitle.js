
const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute w-screen top-80 left-16 text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-xl max-w-96 m-2 ">{overview}</p>
      <div>
        <button className="bg-black rounded-lg px-4 py-2 m-4 w-32">Play</button>
        <button className="bg-black rounded-lg px-4 py-2 m-4 w-32">More info</button>
      </div>
    </div>
  )
}

export default VideoTitle