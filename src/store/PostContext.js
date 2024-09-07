import {createContext,useState} from 'react';
 export const PostContext=createContext(null);

 function Post({children}){
    const [postDetails,SetPostdetails]=useState();

return(
    <PostContext.Provider value={{postDetails,SetPostdetails}}>
   {children}
</PostContext.Provider>

)
}
export default Post;