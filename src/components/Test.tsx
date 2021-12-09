import { useState } from 'react';
import {
  Select,
  SelectOption,
  SelectOptionObject,
  SelectVariant,
} from '@patternfly/react-core';
import './Test.css';

const Test = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  const options = [
    <SelectOption key={0} value="Select a title" isPlaceholder />,
    <SelectOption key={1} value="Mr" />,
    <SelectOption key={2} value="Miss" />,
    <SelectOption key={3} value="Mrs" />,
    <SelectOption key={4} value="Ms" />,
    <SelectOption key={6} value="Dr" />,
    <SelectOption key={7} value="Other" />,
  ];

  const onToggle = (isOpenParam: boolean) => {
    setIsOpen(isOpenParam);
  };

  const clearSelection = () => {
    setIsOpen(false);
  };

  const onSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | React.ChangeEvent<Element>,
    _selection: string | SelectOptionObject,
    isPlaceholder?: boolean | undefined
  ) => {
    if (isPlaceholder) clearSelection();
    else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Select
        variant={SelectVariant.single}
        onSelect={onSelect}
        onToggle={onToggle}
        isPlain={false}
        isOpen={isOpen}
        width="120px"
      >
        {options}
      </Select>
    </>
  );
};

export default Test;
