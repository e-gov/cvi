import React, { FC, PropsWithChildren, useState } from 'react';

type ReorderableListProps = {
  items: {
    index: number;
    value: string;
  }[];
};

const ReorderableListComponent: FC<PropsWithChildren<ReorderableListProps>> = ({
  items,
}) => {
  const [itemsList, setItemsList] = useState<
    {
      index: number;
      value: string;
    }[]
  >(items);

  const swapItems = ({ direction = 'next' }, index: number) => {
    const orderedItemsList = [...itemsList];
    const currentValue = orderedItemsList[index].value;
    orderedItemsList[index].value =
      orderedItemsList[direction === 'next' ? index + 1 : index - 1].value;
    orderedItemsList[direction === 'next' ? index + 1 : index - 1].value =
      currentValue;
    setItemsList(orderedItemsList);
  };

  return (
    <div className="cvi-reorderable-list">
      {itemsList.map((item, index) => (
        <div className="cvi-reorderable-list__item">
          <button
            aria-label="Close"
            type="button"
            className="cvi-reorderable-list__remove-button"
            onClick={() => {
              setItemsList([
                ...itemsList.slice(0, index),
                ...itemsList.slice(index + 1),
              ]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="24px"
              className="cvi-reorderable-list__close-icon"
            >
              <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"></path>
            </svg>
          </button>
          <div className="cvi-reorderable-list__ordering-buttons">
            <button
              aria-label="Next"
              className={item.index == items.length - 1 ? 'hidden' : undefined}
              onClick={() => swapItems({ direction: 'next' }, index)}
            >
              <svg
                viewBox="0 0 13 8"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                className="cvi-reorderable-list__order-button-icon"
              >
                <path d="m6.5.295-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6Z"></path>
              </svg>
            </button>

            <div className="cvi-reorderable-list__order-nr">
              {item.index + 1}
            </div>
            <button
              aria-label="Previous"
              className={item.index == 0 ? 'hidden' : undefined}
              onClick={() => swapItems({ direction: 'previous' }, index)}
            >
              <svg
                viewBox="0 0 13 8"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                className="cvi-reorderable-list__order-button-icon"
              >
                <path d="M11.09.295 6.5 4.875 1.91.295.5 1.705l6 6 6-6-1.41-1.41Z"></path>
              </svg>
            </button>
          </div>
          <div className="cvi-reorderable-list__form-item-wrapper">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReorderableListComponent;
