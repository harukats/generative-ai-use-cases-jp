import React from 'react';
import { BaseProps } from '../@types/common';
import Card from './Card';
import Button from './Button';

type Props = BaseProps & {
  label: string;
  icon: React.ReactNode;
  description: string;
  onClickDemo: () => void;
};

const CardDemo: React.FC<Props> = (props) => {
  return (
    <Card label={props.label} className={`${props.className} flex flex-col hover:scale-105 transition-all cursor-pointer`} onClick={props.onClickDemo}>
      <div className="mb-3 flex h-full flex-col items-center lg:flex-row lg:items-start">
        <div className="mb-4 text-7xl lg:mr-4">{props.icon}</div>
        <div className="text-sm">{props.description}</div>
      </div>
      <div className="flex items-end justify-end">
        <Button onClick={props.onClickDemo}>デモ</Button>
      </div>
    </Card>
  );
};

export default CardDemo;
