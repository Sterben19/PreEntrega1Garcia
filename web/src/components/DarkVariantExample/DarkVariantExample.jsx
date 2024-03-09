import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/385047996_1149835606078782_2950187936067094610_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGSXLdr09o7Xxjhzi88zjHUOy4F9I3-Fhw7LgX0jf4WHKuVaSakzOoJEGLX5vMF6wY51jmYW_b9JHk-kiNplhrb&_nc_ohc=d9AY3lWL3fAAX-03Lua&_nc_ht=scontent.fbog4-2.fna&oh=00_AfAwINguPfTzmyE4-UYh9PvpNh06hxnieGo46GJfU93rdA&oe=65E90CA9"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Second+slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Third+slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
