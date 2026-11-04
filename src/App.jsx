import { useState } from "react";
import "./App.css";
const pricingData = {
  residential: {
    label: "Residential Cleaning",
    sizes: [
      { value: "1", label: "1 bedroom", price: 25000 },
      { value: "2", label: "2 bedrooms", price: 40000 },
      { value: "3", label: "3 bedrooms", price: 60000 },
      { value: "4", label: "4 bedrooms", price: 80000 },
      { value: "5", label: "5+ bedrooms", price: 100000 },
    ],
  },

  commercial: {
    label: "Commercial Cleaning",
    sizes: [
      { value: "small", label: "Small office", price: 50000 },
      { value: "medium", label: "Medium office", price: 100000 },
      { value: "large", label: "Large office", price: 180000 },
      { value: "institution", label: "Large institution", price: null },
    ],
  },

  upholstery: {
    label: "Cushion & Upholstery Cleaning",
    sizes: [
      { value: "single", label: "Single-seater sofa", price: 8000 },
      { value: "double", label: "Two-seater sofa", price: 15000 },
      { value: "triple", label: "Three-seater sofa", price: 20000 },
      { value: "five", label: "Five-seater set", price: 35000 },
      { value: "extra", label: "Extra-large furniture", price: null },
    ],
  },

  fumigation: {
    label: "Fumigation & Pest Control",
    sizes: [
      { value: "small", label: "Small apartment", price: 30000 },
      { value: "2", label: "2-bedroom apartment", price: 45000 },
      { value: "3", label: "3-bedroom apartment", price: 60000 },
      { value: "4", label: "4-bedroom apartment", price: 80000 },
      { value: "large", label: "Large premises", price: null },
    ],
  },

  construction: {
    label: "Post-Construction Cleaning",
    sizes: [
      { value: "small", label: "Small apartment", price: 60000 },
      { value: "2", label: "2-bedroom apartment", price: 90000 },
      { value: "3", label: "3-bedroom apartment", price: 130000 },
      { value: "4", label: "4-bedroom apartment", price: 170000 },
      { value: "large", label: "Large building", price: null },
    ],
  },
  industrial: {
  label: "Industrial Cleaning",
  sizes: [
    { value: "small", label: "Small workshop", price: null },
    { value: "medium", label: "Medium industrial facility", price: null },
    { value: "large", label: "Large factory or warehouse", price: null },
    { value: "custom", label: "Other industrial facility", price: null },
  ],
},
};
const WHATSAPP_NUMBER = "2349043241871";
function App() {
  const [selectedService, setSelectedService] = useState("residential");
  const [selectedSize, setSelectedSize] = useState("");
  const [bookingService, setBookingService] = useState("");
  const currentService = pricingData[selectedService];

  const currentSize = currentService.sizes.find(
    (size) => size.value === selectedSize
  );

  const formattedPrice = currentSize?.price != null
    ? `₦${currentSize.price.toLocaleString("en-NG")}`
    : null;
  const handleWhatsAppQuote = () => {
  if (!selectedSize) {
    alert("Please select your cleaning service and space size.");
    return;
  }

  const message = `
Hello HELFECT CLEANING AGENCY!

I would like to request a cleaning quotation.

Service: ${currentService.label}
Space size: ${currentSize.label}
Estimated price: ${formattedPrice || "Custom quotation"}

Please provide more information about your service.

Thank you.
  `;

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
};
const handleBookingSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const customerName = formData.get("customerName");
  const customerPhone = formData.get("customerPhone");
  const customerLocation = formData.get("customerLocation");
  const serviceKey = formData.get("bookingService");
  const bookingDate = formData.get("bookingDate");

  const serviceName = pricingData[serviceKey].label;

  const message = `Hello HELFECT CLEANING AGENCY! I would like to request a cleaning booking.

 Full Name: ${customerName} Phone Number: ${customerPhone} Location: ${customerLocation} Cleaning Service: ${serviceName}
 Preferred Date: ${bookingDate}
Please contact me with more information.
Thank you.`;

  const whatsappURL = `https://wa.me/2349043241871?text=${encodeURIComponent(message)}`;
 window.open(whatsappURL, "_blank", "noopener,noreferrer");
};

  return (
    <div className="website">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          HELFECT
          <span>CLEANING AGENCY</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="nav-button"
        >
          Book a Cleaning <span>↗</span>
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            ✦ PROFESSIONAL CLEANING SERVICES
          </p>

          <h1>
            We Make Clean
            <br />
            <span>Feel Different.</span>
          </h1>

          <p className="hero-description">
            From comfortable homes to professional
            workspaces, we bring freshness, care and
            excellence to every space we clean.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Book a Cleaning <span>↗</span>
            </a>

            <a href="#services" className="secondary-button">
              Explore Our Services
            </a>
          </div>

          <div className="hero-trust">
            <span>✓ Residential Cleaning</span>
            <span>✓ Commercial Cleaning</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-note">
            <span className="note-icon">✦</span>
            <div>
              <strong>A Cleaner Space.</strong>
              <p>A Better Feeling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION STRIP */}
      <section className="intro-strip">
        <p>YOUR SPACE DESERVES THE BEST</p>
        <span>Cleanliness is more than appearance. It's a feeling.</span>
      </section>
       
{/* SERVICES SECTION */}
<section className="services-section" id="services">

  <div className="section-heading">
    <p className="section-label">WHAT WE DO</p>
    <h2>Cleaning solutions for <span>every space.</span></h2>
    <p>
      Whether it's your home, office or furniture,
      we provide thoughtful cleaning services that
      leave every space feeling fresh.
    </p>
  </div>

  <div className="services-grid">

    <article className="service-card">
      <img
        src="/residential.jpeg"
        alt="Professional residential cleaning"
      />
      <div className="service-info">
        <span className="service-number">01 / RESIDENTIAL</span>
        <h3>Residential Cleaning</h3>
        <p>
          Give your home the care it deserves with
          detailed cleaning for bedrooms, kitchens,
          bathrooms and living spaces.
        </p>
        <a href="#contact"  onClick={() => setBookingService("residential")}>Book This Service ↗</a>
      </div>
    </article>

    <article className="service-card">
      <img
        src="/commercial.jpeg"
        alt="Clean professional office"
      />
      <div className="service-info">
        <span className="service-number">02 / COMMERCIAL</span>
        <h3>Commercial Cleaning</h3>
        <p>
          Maintain a neat and welcoming business
          environment with professional office and
          workspace cleaning.
        </p>
        <a href="#contact" onClick={() => setBookingService("commercial")}>Book This Service ↗</a>
      </div>
    </article>

    <article className="service-card">
      <img src="/cushionp.jpeg" alt="Clean sofa and upholstered furniture"/>
      <div className="service-info">
        <span className="service-number">03 / UPHOLSTERY</span>
        <h3>Cushion & Upholstery Cleaning</h3>
        <p>
          Refresh sofas, cushions and upholstered
          furniture by tackling dirt, stains and
          unpleasant odours.
        </p>
        <a href="#contact" onClick={() => setBookingService("upholstery")}>Book This Service ↗</a>
      </div>
    </article>

    <article className="service-card">
     <img src="/fumigation.png" alt="Professional fumigation technician treating a living space" />
      <div className="service-info">
        <span className="service-number">04 / PEST CONTROL</span>
        <h3>Fumigation & Pest Control</h3>
        <p> Help protect your home or workplace from common pests with professional fumigation and pest-control services. </p>
        <a href="#contact" onClick={() => setBookingService("pest-control")}>Book This Service ↗</a>
      </div>
    </article>

    <article className="service-card">
      <img src="/postconstruction.jpeg" alt="Newly constructed building"/>
      <div className="service-info">
        <span className="service-number">05 / SPECIALIZED</span>
        <h3>Post-Construction Cleaning</h3>
        <p>Get your newly built or renovated space ready for use with detailed removal of dust, dirt and construction residue.</p>
        <a href="#contact" onClick={() => setBookingService("post-construction")}>Book This Service ↗</a>
      </div>
    </article>
     <article className="service-card">
     <img src="/industrial.jpeg" alt="Industrial cleaning and facility maintenance"/>

     <div className="service-info">
     <span className="service-number">06 / INDUSTRIAL</span>

    <h3>Industrial Cleaning</h3>

    <p> Specialized cleaning solutions for factories,warehouses, workshops and production facilities. We help maintain cleaner, safer and more organized
   industrial environments.</p>

    <a href="#contact" onClick={() => setBookingService("industrial")}>Book This Service ↗</a>
     </div>
   </article>
    </div>
     </section>
      {/* ABOUT US SECTION */}
   <section className="about-section" id="about">

   <div className="about-image">
    <img src="/cleaning service.png" />
   </div>

   <div className="about-content">
    <p className="section-label">GET TO KNOW US</p>

    <h2> More than cleaning.<span> We care for your space.</span> </h2>

    <p>At HELFECT CLEANING AGENCY, we believe every space deserves attention, care and a professional
      touch. We provide cleaning solutions for homes,offices and institutions, helping create cleaner,
    healthier and more welcoming environments. </p>

    <p> From everyday cleaning to specialized services,our goal is to make every cleaning experience convenient, reliable and satisfying. </p>
    <a href="#contact" className="primary-button" onClick={() => setBookingService("about")}> Get in Touch ↗</a>
     </div>

    </section>
    {/* WHY CHOOSE US SECTION */}
   <section className="why-section" id="why-us">

   <div className="section-heading">
    <p className="section-label">THE HELFECT DIFFERENCE</p>

    <h2>
      Quality you can see.
      <span> Care you can feel.</span>
    </h2>

    <p>
      We go beyond ordinary cleaning to deliver
      an experience built around quality, trust
      and attention to detail.
    </p>
   </div>

   <div className="why-grid">

    <article className="why-card">
      <span className="why-icon">✦</span>
      <h3>Attention to Detail</h3>
      <p>
        We pay attention to the little things
        that make a big difference in the
        cleanliness of your space.
      </p>
    </article>

    <article className="why-card">
      <span className="why-icon">♧</span>
      <h3>Professional Service</h3>
      <p>
        We approach every cleaning task with
        professionalism, care and a commitment
        to quality.
      </p>
    </article>

    <article className="why-card">
      <span className="why-icon">◇</span>
      <h3>Reliable & Convenient</h3>
      <p>
        We make it easier to maintain clean
        spaces with convenient booking and
        dependable service.
      </p>
    </article>

    <article className="why-card">
      <span className="why-icon">❋</span>
      <h3>Solutions for Every Space</h3>
      <p>
        From homes and offices to institutions
        and specialized cleaning needs, we have
        solutions for different environments.
      </p>
    </article>

   </div>

   </section>
   {/* TESTIMONIALS SECTION */}
<section className="testimonials-section" id="testimonials">
  <div className="section-heading">
    <p className="section-label">CLIENT EXPERIENCES</p>
    <h2>Good spaces. <span>Great experiences.</span></h2>
    <p>
      The difference is in the details, and the experience
      should be just as satisfying as the results.
    </p>
  </div>

  <div className="testimonials-grid">
    <article className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <p className="testimonial-text">
        "The attention to detail made all the difference.
        My space felt fresh, clean and beautifully cared for."
      </p>
      <div className="testimonial-author">
        <div className="author-initial">A</div>
        <div>
          <h4>Agbo Jude</h4>
          <span>Residential Cleaning</span>
        </div>
      </div>
    </article>

    <article className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <p className="testimonial-text">
        "A thoughtful and professional approach from
        beginning to end. The result was exactly the kind
        of clean environment we wanted."
      </p>
      <div className="testimonial-author">
        <div className="author-initial">B</div>
        <div>
          <h4>Williams Okoro</h4>
          <span>Commercial Cleaning</span>
        </div>
      </div>
    </article>

    <article className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <p className="testimonial-text">
        "The experience was smooth and convenient.
        I appreciated the care given to every part of
        the cleaning process."
      </p>
      <div className="testimonial-author">
        <div className="author-initial">C</div>
        <div>
          <h4>Amara Okafor</h4>
          <span>Upholstery Cleaning</span>
        </div>
      </div>
    </article>
   </div>
   </section>
    {/* OUR WORK SECTION */}
    <section className="work-section" id="work">

   <div className="section-heading">
    <p className="section-label">A LOOK AT OUR WORK</p>

    <h2>
      Every detail matters.
      <span> Every space shines.</span>
    </h2>

    <p>
      We believe the quality of our work should
      speak for itself. Here's a glimpse of the
      clean, fresh spaces we aim to create.
    </p>
   </div>

   <div className="work-grid">

     <div className="work-item work-large">
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
        alt="Beautifully cleaned modern living room"
      />
      <div className="work-overlay">
        <span>RESIDENTIAL CLEANING</span>
        <h3>A fresh start at home</h3>
      </div>
     </div>

     <div className="work-item">
      <img
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85"
        alt="Modern professional office environment"
      />
      <div className="work-overlay">
        <span>COMMERCIAL CLEANING</span>
        <h3>Spaces ready for business</h3>
      </div>
    </div>

    <div className="work-item">
      <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85"
        alt="Clean and comfortable upholstered sofa"
      />
      <div className="work-overlay">
        <span>UPHOLSTERY CARE</span>
        <h3>Comfort worth keeping</h3>
      </div>
     </div>
     
    </div>
  

   </section>
   {/* FAQ SECTION */}
<section className="faq-section" id="faq">
  <div className="faq-heading">
    <p className="section-label">GOT QUESTIONS?</p>
    <h2>Answers to help you <span>feel confident.</span></h2>
    <p>
      Here are answers to some common questions about our
      cleaning services and booking process.
    </p>
  </div>

  <div className="faq-container">

    <details className="faq-item">
      <summary>What types of cleaning services do you offer?</summary>
      <p>
        We offer residential cleaning, commercial cleaning,
        upholstery cleaning, fumigation and pest control,
        post-construction cleaning and industrial cleaning.
      </p>
    </details>

    <details className="faq-item">
      <summary>Do you provide cleaning services for offices and institutions?</summary>
      <p>
        Yes. We serve homes, offices, institutions, warehouses,
        factories and other commercial spaces.
      </p>
    </details>

    <details className="faq-item">
      <summary>How do I book a cleaning service?</summary>
      <p>
        You can complete our booking form on the website.
        Your details will be prepared in a WhatsApp message
        so you can send your request directly to us.
      </p>
    </details>

    <details className="faq-item">
      <summary>How much do your cleaning services cost?</summary>
      <p>
        Our estimated prices depend on the type of service
        and size of the space. Some services require an
        assessment before we can provide a final quotation.
      </p>
    </details>

    <details className="faq-item">
      <summary>Do I need to be present during cleaning?</summary>
      <p>
        Not necessarily. This can be discussed during booking.
        We will agree on access arrangements and any necessary
        instructions before the cleaning appointment.
      </p>
    </details>

    <details className="faq-item">
      <summary>How should I prepare for fumigation?</summary>
      <p>
        Preparation depends on the treatment required.
        Customers should follow the technician's instructions,
        vacate the treated area when advised and only re-enter
        when the technician confirms it is safe.
      </p>
    </details>

    <details className="faq-item">
      <summary>Can I request a cleaning service for a large facility?</summary>
      <p>
        Absolutely. We provide cleaning solutions for larger
        facilities, including factories, warehouses and
        institutional environments. Contact us for a
        personalised assessment and quotation.
      </p>
    </details>

  </div>
</section>
  
   {/* PRICING & COST ESTIMATOR */}
   <section className="pricing-section" id="pricing">

   <div className="section-heading">
    <p className="section-label">PLAN YOUR CLEANING</p>

    <h2> Quality cleaning.<span> Clear estimates.</span></h2>

    <p> Tell us what you need cleaned and the size of your space. Get an estimated price before requesting your personalised quotation.</p>
   </div>

   <div className="estimator-box">

    <div className="estimator-heading">
      <span>✦ HELFECT COST ESTIMATOR</span>
      <h3>Let's estimate your cleaning cost.</h3>
      <p> Choose your preferred service and property size to see your estimated price.</p>
    </div>

    <div className="estimator-fields">

      <div className="estimator-field">
        <label htmlFor="service">Cleaning service</label>

        <select id="service" value={selectedService} onChange={(e) => { setSelectedService(e.target.value); setSelectedSize("");
          }} >
          {Object.entries(pricingData).map(([key, service]) => (<option key={key} value={key}> {service.label}</option>
          ))}
        </select>
      </div>

      <div className="estimator-field">
        <label htmlFor="size">Property or furniture size</label>

        <select id="size" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} >
          <option value="">Select your space size</option>

          {currentService.sizes.map((size) => (<option key={size.value} value={size.value}> {size.label}</option>
          ))}
        </select>
      </div>

    </div>

    <div className="estimate-result">

      <p>YOUR ESTIMATED CLEANING COST</p>

      <h3>
        {!selectedSize
          ? "₦0"
          : formattedPrice || "Custom Quote"}
      </h3>

      <span>
        {!selectedSize
          ? "Choose your service and size to calculate your estimate."
          : formattedPrice
            ? "This is your estimated cleaning cost. Final price is subject to assessment."
            : "Contact us for a personalised quotation for this space."}
      </span>

    </div>

    <button className="estimate-button" type="button" onClick={handleWhatsAppQuote}> Get My Quote on WhatsApp ↗ </button>

    <p className="estimate-note"> *Estimates are subject to final assessment and confirmation.</p>

  </div>

</section>
<section className="contact-section" id="contact">
  <div className="contact-heading">
    <p className="section-label">LET'S GET STARTED</p>
    <h2>A cleaner space is just a conversation away.</h2>
    <p>
      Tell us what you need, and let's find the right cleaning
      solution for your space.
    </p>
  </div>

  <div className="contact-container">
    <div className="contact-details">
      <h3>Let's talk about your space.</h3>
      <p>  Whether it's your home, office, institution or industrial facility, we're ready to help.</p>

      <p><strong>Phone:</strong> +234 904 324 1871</p>
      <p><strong>Service:</strong> Residential & Commercial Cleaning</p>
      <p><strong>Location:</strong> Lagos, Nigeria</p>
    </div>
    <form className="booking-form" onSubmit={handleBookingSubmit}>
  <label htmlFor="customer-name">Full Name</label>
  <input
    type="text"id="customer-name"name="customerName"placeholder="Enter your full name" required/>

  <label htmlFor="customer-phone">Phone Number</label>
  <input type="tel"id="customer-phone"name="customerPhone"placeholder="Enter your phone number"required/>

  <label htmlFor="customer-location">Your Location</label>
  <input type="text" id="customer-location"name="customerLocation"placeholder="Enter your area or address"required/>

  <label htmlFor="booking-service">Cleaning Service</label>
  <select id="booking-service" name="bookingService"value={bookingService}onChange={(e) => setBookingService(e.target.value)}required>
    <option value="" disabled>Select a service</option>
    {Object.entries(pricingData).map(([key, service]) => (
      <option key={key} value={key}>
        {service.label}
      </option>
    ))}
  </select>

  <label htmlFor="booking-date">Preferred Date</label>
  <input type="date"id="booking-date"name="bookingDate"min={new Date().toISOString().split("T")[0]}  required/>

  <button type="submit" className="primary-button">
    Request a Booking on WhatsApp ↗
  </button>
</form>
    
  </div>
 </section>
 <a href="https://wa.me/2349043241871?text=Hello%20HELFECT%20CLEANING%20AGENCY!%20I%20would%20like%20to%20make%20an%20enquiry."
  className="floating-whatsapp"target="_blank"rel="noopener noreferrer"aria-label="Chat with HELFECT on WhatsApp">
<svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
 <path d="M16 .5C7.45.5.5 7.45.5 16c0 2.73.72 5.4 2.08 7.75L.5 31.5l8-2.1A15.4 15.4 0 0 0 16 31.5c8.55 0 15.5-6.95 15.5-15.5S24.55.5 16 .5zm0 28.2c-2.4 0-4.75-.65-6.8-1.9l-.5-.3-4.75 1.25 1.27-4.62-.32-.52A12.7 12.7 0 1 1 16 28.7zm6.97-9.52c-.38-.19-2.22-1.1-2.57-1.22-.35-.13-.6-.19-.85.19-.25.38-.97 1.22-1.19 1.47-.22.25-.44.28-.82.09-.38-.19-1.6-.59-3.05-1.88-1.13-1.01-1.9-2.26-2.12-2.64-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.07-.47-.03-.66-.1-.19-.85-2.05-1.17-2.8-.31-.73-.62-.63-.85-.64l-.72-.01c-.25 0-.66.09-1 .47-.35.38-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.66 4.06 6.44 5.69.9.39 1.6.62 2.14.79.9.29 1.72.25 2.37.15.72-.11 2.22-.91 2.53-1.79.31-.88.31-1.63.22-1.79-.09-.16-.34-.25-.72-.44z"/>
</svg>
</a>
{/* FOOTER SECTION */}
<footer className="footer-section">
  <div className="footer-container">

    <div className="footer-brand">
      <h2>HELFECT<span>.</span></h2>
      <p className="footer-tagline">
        We Make Clean Feel Different.
      </p>
      <p>
        Professional cleaning. Thoughtful care.
        Beautiful spaces. We bring quality and
        attention to detail to every environment.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#services">Our Services</a>
      <a href="#work">Our Work</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#faq">FAQs</a>
      <a href="#contact">Contact Us</a>
    </div>

    <div className="footer-links">
      <h3>Our Services</h3>
      <a href="#services">Residential Cleaning</a>
      <a href="#services">Commercial Cleaning</a>
      <a href="#services">Upholstery Cleaning</a>
      <a href="#services">Fumigation</a>
      <a href="#services">Post-Construction</a>
      <a href="#services">Industrial Cleaning</a>
    </div>

    <div className="footer-contact">
      <h3>Get In Touch</h3>
      <p>Lagos, Nigeria</p>
      <p>+234 904 324 1871</p>
      <a
        href="https://wa.me/2349043241871"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat with us on WhatsApp ↗
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} HELFECT CLEANING AGENCY. All rights reserved.</p>
    <p>Designed with care for cleaner, better spaces.</p>
  </div>
</footer>
    </div>
  );
}

export default App;
