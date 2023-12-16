import { useState } from 'react'
import { Navbar } from '../component/Navbar'

import { Link,  useNavigate } from 'react-router-dom';





export const EditAlbum = (props) =>{
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateUserId, setUpdateUserId] = useState('');
  const navagite = useNavigate()
 

  const getUpdateData = () => {
   
    const id = props.album.id;
    alert(id)

    // Use the state values directly instead of querying the DOM
    const updatedTitle = updateTitle || props.album.title;
    const updatedUserId = updateUserId ? Number(updateUserId) : props.album.userId;

    props.updateAlbumInList(id, updatedTitle, updatedUserId, props.album);

    // Use history.push to navigate programmatically after the update
    navagite('/')
  };



    return(<>
    <Navbar/>
<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Edit Album</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Update Your Album is Here
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
         

       


        <h4>User Id: {props.album.userId}</h4>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
            Enter User Id
            </label>
            <div className="mt-2.5">
              <input
               type="number"
               id="userid-inp"
               value={updateUserId}
               onChange={(e) => setUpdateUserId(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <h4>Title: {props.album.title}</h4>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Enter Album Title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="title-inp"
                value={updateTitle}
                onChange={(e) => setUpdateTitle(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
         

        
        </div>
        <div className="mt-10">
          <button
            type="submit"
            onClick={getUpdateData}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
             Edit Album
          </button>
        </div>
      </div>
    </div>

    </>)
}