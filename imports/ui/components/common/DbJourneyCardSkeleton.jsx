// DbJourneyCardSkeleton.jsx
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const DbJourneyCardSkeleton = ({ color }) => {
    return (
        <SkeletonTheme >
            <div className={`db-journey-card ${color}`} >
                <div className="db-journey-card-left">
                    <div className="db-journey-card-top" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className="stat-title journey">
                            <Skeleton height={20} width={160} />
                        </div>
                        <div className={`db-journey-tag ${color}`}>
                            <Skeleton height={20} width={72} />
                        </div>
                    </div>

                    <div>
                        <Skeleton height={36} width={120} /> {/* number */}
                        <div style={{ marginTop: 6 }}>
                            <Skeleton height={14} width={110} /> {/* label */}
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme >
    );
};

export default DbJourneyCardSkeleton;
