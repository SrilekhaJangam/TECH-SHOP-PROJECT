import servicesData from "./servicesData";
import "./Services.css";

export const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Advantages</h2>

      <div className="advantages">
        {servicesData.map((item) => (
          <div className="service-card" key={item.id}>
            <div className="services-icon">
              {item.icon}
            </div>

            <div className="services-text">
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
