import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



const FavoriteIcon = () => {
  const navigate = useNavigate
  const handleClick = () => {navigate('/wishlist')};
  return (
    <>
      <div >
        <FontAwesomeIcon icon={faHeart} title="Favorites" />
      </div>
    </>
  );
};

export default FavoriteIcon;
