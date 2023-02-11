import React from 'react'
import { useRouter } from 'next/router'
export default function Card() {
    const router = useRouter()
    const showCourseDetails = () => {
        router.push('courses/details')
    }

    return (
        <div className='mt-5'>
            <div className='w-[290px] h-[180px] bg-white mt-5   border-l-[3px] border-l-[#9747FFB8] rounded-lg'>
                <div className='mx-5 py-5'>
                    <svg width="40" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1558_443)">
                            <path d="M19.0039 0.655029H9.40019C9.16082 0.655029 8.9668 0.849052 8.9668 1.08843V4.46541L9.44746 4.16698C9.56977 4.091 9.70039 4.03975 9.83355 4.01158V1.52182H18.5705V7.77244H9.83359V6.76111L8.9668 7.29931V8.20587C8.9668 8.44525 9.16082 8.63927 9.40019 8.63927H19.0039C19.2432 8.63927 19.4373 8.44525 19.4373 8.20587V1.08843C19.4373 0.849052 19.2432 0.655029 19.0039 0.655029Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M12.7032 3.06081C12.5892 2.9162 12.3796 2.89147 12.235 3.00542L10.7422 4.18249C10.8847 4.27565 11.0098 4.40045 11.1055 4.55463C11.1327 4.59827 11.1562 4.64315 11.1771 4.68866L12.6479 3.52901C12.7925 3.41503 12.8173 3.20538 12.7032 3.06081Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M5.49746 2.49492C6.18641 2.49492 6.74492 1.93641 6.74492 1.24746C6.74492 0.558506 6.18641 0 5.49746 0C4.80851 0 4.25 0.558506 4.25 1.24746C4.25 1.93641 4.80851 2.49492 5.49746 2.49492Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M10.5937 4.87226C10.4184 4.58988 10.0474 4.50308 9.76491 4.6784L8.54593 5.43523C8.54085 4.42433 8.54355 4.96082 8.5403 4.3098C8.53636 3.52836 7.89742 2.89258 7.11593 2.89258H6.52379C6.01789 4.20461 6.18086 3.71758 5.75144 4.83125L5.93203 4.04488C5.94453 3.98597 5.93547 3.92457 5.90644 3.87183L5.66176 3.4268L5.87891 3.03191C5.91129 2.97301 5.86859 2.90082 5.80137 2.90082H5.20484C5.13766 2.90082 5.09488 2.97301 5.12731 3.03191L5.34488 3.42762L5.09973 3.87348C5.07129 3.92523 5.06199 3.98539 5.07348 4.04328L5.22992 4.83125C5.14559 4.61254 4.56258 3.10055 4.48239 2.89258H3.87825C3.0968 2.89258 2.45782 3.52832 2.45387 4.3098L2.43165 8.73167C2.43001 9.06409 2.69809 9.33491 3.03051 9.33659C3.03157 9.33659 3.03255 9.33659 3.0336 9.33659C3.36458 9.33659 3.63375 9.06909 3.6354 8.73773L3.65762 4.31586C3.65762 4.31515 3.65762 4.31445 3.65762 4.31379C3.65856 4.24816 3.71227 4.19558 3.77789 4.19609C3.84352 4.19656 3.89641 4.24992 3.89641 4.31554L3.89668 10.5804C4.4477 10.557 4.95824 10.7557 5.34125 11.1048V8.66069H5.65309V11.4643C5.87273 11.7873 6.00129 12.1769 6.00129 12.5961C6.00129 12.978 5.89457 13.3355 5.70953 13.6403C5.89961 13.6412 6.08422 13.6664 6.26027 13.713C6.49761 13.5071 6.78312 13.3555 7.09765 13.278C7.09765 2.36621 7.08457 9.11288 7.08457 4.31637C7.08457 4.24687 7.14078 4.19055 7.21027 4.19043C7.27976 4.19027 7.33621 4.24637 7.33652 4.31586C7.33863 4.73801 7.34527 6.05765 7.34757 6.51707C7.34867 6.73499 7.46749 6.93535 7.65824 7.04078C7.84863 7.14601 8.08148 7.14054 8.26695 7.02538L10.3999 5.70105C10.6823 5.52578 10.7691 5.15464 10.5937 4.87226Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M17.5157 13.9309C18.245 13.9309 18.8362 13.3397 18.8362 12.6105C18.8362 11.8812 18.245 11.29 17.5157 11.29C16.7865 11.29 16.1953 11.8812 16.1953 12.6105C16.1953 13.3397 16.7865 13.9309 17.5157 13.9309Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M20.7295 15.852C20.7253 15.0248 20.049 14.3518 19.2218 14.3518C18.8648 14.3518 16.2302 14.3518 15.91 14.3518C16.0521 14.6279 16.1328 14.9404 16.1328 15.2717C16.1328 15.6235 16.0389 15.991 15.8398 16.3179C16.5783 16.3477 17.2253 16.7441 17.6035 17.3295H19.1886V15.8674C19.1886 15.7954 19.2456 15.7365 19.3175 15.734C19.3894 15.7315 19.4504 15.7865 19.4553 15.8583C19.4553 15.8583 19.4553 15.8583 19.4553 15.8584L19.4627 17.3295H20.7369L20.7295 15.852Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M12.0959 15.2718C12.0959 14.9347 12.1794 14.617 12.3261 14.3374C11.4664 14.3374 10.4569 14.3374 9.38602 14.3374C9.52164 14.6085 9.5984 14.9138 9.5984 15.237C9.5984 15.6167 9.49176 15.9763 9.30664 16.2811C9.91437 16.284 10.4751 16.5365 10.8802 16.9556C11.2729 16.572 11.8083 16.334 12.3972 16.3308C12.1927 16.0007 12.0959 15.63 12.0959 15.2718Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M11.0939 11.2756C10.3647 11.2756 9.77344 11.8667 9.77344 12.5961C9.77344 13.3237 10.3636 13.9165 11.0939 13.9165C11.8173 13.9165 12.4143 13.3319 12.4143 12.5961C12.4143 11.8675 11.8243 11.2756 11.0939 11.2756Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M5.56304 15.2369C5.56304 14.9145 5.63944 14.6098 5.7744 14.3392C5.71749 14.3364 5.9569 14.3373 2.2789 14.3373C1.45594 14.3373 0.775352 15.0067 0.771172 15.8374L0.763672 17.3295C1.34598 17.3295 1.46312 17.3295 2.03793 17.3295L2.04539 15.8439C2.04578 15.7703 2.10558 15.711 2.1791 15.7112C2.25261 15.7114 2.31207 15.771 2.31207 15.8446V17.3295H4.09827C4.48323 16.7141 5.14515 16.3277 5.86558 16.298C5.67003 15.9831 5.56304 15.6197 5.56304 15.2369Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M3.98449 11.2756C3.25527 11.2756 2.66406 11.8668 2.66406 12.5961C2.66406 13.322 3.2518 13.9165 3.98449 13.9165C4.70855 13.9165 5.30496 13.33 5.30496 12.5961C5.30496 11.8668 4.71375 11.2756 3.98449 11.2756Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M17.2555 18.5082C17.2514 17.6809 16.575 17.0079 15.7478 17.0079C15.6601 17.0079 12.5068 17.0079 12.4077 17.0079C11.5805 17.0079 10.8608 17.6809 10.8566 18.5081L10.8458 18.4733C10.8417 17.6494 10.1685 16.9731 9.33815 16.9731C8.37941 16.9731 7.00242 16.9731 5.99804 16.9731C5.17086 16.9731 4.45113 17.6461 4.44695 18.4733L4.43945 20.0001H5.71371L5.72117 18.4797C5.72148 18.4163 5.773 18.3653 5.83633 18.3654C5.89965 18.3656 5.95086 18.417 5.95086 18.4803V20.0001C6.69777 20.0001 8.62597 20.0001 9.32554 20.0001V18.4803C9.32554 18.4125 9.38042 18.3575 9.44823 18.3573C9.51601 18.3571 9.57124 18.4119 9.57159 18.4797L9.57905 20.0001C9.83956 20.0001 11.854 20.0001 12.1233 20.0001L12.1308 18.5145C12.1308 18.5145 12.1308 18.5145 12.1308 18.5144C12.1312 18.4511 12.1827 18.4001 12.246 18.4002C12.3093 18.4004 12.3605 18.4518 12.3605 18.5151V20.0001C13.1074 20.0001 15.0356 20.0001 15.7352 20.0001V18.5151C15.7352 18.4473 15.7901 18.3923 15.8579 18.3921C15.9256 18.3919 15.9809 18.4467 15.9812 18.5145L15.9887 20.0001H17.2629L17.2555 18.5082Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M7.62297 16.5675C8.36074 16.5675 8.95883 15.9694 8.95883 15.2316C8.95883 14.4938 8.36074 13.8958 7.62297 13.8958C6.88519 13.8958 6.28711 14.4938 6.28711 15.2316C6.28711 15.9694 6.88519 16.5675 7.62297 16.5675Z" fill="#9747FF" fillOpacity="0.72" />
                            <path d="M14.1132 16.6024C14.851 16.6024 15.4491 16.0043 15.4491 15.2665C15.4491 14.5287 14.851 13.9307 14.1132 13.9307C13.3754 13.9307 12.7773 14.5287 12.7773 15.2665C12.7773 16.0043 13.3754 16.6024 14.1132 16.6024Z" fill="#9747FF" fillOpacity="0.72" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1558_443">
                                <rect width="20" height="20" fill="white" transform="translate(0.75)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='px-4'>
                    <p className='text-sm -mt-3'>COCS401</p>
                    <p className='text-sm text-primary'>Computer Science</p>
                    <p className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className='text-sm flex gap-2 cursor-pointer items-center justify-between py-2 text-btnWarning'>
                        <span className='flex items center gap-2'>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1558_491)">
                                    <path d="M20.198 4.78758L11.4811 2.10945C11.0061 1.96352 10.4936 1.96352 10.0189 2.10945L1.30172 4.78758C0.566094 5.01352 0.566094 5.98633 1.30172 6.21227L2.82141 6.67914C2.48797 7.09133 2.28297 7.59415 2.26266 8.14477C1.96172 8.31727 1.74984 8.62852 1.74984 9.00008C1.74984 9.33696 1.92734 9.6204 2.18297 9.80165L1.38516 13.3917C1.31578 13.7038 1.55328 14.0001 1.87297 14.0001H3.62641C3.94641 14.0001 4.18391 13.7038 4.11453 13.3917L3.31672 9.80165C3.57234 9.6204 3.74984 9.33696 3.74984 9.00008C3.74984 8.63852 3.54766 8.33602 3.26047 8.1604C3.28422 7.69102 3.52422 7.27602 3.90703 7.0129L10.0186 8.89071C10.3017 8.97758 10.8448 9.08602 11.4808 8.89071L20.198 6.21258C20.9339 5.98633 20.9339 5.01383 20.198 4.78758ZM11.7745 9.84665C10.883 10.1204 10.1233 9.96915 9.72485 9.84665L5.19297 8.45446L4.74984 12.0001C4.74984 13.1048 7.4361 14.0001 10.7498 14.0001C14.0636 14.0001 16.7498 13.1048 16.7498 12.0001L16.3067 8.45415L11.7745 9.84665Z" fill="#00923F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1558_491">
                                        <rect width="20" height="16" fill="white" transform="translate(0.75)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            student: 200

                        </span>
                        <button onClick={showCourseDetails}>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 5.75L9.25 8L7 10.25" stroke="black" strokeOpacity="0.72" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 8C1 8.88642 1.17459 9.76417 1.51381 10.5831C1.85303 11.4021 2.35023 12.1462 2.97703 12.773C3.60382 13.3998 4.34794 13.897 5.16689 14.2362C5.98583 14.5754 6.86358 14.75 7.75 14.75C8.63642 14.75 9.51417 14.5754 10.3331 14.2362C11.1521 13.897 11.8962 13.3998 12.523 12.773C13.1498 12.1462 13.647 11.4021 13.9862 10.5831C14.3254 9.76417 14.5 8.88642 14.5 8C14.5 6.20979 13.7888 4.4929 12.523 3.22703C11.2571 1.96116 9.54021 1.25 7.75 1.25C5.95979 1.25 4.2429 1.96116 2.97703 3.22703C1.71116 4.4929 1 6.20979 1 8V8Z" stroke="black" strokeOpacity="0.72" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}