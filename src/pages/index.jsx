import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'
import { StaticImage } from "gatsby-plugin-image"
import Draggable from 'react-draggable';
import { FaPinterest, FaInstagram, FaAmazon } from "react-icons/fa"
import BigImageBox from "../component/BigImageBox";
import { Helmet } from "react-helmet"
import PillOrganizerVideo from "../images/PILL-ORGANIZER-REVISION.mp4"


const Home = () => {

  const ImageGallery = [
    {
      thumbnail: <StaticImage
        src="../images/main pill organizer.jpg"
        height={300}
        width={300}
        className="rounded"
        imgStyle={{ objectFit: "contain", objectPosition: "10% 50%" }}
      />,
      fullImage: <StaticImage
        src="../images/main pill organizer.jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../images/02.jpg"
        height={150}
        width={150}
        className="rounded"
        imgStyle={{ objectFit: "contain", objectPosition: "10% 50%" }}
      />,
      fullImage: <StaticImage
        src="../images/02.jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../images/5.jpg"
        height={150}
        width={150}
        className="rounded"
        imgStyle={{ objectFit: "contain", objectPosition: "10% 50%" }}
      />,
      fullImage: <StaticImage
        src="../images/5.jpg"
        height={600}
      />
    },
  ]

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title="Weekly Pill Organizer - MuffShell"
        meta={[
          {
            name: "discription",
            content: "Get weekly pill organizer with pill crusher. It's so important if the pills you take is humidity sensitive, also it adds a degree of comfort in knowing the case will keep your medicines or supplements away from water or humidity"
          },
        ]}
      />
      <Draggable>
        <div className="facebook-icon">
          <a href="https://www.pinterest.com/muffshell/_created/">
            <FaPinterest size={50} color="white" />
          </a>
        </div>
      </Draggable>
      <Draggable>
        <div className="instagram-icon">
          <a href="https://www.instagram.com/muffshellstore/">
            <FaInstagram size={50} color="white" />
          </a>
        </div>
      </Draggable>
      <div className="container-fluid banner">
        <div className="container text-center bg-grey">
          <StaticImage
            src="../images/muffshell-logo.png"
            height={600}
          />
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <h1 className="text-center main-heading">Weekly <b>Pill</b> Organizer</h1>

          <div className="row py-5 border-bottom">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 border">
                  <BigImageBox image={ImageGallery[0]} />
                </div>
                <div className="col-md-6 border">
                  <BigImageBox image={ImageGallery[1]} />
                </div>
                <div className="col-md-6 border">
                  <BigImageBox image={ImageGallery[2]} />
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <p className="para-size">
                The latest design has been used on this weekly <b>pill organizer</b> to achieve one-handed operation with the little rubber strips for the smart "spring open lid" feature. The lids are all beautifully colored and marked clearly with the day, everything is clear at a glance so you may find it easy to choose the pills you need.
              </p>
              <a href="https://www.amazon.com/muffshell" className="btn btn-lg btn-success text-white">Order Now <FaAmazon color="white" size={30} /></a>
            </div>
          </div>

          <div className="row align-items-center justify-content-center border-bottom py-5">
            <h2 className="main-heading text-center">Combo Pack Of Pill Organizer {"&"} Pill Crusher <b>(Pill grinder)</b>: </h2>
            <div className="col-md-4 text-center py-4">
              <StaticImage
                src="../images/pill-crusher.jpg"
              />
            </div>
            <div className="col-md-8">
              <p className="para-size my-4"><b>Muffshell Pill Crusher</b> is constructed in such a way that makes crushing multiple pills at once not only convenient but easy. The pill crushing system is simple to use and can be operated with ease. Gradually apply more pressure until the pills have fully converted into powder form.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-5">
        <div className="container">
          <h3 className="main-heading text-center my-4">MuffShell <b>Pill Organizer</b> Video Overview</h3>
          <video controls autoplay loop width="100%">
            <source src={PillOrganizerVideo} type="video/mp4" />
          </video>
        </div>
      </div>



      <footer className="container-fluid footer py-5">
        <div className="container">
          <p className="text-white m-0 font-size-sm text-center">MuffShell, All Rights Reserved. Design By Ubaid Malik</p>
        </div>
      </footer>
    </>
  )
}

export default Home;
