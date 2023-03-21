import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Recplayer from 'components/Recplayer';
import Header from 'components/Header';
import Kuski from 'components/Kuski';
import Time from 'components/Time';
import Layout from 'components/Layout';
import { Level } from 'components/Names';
import Download from 'components/Download';
import { Paper } from 'components/Paper';
import { ListCell, ListContainer, ListHeader, ListRow } from 'components/List';
import Loading from 'components/Loading';
import config from 'config';

const CupReplays = ({ ReplayIndex, Filename }) => {
  const { replay, replayLoaded, otherReplays } = useStoreState(
    state => state.Replay,
  );
  const { getReplay, getOtherReplays } = useStoreActions(
    actions => actions.Replay,
  );
  const { sideBarVisible } = useStoreState(state => state.Page);
  const { hideSideBar, showSideBar } = useStoreActions(actions => actions.Page);
  const [lastSideBar] = useState(sideBarVisible);

  useEffect(() => {
    hideSideBar();
    return function cleanup() {
      if (lastSideBar) {
        showSideBar();
      }
    };
  }, []);

  useEffect(() => {
    getReplay(ReplayIndex);
  }, [ReplayIndex]);

  useEffect(() => {
    if (replayLoaded) {
      if (replay.CupData) {
        getOtherReplays({
          cupGroupIndex: replay.CupData.CupGroupIndex,
          cupIndex: replay.CupIndex,
        });
      }
    }
  }, [replay, replayLoaded, ReplayIndex]);

  if (!replayLoaded)
    return (
      <Layout edge t={`Cup rec - ${Filename}.rec`}>
        <Loading />
      </Layout>
    );
  if (!replay.CupData)
    return (
      <Layout edge t={`Cup rec - ${Filename}.rec`}>
        <div>Unable to load replay</div>
      </Layout>
    );

  let others = [];
  if (otherReplays.length > 0) {
    if (otherReplays[0].CupTimes.length > 0) {
      others = otherReplays[0].CupTimes.filter(t => t.Replay || t.UUID);
    }
  }
  let recName = '';
  if (replay.KuskiData) {
    recName = Filename.replace(replay.KuskiData.Kuski.substring(0, 6), '');
  }

  return (
    <Layout edge t={`Cup rec - ${Filename}.rec`}>
      <Container>
        <RecBackground>
          <RecContainer>
            <Recplayer
              rec={`${config.dlUrl}cupreplay/${ReplayIndex}/${Filename}`}
              lev={`${config.dlUrl}level/${replay.CupData.LevelIndex}`}
              controls
            />
          </RecContainer>
        </RecBackground>
        <PaperCon>
          <Paper style={{ width: '100%' }}>
            <Info>
              <Half>
                <Header h1>{Filename}.rec</Header>
                <Header h3>
                  <Kuski kuskiData={replay.KuskiData} team flag />
                </Header>
              </Half>
              <Half>
                <Header h1 right>
                  <Download href={`cupreplay/${ReplayIndex}/${Filename}`}>
                    <Time time={replay.Time} />
                  </Download>
                </Header>
                <Header h3 right>
                  <Download href={`level/${replay.CupData.LevelIndex}`}>
                    <Level LevelData={replay.CupData.Level} noLink />
                    .lev
                  </Download>
                </Header>
              </Half>
            </Info>
          </Paper>
        </PaperCon>
        <PaperCon>
          <Left>
            <Paper>
              <ListContainer>
                <ListHeader>
                  <ListCell>Filename</ListCell>
                  <ListCell>Player</ListCell>
                  <ListCell>Time</ListCell>
                </ListHeader>
                {others.length > 0 && (
                  <>
                    {others.map(t => (
                      <ListRow
                        key={t.CupTimeIndex}
                        selected={t.CupTimeIndex === replay.CupTimeIndex}
                      >
                        <ListCell
                          to={`/r/cup/${
                            t.CupTimeIndex
                          }/${`${recName}${t.KuskiData.Kuski.substring(
                            0,
                            6,
                          )}`}`}
                        >
                          {recName}
                          {t.KuskiData.Kuski.substring(0, 6)}
                        </ListCell>
                        <ListCell>
                          <Kuski kuskiData={t.KuskiData} />
                        </ListCell>
                        <ListCell
                          to={`/r/cup/${
                            t.CupTimeIndex
                          }/${`${recName}${t.KuskiData.Kuski.substring(
                            0,
                            6,
                          )}`}`}
                        >
                          <Time apples={-1} time={t.Time} />
                        </ListCell>
                      </ListRow>
                    ))}
                  </>
                )}
              </ListContainer>
            </Paper>
          </Left>
          <Right />
        </PaperCon>
      </Container>
    </Layout>
  );
};

const Left = styled.div`
  flex: 2;
  padding-right: 8px;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 8px;
`;

const Half = styled.div`
  flex: 1;
`;

const PaperCon = styled.div`
  max-width: 1246px;
  width: 100%;
  padding-top: 16px;
  flex-direction: row;
  display: flex;
`;

const Info = styled.div`
  padding: 8px;
  padding-top: 0;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RecContainer = styled.div`
  max-height: 623px;
  max-width: 1246px;
  width: 100%;
  height: 623px;
`;

const RecBackground = styled.div`
  width: 100%;
  height: 623px;
  background-image: linear-gradient(#000000, #192638);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default CupReplays;
