import { Link } from "react-router-dom";
import breadcrumsImage from "/assets/images/page-header-img-1.png";
export default function Breadcrumb({ title, breadcrumbs }) {
  return (
    <>
      <section className="page-header">
        <div className="page-header__shape-1">
          <img
            src="https://erepair.vercel.app/assets/images/shapes/page-header-shape-1.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <div className="page-header__img-1">
              <img src={breadcrumsImage} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                {breadcrumbs.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <Link to={item.link}>{item.name}</Link>
                    ) : (
                      <span>{item.name}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <span className="icon-angle-right"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
