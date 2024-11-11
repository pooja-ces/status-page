import React from 'react';
import ApiStatus from '../components/ApiStatus';

export default {
  title: 'Components/ApiStatus',
  component: ApiStatus,
};

export const Up = () => <ApiStatus name="API 1" status={200} />;
export const Down = () => <ApiStatus name="API 1" status={500} />;
