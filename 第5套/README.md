# AWS SAP 401-518

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

8. A company has a serverless application that is deployed on AWS. The application uses an Amazon API Gateway REST API and AWS Lambda to receive and process requests from other applications within the company's on-premises network The application uses a pre-shared API key as the authentication method. A recent security review showed that the application was accessible from anywhere on the internet The company's security policy states that requests can be accepted only from the company's on-premises network What should a solutions architect recommend meeting this requirement?
   - [ ] A. Configure a security group with rules to allow traffic only from within the company's public IP address range. Attach the security group to the API Gateway API. and redeploy the API.
   - [ ] B. Create a Lambda function to inspect the requests and deny the `execute-api:Invoke` action if the request is not from within the company's public IP address range. Configure the Lambda function as a custom authorizer for the API Gateway API. Redeploy the API.
   - [ ] C. Create a resource policy with a statement to deny the `execute-api:Invoke` action if the `aws:Sourcelp` attribute is not from within the company's public IP address range. Attach that resource policy to the API Gateway API. Redeploy the API.
   - [ ] D. Configure a request validator for API Gateway to inspect the requests and deny the `execute-api:Invoke` action if the `aws:Sourcelp` attribute is not from within the company's public IP address range. Redeploy the API Gateway API.

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

11. A research company is running daily simulations in the AWS Cloud to meet high demand. The simulations run on several hundred Amazon EC2 instances that are based on Amazon Linux 2. Occasionally, a simulation gets stuck and requires a cloud operation engineer to solve the problem by connecting to an EC2 instance through SSH. Company policy states that no EC2 instance can use the same SSH key and that all connections must be logged in AWS CloudTrail How can a solutions architect meet these requirements?
    - [ ] A. Launch new EC2 instances without setting up any SSH key for the instances. Set up EC2 Instance Connect on each instance. Create a new IAM policy and attach it to the engineers' IAM role with an allow statement for the `SendSSHPublicKey` action. Instruct the engineers to connect to the instance by using a browser based SSH client from the EC2 console.
    - [ ] B. Create an AWS Systems Manager document to run commands on EC2 instances to set a new unique SSH key. Create a new IAM policy and attach it to the engineers' IAM rote with an allow statement to run Systems Manager documents. Instruct the engineers to run the document to set an SSH key and to connect through any SSH client.
    - [ ] C. Launch new EC2 instances and generate an individual SSH key lor each instance Store the SSH key in AWS Secrets Manager. Create a new IAM policy and attach it to the engineers' IAM role with an allow statement for the `GetSecretValue` action. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.
    - [ ] D. Set up AWS Secrets Manager to store the EC2 SSH key. Create a new AWS Lambda function to create a new SSH key and to call AWS Systems Manager Session Manager to set the SSH key on the EC2 instance. Configure Secrets Manager to use the Lambda function for automatic rotation once daily Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

12. A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet. An Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet. AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances. The company recently released a new version of the application. Some EC2 instances are now being marked as unhealthy and are being terminated. As a result, the application is running at reduced capacity. A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive. How should the solutions architect gain access to an EC2 instance to troubleshoot the issue?
    - [ ] A. Suspend the Auto Scaling group's HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.
    - [ ] B. Enable EC2 instance termination protection. Use Session Manager to log in to an instance that is marked as unhealthy.
    - [ ] C. Set the termination policy to OldestInstance on the Auto Scaling group. Use Session Manager to log in to an instance that is marked an unhealthy.
    - [ ] D. Suspend the Auto Scaling group's Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.

    <details>
       <summary>Answer</summary>

       答案D -> [ref](https://docs.aws.amazon.com/zh_cn/autoscaling/ec2/userguide/as-suspend-resume-processes.html#choosing-suspend-resume)

    </details>

13. A company has an on-premises Microsoft SQL Server database that writes a nightly 200 GB export to a local drive. The company wants to move the backups to more robust cloud storage on Amazon S3. The company has set up a 10 Gbps AWS Direct Connect connection between the on-premises data center and AWS. Which solution meets these requirements Most cost effectively?
    - [ ] A. Create a new S3 bucket. Deploy an AWS Storage Gateway file gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share.
    - [ ] B. Create an Amazon FSx for Windows File Server Single-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable backups.
    - [ ] C. Create an Amazon FSx for Windows File Server Multi-AZ system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.
    - [ ] D. Create a new S3 buckets. Deploy an AWS Storage Gateway volume gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share on the volume gateway and automate copies of this data to an S3 bucket.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

14. A company is serving files to its customers through an SFTP server that is accessible over the internet. The SFTP server is running on a single Amazon EC2 instance with an Elastic IP address attached Customers connect to the SFTP server through its Elastic IP address and use SSH for authentication. The EC2 instance also has an attached security group that allows access from all customer IP addresses. A solutions architect must implement a solution to improve availability minimize the complexity of infrastructure management and minimize the disruption to customers who access files. The solution must not change the way customers connect. Which solution will meet these requirements?
    - [ ] A. Disassociate the Elastic IP address from me EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server Configure the Transfer Family server with a publicly accessible endpoint. Associate the SFTP Elastic IP address with the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.
    - [ ] B. Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a VPC-hosted internet-facing endpoint. Associate the FTP Elastic IP address with the new endpoint. Attach the security group with customer IP addresses to the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.
    - [ ] C. Disassociate the Elastic IP address from the EC2 instance. Create a new Amazon Elastic File System (Amazon EFS) file system to be used for SFTP file hosting. Create an AWS Fargate task definition to run an SFTP server. Specify the EFS file system as a mount in the task definition. Create a Fargate service by sing the task definition and place a Network Load Balancer (NLB) in front of the service. When configuring the service, attach the security group with customer IP addresses to the tasks that run the SFTP server. Associate the Elastic IP address with the NLB. Sync all files from the SFTP server to the S3 bucket.
    - [ ] D. Disassociate the Elastic IP address from the EC2 instance. Create a multi-attach Amazon Elastic Block Store (Amazon EBS) volume to be used to SFTP file hosting. Crate a Network Load Balancer (NLB) with the Elastic IP address attached. Create an Auto Scaling group with EC2 instances that run an SFTP server. Define in the Auto Scaling group that instances that are launched should attach the new multi-attach EBS volume. Configure the Auto Scaling group to automatically add instances behind the NLB. Configure the Auto Scaling group to use the security group that allows customer IP addresses for the EC2 instances that the Auto Scaling group launches. Sync all files from the SFTP server to the new multi-attach EBS volume.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

15. A company that provisions job boards for a seasonal workforce is seeing an increase in traffic and usage. The backend services run on a pair of Amazon EC2 instances behind an Application Load Balancer with Amazon DynamoDB as the datastore. Application read and write traffic is slow during peak seasons. Which option provides a scalable application architecture to handle peak seasons with the LEAST development effort?
    - [ ] A. Migrate the backend services to AWS Lambda. Increase the read and write capacity of DynamoDB.
    - [ ] B. Migrate the backend services to AWS Lambda. Configure DynamoDB to use global tables.
    - [ ] C. Use Auto Scaling groups for the backend services. Use DynamoDB auto scaling.
    - [ ] D. Use Auto Scaling groups for the backend services. Use Amazon Simple Queue Service (Amazon SQS) and an AWS Lambda function to write to DynamoDB.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

16. A company is hosting a single-page webappliceation in the AWS Coud.The company is using Amazon CloudFront to reach its goal audience. The CoudFront distibution has an Amazon S3 bucket that is configured as its origin. The static fies for the web apllication are stored in this S3 bucket. The company has used a simple routing policy to configure an Amazon Route53. The record points to the CloudFront distrbution. The company wants to use a canary deployment release strategy for new versions of the application What should a solutions architect recommend to meet these requirements?
    - [ ] A. Create a second CloudFront distribution for the new version of the application. Update the Route 53 record to use a weighted routing policy.
    - [ ] B. Create a Lambda@Edge function. Configure the function to implement a weighting algorithm and rewrite the URL to direct users to a new version of the application.
    - [ ] C. Create a second S3 bucket and a second Cloudfront origin for the new S3 bucket. Create a Cloudfront origin group that contains both origins. Configure origin weighting for the origin group.
    - [ ] D. Create two Lambda@Edge functions. Use each function to serve one of the applicaion version. Set up a CloudFront weighted Lambda@Edge invocation policy.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

17. A company manages an on-premises data ingestion application that receives metrics from loT devices in JSON format. The data is collected transformed and stored m a data warehouse for analysis. The current infrastructure has several performance issues at peak loads due to insufficient compute capacity causing some of the data ingestion to be dropped. The company wants to migrate the application to AWS. The solution must support its current analytics tool that connects to the data warehouse with a Java Database Connectivity (JDBC) driver. The company requires a resilient and cost-effective solution that will address the performance issues. Which solution will meet these requirements?
    - [ ] A. Re-platform the application. Create an Application Load Balancer and an Amazon EC2 instance with Auto Scaling to host the application to ingest and transform the data. Create an Amazon RDS PostgreSQL Multi-AZ DB instance in a private subnet to store data. Use Amazon QuickSight to generate reports and visualize data.
    - [ ] B. Re-platform the application. Use Amazon API Gateway to handle data ingestion. Use AWS Lambda to transform the data. Create an Amazon Aurora PostgreSQL DB cluster with an Aurora Replica in two private subnets to store data. Use Amazon QuickSight to generate reports and visualize data.
    - [ ] C. Re-architect the application. Load the data into Amazon S3. Use AWS Glue to transform the data. Store the table schema in an AWS Glue Data Catalog. Use Amazon Athena to query the data.
    - [ ] D. Re-architect the application. Load the data into Amazon S3. Use Amazon EMR to transform the data. Create an external schema in an AWS Glue Data Catalog. Use Amazon Redshift Spectrum to query the data.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

18. A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration. What should the solutions architect do to meet these requirements?
    - [ ] A. Configure the AWS DataSync agent to start replicating the data store to Amazon FSx for Windows File Server. Use the SMB share to host the VMware data store. Use VM Import/Export to move the VMs to Amazon EC2.
    - [ ] B. Use the VMware vSphere client to export the application as an image in Open Visualization Format (OVF) format. Create an Amazon S3 bucket to store the image in the destination AWS Region. Create and apply an 1AM role for VM Import. Use the AWS CLI to run the EC2 import command.
    - [ ] C. Configure AWS Storage Gateway for files service to export a Common Internet File System (CIFS) share. Create a backup copy to the shared folder. Sign in to the AWS Management Console and create an AMI from the backup copy. Launch an EC2 instance that is based on the AMI.
    - [ ] D. Create a managed-instance activation for a hybrid environment in AWS Systems Manager. Download and install Systems Manager Agent on the on-premises VM. Register the VM with Systems Manager to be a managed instance. Use AWS Backup to create a snapshot of the VM and create an AMI. Launch an EC2 instance that is based on the AMI.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

19. A company hosts a photography website on AWS that has global visitors. The website has experienced steady increases in traffic during the last 12 months, and users have reported a delay in displaying images. The company wants to configure Amazon CloudFront to deliver photos to visitors with minimal latency. Which actions will achieve this goal? (Select TWO.)
    - [ ] A. Set the Minimum TTL and Maximum TTL to 0 in the CloudFront distribution.
    - [ ] B. Set the Minimum TTL and Maximum TTL to a high value in the CloudFront distribution.
    - [ ] C. Set the CloudFront distribution to forward all headers, all cookies, and all query strings to the origin.
    - [ ] D. Set up additional origin servers that are geographically closer to the requesters. Configure latency-based routing in Amazon Route 53.
    - [ ] E. Select Price Class 100 on the CloudFront distribution.

    <details>
       <summary>Answer</summary>

       如果将“Default TTL”(默认 TTL)、“Minimum TTL”(最小 TTL) 和“Maximum TTL”(最大 TTL) 设置为 0 秒，则 CloudFront 将始终验证它是否拥有来自源的最新内容。答案AE。

    </details>

20. A company is building an image service on the web that will allow users to upload and search random photos. At peak usage, up to 10,000 users worldwide will upload their images. The service will then overlay text on the uploaded images, which will then be published on the company website. Which design should a solutions architect implement?
    - [ ] A. Store the uploaded images in Amazon Elastic File System (Amazon EFS). Send application log information about each image to Amazon CloudWatch Logs. Create a fleet of Amazon EC2 instances that use CloudWatch Logs to determine which images need to be processed. Place processed images in another directory in Amazon EFS. Enable Amazon CloudFront and configure the origin to be the one of the EC2 instances in the fleet.
    - [ ] B. Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to Amazon Simple Notification Service {Amazon SNS). Create a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) to pull messages from Amazon SNS to process the images and place them in Amazon Elastic File System (Amazon EFS). Use Amazon CloudWatch metrics for the SNS message volume to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the ALB in front of the EC2 instances.
    - [ ] C. Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to the Amazon Simple Queue Service (Amazon SQS) queue. Create a fleet of Amazon EC2 instances to pull messages from the SQS queue to process the images and place them in another S3 bucket. Use Amazon CloudWatch metrics for queue depth to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the S3 bucket that contains the processed images.
    - [ ] D. Store the uploaded images on a shared Amazon Elastic Block Store (Amazon EBS) volume mounted to a fleet of Amazon EC2 Spot instances. Create an Amazon DynamoDB table that contains information about each uploaded image and whether it has been processed. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to reference an Elastic Load Balancer in front of the fleet of EC2 instances.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

21. A company manages hundreds of AWS accounts centrally in an organization in AWS Organizations. The company recently started to allow product teams to create and manage their own S3 access points in their accounts. The S3 access points can be accessed only within VPCs, not on the Internet. What is the MOST operationally efficient way to enforce this requirement?
    - [ ] A. Set the S3 access point resource policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.
    - [ ] B. Create an SCP at the root level in the organization to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.
    - [ ] C. Use AWS CloudFormation StackSets to create a new IAM policy in each AWS account that allows the s3:CreateAccessPoint action only if the s3:AccessPointNetworkOrigin condition key evaluates to VPC.
    - [ ] D. Set the S3 bucket policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

22. A company that tracks medical devices in hospitals wants to migrate its existing storage solution to the AWS Cloud. The company equips all its devices with sensors that collect location and usage information. This sensor data is sent in unpredictable patterns with large spikes. The data is stored in a MySQL database running on premises at each hospital. The company wants the cloud storage solution to scale with usage. The company’s analytics team uses the sensor data to calculate usage by device type and hospital. The team needs to keep analysis tools running locally while fetching data from the cloud. The team also needs to use existing Java application and SQL queries with as few changes as possible. How should a solutions architect meet these requirements while ensuring the sensor data is secure?
    - [ ] A. Store the data in an Amazon Aurora Serverless database. Serve the data through a Network Load Balancer (NLB). Authenticate users using the NLB with credentials stored in AWS Secrets Manager.
    - [ ] B. Store the data in an Amazon S3 bucket. Serve the data through Amazon QuickSight using an IAM user authorized with AWS Identity and Access Management (IAM) with the S3 bucket as the data source.
    - [ ] C. Store the data in an Amazon Aurora Serverless database. Serve the data through the Aurora Data API using an IAM user authorized with AWS Identity and Access Management (IAM) and the AWS Secrets Manager ARN.
    - [ ] D. Store the data in an Amazon S3 bucket. Serve the data through Amazon Athena using AWS PrivateLink to secure the data in transit.

    <details>
       <summary>Answer</summary>

       答案C -> [ref](https://aws.amazon.com/cn/blogs/aws/new-data-api-for-amazon-aurora-serverless/)

    </details>

23. A company has multiple AWS accounts as part of an organization created with AWS Organizations. Each account has a VPC in the us-east-2 Region and is used for either production or development workloads. Amazon EC2 instances across production accounts need to communicate with each other and EC2 instances across development accounts need to communicate with each other, but production and development instances should not be able to communicate with each other. To facilitate connectivity, the company created a common network account. The company used AWS Transit Gateway to create a transit gateway in the us-east-2 Region in the network account and shared the transit gateway with the entire organization by using AWS Resource Access Manager Network. Administrators then attached VPCs in each account to the transit gateway after which the EC2 instances were able to communicate across accounts However production and development accounts were also able to communicate with one another. Which set of steps should a solutions architect take to ensure production traffic and development traffic are completely isolated?
    - [ ] A. Modify the security groups assigned to development EC2 instances to block traffic from production EC2 instances. Modify the security groups assigned to production EC2 instances to block traffic from development EC2 instances.
    - [ ] B. Create a tag on each VPC attachment with a value of either production or development according to the type of account being attached. Using the Network Manager feature of AWS Transit Gateway, create policies that restrict traffic between VPCs based on the value of this tag.
    - [ ] C. Create separate route tables for production and development traffic. Delete each account's association and route propagation to the default AWS Transit Gateway route table. Attach development VPCs to the development AWS Transit Gateway route table and production VPCs to the production route table and enable automatic route propagation on each attachment.
    - [ ] D. Create a tag on each VPC attachment with a value of either production or development according to the type of account being attached. Modify the AWS Transit Gateway routing table to route production tagged attachments to one another and development tagged attachments to one another.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

24. A solutions architect is designing a solution that consists of a fleet of Amazon EC2 Reserved Instances (RIs) in an Auto Scaling group that will grow over time as usage increases. The solution needs to maintain 80% RI coverage to maintain cost control with an alert to the DevOps team using an email distribution list when coverage drops below 30% The solution must also include the ability to generate a report to easily track and manage coverage. The company has a policy that allows only one workload for each AWS account. Which set of steps should the solutions architect take to create the report and alert the DevOps team?
    - [ ] A. Create an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the DevOps email distribution list. Enable cost allocation tags and ensure instances populate a customer-managed cost allocation tag at startup. Use the AWS Billing and Cost Management console to create a budget for RI coverage, fitter using the customer-managed cost allocation tag and set the threshold to 80% and link to the SNS topic created in me alert configuration.
    - [ ] B. Create an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the DevOps email distribution list. Use the Cost Explorer console to configure the report for RI utilization set the utilization target to 30% and link to the SNS topic created in the alert configuration.
    - [ ] C. Use the AWS Billing and Cost Management console to create a reservation budget for RI utilization. Set the utilization to 80% and enter the email distribution list in the alert configuration.
    - [ ] D. Enable cost allocation tags and ensure instances populate a customer-managed cost allocation tag at startup. Use the Cost Explorer console to configure the report for RI coverage, filter using the customer-managed cost allocation tag and set the threshold to 80% and enter the email distribution list in the alert configuration.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

25. A company built an application based on AWS Lambda deployed in an AWS CloudFormation stack. The last production release of the web application introduced an issue that resulted in an outage lasting several minutes. A solutions architect must adjust the deployment process to support a canary release. Which solution will meet these requirements?
    - [ ] A. Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load.
    - [ ] B. Deploy the application into a new CloudFormation stack. Use an Amazon Route 53 weighted routing policy to distribute the load.
    - [ ] C. Create a version for every new deployed Lambda function. Use the AWS CLI update-function-configuration command with the routing-config parameter to distribute the load.
    - [ ] D. Configure AWS CodeDeploy and use CodeDeployDefault.OneAtATime in the Deployment configuration to distribute the load.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

26. A company hosts a large on-premises MySQL database at its main office that supports an issue tracking system used by employees around the world. The company already uses AWS for some workloads and has created an Amazon Route 53 entry for the database endpoint that points to the on-premises database. Management is concerned about the database being a single point of failure and wants a solutions architect to migrate the database to AWS without any data loss or downtime. Which set of actions should the solutions architect implement?
    - [ ] A. Create an Amazon Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) to do a full load from the on-premises database to Aurora. Update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on-premises database.
    - [ ] B. During nonbusiness hours, shut down the on-premises database and create a backup. Restore this backup to an Amazon Aurora DB cluster. When the restoration is complete, update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on-premises database.
    - [ ] C. Create an Amazon Aurora DB cluster. Use AWS Database Migration Service (AWS DMS) to do a full load with continuous replication from the on-premises database to Aurora. When the migration is complete, update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on- premises database.
    - [ ] D. Create a backup of the database and restore it to an Amazon Aurora multi-master cluster. This Aurora cluster will be in a master-master replication configuration with the on-premises database. Update the Route 53 entry for the database to point to the Aurora cluster endpoint, and shut down the on- premises database.

    <details>
       <summary>Answer</summary>

       需要连续复制，答案C。

    </details>

27. A company has many services running in its on-premises data center. The data center is connected to AWS using AWS Direct Connect (DX) and an iPSec VPN. The service data is sensitive and connectivity cannot traverse the internet. The company wants to expand into a new market segment and begin offering its services to other companies that are using AWS. Which solution will meet these requirements?
    - [ ] A. Create a VPC Endpoint Service that accepts TCP traffic host it behind a Network Load Balancer and make the service available over DX.
    - [ ] B. Create a VPC Endpoint Service that accepts HTTP or HTTPS traffic host It behind an Application Load Balancer and make the service available over DX.
    - [ ] C. Attach an internet gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.
    - [ ] D. Attach a NAT gateway to the VPC and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

28. A company maintains a restaurant review website. The website is a single-page application where files are stored m Amazon S3 and delivered using Amazon CloudFront. The company receives several fake postings every day that are manually removed The security team has identified that most of the fake posts are from Dots with IP addresses that have a bad reputation within the same global region. The team needs to create a solution to help restrict the bots from accessing the website. Which strategy should a solutions architect use?
    - [ ] A. Use AWS Firewall Manager to control the CloudFront distribution security settings. Create a geographical block rule and associate it with Firewall Manager.
    - [ ] B. Associate an AWS WAF web ACL with the CloudFront distribution. Select the managed Amazon IP reputation rule group for the web ACL with a deny action.
    - [ ] C. Use AWS Firewall Manager to control the CloudFront distribution security settings. Select the managed Amazon IP reputation rule group and associate it with Firewall Manager with a deny action.
    - [ ] D. Associate an AWS WAF web ACL with the CloudFront distribution. Create a rule group for the web ACL with a geographical match statement with a deny action.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

29. A company has application services that have been containerized and deployed on multiple Amazon EC2 instances with public IPs. An Apache Kafka cluster has been deployed to the EC2 instances. A PostgreSQL database has been migrated to Amazon RDS for PostgreSQL. The company expects a significant increase of orders on its platform when a new version of its flagship product is released. What changes to the current architecture will reduce operational overhead and support the product release?
    - [ ] A. Create an EC2 Auto Scaling group behind an Application Load Balancer. Create additional read replicas for the DB instance. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.
    - [ ] B. Create an EC2 Auto Scaling group behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.
    - [ ] C. Deploy the application on a Kubernetes cluster created on the EC2 instances behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.
    - [ ] D. Deploy the application on Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate and enable auto scaling behind an Application Load Balancer. Create additional read replicas for the DB instance. Create an Amazon Managed Streaming for Apache Kafka cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

30. A company is running a line of business application on AWS to support its users. The application runs in one VPC, with a backup copy in a second VPC in a different AWS Region for disaster recovery. The company has a single AWS Direct Connect connection between its on-premises network and AWS. The connection terminates at a Direct Connect gateway. All access to the application must originate from the company’s on-premises network, and traffic must be encrypted in transit using IPsec. The company is routing traffic through a VPN tunnel over the Direct Connect connection to provide the required encryption. A business continuity audit determines that the Direct Connect connection represents a potential single point of failure for access to the application. The company needs to remediate this issue as quickly as possible. Which approach will meet these requirements?
    - [ ] A. Order a second Direct Connect connection to a different Direct Connect location. Terminate the second Direct Connect connection at the same Direct Connect gateway.
    - [ ] B. Configure an AWS Site-to-site VPN connection over the internet. Terminate the VPN connection at a virtual private gateway in the secondary Region.
    - [ ] C. Create a transit gateway. Attach the VPCs to the transit gateway and connect the transit gateway to the Direct Connect gateway. Configure an AWS Site-to-site VPN connection and terminate it at the transit gateway.
    - [ ] D. Create a transit gateway. Attach the VPCS to the transit gateway and connect the transit gateway to the Direct Connect gateway. Order a second Direct Connect connection and terminate it at the transit gateway.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

31. An online retail company hosts its stateful web-based application and MYSQL database in an on-premises data center on a single server. The company wants to increase its customer base by conducting more marketing campaigns and promotions. In preparation, the company wants to migrate its application and database to AWS to increase the reliability of its architecture. Which solution should provide the HIGHEST level of reliability?
    - [ ] A. Migrate the database to an Amazon RDS MYSQL Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon Neptune.
    - [ ] B. Migrate the database to Amazon Aurora MySQL. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in an Amazon Elasticache fo Redis replication group.
    - [ ] C. Migrate the database to Amazon DocumentDB (with MongoDB compatibility ). Deploy the application in an Auto Scaling group on Amazon EC2 instances behind a Network Load Balancer. Store sessions in Amazon Kinesis Data Firehose
    - [ ] D. Migrate the database to an Amazon RDS MariaDB Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon Elasticache for Memcached.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

32. A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI The company's engineers rely heavily on SSH access to the instances for troubleshooting. The company's existing architecture includes the following: -A VPC with private and public subnets, and a NAT gateway. -Site-to-Site VPN for connectivity with the on-premises environment -EC2 security groups with direct SSH access from the on-premises environment. The company needs to increase security controls around SSH access and provide auditing of commands executed by the engineers. Which strategy should a solutions architect use?

    - [ ] A. Install and configure EC2 Instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22. Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.
    - [ ] B. Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.
    - [ ] C. Update the EC2 security groups to only allow Inbound TCP on port 22 to the IP addresses of the engineer's devices. Enable AWS Config for EC2 security group resource changes. Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.
    - [ ] D. Create an IAM role with the `AmazonSSMManaged InstanceCoremanaged` policy attached. Attach the IAM role to all the EC2 instances. Remove all security group rules attached to the EC2 instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin lor their devices and remotely access the instances by using the start-session API call from Systems Manager.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

33. A company is building a sensor data collection pipeline in which thousands of sensors write data to an Amazon Simple Queue Service (Amazon SQS) queue every minute. The queue is processed by an AWS Lambda function that extracts a standard set of metrics from the sensor data. The company wants to send the data to Amazon CloudWatch. The solution should allow for viewing individual and aggregate sensor metrics and interactively querying the sensor log data using CloudWatch Logs Insights What is the MOST cost-effective solution that meets these requirements?
    - [ ] A. Write the processed data to CloudWatch Logs in the CloudWatch embedded metric format.
    - [ ] B. Write the processed data to CloudWatch Logs. Then write the data to CloudWatch by using the PutMetricData API call.
    - [ ] C. Write the processed data to CloudWatch Logs in a structured format. Create a CloudWatch metric filter to parse the logs and publish the metrics to CloudWatch with dimensions to uniquely identify a sensor.
    - [ ] D. Configure the CloudWatch Logs agent for AWS Lambda. Output the metrics for each sensor in statsd format with tags to uniquely identify a sensor. Write the processed data to CloudWatch Logs.

    <details>
       <summary>Answer</summary>

       答案A -> [ref](https://aws.amazon.com/cn/about-aws/whats-new/2019/11/amazon-cloudwatch-launches-embedded-metric-format/)

    </details>

34. A company is creating a REST API to share information with six of Its partners based m the United States. The company has created an Amazon API Gateway Regional endpoint Each of the six partners will access the API once per day to post daily sales figures. After Initial deployment the company observes 1,000 requests per second originating from 500 different IP addresses around the world. The company believes this traffic is originating from a botnet and wants to secure its API while minimizing cost. Which approach should the company take to secure its API?
    - [ ] A.  Create an Amazon CloudFront distribution with the API as the origin Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Configure CloudFront with an origin access identity (OAI) and associate it with the distribution. Configure API Gateway to ensure only the OAI can execute the POST method.
    - [ ] B. Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Add a custom header to the CloudFront distribution populated with an API key. Configure the API to require an API key on the POST method.
    - [ ] C. Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a resource policy with a request limit and associate it with the API. Configure the API to require an API key on the POST method.
    - [ ] D. Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a usage plan with a request limit and associate it with the API. Create an API key and add it to usage plan.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

35. An education company is running a web application used by college students around the world. The application runs in an Amazon Elastic Container Service (Amazon ECS) cluster in an Auto Scaling group behind an Application Load Balancer (ALB). A system administrator detects a weekly spike in the number of failed login attempts, which overwhelm the applicationג€™s authentication service. All the failed login attempts originate from about 500 different IP addresses that change each week. A solutions architect must prevent the failed login attempts from overwhelming the authentication service. Which solution meets these requirements with the MOST operational efficiency?
    - [ ] A. Use AWS Firewall Manager to create a security group and security group policy to deny access from the IP addresses.
    - [ ] B. Create an AWS WAF web ACL with a rate-based rule, and set the rule action to Block. Connect the web ACL to the ALB.
    - [ ] C. Use AWS Firewall Manager to create a security group and security group policy to allow access only to specific CIDR ranges.
    - [ ] D. Create an AWS WAF web ACL with an IP set match rule, and set the rule action to Block. Connect the web ACL to the ALB.

    <details>
       <summary>Answer</summary>

       答案B [ref](https://docs.aws.amazon.com/zh_cn/waf/latest/developerguide/waf-rule-statement-type-rate-based.html)

    </details>

36. A company's site reliability engineer is performing a review of Amazon FSx for Windows File Server deployments within an account that the company acquired. Company policy states that all Amazon FSx file systems must be configured to be highly available across Availability Zones. During the review, the site reliability engineer discovers that one of the Amazon FSx file systems used a deployment type of Single-AZ 2. A solutions architect needs to minimize downtime while aligning this Amazon FSx file system with company policy. What should the solutions architect do to meet these requirements?
    - [ ] A. Reconfigure the deployment type to Multi-AZ for this Amazon FSx file system.
    - [ ] B. Create a new Amazon FSx file system with a deployment type of Multi-AZ. Use AWS DataSync to transfer data to the new Amazon FSx file system. Point users to the new location.
    - [ ] C. Create a second Amazon FSx file system with a deployment type of Single-AZ 2. Use AWS DataSync to keep the data in sync. Switch users to the second Amazon FSx file system in the event of failure.
    - [ ] D. Use the AWS Management Console to take a backup of the Amazon FSx file system. Create a new Amazon FSx file system with a deployment type of Multi-AZ. Restore the backup to the new Amazon FSx file system. Point users to the new location.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

37. A company has several applications running in an on-premises data center. The data center runs a mix of Windows and Linux VMs managed by VMware vCenter. A solution architect needs to create a plan to migrate the application to AWS. However, the solution architect discovers that the documentation for the applications is not up to date and that there are no complete infrastructure diagrams. The company's developers lack time to discuss their applications and current usage with the solutions architect. What should the solutions architect do the gather the required information?
    - [ ] A. Deploy the AWS server migration service (AWS SMS) connector using the OVA image on the VMware cluster to collect configuration data from the VMs.
    - [ ] B. Use the AWS Migration Portfolio Assessment (MPA) tool to connect to each of the VMs to collect the configuration and utilization data.
    - [ ] C. Install the AWS Application Discovery Service on each of the VMs to collect the configuration and utilization data.
    - [ ] D. Register the on-premises VMs with the AWS Migration Hub to collect configuration and utilization data.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

38. A company wants to use Amazon WorkSpaces in combination with the client devices to replace aging desktops. Employees use the desktops to access applications that work with clinical trial data. Corporate security policy states that access to the applications must be restricted to only company branch office locations. The company is considering adding an additional branch in the next 6 months. Which solution meets these requirements with the Most operational efficiency?
    - [ ] A. Create an IP access control group rule with the list of public addresses from the branch offices. Associate the IPaccess control group with the WorkSpaces directory.
    - [ ] B. Use AWS Firewall Manager to create a web ACL rule with an IPSET with the list of public addresses from the branch office locations. Associate the web ACL with the WorkSpaces directory.
    - [ ] C. USE AWS Certificate Manager (ACM) to issue trusted device certificates to the machine deployed in the branch office locations. Enable restricted access on the WorkSpaces directory.
    - [ ] D. Create a custom WorkSpaces image with Windows Firewall configured to restrict configured access to the public address of the branch offices. Use the image to deploy the Workspace.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

39. A company has multiple business units. Each business unit has its own AWS account and runs a single website within that account. The company also has a single logging account. Logs from each business unit website are aggregated into a single Amazon 53 bucket in the logging account The S3 bucket policy provides each business unit with access to write data into the bucket and requires data lo be encrypted. The company needs to encrypt logs uploaded into the bucket using a single AWS Key Management Service (AWS KMS) CMK. The CMK that protects the data must be rotated once every 365 days. Which strategy is the MOST operationally efficient for the company to use to meet these requirements?
    - [ ] A. Create a customer managed CMK in the logging account. Update the CMK key policy to provide access to the logging account only. Manually rotate the CMK every 365 days
    - [ ] B. Create a customer managed CMK in the logging account. Update the CMK key policy to provide access to the logging account and business unit accounts. Enable automatic rotation of the CMK.
    - [ ] C. Use an AWS managed CMK in the logging account. Update the CMK key policy to provide access to the logging account and business unit accounts. Manually rotate the CMK every 365 days.
    - [ ] D. Use an AWS managed CMK in the logging account. Update the CMK key policy to provide access to the logging account only. Enable automatic rotation of the CMK.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

40. Which statement describes the access that this policy provides to the user? The following AWS Identity and Access Management (IAM) customer managed policy has been attached to an IAM user:

    ```json
    {
      "Version":"2012-10-17",
      "Statement": [
         {
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": [
               "arn:aws:s3:::prod-data",
               "arn:aws:s3:::prod-data/*"
            ]
         },
         {
            "Effect": "Deny",
            "NotAction": "s3:*",
            "NotResource": [
               "arn:aws:s3:::prod-data",
               "arn:aws:s3:::prod-data/*"
            ]
         }
      ]
    }

    ```

    - [ ] A. The policy grants access to all Amazon S3 actions, including all actions in the prod-data S3 bucket.
    - [ ] B. This policy denies access to all Amazon S3 actions, excluding all actions in the prod-data S3 bucket.
    - [ ] C. This policy denies access to the Amazon S3 bucket and objects not having prod-data in the bucket name.
    - [ ] D. This policy grants access to all Amazon S3 actions in the prod-data S3 bucket, but explicitly denies access to all other AWS services.

    <details>
       <summary>Answer</summary>

       答案D -> [ref1](https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/reference_policies_elements_notaction.html) -> [ref2](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html)

    </details>

41. A company is using AWS Organizations to manage 15 AWS accounts. A solutions architect wants to run advanced analytics on the companyג€™s cloud expenditures. The cost data must be gathered and made available from an analytics account. The analytics application runs in a VPC and must receive the raw cost data each night to run the analytics. The solutions architect has decided to use the Cost Explorer API to fetch the raw data and store the data in Amazon S3 in JSON format. Access to the raw cost data must be restricted to the analytics application. The solutions architect has already created an AWS Lambda function to collect data by using the Cost Explorer API. Which additional actions should the solutions architect take to meet these requirements?
    - [ ] A. Create an IAM role in the Organizations master account with permissions to use the Cost Explorer API, and establish trust between the role and the analytics account. Update the Lambda function role and add sts:AssumeRole permissions. Assume the role in the master account from the Lambda function code by using the AWS Security Token Service (AWS STS) AssumeRole API call. Create a gateway endpoint for Amazon S3 in the analytics VPC. Create an S3 bucket policy that allows access only from the S3 endpoint.
    - [ ] B. Create an IAM role in the analytics account with permissions to use the Cost Explorer API. Update the Lambda function and assign the new role. Create a gateway endpoint for Amazon S3 in the analytics VPC. Create an S3 bucket policy that allows access only from the analytics VPC by using the aws:SourceVpc condition.
    - [ ] C. Create an IAM role in the Organizations master account with permissions to use the Cost Explorer API, and establish trust between the role and the analytics account. Update the Lambda function role and add sts:AssumeRole permissions. Assume the role in the master account from the Lambda function code by using the AWS Security Token Service (AWS STS) AssumeRole API call. Create an interface endpoint for Amazon S3 in the analytics VPC. Create an S3 bucket policy that allows access only from the analytics VPC private CIDR range by using the aws:SourceIp condition.
    - [ ] D. Create an IAM role in the analytics account with permissions to use the Cost Explorer API. Update the Lambda function and assign the new role. Create an interface endpoint for Amazon S3 in the analytics VPC. Create an S3 bucket policy that allows access only from the S3 endpoint.
  
    <details>
       <summary>Answer</summary>

       答案A。

    </details>

42. A new application s running on Amazon Elastic Container Service (Amazon ECS) with AWS Fargate. The application uses an Amazon Aurora MySQL database. The application and the database run in the same subnets of a VPC with distinct security groups that are configured. The password for the database is stored in AWS Secrets Manager and is passed to the application through the DB_PASSWORD environment variable. The hostname of the database is passed to the application through the DB_HOST environment variable. The application is failing to access the database. Which combination of actions should a solutions architect take to resolve this error? (Select THREE.)
    - [ ] A. Ensure that the container has the environment variable with name "DB_PASSWORD" specified with a "ValueFrom" and the ARN of the secret.
    - [ ] B. Ensure that the container has the environment variable with name "DB_PASSWORD" specified with a "ValueFrom" and the secret name of the secret.
    - [ ] C. Ensure that the Fargate service security group allows inbound network traffic from the Aurora MYSQL database on the MYSQL TCP port 3306.
    - [ ] D. Ensure that the Aurora MYSQL database security group allows inbound network traffic from the Fargate service on the MYSQL TCP port 3306.
    - [ ] E. Ensure that the container has the environment variable with name "DB_HOST" specified with the hostname of a DB instance endpoint.
    - [ ] F. Ensure that the container has the environment variable with name "DB_HOST" specified with the hostname of the DB cluster endpoint.

    <details>
       <summary>Answer</summary>

       答案BDE。

    </details>

43. A company has deployed its corporate website in a VPC on two Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances are deployed in private subnets. The ALB is in a public subnet. A route to an internet gateway exists in the public subnet route table. The company has deployed an Amazon CloudFront distribution with the ALB as the origin. The company’s security team recently identified that malicious traffic is accessing the ALB directly. The company must deploy security controls to prevent common attack techniques, including cross-site scripting, and to protect against volumetric denials of service. Which strategy should a solutions architect recommend meeting these requirements?
    - [ ] A. Migrate the ALB to a private subnet. Associate an AWS WAF web ACL with the ALB. Update inbound rules on the ALB security group to allow traffic on port 443 only from CloudFront IP addresses.
    - [ ] B. Associate an AWS WAF web ACL with the CloudFront distribution. Configure an origin access identity (OA) on the ALB to drop access attempts that do not originate from CloudFront.
    - [ ] C. Associate an AWS WAF web ACL with the CloudFront distribution. Configure CloudFront to add a custom header to the requests that are sent to the ALB. Configure advanced routing on the ALB to only forward requests that include the custom header that is set by CloudFront.
    - [ ] D. Associate an AWS WAF web ACL with the CloudFront distribution. Configure AWS WAF to add a custom header to the requests that are sent to the ALB. Configure advanced routing on the ALB to only forward requests that include the custom header that is set by CloudFront.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

44. A company has a media metadata extraction pipeline running on AWS. Notifications containing a reference to a file in Amazon S3 are sent to an Amazon Simple Notification Service (Amazon SNS) topic. The pipeline consists of a number of AWS Lambda functions that are subscribed to the SNS topic. The Lambda functions extract the S3 file and write metadata to an Amazon RDS PostgreSQL DB instance. Users report that updates to the metadata are sometimes slow to appear or are lost. During these times, the CPU utilization on the database is high and the number of failed. Lambda invocations increases. Which combination of actions should a solutions architect take to help resolve this issue? (Select TWO)
    - [ ] A. Enable message delivery status on the SNS topic. Configure the SNS topic delivery policy to enable retries with exponential backoff.
    - [ ] B. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue and subscribe the queue to the SNS topic. Configure the Lambda functions to consume messages from the SQS queue.
    - [ ] C. Create an RDS proxy tor the RDS instance. Update the Lambda functions to connect to the RDS instance using the proxy.
    - [ ] D. Enable the RDS Data API for the RDS instance. Update the Lambda functions to connect to the RDS instance using the Data API.
    - [ ] E. Create an Amazon Simple Queue Service (Amazon SQS) standard queue for each Lambda function and subscribe the queues to the SNS topic. Configure the Lambda functions to consume messages from their respective SQS queue.

    <details>
       <summary>Answer</summary>

       答案CE。

    </details>

45. A company is planning to host a three tier application in the AWS Cloud. The application layer will use Amazon EC2 in an Auto Scaling group. A custom EC2 role named AppServer will be created and associated with the application instances. The entire application stack will be deployed using AWS Cloud Formation. The company's security team requires encryption of all AMI snapshots and Amazon Elastic Block Store (Amazon EBS) volumes with an AWS Key Management Service (AWS KMS) CMK. Which action will deploy the stack correctly after the AMI snapshot is encrypted with the KMS key?
    - [ ] A. Update the KMS key policy to provide the required permissions to the AppServer role.
    - [ ] B. Update the KMS key policy to provide the required permissions to the AWSServiceRoleForAutoScaling service-linked role.
    - [ ] C. Update the AppServer role to have the required permissions to access the KMS key.
    - [ ] D. Update the CloudFormation stack role to have the required permissions to access the KMS key.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

46. An AWS customer has a web application that runs on premises. The web application fetches data from a third-party API that is behind a firewall. The third party accepts only one public CIDR block in each clientג€™s allow list. The customer wants to migrate their web application to the AWS Cloud. The application will be hosted on a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in a VPC. The ALB is located in public subnets. The EC2 instances are located in private subnets. NAT gateways provide internet access to the private subnets. How should a solutions architect ensure that the web application can continue to call the third-party API after the migration?
    - [ ] A. Associate a block of customer-owned public IP addresses to the VPC. Enable public IP addressing for public subnets in the VPC.
    - [ ] B. Register a block of customer-owned public IP addresses in the AWS account. Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC.
    - [ ] C. Create Elastic IP addresses from the block of customer-owned IP addresses. Assign the static Elastic IP addresses to the ALB.
    - [ ] D. Register a block of customer-owned public IP addresses in the AWS account. Set up AWS Global Accelerator to use Elastic IP addresses from the address block. Set the ALB as the accelerator endpoint.

    <details>
       <summary>Answer</summary>

       当EC2实例通过互联网到达第三方API时，它们的私有IP地址将被NAT网关的公共IP地址所掩盖，答案B。

    </details>

47. A company has a data lake in Amazon S3 that needs to be accessed by hundreds of applications across many AWS accounts. The company's information security policy states that the S3 bucket must not be accessed over the public internet and that each application should have the minimum permissions necessary to function. To meet these requirements, a solutions architect plans to use an S3 access point that is restricted to specific VPCs for each application. Which combination of steps should the solutions architect take to implement this solution? (Choose two.)
    - [ ] A. Create an S3 access point for each application in the AWS account that owns the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point.
    - [ ] B. Create an interface endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Create a VPC gateway attachment for the S3 endpoint.
    - [ ] C. Create a gateway endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Specify the route table that is used to access the access point.
    - [ ] D. Create an S3 access point for each application in each AWS account and attach the access points to the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point.
    - [ ] E. Create a gateway endpoint for Amazon S3 in the data lake's VPC. Attach an endpoint policy to allow access to the S3 bucket. Specify the route table that is used to access the bucket.

    <details>
       <summary>Answer</summary>

       答案AC -> [ref](https://aws.amazon.com/cn/blogs/storage/managing-amazon-s3-access-with-vpc-endpoints-and-s3-access-points/)

    </details>

48. A company is running an Apache Hadoop cluster on Amazon EC2 instances. The Hadoop cluster stores approximately 100 TB of data for weekly operational reports and allows occasional access for data scientists to retrieve data. The company needs to reduce the cost and operational complexity for storing and serving this data. Which solution meets these requirements in the MOST cost-effective manner?
    - [ ] A. Move the Hadoop cluster from EC2 instances to Amazon EMR. Allow data access patterns to remain the same.
    - [ ] B. Write a script that resizes the EC2 instances to a smaller instance type during downtime and resizes the instances to a larger instance type before the reports are created.
    - [ ] C. Move the data to Amazon S3 and use Amazon Athena to query the data for reports. Allow the data scientists to access the data directly in Amazon S3.
    - [ ] D. Migrate the data to Amazon DynamoDB and modify the reports to fetch data from DynamoDB. Allow the data scientists to access the data directly in DynamoDB.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

49. A government agency is building a forms submission portal using AWS to allow citizen to submit and retrieve sensitive documents. The solution was built using serverless architecture, with the front-end code developed using HTML and JavaScript and the backend architecture using Amazon API Gateway and Amazon S3. The portal must meet the following security requirements: -Requests to the backend infrastructure should be allowed only if they originate from a specific country. -Requests to the backend infrastructure should prevent brute attacks from individual IP addresses by not allowing more than 3000 requests per minutes for 10 requests per seconds for each IP address. -All access attempts to the backend infrastructure must be logged. Which steps should a solution architect take to meet these requirements? (Select Two.)
    - [ ] A. Configure the API Gateway API with a custom rule condition that allow APIs to be called from the authorized country only. Then enable default method throttling, setting the rate limit in 10 requests per seconds.
    - [ ] B. Create an AWS WAP web ACL with a custom condition that allows access attempts from the authorized country only, and a rate-based rule with a rate-based rule with rate limit 3000 requests per 5 minutes. Then associate the web ACL with the API Gateway API.
    - [ ] C. Configure Amazon Cloud with a geographical restriction that allows access attempts from the authorized country only, and a rate-based rule with a rate limit of 3000 requests per 5 minutes. Then Add the API Gateway API as a custom origin.
    - [ ] D. Configure the AWS WAF web ACL to log to an Amazon Kinesis Data Firehose delivery with Amazon Elasticsearch Service (Amazon ES) as the destination. Configure API Gateway to log to an Amazon CloudWatch Logs group.
    - [ ] E. Configure the AWS WAF web ACL to an Amazon CloudWatch Logs group. Configure API Gateway to log to an Amazon Cloudwatch Logs group.

    <details>
       <summary>Answer</summary>

       答案BE。

    </details>

50. A company uses multiple AWS accounts in a single AWS Region. A solution architect is designing a solution to consolidate logs generated by Elastic Load Balancers (ELBs)in the AppDev, AppTest and AppProd accounts. The logs should be stored in an existing Amazon S3 bucket named s3-eib-logs in the central AWS accounts. The central account is used for log consolidation only does not have ELBs deployed. ELB logs must be encrypted at rest. Which combination of steps should the solutions architect take to build the solution? (Select Two.)
    - [ ] A. Update the S3 bucket policy for s3-elb-logs bucket to allow the s3 PutBucketLogging action for the central AWS account ID.
    - [ ] B. Update the S3 bucket policy for s3-elb-logs bucket to allow the s3 PutObject and s3:DeleteObject actions for the AppDev, App Test and AppProd account IDs.
    - [ ] C. Update the S3 bucket policy for the s3-elb-logs bucket to allow the s3:PutObject action for the AppDev, AppTest and AppProd account IDs.
    - [ ] D. Enable access logging for the ELBs. Set the S3 location to the s3-elb-logs bucket.
    - [ ] E. Enable Amazon S3 default encryption using server-side encryption with s3 managed encryption keys (SSE-S3) for the s3-elb-logs s3 bucket.

    <details>
       <summary>Answer</summary>

       答案CE。

    </details>

51. A company is collecting a large amount of data from a fleet of IoT devices. Data is stored as Optimized ROW Columnar (ORC) files in the Hadoop Distributed File System (HDFS) on a persistent Amazon EMR cluster. The company's data analytics team queries the data by using SQL in Apache Presto deployed on the same EMR cluster. Queries scan large amounts of data, always run for less 15 minutes, and run only between 5 PM and 10 PM. The company is concerned about the high cost associated with the current solution. A solution architect must propose the most cost-effective solution that will allow SQL data queries. Which solution will meet these requirements?
    - [ ] A. Store data in Amazon S3 Amazon Redshift Spectrum to query data.
    - [ ] B. Store data in Amazon S3. Use the AWS Glue Data Catalog and Amazon Athena to query data.
    - [ ] C. Store data in EMR File System (EMRFS). Use Presto in Amazon EMR to query data.
    - [ ] D. Store data in Amazon Redshift. Use Amazon Redshift to query data.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

52. A company recently completed a large-scale migration to AWS. Development teams that support various business units have their own accounts in AWS Organizations. A central cloud team is responsible for controlling which services and resources can be accessed, and for creating operational strategies for all teams within the company. Some teams are approaching their account service quotas. The cloud team needs to create an automated and operationally efficient solution to proactively monitor service quotas. Monitoring should occur every 15 minutes and send alerts when a team exceeds 80% utilization. Which solution will meet these requirements?
    - [ ] A. Create a scheduled AWS Config rule to trigger an AWS Lambda function to call the GetServiceQuota API. If any service utilization is above 80%, publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to alert the cloud team. Create an AWS CloudFormation template and deploy the necessary resources to each account.
    - [ ] B. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that triggers an AWS Lambda function to refresh the AWS Trusted Advisor service limits checks and retrieve the most current utilization and service limit data. If the current utilization is above 80%, publish a message to an Amazon Simple Notification Service (Amazon SNS) topic to alert the cloud team. Create AWS CloudFormation StackSets that deploy the necessary resources to all Organizations accounts.
    - [ ] C. Create an Amazon CloudWatch alarm that triggers an AWS Lambda function to call the Amazon CloudWatch GetInsightRuleReport API to retrieve the most current utilization and service limit data. If the current utilization is above 80%, publish an Amazon Simple Email Service (Amazon SES) notification to alert the cloud team. Create AWS CloudFormation StackSets that deploy the necessary resources to all Organizations accounts.
    - [ ] D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that triggers an AWS Lambda function to refresh the AWS Trusted Advisor service limits checks and retrieve the most current utilization and service limit data. If the current utilization is above 80%, use Amazon Pinpoint to send an alert to the cloud team. Create an AWS CloudFormation template and deploy the necessary resources to each account.

    <details>
       <summary>Answer</summary>

       答案B -> [ref](https://docs.aws.amazon.com/zh_cn/solutions/latest/limit-monitor/architecture.html)

    </details>

53. A company recently deployed a new application that runs on a group of Amazon Linux 2 instances in a VPC. In a peered VPC, the company launched an EC2 Linux instance that serves as a bastion host. The security group of the application instances allows access only on TCP port 22 from the private IP of the bastion host. The security group of the bastion host allows access to TCP port 22 from 0.0.0.0/0 so that system administrators can use SSH to remotely log in to the application instances from several branch offices. While looking through operating system logs on the bastion host, a cloud engineer notices thousands of failed SSH logins to the bastion host from locations around the world. The cloud engineer wants to change how remote access is granted to the application instances and wants to meet the following requirements: -Eliminate brute-force SSH login attempts. -Retain a log of commands run during an SSH session. -Retain the ability to forward ports. Which solution meets these requirements for remote access to the application instances?
    - [ ] A. Configure the application instances to communicate with AWS Systems Manager. Grant access to the system administrators to use Session Manager to establish a session with the application instances. Terminate the bastion host.
    - [ ] B. Update the security group of the bastion host to allow traffic from only the public IP addresses of the branch offices.
    - [ ] C. Configure an AWS Client VPN endpoint and provision each system administrator with a certificate to establish a VPN connection to the application VPC. Update the security group of the application instances to allow traffic from only the Client VPN IPv4 CIDR. Terminate the bastion host.
    - [ ] D. Configure the application instances to communicate with AWS Systems Manager. Grant access to the system administrators to issue commands to the application instances by using Systems Manager Run Command. Terminate the bastion host.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

54. A company runs an application in Amazon VPC. The application requires that all traffic to three different third-party networks be encrypted. The network traffic between the application and the third-party networks is expected to be no more than 500 Mbps for each connection. To facilitate network connectivity, a solutions architect has created a transit gateway and attached the application VPC. Which set of actions should the solutions architect perform to complete the solution while MINIMIZING costs?
    - [ ] A. Use AWS Certificate Manager (ACM) to generate three public/private key pairs. Install the private keys on a public facing Application Load Balancer (ALB). Have each third-party network connect to the ALB using HTTPS/TLS. Update the transit gateway route table to route traffic between the application and the third-party networks through the ALB
    - [ ] B. Create an AWS Direct Connect connection between each third-party network and a Direct Connect gateway. Associate the Direct connect gateway. Associate the Direct Connect gateway with the transit gateway Encrypt the Direct Connect connection with each third-party network using a different encryption key.
    - [ ] C. Use AWS Marketplace to deploy three different public facing Amazon EC2 instances running software VPN appliances. Establish VPN connections between each application and the third-party networks. Update the transit gateway route table to send encrypted traffic to each third-party network using the appropriate VPN appliance.
    - [ ] D. Create a transit gateway VPN attachment to each third-party network. Use separate pre-shared keys for each VPN attachment. Share those keys with the third-party networks. Update the transit gateway route table by creating a separate route to each third-party network using the appropriate transit gateway attachment.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

55. A company needs to create and manage multiple AWS accounts for several departments from a central location. The security team requires read-only access to all accounts from its own AWS account. The company is using AWS Organizations and created an account for the security team. How should a solutions architect meet these requirements?
    - [ ] A. Use the OrganizationAccountAceessRole IAM role to create a new IAM policy with read-only access in each member account. Establish a trust relationship between the IAM policy in each member account and the security account. Ask the security team to use the IAM policy to gain access.
    - [ ] B. Use the OrganizationAccountAccessRole IAM role to create a new IAM role-win read only access in each member account. Establish a trust relationship between the IAM role in each member account and the security account. Ask the security team to use the IAM role to gain access.
    - [ ] C. Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the master account from the security account. Use the generated temporary credentials to gain access.
    - [ ] D. Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the member account from the security account. Use the generated temporary credentials to gain access.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

56. A company has grown through numerous mergers and acquisitions. Due to increasing AWS usage costs, management wants each business unit to submit monthly cost reports with costs allocated to specific projects through the AWS Billing and Cost Management console. A resource tagging strategy involving BusinessUnit and Project tags is already defined. Which combination of steps should each business unit take to meet these requirements? (Select Two.)
    - [ ] A. Create an AWS Cost and Usage Report rule to group resources by the BusinessUnit and Project tags. Create a budget in AWS Budget and attach the cost and usage rule to it.
    - [ ] B. Activate the Project tag for cost allocation. Create a budget in AWS Budget in AWS Budgets for each project with a resource filter using the Project tag.
    - [ ] C. Create a budget in AWS Budgets for each project with a resource filter using the BusinessUnit tag.
    - [ ] D. Create an AWS Budgets report for each business unit to be sent as an email notification to the finance team monthly. Attach the budget for each of the business unit's projects to the report.
    - [ ] E. Create an AWS Budget report for each business unit to be sent as an email notification to the finance team monthly. Configure a tag filter on the AWS Budget report to automatically add budget that include resources with a matching BusinessUnit tag.

    <details>
       <summary>Answer</summary>

       答案AD。

    </details>

57. A car rental company has built a serverless REST API to provide data to its mobile app. The app consists of an Amazon API Gateway API with a Regional endpoint, AWS Lambda functions, and an Amazon Aurora MySQL Serverless DB cluster. The company recently opened the API to mobile apps of partners. A significant increase in the number of requests resulted, causing sporadic database memory errors. Analysis of the API traffic indicates that clients are making multiple HTTP GET requests for the same queries in a short period of time. Traffic is concentrated during business hours, with spikes around holidays and other events. The company needs to improve its ability to support the additional usage while minimizing the increase in costs associated with the solution. Which strategy meets these requirements?
    - [ ] A. Convert the API Gateway Regional endpoint to an edge-optimized endpoint. Enable caching in the production stage.
    - [ ] B. Implement an Amazon ElastiCache for Redis cache to store the results of the database calls. Modify the Lambda functions to use the cache.
    - [ ] C. Modify the Aurora Serverless DB cluster configuration to increase the maximum amount of available memory.
    - [ ] D. Enable throttling in the API Gateway production stage. Set the rate and burst values to limit the incoming calls.

    <details>
       <summary>Answer</summary>

       答案B -> [ref](https://aws.amazon.com/cn/blogs/database/latency-reduction-of-hybrid-architectures-with-amazon-elasticache/)

    </details>

58. A company is developing a web application that runs on Amazon EC2 instances in an Auto Scaling group behind a public-facing Application Load Balancer (ALB). Only users from a specific country are allowed to access the application. The company needs the ability to log the access requests that have been blocked. The solution should require the least possible maintenance. Which solution meets these requirements?
    - [ ] A. Create an IPSet containing a list of IP ranges that belong to the specified country. Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from an IP range in the IPSet. Associate the rule with the web ACL. Associate the web ACL with the ALB.
    - [ ] B. Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from the specified country. Associate the rule with the web ACL. Associate the web ACL with the ALB.
    - [ ] C. Configure AWS Shield to block any requests that do not originate from the specified country. Associate AWS Shield with the ALB.
    - [ ] D. Create a security group rule that allows ports 80 and 443 from IP ranges that belong to the specified country. Associate the security group with the ALB.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

59. A company uses AWS Organizations to manage more than 1,000 AWS accounts. The company has created a new developer organization. There are 540 developer members in that must be moved to the new developer organization. All accounts are set up with all the required information so that each account can be operated as a standalone account. Which combination of steps should a solutions architect take to move all the developer accounts to the new developer organization? (Select THREE)
    - [ ] A. Call the `MoveAccount` operation in the Organizations API from the old organization's master account to migrate the developer accounts to the new developer organization.
    - [ ] B. From the master account, remove each developer account from the old organization using the `RemoveAccountFromOrganization` operation in the Organizations API.
    - [ ] C. From each developer account, remove the account from the old organization using the `RemoveAccountFromOrganizatio`n operation in the Organization API.
    - [ ] D. Sign in to the new developer organization's master account and create a placeholder member account that acts as a target for the developer account migration.
    - [ ] E. Call the `InviteAccountToOrganization` operation in the Organizations API from the new developer organization's master account to send invitations to the developer accounts.
    - [ ] F. Have each developer sign into their account and confirm to join the new developer organization.

    <details>
       <summary>Answer</summary>

       答案AEF。

    </details>

60. A development team has created a new flight tracker application that provides near-real-time data to users. The application has a front end that consists of an Application Load Balancer (ALB) in front of two large Amazon EC2 instances in a single Availability Zone. Data is stored in a single Amazon RDS MySQL DB instance. An Amazon Route 53 DNS record points to the ALB. Management wants the development team to improve the solution to achieve maximum reliability with the least amount of operational overhead. Which set of actions should the team take?
    - [ ] A. Create RDS MySQL read replicas. Deploy the application to multiple AWS Regions. Use a Route 53 latency-based routing policy to route to the application.
    - [ ] B. Configure the DB instance as Multi-AZ. Deploy the application to two additional EC2 instances in different Availability Zones behind an ALB.
    - [ ] C. Replace the DB instance with Amazon DynamoDB global tables. Deploy the application in multiple AWS Regions. Use a Route 53 latency-based routing policy to route to the application.
    - [ ] D. Replace the DB instance with Amazon Aurora with Aurora Replicas. Deploy the application to multiple smaller EC2 instances across multiple Availability Zones in an Auto Scaling group behind an ALB.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

61. A company is using AWS Organizations to manage multiple AWS accounts. For security purposes, the company requires the creation of an Amazon Simple Notification Service (Amazon SNS) topic that enables integration with a third-party alerting system in all the Organizations member accounts. A solutions architect used an AWS CloudFormation template to create the SNS topic and stack sets to automate the deployment of CloudFormation stacks. Trusted access has been enabled in Organizations. What should the solutions architect do to deploy the CloudFormation StackSets in all AWS accounts?
    - [ ] A. Create a stack set in the Organizations member accounts. Use service-managed permissions. Set deployment options to deploy to an organization. Use CloudFormation StackSets drift detection.
    - [ ] B. Create stacks in the Organizations member accounts. Use self-service permissions. Set deployment options to deploy to an organization. Enable the CloudFormation StackSets automatic deployment.
    - [ ] C. Create a stack set in the Organizations master account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets automatic deployment.
    - [ ] D. Create stacks in the Organizations master account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets drift detection.

    <details>
       <summary>Answer</summary>

       答案C -> [ref](https://aws.amazon.com/cn/blogs/aws/use-cloudformation-stacksets-to-provision-resources-across-multiple-aws-accounts-and-regions/)

    </details>

62. A company runs an application in the cloud that consists of a database and a website. Users can post data to the website, have the data processed, and have the data sent back to them in an email. Data is stored is a MySQL database running on an Amazon EC2 Instance. The database is running in a VPC with two private subnets. The website is running on Apache Tomcat in a single EC2 instance in a different VPC with one public subnet. There is a single VPC peering connection between the database and website VPC. The website has suffered several outages during the last month due to high traffic. Which actions should a solutions architect take to increase the reliability of the application? (Select THREE.)
    - [ ] A. Place the Tomcat server in an Auto Scaling group with multiple EC2 instances behind an Application Load Balancer.
    - [ ] B. Provision an additional VPC peering connection.
    - [ ] C. Migrate the MySQL database to Amazon Aurora with one Aurora Replica.
    - [ ] D. Provision two NAT gateways in the database VPC.
    - [ ] E. Move the Tomcat server to the database VPC.
    - [ ] F. Create an additional public subnet in a different Availability Zone in the website VPC.

    <details>
       <summary>Answer</summary>

       答案ACE。

    </details>

63. A company wants to provide desktop as a service (DaaS) to a number of employees using Amazon WorkSpaces. WorkSpaces will need to access files and services hosted on premises with authorization based on the companyג€™s Active Directory. Network connectivity will be provided through an existing AWS Direct Connect connection. The solution has the following requirements: -Credentials from Active Directory should be used to access on-premises files and services. -Credentials from Active Directory should not be stored outside the company. -End users should have single sign-on (SSO) to on-premises files and services once connected to WorkSpaces. Which strategy should the solutions architect use for end user authentication?
    - [ ] A. Create an AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) directory within the WorkSpaces VPC. Use the Active Directory Migration Tool (ADMT) with the Password Export Server to copy users from the on-premises Active Directory to AWS Managed Microsoft AD. Set up a one- way trust allowing users from AWS Managed Microsoft AD to access resources in the on-premises Active Directory. Use AWS Managed Microsoft AD as the directory for WorkSpaces.
    - [ ] B. Create a service account in the on-premises Active Directory with the required permissions. Create an AD Connector in AWS Directory Service to be deployed on premises using the service account to communicate with the on-premises Active Directory. Ensure the required TCP ports are open from the WorkSpaces VPC to the on-premises AD Connector. Use the AD Connector as the directory for WorkSpaces.
    - [ ] C. Create a service account in the on-premises Active Directory with the required permissions. Create an AD Connector in AWS Directory Service within the WorkSpaces VPC using the service account to communicate with the on-premises Active Directory. Use the AD Connector as the directory for WorkSpaces.
    - [ ] D. Create an AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) directory in the AWS Directory Service within the WorkSpaces VPC. Set up a one-way trust allowing users from the on-premises Active Directory to access resources in the AWS Managed Microsoft AD. Use AWS Managed Microsoft AD as the directory for WorkSpaces. Create an identity provider with AWS Identity and Access Management (IAM) from an on-premises ADFS server. Allow users from this identity provider to assume a role with a policy allowing them to run WorkSpaces.

    <details>
       <summary>Answer</summary>

       - [ ] A. 出公司范围了
       - [ ] B. 不开TCP端口
       - [x] C. 正确
       - [ ] D. one-way trust不支持SSO

    </details>

64. A company is running an application in a single VPC on an Amazon EC2 instance with Amazon RDS as the datastore. The application does not support encryption in transit. Security guidelines do not allow SSH access to any resource within the VPC. The Application has issues throughout the day which causes outages in the production environment. The issues are not present in nonproduction environments. Application logs have been given to a vendor to troubleshoot the application. The vendor also requires IP packets for its analysis. Which solution allows for the IP packets to be extracted for troubleshooting?
    - [ ] A. Create a VPC traffic mirror source on the application instance's elastic network interface with a filter that captures all traffic. Configure the traffic mirror target to use an Amazon S3 bucket. Start the traffic mirror session and download the packet capture from Amazon S3. Provide the packet capture to the vendor.
    - [ ] B. Create a VPC traffic mirror source on the application instance's elastic network interface with a filter that captures all traffic. Launch a new EC2 instance and configure the traffic minor target to use the elastic network interface of the new EC2 instance. Start the traffic mirror session and download the packet capture from the new EC2 instance using AWS Systems Manager. Provide the packet capture to the vendor.
    - [ ] C. Enable VPC Flow Logs on the application instance's elastic network interface and send them to Amazon CloudWatch Logs. Download the CloudWatch logs and provide them to me vendor.
    - [ ] D. Enable VPC Flow Logs on the VPC to capture traffic flows on from the application instance and the RDS instance and send them to Amazon CloudWatch Logs. Download the CloudWatch logs and provide them to the vendor.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

65. A company needs to store and process image data that will be uploaded from mobile devices using a custom mobile app. Usage peaks between 8 AM and 5 PM on weekdays, with thousands of uploads per minute. The app is rarely used at any other time. A user is notified when image processing is complete. Which combination of actions should a solutions architect take to ensure image processing can scale to handle the load? (Choose three.)
    - [ ] A. Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon MQ queue.
    - [ ] B. Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon Simple Queue Service (Amazon SQS) standard queue.
    - [ ] C. Invoke an AWS Lambda function to perform image processing when a message is available in the queue.
    - [ ] D. Invoke an S3 Batch Operations job to perform image processing when a message is available in the queue.
    - [ ] E. Send a push notification to the mobile app by using Amazon Simple Notification Service (Amazon SNS) when processing is complete.
    - [ ] F. Send a push notification to the mobile app by using Amazon Simple Email Service (Amazon SES) when processing is complete.

    <details>
       <summary>Answer</summary>

       答案BCE。

    </details>

66. A software company hosts an application on AWS with resources in multiple AWS accounts and Regions. The application runs on a group of Amazon EC2 instances in an application VPC located in the us-east-1 Region with an IPv4 CIDR block of 10.10.0.0/16. In a different AWS account, a shared services VPC is located in the us-east-2 Region with an IPv4 CIDR block of 10.10.10.0/24. When a cloud engineer uses AWS CloudFormation to attempt to peer the application VPC with the shared services VPC, an error message indicates a peering failure. Which factors could cause this error? (Choose two.)
    - [ ] A. The IPv4 CIDR ranges of the two VPCs overlap.
    - [ ] B. The VPCs are not in the same Region.
    - [ ] C. One or both accounts do not have access to an Internet gateway.
    - [ ] D. One of the VPCs was not shared through AWS Resource Access Manager.
    - [ ] E. The IAM role in the peer accepter account does not have the correct permissions.

    <details>
       <summary>Answer</summary>

       答案AE。

    </details>

67. A company needs to implement a patching process for its servers. The on-premises servers and Amazon EC2 instances use a variety of tools to perform patching. Management requires a single report showing the patch status of all the servers and instances. Which set of actions should a solutions architect take to meet these requirements?
    - [ ] A. Use AWS Systems Manager to manage patches on the on-premises servers and EC2 instances. Use Systems Manager to generate patch compliance reports.
    - [ ] B. Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use Amazon QuickSight integration with OpsWorks to generate patch compliance reports.
    - [ ] C. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to apply patches by scheduling an AWS Systems Manager patch remediation job. Use Amazon Inspector to generate patch compliance reports.
    - [ ] D. Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use AWS X-RAY to post the patch status to AWS Systems Manage OpsCenter to generate patch compliance reports.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

68. A solutions architect is designing an application to accept timesheet entries from employees on their mobile devices. Timesheets will be submitted weekly, with most of the submissions occurring on Friday. The data must be stored in a format that allows payroll administrators to run monthly reports. The infrastructure must be highly available and scale to match the rate of incoming data and reporting requests. Which combination of steps meets these requirements while minimizing operational overhead? (Select TWO.)
    - [ ] A. Deploy the application to Amazon EC2 On-Demand Instances with load balancing across multiple Availability Zones. Use scheduled Amazon EC2 Auto Scaling to add capacity before the high volume of submissions on Fridays.
    - [ ] B. Deploy the application in a container using Amazon Elastic Container Service (Amazon ECS) with load balancing across multiple Availability Zones. Use scheduled Service Auto Scaling to add capacity before the high volume of submissions on Fridays.
    - [ ] C. Deploy the application front end to an Amazon S3 bucket served by Amazon CloudFront. Deploy the application backend using Amazon API Gateway with an AWS Lambda proxy integration.
    - [ ] D. Store the timesheet submission data in Amazon Redshift. Use Amazon QuickSight to generate the reports using Amazon Redshift as the data source.
    - [ ] E. Store the timesheet submission data in Amazon S3. Use Amazon Athena and Amazon QuickSight to generate the reports using Amazon S3 as the data source.

    <details>
       <summary>Answer</summary>

       答案BD。

    </details>

69. A company that is developing a mobile game is making game assets available in two AWS Regions. Game assets are served from a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in each Region. The company requires game assets to be fetched from the closest Region. If game assets become unavailable in the closest Region, they should be fetched from the other Region. What should a solutions architect do to meet these requirements?
    - [ ] A. Create an Amazon CloudFront distribution. Create an origin group with one origin for each ALB. Set one of the origins as primary.
    - [ ] B. Create an Amazon Route 53 health check for each ALB. Create a Route 53 failover routing record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.
    - [ ] C. Create two Amazon CloudFront distributions, each with one ALB as the origin. Create an Amazon Route 53 failover routing record pointing to the two CloudFront distributions. Set the Evaluate Target Health value to Yes.
    - [ ] D. Create an Amazon Route 53 health check for each ALB. Create a Route 53 latency alias record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.

    <details>
       <summary>Answer</summary>

       - Failover routing policy: Use when you want to configure active-passive failover.
       - Latency routing policy: Use when you have resources in multiple AWS Regions and you want to route traffic to the region that provides the best latency.

       答案D。

    </details>

70. A company wants to control its cost of Amazon Athena usage. The company has allocated a specific monthly budget for Athena usage. A solutions architect must design a solution that will prevent the company from exceeding the budgeted amount. Which solution will moot these requirements?
    - [ ] A. Use AWS Budgets. Create an alarm for when the cost of Athena usage reaches the budgeted amount for the month. Configure AWS Budgets actions to deactivate Athena until the end of the month.
    - [ ] B. Use Cost Explorer to create an alert for when the cost of Athena usage reaches the budgeted amount for the month. Configure Cost Explorer to publish notifications to an Amazon Simple Notification Service (Amazon SNS) topic.
    - [ ] C. Use AWS Trusted Advisor to track the cost of Athena usage. Configure an Amazon EventBridge rule to deactivate Athena until the end of the month whenever the cost reaches the budgeted amount for the month.
    - [ ] D. Use Athena workgroups to set a limit on the amount of data that can be scanned. Set a limit that is appropriate for the monthly budget and the current pricing for Athena.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

71. A company is designing a data processing platform to process a Large number of files in an Amazon S3 bucket and store the results in Amazon DynamoDB. These files will be processed once and must be retained for I year. The company wants to ensure that the original files and resulting data are highly available in multiple AWS Regions. Which solution will meet these requirements?
    - [ ] A. Create an S3 CreateObject event notification to copy the file to Amazon Elastic Block Store (Amazon EBS). Use AWS DataSync in sync the files between EBS volumes in multiple Regions. Use an Amazon EC2 Auto Scaling group in multiple Regions to attach the EBS volumes. Process the files and store the results in a DynamoDB global table in multiple Regions. Configure the S3 bucket with an S3 Lifecycle policy to move the files to S3 Glacier after I year.
    - [ ] B. Create an S3 CreateObject event notification to copy the file to Amazon Elastic File System (Amazon EFS). Use AWS DataSync to sync the files between EFS volumes in multiple Regions. Use an AWS Lambda function to process the EFS files and store the results in a DynamoDB global table in multiple Regions. Configure the S3 buckets with an S3 Lifecycle policy to move the files to S3 Glacier after I year.
    - [ ] C. Copy the files to an S3 bucket in another Regio by using cross-Region replication. Create an S3 CreateObject event notification on the original bucket to push S3 file paths into Amazon EventBridge (Amazon coudWatch Events). Use an AWS Lambda function to poll EventBridge (ClloudWatch Events) to process each file and save the results in a DynamoDB table in each Region. Configure both S3 buckets to use the S3 Standard-infrequent Access (S3 Standard-IA) storage class and an S3 lifecycle policy to delete the files after I year
    - [ ] D. Copy the files to an S3 bucket in another Region by using cross-Region replication. Create an S3 CreateObject event notification on the original bucket to execute an AWS Lambda function to process each file and store the results in a DynamoDB global table in multiple Regions. Configure both S3 buckets to use the S3 Standard-infrequent Access (S3 Standard-IA) storage class and an S3 Lifecycle policy to delete the files after 1 year.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

72. A solution architect works for a government agency that has strict recovery requirement. All Amazon Elastic Block Store (Amazon EBS) snapshots are required to be saved in at least two additional AWS Regions. The agency also is required to maintain the lowest possible operational overhead. Which solution meets These requirements?
    - [ ] A. Configure a policy in Amazon Data lifecycle Manager (Amazon DLM) to run once daily to copy the EBS snapshots to the additional Regions.
    - [ ] B. Use Amazon EventBridge (Amazon CloudWatch events) to schedule an AWS Lambda function to copy the EBS snapshots to the additional Regions.
    - [ ] C. Set up AWS Backup to create the EBS snapshots. Configure Amazon S3 cross-Region replicator to copy the EBS snapshots to the additional Regions
    - [ ] D. Schedule Amazon EC2 Image Builder to run once daily to create an AMI and copy the AMI to the additional Regions.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

73. A company is running a web application on Amazon EC2 instances in a production AWS account. The company requires all logs generated from the web application to be copied to a central AWS account for analysis and archiving. The company's AWS accounts are currently managed independently. Logging agents are configured on the EC2 instances to upload the log files to an Amazon S3 bucket in the central AWS account. A solution architect needs to provide access for a solution that will allow the production account to store log files in the central account. The central account also needs to have read access to the log files. What should the solutions architect do to meet these requirements?
    - [ ] A. Create a cross-account role in the central account. Assume the role from the production account when the logs are being copies.
    - [ ] B. Create a policy on the S3 bucket with the production account ID as the principal. Allow S3 access from a delegated user.
    - [ ] C. Create a policy on the S3 bucket with access from only the CIDR range of the EC2 instances in the production account. Use the production account ID as the principal.
    - [ ] D. Create a cross-account role in the production account. Assume the role from the production account when the logs are being copies.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

74. A solutions architect is evaluating the reliability of a recently migrated application running on AWS. The front end is hosted on Amazon S3 and accelerated by Amazon CloudFront. The application layer is running in a stateless Docker container on an Amazon EC2 On-Demand Instance with an Elastic IP address. The storage layer is a MongoDB database running on an EC2 Reserved Instance in the same Availability Zone as the application layer. Which combination of steps should the solutions architect take to eliminate single points of failure with minimal application code changes? (Choose two.)
    - [ ] A. Create a REST API in Amazon API Gateway and use AWS Lambda functions as the application layer.
    - [ ] B. Create an Application Load Balancer and migrate the Docker container to AWS Fargate.
    - [ ] C. Migrate the storage layer to Amazon DynamoDB.
    - [ ] D. Migrate the storage layer to Amazon DocumentDB (with MongoDB compatibility).
    - [ ] E. Create an Application Load Balancer and move the storage layer to an EC2 Auto Scaling group.

    <details>
       <summary>Answer</summary>

       答案BD，[ref](https://aws.amazon.com/cn/documentdb/?nc1=h_ls)

    </details>

75. A financial company with multiple departments wants to expand its on-premises environment to the AWS Cloud. The company must retain centralized access control using an existing on-premises Active Directory (AD) service. Each department should be allowed to create AWS accounts with preconfigured networking and should have access to only a specific list of approved services. Departments are not permitted to have account administrator permissions. What should a solutions architect do to meet these security requirements?
    - [ ] A. Configure AWS Identity and Access Management (IAM) with a SAML identity provider (IdP) linked to the on-premises Active Directory, and create a role to grant access. Configure AWS Organizations with SCPs and create new member accounts. Use AWS CloudFormation templates to configure the member account networking.
    - [ ] B. Deploy an AWS Control Tower landing zone. Create an AD Connector linked to the on-premises Active Directory. Change the identity source in AWS Single Sign-On to use Active Directory. Allow department administrators to use Account Factory to create new member accounts and networking. Grant the departments AWS power user permissions on the created accounts.
    - [ ] C. Deploy an Amazon Cloud Directory. Create a two-way trust relationship with the on-premises Active Directory, and create a role to grant access. Set up an AWS Service Catalog to use AWS CloudFormation templates to create the new member accounts and networking. Use IAM roles to allow access to approved AWS services.
    - [ ] D. Configure AWS Directory Service for Microsoft Active Directory with AWS Single Sign-On. Join the service to the on-premises Active Directory. Use AWS CloudFormation to create new member accounts and networking. Use IAM roles to allow access to approved AWS services.

    <details>
       <summary>Answer</summary>

       答案B -> [ref](https://docs.aws.amazon.com/zh_cn/controltower/latest/userguide/what-is-control-tower.html)

    </details>

76. A company runs a software-as-a-service (SaaS) application on AWS. The application consists of AWS Lambda functions and an Amazon RDS for MySQL Multi-AZ database. During market events the application has a much higher workload than normal. Users notice slow response times during the peak period because of many database connections. The company needs to improve the scalable performance and availability of the database. Which solution meets these requirements?
    - [ ] A. Create an Amazon CloudWatch alarm action that triggers a Lambda function to add an Amazon RDS for MySQL read replica when resource utilization hits a threshold.
    - [ ] B. Migrate the database to Amazon Aurora, and add a read replica. Add a database connection pool outside of the Lambda handler function.
    - [ ] C. Migrate the database to Amazon Aurora, and add a read replica. Use Amazon Route 53 weighted records.
    - [ ] D. Migrate the database to Amazon Aurora, and add an Aurora Replica. Configure Amazon RDS Proxy to manage database connection pools.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

77. A company stores customer data in an Amazon S3 bucket with S3 Versioning enabled in the us-west-2 Region. The S3 bucket is encrypted with an AWS Key Management Service (AWS KMS) customer managed CMK. A compliance policy states that redundant copies of all S3 objects must be stored in the us-east-2 Region. The S3 buckets are allowed to stay in the same AWS account. Which combination of steps will meet these requirements with the LEAST operational effort? (Select THREE.)
    - [ ] A. Configure an AWS Lambda function that copies objects to the us-east-2 bucket and is triggered when objects are created in the us-west-2 bucket.
    - [ ] B. Create a destination S3 bucket in us-east-2 with S3 Versioning enabled.
    - [ ] C. Set up S3 Cross-Region Replication between the two S3 buckets.
    - [ ] D. Create and assign an S3 bucket policy that allows reading from the source S3 bucket.
    - [ ] E. Create and assign to Amazon S3 an IAM role with a policy that allows reading from the source S3 bucket and replication to the destination S3 bucket.
    - [ ] F. Create a destination S3 bucket in us-east-2.

    <details>
       <summary>Answer</summary>

       答案BCD。

    </details>

78. A company that runs applications on AWS recently subscribed to a new software-as-a-service (SaaS) data vendor. The vendor provides the data by way of a REST API that the vendor hosts in its AWS environment. The vendor offers multiple options for connectivity to the API and is working with the company to find the best way to connect. The company’s AWS account does not allow outbound internet access from its AWS environment. The vendor's services run on AWS in the same Region as the company's applications. A solutions architect must implement connectivity to the vendor's API so that the API is highly available in the company's VPC. Which solution will meet these requirements?
    - [ ] A. Connect to the vendor's public API address for the data service.
    - [ ] B. Connect to the vendor by way of a VPC peering connection between the vendor's VPC and the company's VPC.
    - [ ] C. Connect to the vendor by way of a VPC endpoint service that uses AWS PrivateLink.
    - [ ] D. Connect to a public bastion host that the vendor provides. Tunnel the API traffic.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

79. A company recently deployed multiple Amazon Elastic File System (Amazon EFS) file systems in an AWS account. The company wants to access the EFS file systems in Amazon Linux EC2 instance in a second AWS account. Permissions are already granted from the source account. Which combination of actions should the solutions architect recommend meeting these requirements? (Select TWO.)
    - [ ] A. Add a line to the `/etc/hosts` file on the EC2 instance that references the FileSystemld of the EFS file system.
    - [ ] B. Call the DescribeMountTargets operation in the source account for the file system to identify the mount target name for the Availability Zone that matches the Availability Zone of the EC2 instance.
    - [ ] C. Add a line to the `/etc/hosts` file on the EC2 instance that references the MountTargetld of the EFS mount target.
    - [ ] D. Call the DescribeMountTargets operation in the source account for the file system to identify the mount target IP address for the Availability Zone that matches the Availability Zone of the EC2 instance.
    - [ ] E. Add a line to the `/etc/hosts` file on the EC2 instance that references the IpAddress of the EFS mount target.

    <details>
       <summary>Answer</summary>

       答案AD。

    </details>

80. A solutions architect needs to provide AWS Cost and Usage Report data from a company's AWS Organizations master account. The company already has an Amazon S3 bucket to store the reports. The reports must be automatically ingested into a database that can be visualized with other tools. Which combination of steps should the solutions architect take to meet these requirements? (Select Three)
    - [ ] A. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that a new object creation in the S3 bucket will trigger.
    - [ ] B. Create an AWS Cost and Usage Report configuration to deliver the data into the S3 bucket.
    - [ ] C. Configure an AWS Glue crawler that a new object creation in the S3 bucket will trigger.
    - [ ] D. Create an AWS Lambda function that a new object creation in the S3 bucket will trigger.
    - [ ] E. Create an AWS Glue crawler that the AWS Lambda function will trigger to crawl objects in the S3 bucket.
    - [ ] F. Create an AWS Glue crawler that the Amazon EventBridge (Amazon CloudWatch Events) rule will trigger to crawl in the S3 bucket.

    <details>
       <summary>Answer</summary>

       答案BDE。

    </details>

81. A company runs several workloads on a mix of Amazon EC2 instances and Amazon RDS instances. The company is using an organization in AWS Organizations to manage multiple AWS accounts. The company's security standards require evaluation of AWS resources against the CIS Benchmarks and to automatically remediate issues where possible. What should a solutions architect recommend meeting these requirements?
    - [ ] A. Enable AWS Config in all accounts in the organization. Create an Amazon S3 bucket in an account within the organization to store the AWS Config compliance reports. Deploy a conformance pack across the organization to implement the required CIS controls and remediate issues.
    - [ ] B. Use AWS OpsWorks for Chef Automate in all accounts in the organization. Create an Amazon S3 bucket in an account within the organization. Deploy Chef cookbooks to implement the required CIS controls to the EC2 instances and use OpsWorks for Chef Automate to deploy the cookbooks.
    - [ ] C. Use AWS Systems Manager Configuration Compliance to scan compliance of the resources in AWS against the required CIS controls. Use Systems Manager Patch Manager to apply any needed remediation on noncompliant EC2 instances. Use AWS Lambda functions for the other remediation on Amazon RDS.
    - [ ] D. Enable Amazon Inspector to audit the environment against the CIS controls ingest results from Amazon Inspector into AWS (Amazon CloudWatch Events) to schedule AWS Lambda functions to remediate issues.

    <details>
       <summary>Answer</summary>

       答案D -> [ref](https://docs.aws.amazon.com/zh_cn/inspector/latest/userguide/inspector_cis.html)

    </details>

82. A company needs to architect a hybrid DNS solution. This solution will use an Amazon Route 53 private hosted zone for the domain cloud.example.com for the resources stored within VPCs. The company has the following DNS resolution requirements: - On-premises systems should be able to resolve and connect to `cloud.example.com`. -All VPCs should be able to resolve cloud.example.com.- There is already an AWS Direct Connect connection between the on-premises corporate network and AWS Transit Gateway. Which architecture should the company use to meet these requirements with the HIGHEST performance?
    - [ ] A. Associate the private hosted zone to all the VPCs. Create a Route 53 inbound resolver in the shared services VPC. Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for `cloud.example.com` that point to the inbound resolver.
    - [ ] B. Associate the private hosted zone to all the VPCs. Deploy an Amazon EC2 conditional forwarder in the shared services VPC. Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for `cloud.example.com` that point to the conditional forwarder.
    - [ ] C. Associate the private hosted zone to the shared services VPC. Create a Route 53 outbound resolver in the shared services VPC. Attach all VPCs to the transit gateway and create forwarding rules in the on-premises DNS server for `cloud.example.com` that point to the outbound resolver.
    - [ ] D. Associate the private hosted zone to the shared services VPC. Create a Route 53 inbound resolver in the shared services VPC. Attach the shared services VPC to the transit gateway and create forwarding rules in the on-premises DNS server for `cloud.example.com` that point to the inbound resolver.

    <details>
       <summary>Answer</summary>

       当需要在多个VPC和AWS账户中解析Route 53私有托管区域时，最可靠的模式是在账户之间共享私有托管区域并将其关联到每个需要它的VPC，答案A -> [ref](https://aws.amazon.com/cn/blogs/networking-and-content-delivery/centralized-dns-management-of-hybrid-cloud-with-amazon-route-53-and-aws-transit-gateway/)

    </details>

83. A company runs a proprietary stateless ETL application on an Amazon EC2 Linux instance. The application is a Linux binary, and the source code cannot be modified. The application is single-threaded, uses 2 GB of RAM and is highly CPU intensive. The application is scheduled to run every 4 hours and runs for up to 20 minutes. A solutions architect wants to revise the architecture for the solution. Which strategy should the solutions architect use?
    - [ ] A. Use AWS Lambda to run the application. Use Amazon CloudWatch Logs to invoke the Lambda function every 4 hours.
    - [ ] B. Use AWS Batch to run the application. Use an AWS Step Functions state machine to invoke the AWS Batch job every 4 hours.
    - [ ] C. Use AWS Fargate to run the application. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke the Fargate task every 4 hours.
    - [ ] D. Use Amazon EC2 Spot Instances to run the application. Use AWS CodeDeploy to deploy and run the application every 4 hours.

    <details>
       <summary>Answer</summary>

       源代码无法修改，答案B。

    </details>

84. A multimedia company needs to deliver its video-on-demand (VOD) content to its subscribers in a cost-effective way. The video files range in size from 1-15 GB and are typically viewed frequently for the first 6 months after creation, and then access decreases considerably. The company requires all video files to remain immediately available for subscribers. There are now roughly 30,000 files, and the company anticipates doubling that number over time. What is the MOST cost-effective solution for delivering the company's VOD content?
    - [ ] A. Store the video files in an Amazon S3 bucket using S3 Intelligent-Tiering. Use Amazon CloudFront to deliver the content with the S3 bucket as the origin.
    - [ ] B. Use AWS Elemental MediaConvert and store the adaptive bitrate video files in Amazon S3. Configure an AWS Elemental MediaPackage endpoint to deliver the content from Amazon S3.
    - [ ] C. Store the video files in Amazon Elastic File System (Amazon EFS) Standard. Enable EFS lifecycle management to move the video files to EFS Infrequent Access after 6 months. Create an Amazon EC2 Auto Scaling group behind an Elastic Load Balancer to deliver the content from Amazon EFS.
    - [ ] D. Store the video files in Amazon S3 Standard. Create S3 Lifecycle rules to move the video files to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months and to S3 Glacier Deep Archive after 1 year. Use Amazon CloudFront to deliver the content with the S3 bucket as the origin.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

85. A company has implemented an ordering system using an event driven architecture. During initial testing, the system stopped processing orders. Further log analysis revealed that one order message in an Amazon Simple Queue Service (Amazon SQS) standard queue was causing an error on the backend and blocking all subsequent order messages. The visibility timeout of the queue is set to 30 seconds, and the backend processing timeout is set to 10 seconds. A solutions architect needs to analyze faulty order messages and ensure that the system continues to process subsequent messages. Which step should the solutions architect take to meet these requirements?
    - [ ] A. Increase the backend processing timeout to 30 seconds to match the visibility timeout.
    - [ ] B. Reduce the visibility timeout of the queue to automatically remove the faulty message.
    - [ ] C. Configure a new SQS FIFO queue as a dead-letter queue to isolate the faulty messages.
    - [ ] D. Configure a new SQS standard queue as a dead-letter queue to isolate the faulty messages.

    <details>
       <summary>Answer</summary>

       答案D -> [ref](https://docs.aws.amazon.com/zh_cn/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)

    </details>

86. A company has 50 AWS accounts that are members of an organization in AWS Organizations. Each account contains multiple VPCs. The company wants to use AWS Transit Gateway to establish connectivity between the VPCs in each member account. Each time a new member account is created, the company wants to automate the process of creating a new VPC and a transit gateway attachment. Which combination of steps will meet these requirements? (Select TWO.)
    - [ ] A. From the master account, share the transit gateway with member accounts by using AWS Resource Access Manager.
    - [ ] B. From the master account, share the transit gateway with member accounts by using an AWS Organizations SCP.
    - [ ] C. Launch an AWS CloudFormation stack set from the master account that automatically creates a new VPC and a VPC transit gateway attachment in a member account. Associate the attachment with the transit gateway in the master account by using the transit gateway ID.
    - [ ] D. Launch an AWS CloudFormation stack set from the master account that automatically creates a new VPC and a peering transit gateway attachment in a member account. Share the attachment with the transit gateway in the master account by using a transit gateway service-linked role.
    - [ ] E. From the master account, share the transit gateway with member accounts by using AWS Service Catalog.

    <details>
       <summary>Answer</summary>

       答案AD。

    </details>

87. A finance company hosts a data lake in Amazon S3. The company receives financial data records over SFTP each night from several third panies. The company luns its own SFTP server on an Amazon EC2 instance in a public subnet ofa VPC. After the files are uploaded, they are moved to the data lake by a cronjob that runs on the same instance. The SFTP server is reachable on DNS sftp.example.com through the use of Amazon Route 53. What should a solutions architect do to improve the reliability and scalability of the SFTP solution?
    - [ ] A. Move the EC2 instance into an Auto Scaling group. Place the EC2 instance behind an Application Load Balancer (ALB). Update the DNS record sftp.example.com in Route 53 to point to the ALB.
    - [ ] B. Migrate the SFTP server to AWS Transfer for SFTP. Update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname.
    - [ ] C. Migrate the SFTP server to a file gateway in AWS Storage Gateway. Update the DNS record sftp.example.com in Route 53 to point to the file gateway endpoint.
    - [ ] D. Place the EC2 instance behind a Network Load Balancer (NLB). Update the DNS record sftp.example.com in Route 53 to point to the NLB.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

88. A scientific company needs to process text and image data during a live, time-critical phase of a deep space mission. The radar stations upload the data to the source S3 bucket. The data is prefixed by radar station identification number. The company created a destination S3 bucket in a second account. Data must be copied from the source S3 bucket to the destination S3 bucket to meet a compliance objective. This replication occurs using an S3 replication rule to cover all objects in the source S3 bucket. One specific radar station is identified as having the most accurate data. Data replication at this radar station must be monitored for completion within 30 minutes after the radar station uploads the objects to the source S3 bucket. What should a solutions architect do to meet these requirements?
    - [ ] A. Set up an AWS DataSync agent to replicate the prefixed data from the source S3 bucket to the destination S3 bucket. Select to use at available bandwidth on the task and monitor the task to ensure that it is in the `TRANSFERRING` status. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert if this status changes.
    - [ ] B. In the second account, create another S3 bucket to receive data from the radar station with the most accurate data. Set up a new replication rule for this new S3 bucket to separate the replication from the other radar stations. Monitor the maximum replication time to the destination. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert when the time exceeds the desired threshold.
    - [ ] C. Enable Amazon S3 Transfer Acceleration on the source S3 bucket, and configure the radar station with the most accurate data to use the new endpoint. Monitor the S3 destination bucket's TotalRequestLatency metric. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert if this status changes.
    - [ ] D. Create a new S3 replication rule on the source S3 bucket that filters for the keys that use the prefix of the radar station with the most accurate data. Enable S3 Replication Time Control (S3 RTC). Monitor the maximum replication time to the destination. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to trigger an alert when the time exceeds the desired threshold.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

89. A software development company has multiple engineers who are working remotely. The company is running Active Directory Domain Services (AD DS) on anAmazon EC2 instance. The company's security policy states that all internal, nonpublic sewices that are deployed in a VPC must be accessible through a VPN. Multi-factor authentication (MFA) must be used for access to a VPN. What should a solutions architect do to meet these requirements?
    - [ ] A. Create an AWS Site-to-Site VPN connection. Configure integration between a VPN and AD DS. Use an Amazon Workspaces client with MFA support enabled to establish a VPN connection.
    - [ ] B. Create an AWS Client endpoint. Create an AD Connector directory for integration with AD DS. Enable MFA for AD Connector. Use AWS Client VPN to establish a VPN connection.
    - [ ] C. Create multiple AWS Site-to-Site VPN connections by using AWS CloudHub. Configure integration between AWS VPN CloudHub and AD DS. Use AWS Copilot to establish a VPN connection.
    - [ ] D. Create an Amazon WorkLink endpoint. Configure integration between Amazon WorkLink and AD DS. Enable MFA in Amazon WorkLink. Use AWS Client VPN to establish a VPN co nection.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

90. A large company in Europe plans to migrate its applications to the AWS Cloud. The company uses multiple AWS accounts for various business group. A data privacy law requires the company to restrict developers' access to AWS European Regions only. What should the solutions architect do to meet this requirement with the LEAST amount of management overhead?
    - [ ] A. Create IAM users and IAM groups in each account. Create IAM policies to limit access to non-European Regions. Attach the IAM policies to the IAM groups.
    - [ ] B. Enable AWS Organizations, attach the AWS accounts, and create OUS for European Regions and non-European Regions. Create SCPs to limit access to non-European Regions and attach the policies to the OUs.
    - [ ] C. Set up AWS Single Sign-On and attach AWS accounts. Create permission sets with policies to restrict access to non-European Regions. Create IAM users and IAM groups in each account.
    - [ ] D. Enable AWS Organizations, attach the AWS accounts, and create OUS for European Regions and non-European Regions. Create permission sets with policies to restrict access 10 non-European Regions. Create IAM users and IAM groups in the primary account.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

91. A company is planning to host a web application on AWS and wants to load balance the traffic across a group of Amazon EC2 instances. One of the security requirements is to enable end-to-end encryption in transit between the client and the web server. Which solution will meet this requirement?
    - [ ] A. Place the EC2 instances behind an Application Load Balancer (ALB). Provision an SSL certificate using AWS Certificate Manager (ACM) and associate the SSL certificate with the ALB. Export the SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.
    - [ ] B. Associate the EC2 instances with a target group. Provision an SSL certificate using AWS Certificate Manager (ACM). Create an Amazon CloudFront distribution and configure it to use the SSL certificate. Set CloudFront to use the target group as the origin server.
    - [ ] C. Place the EC2 instances behind an Application Load Balancer (ALB). Provision an SSL certificate using AWS Certificate Manager (ACM) and associate the SSL certificate with the ALB. Provision a third-party SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.
    - [ ] D. Place the EC2 instances behind a Network Load Balancer (NLB). Provision a third-party SSL certificate and install it on the NLB and on each EC2 instance. Configure the NLB to listen on port 443 and to forward traffic to port 443 on the instances.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

92. A company has two VPCs within the same AWS account that are connected through a transit gateway. A solutions architect adds a new subnet to one of the VPCs. Resources that are hosted in the new subnet are not able to communicate with resources in the other VPC. What should the solutions architect do to allow network traffic communication?
    - [ ] A. Configure the new subnet to propagate to the appropriate transit gateway route table. Associate the new subnet with the appropriate VPC route able.
    - [ ] B. Create a new static route within the transit gateway route table. Associate the new subnet with the appropriate VPC route table.
    - [ ] C. Update the transit gateway attachment to include the new subnet. Define a new static route within the transit gateway route table.
    - [ ] D. Update the transit gateway attachment to include the new subnet. Associate the new subnet with the appropriate VPC route table.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

93. A company is running several workloads in a single AWS account. A new company policy stales that engineers can provision only approved resources and that engineer must use AWS CloudFormation to provision these resources. A solutions architect needs to create a solution to enforce the new restriction on the IAM role that the engineers use for access. What should the solutions architect do to create the solution?
    - [ ] A. Upload AWS CloudFormation templates that contain approved resources to an Amazon S3 bucket. Update the IAM policy for the engineers' IAM role to only allow access to Amazon S3 and AWS CloudFormation. Use AWS CloudFormation templates to provision resources.
    - [ ] B. Update the IAM policy for the engineers’ IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation templates to create stacks with approved resources.
    - [ ] C. Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision approved resources and assign the policy to a new IAM service role. Using the IAM service role to AWS CloudFormation during stack creation.
    - [ ] D. Provision resources in AWS CloudFormation stacks. Update the IAM policy for the engineers' IAM role to only allow access to their own AWS CloudFormation stack.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

94. A company that develops consumer electronics with offices in Europe and Asia has 60 TB of software images stored on premises in Europe. The company wants to transfer the images to an Amazon S3 bucket in the ap-northeast-1 Region. New software images are created daily and must be encrypted in transit. The company needs a solution that does not require custom development to automatically transfer all existing and new software images to Amazon S3. What is the next step in the transfer process?
    - [ ] A. Deploy an AWS DataSync agent and configure a task to transfer the images to the S3 bucket.
    - [ ] B. Configure Amazon Kinesis Data Firehose to transfer the images using S3 Transfer Acceleration.
    - [ ] C. Use an AWS Snowball device to transfer the images with the S3 bucket as the target.
    - [ ] D. Transfer the images over a Site-to-Site VPN connection using the S3 API with multipart upload.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

95. A company has an organization in AWS Organizations that has many AWS accounts. One of the AWS accounts is designated as a transit account and has a transit gateway that is shared with all the other AWS accounts. AWS Site-to-Site VPN connections are configured between all the company's global offices and the transit account. The company has AWS Config enacted on all its accounts. The company's networking team needs to centrally manage a list of internal IP address ranges that belong to the global offices. Developers will reference this list to gain access to their applications securely. Which solution meets these requirements with the LEAST amount of operational overhead?
    - [ ] A. Create a JSON file that is hosted in Amazon S3 and that lists all the internal IP address ranges. Configure an Amazon Simple Notification Service (Amazon SNS) topic in each of the accounts that can be invoked when the JSON file is updated. Subscribe an AWS Lambda function to the SNS topic to update all relevant security group rules with the updated IP address.
    - [ ] B. Create a new AWS Config managed rule that contains all the internal IP address ranges. Use the rule to check the security groups in each of the accounts to ensure compliance with the list of IP address ranges. Configure the rule to automatically remediate any noncompliant security group that is detected.
    - [ ] C. In the transit account, create a VPC prefix list with all the internal IP address ranges. Use AWS Resource Access Manager to share the prefix list with all the other accounts. Use the snored prefix list to configure security group rules in the other accounts.
    - [ ] D. In the transit account, create a security group with all the internal IP address ranges. Configure the security groups in the other accounts to reference the transit account's security group by using a nested security group reference of `/sg- la2b3c4d`.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

96. A company wants to migrate its data analytics environment from on premises to AWS. The environment consists of two Node.js applications. One of the applications collects sensor data and loads it into a MySQL database. The other application aggregates the data into reports. When the aggregation jobs run. Some of the load jobs fail to run correctly. The company must resolve the data loading issue. The company also needs the migration to occur without interruptions or changes for the company's customers. What should a solutions architect do to meet those requirements?
    - [ ] A. Set up an Amazon Aurora MySQL database as a replication target for the on-premises database. Create an Aurora Replica for the Aurora MySQL database and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind a Network Load Balancer (NLB) and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, disable the replication job, and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NLB.
    - [ ] B. Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Move the aggregation jobs to run against the Aurora MySQL database. Set up collection endpoint behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group. When the databases arc synced, point the collector DNS record to the ALB. Disable the AWS DMS sync task after the cutover from on premises to AWS.
    - [ ] C. Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Create an Aurora Replica for the Aurora MySQL database and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer (ALB) and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, point the collector DNS record to the ALB. Disable the AWS DMS sync task alter the cutover from on premises to AWS.
    - [ ] D. Sot up an Amazon Aurora MySQL database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as an Amazon Kinesis data stream.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

97. A company is planning to migrate an application from on premises to the AWS Cloud. The company will begin the migration by moving the application’s underlying data storage to AWS. The application data is stored on a shared file system on premises, and the application servers connect to the shared file system through SMB. A solutions architect must implement a solution that uses an Amazon S3 bucket for shared storage. Until the application is fully migrated, and code is rewritten to use native Amazon S3 APIs. the application must continue to have access to the data through SMB. The solutions architect must migrate the application data to AWS to its new location while still allowing the on-premises application to access the data. Which solution will meet these requirements?
    - [ ] A. Create a new Amazon FSx for Windows File Server fie system. Configure AWS DataSync with are location for the on-premises file share and are location for the new Amazon FSx file system. Create a new DataSync task to copy the data from the on-premises file share location to the Amazon FSx file system.
    - [ ] B. Create an S3 bucket for the application. Copy the data from the on-promises storage to the S3 bucket.
    - [ ] C. Deploy an AWS Server Migration Service (AWS SMS) VM to the on-premises environment. Use AWS SMS to migrate the fie storage sender from on premises to an Amazon EC2 instance.
    - [ ] D. Create an S3 bucket for the application. Deploy a new AWS Storage Gateway file gateway on an on-premises VM. Create a nw file share that stores data in the S3 bucket and is associated with the file gateway. Copy the data from the on-premises storage to the new file gateway endpoint.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

98. A software company has deployed a web application on AWS in a VPC. The application uses an Application Load Balancer and Amazon EC2 instances in an Auto Scaling group for the application tier. The EC2 instances access an IBM Db2 database that is hosted on separate EC2 instances Db2 credentials are stored in the configuration file on the application tier and are deployed with AWS AppConfig. The company has a new requirement to prove that the learn in charge of the operations of the platform cannot access the cleartext data that is stored in Db2. A solutions architect must implement a solution to meet this requirement with the least possible redevelopment needed. Which combination of steps should the solutions architect lake?
    - [ ] A. Use an AWS managed CMK to ensure that EBS disks for the EC2 instances are encrypted. Edit the key policy to ensure that only the roles provided to the EC2 instances in the application tier are allowed to use the key.
    - [ ] B. Use a customer managed CMK to ensure that EBS disks for the EC2 instances are encrypted. Edit the key policy to ensure that only the roles provided to the EC2 instances in the application tier are allowed to use the key.
    - [ ] C. Use AWS Certificate Manager (ACM) to implement mutual authentication between the application and the database.
    - [ ] D. Use AWS Secrets Manager to ensure that a password is not stored in the application configuration.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

99. A company is building a hybrid solution between its existing on-premises systems and a new backend in AWS. The company has a management application to monitor the state of its current IT infrastructure and automate responses to issues. The company wants to incorporate the status of its consumed AWS services into the application. The application uses an HTTPS endpoint to receive updates. Which approach meets these requirements with the LEAST amount of operational overhead?
    - [ ] A. Configure AWS Systems Manager OpsCenter to ingest operational events from the on-premises systems. Retire the on-premises management application and adopt OpsCenter as the hub.
    - [ ] B. Configure Amazon EventBridge (Amazon CloudWatch Events) to detect and react to changes for AWS Health events from the AWS Personal Health Dashboard. Configure the EventBndge (CloudWatch Events) event to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the topic to the HTTPS endpoint of the management application.
    - [ ] C. Modify the on-premises management application to call the AWS Health API to poll for status events of AWS services.
    - [ ] D. Configure Amazon EventBndge (Amazon CloudWatch Events) to detect and react to changes for AWS Health events from the AWS Service Health Dashboard. Configure the EventBridge (CloudWatch Events) event to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the topic to an HTTPS endpoint for the management application with a topic filter corresponding to the services being used.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

100. The company requires the lowest possible networking latency to achieve maximum performance. Which solution will meet these requirements?
     - [ ] A. Launch memory optimized EC2 instances in a partition placement group
     - [ ] B. Launch compute optimized EC2 instances in a partition placement group
     - [ ] C. Launch memory optimized EC2 instances in a cluster placement group
     - [ ] D. Launch compute optimized EC2 instances in a spread placement group

     <details>
       <summary>Answer</summary>

       答案A。

     </details>

101. A company is running a serverless application that consists of several AWS Lambda functions and Amazon DynamoDB tables. The company has created new functionality that requires the Lambda functions to access an Amazon Neptune DB cluster. The Neptune DB cluster is in three subnets in a VPC. Which of the possible solutions will allow the Lambda functions to access the Neptune DB cluster and DynamoDB tables? (Select TWO.)
     - [ ] A. Create three public subnets in the Neptune VPC, and route traffic through an internet gateway. Host the Lambda functions in the three new public subnets.
     - [ ] B. Create three private subnets in the Neptune VPC, and route internet traffic through a NAT gateway. Host the Lambda functions in the three new private subnets.
     - [ ] C. Host the Lambda functions outside the VPC. Create a VPC endpoint for the Neptune database and have the Lambda functions access Neptune over the VPC endpoint.
     - [ ] D. Create three private subnets in the Neptune VPC. Host the Lambda functions in the three new isolated subnets. Create a VPC endpoint for DynamoDB. and route DynamoDB traffic to the VPC endpoint.

     <details>
       <summary>Answer</summary>

       答案CD。

     </details>

102. A company that designs multiplayer online games wants to expand its user base outside of Europe. The company transfers a significant amount of UDP traffic to keep all the live and interactive sessions of the games. The company has plans for rapid expansion and wants to build its architecture to provide an optimized online experience to its users. Which architecture will meet these requirements with the LOWEST latency for users?
     - [ ] A. Set up a multi-AZ environment in a single AWS Region. Use Amazon CloudFront to cache user sessions.
     - [ ] B. Set up environments in multiple AWS Regions. Create an accelerator in AWS Global Accelerator and add endpoints from different Regions to it.
     - [ ] C. Set up environments in multiple AWS Regions. Use Amazon Route 53 and select latency-based routing.
     - [ ] D. Set up a multi-AZ environment in a single AWS Region. Use AWS Lambda@Edge to update sessions closer to the users.

     <details>
       <summary>Answer</summary>

       答案B。

     </details>

103. A company is running multiple workloads in the AWS Cloud. The company has separate units for software development. The company uses AWS Organizations and federation with SAML to give permissions to developers to manage resources in their AWS accounts. The development units each deploy their production workloads into a common production account. Recently, an incident occurred in the production account in which members of a development unit terminated an EC2 instance that belonged to a different development unit. A solutions architect must create a solution that prevents a similar incident from happening in the future. The solution also must allow developers the possibility to manage the instances used for their workloads. Which strategy will meet these requirements?
     - [ ] A. Create separate OUs in AWS Organizations for each development unit. Assign the created OUs to the company AWS accounts. Create separate SCPs with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag that matches the development unit name. Assign the SCP to the corresponding OU.
     - [ ] B. Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Update the AM policy for the developers‘ assumed IAM role with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit.
     - [ ] C. Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag curing SAML federation. Create an SCP with an allow action and a StringEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit. Assign the SCP to the root OU.
     - [ ] D. Create separate IAM policies for each development unit. For every IAM policy, add an allow action and a StringEquals condition for the DevelopmentUnit resource tag and the development unit name. During SAML federation, use AWS Security Token Service (AWS STS) to assign the IAM policy and match the development unit name to the assumed IAM role.

     <details>
       <summary>Answer</summary>

       答案D。

     </details>

104. A marketing company is migrating an application that stores data on premises in a PostgreSQL database. The company wants to migrate the database to Amazon Aurora PostgreSQL. The database size grows at an average rate of 5 GB daily and is currently 50 TB. The data center has an internet connection with 50 Mbps of available bandwidth. The migration to AWS must be completed as soon as possible within the next 45 days. Which data transfer strategy meets those requirements with the LEAST amount of application downtime?
     - [ ] A. Take the application offline. Create a local backup of the database. Transmit the database backup file over the existing connection to an Amazon S3 bucket. Use native database tools to restore the backup onto the new database and to set up replication to capture any changes since the backup. Modify the database connection string and bring the application online.
     - [ ] B. Install the Server Migration Connector VM in the local data center. Use the AWS Server Migration Service (AWS SMS) console to replicate the on-premises database to the new database. Modify DNS records to point to the new database.
     - [ ] C. Create a local backup of the database and copy the backup onto an AWS Snowball Edge Storage Optimized device. Ship the device to AWS. Use native database tools to restore the backup onto the new database from Amazon S3 and to set up replication with the source database to capture any changes since the backup. Modify DNS records to point to the new database.
     - [ ] D. Take the application offline. Back up the database to a shared local file system. Install an AWS DataSync agent on a VM in the data center. Configure the file system as the source location and configure an Amazon S3 bucket as the destination. Use native database tools to restore the backup onto the new database. Modify the database connection string and bring the application online.

     <details>
       <summary>Answer</summary>

       答案C。

     </details>

105. A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC. A solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region. The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions. Which solution meets these requirements?
     - [ ] A. Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interlace on each connection and connect both private victual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC.
     - [ ] B. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VPC.
     - [ ] C. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new public virtual interface on the new connection, and connect the new public virtual interface to the single VPC.
     - [ ] D. Provision a transit gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection and connect both private virtual interfaces to the transit gateway. Associate the transit gateway with the single VPC.

     <details>
       <summary>Answer</summary>

       答案A。

     </details>

106. A company runs an application on AWS. An AWS Lambda function uses credentials to authenticate to an Amazon RDS tor MySQL DB instance. A security risk assessment identified that these credentials are not frequently rotated. Also, encryption at rest is not enabled for the DB instance. The security team requires that both issues be resolved. Which strategy should a solutions architect recommend to remediate these security risks?
     - [ ] A. Configure the Lambda function to store and retrieve the database credentials in AWS Secrets Manager and enable rotation of the credentials. Take a snapshot to the DB instance and encrypt a copy of that snapshot. Replace the DB instance with a new DB instance that is based on the encrypted snapshot.
     - [ ] B. Enable IAM DB authentication on the DB instance. Grant the Lambda execution role access to the DB instance. Modify the DB instance and enable encryption.
     - [ ] C. Enable IAM DB authentication on the DB instance. Grant the Lambda execution role access to the DB instance. Create an encrypted read replica of the DB instance. Promote the encrypted read replica to be the new primary node.
     - [ ] D. Configure the Lambda function to store and retrieve the database credentials as encrypted AWS Systems Manager Parameter Store parameters. Create another Lambda function to automatically rotate the credentials. Create an encrypted read replica of the DB instance. Promote the encrypted read replica to be the new primary node.

     <details>
       <summary>Answer</summary>

       答案A。

     </details>

107. The company has deployed an Amazon CloudFront distribution that has the ALB as the only origin. Which solution should a solutions architect recommend enhancing the origin security?
     - [ ] A. Store a random string in AWS Secrets Manager. Create an AWS Lambda function for automatic secret rotation. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Create an AWS WAF web ACL rule with a string match rule for the custom header. Associate the web ACL with the ALB.
     - [ ] B. Create an AWS WAF web ACL rule with an IP match condition of the CloudFront service IP address ranges. Associate the Web ACL with the ALB. Move into the tree private subnets.
     - [ ] C. Store a random string in AWS Systems Manager Parameter Store. Configure Parameter Store automatic rotation for the string. Configure CloudFront to inject the random siring as a custom HTTP header for the origin request. Inspect the value of the custom HTTP header, and block access in the ALB.
     - [ ] D. Configure AWS Shield Advanced. Create a security group policy to allow connections from CloudFront service IP address ranges. Add the policy to AWS Shield Advanced, and attach the policy to the ALB.

     <details>
       <summary>Answer</summary>

       答案A。

     </details>

108. A financial company is building a system to generate monthly, immutable bank account statements (or its users). Statements are stored in Amazon S3. Users should have immediate access to their monthly statements for up to 2 years. Some users access their statements frequently, whereas others rarely access their statements. The company's security and compliance policy require that the statements be retained for at least 7 years. What is the MOST cost-effective solution to meet the company's needs?
     - [ ] A. Create an S3 bucket with Object Lock disabled. Store statements in S3 Standard. Define an S3 Lifecycle policy to transition the data to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days. Define another S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.
     - [ ] B. Create an S3 bucket with versioning enabled. Store statements in S3 Intelligent-Tiering. Use same-Region replication to replicate objects to a backup S3 bucket. Define an S3 Lifecycle policy for the backup S3 bucket to move the data to S3 Glacier. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.
     - [ ] C. Create an S3 bucket with Object Lock enabled. Store statements in S3 Intelligent-Tiering. Enable compliance mode with a default retention period of 2 years. Define an S3 Lifecycle policy to move the data to S3 Glacier after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.
     - [ ] D. Create an S3 bucket with versioning disabled. Store statements in S3 One Zone-Infrequent Access (S3 One Zone-IA). Define an S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after 2 years. Attach an S3 Glader Vault Lock policy with deny delete permissions for archives less than 7 years old.

     <details>
       <summary>Answer</summary>

       答案C。

     </details>

109. A company is running an application distributed over several Amazon EC2 instances in an Auto Seating group behind an Application Load Balancer. The security team requires that all application access attempts be made available for analysis information about the client IP address, connection type, and user agent must be included. Which solution will meet these requirements?
     - [ ] A. Enable EC2 detailed monitoring, and include network logs. Send all logs through Amazon Kinesis Data Firehose to an Amazon Elasticsearch Service (Amazon ES) cluster that the security team uses for analysis.
     - [ ] B. Enable VPC Flow Logs for all EC2 instance network interfaces. Publish WTC Flow Logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs.
     - [ ] C. Enable access logs for the Application Load Balancer, and publish the logs to an Amazon S3 bucket. Have the security team use Amazon Athena to query and analyze the logs
     - [ ] D. Enable Traffic Mirroring and specify all EC2 instance network interfaces as the source. Send all traffic information through Amazon Kinesis Data Firehose to an Amazon Elasticsearch Service (Amazon ES) cluster that the security team uses for analysis.

     <details>
       <summary>Answer</summary>

       答案D。

     </details>

110. A company uses AWS Transit Gateway for a hub-and-spoke model to manage network traffic between many VPCs. The company is developing a new service that must be able to send data at 100 Gbps. The company needs a faster connection to other VPCs in the same AWS Region. Which solution will meet these requirements?
     - [ ] A. Establish VPC peering between the necessary VPCs.Ensure that all route tables are updated as required.
     - [ ] B. Attach an additional transit gateway to the VPCs.Update the route tables accordingly.
     - [ ] C. Create AWS Site-to-Site VPN connections that use equal-cost multi-path (ECMP) routing between the necessary VPCs.
     - [ ] D. Create an additional attachment from the necessary VPCs to the existing transit gateway.

     <details>
       <summary>Answer</summary>

       答案D。

     </details>

111. A company has a policy that all Amazon EC2 instances that are running a database must exist within the same subnets in a shared VPC. Administrators must follow security compliance requirements and are not allowed to directly log in to the shared account. All company accounts are members of the same organization in AWS Organizations. The number of accounts will rapidly increase as the company grows. A solutions architect uses AWS Resource Access Manager to create a resource share in the shared account. What is the MOST operationally efficient configuration to meet these requirements?
     - [ ] A. Add the VPC to the resource share. Add the account IDs as principals.
     - [ ] B. Add all subnets within the VPC to the resource share. Add the account IDs as principals.
     - [ ] C. Add all subnets within the VPC to the resource share. Add the organization as a principal.
     - [ ] D. Add the VPC to the resource share. Add the organization as a principal.

     <details>
       <summary>Answer</summary>

       答案C。

     </details>

112. A solutions architect is building a web application that uses an Amazon RDS for PostgreSQL DB instance. The DB instance is expected to receive many more reads than writes. The solutions architect needs to ensure that the large amount of read traffic can be accommodated and that the DB instance is highly available. Which steps should the solutions architect take to meet these requirements? (Select THREE)
     - [ ] A. Create multiple read replicas and put them into an Auto Scaling group.
     - [ ] B. Create multiple read replicas in different Availability Zones.
     - [ ] C. Create an Amazon Route 53 hosted zone and a record set for each read replica with a TTL and a weighted routing policy.
     - [ ] D. Create an Application Load Balancer (ALB) and put the read replicas behind the ALB.
     - [ ] E. Configure an Amazon CloudWatch alarm to detect a failed read replica. Set the alarm to directly invoke an AWS Lambda function to delete its Route 53 record set.
     - [ ] F. Configure an Amazon Route 53 health check for each read replica using its endpoint.

     <details>
       <summary>Answer</summary>

       答案BCF。

     </details>

113. A company wants to deploy an AWS WAF solution to manage AWS WAF rules across multiple AWS accounts. The accounts are managed under different OUs in AWS Organizations. Administrators must be able to add or remove accounts or OUs from managed AWS WAF rule sets as needed. Administrators also must have the ability to automatically update and remediate noncompliant AWS WAF rules in all accounts. Which solution meets these requirements with the EAST amount of operational overhead?
     - [ ] A. Use AWS Firewall Manager to manage AWS WAF rules across accounts in the organization. Use an AWS Systems Manager Parameter Store parameter to store account numbers and OUs to manage. Update the parameter as needed to add or remove accounts or OUs. Use an Amazon EventBridge (Amazon CloudWatch Events) rule to identify any changes to the parameter and to invoke an AWS Lambda function to update the security policy in the Firewall Manager administrative account.
     - [ ] B. Deploy an organization-wide AWS Config rule that requires all resources in the selected OUS to associate the AWS WAF rules. Deploy automated remediation actions by using AWS Lambda to fix noncompliant resources. Deploy AWS WAF rules by using an AWS CloudFormation stack set to target the same OU where the AWS Config rule is applied.
     - [ ] C. Create AWS WAF rules in the management account of the organization. Use AWS Lambda environment variables to store account numbers and OUS to manage. Update environment variables as needed to add or remove accounts or OUS. Create cross-account IAM roles in member accounts. Assume the roles by using AWS Security Token Service (AWS STS) in the Lambda function to create and update AWS WAF rules in the member accounts.
     - [ ] D. Use AWS Control Tower to manage AWS WAF rules across accounts in the organization. Use AWS Key Management Service (AWS KMS) to store account members and OU to manage. Update AWS KMS as needed to add or move accounts or OU. Create AM users in member accounts. Allow AWS Control Tower in the management account to use the access key and secret access key to create and update AWS WAF rules in the member accounts.

     <details>
       <summary>Answer</summary>

       答案B。

     </details>

114. A company runs an application that gives users the ability to search for videos and related information by using keywords that are curated from content providers. The application data is stored in an on-premises Oracle database that is 800 GB in size. The company wants to migrate the data to an Amazon Aurora MySQL DB instance. A solutions architect plans to use the AWS Schema Conversion Tool and AWS Database Migration Sewice (AWS DMS) for the migrationnuring the migration, the existing database must serve ongoing requests. The migration must be completed with minimum downtime. Which solution will meet these requirements?
     - [ ] A. Create primary key indexes, secondary indexes, and referential integrity constraints in the target database before starting the migration process.
     - [ ] B. Use AWS DMS to run the conversion report for Oracle to Aurora MySQL. Remediate any issues Then use AWS DMS to migrate the data.
     - [ ] C. Use the MS or CS DMS replication instance type for ongoing replication.
     - [ ] D. Turn off automatic backups and logging of the target database until the migration and cutover processes are complete.

     <details>
       <summary>Answer</summary>

       答案B。

     </details>

115. A solution architect needs to deploy an application on a fleet of Amazon EC2 instances. The EC2 instances run in private subnets in an Auto Scaling group. The application is expected to generate logs at a rate of 100 MB each second on each of the EC2 instances. The logs must be stored in an Amazon S3 bucket so that an Amazon EMR cluster can consume them for further processing. The logs must be quickly accessible for the first 90 days and should be retrievable within 48 hours thereafter. What is the MOST cost-effective solution that meets these requirements?
     - [ ] A. Set up an S3 copy job to write logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a NAT instance within the private subnets to connect to Amazon S3.Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier.
     - [ ] B. Set up an S3 sync job to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a gateway VPC endpoint for Amazon S3 to connect to Amazon S3.Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier Deep Archive.
     - [ ] C. Set up an S3 batch operation to copy logs from each EC2 instance to the S3 bucket with S3 Standard storage. Use a NAT gateway with the private subnets to connect to Amazon S3.Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier Deep Archive.
     - [ ] D. Set up an S3 sync job to copy logs from each EC2 instance to the S3 bucket with S3 Standard Storage. Use a gateway VPC endpoint for Amazon S3 to connect to Amazon S3.Create S3 Lifecycle policies to move logs that are older than 90 days to S3 Glacier.

     <details>
       <summary>Answer</summary>

       答案C。

     </details>

116. A company warns to migrate a 30 TB Oracle data warehouse from on premises to Amazon Redshift. The company used the AWS Schema Conversion Tool (AWS SCT) to convert the schema of the existing data warehouse to an Amazon Redshift schema. The company also used a migration assessment report to identify manual tasks to complete. The company needs to migrate the data to the new Amazon Redshift cluster during an upcoming data freeze period of 2 weeks. The only network connection between the on-premises data warehouse and AWS is a 50 Mbps internet connection. Which migration strategy meets these requirements?
     - [ ] A. Create an AWS Database Migration Service (AWS DMS) replication instance. Authorize the public IP address of the replication instance to reach the data warehouse through the corporate firewall Create a migration task to run at the beginning of the data freeze period.
     - [ ] B. Install the AWS SCT extraction agents on the on-premises servers. Define the extract, upload, and copy tasks to send the data to an Amazon S3 bucket. Copy the data into the Amazon Redshift cluster. Run the tasks at the beginning of the data freeze period.
     - [ ] C. install the AWS SCT extraction agents on the on-premises servers. Create a Site-to-Site VPN connection. Create an AWS Database Migration Service (AWS DMS) replication instance that is the appropriate size. Authorize the IP address of the replication instance to be able to access the on-premises data warehouse through the VPN connection
     - [ ] D. Create a job in AWS Snowball Edge to import data into Amazon S3 Install AWS SCT extraction agents on the on-premises servers. Define the local and AWS Database Migration Service (AWS DMS) tasks to send the data to the Snowball Edge device. When the Snowball Edge device is returned to AWS and the data is available in Amazon S3, run the AWS DMS subtask to copy the data to Amazon Redshift.

     <details>
       <summary>Answer</summary>

       答案D。

     </details>

117. A media company uses Amazon DynamoDB to store metadata for its catalog of movies that are available to stream. Each media item contains user-facing content that concludes a description of the media, a list of search tags, and similar data. ln addition, media items include a list of Amazon S3 key names that relate to movie files. The company stores these movie files in a single S3 bucket that has versioning enable. The company uses Amazon CloudFront to serve these movie files. The company has 100, 000 media items, and each media item can have many different S3 objects that represent different encodings of the same media S3 objects that belong to the same media item are grouped together under the same key prefix, which is a random unique ID Because of an expiring contract with a media provider, the company must remove 2.000 media Items. The company must completely delete all DynamoDB keys and movie files on Amazon S3 that are related to these media items within 36 hours. The company must ensure that the content cannot be recovered. Which combination of actions will meet these requirements? (Select TWO.)
     - [ ] A. Configure the DynamoDB table with a TTL field. Create and invoke an AWS Lambda function to perform a conditional update. Set the TTL field to the time of the contract's expiration on every affected media item.
     - [ ] B. Configure an S3 Lifecycle object expiration rule that is based on the contract's expiration date.
     - [ ] C. Write a script to perform a conditional delete on all the affected DynamoDB records.
     - [ ] D. Temporarily suspend versioning on the S3 bucket. Create and invoke an AWS Lambda function that deletes affected objects. Reactivate versioning when the operation is complete.
     - [ ] E. Write a script to delete objects from Amazon S3. Specify in each request a NoncurrentVersionExpiration property with a NoncurrentDays attribute set to 0.

     <details>
       <summary>Answer</summary>

       答案CE。

     </details>

118. A solution architect is designing an AWS account structure for a company that consists of multiple terms. All the team will work in the same AWS Region. The company needs a VPC that is connected to the on-premises network. The company expects less than 50Mbps of total to and from the on-premises network. Which combination of steps will meet these requirements MOST cost-effectively? (Select TWO)
     - [ ] A. Create an AWS CloudFormation template that provisions a VPC and the required subnets. Deploy the template to each AWS account.
     - [ ] B. Create an AWS CloudFormation template that provisions a VPC and the required subnets. Deploy the template to a shared services account. Share the subnets by using AWS Resource Access Manager.
     - [ ] C. Use AWS Transit Gateway along with an AWS Site-to-Site VPN for connectivity to the on-premises network. Share the transit gateway by using AWS Resource Access Manager.
     - [ ] D. Use AWS Site-to-Site VPN for connectivity to the on-premises network.
     - [ ] E. Use AWS Direct Connect for connectivity to the on-premises network.

     <details>
       <summary>Answer</summary>

       答案BD。

     </details>
