import React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { colors } from '../../../styles/theme';
import { TabType } from '../../../constants/types';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const defaultStyles = {
  '& .MuiTabs-flexContainer': {
    flexWrap: 'wrap',
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .Mui-selected': {
    color: `${colors.pink} !important`,
    backgroundColor: `${colors.white}`,
    borderRadius: 2,
    border: `2px solid ${colors.pink}`,
  },
};

type CustomTabsProps = {
  tabs: TabType[];
  customStyles?: object;
};

const CustomTabs = ({ tabs, customStyles = {} }: CustomTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
    const chosenTabData = tabs[newValue];
    const currentEventHandler = chosenTabData.clickHandler;
    setValue(newValue);
    currentEventHandler();
  };

  return (
    <Tabs sx={{ ...defaultStyles, ...customStyles }} value={value} onChange={handleChange} aria-label="Menu tabs">
      {tabs.map(({ label }, index) => (
        <Tab
          data-testid="menu-tabs"
          key={label}
          sx={{ textTransform: 'capitalize', color: colors.darkBlue1, border: '2px solid white' }}
          label={label}
          {...a11yProps(index)}
        />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
