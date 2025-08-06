import React from 'react';
import PlandetailitemItem from './PlandetailitemItem';
import TablecelldivItem52 from './TablecelldivItem52';
import TablerowItem from './TablerowItem';

const MaincontentLayout57 = ({}) => {
  return (
    <div
      id={'w-node-dba63367-a3c0-a270-a6c5-3baa1a9c71d8-f14725b4'}
      className={'main-content'}
    >
      <div className={'scroll-content'}>
        <div className={'hd-div'}>
          <div>
            <div className={'page-header-text'}>Billing</div>
          </div>
        </div>
        <div className={'mainwidth-control'}>
          <div className={'billing-row'}>
            <div className={'plan-card'}>
              <div className={'plan-card-top'}>
                <div className={'plan-card-top-left'}>
                  <div
                    data-w-id={'84259774-ea8a-a508-18fe-619aba9bdf10'}
                    className={'plan-card-chevron'}
                  >
                    <img
                      src={'../images/smarties-chevron-down.svg'}
                      loading={'lazy'}
                      alt={''}
                    />
                  </div>
                  <div className={'plan-card-textcontent'}>
                    <div className={'plan-name'}>Premium Plan</div>
                    <div className={'plan-price-text'}>
                      <span className={'span-price'}>$29.99</span> per month
                    </div>
                    <div className={'plan-renewal-date'}>
                      Renews on June 15, 2025
                    </div>
                  </div>
                </div>
                <div className={'plan-card-top-right'}>
                  <a href={'#'} className={'btn-style1 w-inline-block'}>
                    <div>Upgrade Plan</div>
                  </a>
                  <a href={'#'} className={'btn-style1 outline w-inline-block'}>
                    <div>Cancel Subscription</div>
                  </a>
                </div>
              </div>
              <div className={'plan-card-body'}>
                <div className={'plandetails-hd-div'}>
                  <div className={'plandetails-hd'}>Your plan includes:</div>
                </div>
                <div className={'plandetail-list'}>
                  <PlandetailitemItem
                    title={'Social content + buzz generation'}
                    description={
                      'Automatically generate blogs around trending topics'
                    }
                  />
                  <PlandetailitemItem
                    title={'Engagement That Feels Effortless'}
                    description={
                      'Track interest signals, personalize every interaction, and grow lasting relationships, with zero spammy vibes.'
                    }
                  />
                  <PlandetailitemItem
                    title={'Live AI customer interaction'}
                    description={
                      'Use SMARTIES to spot when casual interest turns into buying intent'
                    }
                  />
                  <PlandetailitemItem
                    title={'Smart onboarding + support'}
                    description={
                      'Answers calls, chats, and texts with friendly, pre-approved replies, your way, anytime.'
                    }
                  />
                  <PlandetailitemItem
                    title={'Email/text follow-ups'}
                    description={
                      'SMARTIES act like your front desk, phone assistant, and inbox helper, all at once'
                    }
                  />
                </div>
              </div>
            </div>
            <div className={'payment-method-card'}>
              <div className={'payment-method-card-top'}>
                <div className={'plan-name'}>Payment Method</div>
                <a
                  href={'#'}
                  className={'btn-style1 outline-small w-inline-block'}
                >
                  <div>Manage Payment</div>
                </a>
              </div>
              <div className={'payment-method-item'}>
                <div className={'paymentmethod-icon'}>
                  <img
                    src={'../images/smarties-visa-logo_1smarties-visa-logo.png'}
                    loading={'lazy'}
                    alt={''}
                  />
                </div>
                <div className={'paymentmethod-item-textcontent'}>
                  <div className={'paymentmethod-cardnum'}>
                    Visa **** **** 1234
                  </div>
                  <div className={'paymentmethod-card-expiry'}>
                    Expires 09/2026
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'paymenthistory-row'}>
            <div className={'table-main'}>
              <div className={'div-block'}>
                <div className={'plan-name'}>Payment History</div>
              </div>
              <div className={'table-header'}>
                <TablecelldivItem52 divText={'Date'} />
                <TablecelldivItem52 divText={'Invoice'} />
                <TablecelldivItem52 divText={'Amount'} />
                <TablecelldivItem52 divText={'Status'} />
                <TablecelldivItem52 divText={'Action'} />
              </div>
              <div className={'table-content'}>
                <TablerowItem />
                <TablerowItem />
                <TablerowItem />
                <TablerowItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout57;
