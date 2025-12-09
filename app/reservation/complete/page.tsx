import { Suspense } from 'react';
import ReservationCompleteContent from '../../../components/ReservationCompleteContent';

// Ensure this page is dynamically rendered to avoid static generation errors
export const dynamic = 'force-dynamic';

export default function ReservationCompletePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">読み込み中...</div>}>
            <ReservationCompleteContent />
        </Suspense>
    );
}
