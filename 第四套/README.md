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

5. A solutions architect has implemented a SAML 2.0 federated identity solution with their company's on-premises identity provider (IdP) to authenticate users' access to the AWS environment. When the solutions architect tests authentication through the federated identity web portal, access to the AWS environment is granted. However, when test users attempt to authenticate through the federated identity web portal, they are not able to access the AWS environment. Which items should the solutions architect check to ensure identity federation is properly configured? (Choose three).
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

      答案AD -> [ref1](https://docs.aws.amazon.com/zh_cn/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html) [ref2](https://docs.aws.amazon.com/zh_cn/servicecatalog/latest/adminguide/catalogs_budgets.html)

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

9. A web application is hosted in a dedicated VPC that is connected to a company's on-premises data center over a Site-to-Site VPN connection. The application is accessible from the company network only. This is a temporary non-production application that is used during business hours. The workload is generally low with occasional surges. The application has an Amazon Aurora MySQL provisioned database cluster on the backend. The VPC has an internet gateway and a NAT gateways attached. The web servers are in private subnets in an Auto Scaling group behind an Elastic Load Balancer. The web servers also upload data to an Amazon S3 bucket through the internet. A solutions architect needs to reduce operational costs and simplify the architecture. Which strategy should the solutions architect use?
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

21. A solutions architect is designing a network for a new cloud deployment. Each account will need autonomy to modify route tables and make changes. Centralized and controlled egress internet connectivity is also needed. The cloud footprint is expected to grow to thousands of AWS accounts. Which architecture will meet these requirements?
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

    <details>
       <summary>Answer</summary>

       答案ADF

    </details>

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

       简单题，答案B -> [ref](https://aws.amazon.com/premiumsupport/knowledge-center/create-vpn-direct-connect/)

    </details>

32. A company is creating a centralized logging service running on Amazon EC2 that will receive and analyze logs from hundreds of AWS accounts. AWS PrivateLink is being used to provide connectivity between the client services and the logging service. In each AWS account with a client an interface endpoint has been created for the logging service and is available. The logging service running on EC2 instances with a Network Load Balancer (NLB) are deployed in different subnets. The clients are unable to submit logs using the VPC endpoint. Which combination of steps should a solutions architect take to resolve this issue? (Select TWO)
    - [ ] A. Check that the NACL is attached to the logging service subnet to allow communications to and from the NLB subnets. Check that the NACL is attached to the NLB subnet to allow communications to and from the logging service subnets running on EC2 instances.
    - [ ] B. Check that the NACL is attached to the logging service subnets to allow communications to and from the interface endpoint subnets. Check that the NACL is attached to the interface endpoint subnet to allow communications to and from the logging service subnets running on EC2 instances.
    - [ ] C. Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the NLB subnets.
    - [ ] D. Check the security group for the logging service running on EC2 instances to ensure it allows ingress from the clients.
    - [ ] E. Check the security group for the NLB to ensure it allows ingress from the interface endpoint subnets.

    <details>
       <summary>Answer</summary>

       简单题，答案AC

    </details>

33. A solutions architect needs to define a reference architecture for a solution for three-tier applications with web, application, and NoSQL data layers. The reference architecture must meet the following requirements: -High availability within an AWS Region. -Able to fail over in 1 minute to another AWS Region for disaster recovery. -Provide the most efficient solution while minimizing the impact on the user experience. Which combination of steps will meet these requirements? (Choose three.)
    - [ ] A. Use an Amazon Route 53 weighted routing policy set to 100/0 across the two selected Regions. Set Time to Live (TTL) to 1 hour.
    - [ ] B. Use an Amazon Route 53 failover routing policy for failover from the primary Region to the disaster recovery Region. Set Time to Live (TTL) to 30 seconds.
    - [ ] C. Use a global table within Amazon DynamoDB so data can be accessed in the two selected Regions.
    - [ ] D. Back up data from an Amazon DynamoDB table in the primary Region every 60 minutes and then write the data to Amazon S3. Use S3 cross-Region replication to copy the data from the primary Region to the disaster recovery Region. Have a script import the data into DynamoDB in a disaster recovery scenario. Implement a hot standby model using Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use zonal Reserved Instances for the minimum number of servers and On-Demand Instances for any additional resources.
    - [ ] E. Use Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use Spot Instances for the required resources.

    <details>
       <summary>Answer</summary>

       答案BCD

    </details>

34. A company runs an application on a fleet of Amazon EC2 instances. The application requires low latency and random access to 100 GB of data. The application must be able to access the data at up to 3.000 IOPS. A Development team has configured the EC2 launch template to provision a 100-GB Provisioned IOPS (PIOPS) Amazon EBS volume with 3 000 IOPS provisioned. A Solutions Architect is tasked with lowering costs without impacting performance and durability.Which action should be taken?
    - [ ] A. Create an Amazon EFS file system with the performance mode set to Max I/O. Configure the EC2 operating system to mount the EFS file system.
    - [ ] B. Create an Amazon EFS file system with the throughput mode set to Provisioned. Configure the EC2 operating system to mount the EFS file system.
    - [ ] C. Update the EC2 launch template to allocate a new 1-TB EBS General Purpose SSO (gp2) volume.
    - [ ] D. Update the EC2 launch template to exclude the PIOPS volume. Configure the application to use local instance storage.

    <details>
       <summary>Answer</summary>

       答案C

    </details>

35. A company recently transformed its legacy infrastructure provisioning scripts to AWS CloudFormation templates. The newly developed templates are hosted in the company's private GitHub repository. Since adopting CloudFormation, the company has encountered several issues with updates to the CloudFormation templates, causing execution or creating environment. Management is concerned by the increase in errors and has asked a Solutions Architect to design the automated testing of CloudFormation template updates. What should the Solution Architect do to meet these requirements?
    - [ ] A. Use AWS CodePipeline to create a change set from the CloudFormation templates stored in the private GitHub repository. Execute the change set using AWS CodeDeploy. Include a CodePipeline action to test the deployment with testing scripts run by AWS CodeBuild.
    - [ ] B. Mirror the GitHub repository to AWS CodeCommit using AWS Lambda. Use AWS CodeDeploy to create a change set from the CloudFormation templates and execute it. Have CodeDeploy test the deployment with testing scripts run by AWS CodeBuild.
    - [ ] C. Use AWS CodePipeline to create and execute a change set from the CloudFormation templates stored in the GitHub repository. Configure a CodePipeline action to be deployment with testing scripts run by AWS CodeBuild.
    - [ ] D. Mirror the GitHub repository to AWS CodeCommit using AWS Lambda. Use AWS CodeBuild to create a change set from the CloudFormation templates and execute it. Have CodeBuild test the deployment with testing scripts.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

36. A company wants to improve cost awareness for its Amazon EMR platform. The company has allocated budgets for each team's Amazon EMR usage. When a budgetary threshold is reached, a notification should be sent by email to the budget office's distribution list. Teams should be able to view their EMR cluster expenses to date. A solutions architect needs to create a solution that ensures the policy is proactively and centrally enforced in a multi-account environment. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)
    - [ ] A. Update the AWS CloudFormation template to include the AWS::Budgets::Budget::resource with the NotificationsWithSubscribers property.
    - [ ] B. Implement Amazon CloudWatch dashboards for Amazon EMR usage.
    - [ ] C. Create an EMR bootstrap action that runs at startup that calls the Cost Explorer API to set the budget on the cluster with the GetCostForecast and NotificationsWithSubscribers actions.
    - [ ] D. Create an AWS Service Catalog portfolio for each team. Add each team's Amazon EMR cluster as an AWS CloudFormation template to their Service Catalog portfolio as a Product.
    - [ ] E. Create an Amazon CloudWatch metric for billing. Create a custom alert when costs exceed the budgetary threshold.

    <details>
       <summary>Answer</summary>

       重复题，答案AD

    </details>

37. A company is migrating its on-premises systems to AWS. The user environment consists of the following systems: -Windows and Linux virtual machines running on VMware. -Physical servers running Red Hat Enterprise Linux. The company wants to be able to perform the following steps before migrating to AWS: -Identify dependencies between on-premises systems. -Group systems together into applications to build migration plans. -Review performance data using Amazon Athena to ensure that Amazon EC2 instances are right-sized. How can these requirements be met?
    - [ ] A. Populate the AWS Application Discovery Service import template with information from an on-premises configuration management database (CMDB). Upload the completed import template to Amazon S3, then import the data into Application Discovery Service.
    - [ ] B. Install the AWS Application Discovery Service Discovery Agent on each of the on-premises systems. Allow the Discovery Agent to collect data for a period of time.
    - [ ] C. Install the AWS Application Discovery Service Discovery Connector on each of the on-premises systems and in VMware vCenter. Allow the Discovery Connector to collect data for one week.
    - [ ] D. Install the AWS Application Discovery Service Discovery Agent on the physical on-premises servers. Install the AWS Application Discovery Service Discovery Connector in VMware vCenter. Allow the Discovery Agent to collect data for a period of time.

    <details>
       <summary>Answer</summary>

       物理主机用Application Discovery Service Discovery Agent，虚拟机用Application Discovery Service Discovery Connector. 答案D

    </details>

38. A company hosts a web application on AWS in the us-east-1 Region. The application server are distributed across three Availability Zones behind an Application Load Balancer. The database is hosted in MYSQL database on an Amazon EC2 instance. A solutions architect needs to design a cross-Region data recovery solution using AWS services with an RTO of less than 5 minutes and an RPO of less than 1 minute. The solutions architect is deploying application servers in us-west-2, and has configured Amazon Route 53 hearth checks and DNS failover to us-west-2. Which additional step should the solutions architect take?
    - [ ] A. Migrate the database to an Amazon RDS for MySQL instance with a cross-Region read replica in us-west-2.
    - [ ] B. Migrate the database to an Amazon Aurora global database with the primary in us-east-1 and the secondary in us-west-2.
    - [ ] C. Migrate the database to an Amazon RDS for MySQL instance with a Multi-AZ deployment.
    - [ ] D. Create a MySQL standby database on an Amazon EC2 instance in us-west-2.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

39. A company wants to migrate its on-premises data center to the AWS Cloud. This includes thousands of virtualized Linux and Microsoft Windows servers, SAN storage, Java and PHP applications with MYSQL, and Oracle databases. There are many department services hosted either in the same data center or externally. The technical documentation is incomplete and outdated. A solutions architect needs to understand the current environment and estimate the cloud resource costs after the migration. Which tools or services should solutions architect use to plan the cloud migration (Choose three.)
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

40. A company decided to purchase Amazon EC2 Reserved Instances. A solutions architect is tasked with implementing a solution where only the master account in AWS Organizations is able to purchase the Reserved Instances. Current and future member accounts should be blocked from purchasing Reserved Instances. Which solution will meet these requirements?
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

41. A solutions architect needs to advise a company on how to migrate its on-premises data processing application to the AWS Cloud. Currently, users upload input files through a web portal. The web server then stores the uploaded files on NAS and messages the processing server over a message queue. Each media file can take up to 1 hour to process. The company has determined that the number of media files awaiting processing is significantly higher during business hours, with the number of files rapidly declining after business hours. What is the MOST cost-effective migration recommendation?
    - [ ] A. Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.
    - [ ] B. Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, create a new Amazon EC2 instance to pull requests from the queue and process the files. Store the processed files in Amazon EFS. Shut down the EC2 instance after the task is complete.
    - [ ] C. Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in Amazon EFS.
    - [ ] D. Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. Use Amazon EC2 instances in an EC2 Auto Seating group to pull requests from the queue and process the files. Scale the EC2 instances based on the SQS queue length. Store the processed files in an Amazon S3 bucket.

    <details>
       <summary>Answer</summary>

       简单题，答案D。

    </details>

42. A company has a media catalog with metadata for each item in the catalog. Different types of metadata are extracted from the media items by an application running on AWS Lambda. Metadata is extracted according to a number of rules with the output stored in an Amazon ElastiCache for Redis cluster. The extraction process is done in batches and takes around 40 minutes to complete. The update process is triggered manually whenever the metadata extraction rules change. The company wants to reduce the amount of time it takes to extract metadata from its media catalog. To achieve this, a solutions architect has split the single metadata extraction Lambda function into a Lambda function for each type of metadata. Which additional steps should the solutions architect take to meet the requirements?
    - [ ] A. Create an AWS Step Functions workflow to run the Lambda functions in parallel. Create another Step Functions workflow that retrieves a list of media items and executes a metadata extraction workflow for each one.
    - [ ] B. Create an AWS Batch compute environment for each Lambda function. Configure an AWS Batch job queue for the compute environment. Create a Lambda function to retrieve a list of media items and write each item to the job queue.
    - [ ] C. Create an AWS Step Functions workflow to run the Lambda functions in parallel. Create a Lambda function to retrieve a list of media items and write each item to an Amazon SQS queue. Configure the SQS queue as an input to the Step Functions workflow.
    - [ ] D. Create a Lambda function to retrieve a list of media items and write each item to an Amazon SQS queue. Subscribe the metadata extraction Lambda functions to the SQS queue with a large batch size.

    <details>
       <summary>Answer</summary>

       答案A -> [ref](https://aws.amazon.com/cn/blogs/compute/accelerating-workloads-using-parallelism-in-aws-step-functions/)

    </details>

43. An AWS partner company is building a service in AWS Organizations using its organization named org1. This service requires the partner company to have access to AWS resources in a customer account, which is in a separate organization named org2. The company must establish least privilege security access using an API or command line tool to the customer account. What is the MOST secure way to allow org1 to access resources in org2?
    - [ ] A. The customer should provide the partner company with their AWS account access keys to log in and perform the required tasks.
    - [ ] B. The customer should create an IAM user and assign the required permissions to the IAM user. The customer should then provide the credentials to the partner company to log in and perform the required tasks.
    - [ ] C. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN) when requesting access to perform the required tasks.
    - [ ] D. The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN) including the external ID in the IAM role's trust policy when requesting access to perform the required tasks.

    <details>
       <summary>Answer</summary>

       简单题，答案D。

    </details>

44. A company’s security compliance requirements state that all Amazon EC2 images must be scanned for vulnerabilities and must pass a CVE assessment. A solutions architect is developing a mechanism to create security-approved AMIs that can be used by developers. Any new AMIs should go through an automated assessment process and be marked as approved before developers can use them. The approved images must be scanned every 30 days to ensure compliance. Which combination of steps should the solutions architect take to meet these requirements while following best practices? (Choose two.)
    - [ ] A. Use the AWS Systems Manager EC2 agent to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.
    - [ ] B. Use AWS Lambda to write automatic approval rules. Store the approved AMI list in AWS Systems Manager Parameter Store. Use Amazon EventBridge to trigger an AWS Systems Manager Automation document on all EC2 instances every 30 days.
    - [ ] C. Use Amazon Inspector to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.
    - [ ] D. Use AWS Lambda to write automatic approval rules. Store the approved AMI list in AWS Systems Manager Parameter Store. Use a managed AWS Config rule for continuous scanning on all EC2 instances, and use AWS Systems Manager Automation documents for remediation.
    - [ ] E. Use AWS CloudTrail to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.

    <details>
       <summary>Answer</summary>

       答案BC。

    </details>

45. A company is launching a web-based application in multiple regions around the world. The application consists of both static content stored in a private Amazon S3 bucket and dynamic content hosted in Amazon ECS containers content behind an Application Load Balancer (ALB). The company requires that the static and dynamic application content be accessible through Amazon CloudFront only. Which combination of steps should a solutions architect recommend to restrict direct content access to CloudFront? (Choose three.)
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

46. A company has multiple lines of business (LOBs) that roll up to the parent company. The company has asked its solutions architect to develop a solution with the following requirements: -Produce a single AWS invoice for all of the AWS accounts used by its LOBs. -The costs for each LOB account should be broken out on the invoice. -Provide the ability to restrict services and features in the LOB accounts, as defined by the company's governance policy. -Each LOB account should be delegated full administrator permissions, regardless of the governance policy. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)
    - [ ] A. Use AWS Organizations to create an organization in the parent account for each LOB. Then, invite each LOB account to the appropriate organization.
    - [ ] B. Use AWS Organizations to create a single organization in the parent account. Then, invite each LOB's AWS account to pin the organization.
    - [ ] C. Implement service quotas to define the services and features that are permitted and apply the quotas to each LOB as appropriate.
    - [ ] D. Create an SCP that allows only approved services and features, then apply the policy to the LOB accounts. Enable consolidated billing in the parent account's billing console and link the LOB accounts.
    - [ ] E. Enable consolidated billing in the parent accounts billing console and link the LOB account.

    <details>
       <summary>Answer</summary>

       开启组织以后集合收费是默认开启的，需要SCP去限制权限，答案BD。

    </details>

47. A solutions architect has been assigned to migrate a 50 TB Oracle data warehouse that contains sales data from on-premises to Amazon Redshift. Major updates to the sales data occur on the final calendar day of the month. For the remainder of the month, the data warehouse only receives minor daily updates and is primarily used for reading and reporting. Because of this, the migration process must start on the first day of the month and must be complete before the next set of updates occur. This provides approximately 30 days to complete the migration and ensure that the minor daily changes have been synchronized with the Amazon Redshift data warehouse. Because the migration cannot impact normal business network operations, the bandwidth allocated to the migration for moving data over the internet is 50 Mbps. The company wants to keep data migration costs low. Which steps will allow the solutions architect to perform the migration within the specified timeline?
    - [ ] A. Install Oracle database software on an Amazon EC2 instance. Configure VPN connectivity between AWS and the company's data center. Configure the Oracle database running on Amazon EC2 to join the Oracle Real Application Clusters (RAC). When the Oracle database on Amazon EC2 finishes synchronizing, create an AWS DMS ongoing replication task to migrate the data from the Oracle database on Amazon EC2 to Amazon Redshift. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] B. Create an AWS Snowball import job. Export a backup of the Oracle data warehouse. Copy the exported data to the Snowball device. Return the Snowball device to AWS. Create an Amazon RDS for Oracle database and restore the backup file to that RDS instance. Create an AWS DMS task to migrate the data from the RDS for Oracle database to Amazon Redshift. Copy daily incremental backups from Oracle in the data center to the RDS for Oracle database over the internet. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] C. Install Oracle database software on an Amazon EC2 instance. To minimize the migration time, configure VPN connectivity between AWS and the company's data center by provisioning a 1Gbps AWS Direct Connect connection. Configure the Oracle database running on Amazon EC2 to be a read replica of the data center Oracle database. Start the synchronization process between the company's on-premises data center and the Oracle database on Amazon EC2. When the Oracle database on Amazon EC2 is synchronized with the on-premises database, create an AWS DMS ongoing replication task to migrate the data from the Oracle database read replica that is running on Amazon EC2 to Amazon Redshift. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] D. Create an AWS Snowball import job. Configure a server in the company's data center with an extraction agent. Use AWS SCT to manage the extraction agent and convert the Oracle schema to an Amazon Redshift schema. Create a new project in AWS SCT using the registered data extraction agent. Create a local task and an AWS DMS task in AWS SCT with replication of ongoing changes. Copy data to the Snowball device and return the Snowball device to AWS. Allow AWS DMS to copy data from Amazon S3 to Amazon Redshift. Verify that the data migration is complete and perform the cut over to Amazon Redshift.

    <details>
       <summary>Answer</summary>

       简单题，答案D

    </details>

48. A solutions architect is designing a disaster recovery strategy for a three-tier application. The application has an RTO of 30 minutes and an RPO of 5 minutes for the data tier. The application and web tiers are stateless and leverage a fleet of Amazon EC2 instances. The data tier consists of a 50 TB Amazon Aurora database. Which combination of steps satisfies the RTO and RPO requirements while optimizing costs? (Choose two.)
    - [ ] A. Create daily snapshots of the EC2 instances and replicate the snapshots to another Region.
    - [ ] B. Deploy a hot standby of the application to another Region.
    - [ ] C. Create snapshots of the Aurora database every 5 minutes.
    - [ ] D. Create a cross-Region Aurora Replica of the database.
    - [ ] E. Create an AWS Backup job to replicate data to another Region.

    <details>
       <summary>Answer</summary>

       RTO三十分钟的话从快照回复EC2够够的，所以A正确，RPO是说数据库的，欧若拉的跨区域副本就可以，答案AD。

    </details>

49. A company has a primary Amazon S3 bucket that receives thousands of objects every day. The company needs to replicate these objects into several other S3 buckets from various AWS accounts. A solutions architect is designing a new AWS Lambda function that is triggered when an object is created in the main bucket and replicates the object into the target buckets. The objects do not need to be replicated in real time. There is concern that this function may impact other critical Lambda functions due to Lambda's regional concurrency limit. How can the solutions architect ensure this new Lambda function will not impact other critical Lambda functions?
    - [ ] A. Set the new Lambda function reserved concurrency limit to ensure the executions do not impact other critical Lambda functions. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.
    - [ ] B. Increase the execution timeout of the new Lambda function to 5 minutes. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.
    - [ ] C. Configure S3 event notifications to add events to an Amazon SQS queue in a separate account. Create the new Lambda function in the same account as the SQS queue and trigger the function when a message arrives in the queue.
    - [ ] D. Ensure the new Lambda function implements an exponential backoff algorithm. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.

    <details>
       <summary>Answer</summary>

       答案A -> [ref](https://aws.amazon.com/cn/blogs/compute/managing-aws-lambda-function-concurrency/)

    </details>

50. A company wants to run a serverless application on AWS. The company plans to provision its application in Docker containers running in an Amazon ECS cluster. The application requires a MySQL database and the company plans to use Amazon RDS. The company has documents that need to be accessed frequently for the first 3 months, and rarely after that. The document must be retained for 7 years. What is the MOST cost-effective solution to meet these requirements?
    - [ ] A. Create an ECS cluster using On-Demand Instances. Provision the database and its read replicas in Amazon RDS using Spot Instances. Store the documents in an encrypted EBS volume, and create a cron job to delete the documents after 7 years.
    - [ ] B. Create an ECS cluster using a fleet of Spot Instances, with Spot Instance draining enabled. Provision the database and its read replicas in Amazon RDS using Reserved Instances. Store the documents in a secured Amazon S3 bucket with a lifecycle policy to move the documents that are older than 3 months to Amazon S3 Glacier, then delete the documents from Amazon S3 Glacier that are more than 7 years old.
    - [ ] C. Create an ECS cluster using On-Demand Instances. Provision the database and its read replicas in Amazon RDS using On-Demand Instances. Store the documents in Amazon EFS. Create a cron job to move the documents that are older than 3 months to Amazon S3 Glacier. Create an AWS Lambda function to delete the documents in S3 Glacier that are older than 7 years.
    - [ ] D. Create an ECS cluster using a fleet of Spot Instances with Spot Instance draining enabled. Provision the database and its read replicas in Amazon RDS using On-Demand Instances. Store the documents in a secured Amazon S3 bucket with a lifecycle policy to move the documents that are older than 3 months to Amazon S3 Glacier, then delete the documents in Amazon S3 Glacier after 7 years.

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

51. A media company is serving video files stored in Amazon S3 using Amazon CloudFront. The development team needs access to the logs to diagnose faults and perform service monitoring. The log files from CloudFront may contain sensitive information about users. The company uses a log processing service to remove sensitive information before making the logs available to the development team. The company has the following requirements for the unprocessed logs: -The logs must be encrypted at rest and must be accessible by the log processing service only. -Only the data protection team can control access to the unprocessed log files. -AWS CloudFormation templates must be stored in AWS CodeCommit. -AWS CodePipeline must be triggered on commit to perform updates made to CloudFormation templates. -CloudFront is already writing the unprocessed logs to an Amazon S3 bucket, and the log processing service is operating against this S3 bucket. Which combination of steps should a solutions architect take to meet the company's requirements? (Choose two.)
    - [ ] A. Create an AWS KMS key that allows the AWS Logs Delivery account to generate data keys for encryption. Configure S3 default encryption to use server-side encryption with KMS managed keys (SSE-KMS) on the log storage bucket using the new KMS key. Modify the KMS key policy to allow the log processing service to perform decrypt operations.
    - [ ] B. Create an AWS KMS key that follows the CloudFront service role to generate data keys for encryption. Configure S3 default encryption to use KMS managed keys (SSE-KMS) on the log storage bucket using the new KMS key Modify the KMS key policy to allow the log processing service to perform decrypt operations.
    - [ ] C. Configure S3 default encryption to use AWS KMS managed keys (SSE-KMS) on the log storage bucket using the AWS Managed S3 KMS key. Modify the KMS key policy to allow the CloudFront service role to generate data keys for encryption Modify the KMS key policy to allow the log processing service to perform decrypt operations.
    - [ ] D. Create a new CodeCommit repository for the AWS KMS key template. Create an IAM policy to allow commits to the new repository and attach it to the data protection team's users. Create a new CodePipeline pipeline with a custom IAM role to perform KMS key updates using CloudFormation. Modify the KMS key policy to allow the CodePipeline IAM role to modify the key policy.
    - [ ] E. Use the existing CodeCommit repository for the AWS KMS key template. Create an IAM policy to allow commits to the new repository and attach it to the data protection team's users. Modify the existing CodePipeline pipeline to use a custom IAM role and to perform KMS key updates using CloudFormation. Modify the KMS key policy to allow the CodePipeline IAM role to modify the key policy.

    <details>
       <summary>Answer</summary>

       答案AD。

    </details>

52. A company's service for video game recommendations has just gone viral. The company has new users from all over the world. The website for the service is hosted on a set of Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The website consists of static content with different resources being loaded depending on the device type. Users recently reported that the load time for the website has increased. Administrators are reporting high loads on the EC2 instances that host the service. Which set actions should a solutions architect take to improve response times?
    - [ ] A. Create separate Auto Scaling groups based on device types. Switch to Network Load Balancer (NLB). Use the User-Agent HTTP header in the NLB to route to a different set of EC2 instances.
    - [ ] B. Move content to Amazon S3. Create an Amazon CloudFront distribution to serve content out of the S3 bucket. Use Lambda@Edge to load different resources based on the User-Agent HTTP header.
    - [ ] C. Create a separate ALB for each device type. Create one Auto Scaling group behind each ALB. Use Amazon Route 53 to route to different ALBs depending on the User-Agent HTTP header.
    - [ ] D. Move content to Amazon S3. Create an Amazon CloudFront distribution to serve content out of the S3 bucket. Use the User-Agent HTTP header to load different content.

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

53. A company is planning a large event where a promotional offer will be introduced. The company's website is hosted on AWS and backed by an Amazon RDS for PostgreSQL DB instance. The website explains the promotion and includes a sign-up page that collects user information and preferences. Management expects large and unpredictable volumes of traffic periodically, which will create many database writes. A solutions architect needs to build a solution that does not change the underlying data model and ensures that submissions are not dropped before they are committed to the database. Which solution meets these requirements?
    - [ ] A. Immediately before the event, scale up the existing DB instance to meet the anticipated demand. Then scale down after the event.
    - [ ] B. Use Amazon SQS to decouple the application and database layers. Configure an AWS Lambda function to write items from the queue into the database.
    - [ ] C. Migrate to Amazon DynamoDB and manage throughput capacity with automatic scaling.
    - [ ] D. Use Amazon ElastiCache for Memcached to increase write capacity to the DB instance.

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

54. A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ PC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway Most of the company’s applications read from and write to Amazon Kinesis Data Streams. Most of the workloads run in private subnets. A solutions architect must review the infrastructure. The solutions architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the Ec2-other category is consistently high. A further review shows that NAT gateway Bytes charges are increasing the cost in the Ec2-other category. What should the solutions architect do to meet these requirements?
    - [ ] A. Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.
    - [ ] B. Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.
    - [ ] C. Enable VPC Flow Logs and Amazon Detective Review Detective findings for traffic that is not related to Kinesis Data Streams. Configure security groups to block that traffic.
    - [ ] D. Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that the VPC endpoint policy allows traffic from the applications.

    <details>
       <summary>Answer</summary>

       由于先前使用的是NAT，那么流量是从内向外的，答案D。

    </details>

55. A large financial company is deploying applications that consist of Amazon EC2 and Amazon RDS instances to the AWS Cloud using AWS CloudFormation. The company wants to ensure that developers do not lose data by accidentally removing or replacing RDS instances when updating the CloudFormation stack. Developers also still need to be able to modify or remove EC2 instances as needed. How should the company change the stack policy to meet these requirements?The CloudFormation stack has the following stack policy:

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

56. A company is currently in the design phase of an application that will need an RPO of less than 5 minutes and an RTO of less than 10 minutes. The solutions architecture team is forecasting that the database will store approximately 10 TB of data. As part of the design, they are looking for a database solution that will provide the company with the ability to fail over to a secondary Region. Which solution will meet these business requirements at the LOWEST cost?
    - [ ] A. Deploy an Amazon Aurora DB cluster and take snapshots of the cluster every 5 minutes. Once a snapshot is complete, copy the snapshot to a secondary Region to serve as a backup in the event of a failure.
    - [ ] B. Deploy an Amazon RDS instance with a cross-Region read replica in a secondary Region. In the event of a failure, promote the read replica to become the primary.
    - [ ] C. Deploy an Amazon Aurora DB cluster in the primary Region and another in a secondary Region. Use AWS DMS to keep the secondary Region in sync.
    - [ ] D. Deploy an Amazon RDS instance with a read replica in the same Region. In the event of a failure, promote the read replica to become the primary.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

57. A solutions architect has an operational workload deployed on Amazon EC2 instances in an Auto Scaling group. The VPC architecture spans two Availability Zones (AZ) with a subnet in each that the Auto Scaling group is targeting. The VPC is connected to an on-premises environment and connectivity cannot be interrupted. The maximum size of the Auto Scaling group is 20 instances in service. The VPC IPv4 addressing is as follows: -VPC CIDR: 10.0.0.0/23. -AZ1 subnet CIDR: 10.0.0.0/24 -AZ2 subnet CIDR: 10.0.1.0/24. Since deployment, a third AZ has become available in the Region. The solutions architect wants to adopt the new AZ without adding additional IPv4 address space and without service downtime. Which solution will meet these requirements?
    - [ ] A. Update the Auto Scaling group to use the AZ2 subnet only. Delete and re-create the AZ1 subnet using half the previous address space. Adjust the Auto Scaling group to also use the new AZ1 subnet. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Remove the current AZ2 subnet. Create a new AZ2 subnet using the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.
    - [ ] B. Terminate the EC2 instances in the AZ1 subnet. Delete and re-create the AZ1 subnet using half the address space. Update the Auto Scaling group to use this new subnet. Repeat this for the second AZ. Define a new subnet in AZ3, then update the Auto Scaling group to target all three new subnets.
    - [ ] C. Create a new VPC with the same IPv4 address space and define three subnets, with one for each AZ. Update the existing Auto Scaling group to target the new subnets in the new VPC.
    - [ ] D. Update the Auto Scaling group to use the AZ2 subnet only. Update the AZ1 subnet to have the previous address space. Adjust the Auto Scaling group to also use the AZ1 subnet again. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Update the current AZ2 subnet and assign the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.

    <details>
       <summary>Answer</summary>

       已经建好的VPC的IP地址等是无法被修改的，必须得删了重建，答案A。

    </details>

58. A company is storing data on premises on a Windows file server. The company produces 5 GB of new data daily. The company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud. The company already has established an AWS Direct Connect connection between the on-premises network and AWS. Which data migration strategy should the company use?
    - [ ] A. Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway.
    - [ ] B. Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx.
    - [ ] C. Use AWS Data Pipeline to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).
    - [ ] D. Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

59. A company uses AWS Organizations to manage one parent account and nine member accounts. The number of member accounts is expected to grow as the business grows. A security engineer has requested consolidation of AWS CloudTrail logs into the parent account for compliance purposes. Existing logs currently stored in Amazon S3 buckets in each individual member account should not be lost. Future member accounts should comply with the logging strategy. Which operationally efficient solution meets these requirements?
    - [ ] A. Create an AWS Lambda function in each member account with a cross-account role. Trigger the Lambda functions when new CloudTrail logs are created and copy the CloudTrail logs to a centralized S3 bucket. Set up an Amazon CloudWatch alarm to alert if CloudTrail is not configured properly.
    - [ ] B. Configure CloudTrail in each member account to deliver log events to a central S3 bucket. Ensure the central S3 bucket policy allows PutObject access from the member accounts. Migrate existing logs to the central S3 bucket. Set up an Amazon CloudWatch alarm to alert if CloudTrail is not configured properly.
    - [ ] C. Configure an organization-level CloudTrail in the parent account to deliver log events to a central S3 bucket. Migrate the existing CloudTrail logs from each member account to the central S3 bucket. Delete the existing CloudTrail and logs in the member accounts.
    - [ ] D. Configure an organization-level CloudTrail in the parent account to deliver log events to a central S3 bucket. Configure CloudTrail in each member account to deliver log events to the central S3 bucket.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

60. A company provides a centralized Amazon EC2 application hosted in a single shared VPC. The centralized application must be accessible from client applications running in the VPCs of other business units. The centralized application front end is configured with a Network Load Balancer (NLB) for scalability. Up to 10 business unit VPCs will need to be connected to the shared VPC. Some of the business unit VPC CIDR blocks overlap with the shared VPC, and some overlap with each other. Network connectivity to the centralized application in the shared VPC should be allowed from authorized business unit VPCs only. Which network configuration should a solutions architect use to provide connectivity from the client applications in the business unit VPCs to the centralized application in the shared VPC?
    - [ ] A. Create an AWS Transit Gateway. Attach the shared VPC and the authorized business unit VPCs to the transit gateway. Create a single transit gateway route table and associate it with all of the attached VPCs. Allow automatic propagation of routes from the attachments into the route table. Configure VPC routing tables to send traffic to the transit gateway
    - [ ] B. Create a VPC endpoint service using the centralized application NLB and enable the option to require endpoint acceptance. Create a VPC endpoint in each of the business unit VPCs using the service name of the endpoint service. Accept authorized endpoint requests from the endpoint service console.
    - [ ] C. Create a VPC peering connection from each business unit VPC to the shared VPC. Accept the VPC peering connections from the shared VPC console. Configure VPC routing tables to send traffic to the VPC peering connection.
    - [ ] D. Configure a virtual private gateway for the shared VPC and create customer gateways for each of the authorized business unit VPCs. Establish a Site-to-Site VPN connection from the business unit VPCs to the shared VPC. Configure VPC routing tables to send traffic to the VPN connection.

    <details>
       <summary>Answer</summary>

       因为重叠了，答案B。

    </details>

61. A company has an on-premises monitoring solution using a PostgreSQL database for persistence of events. The database is unable to scale due to heavy ingestion and it frequently runs out of storage. The company wants to create a hybrid solution and has already set up a VPN connection between its network and AWS. The solution should include the following attributes: -Managed AWS services to minimize operational complexity. -A buffer that automatically scales to match the throughput of data and requires no ongoing administration. -A visualization tool to create dashboards to observe events in near-real time. -Support for semi-structured JSON data and dynamic schemas. Which combination of components will enable the company to create a monitoring solution that will satisfy these requirements? (Choose two.)
    - [ ] A. Use Amazon Kinesis Data Firehose to buffer events. Create an AWS Lambda function to process and transform events.
    - [ ] B. Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events.
    - [ ] C. Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.
    - [ ] D. Configure Amazon Elasticsearch Service (Amazon ES) to receive events. Use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.
    - [ ] E. Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.

    <details>
       <summary>Answer</summary>

       Firehose是完全托管的而Stream不是，首先选A，一看见Semi-structured JSON直接上Kiban，答案AD。

    </details>

62. A life sciences company is using a combination of open source tools to manage data analysis workflows and Docker containers running on servers in its on- premises data center to process genomics data. Sequencing data is generated and stored on a local storage area network (SAN), and then the data is processed. The research and development teams are running into capacity issues and have decided to re-architect their genomics analysis platform on AWS to scale based on workload demands and reduce the turnaround time from weeks to days. The company has a high-speed AWS Direct Connect connection. Sequencers will generate around 200 GB of data for each genome, and individual jobs can take several hours to process the data with ideal compute capacity. The end result will be stored in Amazon S3. The company is expecting 10-15 job requests each day. Which solution meets these requirements?
    - [ ] A. Use regularly scheduled AWS Snowball Edge devices to transfer the sequencing data into AWS. When AWS receives the Snowball Edge device and the data is loaded into Amazon S3, use S3 events to trigger an AWS Lambda function to process the data.
    - [ ] B. Use AWS Data Pipeline to transfer the sequencing data to Amazon S3. Use S3 events to trigger an Amazon EC2 Auto Scaling group to launch custom-AMI EC2 instances running the Docker containers to process the data.
    - [ ] C. Use AWS DataSync to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Lambda function that starts an AWS Step Functions workflow. Store the Docker images in Amazon Elastic Container Registry (Amazon ECR) and trigger AWS Batch to run the container and process the sequencing data.
    - [ ] D. Use an AWS Storage Gateway file gateway to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Batch job that executes on Amazon EC2 instances running the Docker containers to process the data.

    <details>
       <summary>Answer</summary>

       答案C -> [ref](https://docs.aws.amazon.com/zh_cn/whitepapers/latest/genomics-data-transfer-analytics-and-machine-learning/transferring-genomics-data-to-the-cloud-and-establishing-data-access-patterns-using-aws-datasync-and-aws-storage-gateway-for-files.html)

    </details>

63. A company has five physical data centers in specific locations around the world. Each data center has hundreds of physical servers with a mix of Windows and Linux-based applications and database services. Each data center also has an AWS Direct Connect connection of 10 Gbps to AWS with a company-approved VPN solution to ensure that data transfer is secure. The company needs to shut down the existing data centers as quickly as possible and migrate the servers and applications to AWS. Which solution meets these requirements?
    - [ ] A. Install the AWS Server Migration Service (AWS SMS) connector onto each physical machine. Use the AWS Management Console to select the servers from the server catalog, and start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.
    - [ ] B. Install the AWS DataSync agent onto each physical machine. Use the AWS Management Console to configure the destination to be an AMI, and start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.
    - [ ] C. Install the CloudEndure Migration agent onto each physical machine. Create a migration blueprint, and start the replication. Once the replication is complete, launch the Amazon EC2 instances in cutover mode.
    - [ ] D. Install the AWS Application Discovery Service agent onto each physical machine. Use the AWS Migration Hub import option to start the replication. Once the replication is complete, launch the Amazon EC2 instances created by the service.

    <details>
       <summary>Answer</summary>

       SMS不支持迁移物理机，答案C -> [ref](https://aws.amazon.com/cn/blogs/architecture/field-notes-choosing-a-rehost-migration-tool-cloudendure-or-aws-sms/)

    </details>

64. A security engineer determined that an existing application retrieves credentials to an Amazon RDS for MySQL database from an encrypted file in Amazon S3. For the next version of the application, the security engineer wants to implement the following application design changes to improve security: -The database must use strong, randomly generated passwords stored in a secure AWS managed service. -The application resources must be deployed through AWS CloudFormation. -The application must rotate credentials for the database every 90 days. A solutions architect will generate a CloudFormation template to deploy the application. Which resources specified in the CloudFormation template will meet the security engineer's requirements with the LEAST amount of operational overhead?
    - [ ] A. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Specify a Secrets Manager RotationSchedule resource to rotate the database password every 90 days.
    - [ ] B. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Create an AWS Lambda function resource to rotate the database password. Specify a Parameter Store RotationSchedule resource to rotate the database password every 90 days.
    - [ ] C. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Create an Amazon EventBridge scheduled rule resource to trigger the Lambda function password rotation every 90 days.
    - [ ] D. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Specify an AWS AppSync DataSource resource to automatically rotate the database password every 90 days.

    <details>
       <summary>Answer</summary>

       答案A -> [ref](https://aws.amazon.com/cn/blogs/security/how-to-securely-provide-database-credentials-to-lambda-functions-by-using-aws-secrets-manager/)

    </details>

65. A company has a three-tier application running on AWS with a web server, an application server, and an Amazon RDS MySQL DB instance. A solutions architect is designing a disaster recovery (DR) solution with an RPO of 5 minutes. Which solution will meet the company's requirements?
    - [ ] A. Configure AWS Backup to perform cross-Region backups of all servers every 5 minutes. Reprovision the three tiers in the DR Region from the backups using AWS CloudFormation in the event of a disaster.
    - [ ] B. Maintain another running copy of the web and application server stack in the DR Region using AWS CloudFormation drift detection. Configure cross-Region snapshots of the DB instance to the DR Region every 5 minutes. In the event of a disaster, restore the DB instance using the snapshot in the DR Region.
    - [ ] C. Use Amazon EC2 Image Builder to create and copy AMIs of the web and application server to both the primary and DR Regions. Create a cross-Region read replica of the DB instance in the DR Region. In the event of a disaster, promote the read replica to become the master and reprovision the servers with AWS CloudFormation using the AMIs.
    - [ ] D. Create AMIs of the web and application servers in the DR Region. Use scheduled AWS Glue jobs to synchronize the DB instance with another DB instance in the DR Region. In the event of a disaster, switch to the DB instance in the DR Region and reprovision the servers with AWS CloudFormation using the AMIs.

    <details>
       <summary>Answer</summary>

       将已读副本提升为主副本，并使用AMIs通过AWS CloudFormation重新配置服务器，这比恢复快照更快，答案C。

    </details>

66. A company wants to migrate its corporate data center from on premises to the AWS Cloud. The data center includes physical servers and VMs that use VMware and Hyper-V. An administrator needs to select the correct services to collect data for the initial migration discovery process. The data format should be supported by AWS Migration Hub. The company also needs the ability to generate reports from the data. Which solution meets these requirements?
    - [ ] A. Use the AWS Agentless Discovery Connector for data collection on physical servers and all VMs. Store the collected data in Amazon S3. Query the data with S3 Select. Generate reports by using Kibana hosted on Amazon EC2.
    - [ ] B. Use the AWS Application Discovery Service agent for data collection on physical servers and all VMs. Store the collected data in Amazon Elastic File System (Amazon EFS). Query the data and generate reports with Amazon Athena.
    - [ ] C. Use the AWS Application Discovery Service agent for data collection on physical servers and Hyper-V. Use the AWS Agentless Discovery Connector for data collection on VMware. Store the collected data in Amazon S3. Query the data with Amazon Athena. Generate reports by using Amazon QuickSight.
    - [ ] D. Use the AWS Systems Manager agent for data collection on physical servers. Use the AWS Agentless Discovery Connector for data collection on all VMs. Store, query, and generate reports from the collected data by using Amazon Redshift.

    <details>
       <summary>Answer</summary>

       在虚拟机上是`AWS Application Discovery Service agent`,在物理机上`AWS Agentless Discovery Connector`，答案C。

    </details>

67. A company is using Amazon Aurora MySQL for a customer relationship management (CRM) application. The application requires frequent maintenance on the database and the Amazon EC2 instances on which the application runs. For AWS Management Console access, the system administrators authenticate against AWS Identity and Access Management (IAM) using an internal identity provider. For database access, each system administrator has a user name and password that have previously been configured within the database. A recent security audit revealed that the database passwords are not frequently rotated. The company wants to replace the passwords with temporary credentials using the company's existing AWS access controls. Which set of options will meet the companyג€™s requirements?
    - [ ] A. Create a new AWS Systems Manager Parameter Store entry for each database password. Enable parameter expiration to invoke an AWS Lambda function to perform password rotation by updating the parameter value. Create an IAM policy allowing each system administrator to retrieve their current password from the Parameter Store. Use the AWS CLI to retrieve credentials when connecting to the database.
    - [ ] B. Create a new AWS Secrets Manager entry for each database password. Configure password rotation for each secret using an AWS Lambda function in the same VPC as the database cluster. Create an IAM policy allowing each system administrator to retrieve their current password. Use the AWS CLI to retrieve credentials when connecting to the database.
    - [ ] C. Enable IAM database authentication on the database. Attach an IAM policy to each system administrator's role to map the role to the database user name. Install the Amazon Aurora SSL certificate bundle to the system administrators'  certificate trust store. Use the AWS CLI to generate an authentication token used when connecting to the database.
    - [ ] D. Enable IAM database authentication on the database. Configure the database to use the IAM identity provider to map the administrator roles to the database user. Install the Amazon Aurora SSL certificate bundle to the system administrators' certificate trust store. Use the AWS CLI to generate an authentication token used when connecting to the database.

    <details>
       <summary>Answer</summary>

       为了允许IAM用户或角色连接到你的DB集群，你必须创建一个IAM策略。之后，你将策略附加到IAM用户或角色，答案C。

    </details>

68. A company's AWS architecture currently uses access keys and secret access keys stored on each instance to access AWS services. Database credentials are hard-coded on each instance. SSH keys for command-line remote access are stored in a secured Amazon S3 bucket. The company has asked its solutions architect to improve the security posture of the architecture without adding operational complexity. Which combination of steps should the solutions architect take to accomplish this? (Choose three.)
    - [ ] A. Use Amazon EC2 instance profiles with an IAM role
    - [ ] B. Use AWS Secrets Manager to store access keys and secret access keys
    - [ ] C. Use AWS Systems Manager Parameter Store to store database credentials
    - [ ] D. Use a secure fleet of Amazon EC2 bastion hosts for remote access
    - [ ] E. Use AWS KMS to store database credentials
    - [ ] F. Use AWS Systems Manager Session Manager for remote access

    <details>
       <summary>Answer</summary>

       简单题，答案ACF。

    </details>

69. A company wants to change its internal cloud billing strategy for each of its business units. Currently, the cloud governance team shares reports for overall cloud spending with the head of each business unit. The company uses AWS Organizations to manage the separate AWS accounts for each business unit. The existing tagging standard in Organizations includes the application, environment, and owner. The cloud governance team wants a centralized solution so each business unit receives monthly reports on its cloud spending. The solution should also send notifications for any cloud spending that exceeds a set threshold. Which solution is the MOST cost-effective way to meet these requirements?
    - [ ] A. Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in each account to create monthly reports for each business unit.
    - [ ] B. Configure AWS Budgets in the organization's master account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's master account to create monthly reports for each business unit.
    - [ ] C. Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit.
    - [ ] D. Enable AWS Cost and Usage Reports in the organization's master account and configure reports grouped by application, environment, and owner. Create an AWS Lambda function that processes AWS Cost and Usage Reports, sends budget alerts, and sends monthly reports to each business unit's email list.

    <details>
       <summary>Answer</summary>

       简单题，答案B。

    </details>

70. A company is configuring connectivity to a multi-account AWS environment to support application workloads that serve users in a single geographic region. The workloads depend on a highly available, on-premises legacy system deployed across two locations. It is critical for the AWS workloads to maintain connectivity to the legacy system, and a minimum of 5 Gbps of bandwidth is required. All application workloads within AWS must have connectivity with one another. Which solution will meet these requirements?
    - [ ] A. Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location. Create private virtual interfaces on each connection for each AWS account VPC. Associate the private virtual interface with a virtual private gateway attached to each VPC.
    - [ ] B. Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create and attach a virtual private gateway for each AWS account VPC. Create a DX gateway in a central network account and associate it with the virtual private gateways. Create a public virtual interface on each DX connection and associate the interface with the DX gateway.
    - [ ] C. Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from two DX partners for each on-premises location. Create a transit gateway and a DX gateway in a central network account. Create a transit virtual interface for each DX interface and associate them with the DX gateway. Create a gateway association between the DX gateway and the transit gateway.
    - [ ] D. Configure multiple AWS Direct Connect (DX) 10 Gbps dedicated connections from a DX partner for each on-premises location. Create and attach a virtual private gateway for each AWS account VPC. Create a transit gateway in a central network account and associate it with the virtual private gateways. Create a transit virtual interface on each DX connection and attach the interface to the transit gateway.

    <details>
       <summary>Answer</summary>

       - [ ] A. 错误，VPC之间没有连接。
       - [ ] B. 错误，DX网关不支持VPN之间的路由。
       - [ ] C. 正确。
       - [ ] D. 如果中间没有Direct Connect网关，就不能将Direct Connect连接到Transit网关上。

    </details>

71. A financial company needs to create a separate AWS account for a new digital wallet application. The company uses AWS Organizations to manage its accounts. A solutions architect uses the IAM user Support1 from the master account to create a new member account with finance1@example.com as the email address. What should the solutions architect do to create IAM users in the new member account?
    - [ ] A. Sign in to the AWS Management Console with AWS account root user credentials by using the 64-character password from the initial AWS Organizations email sent to finance1@example.com. Set up the IAM users as required.
    - [ ] B. From the master account, switch roles to assume the OrganizationAccountAccessRole role with the account ID of the new member account. Set up the IAM users as required.
    - [ ] C. Go to the AWS Management Console sign-in page. Choose `Sign in using root account credentials` Sign in by using the email address finance1@example.com and the master account's root password. Set up the IAM users as required.
    - [ ] D. Go to the AWS Management Console sign-in page. Sign in by using the account ID of the new member account and the Support1 IAM credentials. Set up the IAM users as required.

    <details>
       <summary>Answer</summary>

       第一次登陆用用户名密码，答案A。

    </details>

72. A company has developed a custom tool used in its workflow that runs within a Docker container. The company must perform manual steps each time the container code is updated to make the container image available to new workflow executions. The company wants to automate this process to eliminate manual effort and ensure a new container image is generated every time the tool code is updated. Which combination of actions should a solutions architect take to meet these requirements? (Choose three.)
    - [ ] A. Configure an Amazon ECR repository for the tool. Configure an AWS CodeCommit repository containing code for the tool being deployed to the container image in Amazon ECR.
    - [ ] B. Configure an AWS CodeDeploy application that triggers an application version update that pulls the latest tool container image from Amazon ECR, updates the container with code from the source AWS CodeCommit repository, and pushes the updated container image to Amazon ECR.
    - [ ] C. Configuration an AWS CodeBuild project that pulls the latest tool container image from Amazon ECR, updates the container with code from the source AWS CodeCommit repository, and pushes the updated container image to Amazon ECR.
    - [ ] D. Configure an AWS CodePipeline pipeline that sources the tool code from the AWS CodeCommit repository and initiates an AWS CodeDeploy application update.
    - [ ] E. Configure an Amazon EventBridge rule that triggers on commits to the AWS CodeCommit repository for the tool. Configure the event to trigger an update to the tool container image in Amazon ECR. Push the updated container image to Amazon ECR.
    - [ ] F. Configure an AWS CodePipeline pipeline that sources the tool code from the AWS CodeCommit repository and initiates an AWS CodeBuild build.

    <details>
       <summary>Answer</summary>

       注意答案是问的并列关系，答案ACF。

    </details>

73. A company is migrating its three-tier web application from on-premises to the AWS Cloud. The company has the following requirements for the migration process: -Ingest machine images from the on-premises environment. -Synchronize changes from the on-premises environment to the AWS environment until the production cutover. -Minimize downtime when executing the production cutover. -Migrate the virtual machines' root volumes and data volumes. Which solution will satisfy these requirements with minimal operational overhead?
    - [ ] A. Use AWS Server Migration Service (SMS) to create and launch a replication job for each tier of the application. Launch instances from the AMIs created by AWS SMS. After initial testing, perform a final replication and create new instances from the updated AMIs.
    - [ ] B. Create an AWS CLI VM Import/Export script to migrate each virtual machine. Schedule the script to run incrementally to maintain changes in the application. Launch instances from the AMIs created by VM Import/Export. Once testing is done, rerun the script to do a final import and launch the instances from the AMIs.
    - [ ] C. Use AWS Server Migration Service (SMS) to upload the operating system volumes. Use the AWS CLI import-snapshot command for the data volumes. Launch instances from the AMIs created by AWS SMS and attach the data volumes to the instances. After initial testing, perform a final replication, launch new instances from the replicated AMIs, and attach the data volumes to the instances.
    - [ ] D. Use AWS Application Discovery Service and AWS Migration Hub to group the virtual machines as an application. Use the AWS CLI VM Import/Export script to import the virtual machines as AMIs. Schedule the script to run incrementally to maintain changes in the application. Launch instances from the AMIs. After initial testing, perform a final virtual machine import and launch new instances from the AMIs.

    <details>
       <summary>Answer</summary>

       重复题，答案A。

    </details>

74. A company has several development teams collaborating on multiple projects Developers frequently move between projects, and each project requires access to a different set of AWS resources. There are current projects for web mobile, and database development However, the set of projects may change over time Developers should have full control over the resources for the project to which they are assigned, and read-only access to resources for all other projects. When developers are assigned to a different project or new AWS resources are added the company wants to minimize policy maintenance What type of control policy should a solutions architect recommend?
    - [ ] A. Create a policy document for each project with specific project tags and allow full control of the resources with a matching tag. Allow read-only access for all other resources. Attach the project-specific policy document to the IAM role for that project. Change the role assigned to the developer's IAM user when they change projects. Assign a specific project tag to new resources when they are created.
    - [ ] B. Create an IAM role for each project that requires access to AWS resources. Attach an inline policy document to the role that specifies the IAM users that are allowed to assume the role, with full control of the resources that belong to a project and read-only access for all other resources within the account. Update the policy document when the set of resources changes or developers change projects.
    - [ ] C. Create a customer managed policy document for each project that requires access to AWS resources. Specify full control of the resources that belong to a project and read-only access for all other resources within the account Attach the project-specific policy document to the developers IAM user when they change projects Update the policy document when the set of resources changes.
    - [ ] D. Create a customer managed policy document for each project that requires access to AWS resources. Specify full control of the resources that belong to a project and read-only access for all other resources within the account. Attach the project-specific policy document to an IAM group. Change the group membership when developers change projects Update the policy document when the set of resources changes.

    <details>
       <summary>Answer</summary>

       重复题，答案D。

    </details>

75. A company uses a load balancer to distribute traffic to Amazon EC2 instances in a single Availability Zone. The company is concerned about security and wants a solutions architect to re-architect the solution to meet the following requirements: -Inbound requests must be filtered for common vulnerability attacks. -Rejected requests must be sent to a third-party auditing application. -All resources should be highly available. Which solution meets these requirements?
    - [ ] A. Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target Use Amazon Inspector to monitor traffic to the ALB and EC2 instances Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB Use an AWS Lambda function to frequently push the Amazon Inspector report to the third-party auditing application.
    - [ ] B. Configure an Application Load Balancer (ALB) and add the EC2 instances as targets. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB name and enable logging with Amazon CloudWatch Logs Use an AWS Lambda function to frequently push the logs to the third-party auditing application.
    - [ ] C. Configure an Application Load Balancer (ALB) along with a target group adding the EC2 instances as targets. Create an Amazon Kinesis Data Firehose with the destination of the third-party auditing application Create a web ACL in WAF Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.
    - [ ] D. Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target Create an Amazon Kinesis Data Firehose with a destination of the third-party auditing application. Create a web ACL in WAF Create an AWS WAF using the WebACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.

    <details>
       <summary>Answer</summary>

       重复题，答案D。

    </details>

76. A solutions architect is designing a web application on AWS that requires 99.99% availability. The application will consist of a three-tier architecture that supports 300,000 web requests each minute when experiencing peak traffic. The application will use Amazon Route 53 for DNS resolution. Amazon CloudFront as the content delivery network (CDN), an Elastic Load Balancer far load balancing. Amazon EC2 Auto Scaling groups to scale the application tier, and Amazon Aurora MySQL as the backend database. The backend database load will average 90% reads and 10% writes. The company wants to build a cost-effective solution, but reliability is critical. Which set of strategies should the solutions architect use?
    - [ ] A. Build the application in a single AWS Region. Deploy the EC2 application layer to three Availably Zones using an Auto Scaling group with dynamic scaling based on request metrics. Use a Multi-AZ Amazon Aurora MySQL DB duster with two Aurora Replicas. Each Aurora Replica must have enough capacity to support 50% of the peak read queries.
    - [ ] B. Build the application in a single AWS Region. Deploy the EC2 application layer to three Availability Zones using an Auto Scaling group with a minimum desired capacity sufficient to process 450.000 requests each minute. Use a Multi-AZ Amazon Aurora MySQL DB duster with two Aurora Replicas. Each Aurora Replica must have enough capacity to support 100% of the peak read queries.
    - [ ] D. Build the application in two AWS Regions Deploy the EC2 application layer to two Availability Zones using an Auto Scaling group with dynamic scaling based on the request metrics in each Region. In the second Region, deploy an Amazon Aurora MySQL cross-Region replica. Use Amazon Route 53 to distribute traffic between Regions and configure failover if a Region becomes unavailable.
    - [ ] C. Build the application in a single AWS Region. Deploy the EC2 application layer to two Availability Zones using an Auto Scaling group with a minimum desired capacity sufficient to process 300.000 requests each minute. Use a Multi-AZ Amazon Aurora MySQL DB cluster with one Aurora Replica. The Aurora Replica must have enough capacity to support 50% of the peak read and write queries.

    <details>
       <summary>Answer</summary>

       重复题，答案B。

    </details>

77. An online magazine will launch its latest edition this month. This edition will be the first to be distributed globally. The magazine's dynamic website currently uses an Application Load Balance in front of the web tier, a fleet of Amazon EC2 instances for web and application servers, and Amazon Aurora MySQL. Portions of the website include static content and almost all traffic is read-only. The magazine is exporting a significant spike in internet traffic when the new edition is launched. Optimal performance is a top priority for the week following the launch. Which combination of steps should a solutions architect take to reduce system response times for a global audience? (Select Two.)
    - [ ] A. Use logical cross-Region replication to replicate the Aurora MySQL database to a secondary Region. Replace the web servers with Amazon S3. Deploy S3 buckets in cross-Region replication mode.
    - [ ] B. Ensure the web and application tiers are each in Auto Scaling groups. Introduce an AWS Direct Connect connection. Deploy the web and application liars in regions across the world.
    - [ ] C. Migrate the database from Amazon Aurora to Amazon RDS tor MySQL. Ensure all three of the application tiers-web. application, and database-are in private subnets.
    - [ ] D. Use an Aurora global database for physical cross-Region replication. Use Amazon S3 with cross-Region replication tor static content and resources. Deploy the web and application tiers in regions across the world.
    - [ ] E. Introduce Amazon Route 53 with latency-based routing and Amazon CloudFront distributions. Ensure the web and application tiers are each in Auto Scaling groups.

    <details>
       <summary>Answer</summary>

       重复题，答案DE。

    </details>

78. A company has a web-based application deployed in the ap-southheast-2 Region behind an Application Load Balancer ALB). AWS Certificate Manager (ACM) has issued a TLS certificate for `example.com`. This certificate is deployed to the ALB. There is a record set in Amazon Route 53 for `example.com` associated to the ALB. Due to increased load on the application, the company wants to use Amazon CloudFront. This transition cannot cause application downtime. Which combination of actions can achieve this? (Choose Three.)
    - [ ] A. Create a new ACM certificate in the ap-southeast-2 Region for `origin-example.com` and `example.com`. Associate this certificate to the existing ALB Add a DNS entry in Route 53 for `origin.exampte.com` associated with the existing ALB.
    - [ ] B. Create a CloudFront distribution and use the existing certificate associated with the ALB in the ap-southaast-2 Region. Set `origin-example com` as the custom origin.
    - [ ] C. Create a new ACM certificate in the us-east-1 Region for `example.com`. Create a CloudFront distribution and use the ACM certificate in the us-east-1 Region. Set origin `example.com` as the custom origin.
    - [ ] D. Update Route 53 for `example.com` to the alias record of the CloudFront distribution.
    - [ ] E. Create a new ACM certificate in the us-east-1 Region for `example.com`. Create a new ALB in the us-east-1 Region as the origin of the CloudFront distribution. Attach the security group associated with the ALB to the CloudFront distribution.
    - [ ] F. Update the ALB security group to allow access from the CloudFront Edge locations only.

    <details>
       <summary>Answer</summary>

       答案CDF。

    </details>

79. A company has an application that sells tickets online and experiences bursts of demand every 7 days. The application has a stateless presentation layer running on Amazon EC2, an Oracle database to store unstructured data catalog information, and a backend API layer. The front-end layer uses an Elastic Load Balancer to distribute the load across nine On-Demand instances over three Availability Zones (AZs). The Oracle database is running on a single EC2 instance. The company is experiencing performance issues when running more than two concurrent campaigns. A solutions architect must design a solution that meets the following requirements: -Address scalability issues. -Increase the level of concurrency. -Eliminate licensing costs. -Improve reliability. Which set of steps should the solutions architect take?
    - [ ] A. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Convert the Oracle database into a single Amazon RDS reserved DB instance.
    - [ ] B. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Create two additional copies of the database instance, then distribute the databases in separate AZs.
    - [ ] C. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Convert the tables in the Oracle database into Amazon DynamoDB tables.
    - [ ] D. Convert the On-Demand Instances into Spot instances to reduce costs for the front end. Convert the tables in the Oracle database into Amazon DynamoDB tables.

    <details>
       <summary>Answer</summary>

       重复题，答案C

    </details>

80. A solutions architect at a large company needs to set up network security for outbound traffic to the internet from all AWS accounts within an organization in AWS Organizations. The organization has more than 100 AWS accounts, and the accounts route to each other by using a centralized AWS Transit Gateway. Each account has both an internet gateway and a NAT gateway for outbound traffic to the internet. The company deploys resources only deployed into a single AWS Region. The company needs the ability to add centrally managed rule-based filtering on all outbound traffic to the internet for all AWS accounts in the organization. The peak load of outbound traffic will not exceed 2 GB in each Availability Zone Which solution meets these requirements?
    - [ ] A. Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC. Configure a new NAT gateway. Create an Auto Scaling group of Amazon EC2 Instances that run an open-source internet proxy for rule-based filtering across all Availability Zones in the Region. Modify all default routes to point to the proxy’s Auto Scaling group.
    - [ ] B. Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC. Configure a new NAT gateway. Use an AWS Network Firewall for rule-based filtering. Create Network Firewall Endpoints In each Availability Zone. Modify all default routes to point to the Network Firewall endpoint.
    - [ ] C. Create an AWS Network Firewall for rule-based filtering in each AWS account. Modify all default routes to point to the Network Firewall firewalls in each account.
    - [ ] D. In each AWS account, create an Auto Scaling group of network-optimized Amazon EC2 instances hat run an open-source internet proxy for ule-based filtering. Modify all default routes to point to the proxy Auto Scaling group.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

81. A company's lease of a collocated storage facility will expire in 90 days. The company wants to move to AWS to avoid signing a contract extension. The company environment consists of 200 virtual machines and a NAS with 40 TB of data. Most of the data is archival, yet instant access is required when data is requested. Leadership wants to ensure minimal downtime during the migration. Each virtual machine has several customized configurations. The company's existing 1Gbps network connection is mostly idle especially after business hours. Which combination of steps should the company take to migrate to AWS while minimizing downtime and operational impact? (Select TWO)
    - [ ] A. Use AWS Storage Gateway to migrate the data to cloud-native storage.
    - [ ] B. Use AWS Snowball to migrate the data.
    - [ ] C. Use AWS SMS to migrate the virtual machines.
    - [ ] D. Use new Amazon EC2 instances and reinstall all application code.
    - [ ] E. Use AWS SMS to copy the infrequently accessed data from the NAS.

    <details>
       <summary>Answer</summary>

       简单题，答案BC。

    </details>

82. The company needs to determine which costs on the monthly AWS bill are attributable to each application or team. The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months. A solutions architect must recommend an AWS Billing and Cost Management solution that provides these cost reports. Which combination of actions will meet these requirements? (Select THREE)
    - [ ] A. Activate the user-defined cost allocation tags that represent the application and the team
    - [ ] B. Activate the AWS generated cost allocation tags that represent the application and the team
    - [ ] C. Create a cost category for each application in Billing and Cost Management
    - [ ] D. Activate IAM access to Billing and Cost Management
    - [ ] E. Create a cost budget
    - [ ] F. Enable Cost Explorer

    <details>
       <summary>Answer</summary>

       答案BDF。

    </details>

83. A solutions architect has been assigned to migrate a 50 TB Oracle data warehouse that contains sales data from on-premises to Amazon Redshift. Major updates to the sales data occur on the final calendar day of the month. For the remainder of the month, the data warehouse only receives minor daily updates and is primarily used for reading and reporting. Because of this, the migration process must start on the first day of the month and must be complete before the next set of updates occur. This provides approximately 30 days to complete the migration and ensure that the minor daily changes have been synchronized with the Amazon Redshift data warehouse. Because the migration cannot impact normal business network operations, the bandwidth allocated to the migration for moving data over the internet is 50 Mbps. The company wants to keep data migration costs low. Which steps will allow the solutions architect to perform the migration within the specified timeline?
    - [ ] A. Install Oracle database software on an Amazon EC2 instance. Configure VPN connectivity between AWS and the companyג€™s data center. Configure the Oracle database running on Amazon EC2 to join the Oracle Real Application Clusters (RAC). When the Oracle database on Amazon EC2 finishes synchronizing, create an AWS DMS ongoing replication task to migrate the data from the Oracle database on Amazon EC2 to Amazon Redshift. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] B. Create an AWS Snowball import job. Export a backup of the Oracle data warehouse. Copy the exported data to the Snowball device. Return the Snowball device to AWS. Create an Amazon RDS for Oracle database and restore the backup file to that RDS instance. Create an AWS DMS task to migrate the data from the RDS for Oracle database to Amazon Redshift. Copy daily incremental backups from Oracle in the data center to the RDS for Oracle database over the internet. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] C. Install Oracle database software on an Amazon EC2 instance. To minimize the migration time, configure VPN connectivity between AWS and the company's data center by provisioning a 1 Gbps AWS Direct Connect connection. Configure the Oracle database running on Amazon EC2 to be a read replica of the data center Oracle database. Start the synchronization process between the company's on-premises data center and the Oracle database on Amazon EC2. When the Oracle database on Amazon EC2 is synchronized with the on-premises database, create an AWS DMS ongoing replication task to migrate the data from the Oracle database read replica that is running on Amazon EC2 to Amazon Redshift. Verify the data migration is complete and perform the cut over to Amazon Redshift.
    - [ ] D. Create an AWS Snowball import job. Configure a server in the company's data center with an extraction agent. Use AWS SCT to manage the extraction agent and convert the Oracle schema to an Amazon Redshift schema. Create a new project in AWS SCT using the registered data extraction agent. Create a local task and an AWS DMS task in AWS SCT with replication of ongoing changes. Copy data to the Snowball device and return the Snowball device to AWS. Allow AWS DMS to copy data from Amazon S3 to Amazon Redshift. Verify that the data migration is complete and perform the cut over to Amazon Redshift.

    <details>
       <summary>Answer</summary>

       雪球去的是S3，答案D。

    </details>

84. A company operates pipelines across North America and South America. The company assesses pipeline inspection gauges with image and ultrasonic sensor data to monitor the condition of its pipelines. The pipelines are in areas with intermittent or unavailable internet connectivity. The image data at each site requires terabytes of storage each month. The company wants a solution to collect the data at each site in monthly intervals and to store the data with high durability. The image captured must be preprocessed and uploaded to a central location for persistent storage. Which actions should a solutions architect take to meet these requirements?
    - [ ] A. Deploy AWS Snowball devices at local sites in a cluster configuration Configure AWS Lambda for preprocessing. Ship the devices back to the closest AWS Region and store the data in Amazon S3 buckets.
    - [ ] B. Deploy AWS Snowball Edge devices at local sites in a cluster configuration. Configure AWS Lambda for preprocessing. Ship the devices back to the closest AWS Region and store the data in Amazon S3 buckets.
    - [ ] C. Deploy AWS lot Greengrass on eligible hardware across the sites. Configure AWS Lambda on the devices for preprocessing Upload the processed data to Amazon S3 buckets in AWS Regions closest to the sites.
    - [ ] D. Deploy AWS lot Greengrass on eligible hardware across the sites. Configure AWS Lambda on the devices for preprocessing. Ship the devices back to the closest AWS Region and store the data in Amazon S3 buckets.

    <details>
       <summary>Answer</summary>

       重复题，答案D。

    </details>

85. A solutions architect is troubleshooting an application that runs on Amazon EC2 instances. The EC2 instances runs in an Auto Scaling group. The application needs to access user data in an Amazon DynamoDB table that has fixed provisioned capacity. To match the increased workload, the solutions architect recently doubled the maximum size of the Auto Scaling group. When many instances launch at the same time, some application components are throttled when the component scan the DynamoDB table. The Auto Scaling group terminates the falling instances and starts new instances unit all applications are running. A solution architect must implement a solution to mitigate the throttling issue in the MOST cost- effective manner. Which solution will these requirements?
    - [ ] A. Doubles the provisioned read capacity of the DynamoDB table.
    - [ ] B. Duplicate the DynamoDB table. Configure the running copy of the application to select at random which table it accesses.
    - [ ] C. Set the DynamoDB table to on-demand mode.
    - [ ] D. Add DynamoDB Accelerator (DAX)to the table.

    <details>
       <summary>Answer</summary>

       简单题，答案D。

    </details>

86. A large company runs workloads in VPCS that are deployed of AWS accounts. Each VPC consists of public subnets and private subnets that span across multiple Availability Zones. NAT gateways are deployed in the public subnets and allow outbound connection traffic from the private nets. A solution architect is working on a hub-and-spoke design. A private net in the poke VPC must route traffic to the internal through an aggress VPC. The solutions architect already has deployed a NAT gateway in an egress VPC in a central AWS account. Which set of additional steps should the solution architect take to meet these requirements?
    - [ ] A. Create peering connections between the egress VPC and the spoke VPCS. Configure the required routing to allow access to the internet.
    - [ ] B. Create a transit gateway and share it with the existing AWS accounts. Attach existing VPCS to the transit gateway. Configure routing to allow access to the internet.
    - [ ] C. Create a transit gateway in every account. Attach the NAT gateway to the gateway. Configure the required routing to allow access to the internet.
    - [ ] D. Create an AWS PrivateLink connection between the egress VPC and the spoke VPC. Configure the require routing to allow access to the internet.

    <details>
       <summary>Answer</summary>

       中央辐射型VPC用transit gateway，答案B。

    </details>

87. A large company has a business-critical application that runs in a single AWS Region. The application consists of multiple Amazon EC2 instances and an Amazon RDS Multi-AZ DB instance. The EC2 instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. A solutions architect is implementing a disaster recovery (DR) plan for the application. The solutions architect has created a pilot light application deployment in a new Region, which is referred to as the DR Region. The DR environment has an Auto Scaling group with a single EC2 instance and a read replica of the RDS DB instance. The solutions architect must automate a failover from the primary application environment to the pilot light environment in the DR Region. Which solution meets these requirements with the MOST operational efficiency?
    - [ ] A. Publish an application availability metric to Amazon CloudWatch in the DR Region from the application environment in the primary Region. Create a CloudWatch alarm in the DR Region that is invoked when the application availability metric stops being delivered. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic in the DR Region. Add an email subscription to the SNS topic that sends messages to the application owner. Upon notification, instruct a systems operator to sign into the AWS Management Console and initiate failover operations for the application.
    - [ ] B. Create a cron task that runs every 5 minutes by using one of the application's EC2 instances in the primary Region. Configure the cron task to check whether the application is available. Upon failure, the cron task notifies a systems operator and attempts to restart the application services.
    - [ ] C. Create a cron task that runs every 5 minutes by using one of the application's EC2 instances in the primary Region. Configure the cron task to check whether the application is available. Upon failure, the cron task modifies the DR environment by promoting the read replica and by adding EC2 instances to the Auto Scaling group.
    - [ ] D. Publish an application availability metric to Amazon CloudWatch in the DR Region from the application environment in the primary Region. Create a CloudWatch alarm in the DR Region that is invoked when the application availability metric stops being delivered. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic in the DR Region. Use an AWS Lambda function that is invoked by Amazon SNS in the DR Region to promote the read replica and to add EC2 instances to the Auto Scaling group.

    <details>
       <summary>Answer</summary>

       BC用Cronjob不太好，A人工了，答案D。

    </details>

88. A developer reports receiving an Error 403: Access Denied message when they try to download an object from an Amazon S3 bucket. The S3 bucket is accessed using an S3 endpoint inside a VPC, and is encrypted with an AWS KMS key. A solution architect has verified that the developer is assuming the correct IAM role in the account that allows the object to be downloaded. The S3 bucket policy and the NACL are also valid. Which additional step should the solutions architect take to troubleshoot this issue?
    - [ ] A. Ensure that blocking all public access has not been enabled In the S3 bucket.
    - [ ] B. Verify that the IAM rote has permission to decrypt the referenced KMS key.
    - [ ] C. Verify that the IAM rote has the correct trust relationship configured.
    - [ ] D. Check that local firewall rules are not preventing access to the S3 endpoint.

    <details>
       <summary>Answer</summary>

       重复题，答案B。

    </details>

89. A company is running web application on Amazon EC2. The web tier consists of an Application Load Balancer (ALB) backed by an Auto Scaling group of web server Instances spanning multiple Availability Zones. The database tier is using Amazon Aurora MySQL. The company's security team has deployed AWS WAF and integrated it with the ALB to prevent SQL injection attacks against the application. Recently, a security breach was reported In which the attacker was able to gain access to an individual web server and the company's database from random IP addresses. The security team was eventually able to write a better rule to match the SQL injection technique that the attacker had used. However, this process took about an hour from when the third-party security agent running on the EC2 instances successfully detected the attack. Which strategy allows the security team to protect the database and overall infrastructure?
    - [ ] A. Add an Amazon CloudFront layer to the existing architecture Modify the AWS WAF association to integrate with CloudFront instead of the ALB Change the web oar's security groups to allow IP addresses from CloudFront only Use Lambda@Edge 10 perform request Inspection and block repetitive suspicious requests.
    - [ ] B. Configure the third-party security agent to Invoke an AWS Lambda function The Lambda function should first check the web tier's Auto Scaling group to ensure (here is more than one running Instance; and if so. then stop and quarantine the compromised web server instance
    - [ ] C. Enable Amazon Macie and turn on its integrations with Amazon EC2 and the Aurora MySQL database Create a visual dashboard for the security team. Con6gi*e automated alerts and define AWS Lambda functions to automatically block detected attacks by modifying security groups within the VPC
    - [ ] D. Deploy Amazon GuardDuty to analyze VPC Flow Logs. Configure an Amazon EventBridge rule that triggers an AWS Lambda function upon a GuardDuty alert Configure the Lambda function to automatically block detected attacks by modifying security groups within the VPC.

    <details>
       <summary>Answer</summary>

       重复题，答案D。

    </details>

90. A company is running a containerized application in the AWS Cloud. The application is running by using Amazon Elastic Container Service (Amazon ECS) on a set Amazon EC2 instances. The EC2 instances run in an Auto Scaling group. The company uses Amazon Elastic Container Registry (Amazon ECR) to store its container images. When a new image version is uploaded, the new image version receives a unique tag. The company needs a solution that inspects new image versions for common vulnerabilities and exposures. The solution must automatically delete new image tags that have Critical or High severity findings. The solution also must notify the development team when such a deletion occurs. Which solution meets these requirements?
    - [ ] A. Configure scan on push on the repository. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Step Functions state machine when a scan is complete for images that have Critical or High severity findings. Use the Step Functions state machine to delete the image tag for those images and to notify the development team through Amazon Simple Notification Service (Amazon SNS).
    - [ ] B. Configure scan on push on the repository. Configure scan results to be pushed to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Lambda function when a new message is added to the SOS queue. Use the Lambda function to delete the image tag for images that have Critical or High seventy findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).
    - [ ] C. Schedule an AWS Lambda function to start a manual image scan every hour. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke another Lambda function when a scan is complete. Use the second Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Notification Service (Amazon SNS)
    - [ ] D. Configure periodic image scan on the repository. Configure scan results to be added to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Step Functions state machine when a new message is added to the SQS queue. Use the Step Functions state machine to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

91. A travel company built a web application that uses Amazon Simple Email Service (Amazon SES) to send email notifications to users. The company needs to enable logging to help troubleshoot email delivery issues. The company also needs the ability to do searches that are based on recipient, subject, and time sent. Which combination of steps should a solutions architect take to meet these requirements? (Select TWO.)
    - [ ] A. Create an Amazon SES configuration set with Amazon Kinesis Data Firehose as the destination. Choose to send logs to an Amazon S3 bucket.
    - [ ] B. Enable AWS CloudTrail logging. Specify an Amazon S3 bucket as the destination for the logs.
    - [ ] C. Use Amazon Athena to query the logs in the Amazon S3 bucket for recipient, subject, and time sent.
    - [ ] D. Create an Amazon CloudWatch log group. Configure Amazon SES to send logs to the log group.
    - [ ] E. Use Amazon Athena to query the logs in Amazon CloudWatch for recipient, subject, and time sent.

    <details>
       <summary>Answer</summary>

       答案BC。

    </details>

92. A startup company recently migrated a large ecommerce website to AWS The website has experienced a 70% increase in sales. Software engineers are using a private GitHub repository to manage code. The devops team is using Jenkins for builds and unit testing. The engineers need to receive notifications for bad builds and zero downtime during deployments. The engineers also need to ensure any changes to production are seamless for users and can be rolled back in the event of a major issue. The software engineers have decided to use AWS CodePipeline to manage their build and deployment process. Which solution will meet these requirements?
    - [ ] A. Use GitHub websockets to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS Code Build to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place all-at-once deployment configuration using AWS CodeDeploy.
    - [ ] B. Use GitHub webhooks to trigger the CodePipeine pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Deploy in a blue/green deployment using AWS CodeDeploy.
    - [ ] C. Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.
    - [ ] D. Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.

    <details>
       <summary>Answer</summary>

       重复题，答案B。

    </details>

93. A company has developed a mobile game. The backend for the game runs on several virtual machines located in an on-premises data center. The business logic is exposed using a REST API with multiple functions. Player session data is stored in central file storage. Backend services use different API keys for throttling and to distinguish between live and test traffic. The load on the game backend varies throughout the day. During peak hours, the server capacity is not sufficient. There are also latency issues when fetching player session data. Management has asked a solutions architect to present a cloud architecture that can handle the game's varying load and provide low-latency data access. The API model should not be changed. Which solution meets these requirements?
    - [ ] A. Implement the REST API using a Network Load Balancer (NLB). Run the business logic on an Amazon EC2 instance behind the NLB. Store player session data in Amazon Aurora Serverless.
    - [ ] B. Implement the REST API using an Application Load Balancer (ALB). Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on-demand capacity.
    - [ ] C. Implement the REST API using Amazon API Gateway. Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on- demand capacity.
    - [ ] D. Implement the REST API using AWS AppSync. Run the business logic in AWS Lambda. Store player session data in Amazon Aurora Serverless.

    <details>
       <summary>Answer</summary>

       简单题，答案C。

    </details>

94. A company uses Amazon S3 to host a web application. Currently, the company uses a continuous integration tool running on an Amazon EC2 instance that builds and deploys the application by uploading it to an S3 bucket. A Solutions Architect needs to enhance the security of the company's platform with the following requirements: -A build process should be run in a separate account from the account hosting the web application. -A build process should have minimal access in the account it operates in. -Long-lived credentials should not be used. As a start, the Development team created two AWS accounts: one for the application named web account process; other is a named build account. Which solution should the Solutions Architect use to meet the security requirements?
    - [ ] A. In the build account, create a new IAM role, which can be assumed by Amazon EC2 only. Attach the role to the EC2 instance running the continuous integration process. Create an IAM policy to allow s3: PutObject calls on the S3 bucket in the web account. In the web account, create an S3 bucket policy attached to the S3 bucket that allows the build account to use s3:PutObject calls.
    - [ ] B. In the build account, create a new IAM role, which can be assumed by Amazon EC2 only. Attach the role to the EC2 instance running the continuous integration process. Create an IAM policy to allow s3: PutObject calls on the S3 bucket in the web account. In the web account, create an S3 bucket policy attached to the S3 bucket that allows the newly created IAM role to use s3:PutObject calls.
    - [ ] C. In the build account, create a new IAM user. Store the access key and secret access key in AWS Secrets Manager. Modify the continuous integration process to perform a lookup of the IAM user credentials from Secrets Manager. Create an IAM policy to allow s3: PutObject calls on the S3 bucket in the web account, and attach it to the user. In the web account, create an S3 bucket policy attached to the S3 bucket that allows the newly created IAM user to use s3:PutObject calls.
    - [ ] D. In the build account, modify the continuous integration process to perform a lookup of the IAM user credentials from AWS Secrets Manager. In the web account, create a new IAM user. Store the access key and secret access key in Secrets Manager. Attach the PowerUserAccess IAM policy to the IAM user.

    <details>
       <summary>Answer</summary>

       没有长期的凭证 -> 使用角色。Bucket策略将权限授予角色，而不是账户本身，答案B。-> [ref](https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/)

    </details>

95. A large company will be migrating to AWS. The company has 20 business units and anticipates another 10 coming online in the future. Each business unit will need its own IP range and will operate in its own AWS account. There will be a lot of communication between business units with very large data transfers. The company wants to make sure that the proposed solution will minimize data transfer costs and reduce complexity. How should a solutions architect design the network to meet these requirements?
    - [ ] A. Create a transit VPC in a networking account. Within each business unit's AWS account create redundant VPN connections to the transit VPC.
    - [ ] B. Create a transit gateway in a networking account. Share the transit gateway with each business unit's AWS account. Attach the VPC in each account to the transit gateway.
    - [ ] C. Create two subnets for each business unit in a networking account. Share the subnets with each business unit's AWS account using AWS Resource Access Manager.
    - [ ] D. Create a VPC for each business unit's AWS account Use VPC peering to route traffic between the VPCs in each account.

    <details>
       <summary>Answer</summary>

       A最便宜。

    </details>

96. A company hosts a web application on AWS that uses Amazon RDS (or MySQL Multi-AZ DB) instances Usage of the web application has increased recently. Users have indicated that dynamic reports in the application load slowly. Which configuration change will improve application performance while ensuring the database is highly available for data operations?
    - [ ] A. Add a read replica and configure the application to direct read requests to it.
    - [ ] B. Create two read replicas in the same Availability Zone as the primary DB instance. Use Amazon Route 53 to evenly distribute read requests to the replicas.
    - [ ] C. Configure the application to direct read requests to the primary and standby DB instances.
    - [ ] D. Migrate to Amazon Aurora MySQL with two Aurora Replicas in different Availability Zones Configure the application to direct read requests to the reader endpoint.

    <details>
       <summary>Answer</summary>

       简单题，答案A。

    </details>

97. A company is using AWS Organizations to manage multiple accounts Due to regulatory requirements the company wants to restrict specific member accounts to certain AWS Regions where they are permitted to deploy resources. The resources in the accounts must be tagged enforced based on a group standard and centrally managed with minimal configuration. What should a solutions architect do to meet these requirements?
    - [ ] A. Create an AWS Config rule in the specific member accounts to limit Regions and apply a tag policy.
    - [ ] B. From the AWS Billing and Cost Management console in the master account disable Regions for the specific member accounts and apply a tag policy on the root.
    - [ ] C. Associate the specific member accounts with the root Apply a tag policy and an SCP using conditions to limit Regions.
    - [ ] D. Associate the specific member accounts with a new OU Apply a tag policy and an SCP using conditions to limit Regions.

    <details>
       <summary>Answer</summary>

       简单题，答案D。

    </details>

98. A company has an application that sends newsletters through email to users. The application runs on two Amazon EC2 instances in a VPC. The first EC2 instance contains the email application that sends email directly to users. The second EC2 instance contains a MySQL database that is heavily dependent upon relational data. Each EC2 instance is controlled by its own Auto Scaling group with a minimum and maximum of one instance. Management wants improved application reliability and support for personalized email. Which set of steps should a solutions architect take to meet these requirements?
    - [ ] A. Migrate the database to Amazon DynamoDB global tables. Reconfigure the email application to use Amazon Simple Email Service (Amazon SES) to send email.
    - [ ] B. Migrate the database to an Amazon Aurora MySQL DB cluster with Aurora Replicas. Reconfigure the email application to use Amazon Simple Notification Service (Amazon SNS) to send email.
    - [ ] C. Increase the minimum number of EC2 instances in the Auto Scaling group to three. Reconfigure the email application to use Amazon Simple Notification Service (Amazon SNS) to send email.
    - [ ] D. Migrate the database to an Amazon RDS MySQL Multi-AZ DB instance. Reconfigure the email application to use Amazon Pinpoint to send email.

    <details>
       <summary>Answer</summary>

       Amazon Pinpoint不是用来发邮件的，答案B。

    </details>

99. A company operates an on-premises software-as-a-service (SaaS) solution that ingests several files daily. The company provides multiple public SFTP endpoints to its customers to facilitate the file transfers. The customers add the SFTP endpoint IP addresses to their firewall allow list for outbound traffic. Changes to the SFTP endpoint IP addresses are not permitted. The company wants to migrate the SaaS solution to AWS and decrease the operational overhead of the file transfer service. Which solution meets these requirements?
    - [ ] A. Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an AWS Transfer for SFTP endpoint. Use AWS Transfer to store the files in Amazon S3.
    - [ ] B. Add a subnet containing the customer-owned block of IP addresses to a VPC. Create Elastic IP addresses from the address pool and assign them to an Application Load Balancer (ALB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the ALB. Store the files in attached Amazon Elastic Block Store (Amazon EBS) volumes.
    - [ ] C. Register the customer-owned block of IP addresses with Amazon Route 53. Create alias records in Route 53 that point to a Network Load Balancer (NLB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the NLB. Store the files in Amazon S3.
    - [ ]  Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an Amazon S3 VPC endpoint. Enable SFTP support on the S3 bucket.

    <details>
       <summary>Answer</summary>

       答案A -> [ref](https://aws.amazon.com/cn/premiumsupport/knowledge-center/sftp-enable-elastic-ip-addresses/)

    </details>

100. A multimedia company with a single AWS account is launching an application for a global user base. The application storage and bandwidth requirements are unpredictable. The application will use Amazon EC2 instances behind an Application Load Balancer as the web tier and will use Amazon DynamoDB as the database tier. The environment for the application must meet the following requirements: -Low latency when accessed from any part of the world. -WebSocket support. -End-to-end encryption. -Protection against the latest security threats. -Managed layer 7 DDoS protection. Which actions should the solutions architect take to meet these requirements? (Choose two.)
     - [ ] A. Use Amazon Route 53 and Amazon CloudFront for content distribution. Use Amazon S3 to store static content.
     - [ ] B. Use Amazon Route 53 and AWS Transit Gateway for content distribution. Use an Amazon Elastic Block Store (Amazon EBS) volume to store static content.
     - [ ] C. Use AWS WAF with AWS Shield Advanced to protect the application.
     - [ ] D. Use AWS WAF and Amazon Detective to protect the application.
     - [ ] E. Use AWS Shield Standard to protect the application.

     <details>
       <summary>Answer</summary>

       简单题，答案AC。

     </details>
