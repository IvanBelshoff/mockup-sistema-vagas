
interface ILayout extends Readonly<{ children: React.ReactNode }> { };

export default function Layout({ children }: ILayout) {
    return (
        <div className='flex justify-center'>
            <div className='w-full min-[1024px]:max-w-[1024px]'>
                {children}
            </div>
        </div>
    );
}
