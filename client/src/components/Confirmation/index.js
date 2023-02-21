import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 10000);
  }, []);

  return (
    <div className="bg-[#F2F3F7] flex items-center flex-col h-screen font-sf py-[64px] px-[48px] gap-[24px] ">
      <div className="h-[344px] w-[511px] py-[64px] px-[48px] gap-[24px] rounded-md border border-solid border-[#DFE1EC] bg-[#FFFFFF] flex flex-col items-center">
        <img
          src="/icons/confirmation.svg"
          height={64}
          width={64}
          alt="confirmation"
        />

        <p className="text-center font-bold text-[20px] leading-6">
          Check you email
        </p>

        <p className="text-[16px] text-center text-[#7F87B3] font-light leading-6">
          We’ve sent a special link to
          <span> </span>
          <span className="font-semibold">
            {location && location.state && location.state.email}
          </span>
          . Click the link in the email to confirm your email address.
        </p>

        <p className="text-[16px] text-center text-[#7F87B3] font-light leading-5">
          Wrong email?
          <span> </span>
          <span
            className="font-semibold hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Re-enter your address
          </span>
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
