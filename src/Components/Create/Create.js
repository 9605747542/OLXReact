import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { AuthContext,FirebaseContext } from '../../store/FirebaseContext';

const Create = () => {
  const  {user} =useContext(AuthContext);
  const Firebase=useContext(FirebaseContext)
  const[name,Setname]=useState('');
  const [category,Setcategory]=useState('');
  const [price,Setprice]=useState();
  const[image,Setimage]=useState(null);
  const navigate=useNavigate()

  const handleSubmit = () => {
    console.log("Submitting form");
    const date = new Date();
  
    if (!image) {
      console.error("No image selected");
      return;
    }
  
    Firebase.storage().ref(`/image/${image.name}`).put(image)
      .then(({ ref }) => {
        return ref.getDownloadURL();
      })
      .then((url) => {
        return Firebase.firestore().collection('products').add({
          name: name,
          category: category,
          price: price,
          url: url,
          userId: user.uid,
          createdAt: date.toString() // Corrected toString method
        });
      })
      .then(() => {
        console.log("Product added successfully");
      }).then(()=>{
        navigate('/')
      })
      .catch((error) => {
        console.error("Error uploading image or adding product:", error);
      });
  };
  
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name} onChange={(e)=>Setname(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category} onChange={(e)=>{Setcategory(e.target.value)}}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>{Setprice(e.target.value)}} />
            <br />
        
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
        
            <br />
            <input onChange={(e)=>{
              Setimage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
       
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
