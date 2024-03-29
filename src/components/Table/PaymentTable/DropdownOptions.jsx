import React, { useEffect, useState } from "react";
import { useUserStore } from "@store/userStore.store";
import { useAcceptanceFee } from "@hooks/useAcceptanceFee.hook";
const DropdownOptions = () => {
  const [open, setOpen] = useState(false);
  const [paymentLink, setPaymentLink] = useState()
  const { data, isLoading, isError, isSuccess, mutate } = useAcceptanceFee()
  useEffect(() => {
    const user = useUserStore.getState().userDetails.user
    const paymentURL = user?.payments[0]?.paymentUrl
    // console.log(paymentURL)
    setPaymentLink(paymentURL)
    // const initializePaymnet = (id) => {
    //   mutate(id, {
    //     onSuccess: (data) => {
    //       console.log(data?.data?.authorization_url)
    //     },
    //     onError: (error) => {
    //       console.log(error)
    //     }
    //   })
    // }
    // initializePaymnet(paymentId)
  }, [])
  return (
    <>
      <div className="w-full flex justify-center">
        <div className=" ">
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="z-10 block rounded-lg hover:bg-black/30 focus:outline-none"
          >
            <svg
              className="w-7 h-7 "
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4905 18.6663C17.1977 18.6663 17.876 18.3854 18.3761 17.8853C18.8762 17.3852 19.1571 16.7069 19.1571 15.9997C19.1571 15.2924 18.8762 14.6142 18.3761 14.1141C17.876 13.614 17.1977 13.333 16.4905 13.333C15.7832 13.333 15.1049 13.614 14.6048 14.1141C14.1047 14.6142 13.8238 15.2924 13.8238 15.9997C13.8238 16.7069 14.1047 17.3852 14.6048 17.8853C15.1049 18.3854 15.7832 18.6663 16.4905 18.6663ZM8.49046 18.6663C9.1977 18.6663 9.87598 18.3854 10.3761 17.8853C10.8762 17.3852 11.1571 16.7069 11.1571 15.9997C11.1571 15.2924 10.8762 14.6142 10.3761 14.1141C9.87598 13.614 9.1977 13.333 8.49046 13.333C7.78321 13.333 7.10494 13.614 6.60484 14.1141C6.10474 14.6142 5.82379 15.2924 5.82379 15.9997C5.82379 16.7069 6.10474 17.3852 6.60484 17.8853C7.10494 18.3854 7.78321 18.6663 8.49046 18.6663ZM24.4905 18.6663C25.1977 18.6663 25.876 18.3854 26.3761 17.8853C26.8762 17.3852 27.1571 16.7069 27.1571 15.9997C27.1571 15.2924 26.8762 14.6142 26.3761 14.1141C25.876 13.614 25.1977 13.333 24.4905 13.333C23.7832 13.333 23.1049 13.614 22.6048 14.1141C22.1047 14.6142 21.8238 15.2924 21.8238 15.9997C21.8238 16.7069 22.1047 17.3852 22.6048 17.8853C23.1049 18.3854 23.7832 18.6663 24.4905 18.6663Z"
                fill="currentColor"
              />
            </svg>
          </button>

          {open && (
            <div className="max-w-[10rem] absolute right-[7%] mt-2 bg-white rounded-md shadow-lg overflow-hidden z-30">
              {/*  */}
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className="fixed inset-0 w-screen h-screen z-10"
              ></div>
              <div className="w-full relative flex z-40 py-1">
                <a href={paymentLink}>
                  <div className="w-full flex space-x-2 items-start hover:bg-primary/10 px-4 py-2">
                    <div className="">
                      <svg
                        className="w-5 aspect-square"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.99984 14.6668C3.63317 14.6668 3.31939 14.5364 3.0585 14.2755C2.79717 14.0142 2.6665 13.7002 2.6665 13.3335V5.8835C2.6665 5.70572 2.69984 5.53616 2.7665 5.37483C2.83317 5.21394 2.92761 5.07238 3.04984 4.95016L6.28317 1.71683C6.40539 1.59461 6.54695 1.50016 6.70784 1.4335C6.86917 1.36683 7.03873 1.3335 7.2165 1.3335H11.9998C12.3665 1.3335 12.6805 1.46394 12.9418 1.72483C13.2027 1.98616 13.3332 2.30016 13.3332 2.66683V13.3335C13.3332 13.7002 13.2027 14.0142 12.9418 14.2755C12.6805 14.5364 12.3665 14.6668 11.9998 14.6668H3.99984ZM3.99984 13.3335H11.9998V2.66683H7.23317L3.99984 5.90016V13.3335ZM7.99984 11.0502C8.08873 11.0502 8.17206 11.0362 8.24984 11.0082C8.32762 10.9806 8.39984 10.9335 8.4665 10.8668L10.2165 9.11683C10.3387 8.99461 10.3998 8.84461 10.3998 8.66683C10.3998 8.48905 10.3332 8.3335 10.1998 8.20016C10.0776 8.07794 9.92495 8.01683 9.74184 8.01683C9.55828 8.01683 9.39984 8.07794 9.2665 8.20016L8.6665 8.76683V6.66683C8.6665 6.47794 8.60273 6.3195 8.47517 6.1915C8.34717 6.06394 8.18873 6.00016 7.99984 6.00016C7.81095 6.00016 7.65273 6.06394 7.52517 6.1915C7.39717 6.3195 7.33317 6.47794 7.33317 6.66683V8.76683L6.73317 8.1835C6.59984 8.06127 6.44428 8.00016 6.2665 8.00016C6.08873 8.00016 5.93317 8.06683 5.79984 8.20016C5.67762 8.32238 5.6165 8.47794 5.6165 8.66683C5.6165 8.85572 5.67762 9.01127 5.79984 9.1335L7.53317 10.8668C7.59984 10.9335 7.67206 10.9806 7.74984 11.0082C7.82762 11.0362 7.91095 11.0502 7.99984 11.0502Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="text-black">Pay</div>
                  </div>
                </a>
              </div>


            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropdownOptions;
