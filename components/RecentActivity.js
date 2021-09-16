import React from 'react';
import Image from 'next/image';

export default function RecentActivity() {
    return (
        <div className="activity">
            <div className="activity__header flex justify-between items-center wrap">
                <p>Recent Activity</p>
                <div className="activity__date flex items-center">
                    <label className="flex items-center">
                        <span className="inline-block">Start date:</span>&nbsp;
                        <input type="date" />
                    </label>
                    <div className="activity__download flex items-center">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.554 7.2962C20.005 7.2962 22 9.356 22 11.8876V16.9199C22 19.4454 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4413 2 16.9096V11.8773C2 9.35187 3.991 7.2962 6.438 7.2962H7.378L17.554 7.2962Z" fill="#C0CCDA"/>
                                <path d="M12.5459 16.0374L15.4549 13.0695C15.7549 12.7627 15.7549 12.2691 15.4529 11.9634C15.1509 11.6587 14.6639 11.6597 14.3639 11.9654L12.7709 13.5905L12.7709 3.2821C12.7709 2.85042 12.4259 2.5 11.9999 2.5C11.5749 2.5 11.2309 2.85042 11.2309 3.2821L11.2309 13.5905L9.63694 11.9654C9.33694 11.6597 8.84994 11.6587 8.54794 11.9634C8.39694 12.1168 8.32094 12.3168 8.32094 12.518C8.32094 12.717 8.39694 12.9171 8.54594 13.0695L11.4549 16.0374C11.5999 16.1847 11.7959 16.268 11.9999 16.268C12.2049 16.268 12.4009 16.1847 12.5459 16.0374Z" fill="#30324B"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* activity list  */}
           <ul>
                <li className="activity__items grid justify-between items-center">
                    <div className="activity__name flex wrap items-center">
                        <Image className="img" src="/images/naira.svg" width={40} height={40} alt="Naira icon"/>
                        <p>Withdrawal</p>
                    </div>
                    <div className="activity__amount">
                        <p className="amount">0.003 BTC</p>
                    </div>
                    <div className="activity__amount">
                        <p>Just now</p>
                    </div>
                    <div className="activity__status activity__status--success">
                        <p>Success</p>
                    </div>
                </li>
                <li className="activity__items grid justify-between items-center">
                    <div className="activity__name flex wrap items-center">
                        <Image className="img" src="/images/naira.svg" width={40} height={40} alt="Naira icon"/>
                        <p>Deposit</p>
                    </div>
                    <div className="activity__amount">
                        <p className="amount">0.003 BTC</p>
                    </div>
                    <div className="activity__amount">
                        <p>Just now</p>
                    </div>
                    <div className="activity__status activity__status--failed">
                        <p>Failed</p>
                    </div>
                </li>
                <li className="activity__items grid justify-between items-center">
                    <div className="activity__name flex wrap items-center">
                        <Image className="img" src="/images/naira.svg" width={40} height={40} alt="Naira icon"/>
                        <p>Transfer</p>
                    </div>
                    <div className="activity__amount">
                        <p className="amount">0.003 BTC</p>
                    </div>
                    <div className="activity__amount">
                        <p>Today</p>
                    </div>
                    <div className="activity__status activity__status--pending">
                        <p>Pending</p>
                    </div>
                </li>
           </ul>
        </div>
    )
}
