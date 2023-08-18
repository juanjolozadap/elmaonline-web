import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';

const HowToInstall = () => {
  return (
    <Text>
      <Header h2>How to install</Header>
      <Header h3>Buying Elasto Mania</Header>
      <List>
        <li>
          <a
            href="https://store.steampowered.com/about/"
            target="_blank"
            rel="noreferrer"
          >
            Install steam
          </a>
        </li>
        <li>
          <a
            href="https://store.steampowered.com/app/1290220/Elasto_Mania_Remastered/"
            target="_blank"
            rel="noreferrer"
          >
            Buy Elasto Mania on steam
          </a>
        </li>
        <li>Install Elasto Mania through your steam client</li>
      </List>
      <Header h3>Upgrading to Elma Online</Header>
      <List>
        <li>
          <a
            href="https://steamcommunity.com/workshop/filedetails/?id=2094059600"
            target="_blank"
            rel="noreferrer"
          >
            Install the Elma Online mod on steam workshop by clicking subscribe
          </a>
        </li>
        <li>Let steam download the upgrade</li>
      </List>
      <Header h2>Troubleshooting</Header>
      <Header h3>Disable Windows Defender</Header>
      <List>
        <li>
          <a
            href="https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960"
            target="_blank"
            rel="noreferrer"
          >
            Disable Windows Defender before downloading the Elma Online mod
          </a>
        </li>
        <li>Download Elma Online mod again</li>
        <li>Install Elma Online mod again</li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26#:~:text=Go%20to%20Start%20%3E%20Settings%20%3E%20Update,%2C%20file%20types%2C%20or%20process."
            target="_blank"
            rel="noreferrer"
          >
            Add the entire EOL folder to Exclusions in Windows Defender
          </a>
        </li>
        <li>Now you can turn Windows Defender on again safely</li>
      </List>
      <Header h3>Make sure your Graphic Drivers are installed correctly</Header>
      <List>
        <li>
          <a
            href="https://www.wagnardsoft.com/display-driver-uninstaller-DDU-"
            target="_blank"
            rel="noreferrer"
          >
            Uninstall all previous Graphic Drivers using this utility (Device Driver Uninstaller: "DDU")
          </a>
        </li>
        <li>Make sure you use this utility in Safe Mode</li>
        <li>
          Uninstall previous drivers in Safe Mode, checking the Advanced Option 'Prevent downloads of drivers from "Windows update" when "Windows" search for a driver for a device'
        </li>
        <li>Boot your computer back up in Normal mode</li>
        <li>Search for the latest Graphic Driver for your specific Graphics Card in your card manufacturers' site</li>
        <li>Install this driver with Administrator Privilege and Reboot your PC after it's done</li>
      </List>
      <Header h3>Install all Windows Redistributables in order from oldest to newest (year)</Header>
      <List>
        <li>
          <a
            href="https://www.revouninstaller.com/es/revo-uninstaller-free-download/"
            target="_blank"
            rel="noreferrer"
          >
            We recommend you uninstall all previous Microsoft Windows Redistributables you may have using this free tool (Revo Uninstaller)
          </a>
        </li>
        <li>
          <a
            href="https://www.itechtics.com/microsoft-visual-c-redistributable-versions-direct-download-links/?expand_article=1"
            target="_blank"
            rel="noreferrer"
          >
            Download and install all of these both in their "x86" and "x64" variants
          </a>
        </li>
        <li>Reboot your PC after each one of these is installed</li>
        <li>
          <a
            href="https://www.ccleaner.com/ccleaner/download?ppc_code=012&ppc=a&gclsrc=aw.ds&gclid=CjwKCAjwivemBhBhEiwAJxNWN3vegRq4V9hvngd4TYOlRB-pGbYQ1Dij3AINTSIfqC4bPC9dUMJoZBoCOioQAvD_BwE"
            target="_blank"
            rel="noreferrer"
          >
            Use this free tool to clean up your registry
          </a>
        </li>
        <li>Scan registry - Fix All Issues - Reboot one last time</li>
      </List>
      <Header h3>Steam Elma DDRAW</Header>
      <List>
        <a
          href="https://docs.google.com/uc?authuser=0&id=0B1HOSlW-Ci3UZXJvVmFWSnVMUjg&export=download"
          target="_blank"
          rel="noreferrer"
        >
          Download this ddraw.dll
        </a>
        <li>You may need to disable your web browser's Security in order to do so</li>
        <li>Once you have it, extract it into Elma Online folder</li>
        <li>Click on 'Replace previous versions' if you're prompted with a warning</li>
      </List>
      <Header h3>Issues</Header>
      If you still run into issues you can ask someone in{' '}
      <a href="https://discord.gg/j5WMFC6" target="_blank" rel="noreferrer">
        discord
      </a>{' '}
      who'll usually have a solution. Tag @eolmod for a faster response.
    </Text>
  );
};

const Text = styled.div`
  padding-left: 8px;
  max-width: 900px;
`;

const List = styled.ol`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export default HowToInstall;
