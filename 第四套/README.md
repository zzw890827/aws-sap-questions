# AWS SAP 301-400

1. A company built an ecommerce website on AWS using a three-tier web architecture. The application is Java-based and composed of an Amazon CloudFront distribution, an Apache web server layer of Amazon EC2 instances in an Auto Scaling group, and a backend Amazon Aurora MySQL database. Last month, during a promotional sales event, users reported errors and timeouts while adding items to their shopping carts. The operations team recovered the logs created by the web servers and reviewed Aurora DB cluster performance metrics. Some of the web servers were terminated before logs could be collected and the Aurora metrics were not sufficient for query performance analysis. Which combination of steps must the solutions architect take to improve application performance visibility during peak traffic events? (Choose three.)
   - [ ] A. Configure the Aurora MySQL DB cluster to publish slow query and error logs to Amazon CloudWatch Logs.
   - [ ] B. Implement the AWS X-Ray SDK to trace incoming HTTP requests on the EC2 instances and implement tracing of SQL queries with the X-Ray SDK for Java.
   - [ ] C. Configure the Aurora MySQL DB cluster to stream slow query and error logs to Amazon Kinesis
   - [ ] D. Install and configure an Amazon CloudWatch Logs agent on the EC2 instances to send the Apache logs to CloudWatch Logs.
   - [ ] E. Enable and configure AWS CloudTrail to collect and analyze application activity from Amazon EC2 and Aurora.
   - [ ] F. Enable Aurora MySQL DB cluster performance benchmarking and publish the stream to AWS X-Ray.

   <details>
      <summary>Answer</summary>

      答案ABD -> [ref](https://docs.aws.amazon.com/zh_cn/xray/latest/devguide/xray-sdk-java-sqlclients.html)

   </details>

2. A North American company with headquarters on the East Coast is deploying a new web application running on Amazon EC2 in the us-east-1 Region. The application should dynamically scale to meet user demand and maintain resiliency. Additionally, the application must have disaster recover capabilities in an active-passive configuration with the us-west-1 Region. Which steps should a solutions architect take after creating a VPC in the us-east-1 Region?
   - [ ] A. Create a VPC in the us-west-1 Region. Use inter-Region VPC peering to connect both VPCs. Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs in each Region as part of an Auto Scaling group spanning both VPCs and served by the ALB.
   - [ ] B. Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs as part of an Auto Scaling group served by the ALB. Deploy the same solution to the us-west-1 Region. Create an Amazon Route 53 record set with a failover routing policy and health checks enabled to provide high availability across both Regions.
   - [ ] C. Create a VPC in the us-west-1 Region. Use inter-Region VPC peering to connect both VPCs. Deploy an Application Load Balancer (ALB) that spans both VPCs. Deploy EC2 instances across multiple Availability Zones as part of an Auto Scaling group in each VPC served by the ALB. Create an Amazon Route 53 record that points to the ALB.
   - [ ] D. Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs as part of an Auto Scaling group served by the ALB. Deploy the same solution to the us-west-1 Region. Create separate Amazon Route 53 records in each Region that point to the ALB in the Region. Use Route 53 health checks to provide high availability across both Regions.

   <details>
      <summary>Answer</summary>

      D没有提到要在Amazon Route 53上使用的路由策略。问题要求第二个区域作为被动备份，这意味着只有主区域接收所有流量，所以你需要在Amazon Route 53中特别使用故障转移路由策略。所以根据要求，B是正确的

   </details>

3. A company has a web application that uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. A recent marketing campaign has increased demand. Monitoring software reports that many requests have significantly longer response times than before the marketing campaign. A solutions architect enabled Amazon CloudWatch Logs for API Gateway and noticed that errors are occurring on 20% of the requests. In CloudWatch, the Lambda function Throttles metric represents 1% of the requests and the Errors metric represents 10% of the requests. Application logs indicate that, when errors occur, there is a call to DynamoDB. What change should the solutions architect make to improve the current response times as the web application becomes more popular?
   - [ ] A. Increase the concurrency limit of the Lambda function.
   - [ ] B. Implement DynamoDB auto scaling on the table.
   - [ ] C. Increase the API Gateway throttle limit.
   - [ ] D. Re-create the DynamoDB table with a better-partitioned primary index.

   <details>
      <summary>Answer</summary>

      这里DynamoDB发生了错误，答案B

   </details>

4. A European online newspaper service hosts its public-facing WordPress site in a collocated data center in London. The current WordPress infrastructure consists of a load balancer, two web servers, and one MySQL database server. A solutions architect is tasked with designing a solution with the following requirements: -Improve the website's performance. -Make the web tier scalable and stateless. -Improve the database server performance for read-heavy loads. -Reduce latency for users across Europe and the US. -Design the new architecture with a goal of 99.9% availability. Which solution meets these requirements while optimizing operational efficiency?
   - [ ] A. Use an Application Load Balancer (ALB) in front of an Auto Scaling group of WordPress Amazon EC2 instances in one AWS Region and three Availability Zones. Configure an Amazon ElastiCache cluster in front of a Multi-AZ Amazon Aurora MySQL DB cluster. Move the WordPress shared files to Amazon EFS. Configure Amazon CloudFront with the ALB as the origin, and select a price class that includes the US and Europe.
   - [ ] B. Use an Application Load Balancer (ALB) in front of an Auto Scaling group of WordPress Amazon EC2 instances in two AWS Regions and two Availability Zones in each Region. Configure an Amazon ElastiCache cluster in front of a global Amazon Aurora MySQL database. Move the WordPress shared files to Amazon EFS. Configure Amazon CloudFront with the ALB as the origin, and select a price class that includes the US and Europe. Configure EFS cross- Region replication.
   - [ ] C. Use an Application Load Balancer (ALB) in front of an Auto Scaling group of WordPress Amazon EC2 instances in one AWS Region and three Availability Zones. Configure an Amazon DocumentDB table in front of a Multi-AZ Amazon Aurora MySQL DB cluster. Move the WordPress shared files to Amazon EFS. Configure Amazon CloudFront with the ALB as the origin, and select a price class that includes all global locations.
   - [ ] D. Use an Application Load Balancer (ALB) in front of an Auto Scaling group of WordPress Amazon EC2 instances in two AWS Regions and three Availability Zones in each Region. Configure an Amazon ElastiCache cluster in front of a global Amazon Aurora MySQL database. Move the WordPress shared files to Amazon FSx with cross-Region synchronization. Configure Amazon CloudFront with the ALB as the origin and a price class that includes the US and Europe.

   <details>
      <summary>Answer</summary>

      简单题，答案A

   </details>

5. A solutions architect has implemented a SAML 2.0 federated identity solution with their companyג€™s on-premises identity provider (IdP) to authenticate usersג€™ access to the AWS environment. When the solutions architect tests authentication through the federated identity web portal, access to the AWS environment is granted. However, when test users attempt to authenticate through the federated identity web portal, they are not able to access the AWS environment. Which items should the solutions architect check to ensure identity federation is properly configured? (Choose three).
   - [ ] A. The IAM user's permissions policy has allowed the use of SAML federation for that user.
   - [ ] B. The IAM roles created for the federated users' or federated groups' trust policy have set the SAML provider as the principal.
   - [ ] C. Test users are not in the AWSFederatedUsers group in the company's IdR.
   - [ ] D. The web portal calls the AWS STS AssumeRoleWithSAML API with the ARN of the SAML provider, the ARN of the IAM role, and the SAML assertion from IdR.
   - [ ] E. The on-premises IdP's DNS hostname is reachable from the AWS environment VPCs.
   - [ ] F. The company's IdP defines SAML assertions that properly map users or groups in the company to IAM roles with appropriate permissions.

   <details>
      <summary>Answer</summary>

      答案BDF

   </details>

6. A company wants to improve cost awareness for its Amazon EMR platform. The company has allocated budgets for each team's Amazon EMR usage. When a budgetary threshold is reached, a notification should be sent by email to the budget office's distribution list. Teams should be able to view their EMR cluster expenses to date. A solutions architect needs to create a solution that ensures the policy is proactively and centrally enforced in a multi-account environment. Which combination of steps should the solutions architect take to meet these requirements? (Choose two)
   - [ ] A. Update the AWS CloudFormation template to include the AWS::Budgets::Budget::resource with the NotificationsWithSubscribers property.
   - [ ] B. Implement Amazon CloudWatch dashboards for Amazon EMR usage.
   - [ ] C. Create an EMR bootstrap action that runs at startup that calls the Cost Explorer API to set the budget on the cluster with the GetCostForecast and NotificationsWithSubscribers actions.
   - [ ] D. Create an AWS Service Catalog portfolio for each team. Add each team's Amazon EMR cluster as an AWS CloudFormation template to their Service Catalog portfolio as a Product.
   - [ ] E. Create an Amazon CloudWatch metric for billing. Create a custom alert when costs exceed the budgetary threshold.

   <details>
      <summary>Answer</summary>

      答案AD -> [ref](https://docs.aws.amazon.com/zh_cn/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html)

   </details>

7. A company is developing a gene reporting device that will collect genomic information to assist researchers will collecting large samples of data from a diverse population. The device will push 8 KB of genomic data every second to a data platform that will need to process and analyze the data and provide information back to researchers. The data platform must meet the following requirements: -Provide near-real-time analytics of the inbound genomic data. -Ensure the data is flexible, parallel, and durable. -Deliver results of processing to a data warehouse. Which strategy should a solutions architect use to meet these requirements?
   - [ ] A. Use Amazon Kinesis Data Firehouse to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon RDS instance.
   - [ ] B. Use Amazon Kinesis Data Streams to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon Redshift cluster using Amazon EMR.
   - [ ] C. Use Amazon S3 to collect the inbound device data, analyze the data from Amazon SQS with Kinesis, and save the results to an Amazon Redshift cluster.
   - [ ] D. Use an Amazon API Gateway to put requests into an Amazon SQS queue, analyze the data with an AWS Lambda function, and save the results to an Amazon Redshift cluster using Amazon EMR.

   <details>
      <summary>Answer</summary>

      简单题，答案B

   </details>

8. A company is using AWS CodePipeline for the CI/CD of an application to an Amazon EC2 Auto Scaling group. All AWS resources are defined in AWS CloudFormation templates. The application artifacts are stored in an Amazon S3 bucket and deployed to the Auto Scaling group using instance user data scripts. As the application has become more complex, recent resource changes in the CloudFormation templates have caused unplanned downtime. How should a solutions architect improve the CI/CD pipeline to reduce the likelihood that changes in the templates will cause downtime?
   - [ ] A. Adapt the deployment scripts to detect and report CloudFormation error conditions when performing deployments. Write test plans for a testing team to execute in a non-production environment before approving the change for production.
   - [ ] B. Implement automated testing using AWS CodeBuild in a test environment. Use CloudFormation change sets to evaluate changes before deployment. Use AWS CodeDeploy to leverage blue/green deployment patterns to allow evaluations and the ability to revert changes, if needed.
   - [ ] C. Use plugins for the integrated development environment (IDE) to check the templates for errors, and use the AWS CLI to validate that the templates are correct. Adapt the deployment code to check for error conditions and generate notifications on errors. Deploy to a test environment and execute a manual test plan before approving the change for production.
   - [ ] D. Use AWS CodeDeploy and a blue/green deployment pattern with CloudFormation to replace the user data deployment scripts. Have the operators log in to running instances and go through a manual test plan to verify the application is running as expected.

   <details>
      <summary>Answer</summary>

      简单题，答案B

   </details>

9. A web application is hosted in a dedicated VPC that is connected to a companyג€™s on-premises data center over a Site-to-Site VPN connection. The application is accessible from the company network only. This is a temporary non-production application that is used during business hours. The workload is generally low with occasional surges. The application has an Amazon Aurora MySQL provisioned database cluster on the backend. The VPC has an internet gateway and a NAT gateways attached. The web servers are in private subnets in an Auto Scaling group behind an Elastic Load Balancer. The web servers also upload data to an Amazon S3 bucket through the internet. A solutions architect needs to reduce operational costs and simplify the architecture. Which strategy should the solutions architect use?
   - [ ] A. Review the Auto Scaling group settings and ensure the scheduled actions are specified to operate the Amazon EC2 instances during business hours only. Use 3-year scheduled Reserved Instances for the web server EC2 instances. Detach the internet gateway and remove the NAT gateways from the VPC. Use an Aurora Serverless database and set up a VPC endpoint for the S3 bucket.
   - [ ] B. Review the Auto Scaling group settings and ensure the scheduled actions are specified to operate the Amazon EC2 instances during business hours only. Detach the internet gateway and remove the NAT gateways from the VPC. Use an Aurora Serverless database and set up a VPC endpoint for the S3 bucket, then update the network routing and security rules and policies related to the changes.
   - [ ] C. Review the Auto Scaling group settings and ensure the scheduled actions are specified to operate the Amazon EC2 instances during business hours only. Detach the internet gateway from the VPC, and use an Aurora Serverless database. Set up a VPC endpoint for the S3 bucket, then update the network routing and security rules and policies related to the changes.
   - [ ] D. Use 3-year scheduled Reserved Instances for the web server Amazon EC2 instances. Remove the NAT gateways from the VPC, and set up a VPC endpoint for the S3 bucket. Use Amazon CloudWatch and AWS Lambda to stop and start the Aurora DB cluster so it operates during business hours only. Update the network routing and security rules and policies related to the changes.

   <details>
      <summary>Answer</summary>

      简单题，答案B

   </details>

10. A company has built a high performance computing (HPC) cluster in AWS for a tightly coupled workload that generates a large number of shared files stored in Amazon EFS. The cluster was performing well when the number of Amazon EC2 instances in the cluster was 100. However, when the company increased the cluster size to 1,000 EC2 instances, overall performance was well below expectations. Which collection of design choices should a solutions architect make to achieve the maximum performance from the HPC cluster? (Choose three.)
    - [ ] A. Ensure the HPC cluster is launched within a single Availability Zone.
    - [ ] B. Launch the EC2 instances and attach elastic network interfaces in multiples of four.
    - [ ] C. Select EC2 instance types with an Elastic Fabric Adapter (EFA) enabled.
    - [ ] D. Ensure the clusters is launched across multiple Availability Zones
    - [ ] E. Replace Amazon EFS win multiple Amazon EBS volumes in a RAID array.
    - [ ] F. Replace Amazon EFS with Amazon FSx for Lustre.

    <details>
       <summary>Answer</summary>

       - [x] A. 高性能计算（HPC）工作负载集群应该在一个AZ中。
       - [x] C. 弹性结构适配器（EFA）是一个网络设备，你可以附加到你的亚马逊EC2实例，以加速高性能计算（HPC）。
       - [x] F. Amazon FSx for Lustre - 将其用于速度重要的工作负载，如机器学习、高性能计算（HPC）、视频处理和金融建模。

    </details>

11. A company built an application based on AWS Lambda deployed in an AWS CloudFormation stack. The last production release of the web application introduced an issue that resulted in an outage lasting several minutes. A solutions architect must adjust the deployment process to support a canary release. Which solution will meet these requirements?
    - [ ] A. Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load.
    - [ ] B. Deploy the application into a new CloudFormation stack. Use an Amazon Route 53 weighted routing policy to distribute the load.
    - [ ] C. Create a version for every new deployed Lambda function. Use the AWS CLI update-function-configuration command with the routing-config parameter to distribute the load.
    - [ ] D. Configure AWS CodeDeploy and use CodeDeployDefault.OneAtATime in the Deployment configuration to distribute the load.

    <details>
       <summary>Answer</summary>

       答案A -> [ref](https://aws.amazon.com/cn/blogs/compute/implementing-canary-deployments-of-aws-lambda-functions-with-alias-traffic-shifting/)

    </details>

12. A company runs a popular public-facing ecommerce website. Its user base is growing quickly from a local market to a national market. The website is hosted in an on-premises data center with web servers and a MySQL database. The company wants to migrate its workload to AWS. A solutions architect needs to create a solution to: -Improve security. -Improve reliability. -Improve availability. -Reduce latency. -Reduce maintenance. Which combination of steps should the solutions architect take to meet these requirements? (Choose three)
    - [ ] A. Use Amazon EC2 instances in two Availability Zones for the web servers in an Auto Scaling group behind an Application Load Balancer.
    - [ ] B. Migrate the database to a Multi-AZ Amazon Aurora MySQL DB cluster.
    - [ ] C. Use Amazon EC2 instances in two Availability Zones to host a highly available MySQL database cluster.
    - [ ] D. Host static website content in Amazon S3. Use S3 Transfer Acceleration to reduce latency while serving webpages. Use AWS WAF to improve website security.
    - [ ] E. Host static website content in Amazon S3. Use Amazon CloudFront to reduce latency while serving webpages. Use AWS WAF to improve website security.
    - [ ] F. Migrate the database to a single-AZ Amazon RDS for MySQL DB instance.

    <details>
       <summary>Answer</summary>

       简单题，答案ABE

    </details>

13. A company provides auction services for artwork and has users across North America and Europe. The company hosts its application in Amazon EC2 instances in the us-east-1 Region. Artists upload photos of their work as large-size, high-resolution image files from their mobile phones to a centralized Amazon S3 bucket created in the us-east-1 Region. The users in Europe are reporting slow performance for their image uploads. How can a solutions architect improve the performance of the image upload process?
    - [ ] A. Redeploy the application to use S3 multipart uploads.
    - [ ] B. Create an Amazon CloudFront distribution and point to the application as a custom origin.
    - [ ] C. Configure the buckets to use S3 Transfer Acceleration.
    - [ ] D. Create an Auto Scaling group for the EC2 instances and create a scaling policy.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

14. A company has developed a new release of a popular video game and wants to make it available for public download. The new release package is approximately 5GB in size. The company provides downloads for existing releases from a Linux-based, publicly facing FTP site hosted in an on-premises data center. The company expects the new release will be downloaded by users worldwide. The company wants a solution that provides improved download performance and low transfer costs, regardless of a user's location. Which solutions will meet these requirements?
    - [ ] A. Store the game files on Amazon EBS volumes mounted on Amazon EC2 instances within an Auto Scaling group. Configure an FTP service on the EC2 instances. Use an Application Load Balancer in front of the Auto Scaling group. Publish the game download URL for users to download the package.
    - [ ] B. Store the game files on Amazon EFS volumes that are attached to Amazon EC2 instances within an Auto Scaling group. Configure an FTP service on each of the EC2 instances. Use an Application Load Balancer in front of the Auto Scaling group. Publish the game download URL for users to download the package.
    - [ ] C. Configure Amazon Route 53 and an Amazon S3 bucket for website hosting. Upload the game files to the S3 bucket. Use Amazon CloudFront for the website. Publish the game download URL for users to download the package.
    - [ ] D. Configure Amazon Route 53 and an Amazon S3 bucket for website hosting. Upload the game files to the S3 bucket. Set Requester Pays for the S3 bucket. Publish the game download URL for users to download the package.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

15. A new startup is running a serverless application using AWS Lambda as the primary source of compute. New versions of the application must be made available to a subset of users before deploying changes to all users. Developers should also have the ability to abort the deployment and have access to an easy rollback mechanism. A solutions architect decides to use AWS CodeDeploy changes when a new version is available. Which CodeDeploy configuration should the solutions architect use?
    - [ ] A. A blue/green deployment
    - [ ] B. A linear deployment
    - [ ] C. A canary deployment
    - [ ] D. An all-at-once deployment

    <details>
       <summary>Answer</summary>

       向一部分用户提供该应用程序的新版本，金丝雀部署

    </details>

16. A company has developed a custom tool used in its workflow that runs within a Docker container. The company must perform manual steps each time the container code is updated to make the container image available to new workflow executions. The company wants to automate this process to eliminate manual effort and ensure a new container image is generated every time the tool code is updated. Which combination of actions should a solutions architect take to meet these requirements? (Choose three.)
    - [ ] A. Configure an Amazon ECR repository for the tool. Configure an AWS CodeCommit repository containing code for the tool being deployed to the container image in Amazon ECR.
    - [ ] B. Configure an AWS CodeDeploy application that triggers an application version update that pulls the latest tool container image from Amazon ECR, updates the container with code from the source AWS CodeCommit repository, and pushes the updated container image to Amazon ECR.
    - [ ] C. Configuration an AWS CodeBuild project that pulls the latest tool container image from Amazon ECR, updates the container with code from the source AWS CodeCommit repository, and pushes the updated container image to Amazon ECR.
    - [ ] D. Configure an AWS CodePipeline pipeline that sources the tool code from the AWS CodeCommit repository and initiates an AWS CodeDeploy application update.
    - [ ] E. Configure an Amazon EventBridge rule that triggers on commits to the AWS CodeCommit repository for the tool. Configure the event to trigger an update to the tool container image in Amazon ECR. Push the updated container image to Amazon ECR.
    - [ ] F. Configure an AWS CodePipeline pipeline that sources the tool code from the AWS CodeCommit repository and initiates an AWS CodeBuild build.

    <details>
       <summary>Answer</summary>

       概念题，答案ACF

    </details>

17. A company needs to create a centralized logging architecture for all of its AWS accounts. The architecture should provide near-real-time data analysis for all AWS CloudTrail logs and VPC Flow Logs across all AWS accounts. The company plans to use Amazon Elasticsearch Service (Amazon ES) to perform log analysis in the logging account. Which strategy a solutions architect use to meet these requirements?
    - [ ] A. Configure CloudTrail and VPC Flow Logs in each AWS account to send data to a centralized Amazon S3 bucket in the logging account. Create and AWS Lambda function to load data from the S3 bucket to Amazon ES in the logging account.
    - [ ] B. Configure CloudTrail and VPC Flow Logs to send data to a log group in Amazon CloudWatch account. Configure a CloudWatch subscription filter in each AWS account to send data to Amazon Kinesis Data Firehouse in the logging account. Load data from Kinesis Data Firehouse into Amazon ES in the logging account.
    - [ ] C. Configure CloudTrail and VPC Flow Logs to send data to a separate Amazon S3 bucket in each AWS account. Create an AWS Lambda function triggered by S3 events to copy the data to a centralized logging bucket. Create another Lambda function to load data from the S3 bucket to Amazon ES in the logging account.
    - [ ] D. Configure CloudTrail and VPC Flow Logs to send data to a log group in Amazon CloudWatch Logs in each AWS account. Create AWS Lambda functions in each AWS accounts to subscribe to the log groups and stream the data to an Amazon S3 bucket in the logging account. Create another Lambda function to load data from the S3 bucket to Amazon ES in the logging account.

    <details>
       <summary>Answer</summary>

       答案B -> [ref](https://aws.amazon.com/cn/solutions/implementations/centralized-logging/)

    </details>

18. A company standardized its method of deploying applications to AWS using AWS CodePipeline and AWS Cloud Formation. The applications are in TypeScript and Python. The company has recently acquired another business that deploys applications to AWS using Python scripts. Developers from the newly acquired company are hesitant to move their applications under Cloud Formation because it would require that they learn a new domain-specific language and eliminate their access to language features, such as looping. How can the acquired applications quickly be brought up to deployment standards while addressing the developers' concerns?
    - [ ] A. Create CloudFormation templates and re-use parts of the Python scripts as Instance user data. Use the AWS Cloud Development Kit (AWS CDK) to deploy the application using these templates. Incorporate the AWS CDK into CodePipeline and deploy the application to AWS using these templates.
    - [ ] B. Use a third-party resource provisioning engine inside AWS CodeBuild to standardize the deployment processes of the existing and acquired company. Orchestrate the CodeBuild job using CodePipeline.
    - [ ] C. Standardize on AWS OpsWorks. Integrate OpsWorks with CodePipeline. Have the developers create Chef recipes to deploy their applications on AWS.
    - [ ] D. Define the AWS resources using TypeScript or Python. Use the AWS Cloud Development Kit (AWS CDK) to create CloudFormation templates from the developers' code, and use the AWS CDK to create CloudFormation stacks. Incorporate the AWS CDK as a CodeBuild job in CodePipeline.

    <details>
       <summary>Answer</summary>

       使用CDK可以用Python或者TS脚本生成CloudFormation，答案D -> [ref](https://docs.aws.amazon.com/zh_cn/cdk/latest/guide/cdk_pipeline.html)

    </details>

19. A healthcare company runs a production workload on AWS that stores highly sensitive personal information. The security team mandates that, for auditing purposes, any AWS API action using AWS account root user credentials must automatically create a high-priority ticket in the companyג€™s ticketing system. The ticketing system has a monthly 3-hour maintenance window when no tickets can be created. To meet security requirements, the company enabled AWS CloudTrail logs and wrote a scheduled AWS Lambda function that uses Amazon Athena to query API actions performed by the root user. The Lambda function submits any actions found to the ticketing system API. During a recent security audit, the security team discovered that several tickets were not created because the ticketing system was unavailable due to planned maintenance. Which combination of steps should a solutions architect take to ensure that the incidents are reported to the ticketing system even during planned maintenance? (Choose two.)
    - [ ] A. Create an Amazon SNS topic to which Amazon CloudWatch alarms will be published. Configure a CloudWatch alarm to invoke the Lambda function.
    - [ ] B. Create an Amazon SQS queue to which Amazon CloudWatch alarms will be published. Configure a CloudWatch alarm to publish to the SQS queue.
    - [ ] C. Modify the Lambda function to be triggered by messages published to an Amazon SNS topic. Update the existing application code to retry every 5 minutes if the ticketing system's API endpoint is unavailable.
    - [ ] D. Modify the Lambda function to be triggered when there are messages in the Amazon SQS queue and to return successfully when the ticketing system API has processed the request.
    - [ ] E. Create an Amazon EventBridge rule that triggers on all API events where the invoking user identity is root. Configure the EventBridge rule to write the event to an Amazon SQS queue.

    <details>
       <summary>Answer</summary>

       简单题，答案BD

    </details>

20. A company is running a two-tier web-based application in an on-premises data center. The application user consists of a single server running a stateful application. The application connects to a PostgreSQL database running on a separate server. The application’s user base is expected to grow significantly, so the company is migrating the application and database to AWS. The solution will use Amazon Aurora PostgreSQL, Amazon EC2 Auto Scaling, and Elastic Load Balancing. Which solution will provide a consistent user experience that will allow the application and database tiers to scale?
    - [ ] A. Enable Aurora Auto Scaling for Aurora Replicas. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.
    - [ ] B. Enable Aurora Auto Scaling for Aurora writes. Use an Application Load Balancer with the round robin routing algorithm and sticky sessions enabled.
    - [ ] C. Enable Aurora Auto Scaling for Aurora Replicas. Use an Application Load Balancer with the robin routing and sticky sessions enabled.
    - [ ] D. Enable Aurora Scaling for Aurora writers. Use a Network Load Balancer with the least outstanding requests routing algorithm and sticky sessions enabled.

    <details>
       <summary>Answer</summary>

       为副本开启ALB，启动Robin（均等路由），粘性会话，答案C

    </details>

21. A solutions architect is designing a network for a new cloud deployment Each account will need autonomy to modify route tables and make changes. Centralized and controlled egress internet connectivity is also needed. The cloud footprint is expected to grow to thousands of AWS accounts. Which architecture will meet these requirements?
    - [ ] A. A centralized transit VPC with a VPN connection to a standalone VPC in each account Outbound internet traffic will be controlled by firewall appliances.
    - [ ] B. A centralized shared VPC with a subnet for each account. Outbound internet traffic will controlled through a fleet of proxy servers.
    - [ ] C. A shared services VPC to host central assets to include a fleet of firewalls with a route to the internet. Each spoke VPC will peer to the central VPC.
    - [ ] D. A shared transit gateway to which each VPC will be attached. Outbound internet access will route through a fleet of VPN-attached firewalls.

    <details>
       <summary>Answer</summary>

       需要使用transit gateway，答案D

    </details>

22. A solutions architect needs to migrate 50 TB of NFS data to Amazon S3. The files are on several NFS file servers on corporate network. These are dense file systems containing tens of millions of small files. The system operators have configured the file interface on an AWS Snowball Edge device and are using a shell script to copy data. Developers report that copying the data to the Snowball Edge device is very slow. The solutions architect suspects this may be related to the overhead of encrypting all the small files and transporting them over the network. Which changes can be made to speed up the data transfer?
    - [ ] A. Cluster two Snowball Edge devices together to increase the throughput of the devices.
    - [ ] B. Change the solution to use the S3 Adapter instead of the file interface on the Snowball Edge device.
    - [ ] C. Increase the number of parallel copy jobs to increase the throughput of the Snowball Edge device.
    - [ ] D. Connect directly to the USB interface on the Snowball Edge device and copy the files locally.

    <details>
       <summary>Answer</summary>

       使用文件接口的数据传输率通常在25MB/s和40MB/s之间。如果你需要比这更快的数据传输，请使用Amazon S3 Adapter for Snowball，它的数据传输速率通常在250 MB/s和400 MB/s之间。答案B

    </details>

23. A company hosts a blog post application on AWS using Amazon API Gateway, Amazon DynamoDB, and AWS Lambda. The application currently does not use API keys to authorize requests. The API model is as follows: -`GET/posts/:postid` to get post details. -`GET/users:userid` to get user details. -`GET/comments/:commentid` to get comments details. The company has noticed users are actively discussing topics in the comments section, and the company wants to increase user engagement by marking the comments appears in real time. Which design should be used to reduce comment latency and improve user experience?
    - [ ] A. Use edge-optimized API with Amazon CloudFront to cache API responses.
    - [ ] B. Modify the blog application code to request GET comment[commented] every 10 seconds.
    - [ ] C. Use AWS AppSync and leverage WebSockets to deliver comments.
    - [ ] D. Change the concurrency limit of the Lambda functions to lower the API response time.

    <details>
       <summary>Answer</summary>

       AWS AppSync是一项完全管理的服务，支持实时更新。答案C

    </details>

24. An IoT company has rolled out a fleet of sensors for monitoring temperatures in remote locations. Each device connects to AWS IoT Core and sends a message 30 seconds, updating an Amazon DynamoDB table. A System Administrator users AWS IoT to verify the devices are still sending messages to AWS IoT Core: the database is not updating. What should a Solutions Architect check to determine why the database is not being updated?
    - [ ] A. Verify the AWS IoT Device Shadow service is subscribed to the appropriate topic and is executing the AWS Lambda function.
    - [ ] B. Verify that AWS IoT monitoring shows that the appropriate AWS IoT rules are being executed, and that the AWS IoT rules are enabled with the correct rule actions.
    - [ ] C. Check the AWS IoT Fleet indexing service and verify that the thing group has the appropriate IAM role to update DynamoDB.
    - [ ] D. Verify that AWS IoT things are using MQTT instead of MQTT over WebSocket, then check that the provisioning has the appropriate policy attached.

    <details>
       <summary>Answer</summary>

       答案是D -> [ref](https://docs.aws.amazon.com/zh_cn/iot/latest/developerguide/iot-rules.html)

    </details>

25. An enterprise company is using a multi-account AWS strategy. There are separate accounts for development staging and production workloads. To control costs and improve governance the following requirements have been defined: -The company must be able to calculate the AWS costs for each project. -The company must be able to calculate the AWS costs for each environment development staging and production. -Commonly deployed IT services must be centrally managed. -Business units can deploy pre-approved IT services only. -Usage of AWS resources in the development account must be limited. Which combination of actions should be taken to meet these requirements? (Choose three.)
    - [ ] A. Apply environment, cost center, and application name tags to all taggable resources.
    - [ ] B. Configure custom budgets and define thresholds using Cost Explorer.
    - [ ] C. Configure AWS Trusted Advisor to obtain weekly emails with cost-saving estimates.
    - [ ] D. Create a portfolio for each business unit and add products to the portfolios using AWS CloudFormation in AWS Service Catalog.
    - [ ] E. Configure a billing alarm in Amazon CloudWatch.
    - [ ] F. Configure SCPs in AWS Organizations to allow services available using AWS.

    <details>
       <summary>Answer</summary>

       - A - 标记和成本计算
       - D - 预先批准和控制
       - F-有限服务

    </details>

26. A company is planning to migrate an existing high performance computing (HPE) solution to the AWS Cloud. The existing solution consists of a 12-node cluster running Linux with high speed interconnectivity developed on a single rack. A solutions architect needs to optimize the performance of the HPE cluster. Which combination of steps will meet these requirements? (Choose two.)
    - [ ] A. Deploy instances across at least three Availability Zones.
    - [ ] B. Deploy Amazon EC2 instances in a placement group.
    - [ ] C. Use Amazon EC2 instances that support Elastic Fabric Adapter (EFA).
    - [ ] D. Use Amazon EC2 instances that support burstable performance.
    - [ ] E. Enable CPU hyperthreading.

    <details>
       <summary>Answer</summary>

       简单题，答案BC

    </details>

27. A company hosts a game player-matching service on a public facing, physical, on-premises instance that all users are able to access over the internet. All traffic to the instance uses UDP. The company wants to migrate the service to AWS and provide a high level of security. A solutions architect needs to design a solution for the player-matching service using AWS. Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)
    - [ ] A. Use a Network Load Balancer (NLB) in front of the player-matching instance. Use a friendly DNS entry in Amazon Route 53 pointing to the NLB’s Elastic IP address.
    - [ ] B. Use an Application Load Balancer (ALB) in front of the player-matching instance. Use a friendly DNS entry in Amazon Route 53 pointing to the ALB’s internet- facing fully qualified domain name (FQDN).
    - [ ] C. Define an AWS WAF rule to explicitly drop non-UDP traffic, and associate the rule with the load balancer.
    - [ ] D. Configure a network ACL rule to block all non-UDP traffic. Associate the network ACL with the subnets that hold the load balancer instances.
    - [ ] E. Use Amazon CloudFront with an Elastic Load Balancer as an origin.
    - [ ] F. Enable AWS Shield Advanced on all public-facing resources.

28. A company has multiple AWS accounts and manages these accounts which AWS Organizations. A developer was given IAM user credentials to access AWS resources. The developer should have read-only access to all Amazon S3 buckets in the account. However, when the developer tries to access the S3 buckets from the console, they receive an access denied error message with no bucket listed. A solution architect reviews the permissions and finds that the developerג€™s IAM user is listed as having read-only access to all S3 buckets in the account. Which additional steps should the solutions architect take to troubleshoot the issue? (Choose two.)
    - [ ] A. Check the bucket policies for all S3 buckets.
    - [ ] B. Check the ACLs for all S3 buckets.
    - [ ] C. Check the SCPs set at the organizational units (OUs).
    - [ ] D. Check for the permissions boundaries set for the IAM user.
    - [ ] E. Check if an appropriate IAM role is attached to the IAM user.

    <details>
       <summary>Answer</summary>

       答案CD

    </details>

29. A large company recently experienced an unexpected increase in Amazon RDS and Amazon DynamoDB costs. The company needs to increase visibility into delays of AWS Billing and Cost Management. There are various accounts associated with AWS Organizations, including many development and production accounts. There is no consistent tagging strategy across the organization, but there are guidelines in place that require all infrastructure to be deployed using AWS CloudFormation with consistent tagging. Management requires cost center numbers and project ID numbers for all existing and future DynamoDB tables and RDS distances. Which strategy should the solutions architect provide to meet these requirements?
    - [ ] A. Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources.
    - [ ] B. Use an AWS Config rule to alert the finance team of untagged resources. Create a centralized AWS Lambda based solution to tag untagged RDS databases and DynamoDB resources every hour using a cross-account role.
    - [ ] C. Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID. Use SCPs to restrict resource creation that do not have the cost center and project ID on the resource.
    - [ ] D. Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources. Update existing federated roles to restrict privileges to provision resources that do not include the cost center and project ID on the resource.

    <details>
       <summary>Answer</summary>

       答案C -> [ref](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf)

    </details>

30. A company has an application that generates reports and stores them in an Amazon bucket Amazon S3 bucket. When a user accesses their report, the application generates a signed URL to allow the user to download the report. The company's security team has discovered that the files are public and that anyone can download them without authentication. The company has suspended the generation of new reports until the problem is resolved. Which set of action will immediately remediate the security issue without impacting the application's normal workflow?
    - [ ] A. Create an AWS Lambda function that applies all policy for users who are not authenticated. Create a scheduled event to invoke the Lambda function.
    - [ ] B. Review the AWS Trusted advisor bucket permissions check and implement the recommend actions.
    - [ ] C. Run a script that puts a Private ACL on all of the object in the bucket.
    - [ ] D. Use the Block Public Access feature in Amazon S3 to set the IgnorePublicAcis option to TRUE on the bucket.

    <details>
       <summary>Answer</summary>

       答案D

    </details>

31. A company hosts a legacy application that runs on an Amazon EC2 instance inside a VPC without internet access. Users access the application with a desktop program installed on their corporate laptops. Communication between the laptops and the VPC flows through AWS Direct Connect (DX). A new requirement states that all data in transit must be encrypted between users and the VPC. Which strategy should a solutions architect use to maintain consistent network performance while meeting this new requirement?
    - [ ] A. Create a client VPN endpoint and configure the laptops to use an AWS client VPN to connect to the VPC over the internet.
    - [ ] B. Create a new public virtual interface for the existing DX connection, and create a new VPN that connects to the VPC over the DX public virtual interface.
    - [ ] C. Create a new Site-to-Site VPN that connects to the VPC over the internet.
    - [ ] D. Create a new private virtual interface for the existing DX connection, and create a new VPN that connects to the VPC over the DX private virtual interface.

    <details>
       <summary>Answer</summary>

       简单题，答案D

    </details>

32. A solutions architect needs to define a reference architecture for a solution for three-tier applications with web, application, and NoSQL data layers. The reference architecture must meet the following requirements: -High availability within an AWS Region. -Able to fail over in 1 minute to another AWS Region for disaster recovery. -Provide the most efficient solution while minimizing the impact on the user experience. Which combination of steps will meet these requirements? (Choose three.)
    - [ ] A. Use an Amazon Route 53 weighted routing policy set to 100/0 across the two selected Regions. Set Time to Live (TTL) to 1 hour.
    - [ ] B. Use an Amazon Route 53 failover routing policy for failover from the primary Region to the disaster recovery Region. Set Time to Live (TTL) to 30 seconds.
    - [ ] C. Use a global table within Amazon DynamoDB so data can be accessed in the two selected Regions.
    - [ ] D. Back up data from an Amazon DynamoDB table in the primary Region every 60 minutes and then write the data to Amazon S3. Use S3 cross-Region replication to copy the data from the primary Region to the disaster recovery Region. Have a script import the data into DynamoDB in a disaster recovery scenario. Implement a hot standby model using Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use zonal Reserved Instances for the minimum number of servers and On-Demand Instances for any additional resources.
    - [ ] E. Use Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use Spot Instances for the required resources.

    <details>
       <summary>Answer</summary>

       答案BCD

    </details>

33. A company runs an application on a fleet of Amazon EC2 instances. The application requires low latency and random access to 100 GB of data. The application must be able to access the data at up to 3.000 IOPS. A Development team has configured the EC2 launch template to provision a 100-GB Provisioned IOPS (PIOPS) Amazon EBS volume with 3 000 IOPS provisioned. A Solutions Architect is tasked with lowering costs without impacting performance and durability.Which action should be taken?
    - [ ] A. Create an Amazon EFS file system with the performance mode set to Max I/O. Configure the EC2 operating system to mount the EFS file system.
    - [ ] B. Create an Amazon EFS file system with the throughput mode set to Provisioned. Configure the EC2 operating system to mount the EFS file system.
    - [ ] C. Update the EC2 launch template to allocate a new 1-TB EBS General Purpose SSO (gp2) volume.
    - [ ] D. Update the EC2 launch template to exclude the PIOPS volume. Configure the application to use local instance storage.

    <details>
       <summary>Answer</summary>

       答案C

    </details>

34. A company recently transformed its legacy infrastructure provisioning scripts to AWS CloudFormation templates. The newly developed templates are hosted in the company's private GitHub repository. Since adopting CloudFormation, the company has encountered several issues with updates to the CloudFormation templates, causing execution or creating environment. Management is concerned by the increase in errors and has asked a Solutions Architect to design the automated testing of CloudFormation template updates. What should the Solution Architect do to meet these requirements?
    - [ ] A. Use AWS CodePipeline to create a change set from the CloudFormation templates stored in the private GitHub repository. Execute the change set using AWS CodeDeploy. Include a CodePipeline action to test the deployment with testing scripts run by AWS CodeBuild.
    - [ ] B. Mirror the GitHub repository to AWS CodeCommit using AWS Lambda. Use AWS CodeDeploy to create a change set from the CloudFormation templates and execute it. Have CodeDeploy test the deployment with testing scripts run by AWS CodeBuild.
    - [ ] C. Use AWS CodePipeline to create and execute a change set from the CloudFormation templates stored in the GitHub repository. Configure a CodePipeline action to be deployment with testing scripts run by AWS CodeBuild.
    - [ ] D. Mirror the GitHub repository to AWS CodeCommit using AWS Lambda. Use AWS CodeBuild to create a change set from the CloudFormation templates and execute it. Have CodeBuild test the deployment with testing scripts.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

35. A company wants to improve cost awareness for its Amazon EMR platform. The company has allocated budgets for each team's Amazon EMR usage. When a budgetary threshold is reached, a notification should be sent by email to the budget office's distribution list. Teams should be able to view their EMR cluster expenses to date. A solutions architect needs to create a solution that ensures the policy is proactively and centrally enforced in a multi-account environment. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)
    - [ ] A. Update the AWS CloudFormation template to include the AWS::Budgets::Budget::resource with the NotificationsWithSubscribers property.
    - [ ] B. Implement Amazon CloudWatch dashboards for Amazon EMR usage.
    - [ ] C. Create an EMR bootstrap action that runs at startup that calls the Cost Explorer API to set the budget on the cluster with the GetCostForecast and NotificationsWithSubscribers actions.
    - [ ] D. Create an AWS Service Catalog portfolio for each team. Add each team's Amazon EMR cluster as an AWS CloudFormation template to their Service Catalog portfolio as a Product.
    - [ ] E. Create an Amazon CloudWatch metric for billing. Create a custom alert when costs exceed the budgetary threshold.

    <details>
       <summary>Answer</summary>

       重复题，答案AD

    </details>

36. A company is migrating its on-premises systems to AWS. The user environment consists of the following systems: -Windows and Linux virtual machines running on VMware. -Physical servers running Red Hat Enterprise Linux. The company wants to be able to perform the following steps before migrating to AWS: -Identify dependencies between on-premises systems. -Group systems together into applications to build migration plans. -Review performance data using Amazon Athena to ensure that Amazon EC2 instances are right-sized. How can these requirements be met?
    - [ ] A. Populate the AWS Application Discovery Service import template with information from an on-premises configuration management database (CMDB). Upload the completed import template to Amazon S3, then import the data into Application Discovery Service.
    - [ ] B. Install the AWS Application Discovery Service Discovery Agent on each of the on-premises systems. Allow the Discovery Agent to collect data for a period of time.
    - [ ] C. Install the AWS Application Discovery Service Discovery Connector on each of the on-premises systems and in VMware vCenter. Allow the Discovery Connector to collect data for one week.
    - [ ] D. Install the AWS Application Discovery Service Discovery Agent on the physical on-premises servers. Install the AWS Application Discovery Service Discovery Connector in VMware vCenter. Allow the Discovery Agent to collect data for a period of time.

    <details>
       <summary>Answer</summary>

       物理主机用Application Discovery Service Discovery Agent，虚拟机用Application Discovery Service Discovery Connector. 答案D

    </details>

37. A company hosts a web application on AWS in the us-east-1 Region. The application server are distributed across three Availability Zones behind an Application Load Balancer. The database is hosted in MYSQL database on an Amazon EC2 instance. A solutions architect needs to design a cross-Region data recovery solution using AWS services with an RTO of less than 5 minutes and an RPO of less than 1 minute. The solutions architect is deploying application servers in us-west-2, and has configured Amazon Route 53 hearth checks and DNS failover to us-west-2.Which additional step should the solutions architect take?
    - [ ] A. Migrate the database to an Amazon RDS for MySQL instance with a cross-Region read replica in us-west-2.
    - [ ] B. Migrate the database to an Amazon Aurora global database with the primary in us-east-1 and the secondary in us-west-2.
    - [ ] . Migrate the database to an Amazon RDS for MySQL instance with a Multi-AZ deployment.
    - [ ] . Create a MySQL standby database on an Amazon EC2 instance in us-west-2.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

38. A company wants to migrate its on-premises data center to the AWS Cloud. This includes thousands of virtualized Linux and Microsoft Windows servers, SAN storage, Java and PHP applications with MYSQL, and Oracle databases. There are many department services hosted either in the same data center or externally. The technical documentation is incomplete and outdated. A solutions architect needs to understand the current environment and estimate the cloud resource costs after the migration. Which tools or services should solutions architect use to plan the cloud migration (Choose three.)
    - [ ] A. AWS Application Discovery Service
    - [ ] B. AWS SMS
    - [ ] C. AWS x-Ray
    - [ ] D. AWS Cloud Adoption Readness Tool (CART)
    - [ ] E. Amazon Inspector
    - [ ] F. AWS Migration Hub

    <details>
       <summary>Answer</summary>

       - 使用AWS应用发现服务来收集关于正在运行的虚拟机和服务器内正在运行的应用程序的信息。
       - 使用AWS云采用准备工具（CART）来生成迁移评估报告，以确定组织技能和流程的差距。
       - 使用AWS Migration Hub来发现和跟踪跨AWS和合作伙伴解决方案的应用程序迁移状态。
       - 答案ADF

    </details>

39. A company decided to purchase Amazon EC2 Reserved Instances. A solutions architect is tasked with implementing a solution where only the master account in AWS Organizations is able to purchase the Reserved Instances. Current and future member accounts should be blocked from purchasing Reserved Instances. Which solution will meet these requirements?
    - [ ] A. Create an SCP with the Deny effect on the ec2:PurchaseReservedInstancesOffering action. Attach the SCP to the root of the organization.
    - [ ] B. Create a new organizational unit (OU) Move all current member accounts to the new OU. Create an SCP with the Deny effect on the ec2:PurchaseReservedInstancesOffering action. Attach the SCP to the new OU.
    - [ ] C. Create an AWS Config rule event that triggers automation that will terminate any Reserved Instances launched by member accounts.
    - [ ] D. Create two new organizational units (OUs): OU1 and OU2. Move all member accounts to OU2 and the master account to OU1. Create an SCP with the Allow effect on the ec2:PurchaseReservedInstancesOffering action. Attach the SCP to OU1.

    <details>
       <summary>Answer</summary>

       - A. 错误，AWS不建议将SCP附加到组织的根。
       - B. 正确。
       - C. 错误，虽然终止了实例但是并不能组织购买。
       - D. 错误，我们不能使用SCP来执行主账户/管理账户的任何操作。另外，默认权限是fullaccess，为什么我们需要allow:ec2:PurchaseReservedInstancesOffering？

    </details>

40. A solutions architect needs to advise a company on how to migrate its on-premises data processing application to the AWS Cloud. Currently, users upload input files through a web portal. The web server then stores the uploaded files on NAS and messages the processing server over a message queue. Each media file can take up to 1 hour to process. The company has determined that the number of media files awaiting processing is significantly higher during business hours, with the number of files rapidly declining after business hours. What is the MOST cost-effective migration recommendation?
    - [ ] A. Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.
    - [ ] B. Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, create a new Amazon EC2 instance to pull requests from the queue and process the files. Store the processed files in Amazon EFS. Shut down the EC2 instance after the task is complete.
    - [ ] C. Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in Amazon EFS.
    - [ ] D. Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. Use Amazon EC2 instances in an EC2 Auto Seating group to pull requests from the queue and process the files. Scale the EC2 instances based on the SQS queue length. Store the processed files in an Amazon S3 bucket.

    <details>
       <summary>Answer</summary>

       简单题，答案D。

    </details>

41. A company has a media catalog with metadata for each item in the catalog. Different types of metadata are extracted from the media items by an application running on AWS Lambda. Metadata is extracted according to a number of rules with the output stored in an Amazon ElastiCache for Redis cluster. The extraction process is done in batches and takes around 40 minutes to complete. The update process is triggered manually whenever the metadata extraction rules change. The company wants to reduce the amount of time it takes to extract metadata from its media catalog. To achieve this, a solutions architect has split the single metadata extraction Lambda function into a Lambda function for each type of metadata. Which additional steps should the solutions architect take to meet the requirements?
    - [ ] A. Create an AWS Step Functions workflow to run the Lambda functions in parallel. Create another Step Functions workflow that retrieves a list of media items and executes a metadata extraction workflow for each one.
    - [ ] B. Create an AWS Batch compute environment for each Lambda function. Configure an AWS Batch job queue for the compute environment. Create a Lambda function to retrieve a list of media items and write each item to the job queue.
    - [ ] C. Create an AWS Step Functions workflow to run the Lambda functions in parallel. Create a Lambda function to retrieve a list of media items and write each item to an Amazon SQS queue. Configure the SQS queue as an input to the Step Functions workflow.
    - [ ] D. Create a Lambda function to retrieve a list of media items and write each item to an Amazon SQS queue. Subscribe the metadata extraction Lambda functions to the SQS queue with a large batch size.

    <details>
       <summary>Answer</summary>

       答案A -> [ref](https://aws.amazon.com/cn/blogs/compute/accelerating-workloads-using-parallelism-in-aws-step-functions/)

    </details>

42. An AWS partner company is building a service in AWS Organizations using its organization named org1. This service requires the partner company to have access to AWS resources in a customer account, which is in a separate organization named org2. The company must establish least privilege security access using an API or command line tool to the customer account. What is the MOST secure way to allow org1 to access resources in org2?
    - [ ] A. The customer should provide the partner company with their AWS account access keys to log in and perform the required tasks.
    - [ ] B. The customer should create an IAM user and assign the required permissions to the IAM user. The customer should then provide the credentials to the partner company to log in and perform the required tasks.
    - [ ] C. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN) when requesting access to perform the required tasks.
    - [ ] D. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN) including the external ID in the IAM role's trust policy when requesting access to perform the required tasks.

    <details>
       <summary>Answer</summary>

       简单题，答案D。

    </details>

43. A company’s security compliance requirements state that all Amazon EC2 images must be scanned for vulnerabilities and must pass a CVE assessment. A solutions architect is developing a mechanism to create security-approved AMIs that can be used by developers. Any new AMIs should go through an automated assessment process and be marked as approved before developers can use them. The approved images must be scanned every 30 days to ensure compliance. Which combination of steps should the solutions architect take to meet these requirements while following best practices? (Choose two.)
    - [ ] A. Use the AWS Systems Manager EC2 agent to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.
    - [ ] B. Use AWS Lambda to write automatic approval rules. Store the approved AMI list in AWS Systems Manager Parameter Store. Use Amazon EventBridge to trigger an AWS Systems Manager Automation document on all EC2 instances every 30 days.
    - [ ] C. Use Amazon Inspector to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.
    - [ ] D. Use AWS Lambda to write automatic approval rules. Store the approved AMI list in AWS Systems Manager Parameter Store. Use a managed AWS Config rule for continuous scanning on all EC2 instances, and use AWS Systems Manager Automation documents for remediation.
    - [ ] E. Use AWS CloudTrail to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.

    <details>
       <summary>Answer</summary>

       答案BC。

    </details>

44. A company is launching a web-based application in multiple regions around the world. The application consists of both static content stored in a private Amazon S3 bucket and dynamic content hosted in Amazon ECS containers content behind an Application Load Balancer (ALB). The company requires that the static and dynamic application content be accessible through Amazon CloudFront only. Which combination of steps should a solutions architect recommend to restrict direct content access to CloudFront? (Choose three.)
    - [ ] A. Create a web ACL in AWS WAF with a rule to validate the presence of a custom header and associate the web ACL with the ALB.
    - [ ] B. Create a web ACL in AWS WAF with a rule to validate the presence of a custom header and associate the web ACL with the CloudFront distribution.
    - [ ] C. Configure CloudFront to add a custom header to origin requests.
    - [ ] D. Configure the ALB to add a custom header to HTTP requests.
    - [ ] E. Update the S3 bucket ACL to allow access from the CloudFront distribution only.
    - [ ] F. Create a CloudFront Origin Access Identity (OAI) and add it to the CloudFront distribution. Update the S3 bucket policy to allow access to the OAI only.

    <details>
       <summary>Answer</summary>

       答案ACF -> [ref](https://blogs.halodoc.io/implementation-of-custom-header-to-origin-requests/)

    </details>

45. A company has multiple lines of business (LOBs) that roll up to the parent company. The company has asked its solutions architect to develop a solution with the following requirements: -Produce a single AWS invoice for all of the AWS accounts used by its LOBs. -The costs for each LOB account should be broken out on the invoice. -Provide the ability to restrict services and features in the LOB accounts, as defined by the company's governance policy. -Each LOB account should be delegated full administrator permissions, regardless of the governance policy. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)
    - [ ] A. Use AWS Organizations to create an organization in the parent account for each LOB. Then, invite each LOB account to the appropriate organization.
    - [ ] B. Use AWS Organizations to create a single organization in the parent account. Then, invite each LOB's AWS account to pin the organization.
    - [ ] C. Implement service quotas to define the services and features that are permitted and apply the quotas to each LOB as appropriate.
    - [ ] D. Create an SCP that allows only approved services and features, then apply the policy to the LOB accounts. Enable consolidated billing in the parent account's billing console and link the LOB accounts.
    - [ ] E. Enable consolidated billing in the parent accounts billing console and link the LOB account.

    <details>
       <summary>Answer</summary>

       开启组织以后集合收费是默认开启的，需要SCP去限制权限，答案BD。

    </details>

46. A solutions architect has been assigned to migrate a 50 TB Oracle data warehouse that contains sales data from on-premises to Amazon Redshift. Major updates to the sales data occur on the final calendar day of the month. For the remainder of the month, the data warehouse only receives minor daily updates and is primarily used for reading and reporting. Because of this, the migration process must start on the first day of the month and must be complete before the next set of updates occur. This provides approximately 30 days to complete the migration and ensure that the minor daily changes have been synchronized with the Amazon Redshift data warehouse. Because the migration cannot impact normal business network operations, the bandwidth allocated to the migration for moving data over the internet is 50 Mbps. The company wants to keep data migration costs low. Which steps will allow the solutions architect to perform the migration within the specified timeline?
    - [ ] A. Install Oracle database software on an Amazon EC2 instance. Configure VPN connectivity between AWS and the company's data center. Configure the Oracle database running on Amazon EC2 to join the Oracle Real Application Clusters (RAC). When the Oracle database on Amazon EC2 finishes synchronizing, create an AWS DMS ongoing replication task to migrate the data from the Oracle database on Amazon EC2 to Amazon Redshift. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] B. Create an AWS Snowball import job. Export a backup of the Oracle data warehouse. Copy the exported data to the Snowball device. Return the Snowball device to AWS. Create an Amazon RDS for Oracle database and restore the backup file to that RDS instance. Create an AWS DMS task to migrate the data from the RDS for Oracle database to Amazon Redshift. Copy daily incremental backups from Oracle in the data center to the RDS for Oracle database over the internet. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] C. Install Oracle database software on an Amazon EC2 instance. To minimize the migration time, configure VPN connectivity between AWS and the company's data center by provisioning a 1Gbps AWS Direct Connect connection. Configure the Oracle database running on Amazon EC2 to be a read replica of the data center Oracle database. Start the synchronization process between the company's on-premises data center and the Oracle database on Amazon EC2. When the Oracle database on Amazon EC2 is synchronized with the on-premises database, create an AWS DMS ongoing replication task to migrate the data from the Oracle database read replica that is running on Amazon EC2 to Amazon Redshift. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] D. Create an AWS Snowball import job. Configure a server in the company's data center with an extraction agent. Use AWS SCT to manage the extraction agent and convert the Oracle schema to an Amazon Redshift schema. Create a new project in AWS SCT using the registered data extraction agent. Create a local task and an AWS DMS task in AWS SCT with replication of ongoing changes. Copy data to the Snowball device and return the Snowball device to AWS. Allow AWS DMS to copy data from Amazon S3 to Amazon Redshift. Verify that the data migration is complete and perform the cut over to Amazon Redshift.

    <details>
       <summary>Answer</summary>

       简单题，答案D

    </details>

47. A solutions architect is designing a disaster recovery strategy for a three-tier application. The application has an RTO of 30 minutes and an RPO of 5 minutes for the data tier. The application and web tiers are stateless and leverage a fleet of Amazon EC2 instances. The data tier consists of a 50 TB Amazon Aurora database. Which combination of steps satisfies the RTO and RPO requirements while optimizing costs? (Choose two.)
    - [ ] A. Create daily snapshots of the EC2 instances and replicate the snapshots to another Region.
    - [ ] B. Deploy a hot standby of the application to another Region.
    - [ ] C. Create snapshots of the Aurora database every 5 minutes.
    - [ ] D. Create a cross-Region Aurora Replica of the database.
    - [ ] E. Create an AWS Backup job to replicate data to another Region.

    <details>
       <summary>Answer</summary>

       RTO三十分钟的话从快照回复EC2够够的，所以A正确，RPO是说数据库的，欧若拉的跨区域副本就可以，答案AD。

    </details>

48. A company has a primary Amazon S3 bucket that receives thousands of objects every day. The company needs to replicate these objects into several other S3 buckets from various AWS accounts. A solutions architect is designing a new AWS Lambda function that is triggered when an object is created in the main bucket and replicates the object into the target buckets. The objects do not need to be replicated in real time. There is concern that this function may impact other critical Lambda functions due to Lambda's regional concurrency limit. How can the solutions architect ensure this new Lambda function will not impact other critical Lambda functions?
    - [ ] A. Set the new Lambda function reserved concurrency limit to ensure the executions do not impact other critical Lambda functions. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.
    - [ ] B. Increase the execution timeout of the new Lambda function to 5 minutes. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.
    - [ ] C. Configure S3 event notifications to add events to an Amazon SQS queue in a separate account. Create the new Lambda function in the same account as the SQS queue and trigger the function when a message arrives in the queue.
    - [ ] D. Ensure the new Lambda function implements an exponential backoff algorithm. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.

    <details>
       <summary>Answer</summary>

       答案A -> [ref](https://aws.amazon.com/cn/blogs/compute/managing-aws-lambda-function-concurrency/)

    </details>

49. A company wants to run a serverless application on AWS. The company plans to provision its application in Docker containers running in an Amazon ECS cluster. The application requires a MySQL database and the company plans to use Amazon RDS. The company has documents that need to be accessed frequently for the first 3 months, and rarely after that. The document must be retained for 7 years. What is the MOST cost-effective solution to meet these requirements?
    - [ ] A. Create an ECS cluster using On-Demand Instances. Provision the database and its read replicas in Amazon RDS using Spot Instances. Store the documents in an encrypted EBS volume, and create a cron job to delete the documents after 7 years.
    - [ ] B. Create an ECS cluster using a fleet of Spot Instances, with Spot Instance draining enabled. Provision the database and its read replicas in Amazon RDS using Reserved Instances. Store the documents in a secured Amazon S3 bucket with a lifecycle policy to move the documents that are older than 3 months to Amazon S3 Glacier, then delete the documents from Amazon S3 Glacier that are more than 7 years old.
    - [ ] C. Create an ECS cluster using On-Demand Instances. Provision the database and its read replicas in Amazon RDS using On-Demand Instances. Store the documents in Amazon EFS. Create a cron job to move the documents that are older than 3 months to Amazon S3 Glacier. Create an AWS Lambda function to delete the documents in S3 Glacier that are older than 7 years.
    - [ ] D. Create an ECS cluster using a fleet of Spot Instances with Spot Instance draining enabled. Provision the database and its read replicas in Amazon RDS using On-Demand Instances. Store the documents in a secured Amazon S3 bucket with a lifecycle policy to move the documents that are older than 3 months to Amazon S3 Glacier, then delete the documents in Amazon S3 Glacier after 7 years.

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

50. A media company is serving video files stored in Amazon S3 using Amazon CloudFront. The development team needs access to the logs to diagnose faults and perform service monitoring. The log files from CloudFront may contain sensitive information about users. The company uses a log processing service to remove sensitive information before making the logs available to the development team. The company has the following requirements for the unprocessed logs: -The logs must be encrypted at rest and must be accessible by the log processing service only. -Only the data protection team can control access to the unprocessed log files. -AWS CloudFormation templates must be stored in AWS CodeCommit. -AWS CodePipeline must be triggered on commit to perform updates made to CloudFormation templates. -CloudFront is already writing the unprocessed logs to an Amazon S3 bucket, and the log processing service is operating against this S3 bucket. Which combination of steps should a solutions architect take to meet the company's requirements? (Choose two.)
    - [ ] A. Create an AWS KMS key that allows the AWS Logs Delivery account to generate data keys for encryption. Configure S3 default encryption to use server-side encryption with KMS managed keys (SSE-KMS) on the log storage bucket using the new KMS key. Modify the KMS key policy to allow the log processing service to perform decrypt operations.
    - [ ] B. Create an AWS KMS key that follows the CloudFront service role to generate data keys for encryption. Configure S3 default encryption to use KMS managed keys (SSE-KMS) on the log storage bucket using the new KMS key Modify the KMS key policy to allow the log processing service to perform decrypt operations.
    - [ ] C. Configure S3 default encryption to use AWS KMS managed keys (SSE-KMS) on the log storage bucket using the AWS Managed S3 KMS key. Modify the KMS key policy to allow the CloudFront service role to generate data keys for encryption Modify the KMS key policy to allow the log processing service to perform decrypt operations.
    - [ ] D. Create a new CodeCommit repository for the AWS KMS key template. Create an IAM policy to allow commits to the new repository and attach it to the data protection team's users. Create a new CodePipeline pipeline with a custom IAM role to perform KMS key updates using CloudFormation. Modify the KMS key policy to allow the CodePipeline IAM role to modify the key policy.
    - [ ] E. Use the existing CodeCommit repository for the AWS KMS key template. Create an IAM policy to allow commits to the new repository and attach it to the data protection team's users. Modify the existing CodePipeline pipeline to use a custom IAM role and to perform KMS key updates using CloudFormation. Modify the KMS key policy to allow the CodePipeline IAM role to modify the key policy.

    <details>
       <summary>Answer</summary>

       答案AD。

    </details>

51. A company's service for video game recommendations has just gone viral. The company has new users from all over the world. The website for the service is hosted on a set of Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The website consists of static content with different resources being loaded depending on the device type. Users recently reported that the load time for the website has increased. Administrators are reporting high loads on the EC2 instances that host the service. Which set actions should a solutions architect take to improve response times?
    - [ ] A. Create separate Auto Scaling groups based on device types. Switch to Network Load Balancer (NLB). Use the User-Agent HTTP header in the NLB to route to a different set of EC2 instances.
    - [ ] B. Move content to Amazon S3. Create an Amazon CloudFront distribution to serve content out of the S3 bucket. Use Lambda@Edge to load different resources based on the User-Agent HTTP header.
    - [ ] C. Create a separate ALB for each device type. Create one Auto Scaling group behind each ALB. Use Amazon Route 53 to route to different ALBs depending on the User-Agent HTTP header.
    - [ ] D. Move content to Amazon S3. Create an Amazon CloudFront distribution to serve content out of the S3 bucket. Use the User-Agent HTTP header to load different content.

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

52. A company is planning a large event where a promotional offer will be introduced. The company's website is hosted on AWS and backed by an Amazon RDS for PostgreSQL DB instance. The website explains the promotion and includes a sign-up page that collects user information and preferences. Management expects large and unpredictable volumes of traffic periodically, which will create many database writes. A solutions architect needs to build a solution that does not change the underlying data model and ensures that submissions are not dropped before they are committed to the database. Which solution meets these requirements?
    - [ ] A. Immediately before the event, scale up the existing DB instance to meet the anticipated demand. Then scale down after the event.
    - [ ] B. Use Amazon SQS to decouple the application and database layers. Configure an AWS Lambda function to write items from the queue into the database.
    - [ ] C. Migrate to Amazon DynamoDB and manage throughput capacity with automatic scaling.
    - [ ] D. Use Amazon ElastiCache for Memcached to increase write capacity to the DB instance.

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

53. A team collects and routes behavioral data for an entire company. The company runs a Multi-az PC environment with public subnets, private subnets, and in internet gateway Each public subnet also contains a NAT gateway Most of the company’s applications read from and write to Amazon Kinesis Data Streams Most of the workloads run in private subnets. A solutions architect must review the infrastructure The solutions architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the Ec2-other category is consistently high A further review shows that NAT gateway Bytes charges are increasing the cost in the Ec2-other category. What should the solutions architect do to meet these requirements?
    - [ ] A. Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.
    - [ ] B. Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.
    - [ ] C. Enable VPC Flow Logs and Amazon Detective Review Detective findings for traffic that is not related to Kinesis Data Streams. Configure security groups to block that traffic.
    - [ ] D. Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that the VPC endpoint policy allows traffic from the applications.

    <details>
       <summary>Answer</summary>

       由于先前使用的是NAT，那么流量是从内向外的，答案D。

    </details>

54. A large financial company is deploying applications that consist of Amazon EC2 and Amazon RDS instances to the AWS Cloud using AWS CloudFormation. The company wants to ensure that developers do not lose data by accidentally removing or replacing RDS instances when updating the CloudFormation stack. Developers also still need to be able to modify or remove EC2 instances as needed. How should the company change the stack policy to meet these requirements?The CloudFormation stack has the following stack policy:

    ```json
    {
      "Statement": [
         {
            "Effevt": "Allow",
            "Action": [
            "Update:*"
            ],
            "Principal": "*",
            "Resource": "*"
         }
      ]
    }

    ```

    - [ ] A. Modify the statement to specify"Effect":"Deny", "Action":["Update:*"] for all logical RDS resources.
    - [ ] B. Modify the statement to specify"Effect":"Deny", "Action":["Update:Delete"] for all logical RDS resources.
    - [ ] C. Add a second statement that specifies"Effect":"Deny", "Action":["Update:Delete", "Update:Replace"] for all logical RDS resources.
    - [ ] D. Add a second statement that specifies"Effect":"Deny", "Action":["Update:*"] for all logical RDS resources.

    <details>
       <summary>Answer</summary>

       答案C -> [ref](https://docs.aws.amazon.com/zh_cn/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html#protect-stack-resources-modifying)

    </details>

55. A company is currently in the design phase of an application that will need an RPO of less than 5 minutes and an RTO of less than 10 minutes. The solutions architecture team is forecasting that the database will store approximately 10 TB of data. As part of the design, they are looking for a database solution that will provide the company with the ability to fail over to a secondary Region. Which solution will meet these business requirements at the LOWEST cost?
    - [ ] A. Deploy an Amazon Aurora DB cluster and take snapshots of the cluster every 5 minutes. Once a snapshot is complete, copy the snapshot to a secondary Region to serve as a backup in the event of a failure.
    - [ ] B. Deploy an Amazon RDS instance with a cross-Region read replica in a secondary Region. In the event of a failure, promote the read replica to become the primary.
    - [ ] C. Deploy an Amazon Aurora DB cluster in the primary Region and another in a secondary Region. Use AWS DMS to keep the secondary Region in sync.
    - [ ] D. Deploy an Amazon RDS instance with a read replica in the same Region. In the event of a failure, promote the read replica to become the primary.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

56. A solutions architect has an operational workload deployed on Amazon EC2 instances in an Auto Scaling group. The VPC architecture spans two Availability Zones (AZ) with a subnet in each that the Auto Scaling group is targeting. The VPC is connected to an on-premises environment and connectivity cannot be interrupted. The maximum size of the Auto Scaling group is 20 instances in service. The VPC IPv4 addressing is as follows: -VPC CIDR: 10.0.0.0/23. -AZ1 subnet CIDR: 10.0.0.0/24 -AZ2 subnet CIDR: 10.0.1.0/24. Since deployment, a third AZ has become available in the Region. The solutions architect wants to adopt the new AZ without adding additional IPv4 address space and without service downtime. Which solution will meet these requirements?
    - [ ] A. Update the Auto Scaling group to use the AZ2 subnet only. Delete and re-create the AZ1 subnet using half the previous address space. Adjust the Auto Scaling group to also use the new AZ1 subnet. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Remove the current AZ2 subnet. Create a new AZ2 subnet using the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.
    - [ ] B. Terminate the EC2 instances in the AZ1 subnet. Delete and re-create the AZ1 subnet using half the address space. Update the Auto Scaling group to use this new subnet. Repeat this for the second AZ. Define a new subnet in AZ3, then update the Auto Scaling group to target all three new subnets.
    - [ ] C. Create a new VPC with the same IPv4 address space and define three subnets, with one for each AZ. Update the existing Auto Scaling group to target the new subnets in the new VPC.
    - [ ] D. Update the Auto Scaling group to use the AZ2 subnet only. Update the AZ1 subnet to have the previous address space. Adjust the Auto Scaling group to also use the AZ1 subnet again. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Update the current AZ2 subnet and assign the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.

    <details>
       <summary>Answer</summary>

       已经建好的VPC的IP地址等是无法被修改的，必须得删了重建，答案A。

    </details>

57. A company is storing data on premises on a Windows file server. The company produces 5 GB of new data daily. The company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud. The company already has established an AWS Direct Connect connection between the on-premises network and AWS. Which data migration strategy should the company use?
    - [ ] A. Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway.
    - [ ] B. Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx.
    - [ ] C. Use AWS Data Pipeline to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).
    - [ ] D. Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

58. A company uses AWS Organizations to manage one parent account and nine member accounts. The number of member accounts is expected to grow as the business grows. A security engineer has requested consolidation of AWS CloudTrail logs into the parent account for compliance purposes. Existing logs currently stored in Amazon S3 buckets in each individual member account should not be lost. Future member accounts should comply with the logging strategy. Which operationally efficient solution meets these requirements?
    - [ ] A. Create an AWS Lambda function in each member account with a cross-account role. Trigger the Lambda functions when new CloudTrail logs are created and copy the CloudTrail logs to a centralized S3 bucket. Set up an Amazon CloudWatch alarm to alert if CloudTrail is not configured properly.
    - [ ] B. Configure CloudTrail in each member account to deliver log events to a central S3 bucket. Ensure the central S3 bucket policy allows PutObject access from the member accounts. Migrate existing logs to the central S3 bucket. Set up an Amazon CloudWatch alarm to alert if CloudTrail is not configured properly.
    - [ ] C. Configure an organization-level CloudTrail in the parent account to deliver log events to a central S3 bucket. Migrate the existing CloudTrail logs from each member account to the central S3 bucket. Delete the existing CloudTrail and logs in the member accounts.
    - [ ] D. Configure an organization-level CloudTrail in the parent account to deliver log events to a central S3 bucket. Configure CloudTrail in each member account to deliver log events to the central S3 bucket.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

59. A company provides a centralized Amazon EC2 application hosted in a single shared VPC. The centralized application must be accessible from client applications running in the VPCs of other business units. The centralized application front end is configured with a Network Load Balancer (NLB) for scalability. Up to 10 business unit VPCs will need to be connected to the shared VPC. Some of the business unit VPC CIDR blocks overlap with the shared VPC, and some overlap with each other. Network connectivity to the centralized application in the shared VPC should be allowed from authorized business unit VPCs only. Which network configuration should a solutions architect use to provide connectivity from the client applications in the business unit VPCs to the centralized application in the shared VPC?
    - [ ] A. Create an AWS Transit Gateway. Attach the shared VPC and the authorized business unit VPCs to the transit gateway. Create a single transit gateway route table and associate it with all of the attached VPCs. Allow automatic propagation of routes from the attachments into the route table. Configure VPC routing tables to send traffic to the transit gateway
    - [ ] B. Create a VPC endpoint service using the centralized application NLB and enable the option to require endpoint acceptance. Create a VPC endpoint in each of the business unit VPCs using the service name of the endpoint service. Accept authorized endpoint requests from the endpoint service console.
    - [ ] C. Create a VPC peering connection from each business unit VPC to the shared VPC. Accept the VPC peering connections from the shared VPC console. Configure VPC routing tables to send traffic to the VPC peering connection.
    - [ ] D. Configure a virtual private gateway for the shared VPC and create customer gateways for each of the authorized business unit VPCs. Establish a Site-to-Site VPN connection from the business unit VPCs to the shared VPC. Configure VPC routing tables to send traffic to the VPN connection.

    <details>
       <summary>Answer</summary>

       因为重叠了，答案B。

    </details>

60. A company has an on-premises monitoring solution using a PostgreSQL database for persistence of events. The database is unable to scale due to heavy ingestion and it frequently runs out of storage. The company wants to create a hybrid solution and has already set up a VPN connection between its network and AWS. The solution should include the following attributes: -Managed AWS services to minimize operational complexity. -A buffer that automatically scales to match the throughput of data and requires no ongoing administration. -A visualization tool to create dashboards to observe events in near-real time. -Support for semi-structured JSON data and dynamic schemas. Which combination of components will enable the company to create a monitoring solution that will satisfy these requirements? (Choose two.)
    - [ ] A. Use Amazon Kinesis Data Firehose to buffer events. Create an AWS Lambda function to process and transform events.
    - [ ] B. Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events.
    - [ ] C. Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.
    - [ ] D. Configure Amazon Elasticsearch Service (Amazon ES) to receive events. Use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.
    - [ ] E. Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.

    <details>
       <summary>Answer</summary>

       Firehose是完全托管的而Stream不是，首先选A，一看见Semi-structured JSON直接上Kiban，答案AD。

    </details>
