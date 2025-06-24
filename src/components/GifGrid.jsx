import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchgifs";

export const GifGrid = ({categoria}) => {

    const {image, isloading} = useFetchGifs(categoria)

  return (
    <>
        <h3>{categoria}</h3>
        {
            isloading ? <h2>Cargando...</h2> : null
        }
        <div className="card-grid">
            {image.map((imagen)=>(
                <GifItem
                    key={imagen.id}
                    {...imagen}
                />
            ))}
        </div>
        
    </>

  )
   
}

