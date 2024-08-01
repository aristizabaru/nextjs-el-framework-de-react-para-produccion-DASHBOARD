'use client';

import { Provider } from "react-redux";
import { useRef } from 'react';
import { AppStore, makeStore } from '.';

interface Props {
    children: React.ReactNode;
}

export const StoreProvider = ( { children }: Props ) => {

    const storeRef = useRef<AppStore>();
    if ( !storeRef.current ) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }

    return <Provider store={ storeRef.current }>{ children }</Provider>;
};