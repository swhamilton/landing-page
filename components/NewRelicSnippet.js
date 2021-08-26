import Script from 'next/script';

const NewRelicLoaderConfigInfoSnippet = `
NREUM.loader_config = {
  accountID: ${NR_ACCOUNT_ID},
  trustKey: ${NR_TRUST_KEY},
  agentID: ${NR_AGENT_ID},
  licenseKey: ${NR_LICENSE_KEY},
  applicationID: ${NR_APPLICATION_ID},
};
NREUM.info = {
  beacon: 'bam.nr-data.net',
  errorBeacon: 'bam.nr-data.net',
  licenseKey: ${NR_LICENSE_KEY},
  applicationID: ${NR_APPLICATION_ID},
  sa: 1,
};
`;

const NewRelicSnippet = () => (
  <Script
    dangerouslySetInnerHTML={{
      __html: `${process.env.NR_SCRIPT} ${NewRelicLoaderConfigInfoSnippet}`,
    }}
  />
);

export default NewRelicSnippet;
