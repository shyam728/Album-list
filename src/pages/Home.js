
import { Navbar } from "../component/Navbar";
import { AlbumList } from "../component/AlbumList";


export const Home = (props) =>{
   
    return(<>
    <div className="bg-gray-100">
    <Navbar />
  <AlbumList albumData={props.data} loadings={props.loading} setAlbumData={props.setData} DeleteAlbumFromList={props.DeleteAlbumFromList} setUpdateAlbum={props.setUpdateAlbum} />
    
    </div>

  
    </>)
}