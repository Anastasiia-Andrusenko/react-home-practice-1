
import PropTypes from 'prop-types';

import defaultImage from './default.jpg';


const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'unknown',
  price,
  quantity,
}) => {
  return (
  <div>
    <img src={imageUrl} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Author: <a href={profileUrl}>{author}</a>
    </p>
    <p>Price: {price} credits</p>
    <p>Availability: {quantity < 10 ? 'ends soon' : 'available'} </p>
    <button type="button">Add to Cart</button>
  </div>);
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;