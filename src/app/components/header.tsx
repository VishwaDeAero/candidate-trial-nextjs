export default function PageHeader() {
    return (
        <header className="bg-white text-slate-900 p-4 py-8">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <div className="logo">
                        <h1 className="text-xl uppercase font-bold">Company Logo</h1>
                    </div>
                    <ul className="flex space-x-16 font-medium">
                        <li><a href="#" className="hover:text-gray-500">About</a></li>
                        <li><a href="#" className="hover:text-gray-500">Services</a></li>
                        <li><a href="#" className="hover:text-gray-500">FAQs</a></li>
                        <li><a href="#" className="hover:text-gray-500">News</a></li>
                    </ul>
                    <div className="flex">
                        <button className="uppercase bg-theme-secondary p-4 px-6 text-sm">Contact Us</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}