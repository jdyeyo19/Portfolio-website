import dataAnalysis from "../assets/dataAnalysisPY.jpg"
import fullStack from "../assets/FullStack.jpg"
import dataBasesSQL from "../assets/dataBasesSQL.png"
import frontEnd from "../assets/frontEnd.jpg"
import reactAd from "../assets/reactAd.jpg"

function Certificates({darkmode, englishMode}) {
  const certificates = [
    {picture: fullStack, link: "https://coursera.org/verify/specialization/QAHWCYX88KT8"},
    {picture: dataBasesSQL, link:"https://coursera.org/verify/XFDGSTMZ5M4I"},
    {picture: frontEnd, link:"https://coursera.org/verify/professional-cert/4N5MTISJ95Z4"},
    {picture: dataAnalysis, link:"https://coursera.org/verify/NAAM6B7XU58D"},
    {picture: reactAd, link: "https://coursera.org/verify/Q2QYF2ZMDHWH"}
  ];

  // duplicamos para efecto infinito
  const infiniteCertificates = [
    ...certificates,
    ...certificates,
  ];

  return (
    <section
      id="certificates"
      style={{
        minHeight: "100vh",
        backgroundColor: darkmode?"#020617":"#FDFBF4",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid px-0">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: darkmode?"white":"black",
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          {englishMode?"Certificates":"Certificados Destacados"}
        </h2>

        {/* Carrusel */}
        <div
          className="certificates-wrapper"
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            className="certificates-track"
            style={{
              display: "flex",
              width: "max-content",
              gap: "30px",
              animation: "scrollLeft 25s linear infinite",
            }}
          >
            {infiniteCertificates.map((certificate, index) => (
              <div
                key={index}
                className="certificate-card"
                style={{
                  flex: "0 0 auto",
                  width: "90vw",
                  maxWidth: "700px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  transition: "0.4s",
                }}
              >
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "100%"}}>
                  <img
                  src={certificate.picture}
                  alt={`certificate-${index}`}
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "contain",
                    display: "block",
                    borderRadius: "16px",
                  }}
                />
                </a>
              </div>
            ))}
          </div>
        </div>
        <h3 className="mt-5 ms-3 text-info">
          {englishMode?"Click on the certificate to open it"
          :"Haz click sobre el certificado para abrirlo"}
        </h3>

        {/* CSS */}
        <style>
          {`
            @keyframes scrollLeft {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }

            .certificates-wrapper:hover .certificates-track {
              animation-play-state: paused;
            }

            .certificate-card:hover {
              transform: scale(1.03);
            }

            @media (min-width: 992px) {
              .certificate-card {
                width: 45vw !important;
              }
            }

            @media (max-width: 991px) {
              .certificate-card {
                width: 90vw !important;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}

export default Certificates;