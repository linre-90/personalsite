import React, { ReactElement, useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { NavProps } from "../types";
import Contact from "./contact";

const Nav = (props: { items: NavProps[] }): ReactElement => {
  const [active, setActive] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const navmenu = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active) {
      navmenu.current?.classList.remove("d-none");
      gsap.fromTo(
        navmenu.current,
        {
          x: 400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          display: "flex",
        }
      );
      gsap.to(openButtonRef.current, {
        rotate: 90,
      });
    } else if (!isFirstRender) {
      gsap.to(openButtonRef.current, {
        rotate: 0,
      });
      gsap.to(navmenu.current, {
        x: 400,
        opacity: 0,
        display: "none",
      });
    }

    setIsFirstRender(false);
  }, [active, isFirstRender]);

  return (
    <nav>
      <div ref={navmenu} className="nav-menu">
        <div>
          <h2 className="nav-header">Navigointi</h2>
          {props.items.map((element) => (
            <Link
              key={element.id}
              className="nav-btn"
              aria-label={`Avaa sivu ${element.id}`}
              to={element.address}
            >
              {element.id}
            </Link>
          ))}
        </div>
        <div>
          <Contact />
        </div>
      </div>

      <button
        ref={openButtonRef}
        className="menu-button"
        type="button"
        onClick={() => setActive(!active)}
        aria-label="Avaa navigointi valikko"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
