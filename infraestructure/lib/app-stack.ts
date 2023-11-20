import * as cdk from 'aws-cdk-lib';
import { DefaultInstanceTenancy, IpAddresses, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Repository } from 'aws-cdk-lib/aws-ecr';
import { AwsLogDriver, Cluster, ContainerImage, LogDriver } from 'aws-cdk-lib/aws-ecs';
import { NetworkLoadBalancedFargateService } from 'aws-cdk-lib/aws-ecs-patterns';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';


const createContainerLogger = (scope: Construct, serviceName: string): LogDriver => {
  const logGroup = new LogGroup(scope, `/ecs/${serviceName}`, {
      logGroupName: `/ecs/${serviceName}`,
      retention: RetentionDays.THREE_DAYS
  });
  const logDriver = new AwsLogDriver({
      streamPrefix: `ecs`,
      logGroup: logGroup,
  });
  return logDriver;
}

export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, "vpc", {
      ipAddresses: IpAddresses.cidr('172.30.0.0/16'),

      defaultInstanceTenancy: DefaultInstanceTenancy.DEFAULT,
      maxAzs: 2,
      natGateways: 0,
    });

    const repository = new Repository(this, `${this.stackName}-backend`, {
      repositoryName: `${this.stackName}-backend`,
      imageScanOnPush: false
    });

    const cluster = new Cluster(this, `${this.stackName}-services`, {
      clusterName: `${this.stackName}-services`,
      vpc,
    });

    const service = new NetworkLoadBalancedFargateService(this, `${this.stackName}-service`, {
      cluster: cluster,
      serviceName: `${this.stackName}-nlb`,
      cpu: 256,
      desiredCount: 1,
      taskImageOptions: {
        family: 'app',
        image: ContainerImage.fromEcrRepository(repository, 'latest'),
        containerPort: 8000,
        environment: {
          'PORT': '8000',
        },
        logDriver: createContainerLogger(this, `${this.stackName}-services`),
      },
      memoryLimitMiB: 512,
      publicLoadBalancer: true,
    });    

  }
}
