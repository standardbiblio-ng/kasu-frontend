import kasuLogo from '@assets/images/kasu_logo.svg'


export default function SidenavHeader() {
    return (
        <div style={{
            backgroundImage: `url(${kasuLogo.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
        }} className="my-4 absolute top-0 inset-x-5 mx-auto w-[50%] aspect-square ">

        </div>
    );
}
