import Script from 'next/script';

const NewRelicLoaderConfigInfoSnippet = `
NREUM.loader_config = {
  accountID: '${process.env.NR_ACCOUNT_ID}',
  trustKey: '${process.env.NR_TRUST_KEY}',
  agentID: '${process.env.NR_AGENT_ID}',
  licenseKey: '${process.env.NR_LICENSE_KEY}',
  applicationID: '${process.env.NR_APPLICATION_ID}',
};
NREUM.info = {
  beacon: 'bam.nr-data.net',
  errorBeacon: 'bam.nr-data.net',
  licenseKey: '${process.env.NR_LICENSE_KEY}',
  applicationID: '${process.env.NR_APPLICATION_ID}',
  sa: 1,
};
`;

console.log('NewRelicLoaderConfigInfoSnippet', NewRelicLoaderConfigInfoSnippet);

const NewRelicSnippet = () => (
  <Script
    dangerouslySetInnerHTML={{
      __html: `${process.env.NR_SCRIPT} ${NewRelicLoaderConfigInfoSnippet}`,
    }}
  />
);

export default NewRelicSnippet;
