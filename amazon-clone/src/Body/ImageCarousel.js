import React from 'react'
import Carousel from "flat-carousel";

const ImageCarousel = () => {
    const images = [
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573553922471&di=7b945e84e814257f816333d3afd0f4ae&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201312%2F04%2F20131204184148_hhXUT.jpeg",
            alt:""
        },
        {
          src:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yescoupons.in%2Famazon-sales%2Famazon-upcoming-sale%2F&psig=AOvVaw1Y9iu2Kan4JTnagj4QJ6vb&ust=1646480590968000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIju2K-wrPYCFQAAAAAdAAAAABAY",
            alt:""
        },
        {
          src:
            "http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg",
            alt:""
        }
      ];
  return (
    <Carousel>
      {images.map((image, index) => (
        <div
          key={index}
          className="home__image"
          style={{ backgroundImage: "url(" + image.src + ")" }}
        />
      ))}
    </Carousel>
  )
}

export default ImageCarousel