import { Helmet } from "react-helmet-async";
import data from "./data.json";

interface Detail {
  name: string;
  description: string;
  features: string[];
  website?: string; // optional property
}

interface Company {
  title: string;
  details: Detail[];
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-r ">
      <div className="container mx-auto py-12">
        <Helmet>
          <title>Projects</title>
          <meta name="Projects" content="Projects" />
          <link rel="canonical" href="/About" />
        </Helmet>

        <div className="flex flex-col items-center justify-center py-5">
            <h1 className="playfair-display text-xl md:text-2xl lg:text-3xl font-bold py-2">Company Solutions</h1>
            <div className="w-14 h-1 bg-[#BCDBFF] rounded-full" />
          </div>
        {(data as Company[]).map((company, companyIndex) => (
          <div
            key={companyIndex}
            className="bg-white rounded-xl shadow-lg mx-4 mb-8 overflow-hidden"
          >
            <div className="px-6 py-4 mb-2">
             <div className="flex-row flex items-center ">  <div className="w-10 h-1 rotate-90 bg-[#222] rounded-full" />
              <h2 className="text-2xl open-sanss font-semibold text-black ">
                {company.title}
              </h2></div>
            </div>
            {company.details.map((detail, detailIndex) => (
              <div
                key={detailIndex}
                className="px-6 py-4 border-t border-gray-200"
              >
                <h3 className="text-xl open-sanss font-semibold  mb-2">
                  {detail.name}
                </h3>
                {detail.website && (
                  <p className="open-sans text-blue-500 mb-2">
                    <a
                      href={`https://${detail.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      
                    >
                      {detail.website}
                    </a>
                  </p>
                )}
                <p className=" open-sans mb-4">{detail.description}</p>
                <h4 className="text-lg font-medium open-sans  mb-2">
                  Features:
                </h4>
                <ul className="list-disc list-inside space-y-1 open-sans ">
                  {detail.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}