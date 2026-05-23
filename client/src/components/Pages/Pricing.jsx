import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircleFill,
  ArrowRight,
  StarFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";

export default function Pricing() {
  const plans = [
    {
      badge: "MOST POPULAR",
      title: "Roof Repair",
      price: "£149",
      featured: true,
      features: [
        "Leak Detection & Fix",
        "Broken Tile Replacement",
        "Ridge Tile Repair",
        "Flashing Repairs",
        "Written Quote Included",
      ],
    },
    {
      badge: "BEST VALUE",
      title: "Full Replacement",
      price: "£3,800",
      features: [
        "Complete New Roof",
        "Tiles / Slate Options",
        "Waste Removal Included",
        "10 Year Guarantee",
        "Free Survey & Quote",
      ],
    },
    {
      badge: "FAST RESPONSE",
      title: "Emergency Callout",
      price: "£99",
      urgent: true,
      features: [
        "24/7 Emergency Support",
        "Storm Damage Help",
        "Temporary Waterproofing",
        "Rapid Attendance",
        "Same Day Options",
      ],
    },
  ];

  return (
    <>
      <main className="roof-pricing-page">
        <section className="roof-pricing-hero">
          <div className="container">
            <div className="roof-pricing-hero-box">
              <span>Home / Pricing</span>
              <h1>
                Simple Honest <strong>Pricing</strong>
              </h1>
              <p>
                Transparent starting prices with written quotes before any work
                begins. No hidden costs.
              </p>
            </div>
          </div>
        </section>

        <section className="roof-plans-section">
          <div className="container">
            <div className="row gy-4">
              {plans.map((plan, index) => (
                <div className="col-lg-4" key={index}>
                  <div
                    className={`roof-price-card ${
                      plan.featured ? "featured" : ""
                    } ${plan.urgent ? "urgent" : ""}`}
                  >
                    <div className="roof-price-badge">{plan.badge}</div>

                    <h3>{plan.title}</h3>

                    <div className="roof-price-value">
                      {plan.price}
                      <span>Starting From</span>
                    </div>

                    <ul className="roof-feature-list">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <CheckCircleFill />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="roof-plan-btn">
                      Get Quote <ArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="roof-trust-strip">
          <div className="container">
            <div className="roof-trust-wrap">
              <div className="roof-stars">
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
              </div>

              <h2>Rated 4.9/5 By Customers</h2>
              <p>
                Professional roofing service across Manchester with guaranteed
                workmanship.
              </p>
            </div>
          </div>
        </section>

        <section className="roof-pricing-cta">
          <div className="container">
            <div className="roof-pricing-cta-box">
              <h3>Need Exact Pricing?</h3>
              <p>
                Send us photos on WhatsApp or request a free written quote today.
              </p>

              <div className="roof-pricing-actions">
                <a href="tel:+447402926246" className="roof-call-btn">
                  <TelephoneFill /> Call Now
                </a>

                <a
                  href="https://wa.me/447402926246"
                  target="_blank"
                  rel="noreferrer"
                  className="roof-wa-btn"
                >
                  <Whatsapp /> WhatsApp
                </a>

                <Link to="/contact" className="roof-quote-btn">
                  Free Quote <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-pricing-page{
  font-family:'Outfit',sans-serif;
  overflow:hidden;
  background:#f7f1e8;
  color:#1f2933;
}

.roof-pricing-hero{
  padding:130px 0 95px;
  text-align:center;
  background:
    radial-gradient(circle at top left,rgba(242,192,120,.25),transparent 32%),
    radial-gradient(circle at bottom right,rgba(180,83,9,.18),transparent 35%),
    linear-gradient(135deg,#fffaf3,#f7f1e8);
}

.roof-pricing-hero-box{
  max-width:780px;
  margin:auto;
}

.roof-pricing-hero-box span{
  color:#b45309;
  font-size:13px;
  font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;
}

.roof-pricing-hero-box h1{
  font-family:'Playfair Display',serif;
  font-size:68px;
  font-weight:900;
  margin:16px 0;
  color:#1f2933;
}

.roof-pricing-hero-box h1 strong{
  color:#b45309;
}

.roof-pricing-hero-box p{
  font-size:19px;
  color:#6b5e52;
  line-height:1.8;
}

.roof-plans-section{
  padding:100px 0;
  background:#f7f1e8;
}

.roof-price-card{
  height:100%;
  position:relative;
  overflow:hidden;
  padding:42px 34px;
  border-radius:34px;
  background:#fffaf3;
  border:1px solid rgba(180,83,9,.12);
  box-shadow:0 20px 45px rgba(31,41,51,.08);
  transition:.4s ease;
}

.roof-price-card:hover{
  transform:translateY(-12px);
  box-shadow:0 35px 75px rgba(124,45,18,.24);
}

.roof-price-card.featured{
  transform:scale(1.04);
  border:2px solid #b45309;
}

.roof-price-card.featured:hover{
  transform:scale(1.04) translateY(-12px);
}

.roof-price-card::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(135deg,#7c2d12,#b45309);
  opacity:0;
  transition:.4s ease;
}

.roof-price-card:hover::before{
  opacity:1;
}

.roof-price-card > *{
  position:relative;
  z-index:2;
}

.roof-price-badge{
  display:inline-block;
  padding:8px 15px;
  border-radius:999px;
  background:#f8e4c8;
  color:#7c2d12;
  font-size:11px;
  font-weight:900;
  letter-spacing:2px;
  margin-bottom:24px;
}

.roof-price-card h3{
  font-size:30px;
  font-weight:900;
  color:#1f2933;
  margin-bottom:18px;
}

.roof-price-value{
  font-size:56px;
  font-weight:900;
  color:#b45309;
  line-height:1;
}

.roof-price-value span{
  display:block;
  font-size:14px;
  color:#6b5e52;
  margin-top:10px;
  font-weight:800;
}

.roof-feature-list{
  list-style:none;
  padding:0;
  margin:30px 0;
}

.roof-feature-list li{
  display:flex;
  align-items:center;
  gap:10px;
  padding:11px 0;
  color:#334155;
  font-weight:700;
  border-bottom:1px solid rgba(180,83,9,.12);
}

.roof-feature-list svg{
  color:#b45309;
  font-size:16px;
  min-width:16px;
}

.roof-price-card:hover h3,
.roof-price-card:hover .roof-price-value,
.roof-price-card:hover .roof-price-value span,
.roof-price-card:hover .roof-feature-list li,
.roof-price-card:hover .roof-feature-list svg{
  color:#fff;
}

.roof-price-card:hover .roof-price-badge{
  background:#fff7ed;
  color:#7c2d12;
}

.roof-price-card.urgent::before{
  background:linear-gradient(135deg,#7f1d1d,#dc2626);
}

.roof-plan-btn{
  width:100%;
  min-height:56px;
  border-radius:999px;
  text-decoration:none;
  background:linear-gradient(135deg,#b45309,#e76f51);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  font-weight:900;
  transition:.35s ease;
  box-shadow:0 18px 38px rgba(180,83,9,.24);
}

.roof-plan-btn:hover{
  color:#fff;
  transform:translateY(-5px);
}

.roof-trust-strip{
  padding:85px 0;
  background:#1f2933;
  text-align:center;
}

.roof-stars{
  color:#f2c078;
  font-size:24px;
  margin-bottom:18px;
  display:flex;
  justify-content:center;
  gap:4px;
}

.roof-trust-wrap h2{
  font-family:'Playfair Display',serif;
  font-size:44px;
  font-weight:900;
  color:#fff7ed;
  margin-bottom:14px;
}

.roof-trust-wrap p{
  color:#fdebd3;
  font-size:18px;
  margin:0;
}

.roof-pricing-cta{
  padding:95px 0;
  background:
    radial-gradient(circle at top left,rgba(242,192,120,.20),transparent 30%),
    linear-gradient(135deg,#7c2d12,#1f2933);
}

.roof-pricing-cta-box{
  text-align:center;
  max-width:820px;
  margin:auto;
}

.roof-pricing-cta-box h3{
  color:#fff7ed;
  font-size:46px;
  font-family:'Playfair Display',serif;
  font-weight:900;
}

.roof-pricing-cta-box p{
  color:#fdebd3;
  font-size:18px;
  margin:16px 0 34px;
}

.roof-pricing-actions{
  display:flex;
  justify-content:center;
  gap:14px;
  flex-wrap:wrap;
}

.roof-call-btn,
.roof-wa-btn,
.roof-quote-btn{
  min-height:56px;
  padding:0 28px;
  border-radius:999px;
  text-decoration:none;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  font-weight:900;
  transition:.35s ease;
}

.roof-call-btn,
.roof-quote-btn{
  background:#fffaf3;
  color:#1f2933;
}

.roof-wa-btn{
  background:#25D366;
  color:#fff;
}

.roof-call-btn:hover,
.roof-wa-btn:hover,
.roof-quote-btn:hover{
  color:#fff;
  background:#b45309;
  transform:translateY(-6px);
}

@media(max-width:991px){
  .roof-pricing-hero-box h1{
    font-size:50px;
  }

  .roof-price-card.featured{
    transform:none;
  }

  .roof-price-card.featured:hover{
    transform:translateY(-12px);
  }
}

@media(max-width:575px){
  .roof-pricing-hero{
    padding:90px 0 65px;
  }

  .roof-pricing-hero-box h1{
    font-size:38px;
  }

  .roof-trust-wrap h2,
  .roof-pricing-cta-box h3{
    font-size:32px;
  }

  .roof-call-btn,
  .roof-wa-btn,
  .roof-quote-btn{
    width:100%;
  }
}
      `}</style>
    </>
  );
}