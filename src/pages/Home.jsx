import { Link } from "react-router-dom";
import testimonials from "../data/testimonials.json";
function Home() {
  return (
    <div className="container">

      {/* HERO SECTION */}
      <section className="hero card">
        <h1>classification cleaner</h1>
        <p>Fresh • Clean • Ironed Clothes Delivered at Your Doorstep</p>

        <div style={{ marginTop: "15px" }}>
          <Link to="/booking">
            <button>Book Pickup Now</button>
          </Link>

          <Link to="/services">
            <button style={{ marginLeft: "10px", background: "#10b981" }}>
              View Services
            </button>
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="grid" style={{ marginTop: "20px" }}>
        <div className="card">
          <h2>500+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="card">
          <h2>24–48h</h2>
          <p>Fast Delivery</p>
        </div>

        <div className="card">
          <h2>100%</h2>
          <p>Fabric Safety</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="card" style={{ marginTop: "20px" }}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Professional Dry Cleaning</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ Free Pickup & Delivery</li>
          <li>✔ Express Service Available</li>
        </ul>
        <ul>
          <li>
            new line adding in project
          </li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ marginTop: "20px" }}>
        <h2>What Customers Say</h2>

        <div className="grid">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <p style={{ fontStyle: "italic" }}>
                " {t.text} "
              </p>
              <h4>- {t.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="card" style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Ready to Experience Premium Laundry Service?</h2>
        <p>Book your first pickup in just 2 minutes.</p>

        <Link to="/booking">
          <button>Get Started</button>
        </Link>
      </section>

    </div>
  );
}

export default Home;