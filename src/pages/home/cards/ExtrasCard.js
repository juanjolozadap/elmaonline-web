import React from 'react';
import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent';
import { Tabs, Tab } from '@material-ui/core';
import { Install } from 'components/Welcome';
import Links from 'pages/help/tabs/Links';
import Programs from 'pages/help/tabs/Programs';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Card, Cross } from '../';

export default function ExtrasCard() {
  const {
    extras: { setExtrasTab },
    cards: { setHidden },
  } = useStoreActions(actions => actions.Page);
  const {
    extras: { extrasTab },
  } = useStoreState(state => state.Page);
  return (
    <Card>
      <span title="Hide section">
        <Cross onClick={() => setHidden('extras')} />
      </span>
      <CardContent>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={extrasTab}
          onChange={(e, value) => {
            setExtrasTab(value);
          }}
        >
          <Tab label="Install" value="install" />
          <Tab label="Links" value="links" />
          <Tab label="Programs" value="programs" />
        </Tabs>
        {extrasTab === 'install' && (
          <Con>
            <Install />
          </Con>
        )}
        {extrasTab === 'links' && (
          <Con>
            <Links hideHeader />
          </Con>
        )}
        {extrasTab === 'programs' && (
          <ProgramsCon>
            <Programs hideHeader />
          </ProgramsCon>
        )}
      </CardContent>
    </Card>
  );
}

const Con = styled.div`
  padding-top: ${p => p.theme.padMedium};
`;

const ProgramsCon = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;
