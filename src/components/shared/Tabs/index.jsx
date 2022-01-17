import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { colors } from '../../../styles/theme';

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const CustomTabs = ({ tabs, customStyles = {} }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    const chosenTabData = tabs[newValue];
    const currentEventHandler = chosenTabData.clickHandler;
    setValue(newValue);
    currentEventHandler();
  };

  return (
    <Tabs sx={{ ...customStyles }} value={value} onChange={handleChange} aria-label="Menu tabs">
      {tabs.map(({ label }, index) => (
        <Tab
          key={label}
          sx={{ textTransform: 'capitalize', color: colors.darkBlue1 }}
          label={label}
          {...a11yProps(index)}
        />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
