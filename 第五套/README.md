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

11. A research company is running daily simulations in the AWS Cloud to meet high demand The simulations run on several hundred Amazon EC2 instances that are based on Amazon Linux 2 Occasionally, a simulation gets stuck and requires a cloud operations engineer to solve the problem by connecting to an EC2 instance through SSH Company policy states that no EC2 instance can use the same SSH key and that all connections must be logged in AWS CloudTrail How can a solutions architect meet these requirements?
    - [ ] A. Launch new EC2 instances without setting up any SSH key for the instances Set up EC2 Instance Connect on each instance Create a new 1AM policy, and attach it to the engineers' 1AM role with an Allow statement for the SendSSHPublicKey action Instruct the engineers to connect to the instance by using a browser-based SSH client from the EC2 console.
    - [ ] B. Create an AWS Systems Manager document to run commands on EC2 instances to set a new unique SSH key Create a new IAM policy, and attach it to the engineers' 1AM rote with an Allow statement to run Systems Manager documents Instruct the engineers to run the document to set an SSH key and to connect through any SSH client.
    - [ ] C. Launch new EC2 instances, and generate an individual SSH key lor each instance Store the SSH key in AWS Secrets Manager Create a new 1AM policy, and attach rt to the engineers' 1AM role with an Allow statement for the GetSecretValue action Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.
    - [ ] D. Set up AWS Secrets Manager to store the EC2 SSH key Create a new AWS Lambda function to create a new SSH key and to call AWS Systems Manager Session Manager to set the SSH key on the EC2 instance Configure Secrets Manager to use the Lambda function for automatic rotation once daily Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.

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
    - [ ] A. Create a new S3 bucket Deploy an AWS Storage Gateway file gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share.
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
    - [ ] C. Create a second $3 bucket and a second Cloudfront origin for the new S3 bucket. Create a Cloudfront igin group that contains both origins. Configure origin weighting for the origin group.
    - [ ] D. Create two Lambda@Edge functions. Use each function to serve one of the applicaion version. Set up a CloudFront weighted Lambda@Edge invocation policy.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

17. A company manages an on-premises data ingestion application that receives metrics from loT devices in JSON format. The data is collected transformed and stored m a data warehouse for analysis The current infrastructure has severe performance issues at peak loads due to insufficient compute capacity causing some of the data ingestion to be dropped The company wants to migrate the application to AWS The solution must support its current analytics tool that connects to the data warehouse with a Java Database Connectivity (JDBC) driver. The company requires a resilient and cost-effective solution that will address the performance issues Which solution will meet these requirements?
    - [ ] A. Replatform the application Create an Application Load Balancer and an Amazon EC2 instance with Auto Scaling to host the application to ingest and transform the data Create an Amazon RDS PostgreSQL Multi-AZ DB instance in a private subnet to store data Use Amazon QuickSight to generate reports and visualize data.
    - [ ] B. Replatform the application Use Amazon API Gateway to handle data ingestion Use AWS Lambda to transform the data Create an Amazon Aurora PostgreSQL DB cluster with an Aurora Replica in two private subnets to store data Use Amazon QuickSight to generate reports and visualize data.
    - [ ] C. Re-architect the application Load the data into Amazon S3 Use AWS Glue to transform me data Store the table schema in an AWS Glue Data Catalog Use Amazon Athena to query the data.
    - [ ] D. Re-architect the application Load the data into Amazon S3 Use Amazon EMR to transform tne data Create an external schema in an AWS Glue Data Catalog Use Amazon Redshift Spectrum to query the data.

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

22. A company that tracks medical devices in hospitals wants to migrate its existing storage solution to the AWS Cloud. The company equips all of its devices with sensors that collect location and usage information. This sensor data is sent in unpredictable patterns with large spikes. The data is stored in a MySQL database running on premises at each hospital. The company wants the cloud storage solution to scale with usage. The companyג€™s analytics team uses the sensor data to calculate usage by device type and hospital. The team needs to keep analysis tools running locally while fetching data from the cloud. The team also needs to use existing Java application and SQL queries with as few changes as possible. How should a solutions architect meet these requirements while ensuring the sensor data is secure?
    - [ ] A. Store the data in an Amazon Aurora Serverless database. Serve the data through a Network Load Balancer (NLB). Authenticate users using the NLB with credentials stored in AWS Secrets Manager.
    - [ ] B. Store the data in an Amazon S3 bucket. Serve the data through Amazon QuickSight using an IAM user authorized with AWS Identity and Access Management (IAM) with the S3 bucket as the data source.
    - [ ] C. Store the data in an Amazon Aurora Serverless database. Serve the data through the Aurora Data API using an IAM user authorized with AWS Identity and Access Management (IAM) and the AWS Secrets Manager ARN.
    - [ ] D. Store the data in an Amazon S3 bucket. Serve the data through Amazon Athena using AWS PrivateLink to secure the data in transit.

    <details>
       <summary>Answer</summary>

       答案C -> [ref](https://aws.amazon.com/cn/blogs/aws/new-data-api-for-amazon-aurora-serverless/)

    </details>

23. A company has multiple AWS accounts as part of an organization created with AWS Organizations Each account has a VPC in the us-east-2 Region and is used for either production or development workloads Amazon EC2 instances across production accounts need to communicate with each other and EC2 instances across development accounts need to communicate with each other but production and development instances should not be able to communicate with each other To facilitate connectivity, the company created a common network account The company used AWS Transit Gateway to create a transit gateway in the us-east-2 Region in the network account and shared the transit gateway with the entire organization by using AWS Resource Access Manager Network administrators then attached VPCs in each account to the transit gateway after which the EC2 instances were able to communicate across accounts However production and development accounts were also able to communicate with one another Which set of steps should a solutions architect take to ensure production traffic and development traffic are completely isolated?
    - [ ] A. Modify the security groups assigned to development EC2 instances to block traffic from production EC2 instances. Modify the security groups assigned to production EC2 instances to block traffic from development EC2 instances.
    - [ ] B. Create a tag on each VPC attachment with a value of either production or development according to the type of account being attached. Using the Network Manager feature of AWS Transit Gateway, create policies that restrict traffic between VPCs based on the value of this tag.
    - [ ] C. Create separate route tables for production and development traffic Delete each account's association and route propagation to the default AWS Transit Gateway route table. Attach development VPCs to the development AWS Transit Gateway route table and production VPCs to the production route table and enable automatic route propagation on each attachment.
    - [ ] D. Create a tag on each VPC attachment with a value of either production or development, according to the type of account being attached. Modify the AWS Transit Gateway routing table to route production tagged attachments to one another and development tagged attachments to one another.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

24. A solutions architect is designing a solution that consists of a fleet of Amazon EC2 Reserved Instances (Rls) in an Auto Scaling group that will grow over time as usage increases. The solution needs to maintain 80% Rl coverage to maintain cost control with an alert to the DevOps team using an email distribution list when coverage drops below 30% The solution must also include the ability to generate a report to easily track and manage coverage. The company has a policy that allows only one workload for each AWS account Which set of steps should the solutions architect take to create the report and alert the DevOps team?
    - [ ] A. Create an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the DevOps email distribution list Enable cost allocation tags and ensure instances populate a customer-managed cost allocation tag at startup Use the AWS Billing and Cost Management console to create a budget for Rl coverage, fitter using the customer-managed cost allocation tag and set the threshold to 80% and link to the SNS topic created in me alert configuration.
    - [ ] B. Create an Amazon Simple Notification Service (Amazon SNS1 topic and subscribe the DevOps email distribution list Use the Cost Explorer console to configure the report for Rl utilization set the utilization target to 30% and link to the SNS topic created in the alert configuration.
    - [ ] C. Use the AWS Billing and Cost Management console to create a reservation budget for Rl utilization set the utilization to 80% and enter the email distribution list m the alert configuration.
    - [ ] D. Enable cost allocation tags and ensure instances populate a customer-managed cost allocation tag at startup Use the Cost Explorer console to configure the report for Rl coverage, filter using the customer-managed cost allocation tag and set the threshold to 80% and enter the email distribution list in the alert configuration.

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

28. A company maintains a restaurant review website The website is a single-page application where files are stored m Amazon S3 and delivered using Amazon CloudFront The company receives several fake postings every day that are manually removed The security team has identified that most of the fake posts are from Dots with IP addresses that have a bad reputation within the same global region The team needs to create a solution to help restrict the bots from accessing the website Which strategy should a solutions architect use?
    - [ ] A. Use AWS Firewall Manager to control the CloudFront distribution security settings Create a geographical block rule and associate it with Firewall Manager.
    - [ ] B. Associate an AWS WAF web ACL with the CloudFront distribution Select the managed Amazon IP reputation rule group for the web ACL with a deny action.
    - [ ] C. Use AWS Firewall Manager to control the CloudFront distribution security settings Select the managed Amazon IP reputation rule group and associate it with Firewall Manager with a deny action.
    - [ ] D. Associate an AWS WAF web ACL with the CloudFront distribution Create a rule group for the web ACL with a geographical match statement with a deny action.

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

32. A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI The company's engineers rely heavily on SSH access to the instances for troubleshooting. The company's existing architecture includes the following: -A VPC with private and public subnets, and a NAT gateway. -Site-to-Site VPN for connectivity with the on-premises environment -EC2 security groups with direct SSH access from the on-premises environment The company needs to increase security controls around SSH access and provide auditing of commands executed by the engineers. Which strategy should a solutions architect use?
    - [ ] A. Install and configure EC2 Instance Connect on the fleet of EC2 instances Remove all security group rules attached to EC2 instances that allow Inbound TCP on port 22 Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.
    - [ ] B. Update the EC2 security groups to only allow Inbound TCP on port 22 to the IP addresses of the engineer's devices Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.
    - [ ] C. Update the EC2 security groups to only allow Inbound TCP on port 22 to the IP addresses of the engineer's devices Enable AWS Config for EC2 security group resource changes Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.
    - [ ] D. Create an IAM role with the AmazonSSMManaged InstanceCore managed policy attached Attach the IAM role to all the EC2 instances Remove all security group rules attached to the EC2 instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin lor their devices and remotely access the instances by using the start-session API call from Systems Manager.

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

34. A company is creating a REST API to share information with six of Its partners based m the United States. The company has created an Amazon API Gateway Regional endpoint Each of the six partners will access the API once per day to post daily sales figures. After Initial deployment the company observes 1,000 requests per second originating from 500 different IP addresses around the world. The company believes this traffic is originating from a botnet end wants to secure its API while minimizing cost Which approach should the company take to secure its API?
    - [ ] A.  Create an Amazon CloudFront distribution with the API as the origin Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution Configure CloudFront with an origin access identity (OAI) and associate it with the distribution Configure API Gateway to ensure only the OAI can execute the POST method.
    - [ ] B. Create an Amazon CloudFront distribution with the API as the origin Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution Add a custom header to the CloudFront distribution populated with an API key Configure the API to require an API key on the POST method.
    - [ ] C. Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners Associate the web ACL with the API Create a resource policy with a request limit and associate it with the API Configure the API to require an API key on the POST method.
    - [ ] D. Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners Associate the web ACL with the API Create a usage plan with a request limit and associate it with the API Create an API key and add it lo Hie usage plan.

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
