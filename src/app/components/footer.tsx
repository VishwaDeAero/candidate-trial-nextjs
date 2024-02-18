function PageFooter() {
    return (
        <footer className="text-theme-footer bg-theme-primary p-4 py-20">
            <div className="container mx-auto">
                <div className="flex mb-8">
                    <div className="logo">
                        <h1 className="text-xl uppercase font-bold">Company Logo</h1>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <ul className="grid grid-rows-4 gap-4">
                            <li><p className="font-bold">About</p></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">About menu item 1</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">About menu item 2</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">About menu item 3</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="grid grid-rows-4 gap-4">
                            <li><p className="font-bold">Services</p></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">Services menu item 1</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">Services menu item 2</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">Services menu item 3</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="grid grid-rows-4 gap-4">
                            <li><p className="font-bold">Footer link</p></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">Footer menu item 1</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">Footer menu item 2</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="grid grid-rows-4 gap-4">
                            <li><p className="font-bold">Footer link</p></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">Footer menu item 1</a></li>
                            <li><a href="#" className="hover:text-gray-400 text-gray-500">Footer menu item 2</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-12" />
                <div className="flex justify-between items-center">
                    <ul className="flex space-x-8">
                        <li><p>&copy; 2022 Company Inc</p></li>
                        <li><a href="#" className="hover:text-gray-400 text-gray-500">Terms & conditions</a></li>
                        <li><a href="#" className="hover:text-gray-400 text-gray-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-400 text-gray-500">Website by Atomix</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default PageFooter