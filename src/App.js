import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  const [iban, setIban] = useState('');

  const banks = [
    { samaCode: '55', bankName: 'Banque Saudi Fransi', nameEn: 'Banque Saudi Fransi', nameAr: 'البنك السعودي الفرنسي' },
    { samaCode: '80', bankName: 'Alrajhi Bank', nameEn: 'Alrajhi Bank', nameAr: 'بنك الراجحي' },
    { samaCode: '10', bankName: 'National Commercial Bank', nameEn: 'National Commercial Bank', nameAr: 'البنك الأهلي التجاري' },
    { samaCode: '45', bankName: 'Saudi British Bank', nameEn: 'SABB', nameAr: 'ساب' },
    { samaCode: '20', bankName: 'Riyadh Bank', nameEn: 'Riyad Bank', nameAr: 'بنك الرياض' },
    { samaCode: '40', bankName: 'Saudi American Bank', nameEn: 'SAMBA', nameAr: 'سامبا' },
    { samaCode: '05', bankName: 'Alinma Bank', nameEn: 'AL Inma Bank', nameAr: 'بنك الانماء' },
    { samaCode: '50', bankName: 'Alawwal bank', nameEn: 'AlAwwal Bank', nameAr: 'البنك الأول' },
    { samaCode: '60', bankName: 'Bank AlJazira', nameEn: 'Bank Aljazerah', nameAr: 'بنك الجزيرة' },
    { samaCode: '65', bankName: 'Saudi Investment Bank', nameEn: 'Saudi Investment Bank', nameAr: 'البنك السعودي للاستثمار' },
    { samaCode: '15', bankName: 'Bank AlBilad', nameEn: 'BANK ALBELAD', nameAr: 'بنك البلاد' },
    { samaCode: '30', bankName: 'Arab National Bank', nameEn: 'Arab National Bank', nameAr: 'البنك العربي الوطني' },
    { samaCode: '90', bankName: 'GULF Bank', nameEn: 'Gulf International Bank', nameAr: 'بنك الخليج' },
    { samaCode: '95', bankName: 'Emirates Bank', nameEn: 'EMARITE BANK', nameAr: 'بنك الامارات' },
    { samaCode: '76', bankName: 'Bank Muscat', nameEn: 'Bank Muscat', nameAr: 'بنك مسقط' },
    { samaCode: '71', bankName: 'National Bank of Bahrain', nameEn: 'National Bank Of Bahrain', nameAr: 'بنك البحرين الوطني' },
    { samaCode: '75', bankName: 'National Bank of Kuwait', nameEn: 'National Bank of Kuwait', nameAr: 'بنك الكويت الوطني' },
    { samaCode: '85', bankName: 'BNP Paribas Bank', nameEn: 'BNP PARIBAS SAUDI ARABIA', nameAr: 'بي ان بي باريبوس' },
  ];

  const validateIBAN = (iban) => {
    if (!iban) return false;
    iban = iban.trim();
    if (iban.length !== 24) return false;
    if (!iban.startsWith("SA")) return false;
    return true;
  };

  const getBankByIban = () => {
    if (!validateIBAN(iban)) {
      alert('Your IBAN is not correct');
    } else {
      const bankCode = iban.substring(4, 6); 
      const bank = banks.find(b => b.samaCode === bankCode);
      if (bank) {
        alert(`Your IBAN is correct. Bank Name: ${bank.nameAr}`);
      } else {
        alert('Bank not found');
      }
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="iban"
            value={iban}
            onChange={(e) => setIban(e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col">
          <button className="btn btn-success" onClick={getBankByIban}>Check Your IBAN</button>
        </div>
      </div>
    </div>
  );
};

export default App;
