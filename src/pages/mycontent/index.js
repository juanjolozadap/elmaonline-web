import React from 'react';
import Layout, { Content } from 'components/Layout';
import { Tabs, Tab } from '@material-ui/core';
import { useNavigate } from '@reach/router';
import TimesReplays from './TimesReplays';

const MyContent = ({ tab }) => {
  const navigate = useNavigate();

  return (
    <Layout edge t="My Content">
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={tab}
        onChange={(e, value) => {
          navigate(['/mycontent', value].filter(Boolean).join('/'));
        }}
      >
        <Tab label="Times & Replays" value="" />
        <Tab label="Uploaded Replays" value="replays" />
        <Tab label="Uploaded Files" value="files" />
      </Tabs>
      <Content>{!tab && <TimesReplays />}</Content>
    </Layout>
  );
};

export default MyContent;