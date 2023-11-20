#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppStack } from '../lib/app-stack';

const env: cdk.Environment = {
  // account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.REGION
};
// , env

console.log('process.env.CDK_DEFAULT_ACCOUNT', process.env.CDK_DEFAULT_ACCOUNT);

const stackName = 'circleci-dev';

const app = new cdk.App();
new AppStack(app, 'CircleCI_DE', { stackName });