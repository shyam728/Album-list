
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";


export const AlbumList = (props) => {
  


 


 





  return (
    <>
      <Navbar />
      <div className="">
        <div className="flow-root ">
          {props.loadings ? (
            <p>Loading...</p>
          ) : (
            <div className="">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center ">
                  Album List
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {props.albumData.map((item) => (
                    <div
                      key={item.id}
                      class="max-w-sm rounded overflow-hidden shadow-lg"
                    >
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> {item.title}</div>
                      </div>
                      <div class="px-6 pt-4 pb-2 flex items-center justify-between">
                       <NavLink to="/editalbum"> <button
                          onClick={() => props.setUpdateAlbum(item)}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Update
                        </button></NavLink>
                        <button
                        onClick={() => props.DeleteAlbumFromList(item.id)}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
