const config = {
    s3: {
      REGION: "sa-east-1",
      BUCKET: "post-it-dev-serverlessdeploymentbucket-wwn8n1t5lex7",
    },
    apiGateway: {
      REGION: "sa-east-1",
      URL: "https://l1fvavpcr3.execute-api.sa-east-1.amazonaws.com/dev",
    },
    cognito: {
      REGION: "sa-east-1",
      USER_POOL_ID: "sa-east-1_3hcJoVSMm",
      APP_CLIENT_ID: "42mr999ii9obgmvndcgp1lbkn9",
      IDENTITY_POOL_ID: "sa-east-1:bd78f9fb-25a3-4c82-84e4-da87c39c6a3b",
    },
  };
  
  export default config;