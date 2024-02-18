function HeroSection() {
    return (
        <div className="bg-[url('/images/hero_desktop.png')] relative items-center text-center hero-theme-banner">
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <ul className="grid grid-rows gap-8">
                    <li>
                        <p className='text-gray-700 text-2xl font-bold '>The ultimate atomix starter theme to help <br /> your business grow faster!</p>
                    </li>
                    <li>
                        <button className="uppercase bg-theme-primary p-4 px-6 text-sm bg-theme-button text-white font-semibold">Contact Us</button>
                    </li>
                </ul>
            </div>
        </div>
        //     <Image
        //     src="/images/hero_desktop.png"
        //     alt="Hero Image"
        //     layout="fill"
        //     objectFit="cover"
        //     objectPosition="center"
        //   />
    )
}

export default HeroSection