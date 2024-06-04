// src/DonationForm.js
import { t } from 'i18next';
import React, { useState } from 'react';

const DonationForm = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Спасибо за ваше пожертвование. $${amount}`);
        setAmount('');
    };

    return (
        <div className="bg-white card2 rounded-md p-8 dark:bg-[#1E293B] dark:bg-opacity-50">
            <h2 className="text-2xl font-[Montserrat-medium] mb-6 text-[#192734] dark:text-white">{t("donate.donationForm.title")}</h2>
            <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                    <span className="block text-[#192734] dark:text-white">{t("donate.donationForm.amountLabel")}</span>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder={t("donate.donationForm.placeholder")}
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="w-full bg-[#e00707] hover:bg-[rgb(255,67,67)] text-white py-2 rounded-md"
                >
                    {t("donate.donationForm.submitButton")}
                </button>
            </form>
        </div>
    );
};

export default DonationForm;
