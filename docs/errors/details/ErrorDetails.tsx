import React from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';

export default function ErrorDetails({ error }){
    const Error = React.lazy(() => import('./_'+error+'.md'));
    return (
        <ErrorBoundary fallback={() => ( <br /> )}>
            <React.Suspense fallback={<br />}>
                <Error />
            </React.Suspense>
        </ErrorBoundary>
    )
}
