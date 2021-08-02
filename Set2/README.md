# AWS SAP 101-200

1. A company is moving a business-critical application onto AWS. It is a traditional three-tier web application using an Oracle database. Data must be encrypted in transit and at rest. The database hosts 12 TB of data. Network connectivity to the source Oracle database over the internal is allowed, and the company wants to reduce the operational costs by using AWS Managed Services where possible. All primary keys only; however, it contains many Binary Large Object (BLOB) fields. It was not possible to use the database's native replication tools because of licensing restrictions. Which database migration solution will result in the LEAST amount of impact to the application's availability?
   - [ ] A. Provision an Amazon RDS for Oracle instance. Host the RDS database within a virtual private cloud (VPC) subnet with internet access and set up the RDS database as an encrypted Read Replica of the source database. Use SSL to encrypt the connection between the two databases. Monitor the replication performance by watching the RDS Replica Lag metric. During the application maintenance window, shut down the on-premises database and switch over the application connection to the RDS instance when there is no more replication lag. Promote the Read Replica into a standalone database instance.
   - [ ] B. Provision an Amazon EC2 instance and install the same Oracle database software. Create a backup of the source database using the supported tools. During the application maintenance window, restore the backup into the Oracle database running in the EC2 instance. Set up an Amazon RDS for Oracle instance and create an import job between the database hosted in AWS. Shut down the source database and switch over the database connections to the RDS instance when the job is complete.
   - [ ] C. Use AWS DMS to load and replicate the dataset between the on-premises Oracle database and the replication instance hosted on AWS. Provision an Amazon RDS for Oracle instance with Transparent Data Encryption (TDE) enabled and configure it as target for the replication instance. Create a customer-managed AWS KMS master key to set it as the encryption key for the replication instance. Use AWS DMS tasks to load the data into the target RDS instance. During the application maintenance window and after the load tasks reach the ongoing replication phase, switch the database connections to the new database.
   - [ ] D. Create a compressed full database backup on the on-premises Oracle database during an application maintenance window. While the backup is being performed, provision a 10 Gbps AWS Direct Connect connection to increase the transfer speed of the database backup files to Amazon S3 and shorten the maintenance window period. Use SSL/TLS to copy the files over the Direct Connect connection. When the backup files are successfully copied, start the maintenance window, and rise any of the Amazon RDS supported tools to import the data into a newly provisioned Amazon RDS for Oracle instance with encryption enabled. Wait until the data is fully loaded and switch over the database connections to the new database. Delete the Direct Connect connection to cut unnecessary charges.

   <details>
      <summary>Answer</summary>

      - [ ] A. 如果不限制本地复制的话此乃最佳体验
      - [ ] B. 备份不能保证数据的完整性
      - [x] C. 正确
      - [ ] D. 要做很多额外的事儿不满足需求

   </details>

2. A company has detected to move some workloads onto AWS to create a grid environment to run market analytics. The grid will consist of many similar instances, spun-up by a job-scheduling function. Each time a large analytics workload is completed, a new VPC is deployed along with job scheduler and grid nodes. Multiple grids could be running in parallel. Key requirements are grid instances must communicate with Amazon S3 retrieve data to be processed. Grid instances must communicate with Amazon DynamoDB to track intermediate data, The job scheduler need only to communicate with the Amazon EC2 API to start new grid nodes. A key requirement is that the environment has no access to the internet, either directly or via the on-premises proxy. However, the application needs to be able to seamlessly communicate to Amazon S3, Amazon DynamoDB, and Amazon EC2 API, without the need for reconfiguration for each new deployment. Which of the following should the Solutions Architect do to achieve this target architecture? (Choose three.)
   - [ ] A. Enable VPC endpoints for Amazon S3 and DynamoDB.
   - [ ] B. Disable Private DNS Name Support.
   - [ ] C. Configure the application on the grid instances to use the private DNS name of the Amazon S3 endpoint.
   - [ ] D. Populate the on-premises DNS server with the private IP addresses of the EC2 endpoint.
   - [ ] E. Enable an interface VPC endpoint for EC2.
   - [ ] F. Configure Amazon S3 endpoint policy to permit access only from the grid nodes.

   <details>
      <summary>Answer</summary>

      标准操作，答案AEF

   </details>

3. An internal security audit of AWS resources within a company found that several Amazon EC2 instances running Microsoft Windows workloads were missing several important operating system-level patches. A Solutions Architect has been asked to fix existing patch deficiencies, and to develop a workflow to ensure that future patching requirements are identified and taken care of quickly. The Solutions Architect has decided to use AWS Systems Manager. It is important that EC2 instance reboots do not occur at the same time on all Windows workloads to meet organizational uptime requirements. Which workflow will meet these requirements in an automated manner?
   - [ ] A. Add a Patch Group tag with a value of Windows Servers to all existing EC2 instances. Ensure that all Windows EC2 instances are assigned this tag. Associate the AWS-DefaultPatchBaseline to the Windows servers patch group. Define an AWS Systems Manager maintenance window, conduct patching within it, and associate it with the Windows Servers patch group. Register instances with the maintenance window using associated subnet IDs. Assign the AWS-RunPatchBaseline document as a task within each maintenance window.
   - [ ] B. Add a Patch Group tag a value of Windows Servers to all existing EC2 instances. Ensure that all Windows EC2 instances are assigned this tag. Associate the AWS-WindowsPatchBaseline document as a task associated with the Windows Servers patch group. Create an Amazon CloudWatch Events rule configured to use a cron expression to schedule the execution of patching using the AWS Systems Manager run command. Create an AWS Systems Manager State Manager document to define commands to be executed during patch execution.
   - [ ] C. Add a Patch Group tag with a value of either Windows Server1 or Windows Server2 to all existing EC2 instances. Ensure that all Windows EC2 instances are assigned this tag. Associate the AWS- DefaultPatchBaseline with both Windows Servers patch groups. Define two non-overlapping AWS Systems Manager maintenance windows, conduct patching within them, and associate each with a different patch group. Register targets with specific maintenance windows using the Patch Group tags. Assign the AWS-RunPatchBaseline document as a task within each maintenance window.
   - [ ] D. Add a Patch Group tag with a value of either Windows server1 or Windows Server2 to all existing EC2 instances. Ensure that all Windows EC2 instances are assigned this tag. Associate the AWS- WindowsPatchBaseline with both Windows Servers patch groups. Define two non-overlapping AWS Systems Manager maintenance windows, conduct patching within them, and associate each with a different patch group. Assign the AWS-RunWindowsPatchBaseline document as a task within each maintenance window. Create an AWS Systems Manager State Manager document to define commands to be executed during patch execution.

   <details>
      <summary>Answer</summary>

      - [ ] A. 打补丁将会同时发生，不满足需求
      - [ ] B. 不存在AWS-WindowsPatchBaseline
      - [x] C. 正确
      - [ ] D. 同B

   </details>

4. A company must deploy multiple independent instances of an application. The front-end application is internet accessible. However, corporate policy stipulates that the backends are to be isolated from each other and the internet, yet accessible from a centralized administration server. The application setup should be automated to minimize the opportunity for mistakes as new instances are deployed. Which option meets the requirements and MINIMIZES costs?
   - [ ] A. Use an AWS CloudFormation template to create identical IAM roles for each region. Use AWS CloudFormation StackSets to deploy each application instance by using parameters to customize for each instance and use security groups to isolate each instance while permitting access to the central server.
   - [ ] B. Create each instance of the application IAM roles and resources in separate accounts by using AWS CloudFormation StackSets. Include a VPN connection to the VPN gateway of the central administration server.
   - [ ] C. Duplicate the application IAM roles and resources in separate accounts by using a single CloudFormation template. Include VPC peering to connect the VPC of each application instance to a central VPC.
   - [ ] D. Use the parameters of the AWS CloudFormation template to customize the deployment into separate accounts. Include a NAT gateway to allow communication back to the central administration server.

   <details>
      <summary>Answer</summary>

      - [ ] A. 安全组不能跨区域
      - [ ] B. 没必要使用VPN
      - [x] C. 正确
      - [ ] D. 不走公网，没必要使用NAT

   </details>

5. A group of Amazon EC2 instances have been configured as high-performance computing (HPC) cluster. The instances are running in a placement group and can communicate with each other at network of up to 20 Gbps. The cluster needs to communicate with a control EC2 instance outside of the placement group. The control instance has the same instance type and AMI as the other instances and is configured with a public IP address. How can the Solutions Architect improve the network speeds between the control instance and the instances in the placement group?
   - [ ] A. Terminate the control instance and relaunch in the placement group.
   - [ ] B. Ensure that the instances are communicating using the private IP addresses.
   - [ ] C. Ensure that the control instance is using an Elastic Network Adapter.
   - [ ] D. Move the control instance inside the placement group.

   <details>
      <summary>Answer</summary>

      把控制实例移动到放置组里就行，ENA是默认启动的，答案D

   </details>

6. A Solutions Architect has created an AWS CloudFormation template for a three-tier application that contains an Auto Scaling group of Amazon EC2 instances running a custom AMI. The Solutions Architect wants to ensure that future updates to the custom AMI can be deployed to a running stack by first updating the template to refer to the new AMI, and then invoking UpdateStack to replace the EC2 instances with instances launched from the new ANIL How can updates to the AMI be deployed to meet these requirements?
   - [ ] A. Create a change set for a new version of the template, view the changes to the running EC2 instances to ensure that the AMI is correctly updated, and then execute the change set.
   - [ ] B. Edit the AWS::AutoScaling::LaunchConfiguration resource in the template, changing its to Replace. DeletionPolicy
   - [ ] C. Edit the AWS::AutoScaling::LaunchConfiguration resource in the template, inserting an attribute. UpdatePolicy
   - [ ] D. Create a new stack from the updated template. Once it is successfully deployed, modify the DNS records to point to the new stack and delete the old stack.

   <details>
      <summary>Answer</summary>

      概念题，答案C

   </details>

7. A Solutions Architect is designing a multi-account structure that has 10 existing accounts. The design must meet the following requirements:Consolidate all accounts into one organization. Allow full access to the Amazon EC2 service from the master account and the secondary accounts. Minimize the effort required to add additional secondary accounts. Which combination of steps should be included in the solution? (Choose two.)
   - [ ] A. Create an organization from the master account. Send invitations to the secondary accounts from the master account. Accept the invitations and create an OU.
   - [ ] B. Create an organization from the master account. Send a join request to the master account from each secondary account. Accept the requests and create an OU.
   - [ ] C. Create a VPC peering connection between the master account and the secondary accounts. Accept the request for the VPC peering connection.
   - [ ] D. Create a service control policy (SCP) that enables full EC2 access, and attach the policy to the OUT
   - [ ] E. Create a full EC2 access policy and map the policy to a role in each account. Trust every other account to assume the role.

   <details>
      <summary>Answer</summary>

      概念题，答案AD

   </details>

8. AnyCompany has acquired numerous companies over the past few years. The CIO for AnyCompany would like to keep the resources for each acquired company separate. The CIO also would like to enforce a chargeback model where each company pays for the AWS services it uses. The Solutions Architect is tasked with designing an AWS architecture that allows AnyCompany to achieve the following:lmplementing a detailed charge back mechanism to ensure that each company pays for the resources it uses. AnyCompany can pay for AWS services for all its companies through a single invoice. Developers in each acquired company have access to resources in their company only. Developers in an acquired company should not be able to affect resources in their company only. A single identity store is used to authenticate Developers across all companies. Which of the following approaches would meet these requirements? (Choose two.)
   - [ ] A. Create a multi-account strategy with an account per company. Use consolidated billing to ensure that AnyCompany needs to pay a single bill only.
   - [ ] B. Create a multi-account strategy with a virtual private cloud (VPC) for each company. Reduce impact across companies by not creating any VPC peering links. As everything is in a single account, there will be a single invoice. use tagging to create a detailed bill for each company.
   - [ ] C. Create IAM users for each Developer in the account to which they require access. Create policies that allow the users access to all resources in that account. Attach the policies to the IAM user.
   - [ ] D. Create a federated identity store against the company's Active Directory. Create IAM roles with appropriate permissions and set the trust relationships with AWS and the identity store. Use AWS STS to grant users access based on the groups they belong to in the identity store.
   - [ ] E. Create a multi-account strategy with an account per company. For billing purposes, use a tagging solution that uses a tag to identify the company that creates each resource.

   <details>
      <summary>Answer</summary>

      简单题，答案AD

   </details>

9. A company deployed a three-tier web application in two regions:us-east-1 and eu-west-1. The application must be active in both regions at the same time. The database tier of the application uses a single Amazon RDS Aurora database globally, with a master in us-east-1 and a read replica in eu-west-1. Both regions are connected by a VPN The company wants to ensure that the application remains available even in the event of a region-level failure of all the application's components. It is acceptable for the application to be in read-only mode for up to 1 hour. The company plans to configure two Amazon Route 53 record sets, one for each of the regions. How should the company complete the configuration to meet its requirements while providing the lowest latency for the application end-users? (Choose two.)
   - [ ] A. Use failover routing and configure the us-east-1 record set as primary and the eu-west-1 record set as secondary. Configure an HTTP health check for the web application in us-east-1, and associate it to the us-east-1 record set.
   - [ ] B. Use weighted routing and configure each record set with a weight of 50. Configure an HTTP health check for each region and attach it to the record set for that region.
   - [ ] C. Use latency-based routing for both record sets. Configure a health check for each region and attach it to the record set for that region.
   - [ ] D. Configure an Amazon CloudWatch alarm for the health checks in us-east-1, and have it invoke an AWS Lambda function that promotes the read replica in eu-west-1.
   - [ ] E. Configure an Amazon RDS event notifications to react to the failure of the database in us-east-I by invoking an AWS Lambda function that promotes the read replica in eu-west-1.

   <details>
      <summary>Answer</summary>

      - [ ] A. 无法保证低延迟
      - [ ] B. 无法保证低延迟
      - [x] C. 正确
      - [ ] D. 健康检查不代表数据库错误
      - [x] E. 正确

   </details>

10. A company runs a Windows Server host in a public subnet that is configured to allow a team of administrators to connect over RDP to troubleshoot issues with hosts in a private subnet. The host must be always available outside of a scheduled maintenance window and needs to receive the latest operating system updates within 3 days of release. What should be done to manage the host with the LEAST amount of administrative effort?
    - [ ] A. Run the host in a single-instance AWS Elastic Beanstalk environment. Configure the environment with a custom AMI to use a hardened machine image from AWS Marketplace. Apply system updates with AWS Systems Manager Patch Manager.
    - [ ] B. Run the host on AWS WorkSpaces. Use Amazon WorkSpaces Application Manager (WAM) to harden the host. Configure Windows automatic updates to occur every 3 days.
    - [ ] C. Run the host in an Auto Scaling group with a minimum and maximum instance count of 1. Use a hardened machine image from AWS Marketplace. Apply system updates with AWS Systems Manager Patch Manager.
    - [ ] D. Run the host in AWS OpsWorks Stacks. Use a Chief recipe to harden the AMI during instance launch. Use an AWS Lambda scheduled event to run the Upgrade Operating System stack command to apply system updates.

    <details>
       <summary>Answer</summary>

       - [ ] A. 无法保证你的应用可以跟Elastic Beanstalk兼容
       - [ ] B. 没WorkSpaces什么事儿
       - [x] C. 正确
       - [ ] D. 没有Scheduled Lambda

    </details>

11. A company has a large on-premises Apache Hadoop cluster with a 20 PB HDFS database. The cluster is growing every quarter by roughly 200 instances and 1 PB The company's goals are to enable resiliency for its Hadoop data, limit the impact of losing cluster nodes, and significantly reduce costs. The current cluster runs 24/7 and supports a variety of analysis workloads, including interactive queries and batch processing. Which solution would meet these requirements with the LEAST expense and down time?
    - [ ] A. Use AWS Snowmobile to migrate the existing cluster data to Amazon S3. Create a persistent Amazon EMR cluster initially sized to handle the interactive workload based on historical data from the on-premises cluster. Store the data on EMRFS. Minimize costs using Reserved Instances for master and core nodes and Spot Instances for task nodes, and auto scale task nodes based on Amazon CloudWatch metrics. Create job-specific, optimized clusters for batch workloads that are similarly optimized.
    - [ ] B. Use AWS Snowmobile to migrate the existing cluster data to Amazon S3. Create a persistent Amazon EMR cluster of similar size and configuration to the current cluster. Store the data on EMRFS. Minimize costs by using Reserved Instances. As the workload grows each quarter, purchase additional Reserved Instances, and add to the cluster.
    - [ ] C. Use AWS Snowball to migrate the existing cluster data to Amazon S3. Create a persistent Amazon EMR cluster initially sized to handle the interactive workloads based on historical data from the on-premises cluster. Store the on ENIRFS. Minimize costs using Reserved Instances for master and core nodes and Spot Instances for task nodes, and auto scale task nodes based on Amazon CloudWatch metrics. Create job-specific, optimized clusters for batch workloads that are similarly optimized.
    - [ ] D. Use AWS Direct Connect to migrate the existing cluster data to Amazon S3. Create a persistent Amazon EMR cluster initially sized to handle the interactive workload based on historical data from the on-premises cluster. Store the data on EMRFS. Minimize costs using Reserved Instances for master and core nodes and Spot Instances for task nodes, and auto scale task nodes based on Amazon CloudWatch metrics. Create job-specific, optimized clusters for batch workloads that are similarly optimized.

    <details>
       <summary>Answer</summary>

       - [x] A. 正确
       - [ ] B. 工作节点使用预留实例是一种浪费
       - [ ] C. 10PB以上使用Snowmobile
       - [ ] D. AWS Direct Connect跟Snowmobile比慢得一批

    </details>

12. A company is running a large application on-premises. Its technology stack consists of Microsoft .NET for the web server platform and Apache Cassandra for the database. The company wants to migrate the application to AWS to improve service reliability. The IT team also wants to reduce the time it spends on capacity management and maintenance of this infrastructure. The Development team is willing and available to make changes to support the migration. Which design is the LEAST complex to manage after the migration?
    - [ ] A. Migrate the web servers to Amazon EC2 instances in an Auto Scaling group that is running .NET. Migrate the existing Cassandra database to Amazon Aurora with multiple read replicas and run both in a Multi-AZ mode.
    - [ ] B. Migrate the web servers to an AWS Elastic Beanstalk environment that is running the .NET platform in a Multi-AZ Auto Scaling configuration. Migrate the Cassandra database to Amazon EC2 instances that are running in a MuIti-AZ configuration.
    - [ ] C. Migrate the web servers to an AWS Elastic Beanstalk environment that is running the .NET platform in a Multi-AZ Auto Scaling configuration. Migrate the existing Cassandra database to Amazon DynamoDB.
    - [ ] D. Migrate the web servers to Amazon EC2 instances in an Auto Scaling group that is running .NET. Migrate the existing Cassandra database to Amazon DynamoDB.

    <details>
       <summary>Answer</summary>

       简单题，卡珊德拉可以用DynamoDB进行替代，答案C

    </details>

13. A company has a requirement that only allows specially hardened AMIs to be launched into public subnets in a VPC, and for the AMIs to be associated with a specific security group. Allowing non-compliant instances to launch into the public subnet could present a significant security risk if they are allowed to operate. A mapping of approved AMIs to subnets to security groups exists in an Amazon DynamoDB table in the same AWS account. The company created an AWS Lambda function that, when invoked, will terminate a given Amazon EC2 instance if the combination of AMI, subnet, and security group are not approved in the DynamoDB table. What should the Solutions Architect do to mitigate the risk of compliance deviations MOST quickly?
    - [ ] A. Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched using one of the allowed AMIs, and associate it with the Lambda function as the target.
    - [ ] B. For the Amazon S3 bucket receiving the Aws CloudTrail logs, create an S3 event notification configuration with a filter to match when logs contain the ec2:RunInstances action, and associate it with the Lambda function as the target.
    - [ ] C. Enable AWS CloudTrail and configure it to stream to an Amazon CloudWatch Logs group. Create a metric filter in CloudWatch to match when the ec2:RunInstances action occurs, and trigger the Lambda function when the metric is greater than 0.
    - [ ] D. Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched, and associate it with the Lambda function as the target

    <details>
       <summary>Answer</summary>

       - [ ] A. 已经启动的实例无法被停止
       - [ ] B. Trail有5-15分钟的延迟，这样黄花菜都凉了
       - [ ] C. 同B
       - [x] D. 正确

    </details>

14. A Solutions Architect must migrate an existing on-premises web application with 70 TB of static files supporting a public open-data initiative. The architect wants to upgrade to the latest version of the host operating system as part of the migration effort. Which is the FASTEST and MOST cost-effective way to perform the migration?
    - [ ] A. Run a physical-to-virtual conversion on the application server. Transfer the server image over the internet and transfer the static data to Amazon S3.
    - [ ] B. Run a physical-to-virtual conversion on the application server. Transfer the server image over AWS Direct Connect and transfer the static data to Amazon S3.
    - [ ] C. Re-platform the server to Amazon EC2, and use AWS Snowball to transfer the static data to Amazon S3.
    - [ ] D. Re-platform the server by using the AWS Server Migration Service to move the and data to a new Amazon EC2 instance.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

15. A company has an application that generates a weather forecast that is updated every 15 minutes with an output resolution of 1 billion unique positions, each approximately 20 bytes in size (20 Gigabytes per forecast). Every hour, the forecast data is globally accessed approximately 5 million times (l ,400 requests per second), and up to 10 times more during weather events. The forecast data is overwritten every update. Users of the current weather forecast application expect responses to queries to be returned in less than two seconds for each request. Which design meets the required request rate and response time?
    - [ ] A. Store forecast locations in an Amazon ES cluster. Use an Amazon CloudFront distribution targeting an Amazon API Gateway endpoint with AWS Lambda functions responding to queries as the origin. Enable API caching on the API Gateway stage with a cache-control timeout set for 15 minutes.
    - [ ] B. Store forecast locations in an Amazon EFS volume. Create an Amazon CloudFront distribution that targets an Elastic Load Balancing group of an Auto Scaling fleet of Amazon EC2 instances that have mounted the Amazon EFS volume. Set the set cache-control timeout for 15 minutes in the CloudFront distribution.
    - [ ] C. Store forecast locations in an Amazon ES cluster. Use an Amazon CloudFront distribution targeting an API Gateway endpoint with AWS Lambda functions responding to queries as the origin. Create an Amazon Lambda@Edge function that caches the data locally at edge locations for 15 minutes.
    - [ ] D. Store forecast locations in an Amazon S3 as individual objects. Create an Amazon CloudFront distribution targeting an Elastic Load Balancing group of an Auto Scaling fleet ofEC2 instances, querying the origin of the S3 object. Set the cache-control timeout for 15 minutes in the 3CloudFront distribution.

    <details>
       <summary>Answer</summary>

       - [x] A. 正确
       - [ ] B. Cache-control header是在Origin里的，不在CloudFront
       - [ ] C. 将数据缓存到Lambda@Edge中会造成溢出
       - [ ] D. 同B

    </details>

16. A company is using AWS CloudFormation to deploy its infrastructure. The company is concerned that, if a production CloudFormation stack is deleted, important data stored in Amazon RDS databases or Amazon EBS volumes might also be deleted. How can the company prevent users from accidentally deleting data in this way?
    - [ ] A. Modify the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources.
    - [ ] B. Configure a stack policy that disallows the deletion of RDS and EBS resources.
    - [ ] C. Modify IAM policies to deny deleting RDS an EBS resources that are tagged with an tag.
    - [ ] D. Use AWS Config rules to prevent deleting RDS and EBS resources.

    <details>
       <summary>Answer</summary>

       - [x] A. 正确
       - [ ] B. 栈升级的时候才用到Stack Policy
       - [ ] C. 这个只能防故意删除
       - [ ] D. AWS Config只能用来监控

    </details>

17. A company would like to implement a serverless application by using Amazon API Gateway, AWS Lambda and Amazon DynamoDB. They deployed a proof of concept and stated that the average response time is greater than what their upstream services can accept Amazon CloudWatch metrics did not indicate any issues with DynamoDB but showed that some Lambda functions were hitting their timeout. Which of the following actions should the Solutions Architect consider improving performance? (Choose two.)
    - [ ] A. Configure the AWS Lambda function to reuse containers to avoid unnecessary startup time.
    - [ ] B. Increase the amount of memory and adjust the timeout on the Lambda function. Complete performance testing to identify the ideal memory and timeout configuration for the Lambda function.
    - [ ] C. Create an Amazon ElastiCache cluster running Memcached, and configure the Lambda function for VPC integration with access to the Amazon ElastiCache cluster.
    - [ ] D. Enable API cache on the appropriate stage in Amazon API Gateway, and override the TTL for individual methods that require a lower TTL than the entire stage.
    - [ ] E. Increase the amount of CPU, and adjust the timeout on the Lambda function. Complete performance testing to identify the ideal CPU and timeout configuration for the Lambda function.

    <details>
       <summary>Answer</summary>

       提高内存和增加缓存是最佳解决方案

    </details>

18. A company is using AWS to run an internet-facing production application written in Node.js. The Development team is responsible for pushing new versions of their software directly to production. The application software is updated multiple times a day. The team needs guidance from a Solutions Architect to help them deploy the software to the production fleet quickly and with the least amount of disruption to the service. Which option meets these requirements?
    - [ ] A. Prepackage the software into an AMI and then use Auto Scaling to deploy the production fleet. For software changes, update the AMI and allow Auto Scaling to automatically push the new AMI to production.
    - [ ] B. Use AWS CodeDeploy to push the prepackaged AMI to production. For software changes, reconfigure CodeDeploy with new AMI identification to push the new AMI to the production fleet.
    - [ ] C. Use AWS Elastic Beanstalk to host the production application. For software changes, upload the new application version to Elastic Beanstalk to push this to the production fleet using a blue/green deployment method.
    - [ ] D. Deploy the base AMI through Auto Scaling and bootstrap the software using user data. For software changes, SSH to each of the instances and replace the software with the new version.

    <details>
       <summary>Answer</summary>

       蓝绿部署是最佳实践，答案C

    </details>

19. A company used Amazon EC2 instances to deploy a web fleet to host a blog site. The EC2 instances are behind an Application Load Balancer (ALB) and are configured in an Auto Scaling group. The web application stores all blog content on an Amazon EFS volume. The company recently added a feature for bloggers to add video to their posts, attracting 10 times the previous user traffic. At peak times of day, users report buffering and timeout issues while attempting to reach the site or watch videos. Which is the MOST cost-efficient and scalable deployment that will resolve the issues for users?
    - [ ] A. Reconfigure Amazon EFS to enable maximum I/O.
    - [ ] B. Update the blog site to use instance store volumes for storage. Copy the site contents to the volumes at launch and to Amazon S3 at shutdown.
    - [ ] C. Configure an Amazon CloudFront distribution. Point the distribution to an S3 bucket, and migrate the videos from EFS to Amazon S3.
    - [ ] D. Set up an Amazon CloudFront distribution for all suite contents, and point the distribution at the ALB.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

20. A company runs its containerized batch jobs on Amazon ECS. The jobs are scheduled by submitting a container image, a task definition, and the relevant data to an Amazon S3 bucket. Container images may be unique per job. Running the jobs as quickly as possible is of utmost importance, so submitting jobs artifacts to the S3 bucket triggers the job to run immediately. Sometimes there may no jobs be running at all. However, jobs of any size can be submitted with no warning to the IT Operations team. Job definitions include CPU and memory resource requirements. What solution will allow the batch jobs to complete as quickly as possible after being scheduled?
    - [ ] A. Schedule the jobs on an Amazon ECS cluster using the Amazon EC2 launch type. Use Service Auto Scaling to increase or decrease the number of running tasks to suit the number of running jobs.
    - [ ] B. Schedule the jobs directly on EC2 instances. Use Reserved Instances for the baseline minimum load and use On-Demand Instances in an Auto Scaling group to scale up the platform based on demand.
    - [ ] C. Schedule the jobs on an Amazon ECS cluster using the Fargate launch type. Use Service Auto Scaling to increase or decrease the number of running tasks to suit the number of running jobs.
    - [ ] D. Schedule the jobs on an Amazon ECS cluster using the Fargate launch type. Use Spot Instances in an Auto Scaling group to scale the platform based on demand. Use Service Auto Scaling to increase or decrease the number of running tasks to suit the number of running jobs.

    <details>
       <summary>Answer</summary>

       EC2的大小会限制工作，不应该使用Spot，答案C

    </details>

21. A company receives clickstream data files to Amazon S3 evew five minutes. A Python script runs as a cronjob once a day on an Amazon EC2 instance to process each file and load it into a database hosted on Amazon RDS. The cronjob takes 15 to 30 minutes to process 24 hours of data. The data consumers ask for the data be available as soon as possible. Which solution would accomplish the desired outcome?
    - [ ] A. Increase the size of the instance to speed up processing and update the schedule to run once an hour.
    - [ ] B. Convert the cron job to an AWS Lambda function and trigger this new function using a cron job on an EC2 instance.
    - [ ] C. Convert the cron job to an AWS Lambda function and schedule it to run once an hour using Amazon CloudWatch events.
    - [ ] D. Create an AWS Lambda function that runs when a file is delivered to Amazon S3 using S3 event notifications.
22. A company that is new to AWS reports it has exhausted its service limits across several accounts that are on the Basic Support plan. The company would like to prevent this from happening in the future. What is the MOST efficient way of monitoring and managing all service limits in the company's accounts?
    - [ ] A. Use Amazon CloudWatch and AWS Lambda to periodically calculate the limits across all linked accounts using AWS Trusted Advisor, provide notifications using Amazon SNS if the limits are close to exceeding the threshold.
    - [ ] B. Reach out to AWS Support to proactively increase the limits across all accounts. That way, the customer avoids creating and managing infrastructure just to raise the service limits.
    - [ ] C. Use Amazon CloudWatch and AWS Lambda to periodically calculate the limits across all linked accounts using AWS Trusted Advisor, programmatically increase the limits that are close to exceeding the threshold.
    - [ ] D. Use Amazon CloudWatch and AWS Lambda to periodically calculate the limits across all linked accounts using AWS Trusted Advisor, and use Amazon SNS for notifications if a limit is close to exceeding the threshold. Ensure that the accounts are using the AWS Business Support plan at a minimum.
23. A company needs to run a software package that has a license that must be run on the same physical host for the duration of its use. The software package is only going to be used for 90 days. The company requires patching and restarting of all instances every 30 days. How can these requirements be met using AWS?
    - [ ] A. Run a dedicated instance with auto-placement disabled.
    - [ ] B. Run the instance on a dedicated host with Host Affinity set to Host.
    - [ ] C. Run an On-Demand instance with a Reserved Instance to ensure consistent placement.
    - [ ] D. Run the instance on a licensed host with termination set for 90 days.
24. A company runs an 10T platform on AWS. 10T sensors in various locations send data to the company's Node.js API servers on Amazon EC2 instances running behind an Application Load Balancer. The data is stored in an Amazon RDS MySQL DB instance that uses a 4 TB General Purpose SSD volume. The number of sensors the company has deployed in the field has increased over time, and is expected to grow significantly. The API servers are consistently overloaded and RDS metrics show high write latency. Which of the following steps together will resolve the issues permanently and enable growth as new sensors are provisioned, while keeping this platform cost-efficient? (Choose two.)
    - [ ] A. Resize the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS
    - [ ] B. Re-architect the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and add read replicas
    - [ ] C. Leverage Amazon Kinesis Data Streams and AWS Lambda to ingest and process the raw data
    - [ ] D. Use AWS-X-Ray to analyze and debug application issues and add more API servers to match the load
    - [ ] E. Re-architect the database tier to use Amazon DynamoDB instead of an RDS MySQL DB instance
25. A Solutions Architect is designing a system that will collect and store data from 2,000 internetconnected sensors. Each sensor produces I KB of data every second. The data must be available for analysis within a few seconds of it being sent to the system and stored for analysis indefinitely. Which is the MOST cost-effective solution for collecting and storing the data?
    - [ ] A. Put each record in Amazon Kinesis Data Streams. Use an AWS Lambda function to write each record to an object in Amazon S3 with a prefix that organizes the records by hour and hashes the record's key. Analyze recent data from Kinesis Data Streams and historical data from Amazon S3.
    - [ ] B. Put each record in Amazon Kinesis Data Streams. Set up Amazon Kinesis Data Firehose to read records from the stream and group them into objects in Amazon S3. Analyze recent data from Kinesis Data Streams and historical data from Amazon S3.
    - [ ] C. Put each record into an Amazon DynamoDB table. Analyze the recent data by querying the table. Use an AWS Lambda function connected to a DynamoDB stream to group records together, write them into objects in Amazon S3, and then delete the record from the DynamoDB table. Analyze recent data from the DynamoDB table and historical data from Amazon S3
    - [ ] D. Put each record into an object in Amazon S3 with a prefix what organizes the records by hour and hashes the record's key. Use S3 lifecycle management to transition objects to S3 infrequent access storage to reduce storage costs. Analyze recent and historical data by accessing the data in Amazon S3
26. An auction web servers that write bid records into Amazon Kinesis Data Streams. A single t2.large instance has a cronjob that runs the bid processor, which reads incoming bids from Kinesis Data Streams and processes each bid. The auction site is growing in popularity, but users are complaining that some bids are not registering. Troubleshooting indicates that the bid processor is too slow during peak demand hours, sometimes crashes while processing, and occasionally loses track of which records is being processed. What changes should make the bid processing more reliable?
    - [ ] A. Refactor the web application to use the Amazon Kinesis Producer Libraxy (KPL) when posting bids to Kinesis Data Streams. Refactor the bid processor to flag each record in Kinesis Data Streams as being unread, processing, and processed. At the start of each bid processing run, scan Kinesis Data Streams for unprocessed records.
    - [ ] B. Refactor the web application to post each incoming bid to an Amazon SNS topic in place of Kinesis Data Streams. Configure the SNS topic to trigger an AWS Lambda function that processes each bid as soon as a user submits it.
    - [ ] C. Refactor the web application to post each incoming bid to an Amazon SQS FIFO queue in place of Kinesis Data Streams. Refactor the bid processor to continuously the SQS queue. Place the bid processing EC2 instance in an Auto Scaling group with a minimum and a maximum size of I.
    - [ ] D. Switch the EC2 instance type from t2.large to a larger general compute instance type. Put the bid processor EC2 instances in an Auto Scaling group that scales out the number of EC2 instances running the bid processor, based on the IncomingRecords metric in Kinesis Data Streams.
27. A company has asked a Solutions Architect to design a secure content management solution that can be accessed by API calls by external customer applications. The company requires that a customer administrator must be able to submit an API call and roll back changes to existing files sent to the content management solution, as needed. What is the MOST secure deployment design that meets all solution requirements?
    - [ ] A. Use Amazon S3 for object storage with versioning and bucket access logging enabled, and an IAM role and access policy for each customer application. Encryrpt objects using SSE-KMS. Develop the content management application to use a separate AWS KMS key for each customer.
    - [ ] B. Use Amazon WorkDocs for object storage. Leverage Work-Docs encryption, user access management, and version control. Use AWS CloudTrail to log all SDK actions and create reports of hourly access by using the Amazon CloudWatch dashboard. Enable a revert function in the SDK based on a static Amazon S3 webpage that shows the output of the CloudWatch dashboard.
    - [ ] C. Use Amazon EFS for object storage, using encryption at rest for the Amazon EFS volume and a customer managed key stored in AWS KMS. Use IAM roles and Amazon EFS access policies to specify separate encryption keys for each customer application. Deploy the content management application to store all new versions as new files in Amazon EFS and use a control API to revert a specific file to a previous version.
    - [ ] D. Use Amazon S3 for object storage with versioning and enable S3 bucket access logging. Use an IAM role and access policy for each customer application. Encrypt objects using client-side encryption, and distribute an encryption key to all customers when accessing the content management application.
28. A company has been using a third-party provider for its content delivery network and recently decided to switch to Amazon CloudFront the Development team wants to maximize performance for the global user base. The company uses a content management system (CMS) that serves both static and dynamic content. The CMS is both md an Application Load Balancer (ALB) which is set as the default origin for the distribution. Static assets are sewed from an Amazon S3 bucket. The Origin Access Identity (OAI) was created property d the S3 bucket policy has been updated to allow the GetObject action from the OAI, but static assets are receiving a 404 error. Which combination of steps should the Solutions Architect take to fix the error? (Select TWO.)
    - [ ] A. Add another origin to the CloudFront distribution for the static assets
    - [ ] B. Add a path based rule to the ALB to forward requests for the static assets
    - [ ] C. Add an RTMP distribution to allow caching of both static and dynamic content
    - [ ] D. Add a behavior to the CloudFront distribution for the path pattern and the origin of the static assets
    - [ ] E. Add a host header condition to the ALB listener and fonvard the header from CloudFront to add traffic to the allow list
29. A bank is re-architecting its mainframe-based credit card approval processing application to a cloud-native application on the AWS cloud. The new application will receive up to 1,000 requests per second at peak load. There are multiple steps to each transaction, and each step must receive the result of the previous step. The entire request must return an authorization response within less than 2 seconds with zero data loss. Every request must receive a response. The solution must be Payment Card Industry Data Security Standard (PCI DSS)-compliant. Which option will meet all of the bank's objectives with the LEAST complexity and cost while also meeting compliance requirements?
    - [ ] A. Create an Amazon API Gateway to process inbound requests using a single AWS Lambda task that performs multiple steps and returns a JSON object with the approval status. Open a support case to increase the limit for the number of concurrent Lambdas to allow room for bursts of activity due to the new application.
    - [ ] B. Create an Application Load Balancer with an Amazon ECS cluster on Amazon EC2 Dedicated instances in a target group to process incoming requests. Use Auto Scaling to scale the cluster out/in based on average CPU utilization. Deploy a web service that processes all of the approval steps and returns a JSON object with the approval status.
    - [ ] C. Deploy the application on Amazon EC2 on Dedicated Instances. Use an Elastic Load Balancer in front of a farm of application servers in an Auto Scaling group to handle incoming requests. Scale outlin based on a custom Amazon CloudWatch metric for the number of inbound requests per second after measuring the capacity of a single instance.
    - [ ] D. Create an Amazon API Gateway to process inbound requests using a series ofAWS Lambda processes, each with an Amazon SQS input queue. As each step completes, it writes its result to the next step's queue. The final step returns a JSON object with the approval status. Open a support case to increase the limit for the number of concurrent Lambdas to allow room for bursts of activity due to the new application.
30. A Solutions Architect is migrating a 10 TB PostgreSQL database to Amazon RDS for PostgreSQL The company's internet link is 50 MB with a VPN in the Amazon VPC, and the Solutions Architect needs to migrate the data and synchronize the changes before the cutover. The cutover must take place within an 8-day period. What is the LEAST complex method of migrating the database securely and reliably?
    - [ ] A. Order an AWS Snowball device and copy the database using the AWS DMS. When the database is available in Amazon 3, use AWS DMS to load it to Amazon RDS, and configure a job to synchronize changes before the cutover.
    - [ ] B. Create an AWS DMS job to continuously replicate the data from on premises to AWS. Cutover to Amazon RDS after the data is synchronized.
    - [ ] C. Order an AWS Snowball device and copy a database dump to the device. After the data has been copied to Amazon S3, import it to the Amazon RDS instance. Set up log shipping over a VPN to synchronize changes before the cutover.
    - [ ] D. Order an AWS Snowball device and copy the database by using the AWS Schema Conversion Tool. When the data is available in Amazon S3, use AWS DMS to load it to Amazon RDS, and configure a job to synchronize changes before the cutover.
31. A Solutions Architect must update an application environment within AWS Elastic Beanstalk using a blue/ green deployment methodology. The Solutions Architect creates an environment that is identical to the existing application environment and deploys the application to the new environment. What should be done next to complete the update?
    - [ ] A. Redirect to the new environment using Amazon Route 53
    - [ ] B. Select the Swap Environment URLs option
    - [ ] C. Replace the Auto Scaling launch configuration
    - [ ] D. Update the DNS records to point to the green environment
32. A company has a legacy application running on servers on premises. To increase the application's reliability, the company wants to gain actionable insights using application logs. A Solutions Architect has been given following requirements for the solution:-Aggregate logs using AWS. -Automate log analysis for errors. -Notify the Operations team when errors go beyond a specified threshold. What solution meets the requirements?
    - [ ] A. Install Amazon Kinesis Agent on servers, send logs to Amazon Kinesis Data Streams and use Amazon Kinesis Data Analytics to identify errors, create an Amazon CloudWatch alarm to notify the Operations team of errors
    - [ ] B. Install an AWS X-Ray agent on servers, send logs to AWS Lambda and analyze them to identify errors, use Amazon CloudWatch Events to notify the Operations team of errors.
    - [ ] C. Install Logstash on servers, send logs to Amazon S3 and use Amazon Athena to identify errors, use sendmail to notify the Operations team of errors.
    - [ ] D. Install the Amazon CloudWatch agent on servers, send logs to Amazon CloudWatch Logs and use metric filters to identify errors, create a CloudWatch alarm to notify the Operations team of errors.
33. What combination of steps could a Solutions Architect take to protect a web workload running on Amazon EC2 from DDoS and application layer attacks? (Select two.)
    - [ ] A. Put the EC2 instances behind a Network Load Balancer and configure AWS WAF on it.
    - [ ] B. Migrate the DNS to Amazon Route 53 and use AWS Shield.
    - [ ] C. Put the EC2 instances in an Auto Scaling group and configure AWS WAF on it.
    - [ ] D. Create and use an Amazon CloudFront distribution and configure AWS WAF on it.
    - [ ] E. Create and use an internet gateway in the VPC and use AWS Shield.
34. A photo-sharing and publishing company receives 10,000 to 150,000 images daily. The company receives the images from multiple suppliers and users registered with the service. The company is moving to AWS and wants to enrich the existing metadata by adding data using Amazon Rekognition. The following is an example of the additional data:As part of the cloud migration program, the company uploaded existing image data to Amazon S3 and told users to upload images directly to Amazon S3. What should the Solutions Architect do to support these requirements?
    - [ ] A. Trigger AWS Lambda based on an S3 event notification to create additional metadata using Amazon Rekognition. Use Amazon DynamoDB to store the metadata and Amazon ES to create an index. Use a web front-end to provide search capabilities backed by Amazon ES.
    - [ ] B. Use Amazon Kinesis to stream data based on an S3 event. Use an application running in Amazon EC2 to extract metadata from the images. Then store the data on Amazon DynamoDB and Amazon CloudSearch and create an index. Use a web front-end with search capabilities backed by CloudSearch.
    - [ ] C. Start an Amazon SQS queue based on S3 event notifications. Then have Amazon SQS send the metadata information to Amazon DynamoDB. An application running on Amazon EC2 extracts data from Amazon Rekognition using the API and adds data to DynamoDB and Amazon ES. Use a web front-end to provide search capabilities backed by Amazon ES.
    - [ ] D. Trigger AWS Lambda based on an S3 event notification to create additional metadata using Amazon Rekognition. Use Amazon RDS MySQL Multi-AZ to store the metadata information and use Lambda to create an index. Use a web front-end with search capabilities backed by Lambda.
35. A Solutions Architect is redesigning an image-viewing and messaging platform to be delivered as SaaS. Currently, there is a farm of virtual desktop infrastmcture (VDI) that runs a desktop image- viewing application and a desktop messaging application. Both applications use a shared database to manage user accounts and sharing. Users log in from a web portal that launches the applications and streams the view of the application on the user's machine. The Development Operations team wants to move away from using VDI and wants to rewrite the application. What is the MOST cost-effective architecture that offers both security and ease of management?
    - [ ] A. Run a website from an Amazon S3 bucket with a separate S3 bucket for images amd messaging data. Call AWS Lambda functions from embedded JavaScript to manage the dynamic content, and use Amazon Cognito for user and sharing management.
    - [ ] B. Run a website from Amazon EC2 Linux servers, storing the images in Amazon S3, and use Amazon Cognito for user accounts and sharing. Create AWS CloudFormation templates to launch the application by using EC2 user data to install and configure the application.
    - [ ] C. Run a website as an AWS Elastic Beanstalk application, storing the images in Amazon S3, and using an Amazon RDS database for user accounts and sharing. Create AWS CloudFormation templates to launch the application and perform blue/green deployments.
    - [ ] D. Run a website from an Amazon S3 bucket that authorizes Amazon AppStream to stream applications for a combined image viewer and messenger that stores images in Amazon S3. Have the website use an Amazon RDS database for user accounts and sharing.
36. A company would like to implement a sewerless application by using Amazon API Gateway, AWS Lambda and Amazon DynamoDB. They deployed a proof of concept and stated that the average response time is greater than what their upstream services can accept Amazon CloudWatch metrics did not indicate any issues with DynamoDB but showed that some Lambda functions were hitting their timeout. Which of the following actions should the Solutions Architect consider to improve performance? (Choose two.)
    - [ ] A. Configure the AWS Lambda function to reuse containers to avoid unnecessaxy startup time.
    - [ ] B. Increase the amount of memory and adjust the timeout on the Lambda function. Complete performance testing to identify the ideal memory and timeout configuration for the Lambda function.
    - [ ] C. Create an Amazon ElastiCache cluster mnning Memcached, and configure the Lambda function for VPC integration with access to the Amazon ElastiCache cluster.
    - [ ] D. Enable API cache on the appropriate stage in Amazon API Gateway, and override the T TL for individual methods that require a lower T TL than the entire stage.
    - [ ] E. Increase the amount of CPU, and adjust the timeout on the Lambda function. Complete performance testing to identify the ideal CPU and timeout configuration for the Lambda function.
37. A company is migrating an application to AWS. It wants to use fully managed sewices as much as possible during the migration. The company needs to store large, important documents within the application with the following requirements:-The data must be highly durable and available. -The data must always be encrypted at rest and in transit. -The encwption key must be managed by the company and rotated periodically. Which ofthe following solutions should the Solutions Architect recommend?
    - [ ] A. Deploy the storage gateway to AWS in file gateway mode. Use Amazon EBS volume encryption using an AWS KMS key to encxypt the storage gateway volumes.
    - [ ] B. Use Amazon S3 with a bucket policy to enforce HTTPS for connections to the bucket and to enforce server-side encryption and AWS KMS for object encxyption.
    - [ ] C. Use Amazon DynamoDB with SSL to connect to DynamoDB. Use an AWS KMS key to encryrpt DynamoDB objects at rest.
    - [ ] D. Deploy instances with Amazon EBS volumes attached to store this data. Use EBS volume encryption using an AWS KMS key to encrypt the data.
38. A Solutions Architect is designing a highly available and reliable solution for a cluster of Amazon EC2 instances. The Solutions Architect must ensure that any EC2 instance within the cluster recovers automatically afterta system failure. The solution must ensure that the recovered instance maintains the same IP address. How can these requirements be met?
    - [ ] A. Create an AWS Lambda script to restart any EC2 instances that shut down unexpectedly.
    - [ ] B. Create an Auto Scaling group for each EC2 instance that has a minimum and maximum size of l.
    - [ ] C. Create a new t2.micro instance to monitor the cluster instances. Configure the t2.micro instance to issue an aws ec2 reboot-instances command upon failure.
    - [ ] D. Create an Amazon CloudWatch alarm for the StatusCheckFailed System metric, and then configure an EC2 action to recover the instance.
39. A public retail web application uses an Application Load Balancer (ALB) in front ofAmazon EC2 instances running across multiple Availability Zones (AZs) in a Region backed by an Amazon RDS MySQL Multi-AZ deployment. Target group health checks are configured to use HTTP and pointed at the product catalog page. Auto Scaling is configured to maintain the web fleet size based on the ALB health check. Recently, the application experienced an outage. Auto Scaling continuously replaced the instances during the outage. A subsequent investigation determined that the web server metrics were within the normal range, but the database tier was experiencing high load, resulting in severely elevated query response times. Which of the following changes together would remediate these issues while improving monitoring capabilities for the availability and ftnctionality of the entire application stack for future growth? (Select TWO.)
    - [ ] A. Configure read replicas for Amazon RDS MySQL and use the single reader endpoint in the web application to reduce the load on the backend database tier.
    - [ ] B. Configure the target group health check to point at a simple HTML page instead of a product catalog page and the Amazon Route 53 health check against the product page to evaluate full application functionality. Configure Amazon CloudWatch alarms to notify administrators when the site fails.
    - [ ] C. Configure the target group health check to use a TCP check of the Amazon EC2 web server and the Amazon Route 53 health check against the product page to evaluate full application functionality. Configure Amazon CloudWatch alarms to notify administrators when the site fails.
    - [ ] D. Configure an Amazon CloudWatch alarm for Amazon RDS with an action to recover a high-load, impaired RDS instance in the database tier.
    - [ ] E. Configure an Amazon ElastiCache cluster and place it between the web application and RDS MySQL instances to reduce the load on the backend database tier.
40. A company is mnning an email application across multiple AWS Regions. The company uses Ohio (us-east-2) as the primaw Region and Northern Virginia (us-east-I) as the Disaster Recovery (DR) Region. The data is continuously replicated from the primaw Region to the DR Region by a single instance on the public subnet in both Regions. The replication messages between the Regions have a significant backlog during certain times of the day. The backlog clears on its own after a short time, but it affects the application's RPC). Which of the following solutions should help remediate this performance problem? (Select TWO)
    - [ ] A. Increase the size of the instances.
    - [ ] B. Have the instance in the primary Region write the data to an Amazon SQS queue in the primary Region instead, and have the instance in the DR Region poll from this queue.
    - [ ] C. Use multiple instances on the primary and DR Regions to send and receive the replication data.
    - [ ] D. Change the DR Region to Oregon (us-west-2) instead of the current DR Region.
    - [ ] E. Attach an additional elastic network interface to each of the instances in both Regions and set up load balancing between the network interfaces.
41. A company has implemented AWS Organizations. It has recently set up a number of new accounts and wants to deny access to a specific set of AWS services in these new accounts. How can this be controlled MOST efficiently?
    - [ ] A. Create an IAM policy in each account that denies access to the services. Associate the policy with an IAM group, and add all IAM users to the group.
    - [ ] B. Create a service control policy that denies access to the services. Add all of the new accounts to a single organizations unit (OU), and apply the policy to that OU.
    - [ ] C. Create an IAM policy in each account that denies access to the service. Associate the policy with an IAM role, and instmct users to log in using their corporate credentials and assume the IAM role.
    - [ ] D. Create a service control policy that denies access to the services, and apply the policy to the root of the organization.
42. A company is planning to migrate an application from on-premises to AWS. The application currently uses an Oracle database and the company can tolerate a brief downtime of I hour when performing the switch to the new infrastmcture. As part of the migration, the database engine will be changed to MySQL A Solutions Architect needs to determine which AWS services can be used to perform the migration while minimizing the amount of work and time required. Which of the following will meet the requirements?
    - [ ] A. Use AWS SCT to generate the schema scripts and apply them on the target prior to migration. Use AWS DMS to analyse the current schema and provide a recommendation for the optimal database engine. Then, use AWS DMS to migrate to the recommended enginer. Use AWS SCT to identify what embedded SQL in the application can be converted and what has to be done manually.
    - [ ] B. Use AWS SC T to generate the schema scripts and apply them on the target prior to migration. Use AWS DMS to begin moving data from the on-premises database to AWS. After the initial copy, continue to use AWS DMS to keep the databases insync until cutting over to the new database. Use AWS SCT to identify what embedded SQL in the application can be converted and what has to be done manually.
    - [ ] C. Use AWS DMS to help identify the best target deployment between installing the database engine on Amazon EC2 dierctly or moving to Amazon RDS. Then, use AWS DMS to migrate to the platform. Use AWS Application Discovery Service to identify what embedded SQL in the application can be converted and what has to be done manually.
    - [ ] D. Use AWS DMS to begin moving data from the on-premises database to AWS. After the intitial copy, continue to use AWS DMS to keep the databases in sync until cutting over to the new database. Use AWS Application Discovery Service to identify what embedded SQL in the application can be converted and what has to be done manually.
43. A Solutions Architect has created an AWS CloudFormation template for a three-tier application that contains an Auto Scaling group of Amazon EC2 instances running a custom AMI. The Solutions Architect wants to ensure that future updates to the custom AMI can be deployed to a running stack by first updating the template to refer to the new AMI, and then invoking UpdateStack to replace the EC2 instances with instances launched from the new AML How can updates to the AMI be deployed to meet these requirements?
    - [ ] A. Create a change set for a new version of the template, view the changes to the running EC2 instances to ensure that the AMI is correctly updated, and then execute the change set.
    - [ ] B. Edit the AWS::AutoScaling::LaunchConfiguration resource in the template, changing its to Replace. DeletionPolicy
    - [ ] C. Edit the AWS::AutoScaling::AutoScalingGroup resource in the template, inserting an attribute.UpdatePolicy
    - [ ] D. Create a new stack from the updated template. Once it is successfully deployed, modify the DNS records to point to the new stack and delete the old stack.
44. Your company has a logging microservice which is used to generate logs when users have entered certain commands in another application. This logging sewice is implemented via an SQS standard queue that an EC2 instance is listening to. However, you have found that on some occasions, the order of the logs are not maintained. As a result, it becomes harder to use this service to trace users' activities. How should you fix this issue in a simple way?
    - [ ] A. Convert the existing standard queue into a FIFO queue. Add a deduplication ID for the messages that are sent to the queue.
    - [ ] B. Delete the existing standard queue and recreate it as a FIFO queue. As a result, the order for the messages to be received is ensured.
    - [ ] C. Migrate the whole microservice application to SWF so that the operation sequence is guaranteed.
    - [ ] D. The wrong order of timestamps is a limitation of SQS, which does not have a fix.
45. A large trading company is using an on-premise system to analyze the trade data. After the trading day closes, the data including the day's transaction costs, execution reporting, and market performance is sent to a Redhat server which runs big data analytics tools for predictions for next day trading. A bash script is used to configure resource and schedule when to run the data analytics workloads. How should the on-premise system be migrated to AWS with appropriate tools? (Select THREE)
    - [ ] A. Create a S3 bucket to store the trade data that is used for post processing.
    - [ ] B. Send the trade data from various sources to a dedicated SQS queue.
    - [ ] C. Use AWS Batch to execute the bash script using a proper job definition.
    - [ ] D. Create EC2 instances with auto-scaling to handle with the big data analytics workloads.
    - [ ] E. Use CloudWatch Events to schedule the data analytics jobs
46. A large IT company has an on-premise website which provides real-estate information such as renting, house prices and latest news to users. The website has a Java backend and a NoSQL MongoDB database that is used to store subscribers data. You are a cloud analyst and need to migrate the whole application to AWS platform. Your manager requires that a similar stmcture should be deployed in AWS for high availability. Moreover, a tracing framework is essential which can record data from both the client request and the downstream call to the database in AWS. Which AWS services should you choose to implement the migration? Select 3 Options.
    - [ ] A. Deploy an autoscaling group of Java backend servers to provide high availability
    - [ ] B. Use RDS Aurora as the database for the subscriber data because it is highly available and can scale up to 15 Read Replicas
    - [ ] C. Create a DynamoDB database to hold subscriber data. Set up an autoscaling policy for the read/write throughput.
    - [ ] D. Use AWS X-Ray SDK to record data about incoming and outgoing requests. View the statistics graph in X-Ray console.
    - [ ] E. Trace the requests using AWS JAVA SDK and send logs to AWS CloudWatch Events. Create a CloudWatch dashboard to view the statistics.
47. You work in a video game company and your team is working on a feature that tells how many times that certain web pages have been viewed or clicked. You also created an AWS Lambda function to show some key statistics of the data. You tested the Lambda ftnction and it worked perfectly. However, your team lead requires you to show the statistics eve1Y day at 8:00AM GMT on a big TV screen so that when employees come in to the office every they have a rough idea of how the feature runs. What is the most cost efficient and straightfonvard way for you to make this happen?
    - [ ] A. Create an AWS CloudWatch Events rule that is scheduled using a cron expression as 00:08 Configure the target as the Lambda function.
    - [ ] B. Create an Amazon linux EC2 T2 instance and set up a Cronjob using Crontab. Use AWS CLI to call your AWS Lambda evexy 8:00AM.
    - [ ] C. Use Amazon Batch to set up a job with a job definition that runs evexy 8:00AM for the Lambda function.
    - [ ] D. In AWS CloudWatch Events console, click-reate Event using the cron expression 08:00 Configure the target as the Lambda function.
48. A supermarket chain had a big data analysis system deployed in AWS. The system has the raw data such as clickstream or process logs in S3. Am3.large EC2 instance transformed the data to other formats and saved it to another S3 bucket. Amazon Redshift analysed the data afterwards. Your team is in charge of improving the system using AWS Glue which is a fully managed ETL (extract, transform, and load) service. Which tasks can AWS Glue simplify during re-establishing the big data system? (Select TWO)
    - [ ] A. AWS Glue contains a crawler that connects to the S3 bucket and scans the dataset. Then the service creates metadata tables in the data catalog.
    - [ ] B. AWS Glue automatically generates in Java to extract data from the source and transform the data to match the target schema.
    - [ ] C. Be default, AWS Glue creates a scheduler to trigger the activated tasks every minute.
    - [ ] D. AWS Glue has a central metadata repository (data catalog). The data in the catalog is available for analysis immediately.
49. An AWS Solutions Architect has noticed that their company is using almost exclusively EBS General Purpose SSD (gp2) volume types for their EBS volumes. They are considering modifying the type of some of these volumes, but it is important that performance is not affected. Which of the following actions could the Solutions Architect consider? (Select TWO)
    - [ ] A. A 50GB gp2 root volume can be modified to an EBS Provisioned IOPS SSD (iol) without stopping the instance.
    - [ ] B. A gp2 volume that is attached to an instance as a root volume needs can be modified to a Throughput Optimized HDD (stl) volume.
    - [ ] C. A 1GB gp2 volume that is attached to an instance as a non-root volume can be modified to a Cold HDD (scl) volume.
    - [ ] D. A 1TB gp2 volume that is attached to an instance as a non-root volume can be modified to a Throughput Optimized HDD (stl) volume without stopping the instance or detaching the volume.
50. Which of the following are associated with using the "HLS" method of viewing the Kinesis video stream? (Select TWO)
    - [ ] A. A web application that is able to display the video stream using the third-party player Video.js.
    - [ ] B. In order to process Kinesis video streams, a SAAS provider needs to build a new video player which is integrated into their major online product.
    - [ ] C. Able to view only live video, not archived video.
    - [ ] D. Playback video by typing in the HLS streaming session URL in the location bar of the Apple Safari browser for debug purpose.
