import React, { Suspense } from 'react';
import ReservationCompleteContent from '../../../components/ReservationCompleteContent';

export const dynamic = 'force-dynamic';

export default function ReservationCompletePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">読み込み中...</div>}>
            <ReservationCompleteContent />
        </Suspense>
    );
}
