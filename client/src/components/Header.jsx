import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header() {
  return (
    <>
      <header className="roof-header">
        <div className="roof-topbar">
          <div className="container-fluid roof-container">
            <div className="roof-topbar-inner">
              <div className="roof-top-left">
                <span className="roof-live-dot"></span>
                <span>24/7 Emergency Roofing Support</span>
              </div>

              <div className="roof-top-right">
                <a href="tel:+447402926246">+44 7402 926 246</a>
                <Link to="/contact">Free Site Visit</Link>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg roof-navbar">
          <div className="container-fluid roof-container">
            <div className="roof-nav-box">
              <Link className="navbar-brand roof-brand" to="/">
                <div className="roof-logo-frame">
                  <img src="/Images/Logo.png" alt="Taylor Roofing Logo" />
                </div>

                <div className="roof-brand-text">
                  <h2>
                    TAYLOR <span>ROOFING</span>
                  </h2>
                  <small>Liverpool Roofing Experts</small>
                </div>
              </Link>

              <button
                className="navbar-toggler roof-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainMenu"
                aria-controls="mainMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse roof-collapse" id="mainMenu">
                <ul className="navbar-nav mx-auto roof-nav-links">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/our-work">Our Work</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                </ul>

                <div className="roof-nav-actions">
                  <div className="roof-call-card">
                    <span>Direct Line</span>
                    <strong>+44 7402 926 246</strong>
                  </div>

                  <Link to="/contact" className="roof-quote-btn">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-header{
  width:100%;
  position:relative;
  z-index:999;
  font-family:'Outfit',sans-serif;
  background:linear-gradient(135deg,#151d29 0%,#111827 52%,#6f2715 100%);
}

.roof-container{
  max-width:1180px;
  margin:0 auto;
  padding-left:16px;
  padding-right:16px;
}

.roof-topbar{
  padding:10px 0;
  border-bottom:1px solid rgba(255,255,255,.08);
}

.roof-topbar-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
}

.roof-top-left,
.roof-top-right{
  display:flex;
  align-items:center;
  gap:13px;
}

.roof-top-left{
  color:#fff;
  font-size:13px;
  font-weight:800;
}

.roof-live-dot{
  width:9px;
  height:9px;
  border-radius:50%;
  background:#f2c078;
}

.roof-top-right a{
  color:#fff;
  text-decoration:none;
  font-size:13px;
  font-weight:800;
  white-space:nowrap;
}

.roof-top-right a:last-child{
  padding:10px 18px;
  border-radius:999px;
  background:linear-gradient(135deg,#c85b1d,#ed7044);
}

.roof-navbar{
  padding:18px 0;
}

.roof-nav-box{
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:14px 22px;
  border-radius:24px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 22px 60px rgba(0,0,0,.25);
  backdrop-filter:blur(18px);
}

.roof-brand{
  display:flex;
  align-items:center;
  gap:14px;
  text-decoration:none;
  flex-shrink:0;
  max-width:360px;
}

.roof-logo-frame{
  width:70px;
  height:70px;
  min-width:70px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.roof-logo-frame img{
  width:100%;
  height:100%;
  object-fit:contain;
  filter:drop-shadow(0 6px 10px rgba(0,0,0,.5));
}

.roof-brand-text h2{
  margin:0;
  font-family:'Playfair Display',serif;
  font-size:28px;
  font-weight:900;
  line-height:1;
  color:#fff7ed;
  white-space:nowrap;
}

.roof-brand-text h2 span{
  color:#f2c078;
}

.roof-brand-text small{
  display:block;
  margin-top:7px;
  color:#fdebd3;
  font-size:10px;
  font-weight:800;
  letter-spacing:2px;
  text-transform:uppercase;
  white-space:nowrap;
}

.roof-collapse{
  min-width:0;
}

.roof-nav-links{
  gap:20px;
  align-items:center;
}

.roof-nav-links .nav-link{
  color:#fff !important;
  font-size:13px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.7px;
  padding:10px 0 !important;
  position:relative;
  white-space:nowrap;
}

.roof-nav-links .nav-link::after{
  content:"";
  position:absolute;
  left:50%;
  bottom:0;
  width:0;
  height:3px;
  transform:translateX(-50%);
  border-radius:20px;
  background:linear-gradient(90deg,#f2c078,#e76f51);
  transition:.25s ease;
}

.roof-nav-links .nav-link:hover,
.roof-nav-links .nav-link.active{
  color:#f2c078 !important;
}

.roof-nav-links .nav-link:hover::after,
.roof-nav-links .nav-link.active::after{
  width:100%;
}

.roof-nav-actions{
  display:flex;
  align-items:center;
  gap:14px;
  flex-shrink:0;
}

.roof-call-card{
  padding:11px 14px;
  border-radius:17px;
  background:rgba(255,255,255,.1);
  border:1px solid rgba(255,255,255,.1);
  min-width:136px;
}

.roof-call-card span{
  display:block;
  color:#fdebd3;
  font-size:9px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:1px;
}

.roof-call-card strong{
  display:block;
  color:#fff;
  font-size:13px;
  font-weight:900;
  line-height:1.35;
}

.roof-quote-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  padding:14px 20px;
  border-radius:16px;
  color:#fff;
  font-size:12px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.7px;
  background:linear-gradient(135deg,#c85b1d,#ed7044);
  white-space:nowrap;
}

.roof-quote-btn:hover{
  color:#fff;
}

.roof-toggler{
  background:#fff !important;
  border:none !important;
  border-radius:14px !important;
  padding:8px 11px !important;
  box-shadow:none !important;
}

/* Laptop fix */
@media(max-width:1200px){
  .roof-container{
    max-width:100%;
    padding-left:28px;
    padding-right:28px;
  }

  .roof-nav-box{
    padding:14px 18px;
  }

  .roof-brand{
    max-width:320px;
  }

  .roof-brand-text h2{
    font-size:25px;
  }

  .roof-nav-links{
    gap:16px;
  }

  .roof-nav-links .nav-link{
    font-size:12px;
  }

  .roof-call-card{
    display:none;
  }
}

/* Tablet / Mobile Menu */
@media(max-width:991px){
  .roof-nav-box{
    flex-wrap:wrap;
  }

  .roof-collapse{
    width:100%;
    flex-basis:100%;
  }

  .roof-nav-links{
    gap:8px;
    padding-top:20px;
    align-items:flex-start;
  }

  .roof-nav-links .nav-link{
    display:inline-block;
    font-size:14px;
    padding:9px 0 !important;
  }

  .roof-nav-actions{
    width:100%;
    margin-top:18px;
    flex-direction:column;
    align-items:stretch;
  }

  .roof-call-card{
    display:block;
    width:100%;
    text-align:left;
  }

  .roof-quote-btn{
    width:100%;
  }
}

/* Mobile */
@media(max-width:575px){
  .roof-topbar{
    display:none;
  }

  .roof-container{
    padding-left:12px;
    padding-right:12px;
  }

  .roof-navbar{
    padding:12px 0;
  }

  .roof-nav-box{
    padding:12px;
    border-radius:20px;
  }

  .roof-brand{
    gap:9px;
    max-width:calc(100% - 54px);
  }

  .roof-logo-frame{
    width:52px;
    height:52px;
    min-width:52px;
  }

  .roof-brand-text h2{
    font-size:17px;
  }

  .roof-brand-text small{
    font-size:7px;
    letter-spacing:.9px;
    margin-top:5px;
  }

  .roof-toggler{
    padding:7px 10px !important;
  }
}

@media(max-width:390px){
  .roof-logo-frame{
    width:46px;
    height:46px;
    min-width:46px;
  }

  .roof-brand-text h2{
    font-size:15px;
  }

  .roof-brand-text small{
    font-size:6.5px;
  }
}
      `}</style>
    </>
  );
}