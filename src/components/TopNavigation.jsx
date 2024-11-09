import React, { useState, useCallback } from "react";
import DropMenu from "./DropMenu";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TopNavigation = ({ className = "" }) => {
  const [isDropMenuOpen, setDropMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openDropMenu = useCallback(() => {
    setDropMenuOpen(true);
  }, []);

  const closeDropMenu = useCallback(() => {
    setDropMenuOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/profile1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onInviteFriendsTextClick = useCallback(() => {
    navigate("/invite-friends");
  }, [navigate]);

  const onLeaderboardTextClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onPricingTextClick = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  return (
    <>
      <div className={`flex flex-col md:flex-row items-center md:justify-start py-2 px-4 md:px-0 box-border ${className}`}>
        <header className="w-full md:w-[1280px] flex flex-row items-center justify-between max-w-full z-[2] text-center text-[16px] text-[#128e96] font-[Nexa]">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <img
              className="h-[44px] w-[144px] object-cover"
              loading="lazy"
              src="/logo-2@2x.png"
              alt="Logo"
            />
            {/* Nav Links - hidden on small screens */}
            <nav className="hidden md:flex gap-6 text-sm">
              <a className="cursor-pointer" onClick={onHomeTextClick}>Home</a>
              <a className="cursor-pointer">Play Games</a>
              <a className="cursor-pointer text-[#f17700]" onClick={onInviteFriendsTextClick}>Invite Friends</a>
              <a className="cursor-pointer" onClick={onLeaderboardTextClick}>Leaderboard</a>
              <a className="cursor-pointer" onClick={onPricingTextClick}>Pricing</a>
            </nav>
          </div>
          {/* Right-side buttons */}
          <div className="flex items-center gap-4">
            {/* Account Button */}
            <div
              className="hidden md:flex items-center px-4 py-2 bg-[#128e96] text-white rounded-lg cursor-pointer"
              onClick={onFrameContainerClick}
            >
              My Account
            </div>
            {/* Login/Signup Buttons - hidden on small screens */}
            <div className="hidden md:flex gap-2">
              <button className="px-4 py-2 border border-[#bbc42f] rounded-lg">Login</button>
              <button className="px-4 py-2 border border-[#bbc42f] rounded-lg">Sign-up for Free</button>
            </div>
            {/* More menu for mobile view */}
            <div className="flex md:hidden" onClick={openDropMenu}>
              <span className="text-xl cursor-pointer">☰</span>
            </div>
          </div>
        </header>
      </div>
      {isDropMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropMenu}
        >
          <DropMenu onClose={closeDropMenu} />
        </PortalPopup>
      )}
    </>
  );
};

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
