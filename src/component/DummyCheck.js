// import PropTypes from 'prop-types';

// function AlbumList({ albumData, setAlbumData }) {
//   const handleRemove = (id) => {
//     // Perform delete logic (API call, etc.)
//     alert(`Delete item with ID: ${id}`);
    
//     // Update the UI by removing the item from the albumData
//     setAlbumData((prevData) => prevData.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       {/* Render your album list here */}
//     </div>
//   );
// }

// AlbumList.propTypes = {
//   albumData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       // Add other necessary properties
//     })
//   ).isRequired,
//   setAlbumData: PropTypes.func.isRequired,
// };

// export default AlbumList;