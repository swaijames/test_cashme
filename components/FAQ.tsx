// components/FAQ.tsx
"use client"
import React, { useState } from 'react';
import Button from './Button';
import Link from 'next/link';

const faqData = {
  faq: [
    {
      q: "Eligible Owing Company ?",
      a: `Eligible companies include government regulatory authorities, DSE listed companies and embassies, and other companies approved by CashMe Tanzania.`
    },
    {
      q: "Who can invest with CashMe Tanzania?",
      a: `
        <ul class="list-disc pl-5">
          <li>Individual resident investors</li>
          <li>Proprietorship registered in Tanzania</li>
          <li>Institutional investors/Saccos</li>
          <li>Banks, NBFCs and other Financial Institutions</li>
        </ul>
      `
    },
    {
      q: "What is Invoice Discounting ?",
      a: `Invoice discounting is the practice of using a company's unpaid invoices to raise working capital & fulfil its financial needs.
Traditionally, financial institutions including banks have been discounting invoices for businesses.
Invoice discounting involves transfer of rights on an asset (invoice) from the seller (i.e. business) to the financier (i.e. investor) at an agreed value.`
    },
    {
      q: "How does it work ?",
      a: `
        <div class="content" style="display: block; height: 270px;">
            <p>
                CashMe Tanzania provides a marketplace/platform for business owners to sell and investors to purchase invoices raised on blue-chip companies. Investors looking to invest money for a short term (30-90 days on average) can earn attractive returns on their investment by purchasing these future cash flows. 
            </p>
            <p>
                Register yourself with us on our website as an investor and we will help you diversify your portfolio in this unique asset class with varying maturity periods of 30 to 90 days at an attractive risk-adjusted rate.
            </p>
        </div>
      `
    },
    {
      q: "Is there a minimum amount for investment ?",
      a: `
        <p>
          As of now, you can invest a minimum of TZS50,000.00 per invoice. You can choose different investment plans as explained under Investor Guide. You can download the investor guide on this link Investor Guide.
        </p>
      `
    },
    {
      q: "How can I become a member of CashMe Tanzania ?",
      a: `
        <p>
            Signing up on CashMe Tanzania is very simple. Click join as borrower or investor buttons on the home page and you will provide basic personal information including your contact details. Our relationship managers will contact you to complete the registration process. As a part of our KYC norms, we will need a small set of documents to ascertain your investor's status. Once those documents are received and vetted, you will receive an email from us notifying you of your account post successful onboarding.
        </p>
      `
    },
    {
      q: "What kind of returns can I expect as an investor on the CashMe Tanzania ?",
      a: `
        <p>
            CashMe Tanzania offers two trading options; (i) That offer a predetermined discounting fee which ranges between 4% to 8% per month and (ii) the one in which investors can fix their price and the borrower will be able to choose the suitable deal and reject the rest. In this second option, an investor will know how much he or she will earn after the borrower accepted the deal.
        </p>
      `
    },
    {
      q: "Does CashMe Tanzania guarantee my returns ?",
      a: `
        <div class="content" style="display: block; height: 480px;">
            <p>
                CashMe Tanzania provides a technology platform to connect sellers of invoices and investors and execute transactions between them.  We analyse the credit standing of both invoice sellers and owing companies using audited accounts, readily available public reports or information, repayment history on the platform (Invoice seller), enterprise report, and international rating agencies (Fitch, Moody’s and S&P) report (blue-chip company) among others before onboarding and allowing the seller to post the invoice. This is done periodically to minimize credit risk to our investors. We also provide this information to investors, if requested.
            </p>
            <p>
                CashMe Tanzania does not guarantee any fixed return to its investors and the investment would be subject to the traditional market risk associated with invoice discounting. However, in the event of default, CashMe Tanzania will exercise the rights in the invoice discounting agreement signed by the borrower to collect the debt as much as possible to repay investors. 
            </p>
        </div>
      `
    },
    {
      q: "What is the tenure of investment ?",
      a: `
        <p>Tenure of the investment is linked to the invoice payment date. Every invoice will have a different maturity period. We have seen that historically it has ranged from 30 days to 90 days.</p>
      `
    },
    {
      q: "Why should I invest through CashMe Tanzania ?",
      a: `
        <p>Invoice Financing is a very niche product in the asset-based financing arena. It carries minimal undue risk while generating a good return on your investments. In advanced economies, it has emerged as a major form of investment. CashMe Tanzania Invoice Financing platform ensures a higher short-term yield for its investors. We are applying conservative and ever-evolving risk management policies to minimize the risk of investing for our investors.</p>
      `
    },
    {
      q: "Will my financial information be shared with other third parties ?",
      a: `
        <p>Your data will be protected as per Bank of Tanzania (Financial Consumer Protection) regulation 2019.</p>
      `
    },
    {
      q: "What happens in case the invoice is not paid by the company ?",
      a: `
        <p>
            We have established a due diligence process in place backed by manual verification of the parties. We are also very selective in choosing the people with whom we do business.
            The borrowers are obliged legally to pay back the amount owed to the investors irrespective of whether the invoice is paid by their customer. In the remote case of a default by the customer, we will facilitate legal help for them and will help in recovering the loss. We have also tied up with various collection agencies to recover the amount due from the business in case of default.
        </p>
      `
    },
    {
      q: "What is the risk involved?",
      a: `
        <div class="content" style="display: block; height: 540px;">
            <p>Any investment comes with its own associated risk. The risk could be total or part capital erosion. However, we have taken several steps to mitigate the risk – both strategically and operationally:</p>
            <ul>
                <li>Comprehensive risk management framework – Detailed credit analysis of sellers and their financials at onboarding</li>
                <li>Invoice verification process- Invoices are verified physically and vetted by the owing company. Moreover, invoices are restricted to only blue-chip companies.</li>
                <li>Strong legal framework – All sellers are required to sign our legal agreements to ensure our investors are well protected.</li>
                <li>If a blue-chip company does not pay the invoice money in the future – the small business is still liable to pay the money owed to the investor.</li>
                <li>If the small business collapses, the blue-chip company would still pay the invoice money, and this will be paid directly into the escrow account which will be transferred to the investor.</li>
                <li>CashMe Tanzania is a tech platform, and it does not assume any credit risk on behalf of the investors.</li>
            </ul>
        </div>
      `
    },
    {
      q: "What is the risk mitigation process at CashMe Tanzania ?",
      a: `
        <div class="content" style="display: block; height: 480px;">
            <p>Our business model is one where investors do not face any execution risk. Our credit risk analysis system takes place at multiple stages.</p>
            <p>Business-Onboarding Stage We follow a three-pronged approach that is dependent upon the business, the enterprise, and their relationship to arrive at a CashMe Tanzania Credit Score for every business. We look at, among other:</p>
            <ul>
                <li>Credit credentials (Credit reports of company and individual reports of directors)</li>
                <li>Financial Health & Stability (All financial and company documentation)</li>
                <li>Credit Rating of Enterprise</li>
                <li>Fundraising Ability</li>
                <li>Liquidity</li>
                <li>Market News</li>
                <li>Verification of every invoice before listing on the platform</li>
            </ul>
        </div>
      `
    },
    {
      q: "What happens if CashMe Tanzania goes out of business ?",
      a: `
        <p>
            CashMe Tanzania operates an Escrow account for a group of investors at our partner Bank and the opening of an escrow account for each individual member. All transfer of funds happens through these escrow accounts. In case of liquidation of CashMe Tanzania due to any legal or financial reasons, money in a member's escrow account will be returned to the respective owners immediately. Money involved in the process will not be transferred to CashMe Tanzania's account at any stage (except service fees and government taxes, etc.)
        </p>
      `
    }
  ],
  docs: [
    {
      q: "Documents required for Registration for Invoice seller For Companies",
      a: `
        <div class="content" style="display: block; height: 450px;">
            <p>(i) List of authorised signatories,</p>
            <p>(ii) For a Company, a stamped board resolution to borrow from CashMe Tanzania platform,</p>
            <p>(iii) Copies of Licenses, Certificate of incorporation (for Companies), Annual Tax Return or Tax compliance certificate, Annual Company return (for companies), Audited Financials for the last 2 or three years (not compulsory but affect credit rating and pricing).</p>
            <p>(iv) Copy of Identity cards of shareholders owning more than 10% of shareholding of the companies. Acceptable Identity are National IDs, Driving license or Passport.</p>
            <p>(v) Copy of Identity cards of two (2) or more directors. Acceptable Identity are National IDs, Driving license or Passport.</p>
            <p>(vi) Tax Identification Certificate,</p>
            <p>(vii) 6 months Bank statements,</p>
            <p>(viii) Memarts</p>
        </div>
      `
    },
    {
      q: "Documents required for Registration for Invoice seller For Sole Proprietor",
      a: `
        <div class="content" style="display: block; height: 300px;">
            <p>(i) List of authorised signatories,</p>
            <p>(ii) Stamped application letter to borrow from CashMe Tanzania Platform,</p>
            <p>(iii) Copies of licenses, Business registration certificate (for sole proprietor), Annual Tax Return or Tax compliance certificate, Audited Financials for the last 2 or three years (not compulsory but affect credit rating).</p>
            <p>(iv) Copy of Identity cards of the owner. Acceptable Identity are National IDs, Driving license or Passport.</p>
            <p>(v) 6-months Bank statement</p>
        </div>
      `
    },
    {
      q: "Documents required for Registration for Invoice seller For a Corporate Investor",
      a: `
        <div class="content" style="display: block; height: 330px;">
            <p>(i) Board resolution to invest in invoices traded on CashMe Tanzania platform,</p>
            <p>(ii) List Authorized Signatories,</p>
            <p>(iii) Copy of Identity cards of shareholders owning more than 10% of the shareholdings. Acceptable Identity are National IDs, Driving license or Passport.</p>
            <p>(iv) Copy of Identity cards of 2 directors. Acceptable Identity are National IDs, Driving license or Passport.</p>
            <p>(v) Certificate of incorporation,</p>
            <p>(vi) Business Licence,</p>
            <p>(vii) Annual Tax Returns,</p>
            <p>(viii) Annual Company Returns</p>
        </div>
      `
    },
    {
      q: "Documents required for Registration for Invoice seller For Retail Investor",
      a: `
        <div class="content" style="display: block; height: 60px;">
            <p>(i) Copy of Identity cards of the owner. Acceptable Identity are National IDs, Driving license or Passport</p>
        </div>
      `
    }
  ]
};


const FAQComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 sm:p-10 lg:p-14">
      <div className="w-full items-center h-full py-6 sm:py-14 border-b border-gray-200">
        <div className="flex justify-between items-center px-6 sm:px-8 max-w-screen-xl mx-auto">
          <div>
            <h3 className="text-xl lg:text-4xl text-gray-800">Questions & Answers</h3>
            <p className="text-gray-600">Do you have any questions?</p>
          </div>
          <div className="flex gap-2">
            <a href="/" className="hover:text-blue-500 cursor-pointer font-medium text-gray-700">HOME</a>
            <span>/</span>
            <a href="/faq" className="text-blue-500 font-medium hover:text-gray-700">FAQ</a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl py-4 rounded-lg mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="md:grid gap-12 grid-cols-3 w-full py-4">
          <div className="col-span-2">
            <div className="pb-4 mb-6 space-y-4">
              <h3 className="font-bold text-xl md:text-2xl text-gray-800">Documents</h3>
              <div className="bg-white shadow-md rounded-md">
                {faqData.docs.map(({ q, a }, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      className="w-full text-left p-4 font-medium text-lg text-gray-800 bg-gray-100 hover:bg-gray-200"
                      onClick={() => handleToggle(index)}
                    >
                      {q}
                    </button>
                    {openIndex === index && (
                      <div className="p-4 bg-white">
                        <div className="prose prose-lg lg:prose-xl text-gray-700" dangerouslySetInnerHTML={{ __html: a }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="py-4 space-y-4">
              <h3 className="font-bold text-xl md:text-2xl text-gray-800">FAQ</h3>
              <div className="bg-white shadow-md rounded-md">
                {faqData.faq.map(({ q, a }, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      className="w-full text-left p-4 font-medium text-lg text-gray-800 bg-gray-100 hover:bg-gray-200"
                      onClick={() => handleToggle(index + faqData.docs.length)}
                    >
                      {q}
                    </button>
                    {openIndex === index + faqData.docs.length && (
                      <div className="p-4 bg-white">
                        <div className="prose prose-lg lg:prose-xl text-gray-700" dangerouslySetInnerHTML={{ __html: a }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={"space-y-12"}>
            <div className={"gap-4 py-4 space-y-6"}>
              <h3 className={"font-bold text-xl md:text-2xl  text-gray-800" }>SUPPORT</h3>
              <h4 className={"font-medium text-lg  text-gray-800"}>Request Support</h4>
              <p className={"font-medium  text-gray-800"}>
                Contact our support team who are ready to serve you 24/7
              </p>
              <Button type='button' variant='primary'>
                <Link href={"/#contact"}>
                  CONTACT PAGE
                </Link>
              </Button>
            </div>

            <div className={"space-y-6"}>
              {data.contacts.map(({ title, value }, index) => (
                <div className={"grid grid-cols-3 gap-4 items-start"} key={index}>
                  <span className={"font-medium  text-gray-800" }>{title}:</span>
                  <span className={"prose prose-sm col-span-2  text-gray-800"} dangerouslySetInnerHTML={{ __html: value }}></span>
                </div>
              ))}
            </div>

            <div className={"flex w-full mb-8 -mx-2"}>
              {data.socials.map(({ icon, link, title }, index) => (
                <Link href={link} key={index}>
                  <div className="mx-2 bg-white-500 cursor-pointer rounded-full items-center justify-center flex p-2 shadow-md">
                    <div dangerouslySetInnerHTML={{ __html: icon }} className="h-6 flex justify-center items-center w-6" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;


const data = {
  contacts: [
    {
      title: "Address", value: `
          Salamander Tower, Samora Ave, Dar es salaam, 4th Floor
      `
    },
    {
      title: "Email", value: `
          info@cashmetanzania.com
      `
    },
    {
      title: "Phone", value: `
          <a href="tel:++255713560288" class="no-underline">+255713560288</a>
      `
    },
  ],
  socials: [
    {
      title: "facebook",
      icon: `
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
    `,
      link: `https://m.facebook.com/cashmeinvoice`,
    },
    {
      title: "instagram",
      icon: `
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          `,
      link: `https://instagram.com/cashmetanzania?igshid=MzRlODBiNWFlZA==`
    },
    {
      title: "twitter",
      icon: `
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
    `,
      link: `https://x.com/cashmetanzania?s=11&t=ijOeoNdNm2xf4UspeDztbw`,
    },
    {
      title: "linkedIn",
      icon: `
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
      `,
      link: `https://www.linkedin.com/company/cashmetanzania/`,
    },
  ],
}