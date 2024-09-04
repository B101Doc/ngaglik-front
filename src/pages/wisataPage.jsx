/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/wisataStyle.css";
import { json, Link } from "react-router-dom";
import DateLogo from "../assets/dateLogo.png";

const WisataHeader = ({ judul }) => {
  return (
    <div class="container" id="headWisata">
      <div class="home">
        <Link to={"/"}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&"
            alt="to-home"
          />
        </Link>
      </div>
      <div class="slash">
        <h4>/</h4>
      </div>
      <h4>
        <b>{judul}</b>
      </h4>
    </div>
  );
};
const WisataPage = ({ tourisms, articles }) => {
  console.log("Wisata Page", tourisms, articles);
  const sideNews = articles.data.slice(0, 4).sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt))

  const sideNewsDates = () => {
    return articles.data.map((article, index) => {
      const date = new Date(article.attributes.createdAt)
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`

      return <p key={index}>{formattedDate}</p>
    })
  }
  return (
    <>
      <WisataHeader judul="Wisata Kelurahan Ngaglik"></WisataHeader>
      <div className="main">
        <div className="container" id="main_content">
          <p>
            Selamat datang di Daringan Kelurahan Ngaglik, sebuah destinasi yang
            memadukan potensi seni dan budaya untuk menghadirkan kearifan lokal
            sebagai Wilayah Layak Wisata. Terletak di jantung Kota Wisata Batu,
            Daringan Ngaglik menawarkan berbagai pengalaman yang kaya akan
            nilai-nilai tradisional dan keindahan budaya. Mari jelajahi berbagai
            program dan kegiatan kami:
          </p>

          {tourisms.data.map((tourism) => (
            <div class="wisata_1">
              <h6>
                <b>
                  {tourism.id}. {tourism.attributes.Nama}
                </b>
              </h6>
              <div class="container" id="desc">
                <img src={`http://localhost:1337${tourism.attributes.Cover.data.attributes.url}`} />
                <p>{tourism.attributes.Nama}</p>
              </div>
              <a href={tourism.attributes.Link}>Alamat</a>
            </div>
          ))}
        </div>
        <div className="container" id="SideNews">
          <div class="title">
            <h5>
              <b>BERITA TERKINI</b>
            </h5>
          </div>
          <div className="SideNewsContent">
            {sideNews.map((sideNew) => {

              const date = new Date(sideNew.attributes.createdAt)
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`


              return (
                <div className="beritaTerkini">
                  <div class="container" id="sideBerita">
                    <Link to={"/berita"}>
                      <img src={`http://localhost:1337${sideNew.attributes.Cover.data.attributes.url}`} alt="berita" />
                    </Link>
                    <Link to={`/berita/artikel/${sideNew.id}`} key={sideNew.id}>
                      <p>
                        {sideNew.attributes.Judul} <br />
                        <div className="date">
                          <img src={DateLogo} alt="..." id="logo_date" />
                          <p>{formattedDate}</p>
                        </div>
                      </p>
                    </Link>
                  </div>
                  <div class="separator"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WisataPage;
