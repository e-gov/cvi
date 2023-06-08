import React, { FC, PropsWithChildren } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import './accordion.scss';

type AccordionProps = {
  singleOpen?: boolean;
  items: {
    title: string;
    body: string;
    disabled?: boolean;
  }[];
};

const AccordionComponent: FC<PropsWithChildren<AccordionProps>> = ({
  singleOpen = true,
  items,
}) => {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type={singleOpen ? 'single' : 'multiple'}
      collapsible
    >
      {items.map((item, index) => (
        <Accordion.Item
          className="AccordionItem"
          value={`item-${index}`}
          disabled={item.disabled ?? false}
        >
          <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger className="AccordionTrigger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="AccordionChevron"
                fill={item.disabled === true ? '#898b97' : '#005aa3'}
              >
                <path
                  d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  className="ng-tns-c78-0"
                ></path>
              </svg>
              {item.title}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={'AccordionContent'}>
            <div className="AccordionContentText">{item.body}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionComponent;
