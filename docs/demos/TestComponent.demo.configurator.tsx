import React from 'react';
import { TestComponent } from 'mantine-query-select';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TestComponent } from 'mantine-query-select';

function Demo() {
  return <TestComponent{{props}} />;
}
`;

function Wrapper(props: any) {
  return <TestComponent {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    { type: 'string', prop: 'label', initialValue: 'test-component', libraryValue: '__' },
  ],
};
