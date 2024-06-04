const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-[#1E293B] dark:bg-opacity-50">
            <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-500 text-white p-4 rounded-full">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center dark:text-white">{title}</h3>
            <p className="text-gray-700 text-center dark:text-white">{description}</p>
        </div>
    );
};

export default FeatureCard;