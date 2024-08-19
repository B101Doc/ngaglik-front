import React from "react";
import { Link } from "react-router-dom";
import "../styles/profilStyle.css";

const Headerprofil = ({ title, iconSrc }) => {
  return (
    <div className="container" id="head">
      <div class="home">
        <Link to={"/"}>
          <img src={iconSrc} alt="to-home" />
        </Link>
      </div>
      <div class="slash">
        <h4>/</h4>
      </div>
      <h4>
        <b>{title}</b>
      </h4>
    </div>
  );
};

const ProfilPage = ({ members, introduction }) => {
  console.log("Profile Page", members, introduction);

  const lurahBox = members.data.slice(0, 1)
  const membersBox = members.data.slice(1)

  console.log("Lurah", lurahBox)

  return (
    <>
      <Headerprofil
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1d320f8d89b47010171b3bb9d12cb64d2abb82d649b558d2cd6b02d5d9e50f18?apiKey=236d0a87b9ca46baa5b67a2b5a718b65&"
        title="Profil Singkat Kelurahan Ngaglik"
      />
      <div className="container" id="explanation">
        <img src={`http://localhost:1337${introduction.data.attributes.cover.data.attributes.url}`} alt="Gambar kelurahan" />
        <div className="container" id="explain">
          <p>
            <b>{introduction.data.attributes.text}</b>
          </p>
        </div>
      </div>
      <div className="container">
        <main>
          <section className="section">
            <div className="container">
              <h2 className="section-title">
                <b>Struktur Anggota Kelurahan Ngaglik</b>
              </h2>
              <div className="lurah-flex"
                key={lurahBox[0].attributes.id}
                id={lurahBox[0].attributes.id}>
                <img
                  loading="lazy"
                  src={`http://localhost:1337${lurahBox[0].attributes.Photo.data.attributes.url}`}
                  className="img"
                  alt={lurahBox[0].attributes.Name}
                />
                <div className="team-member-info">
                  <div className="team-member-name">
                    {lurahBox[0].attributes.Name}
                  </div>
                  <div className="team-member-position">
                    {lurahBox[0].attributes.Position}
                  </div>
                </div>
              </div>
              <div className="team-grid">

                {membersBox.map((memberBox) => (
                  <div
                    key={memberBox.attributes.id}
                    className="team-member"
                    id={memberBox.attributes.id}
                  >
                    <img
                      loading="lazy"
                      src={`http://localhost:1337${memberBox.attributes.Photo.data.attributes.url}`}
                      className="img"
                      alt={memberBox.attributes.Name}
                    />
                    <div className="team-member-info">
                      <div className="team-member-name">
                        {memberBox.attributes.Name}
                      </div>
                      <div className="team-member-position">
                        {memberBox.attributes.Position}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProfilPage;
