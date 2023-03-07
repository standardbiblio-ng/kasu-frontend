import React from 'react'

export default function Modal({ children, show, title, close }) {
    if (!show) {
        return null;
    }
    return (
        <div className="w-screen h-screen absolute inset-0">
            <div className="bg-black opacity-70 w-screen h-screen absolute z-50 inset-0"
                onClick={close}>
            </div>
            <main className="antialiased overflow-x-hidden">
                <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                    <div className="bg-white w-1/3 max-h-[90vh] overflow-y-scroll py-10 rounded-lg fixed z-50 flex flex-col items-start px-8">
                        {/* header */}
                        <div className="w-full h-[10%] flex items-center justify-between">
                            <span className="text-md font-semibold text-primary">
                                {title}
                            </span>
                            <button
                                onClick={close}
                                className="text-xl font-bold text-btnColor"
                            >
                                X
                            </button>
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            </main>
        </div>
    )
}
