import React from 'react';
import DbjourneyvaluecontainItem from './DbjourneyvaluecontainItem';
import DbjourneyactionlinkItem from './DbjourneyactionlinkItem';
import DashboardheadertextItem from './DashboardheadertextItem';
import DbstatcardItem267 from './DbstatcardItem267';
import DbjourneysmartassistantcardItem from './DbjourneysmartassistantcardItem';
import DbjourneysmartassistantcardbodyItem from './DbjourneysmartassistantcardbodyItem';
import DbjourneyextrastatcontainerItem from './DbjourneyextrastatcontainerItem';
import Btnstyle1Item256 from './Btnstyle1Item256';
import DashboardactivityfeedItem264 from './DashboardactivityfeedItem264';
import ActivityfeedtextcontentItem261 from './ActivityfeedtextcontentItem261';
import JourneyquickactionscardItem266 from './JourneyquickactionscardItem266';
import ActivityfeedtextcontentItem260 from './ActivityfeedtextcontentItem260';

const MaincontentLayout271 = ({ props }) => {
  return (
    <div
      id="w-node-_68345d2b-46af-5a6b-6f20-9ad106f106e7-f14725d1"
      className="main-content"
    >
      <div className="scroll-content">
        <div className="hd-div">
          <div>
            <div className="page-header-text">Journey Dashboard</div>
            <div className="db-quickaction-text">
              Customer journey performance overview
            </div>
          </div>
          <a href="#" className="btn-style1 w-inline-block">
            <div className="btn-icon">
              <img
                src="../images/smarties-btnicon-export-white.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div>Export Report</div>
          </a>
        </div>
        <div className="journey-dashboard-width">
          <div className="mainwidth-control journey">
            <div className="dashboard-group journeyflow">
              <div className="dashboard-headertext">
                <div className="section-title joruneyflow">
                  Customer journey flow
                </div>
              </div>
              <div className="db-journey-card-contain">
                <div className="db-journey-card">
                  <div className="db-journey-card-left">
                    <div className="db-journey-card-top">
                      <div className="stat-title journey">Engagement Rate</div>
                      <div className="db-journey-tag">
                        <div>ACTIVE</div>
                      </div>
                    </div>
                    <DbjourneyvaluecontainItem
                      divText="14,382"
                      divText1="interactions"
                    />
                    <DbjourneyactionlinkItem divText="View Engagement" />
                  </div>
                </div>
                <div className="db-journey-flow-arrow">
                  <img
                    src="../images/smarties-flow-arrow.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="db-journey-card bg-blue">
                  <div className="db-journey-card-left">
                    <div className="db-journey-card-top">
                      <div className="stat-title journey">Lead Interest</div>
                      <div className="db-journey-tag bg-blue">
                        <div>growing</div>
                      </div>
                    </div>
                    <DbjourneyvaluecontainItem
                      divText="8,754"
                      divText1="qualified leads"
                    />
                    <DbjourneyactionlinkItem divText="Trigger Follow-up" />
                  </div>
                </div>
                <div className="db-journey-flow-arrow">
                  <img
                    src="../images/smarties-flow-arrow.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="db-journey-card bg-purple">
                  <div className="db-journey-card-left">
                    <div className="db-journey-card-top">
                      <div className="stat-title journey">Conversion</div>
                      <div className="db-journey-tag bg-purple">
                        <div>Needs Attention</div>
                      </div>
                    </div>
                    <DbjourneyvaluecontainItem
                      divText="1,120"
                      divText1="customers"
                    />
                    <DbjourneyactionlinkItem divText="View Conversions" />
                  </div>
                </div>
                <div className="db-journey-flow-arrow">
                  <img
                    src="../images/smarties-flow-arrow.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="db-journey-card bg-lightblue">
                  <div className="db-journey-card-left">
                    <div className="db-journey-card-top">
                      <div className="stat-title journey">Loyalty</div>
                      <div className="db-journey-tag bg-lgithblue">
                        <div>Strong</div>
                      </div>
                    </div>
                    <DbjourneyvaluecontainItem
                      divText="968"
                      divText1="retained"
                    />
                    <DbjourneyactionlinkItem divText="Boost Retention" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-group">
              <DashboardheadertextItem title="OVERVIEW" />
              <div className="db-stat-card-contain">
                <DbstatcardItem267
                  title="Engagement Rate"
                  divText="38.2%"
                  src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg"
                  divText1="5.3%"
                />
                <DbstatcardItem267
                  title="Lead Interest Score"
                  divText="7.4"
                  src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccff12d401a801aff8b_db-stat-arrow.svg"
                  divText1="0.8%"
                />
                <div className="db-stat-card">
                  <div className="db-stat-card-left">
                    <div className="stat-title">Conversion %</div>
                    <div className="db-stat-value-contain">
                      <div className="stat-value">12.8%</div>
                      <div className="db-stat-tag">
                        <img
                          src="../images/smarties-stat-chevron-down.svg"
                          loading="lazy"
                          width="7"
                          height="5"
                          alt=""
                          className="db-stat-tag-chevron"
                        />
                        <div className="db-stat-percent down">1.2%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <DbstatcardItem267
                  title="Loyalty Index"
                  divText="86.5%"
                  src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bcccf5ef19e13e52bd7f0_db-stat-arrow.svg"
                  divText1="2.1%"
                />
              </div>
            </div>
            <div className="dashboard-col-group">
              <div className="dashboard-group _w-60">
                <div className="section-header">
                  <DashboardheadertextItem title="Smart Assistant" />
                  <a href="#" className="link-style1">
                    Show more insights
                  </a>
                </div>
                <div className="db-recentassistants-card">
                  <DbjourneysmartassistantcardItem />
                  <div className="db-journey-smartassistant-card">
                    <div className="db-journey-smartassistant-card-top">
                      <div className="smartassitant-tag blue">
                        <div>Loyalty</div>
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/67ece27c367a4f53eeef80d8/681bd1f9aa9453320010948c_More-vertical.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="icon-style1"
                      />
                    </div>
                    <DbjourneysmartassistantcardbodyItem
                      title="5 customers approaching renewal dates"
                      itemText="These high-value customers have subscriptions expiring in the next 14 days. Our AI suggests sending an early renewal incentive."
                    />
                    <div className="db-journey-smartassistant-card-bot">
                      <DbjourneyextrastatcontainerItem
                        src="../images/smarties-assistant-icon-02.svg"
                        divText="$12,400 potential renewal value"
                      />
                      <div className="db-journey-extra-btncontainer">
                        <Btnstyle1Item256 divText="View List" />
                        <a
                          href="#"
                          className="btn-style1 small-blue w-inline-block"
                        >
                          <div>Send Offers</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <DbjourneysmartassistantcardItem />
                </div>
              </div>
              <div className="dashboard-group stretch">
                <DashboardheadertextItem title="Recent activity" />
                <div className="db-recentassistants-card">
                  <DashboardactivityfeedItem264 />
                  <div className="dashboard-activityfeed">
                    <div className="card-icon bg-blue">
                      <img
                        src="../images/smarties-activity-icon-01.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="icon-style1"
                      />
                    </div>
                    <div className="activityfeed-textcontent">
                      <div className="db-card-title">
                        <strong>New lead</strong> from{' '}
                        <strong>Facebook Ad</strong>
                      </div>
                      <div className="uploadeditem-filesize">2 hrs ago</div>
                    </div>
                  </div>
                  <div className="dashboard-activityfeed">
                    <div className="card-icon bg-green">
                      <img
                        src="../images/smarties-activity-icon-02.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="icon-style1"
                      />
                    </div>
                    <ActivityfeedtextcontentItem261
                      strongText="Weekly report"
                      title="generated"
                    />
                  </div>
                  <div className="dashboard-activityfeed">
                    <div className="card-icon bg-purple">
                      <img
                        src="../images/smarties-activity-icon-03.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="icon-style1"
                      />
                    </div>
                    <ActivityfeedtextcontentItem261
                      strongText="Content strategy"
                      title="meeting"
                    />
                  </div>
                  <DashboardactivityfeedItem264 />
                </div>
              </div>
            </div>
          </div>
          <div className="journey-db-rightpanel">
            <div className="dashboard-group">
              <DashboardheadertextItem title="quick actions" />
              <div className="db-quickactions-container">
                <JourneyquickactionscardItem266
                  src="../images/smarties-action-icon-04-icon.svg"
                  title="Write Blog"
                  itemText="AI-assisted content creation"
                />
                <a
                  href="#"
                  className="journey-quickactions-card w-inline-block"
                >
                  <div className="journey-quickactions-card-left">
                    <div className="card-icon bg-purple">
                      <img
                        src="../images/smarties-action-icon-03-icon.svg"
                        loading="lazy"
                        width="20"
                        height="20"
                        alt=""
                        className="icon-style1"
                      />
                    </div>
                    <ActivityfeedtextcontentItem260
                      title="Nudge Message"
                      itemText="Send to inactive leads"
                    />
                  </div>
                  <div className="journey-quickactions-card-arrow">
                    <img
                      src="../images/smarties-flow-arrow.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </a>
                <JourneyquickactionscardItem266
                  src="../images/smarties-action-icon-02-icon.svg"
                  title="Surprise Gift"
                  itemText="Reward Loyal Customers"
                />
                <JourneyquickactionscardItem266
                  src="../images/smarties-action-icon-01-icon.svg"
                  title="Run Analysis"
                  itemText="Generate new insights"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaincontentLayout271;
