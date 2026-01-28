import React from 'react';
import FadeContent from '@/components/animations/FadeContent';

export default function Navigation() {
    <div className='columns 4'>
        <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0}>
            {'hello world'}
        </FadeContent>
    </div>
}