'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Progress = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="3px"
                color="rgb(59 130 246)"
                options={{ showSpinner: false }}
                shallowRouting
                delay={200}
            />
        </>
    );
};

export default Progress;