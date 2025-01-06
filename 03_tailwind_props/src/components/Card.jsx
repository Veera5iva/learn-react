import propTypes from "prop-types"
function Card({username = "Veerasiva R", post = "Web Developer, Netflix", obj, image = "https://th.bing.com/th/id/OIG3.80EN2JPNx7kp5VqoB5kz"}) {
    // console.log(props)
    
  return (
    <div className='relative top-2'>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, quod!
            </p>
            <img src="" alt="" />
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}: {obj}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}
Card.propTypes = {
    username: propTypes.string.isRequired,
    post: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    obj: propTypes.array.isRequired
}

export default Card