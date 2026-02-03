#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import { MultiSelect } from 'siddcn';

const MultiSelectDemo = () => {
  const items = [
    { value: 'docker', label: 'Docker', desc: 'Containerization' },
    { value: 'kubernetes', label: 'Kubernetes', desc: 'Orchestration' },
    { value: 'terraform', label: 'Terraform', desc: 'Infrastructure as code' },
    { value: 'aws', label: 'AWS', desc: 'Cloud platform' },
    { value: 'gcp', label: 'GCP', desc: 'Google Cloud' },
    { value: 'azure', label: 'Azure', desc: 'Microsoft Cloud' },
    { value: 'github', label: 'GitHub Actions', desc: 'CI/CD' },
    { value: 'gitlab', label: 'GitLab CI', desc: 'DevOps platform' },
  ];

  const handleConfirm = (selected: string[]) => {
    console.log('Selected:', selected);
  };

  return (
    <MultiSelect 
      items={items} 
      maxSelect={3}
      onConfirm={handleConfirm}
      showProgress={true}
    />
  );
};

render(<MultiSelectDemo />);
