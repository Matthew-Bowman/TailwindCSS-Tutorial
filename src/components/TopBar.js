const TopBar = ({bg, ug, heading}) => {
    return (
        <div className={`w-full h-12 
                        bg-gray-${bg} 
                        shadow-md shadow-gray-${ug}`}>
            <h2 className="ml-4 mb-2 
                           py-2
                           text-xl text-gray-100">{heading}</h2>
        </div>
    );
}

export default TopBar;