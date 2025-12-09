import { Suspense } from 'react';
import ReservationCompleteClientContent from './ClientContent';

export const dynamic = 'force-dynamic';

export default function ReservationCompletePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">読み込み中...</div>}>
            <ReservationCompleteClientContent />
        </Suspense>
    );
}
