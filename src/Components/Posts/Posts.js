
// import React, { useEffect, useState, useContext } from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import Heart from '../../assets/Heart';
// import './Post.css';
// import { PostContext } from '../../store/PostContext';
// import { useNavigate } from 'react-router-dom';

// function Posts() {
//   const Firebase = useContext(FirebaseContext); // Corrected to use useContext
//   const [products, setProducts] = useState([]);
//   const {SetPostdetails}=useContext(PostContext);
//   const navigate=useNavigate()
  


//   useEffect(() => {
//     // Fetching products from Firestore
//     Firebase.firestore().collection('products').get().then((snapshot) => {
//       const allPosts = snapshot.docs.map((product) => {
//         return {
//           ...product.data(),
//           id: product.id,
//         };
//       });
//       setProducts(allPosts);
//     }).catch(error => {
//       console.error("Error fetching products: ", error);
//     });
//   }, [Firebase]); // Added Firebase as a dependency

//   return (
//     <div className="postParentDiv">
//       <div className="moreView">
//         <div className="heading">
//           <span>Quick Menu</span>
//           <span>View more</span>
//         </div>
//         <div className="cards">
//         {products.map((product) => (
//             <div  onClick={()=>{
//               SetPostdetails(product).then(()=>{
//                 navigate('/ViewPost');
//               })
//             }}  className="card" key={product.id}> {/* Added unique key */}
//               <div className="favorite">
//                 <Heart />
//               </div>
//               <div className="image">
//                 <img src={product.url} alt={product.name} /> {/* Use product data */}
//               </div>
//               <div className="content">
//                 <p className="rate">&#x20B9; {product.price}</p>
//                 <span className="kilometer">{product.category}</span>
//                 <p className="name">{product.name}</p>
//               </div>
//               <div className="date">
//                 <span>{new Date(product.createdAt).toLocaleDateString()}</span> {/* Formatting date */}
//               </div>
//             </div>
//         ))}
        
//         </div>
//       </div>
//       <div className="recommendations">
//         <div className="heading">
//           <span>Fresh recommendations</span>
//         </div>
//         <div className="cards">
//         <div className="card">
//             <div className="favorite">
//               <Heart />
//             </div>
//             <div className="image">
//               <img src="../../../Images/R15V3.jpg" alt="" />
//             </div>
//             <div className="content">
//               <p className="rate">&#x20B9; 250000</p>
//               <span className="kilometer">Two Wheeler</span>
//               <p className="name">YAMAHA R15V3</p>
//             </div>
//             <div className="date">
//               <span>Tue May 04 2021</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Posts;
import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const Firebase = useContext(FirebaseContext); // Corrected to use useContext
  const [products, setProducts] = useState([]);
  const { SetPostdetails } = useContext(PostContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching products from Firestore
    Firebase.firestore().collection('products').get().then((snapshot) => {
      const allPosts = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(allPosts);
    }).catch(error => {
      console.error("Error fetching products: ", error);
    });
  }, [Firebase]); // Added Firebase as a dependency

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => (
            <div
              onClick={() => {
                SetPostdetails(product); // Set the post details
                navigate('/ViewPost');   // Navigate to the view post page
              }}
              className="card"
              key={product.id}
            >
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={product.url} alt={product.name} />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.name}</p>
              </div>
              <div className="date">
                <span>{new Date(product.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name">YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
