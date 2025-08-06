import React from 'react';
import MaincontentLayout253 from '../components/MaincontentLayout253';
import SidebarLayout252 from '../components/SidebarLayout252';
import TopbarLayout250 from '../components/TopbarLayout250';
import TablecelldivItem from '../components/TablecelldivItem';
import TablecelldivItem46 from '../components/TablecelldivItem46';
import TablecelldivItem47 from '../components/TablecelldivItem47';
import TablecelldivItem48 from '../components/TablecelldivItem48';
import TablecelldivItem49 from '../components/TablecelldivItem49';
import TablecelldivItem54 from '../components/TablecelldivItem54';
import TablecelldivItem52 from '../components/TablecelldivItem52';
import TablecelldivItem56 from '../components/TablecelldivItem56';

const Customermemorycenter = () => {
  return (
    <>
      <div className="page-wrap">
        <MaincontentLayout253 />
        <SidebarLayout252 />
        <TopbarLayout250 />
        <div className="popup-dataenrichment">
          <div className="popup-card _w-70">
            <div className="card-settings-hd-div">
              <div className="card-settings-hd">Data Enrichment</div>
            </div>
            <div
              data-w-id="2d62093f-af62-36e2-bc25-a6f698497f53"
              className="popup-close"
            >
              <img src="../images/smarties-x.svg" loading="lazy" alt="" />
            </div>
            <div className="popup-dataenrichment-body">
              <div className="dataenrichment-loadingscreen">
                <div className="dataenrichment-loading">
                  <div
                    data-w-id="2d62093f-af62-36e2-bc25-a6f698497f58"
                    data-animation-type="lottie"
                    data-src="../documents/smarties-loading.json"
                    data-loop="1"
                    data-direction="1"
                    data-autoplay="1"
                    data-is-ix2-target="0"
                    data-renderer="svg"
                    data-default-duration="0"
                    data-duration="0"
                  ></div>
                </div>
                <div>Searching for additional contact information...</div>
              </div>
              <div className="dataenrichment-content">
                <div>
                  We found the following additional information about Sarah
                  Johnson:
                </div>
                <div className="data-enrichment-table-div">
                  <div className="table-header">
                    <TablecelldivItem divText="Field" />
                    <div className="table-cell-div stretch">
                      <div className="table-date-text">Value Found</div>
                    </div>
                    <TablecelldivItem46 divText="Source" />
                    <TablecelldivItem divText="Confidence" />
                    <TablecelldivItem46 divText="Status" />
                    <TablecelldivItem46 divText="Action" />
                  </div>
                  <div className="table-content">
                    <div className="dataenrichment---table-row">
                      <TablecelldivItem47 divText="LinkedIn" />
                      <TablecelldivItem48 label="linkedin.com/in/sarahjohnson" />
                      <TablecelldivItem49 label="Linkedin" />
                      <div className="table-cell-div">
                        <div className="confidence-row">
                          <div className="confidence-percentage">
                            <div className="confidence-percent"></div>
                          </div>
                          <div className="confidence-percent-text">96%</div>
                        </div>
                      </div>
                      <TablecelldivItem54
                        src="../images/smarties-contact-icon-lock.svg"
                        divText="Locked"
                      />
                      <TablecelldivItem52 />
                    </div>
                    <div className="dataenrichment---table-row">
                      <TablecelldivItem47 divText="Job Title" />
                      <TablecelldivItem48 label="Director of Operations" />
                      <TablecelldivItem49 label="Company" />
                      <div className="table-cell-div">
                        <div className="confidence-row">
                          <div className="confidence-percentage">
                            <div className="confidence-percent _w-88"></div>
                          </div>
                          <div className="confidence-percent-text">88%</div>
                        </div>
                      </div>
                      <TablecelldivItem54
                        src="../images/smarties-icon-check-green.svg"
                        divText="Enriched"
                      />
                      <div className="table-cell-div _w-10">
                        <a
                          href="#"
                          className="data-enrichment-btn--style1 bg-grey w-inline-block"
                        >
                          <div>View</div>
                        </a>
                      </div>
                    </div>
                    <div className="dataenrichment---table-row">
                      <TablecelldivItem47 divText="Region" />
                      <TablecelldivItem48 label="North America" />
                      <TablecelldivItem49 label="CRM Sync" />
                      <TablecelldivItem56 />
                      <div className="table-cell-div _w-10">
                        <div className="dataenrichmentstatus">
                          <div className="file-info-data">Free</div>
                        </div>
                      </div>
                      <div className="table-cell-div _w-10">
                        <a
                          href="#"
                          className="data-enrichment-btn--style1 bg-green w-inline-block"
                        >
                          <div>Import</div>
                        </a>
                      </div>
                    </div>
                    <div className="dataenrichment---table-row">
                      <TablecelldivItem47 divText="Company Size" />
                      <TablecelldivItem48 label="50-100 employees" />
                      <TablecelldivItem49 label="LinkedIn" />
                      <div className="table-cell-div">
                        <div className="confidence-row">
                          <div className="confidence-percentage">
                            <div className="confidence-percent _w-82"></div>
                          </div>
                          <div className="confidence-percent-text">82%</div>
                        </div>
                      </div>
                      <TablecelldivItem54
                        src="../images/smarties-contact-icon-lock.svg"
                        divText="Locked"
                      />
                      <TablecelldivItem52 />
                    </div>
                    <div className="dataenrichment---table-row">
                      <TablecelldivItem47 divText="Region" />
                      <TablecelldivItem48 label="North America" />
                      <TablecelldivItem49 label="CRM Sync" />
                      <TablecelldivItem56 />
                      <TablecelldivItem54
                        src="../images/smarties-contact-icon-lock.svg"
                        divText="Locked"
                      />
                      <TablecelldivItem52 />
                    </div>
                  </div>
                </div>
                <div className="datanerichment-unlock-card">
                  <div className="datanerichment-unlock-card-left">
                    <div className="datanerichment-unlock-card-title">
                      Unlock Premium Data
                    </div>
                    <div className="datanerichment-unlock-card-subtext">
                      Get access to 3 locked items
                    </div>
                  </div>
                  <div className="datanerichment-unlock-card-right">
                    <a
                      href="#"
                      className="data-enrichment-btn--style1 unlockpremium-white w-inline-block"
                    >
                      <div>30 Credits</div>
                    </a>
                    <a
                      href="#"
                      className="data-enrichment-btn--style1 unlockpremium w-inline-block"
                    >
                      <div>$9 USD</div>
                    </a>
                  </div>
                </div>
                <div className="form-btn-container">
                  <a href="#" className="btn-style1 outline">
                    <div>Cancel</div>
                  </a>
                  <a href="#" className="btn-style1 bg-green">
                    <div>Update Contact</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customermemorycenter;
