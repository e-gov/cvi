import React, { PropsWithChildren, useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import TabElement from '../tab-element/tab-element';

const TabGroupComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>('');
  const [tabHeaders, setTabHeaders] = useState<React.ReactElement[]>([]);
  const [tabContents, setTabContents] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const headers: React.ReactElement[] = [];
    const contents: React.ReactElement[] = [];
    React.Children.forEach(children, (child, i) => {
      if (
        React.isValidElement(child) &&
        typeof child.type !== 'string' &&
        child.type.name === TabElement.name
      ) {
        const id = `${child.props.title}-${i}`;
        headers.push(
          <Tabs.Trigger
            key={id}
            className={getTabTriggerClasses(id)}
            value={id}
          >
            {child.props.title}
          </Tabs.Trigger>
        );
        contents.push(
          <Tabs.Content
            key={id}
            className="cvi-tab-group__tab-content"
            value={id}
          >
            {child.props.children}
          </Tabs.Content>
        );
      }
    });
    setTabHeaders(headers);
    setTabContents(contents);
    if (activeTab === '') setActiveTab(headers[0]?.key?.toString() ?? '');
  }, [children, activeTab]);

  const getTabTriggerClasses = (tab: string) =>
    `cvi-tab-group__tab-btn ${activeTab === tab ? 'active' : ''}`;

  return (
    <Tabs.Root
      className="cvi-tab-group"
      value={activeTab}
      onValueChange={(t) => setActiveTab(t)}
    >
      <Tabs.List className="cvi-tab-group__list">{tabHeaders}</Tabs.List>
      {tabContents}
    </Tabs.Root>
  );
};

export default TabGroupComponent;
