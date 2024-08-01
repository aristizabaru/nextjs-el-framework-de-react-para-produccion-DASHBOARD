'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, subtractOne } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

export interface CounterResponse {
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch( '/api/counter' ).then( res => res.json() );

    return data;
};

export const CartCounter = () => {

    const { count } = useAppSelector( state => state.counter );
    const dispatch = useAppDispatch();

    useEffect( () => {
        getApiCounter().then( ( { count } ) => dispatch( initCounterState( count ) ) );
    }, [ dispatch ] );

    const addHandler = () => {
        dispatch( addOne() );
    };

    const subtractHandler = () => {
        dispatch( subtractOne() );
    };

    return (
        <>
            <span className='text-9xl'>{ count }</span>
            <div className='flex'>
                <button
                    onClick={ addHandler }
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>+1</button>
                <button
                    onClick={ subtractHandler }
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>-1</button>
            </div>
        </>
    );
};
