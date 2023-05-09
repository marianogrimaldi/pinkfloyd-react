import pic1 from "../../assets/img/gallery/1.jpg"
import pic2 from "../../assets/img/gallery/2.jpg"
import pic3 from "../../assets/img/gallery/3.webp"
import pic4 from "../../assets/img/gallery/4.jfif"
import pic5 from "../../assets/img/gallery/5.webp"
import pic6 from "../../assets/img/gallery/6.jpg"
import pic7 from "../../assets/img/gallery/7.jpg"
import pic8 from "../../assets/img/gallery/8.jpg"
import "./gallery.scss"


const Gallery = () => {
    return(
            <div className="gridGallery">
                <img src={pic1} alt="" />
                <img src={pic2} alt="" />
                <img src={pic4} alt="" />
                <img src={pic5} alt="" />
                <img src={pic6} alt="" />
                <img src={pic3} alt="" />
                <img src={pic7} alt="" />
                <img src={pic8} alt="" />
            </div>
    )
}

export default Gallery