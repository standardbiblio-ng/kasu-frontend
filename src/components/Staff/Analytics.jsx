import React from 'react'
import Image from 'next/image'

export default function Analytics(props) {
    return (
        <div className="w-[300px] h-[150px] bg-white rounded-md flex flex-col gap-2 items-start justify-center">
            <div className='w-full h-[30%] flex items-center justify-start'>
                <span className='w-[2%] h-[70%] my-auto rounded-2xl' style={{ backgroundColor: `${props.pathColor}` }}></span>
                <span className='w-full mx-4 font-semibold'>{props.title}</span>
            </div>
            <div className='w-full h-[70%]'>
                <div className='flex px-5 gap-10'>
                    <div>{props.icon}</div>
                    <div>
                        <svg width="10" height="52" viewBox="0 0 10 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_319_4274)">
                                <line x1="5" y1="1.5" x2="5" y2="42.5" stroke="#909590" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" shapeRendering="crispEdges" />
                            </g>
                            <defs>
                                <filter id="filter0_d_319_4274" x="0" y="0.5" width="10" height="51" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_4274" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_4274" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <p className='text-3xl'>{props.counter}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
