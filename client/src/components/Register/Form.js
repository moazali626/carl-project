import React from "react";
import { isValidPassword, passwordValidation } from "./helper";
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
    <div className="bg-[#F2F3F7] flex items-center flex-col h-full px-[48px] py-[64px] gap-[24px] font-sf">
      <div className="h-[616px] w-[616px] rounded-md border bg-[#FFFFFF] flex flex-col px-[48px] py-[64px]">
        <div className="flex flex-col items-center p-0 gap-[8px]">
          <p className="font-bold text-2xl leading-6 text-[20px]">
            Create an account
          </p>
          <p className="font-light leading-6 text-[16px]">
            Track, analyze, improve you bettings
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
          <p className="font-semibold text-sm">Your Email</p>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="username@gmail.com"
            className={`border border-solid border-[#DFE1EC] p-4 w-full rounded-sm ${
              errors.email && touched.email && "border-[#D14343]"
            }`}
          />
          <p className="text-[#D14343]">
            {errors.email && touched.email && errors.email}
          </p>
        </div>

        <div className="flex flex-col items-start gap-[5px] mt-0 px-9 w-full">
          <p className="font-semibold text-sm">Password</p>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              handleChange(e);
              passwordValidation(e, setFieldValue);
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
          <div className="h-[232px] w-[239px] border border-solid border-[#DFE1EC] rounded-sm p-[24px] bg-white absolute left-[67.5rem] bottom-[4.5rem] shadow-[0px_8px_16px_rgb(0,0,0,0.2)]">
            <p className="font-semibold text-[14px] text-[#7F87B3] b-2">
              Must contain at least:
            </p>

            <div className="mt-2">
              <span className="flex items-center">
                {values &&
                values.passwordValidation &&
                values.passwordValidation.first &&
                values.passwordValidation.first ? (
                  <img
                    src="./icons/valid.svg"
                    height={18}
                    width={18}
                    alt="valid"
                  />
                ) : (
                  <img
                    src="./icons/invalid.svg"
                    height={18}
                    width={18}
                    alt="invalid"
                  />
                )}

                <p className="text-[14px] font-medium text-[#131520] ml-2">
                  12 characters
                </p>
              </span>

              <span className="flex items-center mt-2">
                {values &&
                values.passwordValidation &&
                values.passwordValidation.second &&
                values.passwordValidation.second ? (
                  <img
                    src="./icons/valid.svg"
                    height={18}
                    width={18}
                    alt="valid"
                  />
                ) : (
                  <img
                    src="./icons/invalid.svg"
                    height={18}
                    width={18}
                    alt="invalid"
                  />
                )}
                <p className="text-[14px] font-medium text-[#131520] ml-2">
                  1 lower case character
                </p>
              </span>

              <span className="flex items-center mt-2">
                {values &&
                values.passwordValidation &&
                values.passwordValidation.third &&
                values.passwordValidation.third ? (
                  <img
                    src="./icons/valid.svg"
                    height={18}
                    width={18}
                    alt="valid"
                  />
                ) : (
                  <img
                    src="./icons/invalid.svg"
                    height={18}
                    width={18}
                    alt="invalid"
                  />
                )}
                <p className="text-[14px] font-medium text-[#131520] ml-2">
                  1 upper case character
                </p>
              </span>

              <span className="flex items-center mt-2">
                {values &&
                values.passwordValidation &&
                values.passwordValidation.fourth &&
                values.passwordValidation.fourth ? (
                  <img
                    src="./icons/valid.svg"
                    height={18}
                    width={18}
                    alt="valid"
                  />
                ) : (
                  <img
                    src="./icons/invalid.svg"
                    height={18}
                    width={18}
                    alt="invalid"
                  />
                )}
                <p className="text-[14px] font-medium text-[#131520] ml-2">
                  1 number
                </p>
              </span>

              <span className="flex items-center mt-2">
                {values &&
                values.passwordValidation &&
                values.passwordValidation.fifth &&
                values.passwordValidation.fifth ? (
                  <img
                    src="./icons/valid.svg"
                    height={18}
                    width={18}
                    alt="valid"
                  />
                ) : (
                  <img
                    src="./icons/invalid.svg"
                    height={18}
                    width={18}
                    alt="invalid"
                  />
                )}
                <p className="text-[14px] font-medium text-[#131520] ml-2">
                  1 special character
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting || !isValidPassword(values)}
            className={`py-[12px] px-[16px] gap-[10px] w-[445px] h-[48px] rounded-sm bg-[#0D393A] text-white ${
              !isValidPassword(values) ? "cursor-not-allowed" : "cursor-pointer"
            }`}
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
          <p className="text-sm">Already have an account?</p>
          <a href="/login">
            <p className="text-[#7F87B3] font-semibold text-[14px] ml-1">
              Log in
            </p>
          </a>
        </div>
      </div>

      <p className="font-light text-[12px] ">
        By creating an account, you agreeing to our
        <a href="#">
          <span className="font-semibold text-[#7F87B3]"> Privacy Policy</span>,
        </a>
        and
        <a href="#">
          <span className="font-semibold text-[#7F87B3]"> Terms of Use.</span>
        </a>
      </p>
    </div>
  );
};

export default Form;
