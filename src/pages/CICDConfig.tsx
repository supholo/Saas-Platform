import React, { useState } from 'react';

const CICDConfig = () => {
  const [selectedOption, setSelectedOption] = useState('jenkins');

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">CI/CD Configuration</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Select CI/CD Option</h2>
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${
              selectedOption === 'jenkins' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedOption('jenkins')}
          >
            Jenkins with Groovy
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              selectedOption === 'azure' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedOption('azure')}
          >
            Azure DevOps
          </button>
        </div>
        {selectedOption === 'jenkins' && <JenkinsConfig />}
        {selectedOption === 'azure' && <AzureDevOpsConfig />}
      </div>
    </div>
  );
};

const JenkinsConfig = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Jenkins Configuration</h3>
      <textarea
        className="w-full h-64 p-2 border rounded-md"
        placeholder="Enter your Jenkinsfile Groovy script here..."
      ></textarea>
    </div>
  );
};

const AzureDevOpsConfig = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Azure DevOps Configuration</h3>
      <textarea
        className="w-full h-64 p-2 border rounded-md"
        placeholder="Enter your Azure DevOps pipeline YAML here..."
      ></textarea>
    </div>
  );
};

export default CICDConfig;