"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Dynamic import for Button component
const Button = dynamic(() => import('./Button'), { ssr: false });

const Hero: React.FC<{ scrollToHowItsWork: () => void }> = React.memo(({ scrollToHowItsWork }) => {
    const [state, setState] = useState({
        isPopupOpen: false,
        invoiceNumber: '',
        amount: '',
        paymentTerm: 30,
        error: '',
    });

    const { isPopupOpen, invoiceNumber, amount, paymentTerm, error } = state;

    const openPopup = useCallback(() => {
        setState(prev => ({ ...prev, isPopupOpen: true }));
    }, []);

    const closePopup = useCallback(() => {
        setState(prev => ({ ...prev, isPopupOpen: false }));
    }, []);

    const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[0-9]*[.,]?[0-9]{0,2}$/;
        if (regex.test(value)) {
            setState(prev => ({ ...prev, amount: value }));
        }
    }, []);

    const amountNumber = useMemo(() => parseFloat(amount.replace(',', '.')) || 0, [amount]);

    useEffect(() => {
        if (amountNumber < 100000 && amountNumber !== 0) {
            setState(prev => ({ ...prev, error: 'Amount should start from 100,000 TZS' }));
        } else {
            setState(prev => ({ ...prev, error: '' }));
        }
    }, [amountNumber]);

    const advanceRate = useMemo(() => {
        switch (paymentTerm) {
            case 30:
                return 0.9;
            case 60:
                return 0.85;
            case 90:
                return 0.8;
            default:
                return 0;
        }
    }, [paymentTerm]);

    const processingFeeRate = 0.0005;
    const processingFee = useMemo(() => {
        let fee = amountNumber * processingFeeRate;
        return fee > 40000 ? fee : 40000;
    }, [amountNumber]);

    const discountAmount = useMemo(() => amountNumber * advanceRate, [amountNumber, advanceRate]);
    const netAmount = useMemo(() => discountAmount - processingFee, [discountAmount, processingFee]);

    return (
        <section className="bg-white pt-24 mt-5 md:pt-32 pb-20">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:text-left">
                <div className="w-full md:flex-1 mt-[-4%] mb-12 md:mb-0">
                    <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                        Exclusive Platform For <span className="text-blue-800">Easily invest</span> and cash your Invoice.
                    </h1>
                    <p className="mt-4 text-gray-600">
                        We are <span className="text-blue-600 font-bold">CashMe Tanzania</span>, an online marketplace for Invoice Discounting.
                        <br />
                        The Platform is owned and operated by Sebuys Company Limited, a Limited Company Incorporated in Tanzania.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                        <Button type="button" title="CashPay" variant="blue-900" />
                        <Button type="button" title="How We Work?" variant="blue-900" onClick={scrollToHowItsWork} />
                    </div>
                </div>
                <div className="w-full md:flex-1 flex justify-center">
                    <div className="relative w-full h-auto p-6 bg-gray-100 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Invoice Discount Calculator</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Invoice number</label>
                                <input
                                    type="text"
                                    className="w-full p-3 bg-white border border-gray-300 rounded text-gray-700"
                                    value={invoiceNumber}
                                    onChange={(e) => setState(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Amount (TZS)</label>
                                <input
                                    type="text"
                                    className="w-full p-3 bg-white border border-gray-300 rounded text-gray-700"
                                    value={amount}
                                    onChange={handleAmountChange}
                                />
                                {error && <p className="text-red-600 mt-2">{error}</p>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Select payment terms</label>
                            <div className="flex space-x-4">
                                {[30, 60, 90].map(term => (
                                    <button
                                        key={term}
                                        className={`p-2 border rounded ${paymentTerm === term ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                                        onClick={() => setState(prev => ({ ...prev, paymentTerm: term }))}
                                    >
                                        Pay in {term} days
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="text-gray-700 mb-2"><strong>Amount Entered:</strong> TZS {amountNumber.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p className="text-gray-700 mb-2"><strong>Discount Amount (Pay in {paymentTerm} days):</strong> TZS {discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p className="text-gray-700 mb-2"><strong>Processing Fee:</strong> TZS {processingFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p className="text-gray-700 mb-2"><strong>Net Amount:</strong> TZS {netAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Hero;
