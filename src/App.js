import { useEffect ,useState } from "react";
import { Home } from "./pages/Home";
import { AddAlbum } from "./pages/AddAlbum";
import { AlbumList } from "./component/AlbumList";
import { DummyCheck } from "./component/DummyCheck";
import { EditAlbum } from "./pages/EditAlbum";



import { createRoutesFromElements , Route , RouterProvider ,createBrowserRouter } from "react-router-dom";

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateAlbum, setUpdateAlbum] = useState({});

    // Delete album from the list
    const DeleteAlbumFromList = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE' });
      const newAlbums = data.filter((album) => album.id !== id);
      alert('Your Album Deleted successfully');
      setData(newAlbums);
    };


     // Set album for update
  const setUpdateAlbumFunc = (album) => {
    
    setUpdateAlbum(album);
  };

  // Update album in the list
  const updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const index = data.indexOf(oldAlbum);
    let updatedAlbum = [];

    if (id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle,
      };
    }

    const updatedAlbums = [...data];
    updatedAlbums[index] = updatedAlbum;
    setData(updatedAlbums);

    alert('Update Successfully done');
  };

  const routes = createRoutesFromElements(<>
  <Route path="/" element={<Home data={data}  loading={loading} setData={setData} DeleteAlbumFromList={DeleteAlbumFromList} setUpdateAlbum={setUpdateAlbumFunc} />}/>
  <Route path="/addalbum" element={<AddAlbum setData={setData}  />}/>
  <Route path="/albumlist" element={<AlbumList albumData={data} loadings={loading}/>}/>
  <Route path="/card" element={<DummyCheck/>}/>
  <Route path="/editalbum" element={<EditAlbum    album={updateAlbum} updateAlbumInList={updateAlbumInList}/>}/>
   
  </>)
  const router = createBrowserRouter(routes);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts



  return (
    <div >
     
     
        <RouterProvider router={router} />
        
    </div>
  );
}

export default App;
