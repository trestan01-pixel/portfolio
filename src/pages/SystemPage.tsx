import React from 'react';
// Поднимаемся из pages (..) -> заходим в features -> BpmnMap -> BpmnTool
import BpmnTool from '../features/BpmnMap/BpmnTool'; 

const SystemPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#050810]">
      <BpmnTool />
    </div>
  );
};

export default SystemPage;