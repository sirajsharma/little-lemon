import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

type NavLinksProps = {
  isMobile?: boolean;
  closeMobileMenu?: () => void;
};

const NavLinks = (props: NavLinksProps) => {
  const { closeMobileMenu, isMobile } = props;

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <motion.ul
      className="menu-items"
      initial={animateFrom}
      animate={animateTo}
      transition={{ delay: 0.05 }}
    >
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => isMobile && closeMobileMenu?.()}
      >
        <NavLink to="/" className="active-links">
          Home
        </NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => isMobile && closeMobileMenu?.()}
      >
        <NavLink to="#">About</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={() => isMobile && closeMobileMenu?.()}
      >
        <NavLink to="#">Menu</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => isMobile && closeMobileMenu?.()}
      >
        <NavLink to="/reservations" className="active-links">
          Reservations
        </NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        onClick={() => isMobile && closeMobileMenu?.()}
      >
        <NavLink to="#">Order Online</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => isMobile && closeMobileMenu?.()}
      >
        <NavLink to="#">Login</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        onClick={() => isMobile && closeMobileMenu?.()}
        className="donate"
      >
        <NavLink to="#">Donate</NavLink>
      </motion.li>
    </motion.ul>
  );
};

export default NavLinks;
