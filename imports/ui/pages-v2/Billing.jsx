import React, { useEffect, useRef, useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import MaincontentLayout41 from '../components-v2/MaincontentLayout41';
import TopbarLayout42 from '../components-v2/TopbarLayout42';
import PlandetailitemItem from '../components-v2/PlandetailitemItem';
import PlandetailtextcontentItem from '../components-v2/PlandetailtextcontentItem';
import TablecelldivItem from '../components-v2/TablecelldivItem';
import TablerowItem from '../components-v2/TablerowItem';
import TablecelldivItem43 from '../components-v2/TablecelldivItem43';
import TablecelldivItem44 from '../components-v2/TablecelldivItem44';
import TagItem from '../components-v2/TagItem';
import TablecelldivItem45 from '../components-v2/TablecelldivItem45';
import TabledownloadbtnItem from '../components-v2/TabledownloadbtnItem';
import SidemenulabeldivItem from '../components-v2/SidemenulabeldivItem';
import SidemenuitemItem from '../components-v2/SidemenuitemItem';
import ReusableItem from '../components-v2/ReusableItem';
import SidemenuitemItem40 from '../components-v2/SidemenuitemItem40';
import SvgiconItem from '../components-v2/SvgiconItem';
import Layer1Item from '../components-v2/Layer1Item';
import ReusableItem1 from '../components-v2/ReusableItem1';
import SvgiconItem2 from '../components-v2/SvgiconItem2';
import Layer1Item3 from '../components-v2/Layer1Item3';
import { SIDEBARTOP_OVERVIEW, SIDEBARTOP_SETTINGS } from '../../api/common/const';
import Client from '../../api/client/Client';
import BillingWatcher from '../../api/client/watchers/BillingWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import TopbarLayout5 from '../components-v2/TopbarLayout5';
import AvatarInitials from '../custom/AvatarInitials';
import moment from 'moment';
import Loader from '../components-v2/common/Loader';

const Billing = () => {
  const [show, setShow] = useState(true);
  const watcher = useRef(BillingWatcher).current;
  useWatcher(watcher);

  const invoiceList = watcher.Invoices;
  const subscriptionDetails = watcher.getValue("subscriptionDetails");
  const cardDetails = watcher.getValue("cardDetails");

  const isLoadingInvoice = watcher.getValue("loadingInvoices")
  const isLoadingSubscription = watcher.getValue("isLoadingSubscription");
  const isLoadingManageSubscription = watcher.getValue("loadingSubscription");


  useEffect(() => {
    watcher.setValue("isLoadingTools", true);
    watcher.listen();
    watcher.fetchInvoices();
    watcher.fetchPaymentMethods();
    return () => {
      watcher.removeListener();
    };
  }, []);

  return (
    <>
      <div className="page-wrap">
        <MaincontentLayout41>
          <div className="scroll-content">
            <div className="hd-div">
              <div>
                <div className="page-header-text">Billing</div>
              </div>
              <div className="badge"><img src="../images/smarties-badge-pro.png" loading="lazy" alt="" /></div>
            </div>
            {isLoadingManageSubscription ? <Loader /> : <div className="mainwidth-control">
              <div className="billing-row">
                <div className="plan-card">
                  <div className="plan-card-top">
                    {isLoadingSubscription ? <Loader /> :
                      subscriptionDetails == null ? <div>Start with the Free Plan to enable basic features.</div> :
                        <div className="plan-card-top-left">
                          <div data-w-id="84259774-ea8a-a508-18fe-619aba9bdf10" onClick={() => setShow(prev => !prev)} style={{ transform: show ? 'rotateZ(0deg)' : 'rotateZ(-90deg)' }} className="plan-card-chevron"><img src="../images/smarties-chevron-down.svg" loading="lazy" alt="" /></div>
                          <div className="plan-card-textcontent">
                            <div className="plan-name">{subscriptionDetails && subscriptionDetails.termprice != 0 ? "Premium Plan" : "Free Plan"}</div>
                            <div className="plan-price-text"><span className="span-price">{subscriptionDetails ? `$ ${(subscriptionDetails.termprice / 100).toFixed(2)}` : "$0"}</span> per month</div>
                            <div className="plan-renewal-date">Renews on June 15, 2025</div>
                          </div>
                        </div>}
                    <div className="plan-card-top-right">
                      <a href="#" className="btn-style1 w-inline-block" onClick={() => {
                        watcher.handleManageSubscription();
                      }}>
                        <div>{subscriptionDetails ? "Upgrade Plan" : "Start Free Plan"}</div>
                      </a>
                      {subscriptionDetails && <a href="#" className="btn-style1 outline w-inline-block" onClick={() => {
                        watcher.handleManageSubscription();
                      }}>
                        <div>Cancel Subscription</div>
                      </a>}
                    </div>
                  </div>
                  {isLoadingSubscription ? <Loader /> : subscriptionDetails == null ? <div></div> :
                    <div className="plan-card-body" style={{ display: show ? "block" : "none" }}>
                      <div className="plandetails-hd-div">
                        <div className="plandetails-hd">Your plan includes:</div>
                      </div>
                      <div className="plandetail-list">
                        <PlandetailitemItem textDiv="Social content + buzz generation" textDiv1="Automatically generate blogs around trending topics" />
                        <PlandetailitemItem textDiv="Engagement That Feels Effortless" textDiv1="Track interest signals, personalize every interaction, and grow lasting relationships, with zero spammy vibes." />
                        {subscriptionDetails && subscriptionDetails.termprice != 0 &&
                          <>
                            <PlandetailitemItem textDiv="Live AI customer interaction" textDiv1="Use SMARTIES to spot when casual interest turns into buying intent" />
                            <PlandetailitemItem textDiv="Smart onboarding + support" textDiv1="Answers calls, chats, and texts with friendly, pre-approved replies, your way, anytime." />
                            <PlandetailitemItem textDiv="Email/text follow-ups" textDiv1="SMARTIES act like your front desk, phone assistant, and inbox helper, all at once" />
                          </>
                        }
                      </div>
                    </div>}
                </div>
                <div className="payment-method-card">
                  <div className="payment-method-card-top">
                    <div className="plan-name">Payment Method</div>
                    <a href="#" className="btn-style1 outline-small w-inline-block" onClick={() => {
                      watcher.handleManageSubscription();
                    }}>
                      <div>Manage Payment</div>
                    </a>
                  </div>
                  {cardDetails && <div className="payment-method-item">
                    <div className="paymentmethod-icon">
                      <img src={cardDetails.cardbrand == "visa" ? "../images/smarties-visa-logo_1smarties-visa-logo.png" : "../images/smarties-mastercard-logo.png"} loading="lazy" alt="" /></div>
                    <div className="paymentmethod-item-textcontent">
                      <div className="paymentmethod-cardnum">{cardDetails.cardbrand} **** **** {cardDetails.cardlast4}</div>
                      <div className="paymentmethod-card-expiry">Expires {cardDetails.cardexpmonth}/{cardDetails.cardexpyear}</div>
                    </div>
                  </div>}
                </div>
              </div>
              <div className="paymenthistory-row">
                <div className="table-main">
                  <div className="div-block">
                    <div className="plan-name">Payment History</div>
                  </div>
                  <div className="table-header">
                    <TablecelldivItem textDiv="Date" />
                    <TablecelldivItem textDiv="Invoice" />
                    <TablecelldivItem textDiv="Amount" />
                    <TablecelldivItem textDiv="Status" />
                    <TablecelldivItem textDiv="Action" />
                  </div>
                  <div className="table-content">
                    {isLoadingInvoice ? <Loader /> :
                      invoiceList && invoiceList.length > 0 ? (
                        invoiceList.map((invoice, index) => (
                          <TablerowItem
                            key={index}
                            createdAt={moment(invoice.createdat).format('MMMM DD, YYYY')}
                            invoiceId={invoice.invoiceid}
                            currency="$"
                            amountdue={invoice.amountdue}
                            status={invoice.status}
                            invoicepdf={invoice.invoicepdf}
                            invoiceUrl={invoice.invoiceurl}
                          />
                        ))
                      ) : (
                        <div className="no-invoices">No invoices found.</div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </MaincontentLayout41>
        <SidebarLayout />
        {/* <TopbarLayout42>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a75" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
              <div className="form-body">
                <div className="form-row mb-0"><input className="topbar-inputsearch w-input" maxlength="256" name="topbar-search" data-name="topbar search" placeholder="Search for anything" type="text" id="topbar-search" required /></div>
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div className="topbar-right">
            <div className="topbar-icons-div"><img src="../images/vuesaxlinearmessage-question.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /><img src="../images/vuesaxlinearnotification.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /></div>
            <div className="topbar-userdropdown-toggle">
              <div className="top-user-dropdown-text">{Client.CurrentUser && Client.CurrentUser.username}</div>
               <img src="../images/Mask-Group.svg" loading="lazy" width="38" height="38" alt="" className="topbar-user-avatar" /> 
              <img src="../images/vuesaxoutlinearrow-down.svg" loading="lazy" width="18" height="18" alt="" className="topbar-chevron-down" />
            </div>
          </div>
        </TopbarLayout42> */}
        <TopbarLayout5>
          <div className="search-formblock w-form">
            <form id="wf-form-topbar-search-form" name="wf-form-topbar-search-form" data-name="topbar search form" method="get" data-wf-page-id="682d7cdb2cd861e606be0a76" data-wf-element-id="a3424936-2c2b-64f9-580b-0e1d51641508">
              <div className="form-body">
                {/* <div className="form-row mb-0"><input className="topbar-inputsearch w-input" maxlength="256" name="topbar-search" data-name="topbar search" placeholder="Search for anything" type="text" id="topbar-search" required /></div> */}
              </div>
            </form>
          </div>
          <div className="topbar-right">
            {/* <div className="topbar-icons-div"><img src="../images/vuesaxlinearmessage-question.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /><img src="../images/vuesaxlinearnotification.svg" loading="lazy" width="24" height="24" alt="" className="topbar-chevron-down" /></div> */}
            <div className="topbar-userdropdown-toggle">
              <div className="top-user-dropdown-text">{Client.CurrentUser && Client.CurrentUser.username}</div>
              <AvatarInitials name={Client.CurrentUser && Client.CurrentUser.username} size={38} />
              {/* <img src="../images/Mask-Group.svg" loading="lazy" width="38" height="38" alt="" className="topbar-user-avatar" /> */}
              {/* <img src="../images/vuesaxoutlinearrow-down.svg" loading="lazy" width="18" height="18" alt="" className="topbar-chevron-down" /> */}
            </div>
          </div>
        </TopbarLayout5>
      </div>



    </>
  );
};

export default Billing;