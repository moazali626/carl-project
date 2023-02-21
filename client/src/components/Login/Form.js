import React from "react";

import { Bars } from "react-loader-spinner";

const Form = ({
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
      <div className="h-[616px] w-[616px] rounded-md border bg-[#FFFFFF] flex flex-col px-[48px] py-[64px]">
        <div className="flex flex-col items-center p-0 gap-[8px]">
          <p className="font-bold text-2xl leading-6 text-[20px]">
            Sign in to Capperauditor
          </p>
        </div>

        <div className="flex justify-center h-[52px] gap-[16px] mt-8">
          <a href="#">
            <div className="flex gap-[8px] items-center justify-center px-[16px] py-[14px] border border-solid border-[#DFE1EC] rounded-md hover:cursor-pointer">
              <img
                src="/icons/google.svg "
                height={14}
                width={14}
                alt="google"
              />
              <p className="font-semibold">Sign up with Google</p>
            </div>
          </a>

          <a href="#">
            <div className="flex gap-[8px] items-center justify-center px-[16px] py-[14px] border border-solid border-[#DFE1EC] rounded-md hover:cursor-pointer">
              <img src="/icons/fb.svg " height={12} width={12} alt="facebook" />
              <p className="font-semibold">Sign up with Facebook</p>
            </div>
          </a>
        </div>

        <div className="flex gap-[24px] justify-center items-center mt-8">
          <div className="border border-solid border-[#F2F3F7] w-[142px]"></div>
          <p className="text-sm font-light">Or with email</p>
          <div className="border border-solid border-[#F2F3F7] w-[142px]"></div>
        </div>

        <div className="flex flex-col items-start gap-[5px] mt-6 mb-4 px-9 w-full">
          <p className="font-semibold text-sm">Your email or username</p>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Enter your email or username..."
            className={`border border-solid border-[#DFE1EC] p-4 w-full rounded-sm ${
              errors.email && touched.email && "border-[#D14343]"
            }`}
          />
          <p className="text-[#D14343]">
            {errors.email && touched.email && errors.email}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
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

        <div className="flex justify-center  font-light text-[#7F87B3] mt-4 text-center">
          <p className="text-sm">Don't have an account?</p>
          <a href="/">
            <p className="text-[#7F87B3] font-semibold text-[14px] ml-1">
              Sign Up
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
