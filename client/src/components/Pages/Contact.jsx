import React, { useState } from "react";
import {
  TelephoneFill,
  Whatsapp,
  EnvelopeFill,
  ArrowRight,
  ClockFill,
  GeoAltFill,
  CheckCircleFill,
  ChevronDown,
  Check,
  X,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const phoneDisplay = "07402 926 246";
  const phoneHref = "tel:+447402926246";
  const whatsappHref = "https://wa.me/447402926246";

  const services = [
    "Roof Repairs",
    "Roof Replacement",
    "Flat Roofs",
    "Chimney Services",
    "Guttering & Fascias",
    "Emergency Repairs",
  ];

  const filteredServices = services.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted.");
  };

  return (
    <>
      <main className="roof-contact-page">
        <section className="roof-contact-hero">
          <div className="container">
            <div className="roof-hero-box">
              <span>Home / Contact</span>
              <h1>
                Get In <strong>Touch</strong>
              </h1>
              <p>
                Call, WhatsApp or request a written quote online. Fast replies
                and honest roofing prices.
              </p>
            </div>
          </div>
        </section>

        <section className="roof-contact-cards-section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="roof-contact-card">
                  <div className="roof-icon-box">
                    <TelephoneFill />
                  </div>
                  <h3>Call Us</h3>
                  <p>Speak directly with our roofing team.</p>
                  <a href={phoneHref} className="roof-card-btn">
                    {phoneDisplay}
                  </a>
                  <small>Mon–Sat 7am to 6pm</small>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="roof-contact-card featured">
                  <div className="roof-icon-box whatsapp">
                    <Whatsapp />
                  </div>
                  <h3>WhatsApp Quote</h3>
                  <p>Send roof photos for a faster estimate.</p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="roof-card-btn whatsapp"
                  >
                    Open WhatsApp
                  </a>
                  <small>Replies usually within 24 hours</small>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="roof-contact-card">
                  <div className="roof-icon-box email">
                    <EnvelopeFill />
                  </div>
                  <h3>Email Us</h3>
                  <p>For non-urgent enquiries and documents.</p>
                  <a
                    href="mailto:info@tylorroofing.co.uk"
                    className="roof-card-btn email"
                  >
                    Send Email
                  </a>
                  <small>Response within 24 hours</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="roof-quote-form-section">
          <div className="container">
            <div className="roof-form-head">
              <span>FASTER RESPONSE</span>
              <h2>Request a Written Quote</h2>
              <p>
                Fill in the details below and our team will get back to you with
                a transparent quote.
              </p>
            </div>

            <div className="row gy-4 align-items-stretch">
              <div className="col-lg-6">
                <div className="roof-map-wrap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.111358503463!2d-2.9064859231583933!3d53.377056972425095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21de314c9941%3A0x6f5aab759bb58b23!2sTAYLOR%20ROOFING!5e0!3m2!1sen!2s!4v1779523587207!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: "16px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="roof-form-wrap">
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-4">
                      <div className="col-md-12">
                        <label className="roof-form-label">
                          What do you need help with?
                        </label>

                        <div className="roof-multi-select-wrap">
                          <div
                            className="roof-multi-select-head"
                            onClick={() => setOpen(!open)}
                          >
                            <div className="roof-selected-tags">
                              {selected.length === 0 ? (
                                <span className="roof-placeholder">
                                  Select one or more services
                                </span>
                              ) : (
                                selected.map((item) => (
                                  <span className="roof-selected-tag" key={item}>
                                    {item}
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleService(item);
                                      }}
                                    >
                                      <X />
                                    </button>
                                  </span>
                                ))
                              )}
                            </div>

                            <ChevronDown
                              className={`roof-dropdown-arrow ${open ? "rotate" : ""
                                }`}
                            />
                          </div>

                          {open && (
                            <div className="roof-multi-dropdown">
                              <input
                                type="text"
                                placeholder="Search service..."
                                className="roof-service-search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                              />

                              <div className="roof-service-list">
                                {filteredServices.length > 0 ? (
                                  filteredServices.map((item) => (
                                    <button
                                      type="button"
                                      key={item}
                                      className={`roof-service-list-item ${selected.includes(item) ? "selected" : ""
                                        }`}
                                      onClick={() => toggleService(item)}
                                    >
                                      {item}
                                      <span className="roof-check-box">
                                        {selected.includes(item) && <Check />}
                                      </span>
                                    </button>
                                  ))
                                ) : (
                                  <p className="roof-no-service">
                                    No service found
                                  </p>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="roof-form-label">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          className="roof-input form-control"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="roof-form-label">Postcode</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. LU1 1AA"
                          className="roof-input form-control"
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="roof-form-label">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder={phoneDisplay}
                          className="roof-input form-control"
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="roof-form-label">
                          Briefly Describe The Issue
                        </label>
                        <textarea
                          rows="4"
                          placeholder="e.g. Leak coming through the kitchen ceiling..."
                          className="roof-input roof-textarea form-control"
                        ></textarea>
                      </div>

                      <div className="col-md-12">
                        <div className="roof-gdpr-box">
                          <input id="gdpr" required type="checkbox" />
                          <label htmlFor="gdpr">
                            I agree to the <strong>Privacy Policy</strong> and
                            consent to being contacted regarding my enquiry.
                          </label>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="roof-submit-btn">
                          Request My Free Quote <ArrowRight />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="roof-info-strip">
          <div className="container">
            <div className="row gy-4">
              <InfoItem icon={<ClockFill />} title="Opening Hours" text="Mon-Fri 7am–6pm" />
              <InfoItem icon={<GeoAltFill />} title="Location" text="Luton, United Kingdom" />
              <InfoItem icon={<CheckCircleFill />} title="Trusted Roofing Team" text="Fully insured and guaranteed" />
            </div>
          </div>
        </section>
      </main>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-contact-page{
  font-family:'Outfit',sans-serif;
  overflow:hidden;
  background:#f7f1e8;
  color:#1f2933;
}

.roof-contact-hero{
  padding:130px 0 95px;
  text-align:center;
  background:
    radial-gradient(circle at top left,rgba(242,192,120,.25),transparent 32%),
    radial-gradient(circle at bottom right,rgba(180,83,9,.18),transparent 35%),
    linear-gradient(135deg,#fffaf3,#f7f1e8);
}

.roof-hero-box{
  max-width:780px;
  margin:auto;
}

.roof-hero-box span,
.roof-form-head span{
  color:#b45309;
  font-size:13px;
  font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;
}

.roof-hero-box h1{
  font-family:'Playfair Display',serif;
  font-size:68px;
  font-weight:900;
  margin:16px 0;
  color:#1f2933;
}

.roof-hero-box h1 strong{
  color:#b45309;
}

.roof-hero-box p{
  font-size:19px;
  color:#6b5e52;
  line-height:1.8;
}

.roof-contact-cards-section{
  padding:95px 0;
  background:#f7f1e8;
}

.roof-contact-card{
  height:100%;
  text-align:center;
  padding:40px 34px;
  border-radius:32px;
  background:#fffaf3;
  border:1px solid rgba(180,83,9,.12);
  box-shadow:0 20px 45px rgba(31,41,51,.08);
  transition:.4s ease;
}

.roof-contact-card:hover{
  transform:translateY(-10px);
  box-shadow:0 35px 70px rgba(124,45,18,.22);
}

.roof-contact-card.featured{
  transform:scale(1.03);
}

.roof-icon-box{
  width:82px;
  height:82px;
  border-radius:25px;
  margin:0 auto 24px;
  background:linear-gradient(135deg,#b45309,#e76f51);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:36px;
}

.roof-icon-box.whatsapp{
  background:#25D366;
}

.roof-icon-box.email{
  background:#1f2933;
}

.roof-contact-card h3{
  font-size:26px;
  font-weight:900;
  color:#1f2933;
  margin-bottom:12px;
}

.roof-contact-card p{
  color:#6b5e52;
  min-height:50px;
}

.roof-card-btn{
  display:block;
  margin:22px 0 14px;
  padding:14px;
  border-radius:999px;
  background:linear-gradient(135deg,#b45309,#e76f51);
  color:#fff;
  text-decoration:none;
  font-weight:900;
  transition:.35s ease;
}

.roof-card-btn.whatsapp{
  background:#25D366;
}

.roof-card-btn.email{
  background:#1f2933;
}

.roof-card-btn:hover{
  color:#fff;
  transform:translateY(-5px);
}

.roof-contact-card small{
  color:#9a6b45;
  font-weight:700;
}

.roof-quote-form-section{
  padding:100px 0;
  background:
    radial-gradient(circle at top left,rgba(242,192,120,.22),transparent 30%),
    linear-gradient(135deg,#1f2933,#7c2d12);
}

.roof-form-head{
  text-align:center;
  max-width:760px;
  margin:0 auto 48px;
}

.roof-form-head h2{
  font-family:'Playfair Display',serif;
  font-size:50px;
  font-weight:900;
  margin:14px 0;
  color:#fff7ed;
}

.roof-form-head p{
  color:#fdebd3;
  font-size:18px;
  line-height:1.8;
}

.roof-map-wrap{
  height:100%;
  min-height:760px;
  border-radius:38px;
  overflow:hidden;
  box-shadow:0 30px 80px rgba(0,0,0,.3);
  border:1px solid rgba(255,255,255,.16);
  background:#fffaf3;
}

.roof-map-wrap iframe{
  width:100%;
  height:100%;
  border:0;
  display:block;
}

.roof-form-wrap{
  height:100%;
  background:#fffaf3;
  padding:40px;
  border-radius:38px;
  box-shadow:0 30px 80px rgba(0,0,0,.28);
  border:1px solid rgba(255,255,255,.18);
  position:relative;
  overflow:visible;
}

.roof-form-label{
  display:block;
  color:#1f2933;
  font-size:13px;
  font-weight:900;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-bottom:14px;
}

.roof-multi-select-wrap{
  position:relative;
  z-index:20;
}

.roof-multi-select-head{
  min-height:58px;
  border-radius:18px;
  border:2px solid #f8e4c8;
  background:#fff7ed;
  padding:10px 16px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  cursor:pointer;
  transition:.35s;
}

.roof-multi-select-head:hover{
  border-color:#b45309;
  background:#fffaf3;
  box-shadow:0 0 0 4px rgba(180,83,9,.08);
}

.roof-selected-tags{
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:8px;
  flex:1;
}

.roof-placeholder{
  color:#9a6b45;
  font-weight:700;
}

.roof-selected-tag{
  background:linear-gradient(135deg,#b45309,#e76f51);
  color:#fff;
  padding:7px 9px 7px 12px;
  border-radius:999px;
  font-size:12px;
  font-weight:900;
  display:flex;
  align-items:center;
  gap:7px;
}

.roof-selected-tag button{
  width:18px;
  height:18px;
  border:none;
  border-radius:50%;
  background:rgba(255,255,255,.25);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0;
}

.roof-dropdown-arrow{
  color:#b45309;
  font-size:20px;
  transition:.3s;
  flex-shrink:0;
}

.roof-dropdown-arrow.rotate{
  transform:rotate(180deg);
}

.roof-multi-dropdown{
  position:absolute;
  top:calc(100% + 10px);
  left:0;
  right:0;
  background:#fffaf3;
  border:1px solid rgba(180,83,9,.16);
  border-radius:22px;
  box-shadow:0 24px 55px rgba(31,41,51,.18);
  padding:14px;
  z-index:99;
}

.roof-service-search{
  width:100%;
  height:48px;
  border-radius:15px;
  border:2px solid #f8e4c8;
  background:#fff7ed;
  padding:0 15px;
  font-weight:700;
  outline:none;
  color:#1f2933;
  margin-bottom:12px;
}

.roof-service-list{
  max-height:220px;
  overflow-y:auto;
  display:flex;
  flex-direction:column;
  gap:8px;
  padding-right:4px;
}

.roof-service-list-item{
  border:none;
  background:#fff7ed;
  border-radius:15px;
  padding:12px 14px;
  color:#6b5e52;
  font-weight:800;
  display:flex;
  align-items:center;
  justify-content:space-between;
  transition:.25s;
}

.roof-service-list-item:hover,
.roof-service-list-item.selected{
  background:#f8e4c8;
  color:#7c2d12;
}

.roof-check-box{
  width:22px;
  height:22px;
  border-radius:50%;
  border:2px solid #e7c8a0;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:12px;
}

.roof-service-list-item.selected .roof-check-box{
  background:#b45309;
  color:#fff;
  border-color:#b45309;
}

.roof-no-service{
  margin:0;
  color:#6b5e52;
  font-weight:700;
  padding:12px;
  text-align:center;
}

.roof-input{
  min-height:58px;
  border-radius:18px !important;
  border:2px solid #f8e4c8 !important;
  background:#fff7ed !important;
  padding:14px 18px !important;
  font-weight:700;
  color:#1f2933 !important;
  transition:.35s;
}

.roof-input::placeholder{
  color:#9a6b45;
  font-weight:600;
}

.roof-input:focus{
  box-shadow:0 0 0 4px rgba(180,83,9,.1) !important;
  border-color:#b45309 !important;
  background:#fffaf3 !important;
}

.roof-textarea{
  min-height:125px !important;
  resize:none;
}

.roof-gdpr-box{
  background:#fff7ed;
  border:1px solid rgba(180,83,9,.15);
  border-radius:18px;
  padding:20px;
  display:flex;
  gap:12px;
  align-items:flex-start;
}

.roof-gdpr-box input{
  width:18px;
  height:18px;
  margin-top:2px;
  accent-color:#b45309;
}

.roof-gdpr-box label{
  color:#6b5e52;
  font-size:13px;
  line-height:1.7;
}

.roof-gdpr-box strong{
  color:#1f2933;
}

.roof-submit-btn{
  width:100%;
  min-height:62px;
  border:none;
  border-radius:999px;
  background:linear-gradient(135deg,#b45309,#e76f51);
  color:#fff;
  font-weight:900;
  font-size:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  transition:.35s ease;
  box-shadow:0 18px 38px rgba(180,83,9,.28);
}

.roof-submit-btn:hover{
  transform:translateY(-5px);
  box-shadow:0 26px 55px rgba(180,83,9,.38);
}

.roof-info-strip{
  background:#1f2933;
  padding:45px 0;
}

.roof-info-item{
  display:flex;
  gap:14px;
  color:#fff;
  align-items:flex-start;
}

.roof-info-item svg{
  font-size:24px;
  color:#f2c078;
  margin-top:4px;
}

.roof-info-item strong{
  display:block;
  font-size:16px;
}

.roof-info-item p{
  margin:4px 0 0;
  color:rgba(255,255,255,.68);
  font-size:14px;
}

@media(max-width:991px){
  .roof-hero-box h1{
    font-size:50px;
  }

  .roof-form-head h2{
    font-size:40px;
  }

  .roof-map-wrap{
    min-height:420px;
  }
}

@media(max-width:575px){
  .roof-contact-hero{
    padding:90px 0 65px;
  }

  .roof-hero-box h1{
    font-size:38px;
  }

  .roof-form-head h2{
    font-size:32px;
  }

  .roof-form-wrap{
    padding:28px 20px;
    border-radius:28px;
  }

  .roof-map-wrap{
    min-height:320px;
    border-radius:28px;
  }

  .roof-contact-card.featured{
    transform:none;
  }
}
      `}</style>
    </>
  );
}

function InfoItem({ icon, title, text }) {
  return (
    <div className="col-md-4">
      <div className="roof-info-item">
        {icon}
        <div>
          <strong>{title}</strong>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}