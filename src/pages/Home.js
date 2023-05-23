import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Container from "./Container";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <>
      <section>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100 resize-img"
                alt="car1"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block w-100 resize-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="d-block w-100 resize-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <div className="quote" style={{backgroundColor: "#FBF9F2", height: "40vh"}}>
          <ImQuotesLeft className="open-quote mt-4 mb-5" />
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
            soluta?
          </h2>
        </div>
      </section>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-heading mb-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "black", marginLeft: "300px" }}
                />

                <div>
                  <p style={{ width: "200px", textAlign: "center", fontSize: "20px", fontWeight: "600"}}>Our Latest Blogs</p>
                </div>

                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "black", marginRight: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>

      <Container class1="video-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-heading mb-5">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "black", marginLeft: "300px" }}
                />

                <div>
                  <p style={{ width: "200px", textAlign: "center", fontSize: "20px", fontWeight: "600"}}>Featured Videos</p>
                </div>

                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "black", marginRight: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
