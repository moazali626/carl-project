import React from "react";

import { Bars } from "react-loader-spinner";

const VerifyPass = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
}) => {
  return (
    <div className="bg-[#F2F3F7] flex items-center flex-col h-screen px-[48px] py-[64px] gap-[24px] font-sf">
      <div className="h-[440px] w-[511px] rounded-md border bg-[#FFFFFF] flex flex-col px-[48px] py-[64px]">
        <div className="flex flex-col items-center p-0 gap-[8px]">
          <img src="/icons/profile.svg " height={64} width={64} alt="google" />
        </div>

        <div className="flex  flex-col  items-centergap-[8px] h-[56px] mt-5">
          <p className="font-bold text-[20px] leading-6 text-center mb-2">
            Welcome Carl!
          </p>

          <div className="flex justify-center">
            <p className="font-semibold text-[14px] leading-6">
              {values && values.focusedLoginUser}
            </p>
            <span>&nbsp;</span>
            <span
              className="font-light hover:cursor-pointer"
              onClick={() => {
                setFieldValue("focusedLoginUser", "");
                setFieldValue("loginToggle", !values.loginToggle);
              }}
            >
              Change email
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[5px] mt-6 w-full mb-4">
          <p className="font-semibold text-sm">Password</p>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              handleChange(e);
              //   passwordValidation(e, setFieldValue);
            }}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Enter your password..."
            className={`border border-solid border-[#DFE1EC] p-4 w-full rounded-sm ${
              errors.password && touched.password && "border-[#D14343]"
            }`}
          />
          <p className="text-[#D14343]">
            {errors.password && touched.password && errors.password}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            // disabled={isSubmitting || !isValidPassword(values)}
            className={`py-[12px] px-[16px] gap-[10px] w-[445px] h-[48px] rounded-sm bg-[#0D393A] text-white`}
          >
            {isSubmitting ? (
              <div className="flex justify-center">
                <Bars
                  height="22"
                  width="22"
                  color="#ffff"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPass;
