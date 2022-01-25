import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Aside from "../components/Sidebar";
import DepositTabs from "../components/DepositTabs";
import AccountBalance from "../components/AccountBalance";
import RecentActivity from "../components/RecentActivity";
import Link from "next/link";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const closeMenu = () => {
    setActiveMenu(false);
  };
  useEffect(() => {
    if (activeMenu) {
      // Disable scroll for inner page
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeMenu]);
  return (
    <>
      <Head>
        <title>Patricia App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* mobile menu close button */}
      <button
        className={`close-overlay ${activeMenu ? "overlay-button" : ""}`}
        onClick={closeMenu}
      ></button>
      <div className=" nav-container flex justify-between items-center">
        <div className="flex items-center mobile-menu">
          <button onClick={handleMenu} className=" flex items-center">
            <Image
              width={35}
              height={35}
              src="/images/menu.svg"
              alt="Mobile menu"
            />
          </button>
          <Link href="/">
            <a className=" flex items-center w-24 md:w-auto">
              <Image
                width={112}
                height={22}
                src="/images/patricia-logo.svg"
                alt="Patricia logo"
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center profile-container">
          <div className=" flex items-center mr-2 ms:mr-5">
            <Image
              src="/images/notification.svg"
              width={32}
              height={32}
              alt="Notification"
            />
          </div>
          <div className="profile-container__user flex items-center mr-2">
            <Image
              src="/images/profile.png"
              width={26}
              height={26}
              alt="Profile"
            />
          </div>
          <button>
            <svg
              width="4"
              height="18"
              viewBox="0 0 4 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4C3.104 4 4 3.104 4 2C4 0.896 3.104 0 2 0C0.896 0 0 0.896 0 2C0 3.104 0.896 4 2 4ZM2 7C0.896 7 0 7.896 0 9C0 10.104 0.896 11 2 11C3.104 11 4 10.104 4 9C4 7.896 3.104 7 2 7ZM0 16C0 14.896 0.896 14 2 14C3.104 14 4 14.896 4 16C4 17.104 3.104 18 2 18C0.896 18 0 17.104 0 16Z"
                fill="#9DA8B6"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="dashboard-container grid ">
        {/* side bar  */}
        <Aside activeMenu={activeMenu} />
        <main className="dashboard-container__main flex wrap">
          <div className="page-main-content">
            <div className="page-main-content__header">
              <h4>Wallet</h4>
              <div className="page-main-content__title flex wrap items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#006156" />
                  <path
                    d="M14.1172 27.26H16.6761V15.5642L23.4859 27.26H26.4044V12H23.8454V23.0342L17.4798 12H14.1172V27.26Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 18.3682C12 17.7788 12.4734 17.301 13.0574 17.301H27.1563C27.7403 17.301 28.2137 17.7788 28.2137 18.3682C28.2137 18.9575 27.7403 19.4353 27.1563 19.4353H13.0574C12.4734 19.4353 12 18.9575 12 18.3682Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 21.9252C12 21.3358 12.4734 20.858 13.0574 20.858H27.1563C27.7403 20.858 28.2137 21.3358 28.2137 21.9252C28.2137 22.5145 27.7403 22.9923 27.1563 22.9923H13.0574C12.4734 22.9923 12 22.5145 12 21.9252Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <h5>
                    Naira Wallet
                    <svg
                      className="inline-block"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.9996 10.7312L4.234 6.96558L5.3652 5.83438L7.9996 8.46878L10.634 5.83438L11.7652 6.96558L7.9996 10.7312ZM7.99961 1.59998C4.46521 1.59998 1.59961 4.46478 1.59961 7.99998C1.59961 11.5344 4.46521 14.4 7.99961 14.4C11.534 14.4 14.3996 11.5344 14.3996 7.99998C14.3996 4.46478 11.534 1.59998 7.99961 1.59998Z"
                        fill="#C0CCDA"
                      />
                      <mask
                        id="mask0"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="1"
                        y="1"
                        width="14"
                        height="14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.9996 10.7312L4.234 6.96558L5.3652 5.83438L7.9996 8.46878L10.634 5.83438L11.7652 6.96558L7.9996 10.7312ZM7.99961 1.59998C4.46521 1.59998 1.59961 4.46478 1.59961 7.99998C1.59961 11.5344 4.46521 14.4 7.99961 14.4C11.534 14.4 14.3996 11.5344 14.3996 7.99998C14.3996 4.46478 11.534 1.59998 7.99961 1.59998Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)"></g>
                    </svg>
                  </h5>
                  <p>Lorem Ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <AccountBalance />
            <div className="request-money flex items-center">
              <Link href="/">
                <a className="request-money__link flex justify-between items-center">
                  <div className="flex items-center pr-3">
                    <div className="svg-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M9.7828 36.5612C5.51685 35.8635 3.12783 33.8338 3.33467 29.886C3.86555 29.2079 4.37843 28.5388 4.90706 27.881C6.05316 26.4568 7.29713 25.1288 8.73342 23.9944C9.80754 23.1453 10.9638 22.4433 12.2763 22.029C14.329 21.3802 16.3007 21.6384 18.2206 22.5486C18.3735 22.6211 18.5569 22.6652 18.7256 22.6652C20.4476 22.6731 22.1707 22.6664 23.8926 22.6777C24.0434 22.6788 24.2233 22.7456 24.338 22.843C24.5933 23.0615 24.8363 23.3026 25.0466 23.5641C25.8036 24.5027 25.8373 25.4627 25.2018 26.4862C24.8532 27.0466 24.455 27.3568 23.7194 27.324C22.1403 27.2527 20.5567 27.3025 18.9753 27.3025C18.8729 27.3025 18.7706 27.3025 18.6345 27.3025C18.7087 27.6919 18.9179 27.9738 19.1856 28.2071C19.6175 28.5841 20.0854 28.8218 20.7029 28.8014C22.0121 28.7584 23.3235 28.7935 24.6338 28.7811C24.7868 28.7799 24.969 28.7199 25.0871 28.6237C26.8428 27.1847 28.5783 25.7197 30.3441 24.2932C31.3159 23.5087 32.3495 22.8033 33.5519 22.4105C34.635 22.0561 35.6383 22.1716 36.4897 23.0083C36.7304 23.2449 36.7281 23.529 36.4785 23.7543C33.0323 26.8711 29.5861 29.9879 26.1342 33.0979C26.0375 33.1851 25.8688 33.2293 25.7338 33.2293C21.4565 33.2361 17.1791 33.2372 12.9017 33.2281C12.6385 33.2281 12.4777 33.313 12.3157 33.5123C11.5408 34.469 10.7512 35.412 9.96613 36.3596C9.91102 36.4242 9.85253 36.4842 9.7828 36.5612Z"
                            fill="#006156"
                          />
                          <path
                            d="M20 10.8309C20.0021 6.69267 23.3647 3.33171 27.5019 3.33331C31.639 3.33491 34.9995 6.69694 35 10.8352C35.0005 14.9692 31.6305 18.337 27.4976 18.3333C23.3583 18.3296 19.9979 14.9676 20 10.8309ZM29.8711 8.18376C29.4715 7.83219 29.0895 7.68228 27.9084 7.40274C27.8993 7.25123 27.8902 7.09545 27.8806 6.93327C27.672 6.93327 27.4843 6.93327 27.2895 6.93327C27.281 7.08478 27.2741 7.21548 27.2666 7.34619C27.2533 7.32538 27.2394 7.30511 27.2261 7.2843C26.7987 7.46249 26.3367 7.58572 25.9516 7.83006C24.9379 8.47344 24.9337 10.3935 26.2114 10.8784C26.5091 10.9915 26.8147 11.0838 27.1114 11.1985C27.177 11.2241 27.2687 11.3014 27.2703 11.3569C27.2821 11.9053 27.2773 12.4543 27.2773 13.0385C26.6216 12.9232 26.1068 12.5951 25.6192 12.2041C25.385 12.497 25.17 12.7664 24.9475 13.0443C25.6277 13.6248 26.4146 13.9385 27.2847 14.0804C27.2847 14.3178 27.2847 14.52 27.2847 14.7339C27.4939 14.7339 27.6822 14.7339 27.9009 14.7339C27.9009 14.505 27.9009 14.2964 27.9009 14.0793C28.0332 14.0585 28.1372 14.0414 28.2413 14.0254C29.5392 13.8211 30.2002 12.92 29.9522 11.6994C29.8028 10.9654 29.2464 10.6565 28.6227 10.418C28.3864 10.3273 28.0428 10.314 27.934 10.1454C27.8118 9.956 27.8977 9.6311 27.8961 9.36543C27.894 9.06934 27.8956 8.77273 27.8956 8.39715C28.4019 8.60415 28.8388 8.78286 29.2938 8.96905C29.4742 8.72365 29.6673 8.46064 29.8711 8.18376Z"
                            fill="#006156"
                          />
                          <path
                            d="M27.9179 11.3702C28.6296 11.5233 28.9529 11.8039 28.9204 12.2248C28.8868 12.6607 28.4882 12.9819 27.9179 13.0144C27.9179 12.4724 27.9179 11.9309 27.9179 11.3702Z"
                            fill="#006156"
                          />
                          <path
                            d="M27.266 8.4025C27.266 8.94506 27.266 9.47267 27.266 10.0003C26.6707 9.94267 26.3522 9.64712 26.3692 9.17179C26.3858 8.70926 26.7 8.42971 27.266 8.4025Z"
                            fill="#006156"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="33.3333"
                              height="33.3333"
                              fill="white"
                              transform="translate(3.33398 3.33331)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <p>Request Money</p>
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
                <a className="request-money__link flex justify-between items-center">
                  <div className="flex items-center pr-3">
                    <div className="svg-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.9961 28.6985C15.128 28.6985 10.2815 28.6985 5.41337 28.6985C5.21778 28.6985 5.02218 28.6985 4.82659 28.6768C4.1746 28.5681 3.91381 28.1552 4.08767 27.525C4.82659 24.917 5.58724 22.2873 6.32615 19.6794C6.52175 19.0057 6.71735 18.332 6.89121 17.6582C7.04334 17.1149 7.3476 16.8324 7.93439 16.8541C15.9973 16.8541 24.0384 16.8541 32.1013 16.8541C32.6664 16.8541 32.9489 17.1149 33.1011 17.6365C34.0356 20.8964 34.9701 24.1564 35.8829 27.3946C36.1437 28.2856 35.7742 28.7203 34.7745 28.7203C29.8629 28.6985 24.9295 28.6985 19.9961 28.6985ZM20.0179 23.8087C20.0396 23.8521 20.0396 23.8956 20.0613 23.939C20.7785 23.7 21.5392 23.5696 22.1694 23.2219C23.8211 22.3308 23.9732 20.5705 22.5823 19.3534C21.2349 18.1798 18.5618 18.245 17.2795 19.4838C16.1711 20.5487 16.1711 21.7658 17.2795 22.8307C18.0619 23.5479 18.9964 23.7869 20.0179 23.8087Z"
                          fill="#006156"
                        />
                        <path
                          d="M20.0604 13.3333C25.1677 13.3333 30.2749 13.3333 35.4038 13.3333C36.4905 13.3333 37.3815 13.6376 37.9683 14.6156C38.968 16.2673 37.7945 18.4188 35.8602 18.484C35.3169 18.5057 34.9474 18.2232 34.8822 17.7668C34.8388 17.3322 35.143 16.9627 35.6646 16.854C36.3601 16.7236 36.6643 16.3759 36.5991 15.8326C36.5557 15.311 36.1862 15.0502 35.5125 15.0067C35.3821 15.0067 35.2517 15.0067 35.143 15.0067C25.0373 15.0067 14.9532 15.0067 4.84742 15.0067C4.58663 15.0067 4.3041 15.0285 4.04331 15.0719C3.60865 15.1589 3.39132 15.4414 3.36959 15.8761C3.34785 16.3324 3.54345 16.6367 3.99984 16.7671C4.13024 16.8106 4.28237 16.8323 4.41277 16.854C4.86916 16.9627 5.08648 17.267 5.08648 17.7016C5.08648 18.1363 4.73876 18.4405 4.28237 18.484C3.04359 18.5709 1.80482 17.506 1.67442 16.289C1.56576 14.8329 2.52201 13.5289 3.86944 13.3768C4.19544 13.355 4.52143 13.3333 4.84742 13.3333C9.91118 13.3333 14.9967 13.3333 20.0604 13.3333Z"
                          fill="#006156"
                        />
                      </svg>
                    </div>

                    <p>Cardless Withdrawal</p>
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
            {/* recent activities  */}
            <RecentActivity />
          </div>
          <div className="page-side-content">
            <DepositTabs />
          </div>
        </main>
      </div>
    </>
  );
}
