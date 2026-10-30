import React from "react";
import "./TrustSignals.css";

export default function TrustSignals() {
  return (
    <section className="trust-signals">
      <div className="container">
        <div className="trust-signals__grid">
          <div className="trust-signals__item">
            <div className="trust-signals__icon">✓</div>
            <div className="trust-signals__content">
              <h3>Heritage Craft</h3>
              <p>Handcrafted in Colombo by master artisans</p>
            </div>
          </div>

          <div className="trust-signals__item">
            <div className="trust-signals__icon">◆</div>
            <div className="trust-signals__content">
              <h3>Ethically Sourced</h3>
              <p>From Sri Lanka''s most prestigious mines</p>
            </div>
          </div>

          <div className="trust-signals__item">
            <div className="trust-signals__icon">★</div>
            <div className="trust-signals__content">
              <h3>Certified Excellence</h3>
              <p>GIA & RJC certified gemstones</p>
            </div>
          </div>

          <div className="trust-signals__item">
            <div className="trust-signals__icon">∞</div>
            <div className="trust-signals__content">
              <h3>Lifetime Guarantee</h3>
              <p>Your piece is insured forever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
