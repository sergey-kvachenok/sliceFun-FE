import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { colors } from '../../../styles/theme';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CustomTabs = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    const chosenTabData = data[newValue];
    const currentEventHandler = chosenTabData.clickHandler;
    setValue(newValue);
    currentEventHandler();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Specific episode control tabs">
          {data.map(({ label }, index) => (
            <Tab sx={{ textTransform: 'capitalize', color: colors.darkBlue1 }} label={label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default CustomTabs;
