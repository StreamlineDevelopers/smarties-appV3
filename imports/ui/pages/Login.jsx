import React from 'react';
import FormrowItem325 from '../components/FormrowItem325';

const Login = () => {
  return (
    <>
      <div className="page-wrap-signin">
        <div className="signin-center">
          <a href="#" className="logo_link-style1 w-inline-block">
            <img
              loading="lazy"
              src="images/smarties_logo-temp-330.svg"
              alt=""
              className="image"
            />
          </a>
          <div className="sign-hd-div">
            <div className="signin-hd">Login</div>
            <div className="sign-subhd">
              Welcome back! Please enter your details.
            </div>
          </div>
          <div className="siginin-div">
            <div className="signin-formblock w-form">
              <form
                id="wf-form-login-form"
                name="wf-form-login-form"
                data-name="login form"
                method="get"
                data-wf-page-id="688b61ee631f6165f14725b6"
                data-wf-element-id="86a1b823-6722-4912-718e-32f306ade401"
              >
                <FormrowItem325
                  label="Email"
                  name="email"
                  dataName="email"
                  placeholder="Enter Email"
                  type="email"
                  id="email"
                />
                <FormrowItem325
                  label="Password"
                  name="password"
                  dataName="password"
                  placeholder="Enter Password"
                  type="password"
                  id="password"
                />
                <div className="form-row horizontal">
                  <label className="w-checkbox remember-checkfield">
                    <input
                      type="checkbox"
                      name="check-remember-account"
                      id="check-remember-account"
                      data-name="check remember account"
                      className="w-checkbox-input"
                    />
                    <span
                      className="checkbox-text w-form-label"
                      htmlFor="check-remember-account"
                    >
                      Remember for 30 days
                    </span>
                  </label>
                  <a href="forgot-password.html" className="link-style2">
                    Forgot Password
                  </a>
                </div>
                <div className="signin-formbtn-div">
                  <a href="index.html" className="btn-style1 w-inline-block">
                    <div>Sign In</div>
                  </a>
                  <a href="#" className="btn-style1 google w-inline-block">
                    <div className="icon-google">
                      <img
                        width="24"
                        height="24"
                        alt=""
                        src="https://cdn.prod.website-files.com/681a00468b98375f74c9201b/681dfb6cc64fea67576e16eb_Social-icon.svg"
                        loading="lazy"
                        className="social-icon"
                      />
                    </div>
                    <div>Sign in with Google</div>
                  </a>
                  <a href="#" className="btn-trypro w-inline-block">
                    <div className="btn-center">
                      <div className="btn-text-style1">Already on Lite? </div>
                      <div className="btn-text-style2">Try Pro</div>
                      <div className="icon-pro-div">
                        <img
                          width="16"
                          height="17"
                          alt=""
                          src="https://cdn.prod.website-files.com/681a00468b98375f74c9201b/681dfb6ca163bc3e95043ff6_681a00468b98375f74c921e4_%F0%9F%92%8E-1.png"
                          loading="lazy"
                          className="icon-pro"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="form-row-small">
                  <div className="signup-cta-text">Don't have an account?</div>
                  <a href="signup.html" className="link-style2">
                    Sign Up
                  </a>
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
