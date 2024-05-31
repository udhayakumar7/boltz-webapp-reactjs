import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../helpers/api";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";

const SearchResults = () => {
  const location = useLocation();
  const searchParms = new URLSearchParams(location.search);
  const searchItem = searchParms.get("query");

  const [product, setProduct] = useState([]);

  console.log(searchItem);

  useEffect(() => {
    fetchResults(searchItem);
  }, [searchItem]);

  const fetchResults = async (searchItem) => {
    try {
      const response = await axiosInstance.get(
        `/products?populate=*&filters[title][$contains]=${searchItem}`
      );

      if (response?.status === 200) {
        setProduct(response?.data?.data);
        console.log(product);
      } else if (response?.status !== 200) {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div>
        <Breadcrumb className="custom-bread braed_cctr">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Showing Reslut for "{searchItem}"{" "}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="search_result">
        <Container>
          <Row>
            {product?.map((item, i) => {
              return (
                <>
                <Col xs={6} sm={6} lg={3} key={item?.id}>
                  <ProductCard
                    dataImage={item?.attributes?.image?.data?.attributes?.url}
                    title={item?.attributes?.title}
                    price={item?.attributes?.price}
                    rattings={item?.attributes?.rattings}
                    reviews={item?.attributes?.reviews}
                    playback={item?.attributes?.playback}
                    IsNew={item?.attributes?.IsNew}
                    wired={true}
                    isid={item?.id}
                    item={item}
                  />
                </Col>
                </>
              );
            })}
          </Row>
          <div>
            <h5 className="text-center">{product.length === 0 ? 'No Results Found' : ""}</h5>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SearchResults;
