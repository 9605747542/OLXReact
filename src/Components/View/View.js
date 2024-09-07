





import React, { useState, useEffect, useContext } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';

function View() {
  const [userDetails, setUserDetails] = useState({});
  const { postDetails } = useContext(PostContext);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (postDetails && postDetails.userId) {
      const { userId } = postDetails;
      Firebase.firestore()
        .collection('users')
        .where('id', '==', userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        })
        .catch((error) => {
          console.error("Error fetching user details: ", error);
        });
    }
  }, [Firebase, postDetails]); // useEffect dependencies

  const formattedDate = postDetails?.createdAt ? new Date(postDetails.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : 'Date not available';

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?.url || ''}
          alt=''
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price || ''} </p>
          <p>{postDetails?.category || 'Category'}</p>
          <span>{formattedDate}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username || 'Username not available'}</p>
          <p>{userDetails.phone || 'Phone not available'}</p>
        </div>
      </div>
    </div>
  );
}

export default View;




