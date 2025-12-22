import React from 'react';
import { CodeBlock } from './CodeBlock';
import { ColorPaletteRenderer, LiveButtonPreview, DoDontExample } from './LiveComponents';
import { ChaosAuditDemo } from './ChaosAuditDemo';
import { BpmnFlowDemo } from './BpmnFlowDemo';
import { ProjectMap } from './ProjectMap';
import { LandingPreview } from './LandingPreview';
import { ChaosCalculatorDemo } from './ChaosCalculatorDemo';
import { RoadmapBoard } from './RoadmapBoard';
import { CodeReference } from './CodeReference';
import { MasterChangelogPage } from './MasterChangelogPage';

export const ContentRenderer = ({ htmlContent }: { htmlContent: string }) => {
  
  const renderPlaceholder = (key: string) => {
    switch (key) {
      case '<[COLOR_PALETTE]>': return <ColorPaletteRenderer />;
      case '<[LIVE_BUTTON_PREVIEW]>': return <LiveButtonPreview />;
      case '<[DO_DONT_EXAMPLE]>': return <DoDontExample />;
      case '<[CHAOS_AUDIT_DEMO]>': return <ChaosAuditDemo />;
      case '<[BPMN_FLOW_DEMO]>': return <BpmnFlowDemo />;
      case '<[PROJECT_MAP]>': return <ProjectMap />;
      case '<[LANDING_PREVIEW]>': return <LandingPreview />;
      case '<[CHAOS_CALCULATOR_NEW]>': return <ChaosCalculatorDemo />;
      case '<[ROADMAP_BOARD]>': return <RoadmapBoard />;
      case '<[CODE_REFERENCE_TABS]>': return <CodeReference />;
      case '<[MASTER_CHANGELOG_PAGE]>': return <MasterChangelogPage />;
      default: return null;
    }
  };

  const codeParts = htmlContent.split(/(<pre><code.*?>[\s\S]*?<\/code><\/pre>)/g);

  return (
    <div className="space-y-6 text-gray-300 font-inter leading-relaxed text-lg">
      {codeParts.map((part, index) => {
        if (part.startsWith('<pre><code')) {
          const langMatch = part.match(/class="language-(.*?)"/); const language = langMatch ? langMatch[1] : 'text';
          const codeMatch = part.match(/<code.*?>([\s\S]*?)<\/code>/); const code = codeMatch ? codeMatch[1] : '';
          const decodedCode = code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
          return <CodeBlock key={index} code={decodedCode} language={language} />;
        } else {
          const componentParts = part.split(/(<\[.*?\]>)/g).filter(p => p);
          return (
            <React.Fragment key={index}>
              {componentParts.map((subPart, subIndex) => {
                if (subPart.startsWith('<[')) {
                  return <div key={`${index}-${subIndex}`}>{renderPlaceholder(subPart)}</div>;
                } else {
                  if (!subPart.trim()) return null;
                  return <div key={`${index}-${subIndex}`} dangerouslySetInnerHTML={{ __html: subPart }} />;
                }
              })}
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};