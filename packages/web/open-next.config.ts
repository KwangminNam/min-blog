
const config = {
  functions: {
    edge: {
      runtime: 'edge',
      placement: 'global',
      routes: ['app/api/og/route'],
      patterns: ['api/og'],
    },
  },
  default: {
    override: {
      wrapper: 'aws-lambda-streaming',
    },
  },
};

export default config;