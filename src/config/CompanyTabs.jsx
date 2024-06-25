"use client"

import { useState } from 'react';
import Image from 'next/image';

import { ExperiencesList } from './ExperienceList'; 

export default function CompanyTabs() {
  const [selectedCompany, setSelectedCompany] = useState(ExperiencesList[0]);

  const handleTabClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 p-4">
        {ExperiencesList.map((company) => (
          <div
            key={company.name}
            className={`p-2 cursor-pointer ${selectedCompany.name === company.name ? 'bg-gray-300' : ''}`}
            onClick={() => handleTabClick(company)}
          >
            <div className="flex items-center">
              <Image src={company.logo} alt={company.name} width={30} height={30} className="mr-2" />
              {company.name}
            </div>
          </div>
        ))}
      </div>

      {/* Tab Details */}
      <div className="w-3/4 p-4">
        <h2 className="text-xl font-bold">{selectedCompany.longName}</h2>
        <p className="text-gray-600 mb-2">{selectedCompany.position}</p>
        <p className="text-gray-600 mb-2">{selectedCompany.duration}</p>
        <p className="mb-4">{selectedCompany.subDetail}</p>
        {selectedCompany.roles && (
          <ul className="list-disc ml-6">
            {selectedCompany.roles.map((role, index) => (
              <li key={index} className="mb-2">{role}</li>
            ))}
          </ul>
        )}
        <a href={selectedCompany.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Visit Company Website
        </a>
      </div>
    </div>
  );
}
