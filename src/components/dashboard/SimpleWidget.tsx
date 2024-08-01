import Link from 'next/link';

interface Props {
    title: string;
    subTitle?: string;
    label?: string;
    icon?: React.ReactNode;
    href?: string;
}

export const SimpleWidget = ( { title, subTitle, label, icon, href }: Props ) => {
    return (
        <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 m-3">
            <div className="flex flex-col">
                {
                    label && (
                        <div>
                            <h2 className="font-bold text-gray-600 text-center uppercase mt-2">{ label }</h2>
                        </div>
                    )
                }
                <div className="my-3">
                    <div className="flex flex-row items-center justify-center space-x-1 ">

                        <div id="temp" className="text-center">
                            <div className='flex justify-center gap-2 items-center text-blue-500'>
                                { icon }
                                <h4 className="text-4xl font-semibold">{ title }</h4>
                            </div>
                            {
                                subTitle && (
                                    <p className="text-xs text-gray-500 mt-2">{ subTitle }</p>
                                )
                            }
                        </div>
                    </div>
                </div>
                {
                    href && (
                        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                            <Link href={ href } className="text-indigo-600 text-xs font-medium">Más</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};