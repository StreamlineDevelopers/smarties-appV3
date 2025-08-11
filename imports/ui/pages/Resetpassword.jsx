import React from 'react';
import FormrowItem_6b8c0b8b from '../components/FormrowItem_6b8c0b8b';

const Resetpassword = () => {
  return (
    <>
      <div className={'page-wrap-signin'}>
        <div className={'reset-center'}>
          <div className={'reset-password'}>
            <div className={'sign-hd-div'}>
              <div className={'signin-hd'}>Reset password</div>
              <div className={'signup-cta-text'}>
                Please create a new secure password for your account.
              </div>
            </div>
            <div className={'siginin-div'}>
              <div className={'signin-formblock w-form'}>
                <form
                  id={'wf-form-reset-password-form'}
                  name={'wf-form-reset-password-form'}
                  data-name={'reset password form'}
                  method={'get'}
                  data-wf-page-id={'688b61ee631f6165f14725b9'}
                  data-wf-element-id={'139ff807-3ea3-2584-93b9-1c985bf00930'}
                >
                  <FormrowItem_6b8c0b8b
                    label={'New Password'}
                    name={'new-password'}
                    dataName={'new password'}
                    id={'new-password'}
                  />
                  <FormrowItem_6b8c0b8b
                    label={'Confirm New Password'}
                    name={'confirm-new-password'}
                    dataName={'confirm new password'}
                    id={'confirm-new-password'}
                  />
                  <div className={'signin-formbtn-div'}>
                    <a
                      data-w-id={'139ff807-3ea3-2584-93b9-1c985bf00937'}
                      href={'#'}
                      className={'btn-style1 w-inline-block'}
                    >
                      <div>Reset Password</div>
                    </a>
                  </div>
                </form>
                <div className={'w-form-done'}>
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className={'w-form-fail'}>
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'reset-password-success'}>
            <div className={'sign-hd-div'}>
              <div className={'signin-icon'}>
                <img
                  src={'images/smarties-login-check.svg'}
                  loading={'lazy'}
                  alt={''}
                  className={'image-100'}
                />
              </div>
              <div className={'signin-hd'}>Password Changed!</div>
              <div className={'signup-cta-text'}>
                Your password has been changed successfully.
              </div>
            </div>
            <div className={'siginin-div'}>
              <div className={'signin-formbtn-div'}>
                <a href={'login.html'} className={'btn-style1 w-inline-block'}>
                  <div>Back to Login</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
