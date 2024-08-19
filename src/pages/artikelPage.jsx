import React from "react";
import Article from '../components/Article'

const ArtikelPage = ({articles}) => {

  return (
    <>      
      <Article articles={articles}/>  
    </>
  );
};
 
export default ArtikelPage;
