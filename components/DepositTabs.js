import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
export default function DepositTabs() {
  return (
    <>
      <Tabs className="deposit-tab">
        <TabList className="deposit-tab__header flex justify-between items-center">
          <Tab className="deposit-tab__title">Deposit</Tab>
          <Tab className="deposit-tab__title">Transfer</Tab>
        </TabList>

        <TabPanel className="deposit-tab__content">
          <h4>Select a method to Fund Naira wallet below</h4>
          <div className="deposit-tab__content__container grid">
            <Link href="/">
              <a className="deposit-tab__content__link flex justify-between items-center">
                <div className="flex items-center">
                  <div className="svg-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33398 33.3333H36.6673V36.6666H3.33398V33.3333ZM6.66732 20H10.0007V31.6666H6.66732V20ZM15.0007 20H18.334V31.6666H15.0007V20ZM21.6673 20H25.0007V31.6666H21.6673V20ZM30.0007 20H33.334V31.6666H30.0007V20ZM3.33398 11.6666L20.0007 3.33331L36.6673 11.6666V18.3333H3.33398V11.6666ZM20.0007 13.3333C20.4427 13.3333 20.8666 13.1577 21.1792 12.8452C21.4917 12.5326 21.6673 12.1087 21.6673 11.6666C21.6673 11.2246 21.4917 10.8007 21.1792 10.4881C20.8666 10.1756 20.4427 9.99998 20.0007 9.99998C19.5586 9.99998 19.1347 10.1756 18.8221 10.4881C18.5096 10.8007 18.334 11.2246 18.334 11.6666C18.334 12.1087 18.5096 12.5326 18.8221 12.8452C19.1347 13.1577 19.5586 13.3333 20.0007 13.3333Z"
                        fill="#006156"
                      />
                    </svg>
                  </div>
                  <p>Bank Deposit</p>
                </div>
                <svg
                  className="forward"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.84201 0.547764L9.58471 7.03989C10.1384 7.50459 10.1384 8.53834 9.58471 9.00305L1.84201 15.4952C1.28786 15.9599 0.512265 16.3491 0.0668052 15.4952C-0.296709 13.9979 1.09188 12.1947 1.09188 7.78308C1.09188 3.92444 -0.31896 1.28623 0.0668052 0.547764C0.298307 -0.40838 1.28786 0.0835337 1.84201 0.547764Z"
                    fill="#C8E2DE"
                  />
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a className="deposit-tab__content__link flex justify-between items-center">
                <div className="flex items-center">
                  <div className="svg-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31.24 17.905L31.2509 17.5002L30.9776 7.33704C30.9738 7.19751 30.9641 7.05941 30.9487 6.92299L30.9357 6.79915C30.7985 5.43256 30.0407 4.24085 28.9374 3.52357C28.8521 3.46671 28.7648 3.41264 28.6755 3.36149C28.5909 3.31146 28.5045 3.26403 28.4164 3.21928C27.8728 2.93279 27.2662 2.74709 26.6206 2.68766C22.2165 2.28226 17.7844 2.28226 13.3803 2.68766C12.7337 2.74718 12.1262 2.93338 11.5819 3.22065C11.4938 3.26546 11.4074 3.31297 11.3228 3.36305C11.2363 3.41272 11.1516 3.46513 11.0688 3.52017C9.95962 4.23905 9.19849 5.43698 9.06414 6.81049L9.05921 6.85772L9.05299 6.91632C9.03712 7.05491 9.02716 7.19523 9.02334 7.33703L8.75 17.5002L8.76094 17.9068L8.7501 18.3336L8.76044 18.7407L8.75018 19.1669L8.75993 19.5722L8.75015 20.0002L9.02078 31.8386C9.085 34.6474 11.2213 36.9735 14.0145 37.276C17.9935 37.7069 22.0074 37.7069 25.9865 37.276C28.7797 36.9735 30.9159 34.6474 30.9802 31.8386L31.2508 20.0002L31.2411 19.5751L31.2509 19.1669L31.2406 18.739L31.2509 18.3336L31.24 17.905ZM28.5072 14.8629L28.4576 7.2014C28.457 7.17696 28.456 7.15263 28.4545 7.12841C28.3555 6.45762 27.9668 5.8786 27.4156 5.52707C27.207 5.41835 26.9755 5.34624 26.7293 5.31958C22.2565 4.83519 17.7445 4.83519 13.2717 5.31958C13.0253 5.34625 12.7938 5.4184 12.5851 5.5272C12.0341 5.87864 11.6456 6.45739 11.5465 7.12785C11.545 7.15225 11.544 7.17677 11.5434 7.20139L11.4937 14.8629C11.5414 16.6352 12.9066 18.0919 14.672 18.2544C18.2168 18.5807 21.7841 18.5808 25.3289 18.2544C27.0943 18.0919 28.4595 16.6352 28.5072 14.8629ZM12.5005 20C12.0403 20 11.6672 20.3731 11.6672 20.8333C11.6672 21.2936 12.0403 21.6666 12.5005 21.6666H14.1672C14.6274 21.6666 15.0005 21.2936 15.0005 20.8333C15.0005 20.3731 14.6274 20 14.1672 20H12.5005ZM11.6672 25.8333C11.6672 25.3731 12.0403 25 12.5005 25H14.1672C14.6274 25 15.0005 25.3731 15.0005 25.8333C15.0005 26.2936 14.6274 26.6666 14.1672 26.6666H12.5005C12.0403 26.6666 11.6672 26.2936 11.6672 25.8333ZM12.5005 30C12.0403 30 11.6672 30.3731 11.6672 30.8333C11.6672 31.2936 12.0403 31.6666 12.5005 31.6666H14.1672C14.6274 31.6666 15.0005 31.2936 15.0005 30.8333C15.0005 30.3731 14.6274 30 14.1672 30H12.5005ZM18.3338 20.8333C18.3338 20.3731 18.7069 20 19.1672 20H20.8338C21.2941 20 21.6672 20.3731 21.6672 20.8333C21.6672 21.2936 21.2941 21.6666 20.8338 21.6666H19.1672C18.7069 21.6666 18.3338 21.2936 18.3338 20.8333ZM19.1672 25C18.7069 25 18.3338 25.3731 18.3338 25.8333C18.3338 26.2936 18.7069 26.6666 19.1672 26.6666H20.8338C21.2941 26.6666 21.6672 26.2936 21.6672 25.8333C21.6672 25.3731 21.2941 25 20.8338 25H19.1672ZM18.3338 30.8333C18.3338 30.3731 18.7069 30 19.1672 30H20.8338C21.2941 30 21.6672 30.3731 21.6672 30.8333C21.6672 31.2936 21.2941 31.6666 20.8338 31.6666H19.1672C18.7069 31.6666 18.3338 31.2936 18.3338 30.8333ZM25.8338 20C25.3736 20 25.0005 20.3731 25.0005 20.8333C25.0005 21.2936 25.3736 21.6666 25.8338 21.6666H27.5005C27.9607 21.6666 28.3338 21.2936 28.3338 20.8333C28.3338 20.3731 27.9607 20 27.5005 20H25.8338ZM25.0005 25.8333C25.0005 25.3731 25.3736 25 25.8338 25H27.5005C27.9607 25 28.3338 25.3731 28.3338 25.8333C28.3338 26.2936 27.9607 26.6666 27.5005 26.6666H25.8338C25.3736 26.6666 25.0005 26.2936 25.0005 25.8333ZM25.8338 30C25.3736 30 25.0005 30.3731 25.0005 30.8333C25.0005 31.2936 25.3736 31.6666 25.8338 31.6666H27.5005C27.9607 31.6666 28.3338 31.2936 28.3338 30.8333C28.3338 30.3731 27.9607 30 27.5005 30H25.8338Z"
                        fill="#006156"
                      />
                    </svg>
                  </div>

                  <p>USSD Deposit</p>
                </div>
                <svg
                  className="forward"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.84201 0.547764L9.58471 7.03989C10.1384 7.50459 10.1384 8.53834 9.58471 9.00305L1.84201 15.4952C1.28786 15.9599 0.512265 16.3491 0.0668052 15.4952C-0.296709 13.9979 1.09188 12.1947 1.09188 7.78308C1.09188 3.92444 -0.31896 1.28623 0.0668052 0.547764C0.298307 -0.40838 1.28786 0.0835337 1.84201 0.547764Z"
                    fill="#C8E2DE"
                  />
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a className="deposit-tab__content__link flex justify-between items-center">
                <div className="flex items-center">
                  <div className="svg-icon">
                    <svg
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0212 8.3466C18.6633 7.85615 24.3372 7.85615 29.9793 8.3466L32.6851 8.58181C35.2742 8.80688 37.3716 10.7771 37.7581 13.347C38.5709 18.752 38.5709 24.2481 37.7581 29.653C37.687 30.1258 37.558 30.5783 37.3786 31.0034C37.2597 31.2853 36.8928 31.3281 36.6871 31.1017L28.7653 22.3878C28.4074 21.9941 27.8509 21.8486 27.3461 22.0169L22.8117 23.5284L16.2337 16.1281C15.9878 15.8515 15.6388 15.6886 15.2689 15.6777C14.8989 15.6668 14.5409 15.809 14.2792 16.0707L5.47474 24.8752C5.20376 25.1461 4.74162 24.9737 4.72001 24.591C4.50818 20.8395 4.6823 17.0716 5.24239 13.347C5.62885 10.7771 7.7263 8.80688 10.3154 8.58181L13.0212 8.3466ZM25.0836 16.125C25.0836 14.6408 26.2868 13.4375 27.7711 13.4375C29.2553 13.4375 30.4586 14.6408 30.4586 16.125C30.4586 17.6093 29.2553 18.8125 27.7711 18.8125C26.2868 18.8125 25.0836 17.6093 25.0836 16.125Z"
                        fill="#EFC9C8"
                      />
                      <path
                        d="M5.30594 28.8446C5.20677 28.9438 5.15966 29.0837 5.17941 29.2226C5.19983 29.3661 5.22083 29.5096 5.24239 29.653C5.62885 32.223 7.7263 34.1932 10.3154 34.4182L13.0212 34.6534C18.6633 35.1439 24.3372 35.1439 29.9793 34.6534L32.6851 34.4182C33.4459 34.3521 34.1642 34.1353 34.8092 33.7968C35.0536 33.6686 35.0948 33.3454 34.9091 33.1412L27.5618 25.0592C27.4425 24.928 27.257 24.8795 27.0888 24.9356L22.821 26.3582C22.311 26.5281 21.7488 26.3779 21.3917 25.9761L15.4874 19.3338C15.3162 19.1412 15.0182 19.1324 14.8359 19.3146L5.30594 28.8446Z"
                        fill="#EFC9C8"
                      />
                    </svg>
                  </div>
                  <p>Card Deposit</p>
                </div>
                <svg
                  className="forward"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.84201 0.547764L9.58471 7.03989C10.1384 7.50459 10.1384 8.53834 9.58471 9.00305L1.84201 15.4952C1.28786 15.9599 0.512265 16.3491 0.0668052 15.4952C-0.296709 13.9979 1.09188 12.1947 1.09188 7.78308C1.09188 3.92444 -0.31896 1.28623 0.0668052 0.547764C0.298307 -0.40838 1.28786 0.0835337 1.84201 0.547764Z"
                    fill="#C8E2DE"
                  />
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a className="deposit-tab__content__link flex justify-between items-center deposit-tab__content__link--active">
                <div className="flex items-center">
                  <div className="svg-icon">
                    <svg
                      width="29"
                      height="24"
                      viewBox="0 0 29 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1661 18.1234C24.1605 18.1877 24.1531 18.2519 24.1419 18.3156C24.163 18.4516 24.1736 18.5889 24.1736 18.728C24.1736 21.5476 19.8236 23.8332 14.4576 23.8332C9.09215 23.8332 4.74219 21.5476 4.74219 18.728C4.74219 18.5889 4.75275 18.4516 4.77386 18.3156C4.76268 18.2519 4.75523 18.1877 4.74964 18.1234C4.74467 18.061 4.74219 17.9986 4.74219 17.9362V12.8979L8.28228 14.7872L13.1248 17.3722C13.9688 17.8227 14.9799 17.8239 15.8252 17.3759L20.6757 14.8059L24.1736 12.9528V17.9362C24.1736 17.9986 24.1711 18.061 24.1661 18.1234Z"
                        fill="#006156"
                      />
                      <path
                        d="M4.02853 17.3267C3.89376 17.6736 3.71489 18.0037 3.54658 18.3369C3.52733 18.3756 3.30312 18.9034 3.20748 19.1225C3.09879 19.3708 2.97395 19.6129 2.84788 19.8531C2.82117 19.9043 2.75409 19.9679 2.70751 19.966C2.64603 19.9642 2.55846 19.9174 2.53175 19.8643C2.1175 19.0357 1.70946 18.204 1.30328 17.371C1.13932 17.0366 1.47221 16.5056 1.46351 16.4969C1.59021 16.2105 1.70325 15.9166 1.84796 15.6396C1.97465 15.3975 2.04111 15.1573 2.03924 14.8796C2.02993 13.0646 2.03303 9.37765 2.03366 7.56259C2.03366 7.4821 2.04235 7.40223 2.04918 7.28119C2.44046 7.47336 2.80689 7.6437 3.15903 7.83775C3.21679 7.86957 3.23977 8.00746 3.23977 8.09669C3.24412 9.75389 3.23667 13.2829 3.25095 14.9395C3.25219 15.161 3.32734 15.3937 3.4174 15.5997C3.60434 16.0252 3.84034 16.4295 4.02356 16.8563C4.0807 16.9911 4.08194 17.1895 4.02853 17.3267Z"
                        fill="#006156"
                      />
                      <path
                        d="M28.4332 8.94269L15.5889 15.7481C14.8945 16.1162 14.0642 16.115 13.3711 15.745L0.56462 8.90962C-0.113587 8.54773 -0.102408 7.56814 0.583873 7.22184L13.3984 0.753387C14.0679 0.415832 14.8567 0.415208 15.5262 0.752763L28.4165 7.25242C29.1034 7.59996 29.1133 8.58205 28.4332 8.94269Z"
                        fill="#006156"
                      />
                    </svg>
                  </div>
                  <p className="deposit-tab__content__more">
                    Learn More about Funding your wallet
                  </p>
                </div>
                <svg
                  className="forward"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.84201 0.547764L9.58471 7.03989C10.1384 7.50459 10.1384 8.53834 9.58471 9.00305L1.84201 15.4952C1.28786 15.9599 0.512265 16.3491 0.0668052 15.4952C-0.296709 13.9979 1.09188 12.1947 1.09188 7.78308C1.09188 3.92444 -0.31896 1.28623 0.0668052 0.547764C0.298307 -0.40838 1.28786 0.0835337 1.84201 0.547764Z"
                    fill="#C8E2DE"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </TabPanel>
        <TabPanel className="deposit-tab__content hh">
          <h4>Content of Transfer</h4>
        </TabPanel>
      </Tabs>
    </>
  );
}
