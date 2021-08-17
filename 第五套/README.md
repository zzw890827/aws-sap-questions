# AWS SAP 401-500

1. A company wants to refactor its retail ordering web application that currently has a load-balanced Amazon EC2 instance fleet for web hosting, database API services, and business logic. The company needs to create a decoupled, scalable architecture with a mechanism for retaining failed orders while also minimizing operational costs. Which solution will meet these requirements?
   - [ ] A. Use Amazon S3 for web hosting with Amazon API Gateway for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use Amazon Elastic Container Service (Amazon ECS) for business logic with Amazon SQS long polling for retaining failed orders.
   - [ ] B. Use AWS Elastic Beanstalk for web hosting with Amazon API Gateway for database API services. Use Amazon MQ for order queuing. Use AWS Step Functions for business logic with Amazon S3 Glacier Deep Archive for retaining failed orders.
   - [ ] C. Use Amazon S3 for web hosting with AWS AppSync for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use AWS Lambda for business logic with an Amazon SQS dead-letter queue for retaining failed orders.
   - [ ] D. Use Amazon Lightsail for web hosting with AWS AppSync for database API services. Use Amazon Simple Email Service (Amazon SES) for order queuing. Use Amazon Elastic Kubernetes Service (Amazon EKS) for business logic with Amazon Elasticsearch Service (Amazon ES) for retaining failed orders.

   <details>
      <summary>Answer</summary>

      DLQ是重点，答案C。

   </details>

2. A large payroll company recently merged with a small staffing company. The unified company now has multiple business units, each with its own existing AWS account. A solutions architect must ensure that the company can centrally manage the billing and access policies for all the AWS accounts. The solutions architect configures AWS Organizations by sending an invitation to all member accounts of the company from a centralized management account. What should the solutions architect do next to meet these requirements?
   - [ ] A. Create the OrganizationAccountAccess IAM group in each member account. Include the necessary IAM roles for each administrator.
   - [ ] B. Create the OrganizationAccountAccessPolicy IAM policy in each member account. Connect the member accounts to the management account by using cross-account access.
   - [ ] C. Create the OrganizationAccountAccessRole IAM role in each member account. Grant permission to the management account to assume the IAM role.
   - [ ] D. Create the OrganizationAccountAccessRole IAM role in the management account. Attach the Administrator Access AWS managed policy to the IAM role. Assign the IAM role to the administrators in each member account.

   <details>
      <summary>Answer</summary>

      答案C。

   </details>

3. A company operates quick-service restaurants. The restaurants follow a predictable model with high sales traffic for 4 hours daily. Sales traffic is lower outside of those peak hours. The point of sale and management platform is deployed in the AWS Cloud and has a backend that is based on Amazon DynamoDB. The database table uses provisioned throughput mode with 100 000 RCUs and 80,000 WCUs to match known peak resource consumption. The company wants to reduce Its DynamoDB cost and minimize the operational overhead for the IT staff. Which solution meets these requirements MOST cost-effectively?
   - [ ] A. Reduce the provisioned RCUs and WCUs
   - [ ] B. Change the DynamoOB table to use on-demand capacity
   - [ ] C. Enable Dynamo DB auto scalling for the table
   - [ ] D. Purchase 1-year reserved capacity that is sufficient to cover the peak load for 4 hours each day

   <details>
      <summary>Answer</summary>

      答案A。

   </details>

4. A financial services company loaded millions of historical stock trades into an Amazon DynamoDB table. The table uses on-demand capacity mode. Once each day at midnight, a few million new records are loaded into the table. Application road activity against the table happens in bursts throughout the day, and a limited set of keys are repeatedly looked up. The company needs to notice costs associated with DynamoDB. Which strategy should a solutions architect recommend to meet this requirement?
   - [ ] A. Deploy an Amazon ElastiCache cluster In front of the DynamoDB table.
   - [ ] B. Deploy DynamoDB Accelerator (DAX) Configure DynamoDB auto scaling. Purchase Savings Plans in Cost Explorer.
   - [ ] C. Use provisioned capacity mode. Purchase Savings Plans in Cost Explorer.
   - [ ] D. Deploy DynamoDB Accelerator (DAX). Use provisioned capacity mode. Configure DynamoDB auto scaling.

   <details>
      <summary>Answer</summary>

      既然有反复读取的键，就缓存一下吧，答案A。

   </details>

5. A company has a project that is launching Amazon EC2 instances that arc larger than required. The project's account cannot be part of the company's organization in AWS Organizations due to policv restrictions to keep this activity outside of corporate IT. The company wants to allow only the launch of t3 small EC2 instances by developers in the project's account. These EC2 instances must be restricted the us-east-2 Region. What should a solutions architect do to meet these requirements?
   - [ ] A. Create a new developer account. Move all EC2 instances, users, and assets into us-east-2. Add the account to the company's organization in AWS Organization. Enforce a tagging policy that denotes Region affinity.
   - [ ] B. Create an SCP that denies the launch of all EC2 instances except t3.small EC2 instances in us-east-2. Attach the SCP to the project's account.
   - [ ] C. Create and purchase a t3.small EC2 Reserved Instance for each developer in us-east-2. Assign each developer a specific EC2 instance with their name as the tag.
   - [ ] D. Create an IAM policy than allows the launch of only t3.small EC2 instances in us-east-2. Attach the policy to the roles and groups that the developers use in the proofs account.

   <details>
      <summary>Answer</summary>

      答案D。

   </details>

6. A company is running a workload that consists of thousands of Amazon EC2 instances. The workload is running in a VPC that contains several public subnets and private subnets The public subnets have a route for 0 0.0 0/0 to an existing internet gateway. The private subnets have a route for 0.0.0.0/0 to an existing NAT gateway. A solutions architect needs to migrate the entire fleet of EC2 instances to use IPv6. The EC2 instances that are in private subnets must not be accessible from the public internet. What should the solutions architect do to meet these requirements?
   - [ ] A. Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Update all the VPC route tables, and add a route for :/0 to the internet gateway.
   - [ ] B. Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Update the VPC route tables for all private subnets, and add a route for :/0 to the NAT gateway.
   - [ ] C. Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Create an egress-only internet gateway Update the VPC route tables for all private subnets, and add a route for :/0 to the egress-only internet gateway.
   - [ ] D. Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Create a new NAT gateway, and enable IPv6 support Update the VPC route tables for all private subnets, and add a route (or: 70 to the IPv6-enabied NAT gateway.

   <details>
      <summary>Answer</summary>

      简单题，答案C。

   </details>

7. A company is developing and hosting several projects in the AWS cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation. Which actions should a solutions architect take to resolve the problem and prevent it from happening in the future? (Select THREE.)
   - [ ] A. Create an AWS Config rule in each account to find resources with missing tags.
   - [ ] B. Create an SCP in the organization with a deny action for ec2: RunInstances if the Project tag is missing.
   - [ ] C. Use Amazon Inspector in the organization to find resources with missing tags.
   - [ ] D. Create an IAM policy in each account with a deny action for ec: RunInstances if the Project tag is missing.
   - [ ] E. Create an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag.
   - [ ] F. Use AWS Security Hub to aggregate a list of EC2 instances with the missing Project tag.

   <details>
      <summary>Answer</summary>

      答案ACD。

   </details>

8. A company has a serverless application that is deployed on AWS The application uses an Amazon API Gateway REST API and AWS Lambda to receive and process requests from other applications within the company's on-premises network The application uses a preshared API key as the authentication method. A recent security review showed that the application was accessible from anywhere on the internet The company's security policy states that requests can be accepted only from the company's on-premises network What should a solutions architect recommend to meet this requirement?
   - [ ] A. Configure a security group with rules to allow traffic only from within the company's public IP address range. Attach the security group to the API Gateway API. and redeploy the API.
   - [ ] B. Create a Lambda function to inspect the requests and deny the execute-api:Invoke action if the request is not from within the company's public IP address range Configure the Lambda function as a custom authorizer for the API Gateway API Redeploy the API.
   - [ ] C. Create a resource policy with a statement to deny the execute-api:Invoke action if the aws:Sourcelp attribute is not from within the company's public IP address range Attach that resource policy to the API Gateway API Redeploy the API.
   - [ ] D. Configure a request validator for API Gateway to inspect the requests and deny the execute-api Invoke action if the aws:Sourcelp attribute is not from within the company's public IP address range Redeploy the API Gateway API.

   <details>
      <summary>Answer</summary>

      答案C。

   </details>

9. A company wants to retire its Oracle Solans NFS storage arrays. The company requires rapid data migration over its internet network connection to a combination of destinations for Amazon S3, Amazon Elastic File System (Amazon EFS), and Amazon FSx for Windows File Server The company also requires a full initial copy, as well as incremental transfers of changes until the retirement of the storage arrays All data must be encrypted and checked for integrity. What should a solutions architect recommend to meet these requirements?
   - [ ] A. Configure CloudEndure. Create a project and deploy the CloudEndure agent and token to the storage array. Run the migration plan to start the transfer.
   - [ ] B. Configure AWS DataSync. Configure the DataSync agent and deploy it to the local network. Create a transfer task and start the transfer.
   - [ ] C. Configure the aws S3 sync command. Configure the AWS client on the client side with credentials. Run the sync command to start the transfer.
   - [ ] D. Configure AWS Transfer for FTP. Configure the FTP client with credentials. Script the client to connect and sync to start the transfer.

   <details>
      <summary>Answer</summary>

      答案A。

   </details>

10. A company has many AWS accounts and uses AWS Organizations to manage all of them. A solutions architect must implement a solution that the company can use to share a common network across multiple accounts. The company infrastructure team has a dedicated infrastructure account that has a VPC. The infrastructure team must use this account to manage the network. Individual accounts cannot have the ability to manage their own networks. However, individual accounts must be able to create AWS resources within subnets. Which combination of actions should the solutions architect perform to meet these requirements? (Select TWO)
    - [ ] A. Create a transit gateway in the infrastructure account.
    - [ ] B. Enable resource sharing from the AWS Organizations management account.
    - [ ] C. Create VPCs in each AWS account within the organization in AWS Organizations. Configure the VPC to share the same CIDR range and subnets as the VPC in the infrastructure account. Peer the VPCs in each individual account with the VPC in the infrastructure account.
    - [ ] D. Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each subnet to associate with the resource share
    - [ ] E. Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each prefix list to associate with the resource share.

   <details>
      <summary>Answer</summary>

      答案BD。

   </details>
