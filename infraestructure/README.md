# ECS Cluster IaC

This is CDK development with TypeScript for ECS Cluster provisioning.

The `cdk.json` file tells the CDK Toolkit how to execute your app.


## Generate Cloudformation template

Generate Cloudformation template in YAML format.

```
npm run cdk synth > cloudformation.yaml
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
