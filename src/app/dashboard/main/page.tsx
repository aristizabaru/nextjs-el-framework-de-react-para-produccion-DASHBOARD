import { WidgetsGrid } from '@/components';

export const metadata = {
    title: 'Dashboard main',
    description: 'Dashboard main',
};

export default function MainPage () {
    return (
        <div className='text-black p-4'>
            <h1 className='mt-2 text-3xl'>Dashboard</h1>
            <span className='text-xl'>Información General</span>
            <WidgetsGrid />
        </div>
    );
}