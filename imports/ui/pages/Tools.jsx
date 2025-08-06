import React from 'react';
import MaincontentLayout400 from '../components/MaincontentLayout400';
import SidebarLayout399 from '../components/SidebarLayout399';
import TopbarLayout398 from '../components/TopbarLayout398';
import FormrowItem385 from '../components/FormrowItem385';
import FormrowItem386 from '../components/FormrowItem386';
import FormrowItem389 from '../components/FormrowItem389';
import PopupformhddivItem393 from '../components/PopupformhddivItem393';
import Noticedivstyle2Item from '../components/Noticedivstyle2Item';
import PropertylistItem from '../components/PropertylistItem';
import PropertydivItem from '../components/PropertydivItem';
import FormrowItem392 from '../components/FormrowItem392';
import HeaderlistItem from '../components/HeaderlistItem';
import MessagedivItem from '../components/MessagedivItem';
import Btnstyle1Item378 from '../components/Btnstyle1Item378';
import WformdoneItem from '../components/WformdoneItem';
import WformfailItem from '../components/WformfailItem';

const Tools = () => {
  return (
    <>
      <div className={'page-wrap'}>
        <MaincontentLayout400 />
        <SidebarLayout399 />
        <TopbarLayout398 />
        <div className={'popup-create-tool'}>
          <div className={'popup-card _w-50'}>
            <div className={'card-settings-hd-div'}>
              <div className={'card-settings-hd'}>Create Tool</div>
            </div>
            <div className={'w-form'}>
              <form
                id={'wf-form-create-tool-form'}
                name={'wf-form-create-tool-form'}
                data-name={'create tool form'}
                method={'get'}
                data-wf-page-id={'688b61ee631f6165f14725b1'}
                data-wf-element-id={'4a1ac76e-9d23-6e8a-fa81-b7af8845bfe2'}
              >
                <div className={'form-body'}>
                  <FormrowItem385
                    label={'Tool Name'}
                    name={'tool-name'}
                    dataName={'tool name'}
                    type={'text'}
                    id={'tool-name'}
                  />
                  <FormrowItem386
                    label={'Tool Description'}
                    id={'tool-description'}
                    name={'tool-description'}
                    dataName={'tool description'}
                  />
                  <FormrowItem389
                    name={'check-async'}
                    id={'check-async'}
                    dataName={'check async'}
                    htmlFor={'check-async'}
                    name1={'check-strict'}
                    id1={'check-strict'}
                    dataName1={'check strict'}
                    htmlFor1={'check-strict'}
                  />
                  <div className={'form-row'}>
                    <div className={'form-control'}>
                      <PopupformhddivItem393
                        label={'Parameters'}
                        dataWId={'5d5b0e1b-d041-c3a2-4aae-d2d218c8b916'}
                        label1={'Add Property'}
                      />
                      <Noticedivstyle2Item
                        divText={
                          'No properties configured. Click "Add Property" to add your first propery.'
                        }
                      />
                      <PropertylistItem
                        dataWId={'be1b7be0-9191-c686-ba08-742e8f7b2750'}
                      />
                      <PropertydivItem
                        htmlFor={'parameter-name'}
                        name={'parameter-name'}
                        dataName={'parameter name'}
                        id={'parameter-name'}
                        htmlFor1={'parameter-type'}
                        id1={'parameter-type'}
                        name1={'parameter-type'}
                        dataName1={'parameter type'}
                        id2={'parameter-description'}
                        name2={'parameter-description'}
                        dataName2={'parameter description'}
                        name3={'check-parameter-required'}
                        id3={'check-parameter-required'}
                        dataName3={'check parameter required'}
                        htmlFor2={'check-parameter-required'}
                        dataWId={'8e487be4-09b1-5c33-31cf-862b98316027'}
                        dataWId1={'8e487be4-09b1-5c33-31cf-862b9831602a'}
                      />
                    </div>
                  </div>
                  <FormrowItem385
                    label={'Server URL'}
                    name={'server-url'}
                    dataName={'server url'}
                    type={'url'}
                    id={'server-url'}
                  />
                  <FormrowItem392
                    htmlFor={'secret-token'}
                    name={'secret-token'}
                    dataName={'secret token'}
                    id={'secret-token'}
                    htmlFor1={'timeout'}
                    name1={'timeout'}
                    dataName1={'timeout'}
                    id1={'timeout'}
                  />
                  <div className={'form-row'}>
                    <div className={'form-control'}>
                      <PopupformhddivItem393
                        label={'HTTP Headers'}
                        dataWId={'bc828a3c-f17a-4ef9-7308-6b5473ce977d'}
                        label1={'Add Header'}
                      />
                      <Noticedivstyle2Item
                        divText={
                          'No headers configured. Click "Add Header" to add your first header.'
                        }
                      />
                      <HeaderlistItem
                        name={'header-name'}
                        dataName={'header name'}
                        id={'header-name'}
                        name1={'header-value'}
                        dataName1={'header value'}
                        id1={'header-value'}
                      />
                    </div>
                  </div>
                  <div className={'form-row'}>
                    <div className={'form-control'}>
                      <PopupformhddivItem393
                        label={'Messages'}
                        dataWId={'7529e335-786c-b4d4-9e50-b56416b0c584'}
                        label1={'Add Message'}
                      />
                      <Noticedivstyle2Item
                        divText={
                          'No messages configured. Click "Add Message" to add your first message.'
                        }
                      />
                      <MessagedivItem
                        htmlFor={'message-type'}
                        id={'message-type'}
                        name={'message-type'}
                        dataName={'message type'}
                        dataWId={'36045c06-1048-df50-c202-b16ef482f0c5'}
                      />
                    </div>
                  </div>
                  <div className={'form-btn-container'}>
                    <a href={'#'} className={'btn-style1 outline'}>
                      <div>Cancel</div>
                    </a>
                    <Btnstyle1Item378 divText={'Submit'} />
                  </div>
                </div>
              </form>
              <WformdoneItem />
              <WformfailItem />
            </div>
            <div
              data-w-id={'4a1ac76e-9d23-6e8a-fa81-b7af8845c024'}
              className={'popup-close'}
            >
              <img src={'../images/smarties-x.svg'} loading={'lazy'} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
