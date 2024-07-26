import React from 'react';

const HowItsWork = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How Does CashMe Tanzania Work?</h2>
            <div className="relative flex flex-col lg:flex-row lg:space-x-8">
                {/* Connector Lines */}
                <div className="absolute inset-y-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 w-full max-w-lg">
                    <div className="h-1 bg-gray-300 w-1/2"></div>
                    <div className="h-1 bg-gray-300 w-1/2"></div>
                    <div className="h-1 bg-gray-300 w-1/2"></div>
                </div>

                {/* Step 1 */}
                <div className="flex flex-col items-center text-center mb-8 lg:mb-0 lg:w-1/4">
                    <div className="relative flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-lg font-bold z-10">1</div>
                        <div className="absolute w-32 h-1 bg-gray-300"></div>
                    </div>
                    <div className="bg-white  p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Sign Up</h3>
                        <p className="text-gray-700">Sign up on the CashMe Tanzania platform and upload essential documents</p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center mb-8 lg:mb-0 lg:w-1/4">
                    <div className="relative flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-lg font-bold z-10">2</div>
                        <div className="absolute w-32 h-1 bg-gray-300"></div>
                    </div>
                    <div className="bg-white  p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Onboarding</h3>
                        <p className="text-gray-700">After document verification, get onboarded on the CashMe Tanzania platform</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center mb-8 lg:mb-0 lg:w-1/4">
                    <div className="relative flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-lg font-bold z-10">3</div>
                        <div className="absolute w-32 h-1 bg-gray-300"></div>
                    </div>
                    <div className="bg-white">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Invoice Listing and Purchasing</h3>
                        <p className="text-gray-700">Upload your invoice, and then CashMe Tanzania accredited investors will purchase that invoice</p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center lg:w-1/4">
                    <div className="relative flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-lg font-bold z-10">4</div>
                    </div>
                    <div className="bg-white">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Cash Disbursement</h3>
                        <p className="text-gray-700">After the purchase process is over, funds will get transferred to your business account in 48 hours</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItsWork;
