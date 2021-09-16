import React, { useState } from 'react'
import Image from 'next/image'

export default function VirtualCard() {
  const [ viewToggle, setViewToggle ] = useState(true);

    const toggleCardView = () => {
        setViewToggle(!viewToggle)
      }
      const activeTogle = {
        fill:"#00332d",
        stroke:"#fff"
      }
    return (
        <>
            <div className="flex flex-wrap">
                <div className="virtual-card__user-detail">
                    <Image width={312} height={204} src="/images/card.svg"/>
                    {/* card number  */}
                    <div className="card-number flex justify-between">
                        <span>{viewToggle ? "7545" : "xxxx"}</span>
                        <span>{viewToggle ? "7545" : "xxxx"}</span>
                        <span>{viewToggle ? "7545" : "xxxx"}</span>
                        <span>{viewToggle ? "7545" : "xxxx"}</span>
                
                    </div>
                    {/* card amount  */}
                    <div className="card-amount">
                        <span>{viewToggle ? "$80,000" : "xxxx"}</span>
                    </div>
                    {/* card name  */}
                    <div className="card-name">
                        <span>Jane Doe</span>
                    </div>
                        {/* card expirey  */}
                        <div className="card-day">
                        <span>THU</span>
                    </div>
                    <div className="card-year">
                        <span>10/21</span>
                    </div>
                    {/* card cvv  */}
                    <div className="card-cvv">
                        <span>{viewToggle ? "109" : "xxxx"}</span>
                    </div>
                    <div className="card-toggle">
                        <button onClick={toggleCardView}>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path style={!viewToggle ? activeTogle : null} fillRule="evenodd" clipRule="evenodd" d="M8.03205 4.41963C7.36785 4.41963 6.82733 4.96015 6.82733 5.62435C6.82733 6.28856 7.36785 6.82908 8.03205 6.82908C8.69625 6.82908 9.23677 6.28856 9.23677 5.62435C9.23677 4.96015 8.69625 4.41963 8.03205 4.41963ZM8.03205 8.43538C6.48197 8.43538 5.22103 7.17443 5.22103 5.62435C5.22103 4.07428 6.48197 2.81333 8.03205 2.81333C9.58213 2.81333 10.8431 4.07428 10.8431 5.62435C10.8431 7.17443 9.58213 8.43538 8.03205 8.43538ZM15.957 5.22336C15.4438 4.33026 12.6143 -0.146497 7.81384 0.00369219C3.37483 0.116936 0.791905 4.02828 0.106016 5.22336C-0.0353386 5.47154 -0.0353386 5.77513 0.106016 6.0233C0.612 6.90435 3.34271 11.2454 8.05157 11.2454C8.11663 11.2454 8.18249 11.2446 8.24915 11.243C12.6882 11.1297 15.2711 7.21839 15.957 6.0233C16.0983 5.77513 16.0983 5.47154 15.957 5.22336Z" fill="white"/>
                        </svg>
                        </button>
                    </div>
                </div>
                {/* <Image width={265} height={173} src="/images/card1.svg"/> */}

            </div>
            <div className="virtual-card__action flex flex-wrap">
                <button className="freeze">Freeze Card</button>
                <button className="delete">Delete Card</button>
            </div>
        </>
    )
}
