import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                        <div className='ps-2'>
                            <p className='mb-0'>{author.name}</p>
                            <p className='mb-0'><small>{moment(author.publish_date).format('yyyy-MM-D')}</small></p>
                        </div>
                    </div>
                    <div className='fs-4'>
                        <FaRegBookmark ></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <br /> <Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div className='d-flex align-items-center gap-2 '>
                        <Rating
                            readonly
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <span>{rating.number}</span>
                    </div>
                    <div>
                        {total_view ? <><FaEye></FaEye> {total_view} </> : <><FaEye></FaEye> No view yet</>}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;