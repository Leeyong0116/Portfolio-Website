type CardProps = {

    title: string
    description: string
    image: string   
}

export default function Card({title, description, image}: CardProps) {
    return(
        <div className= " justify-center border p-5 rounded shadow-lg w-64 bg-white">
            <img src={image} alt={title} className=" w-full h-40 object-cover rounded" />
            <h2 className="w-12/12 text-center mt-10 mb-10 font-sans font-semibold text-xl p-2 text-center text-blue">{title}</h2>
            <p className="text-center font-sans text-l">{description}</p>
            <button className="border rounded p-1 ">Nihao</button>
        </div>
    )
}