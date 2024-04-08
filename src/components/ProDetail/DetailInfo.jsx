import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import LastestProduts from "../Latest/LastestProduts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingle } from "../../redux/productSlice";

const DetailInfo = () => {
  const { id } = useParams();

  console.log(id);

  const dispatch = useDispatch();
  const getonePro = useSelector((state) => state?.product?.single?.data);

  useEffect(() => {
    dispatch(getSingle({ productId: `${id}` }));
    window.scroll({
      top: 0,
    });
  }, [dispatch, id]);

  useEffect(() => {
    console.log(getonePro);
  }, []);

  const renderStars = (rattings) => {
   
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rattings) {
        stars.push(
          <FaStar
            className="me-1"
            style={{ fontSize: "18px", color: "#ffcc00" }}
          />
        );
      } else {
        stars.push(
          <FaRegStar
            className="ms-1"
            style={{ fontSize: "18px", color: "#ffcc00" }}
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="detail_section">
      <Container>
        {getonePro?.map((item, index) => {
          return (
            <Row key={item?.attributes?.id}>
              <Col lg={5}>
                <div className="image_section">
                  <img
                    className="img-fluid"
                    src={item?.attributes?.image?.data?.attributes?.url}
                    alt=""
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="product_details_full">
                  <div className="ratings_reviews_detail">
                    {renderStars(item?.attributes?.rattings)} &nbsp;|
                    <h6>{item?.attributes?.reviews} reviews</h6>
                  </div>
                  <h2>{item?.attributes?.title}</h2>
                  <h4>{item?.attributes?.descriptions}</h4>

                  <div className="price_counter d-flex">
                    <h3>₹{item?.attributes?.price}.00</h3>
                    <div className="counter d-flex">
                      <p>
                        <AiFillThunderbolt />
                        Exculsive Deal Ends on
                      </p>
                      <h6>23/11/2024</h6>
                    </div>
                  </div>
                  <div className="features">
                    <ul>
                      {
                        !item?.attributes?.playback ? "" :
                     
                      <li>
                        <FiCheckCircle /> {item?.attributes?.playback}hrs playback time
                      </li>
                       }
                      <li>
                        <FiCheckCircle /> 13mm drivers
                      </li>
                      <li>
                        <FiCheckCircle /> Water resistance
                      </li>
                      <li>
                        <FiCheckCircle /> Dust resistance
                      </li>
                      <li>
                        <FiCheckCircle /> Dobly atmos{" "}
                      </li>
                      <li>
                        <FiCheckCircle /> 7days replacement
                      </li>
                    </ul>
                  </div>
                  <div className="users-love">
                    <img
                      height={60}
                      width={60}
                      src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
                      alt=""
                    />

                    <div>
                      <h6>75 Lacs+ units sold on Flipkart</h6>
                      <p>Get it now</p>
                    </div>
                  </div>
                  <div className="cart_grop">
                    <button className="cart_bttum_lg">Add to Cart</button>
                  </div>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>

      <div className="mt-4 related">
        <LastestProduts isRelated={true} />
      </div>
    </div>
  );
};

export default DetailInfo;
