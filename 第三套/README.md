# AWS SAP 201-300

1. A company has an internal application running on AWS that is used to track and process shipments in the company's warehouse. Currently, after the system receives an order, it emails the staff the information needed to ship a package. Once the package is shipped, the staff replies to the email and the order is marked as shipped. The company wants to stop using email in the application and move to a serverless application model Which architecture solution meets these requirements?
   - [ ] A. Use AWS Batch to configure the different tasks required to ship a package. Have AWS Batch trigger an AWS Lambda function that creates and prints a shipping label. Once that label is scanned, as it leaves the warehouse, have another Lambda function move the process to the next step in the AWS Batch job
   - [ ] B. When a new order is created, store the order information in Amazon SQS. Have AWS Lambda check the queue every 5 minutes and process any needed work. When an order needs to be shipped, have Lambda print the label in the warehouse. Once the label has been scanned, as it leaves the warehouse, have an Amazon EC2 instance update Amazon SQS
   - [ ] C. Update the application to store new order information in Amazon DynamoDB When a new order is created, trigger an AWS Step Functions workflow mark the orders as "in progress. Print a package label to the warehouse. Once the label has been scanned and fulfilled, the application will trigger an AWSL Lambda function that will mark the order as shipped and complete the workflow
   - [ ] D. Store new order information in Amazon EFS. Have instances pull the new information from the NFS and send that information to printers in the warehouse. Once the label has been scanned, as it leaves the warehouse, have Amazon API Gateway call the instances to remove the order information from Amazon EFS.

   <details>
      <summary>Answer</summary>

      简单题，答案C

   </details>

2. A manufacturing company is grown exponentially and has secured funding to improve its IT infrastructure and ecommerce presence. The company’s ecommerce platform consists of:--Static assets primarily comprised of product images stored in Amazon s3 --Amazon DynamoDB tables that store product information, user information, and order information --Web servers containing the applications front-end behind Elastic Load Balancers. The company wants to set up a disaster recovery site in a separate Region. Which combination of actions should the solutions Architect take to implement the new design while meeting all the requirements? (Select THR
   - [ ] A. Enable Amazon Route 53 health checks to determine if the primary site is down, and route traffic to the disaster recovery site if there is an issue.
   - [ ] B. Enable Amazon S3 cross-region replication on the buckets that contain static assets
   - [ ] C. Enable multi-region targets on the Elastic Load Balancer and target Amazon EC2 instances in both Regions.
   - [ ] D. Enable DynamoDB global tables to achieve a multi-region table replication.
   - [ ] E. Enable Amazon CloudWatch and create Cloud Watch alarms that route traffic to the disaster recovery site when application latency exceeds the desired threshold.
   - [ ] F. Enable Amazon S3 versioning on the source and destination buckets containing static assets to ensure there is a rollback version available in the event of data corruption.

   <details>
      <summary>Answer</summary>

      - [x] A. 正确
      - [x] B. 正确
      - [ ] C. ELB不是跨区域的
      - [x] D. 正确
      - [ ] E. 不需要使用CloudWatch去监控，Route53本身就可以
      - [ ] F. 需要跨区域复制

   </details>

3. A customer has a website which shows all the deals available across the market. The site experiences a load of 5 large EC2 instances generally. However, a week before Thanksgiving vacation they encounter a load of almost 20 large instances. The load during that period varies over the day based on the office timings. Which of the below mentioned solutions is cost effective as well as help the website achieve better performance?
   - [ ] A. Setup to run 10 instances during the pre-vacation period and only scale up during the office time by launching 10 more instances using the AutoScaling schedule.
   - [ ] B. Keep only 10 instances running and manually launch 10 instances every day during office hours.
   - [ ] C. During the pre-vacation period setup 20 instances to run continuously.
   - [ ] D. During the pre-vacation period setup a scenario where the organization has 15 instances running and 5 instances to scale up and down using Auto Scaling based on the network I/O policy.

   <details>
      <summary>Answer</summary>

      A花钱最少又能满足需求，答案A

   </details>
  
4. A fleet of Amazon ECS instances is used to poll an Amazon SQS queue and update items in an Amazon DynamoDB database. Items in the table are not being updated and the SQS queue is filling up. Amazon CloudWatch Logs are showing consistent 400 errors when attempting to update the table. The provisioned write capacity units are appropriately configured, and no throttling is occurring. What is the likely cause of the failure?
   - [ ] A. The ECS service was deleted.
   - [ ] B. The ECS configuration does not contain an Auto Scaling group.
   - [ ] C. The ECS instance task execution IAM role was modified.
   - [ ] D. The ECS task role was modified.

   <details>
      <summary>Answer</summary>

      在executionRoleArn（选项C）和taskRoleArn（D）之间，只有后者用于与DynamoDB互动。前者用于下载图像或向Cloudwatch写日志

   </details>
  
5. A company recently transformed its legacy infrastructure provisioning scripts to AWS CloudFormation templates. The newly developed templates are hosted in the company’s private GitHub repository. Since adopting CloudFormation, the company has encountered several issues with updates to the CloudFormation templates, causing failed executions or creating unstable environments, Management is concerned by the increase in errors and has asked a Solutions Architect to design the automated testing of CloudFormation template updates. What should the solutions architect do to meet these requirements?
   - [ ] A. Use AWS CodePipeline to create a change set from the CloudFormation templates stored in the private GitHub repository. Execute the change set using AWS CodeDeploy. Include a CodePipeline action to test the deployment with testing scripts run by AWS Code Build.
   - [ ] B. Mirror the GitHub repository to AWS CodeCommit using AWS Lambda. Use AWS CodeDeploy to create a change set from the CloudFormation templates and execute it. Have CodeDeploy test the deployment with testing scripts rebuild.
   - [ ] C. Use AWS CodePipeline to create and execute a change set from the CloudFormation templates stored in the private GitHub repository. Configure a CodePipeline action to test the deployment with testing scripts run by AWS CodeBuild.
   - [ ] D. Mirror the Github repository to AWS CodeCommit using AWS Lambda. Use AWS CodeBuild to create a change set from the Cloudformation templates and execute it. Have CodeBuild to test the deployment testing script.

   <details>
      <summary>Answer</summary>

      不知道为啥，答案C

   </details>
  
6. A company is hosting a three-tier web application in an on-premises environment. Due to a recent argument has ordered in traffic that resulted in downtime and a significant financial impact, company that the application be mowed to AWS. The application is written in .NET and has a dependency on a MYSQL database. A Solutions Architect must design a Scalable and highly available solution to meet the demand of 200, 000 daily user. Which steps should the solutions Architect take to design an appropriate solution?
   - [ ] A. Use AWS Elastic Beanstalk to create a new application with a web server environment and an Amazon RDS MYSQL Multi AZ DB instance. The environment should launch a Network Load Balancer (NLB in front of an Amazon EC2 Auto Scaling group in multiple Availability Zones. Use an Amazon Route 53 alias record to route traffic from the company’s domain to the NLB.
   - [ ] B. Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of in Amazon EC2 Auto Scaling group spanning three Availability Zones. The stack should launch a multi-AZ deployment of an Amazon Aurora MYSQL DB cluster with a Retain deletion policy. Use an Amazon Route 53 alias record to route traffic from the company’s domain to the ALB.
   - [ ] C. Use AWS Elastic Beanstalk to create an automatically scaling web server environment that spans two region Multi-AZ deployment of an Amazon Aurora MYSQL DB cluster with a cross-region read a geolocation outing policy to route traffic between the two regions Route 53.
   - [ ] D. Use AWS CloudFormation to launch a stack containing an Application Load Balancer(ALB)in front of an Amazon ECS cluster of Spot Instances spanning three Availability Zones. The stack should launch a Amazon RDS MYSQL DB instance with a Snapshot deletion policy. Use an Amazon Route 53 alias record to route traffic from the company s domain to the ALB.

   <details>
      <summary>Answer</summary>

      这题不懂，答案B

   </details>
  
7. A company is migrating its applications on AWS. The applications will be deployed to AWS accounts owned by business units. The company has several teams of Developers who are responsible for the development and maintenance of all applications. The company is expecting rapid growth in the number of users. The company’s Chief Technology Officer has the following requirements -Developers must launch the AWS infrastructure using AWS CloudFormation -Developers must not be able to create resources outside of CloudFormation -The solution must be able to scale to hundreds of accounts; Which of the following would meet these requirements? (Select TWO)
   - [ ] A. Using CloudFormation, create an IAM role that can be assumed by Cloud Formation that has permissions to Create all the resources the company needs. Use CloudFormation stack sets to deploy this template to each AWS Account
   - [ ] B. In a central account, create an IAM role that can be assumed by developers and attach a policy that allows interaction with CloudFormation. Modify the Assume Policy Document action to follow the IAM to be passed to CloudFormation
   - [ ] C. Using Cloud Formation, create an IAM role that can be assumed by Developers, and attach policies that allow interaction with and passing a role on CloudFormation. Attach an inline policy to deny access all other AWS services. Use CloudFormation Stack Sets to deploy this template to each AWS account.
   - [ ] D. Using CloudFormation, create an IAM role for each Developer, and attach policies that allow interaction with CloudFormation. Use Cloud CloudFormation Stack Sets to deploy this template to each AWS account.
   - [ ] E. In a central AWS account, create an IAM role that can be assumed by Cloud Formation that has permissions to create the resources the company requires. Create a Cloud Formation stack policy that allows the IAM role to manage resources. Use CloudFormation Stack Sets to deploy the CloudFormation stack policy to each AWS account.

   <details>
      <summary>Answer</summary>

      这题不懂，答案AE

   </details>
  
8. During an audit, a Security team discovered that a development team was putting IAM user secret access keys in their code and then committing it to an AWS Code Commit repository. The Security team wants to automatically find and remediate instances of his security Vulnerability Which solution will ensure that the credentials are appropriately secured automatically?
   - [ ] A. Run a script nightly using Aws Systems Manager Run command to search for credentials on the development instances. If found, use AWS Secrets Manager to rotate the credentials
   - [ ] B. Use a scheduled AWS Lambda function to download and scan the application code from Code Commit If. credentials are found, generate new credentials and store them in AWS KMS
   - [ ] C. Configure Amazon Macie to scan for credentials in Code Commit repositories. If credentials are found trigger an AWS Lambda function to disable the credentials and notify the user
   - [ ] D. Configure a Code Commit trigger to invoke an AWS Lambda function to scan new code submissions for credentials. If credentials are found, disable them in AWS IAM and notify the user.

   <details>
      <summary>Answer</summary>

      - [ ] System Manager无法搜索验证信息
      - [ ] 没有去通知用户
      - [ ] Macie的对象是S3
      - [x] 正确
  
   </details>

9. A company currently has data hosted in an IBM Db2 database. A web application calls an API that runs stored procedures on the database to retrieve user information data that is read-only. This data is historical in nature and changes daily. When a user logs in to the application his data needs to be retrieved within 3 seconds. Each me a user logs in, the stored procedures run. Users log in several times a day to check stock prices. Running this database has become cost-prohibitive due to Db2 CPU licensing. Performance goals are not being met. Timeouts from Db2 are common due to long running queues. Which approach should a Solutions Architect take to migrate this solution to AWS?
   - [ ] A. Rehost the Db database in Amazon Fargate. Migrate all e data Enable caching in Fargate. Refactor the API to use the Fargate Db2 database. Implement Amazon API Gateway and enable API caching.
   - [ ] B. Use AWS DMS to migrate data to Amazon DynamoDB using a continuous replication task. Refactor the API to use the DynamoDB data. Implement the refactored API in Amazon API Gateway and enable API.
   - [ ] C. Create a local cache on the mainframe to store query outputs. Use SFTP to sync to Amazon S3 daily. Refactor the API to use Amazon EFS. implement Amazon API Gateway and enable API caching.
   - [ ] D. Extract data daily and copy the data to AWS snowball for storage on Amazon S3 .Sync daily, Refactor the API to use the S3 data, Implement Amazon API Gateway and enable API caching.

   <details>
      <summary>Answer</summary>

      迁移到DynamoDB上可以满足各种需求，答案B

   </details>

10. A Solutions Architect is designing a deployment strategy for an application tier and has the following requirements. -The application code will need a 500 GB static dataset to be present before application startup. -The application tier must be able to scale up and down based on demand with as little startup time as possible. -The Development team should be able to update the code multiple times each day. -Critical operating system (OS)patches must be installed within 48 hours of being released. Which deployment strategy meets these requirements?
    - [ ] A. Use AWS Systems Manager to create a new AMI with the updated OS patches. Update the Auto Scaling group to use the patched AMI and replace existing unpatched instances, Use Aws CodeDeploy to push the application code to the instances. store the static data in amazon EFS.
    - [ ] B. Use Aws Systems Manager to create a new AMI with updated OS patches. Update the auto Scaling group to use the patched AMI and replace existing unpatched instances. Update the OS patches and the application code as a batch job every night. Store the static data in Amazon EFS.
    - [ ] C. Use an Amazon-provided AMI for the OS Configure an Auto Scaling group set to a static instance count. Configure an Amazon EC2 user data script to download the data from Amazon S3. Install OS patches with Aws Systems Manager when they are released. Use Aws Code Deploy to push the application code to the instances.
    - [ ] D. Use an Amazon-provided AMI for the OS. Configure an Auto Scaling group. Configure an Amazon EC2 user data script to download the data from Amazon S3. Replace existing instances after each updated Amazon-provided AMI release. Use AWS Code Deploy to push the application code to the instances.

    <details>
       <summary>Answer</summary>

       - [x] A. 正确
       - [ ] B. Systems Manager上的patch已经是最新的了，不用追踪更新了
       - [ ] C. 一扩展就下载不是最佳解决方案
       - [ ] D. 同C
  
    </details>

11. A large company with hundreds of AWS accounts has a newly established centralized internal process for purchasing new or modify existing Reserved Instances. This process requires all business units that want to purchase or modify reserved Instances to submit requests to a dedicated team for procurement or execution. Previously, business units would directly purchase or modify Reserved instances in their own respective AWS accounts autonomously. Which combination of steps should be taken to proactively enforce the new process in the Most secure way possible?
    - [ ] A. Ensure all AWS accounts are part of an AWS Organizations structure operating in all features mode.
    - [ ] B. Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions.
    - [ ] C. In each AWS account, create an IAM policy with a DENY rule to the ec2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions.
    - [ ] D. Create an SCP that contains a deny rule to the c2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions. Attach the SCP to each organizational unit (OU) of the AWS Organizations structure.
    - [ ] E. Ensure that all AWS accounts are part of an AWS Organizations structure operating in consolidated billing features mode.

    <details>
       <summary>Answer</summary>

       A&D. AWS Org operating in all features mode, to be able to use SCP with deny list (blacklist).
       OU的正常操作，答案AD

    </details>

12. A financial services company is moving to AWS and wants to enable Developers to experiment and innovate while preventing access to production applications. The company has the following requirements: -Production workloads cannot be directly connected to the internet. -All workloads must be restricted to the us-west-2 and eu-central-1 Regions -Notification should be sent when Developer sandboxes exceed $500 in AWS spending monthly. Which combination of actions needs to be taken to create a multi-account structure that meets the company’s requirements? (Select THREE)
    - [ ] A. Create accounts for each production workload within an organization in Aws Organizations. Place the production accounts within an organizational unit (OU). For each account, delete the default VPC. Create an SCP with a Deny rule for the attach an internet gateway and create a default VPC actions. Attach the SCP to the OU for the production accounts.
    - [ ] B. Create accounts for each production workload within an organization in Aws Organizations. Place the production accounts within an organizational unit (OU). Create an SCP with a deny rule on the attach an internet gateway action. Create an SCP with a Deny rule to prevent use of the default VPC. Attach the SCP to the OU for the production accounts.
    - [ ] C. Create a SCP containing a Deny Effect for cloudfront:*iam:*, route53:*, and support:* with a StringNotEquals condition on an aws RequestedRegion condition key with us-west-2 and eu-central-1 values. Attach the SCP to the organizations root.
    - [ ] D. Create an IAM permission boundary containing a Deny Effect for cloudfront:*,iam:*,route53:*,and support:* with a StringNotEquals condition on an aws Requested Region condition key with us-west-2 and eu-central-1 values. Attach the permission boundary to an IAM group containing the development and production users.
    - [ ] E. Create accounts for each development workload within an organization in Aws Organizations. Place the development accounts within an organizational unit (OU). Create a custom Aws Config rule to deactivate all IAM users when an account's monthly bill exceeds $500.
    - [ ] F. Create accounts for each development workload within an organization in Aws Organizations. Place the development accounts within an organizational unit(OU). Create a budget within Aws Budgets for each development account to monitor and report on monthly spending exceeding $500.

    <details>
       <summary>Answer</summary>

       - [ ] A. 默认VPC无法被删除
       - [x] B. 正确
       - [x] C. 正确
       - [ ] D. 没有IAM permission boundary
       - [ ] E. Aws Config不管预算的事儿
       - [x] F. 正确
  
    </details>

13. A financial company is using a high-performance compute cluster running on Amazon EC2 instances to perform market simulations A DNS record must be created in an Amazon Route 53 private hosted zone when instances start The DNS record must be removed after instances are terminated. Currently the company uses a combination of Amazon CloudWatch Events and AWS Lambda to create the DNS record. The solution worked well in testing with small clusters, but in production with clusters containing thousands of instances the company sees the following error in the Lambda logs: -HTTP 400 error (Bad request). -The response header also includes a status code element with a value of "Throttling" and a status message element with a value of "Rate exceeded". Which combination of steps should the Solutions Architect take to resolve these issues? (Select THREE)
    - [ ] A. Configure an Amazon SQS FIFO queue and configure a CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
    - [ ] B. Configure an Amazon Kinesis data stream and configure a CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
    - [ ] C. Update the CloudWatch Events rule to trigger on Amazon EC2 “Instance Launch Successful” and “Instance Terminate Successful” events for the auto scaling group by the cluster.
    - [ ] D. Configure a Lambda function to retrieve messages from an amazon SQS queue. Modify the Lambda function to retrieve a maximum of 10 messages, then batch the messages by Amazon Route 53 API call type and submit. Delete the messages from the SQS queue after successful API calls.
    - [ ] E. Configure an Amazon SQS standard queue and configure the existing CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
    - [ ] F. Configure a Lambda function to read data from the amazon Kinesis data stream and configure the batch window to 5 minutes. Modify the function to make a single API call to Amazon route 53 with all records read from the Kinesis data.

    <details>
       <summary>Answer</summary>

       简单题，答案ACD
  
    </details>

14. A company uses Amazon S3 to host a web application. Currently, the company uses a continuous integration tool running on an Amazon EC2 instance that builds and deploys the application by uploading it to an S3 bucket. A Solutions Architect needs to enhance the security of the company's platform with the following requirements: -A build process should be run in a separate account from the account hosting the web application. -A build process should have minimal access in the account it operates in Long-lived credentials should not be used. As a start, the development team created two AWS accounts. one for the application named web account. and one for the build process named build account. Which solution should the Solutions Architect use to meet the security requirements?
    - [ ] A. In the build account, create a new IAM role, which can be assumed by Amazon EC2 only. Attach the role to the EC2 instance running the continuous integration process. Create an IAM policy to allow s3. PutObject calls on the S3 bucket in the web account. ln the web account, create an S3 bucket policy attached to the S3 bucket that allows the build account to use s3:PutObject calls.
    - [ ] B. In the build account, create a new IAM role which can be assumed by Amazon EC2 only. Attach the role to the EC2 instance running the continuous integration process. Create an IAM policy to allow s3 PutObject calls on the S3 bucket in the web account. ln the web account create an S3 bucket policy attached to the S3 bucket that allows the newly. Created IAM role to use s3 PutObject calls.
    - [ ] C. In the build account, create a new IAM user. Store the access key and secret access key in AWS Secrets Manager. Modify the continuous integration process to perform a lookup of the IAM user credentials from Secrets Manager. Create an IAM policy to allow s3 :PutObject calls on the S3 bucket in the web account and attach it to the user. ln the web account, create an S3 bucket policy attached to the S3 bucket that allows the newly. Created IAM user to use s3 PutObjectcalls
    - [ ] D. In the build account modify the continuous integration process to perform a lookup of the IAM user credentials from AWS Secrets Manager in the web account. Create a new IAM user. Store the access key and secret access key in Secrets Manager. Attach the PowerUser Access IAM policy to the IAM user.

    <details>
       <summary>Answer</summary>

       使用基于角色的访问是最佳实践，答案B
  
    </details>

15. A company wants to analyze log data using date ranges with a custom application running on AWS. The application generates about 10 GB of data every day, which is expected to grow. A Solutions Architect is tasked with storing the data in Amazon S3 and using Amazon Athena to analyze the data. Which combination of steps will ensure optimal performance as the data grows? (Select TWO)
    - [ ] A. Store each object in Amazon S3 with a random string at the front of each key.
    - [ ] B. Store the data in multiple S3 buckets.
    - [ ] C. Store the data in Amazon S3 in a columnar format, such as Apache Parquet or Apache ORC.
    - [ ] D. Store the data in Amazon S3 in objects that are smaller than 10 MB.
    - [ ] E. Store the data using Apache Hive partitioning in Amazon S3 using a key that includes a date, such asdt=2019-02.

    <details>
       <summary>Answer</summary>

       答案AC
  
    </details>

16. A company is refactoring an existing web service that provides read and write access to structured data. The service must respond to short but significant spikes in the system load. The service must be fault tolerant across multiple AWS Regions. Which actions should be taken to meet these requirements?
    - [ ] A. Store the data in Amazon DocumentDB. Create a single global Amazon CloudFront distribution with a custom origin built on edge-optimized Amazon API Gateway and AWS Lambda. Assign the company's domain as an alternate domain for the distribution and configure Amazon Route 53 with an alias to the CloudFront distribution.
    - [ ] B. Store the data in replicated Amazon S3 buckets in two Regions. Create an Amazon CloudFront distribution in each Region, with custom origins built on Amazon API Gateway and AWS Lambda launched in each Region. Assign the company's domain as an alternate domain for both distributions and configure Amazon Route 53 with a failover routing policy between them.
    - [ ] C. Store the data in an Amazon DynamoDB global table in two regions using on-demand capacity mode. In both regions, run the web service as Amazon ECS Fargate task in an Auto Scaling ECS service behind an Application Load Balancer (ALB). In Amazon Route 53, configure an alias record in the company's domain and a Route 53 latency- based routing policy with health checks to distribute traffic between the two ALBs.
    - [ ] D. Store the data in Amazon Aurora global databases. Add Auto Scaling replicas to both Regions. Run the web service on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer in each Region. Configure the instances to download the web service code in the user data. In Amazon Route 53, configure an alias record for the company's domain and a multi-value routing policy.

    <details>
       <summary>Answer</summary>

       答案D
  
    </details>

17. A mobile gaming application publishes data continuously to Amazon Kinesis Data Streams. An AWS Lambda function processes records from the data stream and writes to an Amazon DynamoDB table. The DynamoDB table has an auto scaling policy enabled with the target utilization set to 70%. For several minutes at the start and end of each day, there is a spike in traffic that often exceeds five times the normal load. The company notices the GetRecords.IteratorAgeMilliseconds metric of the Kinesis data stream temporarily spikes to over a minute for several minutes. The AWS Lambda function writes Provisioned Throughput Exceeded Exception messages to Amazon CloudWatch Logs during these times, and some records are redirected to the dead letter queue. No exceptions are thrown by the Kinesis producer on the gaming application. What change should the company make to resolve this issue?
    - [ ] A. Use Application Auto Scaling to set a scaling schedule to scale out write capacity on the DynamoDB table during predictable load spikes.
    - [ ] B. Use Amazon CloudWatch Events to monitor the dead letter queue and invoke a Lambda function to automatically retry failed records.
    - [ ] C. Reduce the DynamoDB table auto scaling policy's target utilization to 20% to more quickly respond to load spikes.
    - [ ] D. Increase the number of shards in the Kinesis data stream to increase throughput capacity.

    <details>
       <summary>Answer</summary>

       吞吐量溢出错误，自然选择D
  
    </details>

18. A company has a single AWS master billing account, which is the root of the AWS Organizations hierarchy. The company has multiple AWS accounts within this hierarchy, all organized into organization units (OUs). More OUS and AWS accounts will continue to be created as other parts of the business migrate applications to AWS. These business units may need to use different AWS services. The Security team is implementing the following requirements for all current and future AWS accounts. -Control policies must be applied across all accounts to prohibit AWS servers. -Exceptions to the control policies are allowed based on valid use cases. Which solution will meet these requirements with minimal optional overhead?
    - [ ] A. Use an SCP in Organizations to implement a deny list of AWS servers. Apply this SCP at the level. For any specific exceptions for an OU, create a new SCP for that OU and add the required AWS services the allow list.
    - [ ] B. Use an SCP In organizations to implement a deny list of AWS service. Apply this SCP at the root level and each OU. Remove the default AWS managed SCP from the root level and all OU levels. For any specific exceptions, modify the SCP attached to that OU, and add the required AWS required services to the allow list.
    - [ ] C. Use an SCP in Organization to implement a deny list of AWS service. Apply this SCP at each OU level. Leave the default AWS managed SCP at the root level. For any specific executions for an OU, create a new SCP for that OU.
    - [ ] D. Use an SCP in Organizations to implement an allow list of AWS services. Apply this SCP at the root level. Remove the default AWS managed SCP from the root level and all OU levels. For any specific exceptions for an OU, modify the SCP attached to that OU, and add the required AWS services to the allow list.

    <details>
       <summary>Answer</summary>

       这里不用管默认SCP，让他留在根上就好，答案D
  
    </details>

19. A retail company has a custom .NET web application running on AWS that uses Microsoft SQL Server for the database. The application servers maintain a user's session locally. Which combination of architecture changes are needed to ensure all tiers of the solution are highly available? (Choose three.)
    - [ ] A. Refactor the application to store the user's session in Amazon ElastiCache. Use Application Load Balancers to distribute the load between application instances.
    - [ ] B. Set up the database to generate hourly snapshots using Amazon EBS. Configure an Amazon CloudWatch Events rule to launch a new database instance if the primary one fails.
    - [ ] C. Migrate the database to Amazon RDS for SQL Server. Configure the RDS instance to use a multi-AZ deployment.
    - [ ] D. Move the .NET content to an Amazon S3 bucket. Configure the bucket for static website hosting.
    - [ ] E. Put the application instances in an Auto Scaling group. Configure the Auto Scaling group to create new instances if an instance becomes unhealthy.
    - [ ] F. Deploy Amazon CloudFront in front of the application tier. Configure CloudFront to serve content from healthy application instances only.

    <details>
       <summary>Answer</summary>

       简单题，答案ACE
  
    </details>

20. A retail company processes point-of-sale data on application servers in its data center and writes outputs to an Amazon DynamoDB table. The data center is connected to the company's VPC with an AWS Direct Connect (DX) connection, and the application servers require a consistent network connection at speeds greater than 2 Gbps. The company decides that the DynamoDB table needs to be highly available and fault tolerant. The company policy states that the data should be available across two regions. What changes should the company make to meet these requirements?
    - [ ] A. Establish a second DX connection for redundancy. Use DynamoDB global tables to replicate data to a second Region. Modify the application to fail over to the second Region.
    - [ ] B. Use an AWS managed VPN as a backup to DX. Create an identical DynamoDB table in a second Region. Modify the application to replicate data to both Regions.
    - [ ] C. Establish a second DX connection for redundancy. Create an identical DynamoDB table in a second Region. Enable DynamoDB auto scaling to manage throughput capacity. Modify the application to write to the second Region.
    - [ ] D. Use AWS managed VPN as a backup to DX. Create an identical DynamoDB table in a second Region. Enable DynamoDB streams to capture changes to the table. Use AWS Lambda to replicate changes to the second Region.

    <details>
       <summary>Answer</summary>

       简单题，答案A
  
    </details>

21. An international company has deployed a multi-tier web application that relies on DynamoDB in a single region. For regulatory reasons they need disaster recovery capability in a separate region with a Recovery Time Objective of 2 hours and a Recovery Point Objective of 24 hours. They should synchronize their data on a regular basis and be able to provision the web application rapidly using CloudFormation. The objective is to minimize changes to the existing web application, control the throughput of DynamoDB used for the synchronization of data, and synchronize only the modified elements. Which design would you choose to meet these requirements?
    - [ ] A. Use AWS Data Pipeline to schedule a DynamoDB cross region copy once a day, create a "LastUpdated" attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter.
    - [ ] B. Use AWS Data Pipeline to schedule an export of the DynamoDB table to S3 in the current region once a day, then schedule another task Immediately after it that will import data from S3 to DynamoDB in the other region.
    - [ ] C. Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to DynamoDB in the second region.
    - [ ] D. Send also each write into an SQS queue in the second region, use an auto-scaling group behind the SQS queue to replay the write in the second region.

    <details>
       <summary>Answer</summary>

       使用AWS Data Pipeline可以直接复制DynamoDB表，答案A -> [ref](https://aws.amazon.com/cn/blogs/aws/copy-dynamodb-data-between-regions-using-the-aws-data-pipeline/)
  
    </details>

22. Your company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past few months resulting in significant financial losses. Your CIO is strongly considering moving the application to AWS. While working on achieving buy-In from the other company executives, he asks you to develop a disaster recovery plan to help improve business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?
    - [ ] A. Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template which includes your AMI and the required EC2 Auto Scaling, and ELB resources to support deploying the application across Multiple-Availability-Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
    - [ ] B. Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
    - [ ] C. Create an EBS backed private AMI which includes a fresh install of your application. Setup a script in your data center to back up the local database every I hour and to encrypt and copy the resulting file to an S3 bucket using multi-part upload.
    - [ ] D. Install your application on a compute-optimized EC2 instance capable of supporting the application's average load. Synchronously replicate transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.

    <details>
       <summary>Answer</summary>

       简单题，题目RTO是四小时，RPO是一小时，使用CloudFormation就是最佳实践啦，答案A
  
    </details>

23. During a security audit o fa Service team's application. A Solutions Architect discovers that a username and password for an Amazon RDS database and a set of AWS IAM user credentials can be viewed in the AWS Lambda function code. The Lambda function uses the username and password to run queries on the database, and it uses the IAM credentials to call AWS services in a separate management account. The Solutions Architect concerned that the credentials could grant inappropriate access to anyone who can view the Lambda code. The management account and the Service team's account are in separate AWS Organizations organizational units (OUs). Which combination of changes should the Solutions Architect make to improve the solution's security? (Choose two.)
    - [ ] A. Configure Lambda to assume a role in the management account with appropriate access to AWS.
    - [ ] B. Configure Lambda to use the stored database credentials in AWS Secrets Manager and enable automatic rotation.
    - [ ] C. Create a Lambda function to rotate the credentials every hour by deploying a new Lambda version with the updated credentials.
    - [ ] D. Use an SCP on the management account's OU to prevent IAM users from accessing resources in the Service team's account.
    - [ ] E. Enable AWS Shield Advanced on the management account to shield sensitive resources from unauthorized IAM access.

    <details>
       <summary>Answer</summary>

       - [x] A. 正确
       - [x] B. 正确
       - [ ] C. 如果能看见代码依然不安全
       - [ ] D. 不能一棍子全打死
       - [ ] E. AWS Shield Advanced压根儿就不管这事儿
  
    </details>

24. Your company runs a customer facing event registration site. This site is built with a 3-tier architecture with web and application tier servers and a MySQL database. The application requires 6 web tier servers and 6 application tier servers for normal operation but can run on a minimum of 65% server capacity and a single MYSQL database. When deploying this application in a region with three availability zones (AZS), which architecture provides high availability
    - [ ] A. A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each A2 inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances. In each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the other AZ.
    - [ ] B. A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 3 AZs with 2 EC2 instances. In each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment.
    - [ ] C. A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment.
    - [ ] D. A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the two other AZs.

    <details>
       <summary>Answer</summary>

       - [ ] A. 需要在三个可用区内部署
       - [x] B. 正确
       - [ ] C. 同A
       - [x] D. RDS不是多可用区部署，所以可用性并不高
  
    </details>

25. An administrator is using Amazon CloudFormation to deploy a three-tier web application that consists of a web tier and application tier that will utilize Amazon DynamoDB for storage. When creating the CloudFormation template which of the following would allow the application Instance access to the DynamoDB tables without exposing API credentials?
    - [ ] A. Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and associate the Role to the application instances by referencing an instance profile.
    - [ ] B. Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.
    - [ ] C. Use the Parameter section in the CloudFormation template to have the user input Access and Secret keys from an already created IAM user that has the permissions required to read and write from the required DynamoDB table.
    - [ ] D. Create an Identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and Secret keys and pass them to the application instance through user-data.

    <details>
       <summary>Answer</summary>

       - [x] A. 正确
       - [ ] B. 不是在配置文件中引用，而是在引用配置文件的时候和角色关联
       - [ ] C. 不够安全
       - [ ] D. 不够安全
  
    </details>

26. An AWS customer is deploying an application mat is composed of an AutoScaling group of EC2 Instances. The customers security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique x.509 certificate that contains the specific instance-id. In addition, an x.509 certificates must Designed by the customer's Key management service in order to be trusted for authentication. Which of the following configurations will support these requirements?
    - [ ] A. Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure the Auto Scaling group to launch instances with this role. Have the instances bootstrap get the certificate from Amazon S3 upon first boot.
    - [ ] B. Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.
    - [ ] C. Embed a certificate into the AMI that is used by the Auto Scaling group. Have the launched instances generate a certificate signature request with the instance's assigned instance-id to the key management service for signature.
    - [ ] D. Configure the launched instances to generate a new certificate upon first boot. Have the Key management service poll the Auto Scaling group for associated instances and send new instances a certificate signature that contains the specific instance-id.

    <details>
       <summary>Answer</summary>

       - [ ] A. 无法保证生成的证书是唯一的
       - [ ] B. 第一次请求很不安全
       - [x] C. 正确
       - [ ] D. 新实例在第一次请求前可能没有唯一的证书
  
    </details>

27. A company has an application that runs on a fleet of Amazon EC2 instances and stores 70 GB of device data for each instance in Amazon S3. Recently, some of the S3 uploads have been failing. At the same time, the company is seeing an unexpected increase in storage data costs. The application code cannot be modified. What is the MOST efficient way to upload the device data to Amazon S3 while managing storage costs?
    - [ ] A. Upload device data using a multipart upload. Use the AWS CLI to list incomplete parts to address the failed S3 uploads. Enable the lifecycle policy for the incomplete multipart uploads on the S3 bucket to delete the old uploads and prevent new failed uploads from accumulating.
    - [ ] B. Upload device data using S3 Transfer Acceleration. Use the AWS Management Console to address the failed S3 uploads. Use the Multi-Object Delete operation nightly to delete the old uploads.
    - [ ] C. Upload device data using a multipart upload. Use the AWS Management Console to list incomplete parts to address the failed S3 uploads. Configure a lifecycle policy to archive continuously to Amazon S3 Glacier.
    - [ ] D. Upload device data using S3 Transfer Acceleration. Use the AWS Management Console to list incomplete parts to address the failed S3 uploads. Enable the lifecycle policy for the incomplete multipart uploads on the S3 bucket to delete the old uploads and prevent new failed uploads from accumulating.

    <details>
       <summary>Answer</summary>

       最关键的问题是，控制台不能显示你的多部分上传失败的信息。这只能通过SDK/API查看。而且题目中说有很多意外的数据费用，应该是指多部分上传失败造成的存储费用（因为如果你不使用多部分上传，整个文件上传失败的话，就没有这部分费用了）。可以断定，原程序已经为多部分上传写好了代码。不需要额外修改代码。答案A

    </details>

28. A company is in the process of Implementing AWS Organizations to constrain its developers to use only Amazon EC2, Amazon S3, and Amazon Dynamodb. The Developers account resides in a dedicated organizational unit(OU). The Solutions Architect has implemented the a SCP on the Developers account. When this policy is deployed, IAM users in the Developers account are still able to use AWS services that are not listed in the policy. What should the Solutions Architect do to eliminate the Developers ability to use services outside the scope of this policy? The SCP policy is as follow:

    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "AllowEC2",
          "Effect": "Allow",
          "Action": "ec2:*",
          "Resouce": "*"
        },
        {
          "Sid": "AllowDynamoDB",
          "Effect": "Allow",
          "Action": "dynamodb:*",
          "Resouce": "*"
        },
        {
          "Sid": "AllowS3",
          "Effect": "Allow",
          "Action": "s3:*",
          "Resouce": "*"
        }
      ]
    }
    ```

    - [ ] A. Create an explicit deny statement for each AWS service that should be constrained.
    - [ ] B. Remove the FullAWSAccess SCP from the Developer account's OU.
    - [ ] C. Modify the FullAWSAccess SCP to explicitly deny all services.
    - [ ] D. Add an explicit deny statement using a wildcard to the end of the SCP.

    <details>
       <summary>Answer</summary>

       - [ ] A. 给每个服务添加Deny得他妈累死
       - [x] B. 正确
       - [ ] C. AWS管理的策略不能被更改
       - [ ] D. 一看就不专业
  
    </details>

29. Your company previously configured a heavily used, dynamically routed VPN connection between your on-premises data center and AWS. You recently provisioned a DirectConnect connection and would like to start using the new connection.After configuring DirectConnect settings in the AWS Console, which of the following options win provide the most seamless transition for your users?
    - [ ] A. Delete your existing VPN connection to avoid routing loops configure your DirectConnect router with the appropriate settings and verity network traffic is leveraging DirectConnect.
    - [ ] B. Configure your DirectConnect router with a higher BGP priority man your VPN router, verify network traffic is leveraging Directconnect and then delete your existing VPN connection.
    - [ ] C. Update your VPC route tables to point to the DirectConnect connection configure your DirectConnect router with the appropriate settings verify network traffic is leveraging DirectConnect and then delete the VPN connection.
    - [ ] D. Configure your DirectConnect router, update your VPC route tables to point to the DirectConnect connection, configure your VPN connection with a higher BGP priority, and verify network traffic is leveraging the DirectConnect connection.

    <details>
       <summary>Answer</summary>

       - [ ] A. 不用更改优先级，Direct Connect的优先级总是最高的
       - [ ] B. 没改呢就删，好牛逼啊
       - [x] C. 正确
       - [ ] D. 同A
  
    </details>

30. Your team has a tomcat-based java application you need to deploy into development, test, and production environments. After some research, you opt to use Elastic Beanstalk due to its tight integration with your developer tools and RDS due to its ease of management. Your QA team lead points out that you need to roll a sanitized set of production data into your environment on a nightly basis. Similarly, other software teams in your org want access to that same restored data via their EC2 instances in your VPC. The optimal setup for persistence and security that meets the above requirements would be the following:
    - [ ] A. Create your RDS instance separately and add its IP address to your application's DB connection strings in your code. Alter its security group to allow access to it from hosts within your VPC's IP address block.
    - [ ] B. Create your RDS instance separately and pass its DNS name to yours DB connection string as an environment variable. Alter its security group to allow access to it from hosts in your application subnets.
    - [ ] C. Create your RDS instance as part of your Elastic Beanstalk definition and alter its security group to allow access to it from hosts in your application subnets.
    - [ ] D. Create your RDS instance separately and pass its DNS name to your app's DB connection string as an environment variable. Create a security group for client machines and add it as a valid source for DB traffic to the security group of the RDS instance itself.

    <details>
       <summary>Answer</summary>

       - [ ] A. IP可能会变
       - [ ] B. 客户机不在你的VPC中
       - [ ] C. 同B
       - [x] D. 正确
  
    </details>

31. You have a periodic image analysis application that gets some files in input, analyzes them and tor each file writes some data in output to a ten file the number of files in input per day is high and concentrated in a few hours of the day. Currently you have a server on EC2 with a large EBS volume that hosts the input data and the results. It takes almost 20 hours per day to complete the process. What services could be used to reduce the elaboration time and improve the availability of the solution?
    - [ ] A. S3 to store I/O files. SQS to distribute elaboration commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the length of the SQS queue
    - [ ] B. EBS with Provisioned IOPS (PIOPS) to store I/O files. SNS to distribute elaboration commands to a group of hosts working in parallel Auto Scaling to dynamically size the group of hosts depending on the number of SNS notifications
    - [ ] C. S3 to store I/O files, SNS to distribute evaporation commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the number of SNS notifications
    - [ ] D. EBS with Provisioned IOPS (PIOPS) to store I/O files SQS to distribute elaboration commands to a group of hosts working in parallel Auto Scaling to dynamically size the group ot hosts depending on the length of the SQS queue.

    <details>
       <summary>Answer</summary>

       简单题，答案A
  
    </details>

32. A company experienced a breach of highly confidential personal information due to permission issues on an Amazon S3 bucket. The Information Security team has tightened the bucket policy to restrict access. Additionally, to be better prepared for future attacks, these requirements must be met: -Identify remote IP addresses that are accessing the bucket objects. -Receive alerts when the security policy on the bucket is changed. -Remediate the policy changes automatically. Which strategies should the Solutions Architect use?
    - [ ] A. Use Amazon CloudWatch Logs with CloudWatch filters to identify remote IP addresses. Use CloudWatch Events rules with AWS Lambda to automatically remediate S3 bucket policy changes. Use Amazon SES with CloudWatch Events rules for alerts.
    - [ ] B. Use Amazon Athena with S3 access logs to identify remote IP addresses. Use AWS Config rules with AWS Systems Manager Automation to automatically remediate S3 bucket policy changes. Use Amazon SNS with AWS Config rules for alerts.
    - [ ] C. Use S3 access logs with Amazon Elasticsearch Service and Kibana to identify remote IP addresses. Use an Amazon Inspector assessment template to automatically remediate S3 bucket policy changes. Use Amazon SNS for alerts.
    - [ ] D. Use Amazon Macie with an S3 bucket to identify access patterns and remote IP addresses. Use AWS Lambda with Macie to automatically remediate S3 bucket policy changes. Use Macie automatic alerting capabilities for alerts.

    <details>
       <summary>Answer</summary>

       - 1) To id remote IPs, need to look at S3 access logs. Athena helps in analyzing those logs. [ref](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-s3-access-logs-to-identify-requests.html)
       - 2) For auto-remediation, use AWS Config with Systems Manager. [ref](https://aws.amazon.com/blogs/mt/aws-config-auto-remediation-s3-compliance/)
       - 3) For alerting, use SNS with AWS Config. [ref](https://docs.aws.amazon.com/config/latest/developerguide/notifications-for-AWS-Config.html)
       - 答案B

    </details>

33. An organization is planning to host a Wordpress blog as well as joomla CMS on a single instance launched with VPC. The organization wants to create separate domains for each application using Route 53. The organization may have about ten instances each with these two applications. While launching each instance, the organization configured two separate network interfaces (primary + secondary ENI) with their own Elastic IPs to the instance. The suggestion was to use a public IP from AWS instead of an Elastic IP as the number of elastic IPs allocation per region is restricted in the account. What action will you recommend to the organization?
    - [ ] A. I agree with the suggestion but will prefer that the organization should use separate subnets with each ENI for different public IPs.
    - [ ] B. I do not agree as it is required to have only an elastic IP since an instance has more than one ENI and AWS does not assign a public IP to an instance with multiple ENIs.
    - [ ] C. I do not agree as AWS VPC does not attach a public IP to an ENI; so the user has to use only an elastic IP only.
    - [ ] D. I agree with the suggestion, and it is recommended to use a public IP from AWS since the organization is going to use DNS with Route 53.

    <details>
       <summary>Answer</summary>

       概念题，答案B
  
    </details>

34. A Solutions Architect wants to make sure that only AWS users or roles with suitable permissions can access a new Amazon API Gateway endpoint. The Solutions Architect wants an end-to-end view of each request to analyze the latency of the request and create service maps. How can the Solutions Architect design the API Gateway access control and perform request inspections?
    - [ ] A. For the API Gateway method, set the authorization to AWS_IAM. Then, give the IAM user or role execute-api:Invoke permission on the REST API resource. Enable the API caller to sign requests with AWS Signature when accessing the endpoint. Use AWS X-Ray to trace and analyze user requests to API Gateway.
    - [ ] B. For the API Gateway resource, set CORS to enabled and only return the company's domain in Access-Control-Allow-Origin headers. Then, give the IAM user or role execute-api:Invoke permission on the REST API resource. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.
    - [ ] C. Create an AWS Lambda function as the custom authorizer, ask the API client to pass the key and secret when making the call, and then use Lambda to validate the key/secret pair against the IAM system. Use AWS X-Ray to trace and analyze user requests to API Gateway.
    - [ ] D. Create a client certificate for API Gateway. Distribute the certificate to the AWS users and roles that need to access the endpoint. Enable the API caller to pass the client certificate when accessing the endpoint. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.

    <details>
       <summary>Answer</summary>

       - [x] A. 正确
       - [ ] B. CloudWatch无法分析
       - [ ] C. 传递密匙是什么鬼
       - [ ] D. 同B

    </details>

35. A company is running a batch analysis every hour on their main transactional DB, running on an RDS MySQL instance, to populate their central Data Warehouse running on Redshift. During the execution of the batch, their transactional applications are very slow. When the batch completes they need to update the top management dashboard with the new data. The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required. The on-premises system cannot be modified because is managed by another team. How would you optimize this scenario to solve performance issues and automate the process as much as possible?
    - [ ] A. Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard.
    - [ ] B. Replace RDS with Redshift for the oaten analysis and SQS to send a message to the on-premises system to update the dashboard.
    - [ ] C. Create an RDS Read Replica for the batch analysis and SNS to notify me on-premises system to update the dashboard.
    - [ ] D. Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.

    <details>
       <summary>Answer</summary>

       简单题，答案C
  
    </details>

36. A company is building a voting system for a popular TV show, viewers will watch the performances then visit the show website to vote for their favorite performer. It is expected that in a short period of time after the show has finished the site will receive millions of visitors, the visitors will first login to the site using their "Amazon.com" credentials and then submit their vote. After the voting is completed, the page will display the vote totals. The company needs to build the site such that it can handle the rapid influx of traffic while maintaining good performance but also wants to keep costs to a minimum. Which of the design patters below should they use?
    - [ ] A. Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login With Amazon service to authenticate the user, the web servers will process the users vote and store the result into a DynamoDB table using IAM Roles for EC2 Instances to gain permissions to the DynamoDB table.
    - [ ] B. Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login With Amazon service to authenticate the user, the web servers will process the users vote and store the result into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the SQS queue. A set of application servers will then retrieve the items from the queue and store the result into a DynamoDB table.
    - [ ] C. Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers, the web servers will first call the Login With Amazon service to authenticate the user then process the users vote and store the result into a multi-AZ Relational Database Service instance.
    - [ ] D. Use CloudFront and the static website hosting feature of S3 with the JavaScript SDK to call the Login with Amazon service to authenticate the user, use IAM Roles to gain permissions to a DynamoDB table to store the users vote.

    <details>
       <summary>Answer</summary>

       答案B，理由未知
  
    </details>

37. A software as a service (SaaS) company offers a cloud solution for document management to private law firms and the public sector. A local government client recently mandated that highly confidential documents cannot be stored outside the country. The company CIO asks a Solutions Architect to ensure the application can adapt to this new requirement. The CIO also wants to have a proper backup plan for these documents, as backups are not currently performed. What solution meets these requirements?
    - [ ] A. Tag documents that are not highly confidential as regular in Amazon S3. Create individual S3 buckets for each user. Upload objects to each user's bucket. Set S3 bucket replication from these buckets to a central S3 bucket in a different AWS account and AWS Region. Configure an AWS Lambda function triggered by scheduled events in Amazon CloudWatch to delete objects that are tagged as secret in the S3 backup bucket.
    - [ ] B. Tag documents as either regular or secret in Amazon S3. Create an individual S3 backup bucket in the same AWS account and AWS Region. Create a cross- region S3 bucket in a separate AWS account. Set proper IAM roles to allow cross-region permissions to the S3 buckets. Configure an AWS Lambda function triggered by Amazon CloudWatch scheduled events to copy objects that are tagged as secret to the S3 backup bucket and objects tagged as normal to the cross-region S3 bucket.
    - [ ] C. Tag documents as either regular or secret in Amazon S3. Create an individual S3 backup bucket in the same AWS account and AWS Region. Use S3 selective cross-region replication based on object tags to move regular documents to an S3 bucket in a different AWS Region. Configure an AWS Lambda function that triggers when new S3 objects are created in the main bucket to replicate only documents tagged as secret into the S3 bucket in the same AWS Region.
    - [ ] D. Tag highly confidential documents as secret in Amazon S3. Create an individual S3 backup bucket in the same AWS account and AWS Region. Use S3 selective cross-region replication based on object tags to move regular documents to a different AWS Region. Create an Amazon CloudWatch Events rule for new S3 objects tagged as secret to trigger an AWS Lambda function to replicate them into a separate bucket in the same AWS Region.

    <details>
       <summary>Answer</summary>

       指表计高度机密文件就行，答案D
  
    </details>

38. You are developing a new mobile application and are considering storing user preferences in AWS. This would provide a more uniform cross-device experience to users using multiple mobile devices to access the application. The preference data for each user is estimated to be 50KB in size. Additionally, 5 million customers are expected to use the application on a regular basis. The solution needs to be cost-effective, highly-available, scalable and secure. How would you design a solution to meet the above requirements?
    - [ ] A. Setup an RDS MySQL instance with multiple read replicas in 2 availability zones to store the user preference data. The mobile application will query the user preferences from the read replicas. Leverage the MySQL user management and access privilege system to manage security and access credentials.
    - [ ] B. Setup an RDS MySQL instance in 2 availability zones to store the user preference data. Deploy a public facing application on a server in front of the database to manage security and access credentials.
    - [ ] C. Store the user preference data in S3. Setup a DynamoDB table with an item for each user and an item attribute pointing to the user's S3 object. The mobile application will retrieve the S3 URL from DynamoDB and then access the S3 object directly. Utilize ST S, Web Identity Federation, and S3 ACLs to authenticate and authorize access.
    - [ ] D. Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table. Utilize STS, Web Identity Federation, and DynamoDB Fine Grained Access Control to authenticate and authorize access.

    <details>
       <summary>Answer</summary>

       简单题，答案D
  
    </details>

39. You want to use AWS CodeDeploy to deploy an application to Amazon EC2 instances running within anAmazon Virtual Private Cloud (VPC). What criterion must be met for this to be possible?
    - [ ] A. The AWS CodeDeploy agent installed on the Amazon EC2 instances must be able to access only the public AWS CodeDeploy endpoint.
    - [ ] B. The AWS CodeDeploy agent installed on the Amazon EC2 instances must be able to access only the public Amazon S3 service endpoint.
    - [ ] C. The AWS CodeDeploy agent installed on the Amazon EC2 instances must be able to access the public AWS CodeDeploy and Amazon S3 service endpoints.
    - [ ] D. It is not currently possible to use AWS CodeDeploy to deploy an application to Amazon EC2 instances mnning within an Amazon Virtual Private Cloud (VPC.)

    <details>
       <summary>Answer</summary>

       概念题，答案C
  
    </details>

40. While debugging a backend application for an IoT system that supports globally distributed devices, a Solutions Architect notices that stale data is occasionally being sent to user devices. Devices often share data, and stale data does not cause issues in most cases. However, device operations are disrupted when a device reads the stale data after an update. The global system has multiple identical application stacks deployed in different AWS Regions. If a user device travels out of its home geographic region, it will always connect to the geographically closest AWS Region to write or read data. The same data is available in all supported AWS Regions using an Amazon DynamoDB global table. What change should be made to avoid causing disruptions in device operations?
    - [ ] A. Update the backend to use strongly consistent reads. Update the devices to always write to and read from their home AWS Region.
    - [ ] B. Enable strong consistency globally on a DynamoDB global table. Update the backend to use strongly consistent reads.
    - [ ] C. Switch the backend data store to Amazon Aurora MySQL with cross-region replicas. Update the backend to always write to the master endpoint.
    - [ ] D. Select one AWS Region as a master and perform all writes in that AWS Region only. Update the backend to use strongly consistent reads.

    <details>
       <summary>Answer</summary>

       如果你的应用程序需要强一致的读取，它必须在同一个区域执行所有的强一致的读取和写入。DynamoDB不支持跨区域的强一致性读取。因此，如果你写到一个区域并从另一个区域读取，读取的响应可能包括陈旧的数据，不能反映最近在另一个区域完成的写入的结果。答案A
  
    </details>

41. A company developed a Java application and deployed it to an Apache Tomcat server that runs on Amazon EC2 instances. The company's Engineering team has implemented AWS CloudFormation and Chef Automate to automate the provisioning of and updates to the infrastructure and configuration of the application in the development, test, and production environments. These implementations have led to significantly improves reliability in releasing changes. The Engineering team reports there are frequent service disruptions due to unexpected errors when updating the application of the Apache Tomcat server. Which solution will increase the reliability of all releases?
    - [ ] A. Implement a blue/green deployment methodology.
    - [ ] B. Implement the canary release methodology.
    - [ ] C. Configure Amazon CloudFront to serve all requests from the cache while deploying the updates.
    - [ ] D. Implement the all at once deployment methodology.

    <details>
       <summary>Answer</summary>

       简单题，答案A
  
    </details>

42. A Developer would like to implement multi-account access for AWS Systems Manager and plans to use two member accounts within their AWS Organization. The Developer has delegated an IAM Role that allows Systems Manager (SSM) Parameter Store and Document resources to be trusted by the member accounts. While testing access from a member account, a user receives "Access Denied" errors when performing any SSM related operations. The Solutions Architect confirms that SSM operations are not denied in any of the Organizations Service Control Policies (SCP). Both member accounts are moved into a test OU which is not associated with any deny SCPs, however the user is still receiving an access denied error. What changes should the Solutions Architect make to provide access while maintaining least privileges?
    - [ ] A. Create a new SCP which allows SSM operations and specify the ARNS for each SSM Parameter Store and Document. Apply the new SCP to the test OU that the member accounts were moved into.
    - [ ] B. Create a new SCP that allows full access to AWS resources. Apply the new SCP to the test OU that the member accounts were moved into.
    - [ ] C. Remove both member accounts from the current Organization. Create a new Organization, with the account holding the SSM resources as the new master account and the other account as a member to the new Organization. Create a new SCP which allows full access to AWS resources.
    - [ ] D. Remove both member accounts from the current Organization. Create a new Organization, with the account holding the SSM resources as the new master account and the other account as a member to the new Organization. Create a new SCP which allows SSM operations and specify the ARNs for each SSM Parameter Store and document within the new master account.

    <details>
       <summary>Answer</summary>

       另起炉灶，C给了全权，排除，答案D
  
    </details>

43. A company is using multiple AWS accounts and has multiple DevOps teams running production and non-production workloads in these accounts. The company would like to centrally-restrict access to some of AWS services that the DevOps teams do not use. The company decided to use AWS Organizations and successfully invited all AWS accounts into the Organization. They would like to allow access to services that are currently in-use and deny a few specific services. Also, they would like to administer multiple accounts together as a single unit. What combination of steps should the Solutions Architect take to satisfy these requirements? (Select THREE)
    - [ ] A. Use a Deny list strategy
    - [ ] B. Review the Access Advisor in AWS IAM to determine
    - [ ] C. Review the AWS Trusted Advisor report to determine services recently used
    - [ ] D. Remove the default FullAWSAccess SCP
    - [ ] E. Define organizational units(OUS)and place the member accounts in the OUs
    - [ ] F. Remove the default DenyAWSaccess SCP

    <details>
       <summary>Answer</summary>

       - [ ] A. 默认开启的
       - [ ] B. Access Advisor是查看最终访问的
       - [x] C. 正确
       - [x] D. 正确
       - [x] E. 正确
       - [ ] D. 这个是错的

    </details>

44. A company hosts a community forum site using an Application Load Balancer (ALB) and a Docker application hosted in an Amazon ECS cluster. The site data is stored in Amazon RDS for MYSQL, and the container image is stored in ECR. The company needs to provide their customers with a disaster recovery SLA with an RTO of no more than 24 hours and RPO of no more than 8 hours. Which of the following solutions is the MOST cost-effective way to meet the requirements?
    - [ ] A. Use AWS CloudFormation to deploy identical ALB, EC2, ECS and RDS resources in two regions. Schedule RDS snapshots every 8 hours. Use RDS multi-region replication to update the secondary regions copy of the database. In the event of a failure, restore from the latest snapshot, and use an Amazon Route 53 DNS failover policy to automatically redirect customers to the ALB in the secondary region.
    - [ ] B. Store the Docker image in ECR in two regions. Schedule RDS snapshots every 8 hours with snapshots copied to the secondary region. In the event of a failure, use AWS CloudFormation to deploy the AL B, EC2, ECS and RDS resources in the secondary region, restore from the latest snapshot, and update the DNS record to point to the ALB in the secondary region.
    - [ ] C. Use AWS CloudFormation to deploy identical ALB, EC2 ECS, and RDS resources in a secondary region. Schedule hourly RDS MYSQL backups to Amazon S3 and use cross-region replication to replicate data to a bucket in the secondary region. In the event of a failure, import the latest Docker image to Amazon ECR in the secondary region, deploy to the EC2 instance, restore the latest MYSQL backup, and update the DNS record to point to the ALB in the secondary region.
    - [ ] D. Deploy a pilot light environment in a secondary region with an ALB and a minimal resourceEC2 deployment for Docker in an AWS Auto Scaling group with a scaling policy to increase instance size and number of nodes. Create a cross-region read replica of the RDS data. In the event of a failure, promote the replica to primary and update the DNS record to point to the ALB in the secondary region.

    <details>
       <summary>Answer</summary>

       答案C，理由未知

    </details>

45. A Solutions Architect needs to migrate an on-premises legacy application to AWS. The application runs on two servers behind a load balancer. The application requires a license file that is associated with the MAC address of the server’s network adapter. It takes the software vendor 12 hours to send new license files. The application also uses configuration files with a static IP address to access a database server, host names are not supported Siven these requirements, which combination of steps should be taken to enable highly available architecture for the application servers in AWS? (Select TWO)
    - [ ] A. Create a pool of ENIs. Request license files from the vendor for the pool and store the license files in Amazon S3. Create a bootstrap automation script to download a license file and attach the corresponding ENI to an Amazon EC2 instance.
    - [ ] B. Create a pool of ENIs. Request license files from the vendor for the pool, store the license files on an Amazon EC2 instance. Create an AMI from the instance and use this AMI for all future EC2 instances.
    - [ ] C. Create a bootstrap automation script to request a new license file from the vendor. When the response is received, apply the license file to an Amazon EC2 instance.
    - [ ] D. Edit the bootstrap automation script to read the database server IP address from the AWS Systems Manager Parameter Store, and inject the value into the local configuration files.
    - [ ] E. Edit an Amazon EC2 instance to include the database server IP address in the configuration files and re-create the AMI to use for all future EC2 instances.

    <details>
       <summary>Answer</summary>

       简单题，答案AD

    </details>

46. A company is testing Amazon Elastic File Service (EFS) in its Development VPC and would like to extend this test on-premises. EFS is running in us-east-1 and the corporate network is currently connected to this Region through a site-to-site VPN. All on-premises computers and servers are required to have all DNS traffic resolved by their on-premises DNS servers. The on-premises users would like to connect to the EFS using a DNS name instead of an IP address. What collection of steps must be taken to meet this requirement? (Select TWO)
    - [ ] A. Create a new Amazon Route 53 Private Hosted Zone with a domain name of awscloud.example.com and associate the Development VPC to this zone. Create a CNAME record and point this to the EFS endpoint.
    - [ ] B. Create a new Amazon Route 53 Public Hosted Zone with a domain name of awscloud.example.com and associate the Development VPC to this zone. Create a CNAME record and point this to the EFS endpoint.
    - [ ] C. Create a conditional forwarder rule in the on-premises DNS servers to forward requests for awscloud.example.com to the Amazon Route 53 Resolver inbound endpoints.
    - [ ] D. Create a conditional forwarder rule in the on-premises DNS servers to forward requests for awscloud.example.com to the Amazon Route 53 Resolver outbound endpoints.
    - [ ] E. Create a conditional forwarder rule in the on-premises DNS servers to forward requests for awscloud.example.com to the Amazon-provided DNS server.

    <details>
       <summary>Answer</summary>

       由于使用了VPN，表明不是VPC内部的流量，那么首先排除A，这里我们使用DNS去解析AWS的资源，那么使用进站规则，排除D，E本身是错的，答案BC -> [ref1](https://docs.aws.amazon.com/zh_cn/Route53/latest/DeveloperGuide/resolver.html)，[ref2](https://docs.aws.amazon.com/zh_cn/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html)

    </details>

47. A group of research institutions are partnering to study 2 PB of genomic data that changes regularly. The primary institution that owns the data is storing it in an Amazon S3 bucket in its AWS account. All the secondary institutions in the partnership have their own AWS accounts and require read access to the data. The institute that owns the data does not want to pay for the data transfer costs associated with allowing the secondary institutes access to the data. Which of the following solutions will meet the requirements?
    - [ ] A. In the primary account, create a cross-account AWS IAM role for each secondary account that allows read access to the data. Have the secondary institutions assume the role when accessing the data.
    - [ ] B. In the primary account, create an S3 bucket policy to give read access to each secondary account. Enable Requester Pays on the S3 bucket. Have the secondary institutions use their own AWS credentials with read permissions to the S3 bucket, when accessing the data.
    - [ ] C. Create an S3 bucket in each of the secondary accounts with a S3 bucket policy that gives write access to the primary account. Periodically synchronize the S3 buckets from the primary account to each secondary account. Have the secondary institutions use their own AWS credentials when accessing the data.
    - [ ] D. In the primary account, create a cross-account AWS IAM role for each secondary account that allows read access to the data Enable Requester Payson the S3 bucket. Have the secondary institutions assume the role when accessing the data.

    <details>
       <summary>Answer</summary>

       重复题，答案B

    </details>

48. A company is planning to deploy a new business analytics application that requires 10.000 hours of compute time each month. The compute resources can have flexible availability but must be as cost-effective as possible. The company will also provide a reporting service to distribute analytics reports, which needs to always run. How should the Solution Architect design a solution that meets these requirements?
    - [ ] A. Deploy the reporting service on a spot Fleet. Deploy the analytics ECS with AWS Fargate as the compute option. Set the analytics application to use a custom metric with Service Auto Scaling.
    - [ ] B. Deploy the reporting service on an On-demand Instance Deploy the analytics application as a container in AWS Batch with AWS Fargate as the compute option. Set the analytics application to use a custom metric with Service Auto Scaling.
    - [ ] C. Deploy the reporting service as a container in Amazon ECS with AWS Fargate as the compute option. Deploy the analytics application on a Spot Fleet. Set the analytics application to use a custom metric with Amazon EC2 Auto Scaling applied to the Spot Fleet.
    - [ ] D. Deploy the reporting service as a container in Amazon ECS with AWS Fargate as the compute option. Deploy the analytics application on an On-demand Instance and purchase a reserves Instance with a3-year term. Set the analytics application to use a custom metric with Amazon EC2 Auto Scaling applied to the On-Demand Instance.

    <details>
       <summary>Answer</summary>

       最便宜的方法就是C啦

    </details>

49. A utility company wants to collect usage data every 5 minutes from its smart meters to facilitate time-of-use metering. When a meter sends data to AWS, the data is sent to Amazon API Gateway, processed by an AWS Lambda function, and stored in an Amazon DynamoDB table. During the pilot phase, the Lambda functions took from 3 to 5 seconds to complete As more smart meters are deployed, the Engineers notice the Lambda functions are taking from I to 2 minutes to complete. The functions are also increasing in duration as new types of metrics are collected from the devices. There are many "ProvisionedThroughputExceededException" errors while performing PUT operations on DynamoDB, and there are also many "TooManyRequestsException" errors from Lambda. Which combination of changes will resolve these issues? (Choose two.)
    - [ ] A. Increase the write capacity units to the DynamoDB table.
    - [ ] B. Increase the memory available to the Lambda functions.
    - [ ] C. Increase the payload size from the smart meters to send more data.
    - [ ] D. Stream the data into an Amazon Kinesis data stream from API Gateway and process the data in batches.
    - [ ] E. Collect data in an Amazon SQS FIFO queue, which triggers a Lambda function to process each message.

    <details>
       <summary>Answer</summary>

       - [x] A. 正确
       - [ ] B. TooManyRequestsException说的是请求太多了，增加内存解决不了的
       - [ ] C. 本身写的能力就不够爱增加大小只是火上浇油
       - [x] D. 正确
       - [ ] E. AWS IoT不能跟SQS FIFO联用

    </details>

50. A company is developing a new service that will be accessed using TCP on a static port. A Solutions Architect must ensure that the service is highly available, has redundancy across Availability Zones, and is accessible using the DNS name “my.service.com”, which is publicly accessible. The service must use fixed address assignments SO other companies can add the addresses to their allow lists. Assuming that resources are deployed in multiple Availability Zones in a single Region, which solution will meet these requirements?
    - [ ] A. Create Amazon EC2 instances with an Elastic IP address for each instance. Create a Network Load Balancer (NLB)and expose the static TCP port. Register EC2 instances with the NLB. Create a new name server record set named “my.service.com” and assign the Elastic IP addresses of the EC2 instances to the record set. Provide the Elastic IP addresses of the EC2 instances to the other companies to add to their allow lists.
    - [ ] B. Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP addresses for the ECS cluster. Create a Network Load Balancer (NLB) and expose the TCP port. Create a target group and assign the ECS cluster name to the NLB. Create a new A record set named “my.service.com” and assign the public IP addresses of the ECS cluster to the record set. Provide the public IP addresses of the ECS cluster to the other companies to add to their allow lists.
    - [ ] C. Create Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB)and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB. Create a new A(alias)record set named “my.service.com” and assign the NLB DNS name to the record set.
    - [ ] D. Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP address for each host in the cluster. Create an Application Load Balancer (ALB) and expose the static TCP port. Create a target group and assign the ECS service definition name to the ALB. Create a new CNAME record set and associate the public IP addresses to the record set Provide the Elastic IP addresses of the Amazon EC2 instances to the other companies to add to their allow lists.

    <details>
       <summary>Answer</summary>

       - [ ] A. 要将域流量路由至NLB需要使用A记录 -> [ref](https://docs.aws.amazon.com/zh_cn/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html)
       - [ ] B. 你不能把ECS集群的名字注册到NLB的目标组中。ECS支持动态端口映射，只要在任务定义中指明目标，就会 "自动 "注册。
       - [x] C. 正确
       - [ ] D. 同A

    </details>

51. A company is running a web application with On-demand Amazon EC2 instances in Auto Scaling groups that scale dynamically based on custom metrics. After extensive testing, the company determined that the m5.2xlarge instance size is optimal for the workload. Application data is stored in db r4.4xlarge Amazon RDS instances that are confirmed to be optimal. The traffic to the web application spikes randomly during the day. What other cost-optimization methods should the company implement to further reduce costs without impacting the reliability of the application?
    - [ ] A. Double the instance count in the auto Scaling groups and reduce the instance size to m5.large.
    - [ ] B. Reserve capacity for the RDS database and the minimum number ofEC2 instances that are constantly running.
    - [ ] C. Reduce the RDS instance size to db r4xlarge and add five equivalently sized read replicas to provide reliability.
    - [ ] D. Reserve capacity for all EC2 instances and leverage Spot Instance pricing for the RDS database.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

52. A company with multiple accounts is currently using a configuration that does not meet the following security governance policies:Prevent ingress from port 22 to any Amazon EC2 instance,Require billing and application tags for resources. Encrypt all Amazon EBS volumes. A Solutions Architect wants to provide preventive and detective controls, including notifications about a specific resource, if there are policy deviations. Which solution should the Solutions Architect implement?
    - [ ] A. Create an AWS CodeCommit repository containing policy-compliant AWS CloudFormation templates. Create an AWS Service Catalog portfolio. Import the CloudFormation templates by attaching the CodeCommit repository to the portfolio. Restrict users across all accounts to items from the AWS Service Catalog portfolio. Use AWS Config managed rules to detect deviation from the policies. Configure an Amazon Cloudwatch Events rule for deviations, and associate a CloudWatch alarm to send notifications when the Triggeredrules metric is greater than zero
    - [ ] B. Use AWS Service Catalog to build a portfolio with products that are in compliance with the governance policies in a central account. Restrict users across all accounts to Aws Service Catalog products. Share a compliant portfolio to other accounts. Use AWS Config managed rules to detect deviations from the policies. Configure an Amazon CloudWatch Events rule to send a notification when a deviation occurs
    - [ ] C. Implement policy-compliant AWS CloudFormation templates for each account, and ensure that all provisioning is completed by CloudFormation. Configure Amazon Inspector to perform regular checks against resources. Perform policy validation and write the assessment output to Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter to increment a metric when a deviation occurs. Configure a CloudWatch alarm to send notifications when the configured metric is greater than zero
    - [ ] D. Restrict users and enforce least privilege access using AWS IAM. Consolidate all AWS CloudTrail logs into a single account. Send the Cloud Trail logs to Amazon Elasticsearch Service (Amazon ES). Implement monitoring, alerting, and reporting using the Kibana dashboard in Amazon ES and with Amazon SNS.

    <details>
       <summary>Answer</summary>

       多账户使用本地产品组合要使用Service Catalog，这里需要注意的是需要分享，答案B -> [ref](https://aws.amazon.com/blogs/mt/use-aws-service-catalog-to-build-a-custom-catalog-of-products-from-aws-marketplace/)

    </details>

53. A company is using a HTTP webhook from its source control platform to perform code vulnerability scanning. The vulnerability scanning is done by an application running in AWS Lambda which is invoked by Amazon API Gateway when the webhook is received. The source control platform requires an HTTP 200 response from the webhook destination within 30 seconds. otherwise, the webhook is re-sent. Code vulnerability scanning can take up to 10 minutes to complete, depending on the size of the codebase being scanned. The company wants to ensure that only one vulnerability scan is triggered for each webhook. Which solution would achieve the company’s requirement?
    - [ ] A. Change the API Gateway integration type to AWS PROXY for the Lambda function. Modify the Lambda code to return an HTTP 200 response as soon as it is invoked, before continuing to perform the vulnerability scanning.
    - [ ] B. Create a new Lambda function invoked by API Gateway to write the webhook to an Amazon SQS FIFO queue with message deduplication. Then return an HTTP 200 response Trigger the code vulnerability scanner from messages in the SQS FIFO queue.
    - [ ] C. Configure API Gateway to invoke the Lambda function asynchronously. Add an integration response to API Gateway to return an HTTP 200 response once the Lambda function has been invoked.
    - [ ] D. Configure API Gateway to invoke the Lambda function asynchronously. Modify the Lambda code to return an HTTP 200 response as soon as it is invoked. Before continuing to perform the vulnerability scanning.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

54. A company has a complex web application that leverages Amazon CloudFront for global scalability and performance. Over time, users report that the web application is slowing down. The company's operations team reports that the CloudFront cache hit ratio has been dropping steadily. The cache metrics report indicates that query strings on some URLS are inconsistently ordered and are specified sometimes in mixed case letters and sometimes in lowercase letters. Which set of actions should the solutions architect take to increase the cache hit ratio as quickly as possible?
    - [ ] A. Deploy a Lambda@Edge function to sort parameters by name and force them to be lowercase. Select the CloudFront viewer request trigger to invoke the function.
    - [ ] B. Update the CloudFront distribution to disable caching based on query string parameters.
    - [ ] C. Deploy a reverse proxy after the load balancer to post process the emitted URLS in the application to force the URL strings to be lowercase.
    - [ ] D. Update the CloudFront distribution to specify casing-insensitive query string processing.

    <details>
       <summary>Answer</summary>

       简单题，答案A

    </details>

55. A company has several Amazon EC2 instances to both public and private subnets within a VPC that is not connected to the corporate network A security group associated with the EC2 instances allows the company to use the Windows remote desktop protocol (RDP) over the internet to access the instances. The security team has noticed connection attempts from unknown sources. The company wants to implement a more secure solution to access the EC2 instances. Which strategy should a solutions architect implement?
    - [ ] A. Deploy a Linux bastion host on the corporate network that has access to all instances in the VPC.
    - [ ] B. Deploy AWS Systems Manager Agent on the EC2 instances. Access the EC2 instances using Session Manager restricting access to users with permission.
    - [ ] C. Deploy a Linux bastion host with an Elastic IP address in the public subnet. Allow access to the bastion host from 0.0.0.0/0.
    - [ ] D. Establish a Site-to-Site VPN connecting the corporate network to the VPC. Update the security groups to allow access from the corporate network only.

    <details>
       <summary>Answer</summary>

       VPN是避免尝试连接的唯一方法，答案D

    </details>

56. A company plans to migrate to AWS. A solutions architect uses AWS Application Discovery Service over the fleet and discovers that there is an Oracle data warehouse and several PostgreSQL databases. Which combination of migration patterns will reduce licensing costs and operational overhead? (Choose two.)
    - [ ] A. Lift and shift the Oracle data warehouse to Amazon EC2 using AWS DMS.
    - [ ] B. Migrate the Oracle data warehouse to Amazon Redshift using AWS SCT and AWS DMS
    - [ ] C. Lift and shift the PostgreSQL databases to Amazon EC2 using AWS DMS.
    - [ ] D. Migrate the PostgreSQL databases to Amazon RDS for PostgreSQL using AWS DMS.
    - [ ] E. Migrate the Oracle data warehouse to an Amazon EMR managed cluster using AWS DMS.

    <details>
       <summary>Answer</summary>

       简单题，答案BD

    </details>

57. A company is running a two-tier web application on Amazon EC2. The web tier consists of an Application Load Balancer (ALB) backed by an Auto Scaling group of web server instances spanning multiple Availability Zones. The database tier is using Amazon Aurora MYSQL The company's security team has deployed AWS WAF and integrated it with the ALB to prevent SQL injection attacks against the application. Recently, a security breach was reported in which the attacker was able to gain access to an individual web server and the company’s database from random IP addresses. The security team was eventually able to write a better rule to match the SQL injection technique that the attacker had used. However, this process took about an hour from when the third-party security agent running on theEC2 instances successfully detected the attack Which strategy allows the security team to protect the database and overall infrastructure?
    - [ ] A. Add an Amazon CloudFront layer to the existing architecture. Modify the AWS WAF association to integrate with CloudFront instead of the ALB. Change the web tiers security groups to allow IP addresses from CloudFront only. Use Lambda@Edge to perform request inspection and block repetitive suspicious requests.
    - [ ] B. Configure the third-party security agent to invoke an AWS Lambda function. The Lambda function should first check the web tier's Autoscaling group to ensure there is more than one running instance and if so, then stop and quarantine the web server instance.
    - [ ] C. Enable Amazon Macie and turn on its integrations with Amazon EC2 and the Aurora MYSQL database. Create a visual dashboard for the security team. Configure automated alerts and define AWS Lambda functions to automatically block detected attacks by modifying security groups within the VPC.
    - [ ] D. Deploy Amazon Guard Duty to analyze VPC Flow Logs. Configure an Amazon Event bridge rule that triggers an AWS Lambda function upon a Guard duty alert. Configure the Lambda function to automatically block detected attacks by modifying security groups within the VPC.

    <details>
       <summary>Answer</summary>

       答案D

    </details>

58. A company has a mobile app with users in Europe. When the app is used, it downloads a configuration file that is device and app version-specific. The company has the following architecture: -Configuration files are stored in Amazon S3 in the eu-west-1 Region and served to the users using Amazon CloudFront. -Lambda@Edge is used to extract the device and version information from the app requests. It then updates the requests to load the correct configuration. The company uses the configuration file load time as a key performance metric and targets a response time of 100ms or less. The app recently launched in the ap-southeast-2 Region, and the latency for requests from users in Australia is significantly above the 100ms target. A solutions architect needs to recommend a solution. Which solution will reduce latency for users in Australia?
    - [ ] A. Create an S3 bucket in the ap-southeast-2 Region. Use cross-region replication to synchronize from the bucket in the eu-west-1 Region. Modify Lambda@Edge to access Amazon S3 in the Region that is closest to the user.
    - [ ] B. Configure S3 Transfer Acceleration on the bucket. Modify Lambda@Edge to access Amazon S3 using the Transfer Acceleration endpoint in the Region that is closest to the user.
    - [ ] C. Configure S3 Transfer Acceleration on the bucket. Add the Transfer Acceleration Edge endpoints for Australia and Europe as CloudFront origins. Modify Lambda@Edge to update the origin of the request to be the Transfer Acceleration endpoint in the Region that is closest to the user.
    - [ ] D. Create an S3 bucket in the ap-southeast-2 Region. Use cross-region replication to synchronize from the bucket in the eu-west-1 Region Create an Amazon. Route 53 hosted zone with latency-based routing configured for both buckets. Modify Lambda@Edge to update the origin of the request to be the Route 53 hosted zone that is closest to the user.

    <details>
       <summary>Answer</summary>

       答案C，理由未知

    </details>

59. A company operates pipelines across North America and South America. The company assesses pipeline inspection gauges with image and ultrasonic sensor data to monitor the condition of its pipelines. The pipelines are in areas with intermittent or unavailable internet connectivity. The image data at each site requires terabytes of storage each month. The company wants a solution to collect the data at each site in monthly intervals and to store the data with high durability. The image captured must be preprocessed and uploaded to a central location for persistent storage. Which actions should a solutions architect take to meet these requirements?
    - [ ] A. Deploy AWS Snowball devices at local sites in a cluster configuration Configure AWS Lambda for preprocessing. Ship the devices back to the closest AWS Region and store the data in Amazon S3 buckets.
    - [ ] B. Deploy AWS Snowball Edge devices at local sites in a cluster configuration. Configure AWS Lambda for preprocessing. Ship the devices back to the closest AWS Region and store the data in Amazon S3 buckets.
    - [ ] C. Deploy AWS lot Greengrass on eligible hardware across the sites. Configure AWS Lambda on the devices for preprocessing Upload the processed data to Amazon S3 buckets in AWS Regions closest to the sites.
    - [ ] D. Deploy AWS lot Greengrass on eligible hardware across the sites. Configure AWS Lambda on the devices for preprocessing. Ship the devices back to the closest AWS Region and store the data in Amazon S3 buckets.

    <details>
       <summary>Answer</summary>

       答案D，理由未知

    </details>

60. A company is using multiple AWS accounts. The DNS records are stored in a private hosted zone for Amazon Route 53 in Account A The company's applications and databases are running in Account B- A solutions architect will deploy a two-tier application in a new VPC. To simplify the configuration, the db.example.com CNAME record set for the Amazon RDS endpoint was created in a private hosted zone for Amazon Route 53. During deployment the application failed to start. Troubleshooting revealed that db.example.com is not resolvable on the Amazon EC2 instance. The solutions architect confirmed that the record set was created correctly in Route 53. Which combination of steps should the solutions architect take to resolve this issue? (Choose two.)
    - [ ] A. Deploy the database on a separate EC2 instance in the new VPC. Create a record set for the instance's private IP in the private hosted zone.
    - [ ] B. Use SSH to connect to the application tier EC2 instance. Add an RDS endpoint IP address to the /etc/ resolv conf file.
    - [ ] C. Create an authorization to associate the private hosted zone in Account A with the new VPC in Account B-
    - [ ] D. Create a private hosted zone for the example com domain in Account B- Configure Route 53 replication between AWS accounts.
    - [ ] E. Associate a new VPC in Account B with a hosted zone in Account A. Delete the association authorization in Account A.

    <details>
       <summary>Answer</summary>

       答案CE -> [ref](https://docs.aws.amazon.com/zh_cn/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs-different-accounts.html)

    </details>

61. A solutions architect is designing a publicly accessible web application that is on an Amazon CloudFront distribution with an Amazon website endpoint as the origin. When the solution is deployed, the website returns an Error 403: Access Denied message. Which steps should the solutions architect take to correct the issue? (Select TWO))
    - [ ] A. Remove the S3 block public access option from the S3 bucket.
    - [ ] B. Remove the requester pays option from the S3 bucket.
    - [ ] C. Remove the origin access identity(OAL)from the CloudFront distribution.
    - [ ] D. Change the storage class from s3 Standard to S3 One Zone-infrequent Access (S3 One Zone-IA).
    - [ ] E. Disable S3 object versioning.

    <details>
       <summary>Answer</summary>

       认证错误，答案AB

    </details>

62. A company requires that all internal application connectivity use private IP addresses. To facilitate this policy, a solutions architect has created interface endpoints to connect to AWS public services. Upon testing, the solutions architect notices that the service names are resolving to public IP addresses, and that internal services cannot connect to the interface endpoints. Which step should the solutions architect take to resolve this issue?
    - [ ] A. Update the subnet route table with a route to the interface endpoint.
    - [ ] B. Enable the private DNS option on the VPC attributes.
    - [ ] C. Configure the security group on the interface endpoint to allow connectivity to the AWS services.
    - [ ] D. Configure an Amazon Route 53 private hosted zone with a conditional forwarder for the internal application.

    <details>
       <summary>Answer</summary>

       VPC上的私有DNS没有被开启，答案B -> [ref](https://docs.aws.amazon.com/zh_cn/vpc/latest/userguide/vpc-dns.html)

    </details>

63. An ecommerce company has an order processing application it wants to migrate to AWS. The application has inconsistent data volume patterns but needs to be avail at all times. Orders must be processed as they occur and in the order that they are received. Which set of steps should a solutions architect take to meet these requirements?
    - [ ] A. Use AWS Transfer for SFTP and upload orders as they occur. Use On-Demand Instances in multiple Availability Zones for processing.
    - [ ] B. Use Amazon SNS with FIFO and send orders as they occur. Use a single large Reserved Instance for processing.
    - [ ] C. Use Amazon SQS with FIFO and send orders as they occur. Use Reserved Instances in multiple Availability Zones for processing.
    - [ ] D. Use Amazon SQS with FIFO and send orders as they occur. Use Spot Instances in multiple Availability Zones for processing.

    <details>
       <summary>Answer</summary>

       送分题，答案C

    </details>

64. A company has a web application that allows users to upload short videos. The videos are stored on Amazon EBS volumes and analyzed by custom recognition software for categorization. The website contains static content that has variable traffic with peaks in certain months. The architecture consists of Amazon EC2 instances running in an Auto Scaling group for the web application and EC2 instances running in an Auto Scaling group to process an Amazon SQS- queue. The company wants to re-architect the application to reduce operational overhead using AWS managed services where possible and remove dependencies on third-party software. Which solution meets these requirements?
    - [ ] A. Use Amazon ECS containers for the web application and Spot instances for the Scaling group that processes the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.
    - [ ] B. Store the uploaded videos in Amazon EFS and mount the file system to the EC2 instances for the web application. Process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos.
    - [ ] C. Host the web application in Amazon S3. Store the uploaded videos in Amazon S3. Use S3 event notification to publish events to the SQS queue. Process the SQS queue with an AWS Lambda function that call the Amazon Rekognition API to categorize the videos.
    - [ ] D. Use AWS Elastic Beanstalk to launch EC2 instances in an Auto Scaling group for the application and launch a worker environment to process the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.

    <details>
       <summary>Answer</summary>

       - [ ] A. 不能使用Spot实例
       - [ ] B. EC2不是AWS托管的
       - [x] C. 正确
       - [ ] D. 跟C比优势不大

    </details>

65. A solutions architect s designing a web application on AWS that requires 99.99% availability. The application will consist of a three-tier architecture that supports 3,000,000 web requests each minute when experiencing peak traffic. The application will use Amazon Route 53 for DNS resolution, Amazon CloudFront as the content delivery network (CDN), an Elastic Load Balancer for load balancing, Amazon EC2 Auto Scaling groups to scale the application tier, and Amazon Aurora MySQL as the backend database. The backend database load will average 90% reads and 10% writes. The company wants to build a cost-effective solution, but reliability is critical. Which set of strategies should the solutions architect use?
    - [ ] A. Build the application in a single AWS Region. Deploy the EC2 application layer to three Availability Zones using an Auto Scaling group with dynamic scaling based on request metrics. Use a Multi-AZ Amazon Aurora MySQL DB cluster with two Aurora Replicas. Each Aurora Replica must have enough capacity to support 50% of the peak read queries.
    - [ ] B. Build the application in a single AWS Region. Deploy the EC2 application layer to three Availability Zones using an Auto Scaling group with a minimum desired capacity sufficient to process 450,000 requests each minute. Use a Multi-AZ Amazon Aurora MYSQL DB cluster with two Aurora Replicas Each Aurora Replica must have enough capacity to support 100% of the peak read queries.
    - [ ] C. Build the application in a single AWS Region. Deploy the EC2 application layer to two Availability Zones using an Auto Scaling group with a minimum desired capacity sufficient to process 30.0000 requests each minute use a Multi-AZ Amazon Aurora MYSQL DB cluster with one Aurora Replica. The Aurora Replica must have enough capacity to support 50% of the peak read and write queries.
    - [ ] D. Build the application in two AWS Regions. Deploy the EC2 application layer to two Availability Zones using an Auto Scaling group with dynamic scaling based on the request metrics in each Region in the second Region, deploy an Amazon Aurora MYSQL cross-region replica, Use Amazon Route 53 to distribute traffic between regions and configure failover if a Region becomes unavailable.

    <details>
       <summary>Answer</summary>

       答案B

    </details>

66. A company uses a load balancer to distribute traffic to Amazon EC2 instances in a single Availability Zone. The company is concerned about security and wants a solutions architect to re-architect the solution to meet the following requirements -Inbound requests must be filtered for common vulnerability attacks -Rejected requests must be sent to a third-party auditing application -All resources should be highly available. Which solution meets these requirements?
    - [ ] A. Configure a Multi-AZ Auto Scaling group using the applications AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Use Amazon Inspector to monitor traffic to the ALB and EC2 instances. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB. Use an AWS Lambda function to frequently push the Amazon Inspector report to the third-party auditing application
    - [ ] B. Configure an Application Load Balancer (ALB) and add the EC2 instances as targets, Create a web ACL in WAF Create an AWS WAF using the web ACL and ALB name and enable logging with Amazon CloudWatch Logs. Use an AWS Lambda function to frequently push the logs to the third-party auditing application
    - [ ] C. Configure an Application Load Balancer(ALB)along with a target group adding the EC2 instances as targets. Create an Amazon Kinesis Data Firehose with the destination of the third-party auditing application. Create a web ACL in WAF Create an AWS WAF using the web, ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber
    - [ ] D. Configure a Multi-AZ Auto Scaling group using the applications AMI. Create an Application Load Balancer (ALB)and sect the previously created Auto Scaling group as the target. Create an Amazon Kinesis Data Firehose with a destination of the third-party auditing application. Create a web ACL in WAF Create an AWS WAF using the Web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.

    <details>
       <summary>Answer</summary>

       要使用Auto Scaling组，排除BC，Amazon Inspector是评估应用风险的而不是基础架构本身，答案D

    </details>

67. A company has several development teams collaborating on multiple projects. Developers frequently move between projects, and each project requires access to a different set of AWS resources. There are current projects for web, mobile, and database development However. the set of projects may change over time. Developers should have full control over the resources for the project to Which they are assigned, and read-only access to resources for all other projects. When developers are assigned to a different project or new AWS resources are added. the company wants to maintenance. What type of control policy should a solutions architect recommend?
    - [ ] A. Create a policy document for each project with specific project tags and allow full control of the resources with a matching tag. Allow read only access for all other resources. Attach the project-specific policy document to the IAM role for that project. Change the role assigned to the developer's IAM user when they change projects. Assign a specific project tag to new resources when they are created
    - [ ] B. Create an IAM role for each project that requires access to AWS resources. Attach an inline policy document to the role, that specifies the AM users that are allowed to assume the role, with full control of the resources that belong to a project and read only access for all other resources within the account. Update the policy document when the set of resources changes or developers change projects
    - [ ] C. Create a customer manage. Specify full control policy document for each project that requires access to AWS resources. Specify full control of the resources that belong to a projects and read-only access for all other resources within the account. Attach the project-specific policy document to the developer's IAM user when they change projects. Update the policy document when the set of resources changes
    - [ ] D. Create a customer manage policy document for each project that requires access to AWS resources. Specify full control of the resources that belong to a project and read-only access for all other resources within the account. Attach the project-specific policy document to an IAM group Change the group membership when developer's change projects. Update the policy document when the set to resources changes.

    <details>
       <summary>Answer</summary>

       答案D

    </details>

68. A company plans to refactor a monolithic application into a modern application design deployed on AWS. The CI/CD pipeline needs to be upgraded to support the modern design for the application with the following requirements: - It should allow changes to be released several times every hour -It should be able to roll back the changes as quickly as possible. Which design will meet these requirements?
    - [ ] A. Deploy a CI/CD pipeline that incorporates AMIs to contain the application and their configurations. Deploy the application by replacing Amazon EC2 instances.
    - [ ] B. Specify AWS Elastic Beanstalk to stage in a secondary environment as the deployment target for the CL/CD pipeline of application. The deploy, swap the staging and production environment URLS.
    - [ ] C. Use AWS Systems Manager to re-provision the infrastructure for each deployment Update the Amazon EC2 user data to pull the latest code artifact from amazon S3 and use Amazon Route 53 weighted routing to point the new environment.
    - [ ] D. Roll out the application update as part of an auto Scaling event using prebuilt AMIs. Use new versions of the AMIs to add instances and phase out all instances that use the previous AMI version with the configured termination policy during a deployment event.

    <details>
       <summary>Answer</summary>

       B就是Blue/Green部署，答案B

    </details>

69. A solutions architect is migrating an existing workload to AWS Fargate. The task can only run in a private subnet within the VPC where there is no direct connectivity from outside the system to the application. When the Fargate task is launched, the task fails with the following error: CannotPullContainerError: API error (500): Get `https://111122223333.dkr.ecr.us-east-1.amazonaws.com/v2/: net/http:` request canceled while waiting for connection. How should the solutions architect correct this error?
    - [ ] A. Ensure the task is set to ENABLED for the auto-assign public IP setting when launching the task.
    - [ ] B. Ensure the task is set to DISABLED for the auto-assign public IP setting when launching the task. Configure a NAT gateway in the public subnet in the VPC to route requests to the internet.
    - [ ] C. Ensure the task is set to DISABLED for the auto-assign public IP setting when launching the task. Configure a NAT gateway in the private subnet in the VPC to route requests to the internet.
    - [ ] D. Ensure the network mode is set to bridge in the Fargate task definition.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

70. A company has a photo sharing social networking application. To provide a consistent experience for users, the company performs some image processing on the photos uploaded by users before publishing on the application. The image processing is implemented using a set of Python libraries. The current architecture is as follows: -The image processing Python code runs in a single Amazon EC2 instance and stores the processed images in an Amazon S3 bucket named ImageBucket. -The front-end application, hosted in another bucket, loads the images from ImageBucket to display to users. With plans for global expansion, the company wants to implement changes in its existing architecture to be able to scale for increased demand on the application and reduce management complexity as the application scales. Which combination of changes should a solutions architect make? (Choose two.)
    - [ ] A. Place the image processing EC2 instance into an Auto Scaling group.
    - [ ] B. Use AWS Lambda to run the image processing tasks.
    - [ ] C. Use Amazon Rekognition for image processing.
    - [ ] D. Use Amazon CloudFront in front of ImageBucket.
    - [ ] E. Deploy the applications in an Amazon ECS cluster and apply Service Auto Scaling.

    <details>
       <summary>Answer</summary>

       简单题，答案BD

    </details>

71. A company uses AWS Organizations with a single OU named Production to manage multiple accounts. All accounts are members of the Production 01-J. Administrators use deny list SCPs in the root of the organization to manage access to restricted services. The company recently acquired a new business unit and invited the new existing AWS account to the organization. Once onboarded, the administrators of the new business unit discovered that they are not able to update existing AWS Config rules to meet the company's policies. Which option will allow administrators to make changes and continue to enforce the current policies without introducing additional long-term maintenance?
    - [ ] A. Remove the organization's root SCPs that limit access to AWS Config. Create AWS Service Catalog products for the company's standard AWS Config rules and deploy them throughout the organization, including the new account.
    - [ ] B. Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the new account to the Production OU when adjustments to AWS Config are complete.
    - [ ] C. Convert the organization's root SCPs from deny list SCPs to allow list SCPs to allow the required services only. Temporally apply an SCP to the organization's root that allows AWS Config actions for principals only in the new account.
    - [ ] D. Create a temporary OU named Onboarding for the new account. Apply an SCP to the Onboarding OU to allow AWS Config actions. Move the organization's root SCP to the Production OU. Move the new account to the Production OU when adjustments to AWS Config are complete.

    <details>
       <summary>Answer</summary>

       D. B的问题是，新的OU将在组织的根中创建，因此拒绝配置规则的更改（来自组织的根）也将适用于新的OU。新的 OU 不能有一个拒绝更改配置规则的父级。这将是D的情况。答案D

    </details>

72. A company has a Microsoft SQL Server database in its data center and plans to migrate data to Amazon Aurora MySQL. The company has already used the AWS Schema Conversion Tool to migrate triggers, stored procedures, and other schema objects to Aurora MySQL. The database contains 1TB of data and grows less than 1MB per day. The company's data center is connected to AWS through a dedicated 1Gbps AWS Direct Connect connection. The company would like to migrate data to Aurora MySQL and perform reconfigurations with minimal downtime to the applications. Which solution meets the company's requirements?
    - [ ] A. Shut down applications over the weekend. Create an AWS DMS replication instance and task to migrate existing data from SQL Server to Aurora MySQL. Perform application testing and migrate the data to the new database endpoint.
    - [ ] B. Create an AWS DMS replication instance and task to migrate existing data and ongoing replication from SQL Server to Aurora MySQL. Perform application testing and migrate the data to the new database endpoint.
    - [ ] C. Create a database snapshot of SQL Server on Amazon S3. Restore the database snapshot from Amazon S3 to Aurora MySQL. Create an AWS DMS replication instance and task for ongoing replication from SQL Server to Aurora MySQL. Perform application testing and migrate the data to the new database endpoint.
    - [ ] D. Create a SQL Server native backup file on Amazon S3. Create an AWS DMS replication instance and task to restore the SQL Server backup file to Aurora MySQL. Create another AWS DMS task for ongoing replication from SQL Server to Aurora MySQL. Perform application testing and migrate the data to the new database endpoint.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

73. A financial services company receives a regular data feed from its credit card servicing partner. Approximately 5,000 records are sent every 15 minutes in plaintext, delivered over HTTPS directly into an Amazon S3 bucket with server-side encryption. This feed contains sensitive credit card primary account number (PAN) data. The company needs to automatically mask the PAN before sending the data to another S3 bucket for additional internal processing. The company also needs to remove and merge specific fields, and then transform the record into JSON format. Additionally, extra feeds are likely to be added in the future, so any design needs to be easily expandable. Which solutions will meet these requirements?
    - [ ] A. Trigger an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Trigger another Lambda function when new messages arrive in the SQS queue to process the records, writing the results to a temporary location in Amazon S3. Trigger a final Lambda function once the SQS queue is empty to transform the records into JSON format and send the results to another S3 bucket for internal processing.
    - [ ] B. Trigger an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Configure an AWS Fargate container application to automatically scale to a single instance when the SQS queue contains messages. Have the application process each record, and transform the record into JSON format. When the queue is empty, send the results to another S3 bucket for internal processing and scale down the AWS Fargate instance.
    - [ ] C. Create an AWS Glue crawler and custom classifier based on the data feed formats and build a table definition to match. Trigger an AWS Lambda function on file delivery to start an AWS Glue ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, have the ETL job send the results to another S3 bucket for internal processing.
    - [ ] D. Create an AWS Glue crawler and custom classifier based upon the data feed formats and build a table definition to match. Perform an Amazon Athena query on file delivery to start an Amazon EMR ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, send the results to another S3 bucket for internal processing and scale down the EMR cluster.

    <details>
       <summary>Answer</summary>

       ETL是最佳实践，答案C

    </details>

74. A company is manually deploying its application to production and wants to move to a more mature deployment pattern. The company has asked a solutions architect to design a solution that leverages its current Chef tools and knowledge. The application must be deployed to a staging environment for testing and verification before being deployed to production. Any new deployment must be rolled back in 5 minutes if errors are discovered after a deployment. Which AWS service and deployment pattern should the solutions architect use to meet these requirements?
    - [ ] A. Use AWS Elastic Beanstalk and deploy the application using a rolling update deployment strategy.
    - [ ] B. Use AWS CodePipeline and deploy the application using a rolling update deployment strategy.
    - [ ] C. Use AWS CodeBuild and deploy the application using a canary deployment strategy.
    - [ ] D. Use AWS OpsWorks and deploy the application using a blue/green deployment strategy.

    <details>
       <summary>Answer</summary>

       简单题，答案D

    </details>

75. A solutions architect is implementing federated access to AWS for users of the company’s mobile application. Due to regulatory and security requirements, the application must use a custom-built solution for authenticating users and must use IAM roles for authorization. Which of the following actions would enable authentication and authorization and satisfy the requirements? (Choose two.)
    - [ ] A. Use a custom-built SAML-compatible solution for authentication and AWS SSO for authorization.
    - [ ] B. Create a custom-built LDAP connector using Amazon API Gateway and AWS Lambda for authentication. Store authorization tokens in Amazon DynamoDB and validate authorization requests using another Lambda function that reads the credentials from DynamoDB.
    - [ ] C. Use a custom-built OpenID Connect-compatible solution with AWS SSO for authentication and authorization.
    - [ ] D. Use a custom-built SAML-compatible solution that uses LDAP for authentication and uses a SAML assertion to perform authorization to the IAM identity provider.
    - [ ] E. Use a custom-built OpenID Connect-compatible solution for authentication and use Amazon Cognito for authorization.

    <details>
       <summary>Answer</summary>

       SSO不支持手机，排除AC，B最错，答案DE

    </details>

76. An online magazine will launch its latest edition this month. This edition will be the first to be distributed globally. The magazine's dynamic website currently uses an Application Load Balance in front of the web tier, a fleet of Amazon EC2 instances for web and application servers, and Amazon Aurora MySQL. Portions of the website include static content and almost all traffic is read-only. The magazine is exporting a significant spike in internet traffic when the new edition is launched. Optimal performance is a top priority for the week following the launch. Which combination of steps should a solutions architect take to reduce system response times for a global audience? (Select Two.)
    - [ ] A. Use logical cross-Region replication to replicate the Aurora MySQL database to a secondary Region Replace the web servers with Amazon S3. Deploy S3 buckets in cross-Region replication mode.
    - [ ] B. Ensure the web and application tiers are each in Auto Scaling groups. Introduce an AWS Direct Connect connection Deploy the web and application liars in Regions across the world.
    - [ ] C. Migrate the database from Amazon Aurora to Amazon RDS tor MySQL Ensure all three of the application tiers-web. application, and database-are in private subnets.
    - [ ] D. Use an Aurora global database for physical cross-Region replication. Use Amazon S3 with cross-Region replication tor static content and resources. Deploy the web and application tiers in Regions across the world.
    - [ ] E. Introduce Amazon Route 53 with latency-based routing and Amazon CloudFront distributions. Ensure the web and application tiers are each in Auto Scaling groups.

    <details>
       <summary>Answer</summary>

       简单题，答案DE

    </details>

77. A company is launching a new web application on Amazon EC2 instances. Development and production workloads exist in separate AWS accounts. According to the company’s security requirements, only automated configuration tools are allowed to access the production account. The company’s security team wants to receive immediate notification if any manual access to the production AWS account or EC2 instances occurs. Which combination of actions should a solutions architect take in the production account to meet these requirements? (Select THREE)
    - [ ] A. Turn on AWS CloudTrail logs in the application's primary AWS Region. Use Amazon Athena to query the logs for AWSConsoleSignin event.
    - [ ] B. Configure Amazon Simple Email Service (Amazon SES) to send email to the security team when an alarm is activated.
    - [ ] C. Deploy EC2 instances in an Auto Scaling group. Configure the launch template to deploy instances without key pairs. Configure Amazon CloudWatch Logs to capture system access logs. Create an Amazon CloudWatch alarm that is based on the logs to detect when a user logs in to an EC2 instance.
    - [ ] D. Configure an Amazon Simple Notification Service (Amazon SNS) topic to send a message to the security team when an alarm is activated.
    - [ ] E. Turn on AWS CloudTrail logs for all AWS Regions. Configure Amazon CloudWatch alarms to provide an alert when an AWSConsoleSignin event is detected.
    - [ ] F. Deploy EC2 instances in an Auto Scaling group. Configure the launch template to delete the key pair after launch. Configure Amazon CloudWatch Logs for the system access logs. Create an Amazon CloudWatch dashboard to show user logins over time.

    <details>
       <summary>Answer</summary>

       答案CDE

    </details>

78. A mobile app has become very popular, and usage has gone from a few hundred to millions of users. Users capture and upload images of activities within a city and provide ratings and recommendations. Data access patters are unpredictable. The current application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The application is experiencing slowdowns and costs are growing rapidly. Which changes should a solutions architect make to the application architecture to control costs and improve performance?
    - [ ] A. Create an Amazon CloudFront distribution and place the ALB behind the distribution. Store static content in Amazon S3 in an Infrequent Access storage class.
    - [ ] B. Store static content in an Amazon S3 bucket using the Intelligent Tiering storage class. Use an Amazon CloudFront distribution in front of the S3 bucket and the ALB.
    - [ ] C. Place AWS Global Accelerator in front of the ALB Migrate the static content to Amazon EFS, and then run an AWS Lambda function to resize the images during the migration process.
    - [ ] D. Move the application code to AWS Fargate containers and swap out the EC2 instances with the Fargate containers.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

79. A company wants to run a serverless application on AWS. The company plans to provision its application in Docker containers running in an Amazon ECS cluster. The application requires a MySQL database and the company plans to use Amazon RDS. The company has documents that need to be accessed frequently for the first 3 months, and rarely after that. The document must be retained for 7 years. What is the MOST cost-effective solution to meet these requirements?
    - [ ] A. Create an ECS cluster using On-Demand Instances. Provision the database and its read replicas in Amazon RDS using Spot Instances. Store the documents in an encrypted EBS volume, and create a cron job to delete the documents after 7 years.
    - [ ] B. Create an ECS cluster using a fleet of Spot Instances, with Spot Instance draining enabled. Provision the database and its read replicas in Amazon RDS using Reserved Instances. Store the documents in a secured Amazon S3 bucket with a lifecycle policy to move the documents that are older than 3 months to Amazon S3 Glacier, then delete the documents from Amazon S3 Glacier that are more than 7 years old.
    - [ ] C. Create an ECS cluster using On-Demand Instances. Provision the database and its read replicas in Amazon RDS using On-Demand Instances. Store the documents in Amazon EFS. Create a cron job to move the documents that are older than 3 months to Amazon S3 Glacier. Create an AWS Lambda function to delete the documents in S3 Glacier that are older than 7 years.
    - [ ] D. Create an ECS cluster using a fleet of Spot Instances with Spot Instance draining enabled. Provision the database and its read replicas in Amazon RDS using On-Demand Instances. Store the documents in a secured Amazon S3 bucket with a lifecycle policy to move the documents that are older than 3 months to Amazon S3 Glacier, then delete the documents in Amazon S3 Glacier after 7 years.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

80. A solution architect must enable an AWS CloudHSM M of N access control-also named a quorum authentication mechanism-to allow security officers to make administrative changes to a hardware security module (MSM). The new security policy states that at least three of the five security officers must authorize any administrative changes to CloudHSM. Which well-architected design ensures the security officers can authenticate as a quorum?
    - [ ] A. Create a quorum signing application hosted on multiple Amazon EC2 instances behind an Application Load Balancer to allow an officer to initiate a quorum request. Require officers to log in to the application with their federated identity credentials. Each officer will then use the application to approve the quorum signing request. Configure the application to use AWS STS to sign the CloudHSM quorum token on behalf of the officers. Once at least three officers have approved the quorum signing request use EC2 IAM service roles to administer CloudHSM with the signed quorum token.
    - [ ] B. Create a static website on Amazon S3 integrated with Amazon API Gateway to allow an officer to initiate a quorum request. Use Amazon SNS to notify the officers of a quorum request. Allow the officers to download the CloudHSM quorum token, sign the token offline, and upload the signed token through the website. Use Amazon DynamoDB to store the quorum token and additional officer responses with their signed quorum tokens. Configure an AWS Step Functions workflow to orchestrate officer notifications, count signed tokens in Amazon DynamoDB, and notify the initiating officer once at least three officers have stoned the token. Use the signed quorum token to administer CloudHSM.
    - [ ] C. Create a status website on Amazon S3 integrated with Amazon API Gateway to allow an officer to imuate a quorum request. Use the website to redirect the officers to sign in to CloudHSM with their federated Identity credentials. Once at least three officers are signed in to CloudHSM, initiate a synchronous quorum token signing process. Use the stoned quorum token to administer CloudHSM.
    - [ ] D. Create an Amazon Cognito-authenticated Amazon API Gateway API endpoint with an AWS Lambda proxy integration. Allow an officer to create a CloudHSM quorum token and post it to the API Gateway. API after signing in with Amazon Cognito. Configure the Lambda function to perform a signing procedure on the quorum token using the officer's Amazon Cognito IAM role, and store the signed token in Amazon DynamoDB. Once at least three officers have signed the quorum token, allow a POST method to administer CloudHSM with the signed token.

    <details>
       <summary>Answer</summary>

       难题，答案D

    </details>

81. A company is using an existing orchestration tool to manage thousands of Amazon EC2 instances. A recent penetration test found a vulnerability in the company's software stack. This vulnerability has prompted the company to perform a full evaluation of its current production environment. The analysis determined that the following vulnerabilities exist within the environment: -Operating systems with outdated libraries and known vulnerabilities are being used in production. -Relational databases hosted and managed by the company are running unsupported versions with known vulnerabilities. -Data stored in databases is not encrypted. The solutions architect intends to use AWS Config to continuously audit and assess the compliance of the company's AWS resource configurations with the company's policies and guidelines. What additional steps will enable the company to secure its environments and track resources while adhering to best practices?
    - [ ] A. Use AWS Application Discovery Service to evaluate all running EC2 instances Use the AWS CLI to modify each instance, and use EC2 user data to install the AWS Systems Manager Agent during boot. Schedule patching to run as a Systems Manager Maintenance Windows task. Migrate all relational databases to Amazon RDS and enable AWS KMS encryption.
    - [ ] B.  Create an AWS CloudFormation template for the EC2 instances. Use EC2 user data in the CloudFormation template to install the AWS Systems Manager Agent, and enable AWS KMS encryption on all Amazon EBS volumes. Have CloudFormation replace all running instances. Use Systems Manager Patch Manager to establish a patch baseline and deploy a Systems Manager Maintenance Windows task to execute AWS-RunPatchBaseline using the patch baseline.
    - [ ] C. Install the AWS Systems Manager Agent on all existing instances using the company's current orchestration tool. Use the Systems Manager Run Command to execute a list of commands to upgrade software on each instance using operating system-specific tools. Enable AWS KMS encryption on all Amazon EBS volumes.
    - [ ] D. Install the AWS Systems Manager Agent on all existing instances using the company's current orchestration tool. Migrate all relational databases to Amazon RDS and enable AWS KMS encryption. Use Systems Manager Patch Manager to establish a patch baseline and deploy a Systems Manager Maintenance Windows task to execute AWS-RunPatchBaseline using the patch baseline.

    <details>
       <summary>Answer</summary>

       这题先排除AC，B的话工程量巨大，答案D

    </details>

82. A company has many services running in its on-premises data center. The data center is connected to AWS using AWS Direct Connect (DX) and an iPSec VPN. The service data is sensitive and connectivity cannot traverse the internet. The company wants to expand into a new market segment and begin offering its services to other companies that are using AWS. Which solution will meet these requirements?
    - [ ] A. Create a VPC Endpoint Service that accepts TCP trafic, host it behind a Network Load Balancer and make the service available over DX.
    - [ ] B. Create a VPC Endpoint Service that accepts Http or Https traffic host. It behind an Application Load Balancer and make the service available over DX.
    - [ ] C. Attach an internet gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.
    - [ ] D. Attach a NAT gateway to the VPC and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.

    <details>
       <summary>Answer</summary>

       不能透过互联网，排除CD，ALB不能和DX链接，答案A

    </details>

83. A company has a VPC with two domain controllers running Active Directory in the default configuration. The VPC DHCP options set is configured to use the IP addresses of the two domain controllers. There is a VPC interface endpoint defined; but instances within the VPC are not able to resolve the private endpoint addresses. Which strategies would resolve this issue? (Choose two.)
    - [ ] A. Define an outbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.
    - [ ] B. Update the DNS service on the Active Directory servers to forward all non-authoritative queries to the VPC Resolver.
    - [ ] C. Define an inbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.
    - [ ] D. Update the DNS service on the client instances to split DNS queries between the Active Directory servers and the VPC Resolver.
    - [ ] E. Update the DNS service on the Active Directory servers to forward all queries to the VPC Resolver.

    <details>
       <summary>Answer</summary>

       AWS DNS被设置在DHCP选项中。AWS资源会因此而解析其他资源，但会通过一个出站解析器端点将AD域的查询转发给AD服务器。从内部访问AD服务器的用户会被推送到AWS解析器上的非权威性查询。答案AB

    </details>

84. A fitness tracking company serves users around the world, with its primary markets in North America and Asia. The company needs to design an infrastructure for its read-heavy user authorization application with the following requirements: -Be resilient to problem with the application in any Region. -Write to a database in a single Region. -Read from multiple Regions. -Support resiliency across application tiers in each Region. -Support the relational database semantics reflected in the application. Which combination of steps should a solutions architect take? (Choose two)
    - [ ] A. Use an Amazon Route 53 geoproximity routing policy combined with a multivalue answer routing policy.
    - [ ] B. Deploy web, application, and MySQL database servers to Amazon EC2 instance in each Region. Set up the application so that reads and writes are local to the Region. Create snapshots of the web, application, and database servers and store the snapshots in an Amazon S3 bucket in both Regions. Set up cross- Region replication for the database layer.
    - [ ] C. Use an Amazon Route 53 geolocation routing policy combined with a failover routing policy.
    - [ ] D. Set up web, application, and Amazon RDS for MySQL instances in each Region. Set up the application so that reads are local and writes are partitioned based on the user. Set up a Multi-AZ failover for the web, application, and database servers. Set up cross-Region replication for the database layer.
    - [ ] E. Set up active-active web and application servers in each Region. Deploy an Amazon Aurora global database with clusters in each Region. Set up the application to use the in-Region Aurora database endpoints. Create snapshots of the web application servers and store them in an Amazon S3 bucket in both Regions.

    <details>
       <summary>Answer</summary>

       这里使用极光，首先排除BD，E正确，故障转移路由提供了弹性，答案CE

    </details>

85. A company is planning on hosting its ecommerce platform on AWS using a multi-tier web application designed for a NoSQL database. The company plans to use the us-west-2 Region as its primary Region. The company wants to ensure that copies of the application and data are available in second Region, us-west-1, for disaster recovery. The company wants to keep the time to fail over as low as possible. Failing back to the primary Region should be possible without administrative interaction after the primary service is restored. Which design should the solutions architect use?
    - [ ] A. Use AWS CloudFormation StackSets to create the stacks in both Regions with Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use an Amazon Route 53 DNS failover routing policy to direct users to the secondary site in us-west-1 in the event of an outage. Use Amazon DynamoDB global tables for the database tier.
    - [ ] B. Use AWS CloudFormation StackSets to create the stacks in both Regions with Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use an Amazon Route 53 DNS failover routing policy to direct users to the secondary site in us-west-1 in the event of an outage Deploy an Amazon Aurora global database for the database tier.
    - [ ] C. Use AWS Service Catalog to deploy the web and application servers in both Regions Asynchronously replicate static content between the two Regions using Amazon S3 cross-Region replication. Use Amazon Route 53 health checks to identify a primary Region failure and update the public DNS entry listing to the secondary Region in the event of an outage. Use Amazon RDS for MySQL with cross-Region replication for the database tier.
    - [ ] D. Use AWS CloudFormation StackSets to create the stacks in both Regions using Auto Scaling groups for the web and application tiers. Asynchronously replicate static content between Regions using Amazon S3 cross-Region replication. Use Amazon CloudFront with static files in Amazon S3, and multi-Region origins for the front-end web tier. Use Amazon DynamoDB tables in each Region with scheduled backups to Amazon S3.

    <details>
       <summary>Answer</summary>

       NoSQL直接排除BC，D没有设置路由，答案A

    </details>

86. A company wants to host a global web application on AWS. It has the following design requirements. -Minimize the of API calls. -The access pattern must allow for latching data from multiple data sources. -Keep page load times to within 50ms. -Provide user authentication and authorization and manage data access for different user personas (for example, administrator, manager, or engineer). -Use a serverless design. Which set of strategies should a solution architect use?
    - [ ] A. Use Amazon CloudFront with Amazon S3 to host the web application Use Amazon API gateway to build the application APIs with AWS Lambda for the custom authorizer Authorize data access by performing user lookup in Simple AD.
    - [ ] B. Use Amazon CloudFront with AWS WAF to host the web application. Use AWS AppSync to build the application APIs. Use IAM groups for each user persona Authorize data access by leveraging IAM group in AWS AppSync resolvers.
    - [ ] C. Use Amazon CloudFront with Amazon S3 to host the web application. Use AWS AppSync to build the application APIs. Use Amazon Cognito groups for each user persona Authorize data access by leveraging Amazon Cognito groups in AWS AppSync resolvers.
    - [ ] D. Use AWS Direct Connect with Amazon S3 to host the web application. Use Amazon API Gateway to build the application APIs. Use AWS Lambda for custom authentication and authorization. Authorize data access by leveraging IAM roles.

    <details>
       <summary>Answer</summary>

       简单题，答案A

    </details>

87. A startup company recently migrated a large ecommerce website to AWS The website has experienced a 70% increase in sales. Software engineers are using a private GitHub repository to manage code. The devops team is using Jenkins for builds and unit testing. The engineers need to receive notifications for bad builds and zero downtime during deployments. The engineers also need to ensure any changes to production are seamless for users and can be rolled back in the event of a major issue. The software engineers have decided to use AWS CodePipeline to manage their build and deployment process. Which solution will meet these requirements?
    - [ ] A. Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.
    - [ ] B. Use GitHub webhooks to trigger the CodePipeine pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Deploy in a blue/green deployment using AWS CodeDeploy.
    - [ ] C. Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.
    - [ ] D. Use GitHub webhooks to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.

    <details>
       <summary>Answer</summary>

       简单题，答案B

    </details>

88. A company has developed a mobile game. The backend for the game runs on several virtual machines located in an on-premises data center. The business logic is exposed using a REST API with multiple functions. Player session data is stored in central file storage. Backend services use different API keys for throttling and to distinguish between live and test traffic. The load on the game backend varies throughout the day. During peak hours, the server capacity is not sufficient. There are also latency issues when fetching player session data. Management has asked a solutions architect to present a cloud architecture that can handle the game's varying load and provide low-latency data access. The API model should not be changed. Which solution meets these requirements?
    - [ ] A. Implement the REST API using a Network Load Balancer (NLB). Run the business logic on an Amazon EC2 instance behind the NLB. Store player session data in Amazon Aurora Serverless.
    - [ ] B. Implement the REST API using an Application Load Balancer (ALB). Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on-demand capacity.
    - [ ] C. Implement the REST API using Amazon API Gateway. Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on- demand capacity.
    - [ ] D. Implement the REST API using AWS AppSync. Run the business logic in AWS Lambda. Store player session data in Amazon Aurora Serverless.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

89. A company hosts an application on Amazon EC2 instance and needs to store files in Amazon S3. The files should never traverse the public internet, and only the application EC2 instances are granted access to a specific Amazon S3 bucket. A solutions architect has created a VPC endpoint for Amazon S3 and connected the endpoint to the application VPC. Which additional steps should the solutions architect take to meet these requirements?
    - [ ] A. Assign an endpoint policy to the endpoint that restricts access to a specific S3 bucket. Attach a bucket policy to the S3 bucket that grants access to the VPC endpoint. Add the gateway prefix list to a NACL of the instances to limit access to the application EC2 instances only.
    - [ ] B. Attach a bucket policy to the S3 bucket that grants access to application EC2 instances only using the aws:SourceIp condition. Update the VPC route table so only the application EC2 instances can access the VPC endpoint.
    - [ ] C. Assign an endpoint policy to the VPC endpoint that restricts access to a specific S3 bucket. Attach a bucket policy to the S3 bucket that grants access to the VPC endpoint. Assign an IAM role to the application EC2 instances and only allow access to this role in the S3 bucket's policy.
    - [ ] D. Assign an endpoint policy to the VPC endpoint that restricts access to S3 in the current Region. Attach a bucket policy to the S3 bucket that grants access to the VPC private subnets only. Add the gateway prefix list to a NACL to limit access to the application EC2 instances only.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

90. A company is migrating its three-tier web application from on-premises to the AWS Cloud. The company has the following requirements for the migration process: -Ingest machine images from the on-premises environment. -Synchronize changes from the on-premises environment to the AWS environment until the production cutover. -Minimize downtime when executing the production cutover. -Migrate the virtual machines's root volumes and data volumes. Which solution will satisfy these requirements with minimal operational overhead?
    - [ ] A. Use AWS Server Migration Service (SMS) to create and launch a replication job for each tier of the application. Launch instances from the AMIs created by AWS SMS. After initial testing, perform a final replication and create new instances from the updated AMIs.
    - [ ] B. Create an AWS CLI VM Import/Export script to migrate each virtual machine. Schedule the script to run incrementally to maintain changes in the application. Launch instances from the AMIs created by VM Import/Export. Once testing is done, rerun the script to do a final import and launch the instances from the AMIs.
    - [ ] C. Use AWS Server Migration Service (SMS) to upload the operating system volumes. Use the AWS CLI import-snapshot command for the data volumes. Launch instances from the AMIs created by AWS SMS and attach the data volumes to the instances. After initial testing, perform a final replication, launch new instances from the replicated AMIs, and attach the data volumes to the instances.
    - [ ] D. Use AWS Application Discovery Service and AWS Migration Hub to group the virtual machines as an application. Use the AWS CLI VM Import/Export script to import the virtual machines as AMIs. Schedule the script to run incrementally to maintain changes in the application. Launch instances from the AMIs. After initial testing, perform a final virtual machine import and launch new instances from the AMIs.

    <details>
       <summary>Answer</summary>

       SMS用于对实时服务器卷进行自动、实时增量复制。答案A

    </details>

91. A company has an application that sells tickets online and experiences bursts of demand every 7 days. The application has a stateless presentation layer running on Amazon EC2, an Oracle database to store unstructured data catalog information, and a backend API layer. The front-end layer uses an Elastic Load Balancer to distribute the load across nine On-Demand instances over three Availability Zones (AZs). The Oracle database is running on a single EC2 instance. The company is experiencing performance issues when running more than two concurrent campaigns. A solutions architect must design a solution that meets the following requirements: -Address scalability issues. -Increase the level of concurrency. -Eliminate licensing costs. -Improve reliability. Which set of steps should the solutions architect take?
    - [ ] A. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Convert the Oracle database into a single Amazon RDS reserved DB instance.
    - [ ] B. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Create two additional copies of the database instance, then distribute the databases in separate AZs.
    - [ ] C. Create an Auto Scaling group for the front end with a combination of On-Demand and Spot Instances to reduce costs. Convert the tables in the Oracle database into Amazon DynamoDB tables.
    - [ ] D. Convert the On-Demand Instances into Spot instances to reduce costs for the front end. Convert the tables in the Oracle database into Amazon DynamoDB tables.

    <details>
       <summary>Answer</summary>

       简单题，答案C

    </details>

92. A developer reports receiving an Error 403: Access Denied message when they try to download an object from an Amazon S3 bucket. The S3 bucket is accessed using an S3 endpoint inside a VPC, and is encrypted with an AWS KMS key. A solution architect has verified that the developer is assuming the correct IAM role in the account that allows the object to be downloaded. The S3 bucket policy and the NACL are also valid. Which additional step should the solutions architect take to troubleshoot this issue?
    - [ ] A. Ensure that blocking all public access has not been enabled In the S3 bucket.
    - [ ] B. Verify that the IAM rote has permission to decrypt the referenced KMS key.
    - [ ] C. Verify that the IAM rote has the correct trust relationship configured.
    - [ ] D. Check that local firewall rules are not preventing access to the S3 endpoint.

    <details>
       <summary>Answer</summary>

       答案B

    </details>

93. A company is deploying a public-facing global application on AWS using Amazon CloudFront. The application communicates with an external system. A solutions architect needs to ensure the data is secured during end-to-end transit and at rest. Which combination of steps will satisfy these requirements? (Choose three.)
    - [ ] A. Create a public certificate for the required domain in AWS Certificate Manager and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 instances.
    - [ ] B. Acquire a public certificate from a third-party vendor and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 instances.
    - [ ] C. Provision Amazon EBS encrypted volumes using AWS KMS and ensure explicit encryption of data when writing to Amazon EBS.
    - [ ] D. Provision Amazon EBS encrypted volumes using AWS KMS.
    - [ ] E. Use SSL or encrypt data while communicating with the external system using a VPN.
    - [ ] F. Communicate with the external system using plaintext and use the VPN to encrypt the data in transit.

    <details>
       <summary>Answer</summary>

       答案BDE，对于A，公共ACM不能用于EC2，

    </details>

94. An enterprise company's data science team wants to provide a safe, cost-effective way to provide easy access to Amazon SageMaker. The data scientists have limited AWS knowledge and need to be able to launch a Jupyter notebook instance. The notebook instance needs to have a preconfigured AWS KMS key to encrypt data at rest on the machine learning storage volume without exposing the complex setup requirements. Which approach will allow the company to set up a self-service mechanism for the data scientists to launch Jupyter notebooks in its AWS accounts with the LEAST amount of operational overhead?
    - [ ] A. Create a serverless front end using a static Amazon S3 website to allow the data scientists to request a Jupyter notebook instance by filling out a form. Use Amazon API Gateway to receive requests from the S3 website and trigger a central AWS Lambda function to make an API call to Amazon SageMaker that will launch a notebook instance with a preconfigured KMS key for the data scientists. Then call back to the front-end website to display the URL to the notebook instance.
    - B. Create an AWS CloudFormation template to launch a Jupyter notebook instance using the AWS::SageMaker::NotebookInstance resource type with a preconfigured KMS key. Add a user-friendly name to the CloudFormation template. Display the URL to the notebook using the Outputs section. Distribute the CloudFormation template to the data scientists using a shared Amazon S3 bucket.
    - C. Create an AWS CloudFormation template to launch a Jupyter notebook instance using the AWS::SageMaker::NotebookInstance resource type with a preconfigured KMS key. Simplify the parameter names, such as the instance size, by mapping them to Small, Large, and X-Large using the Mappings section in CloudFormation. Display the URL to the notebook using the Outputs section, then upload the template into an AWS Service Catalog product in the data scientist's portfolio, and share it with the data scientist's IAM role.
    - D. Create an AWS CLI script that the data scientists can run locally. Provide step-by-step instructions about the parameters to be provided while executing the AWS CLI script to launch a Jupyter notebook with a preconfigured KMS key. Distribute the CLI script to the data scientists using a shared Amazon S3 bucket.

    <details>  
       <summary>Answer</summary>

       自助服务一看就用Service Catalog，答案C -> [ref](https://aws.amazon.com/cn/blogs/mt/enable-self-service-secured-data-science-using-amazon-sagemaker-notebooks-and-aws-service-catalog/)

    </details>

95. An enterprise company is building an infrastructure services platform for its users. The company has the following requirements: -Provide least privilege access to users when launching AWS infrastructure so users cannot provision unapproved services. -Use a central account to manage the creation of infrastructure services. -Provide the ability to distribute infrastructure services to multiple accounts in AWS Organizations. -Provide the ability to enforce tags on any infrastructure that is started by users. Which combination of actions using AWS services will meet these requirements? (Choose three.)
    - [ ] A. Develop infrastructure services using AWS Cloud Formation templates. Add the templates to a central Amazon S3 bucket and add the-IAM roles or users that require access to the S3 bucket policy.
    - [ ] B. Develop infrastructure services using AWS Cloud Formation templates. Upload each template as an AWS Service Catalog product to portfolios created in a central AWS account. Share these portfolios with the Organizations structure created for the company.
    - [ ] C. Allow user IAM roles to have AWSCloudFormationFullAccess and AmazonS3ReadOnlyAccess permissions. Add an Organizations SCP at the AWS account root user level to deny all services except AWS CloudFormation and Amazon S3.
    - [ ] D. Allow user IAM roles to have ServiceCatalogEndUserAccess permissions only. Use an automation script to import the central portfolios to local AWS accounts, copy the TagOption assign users access and apply launch constraints.
    - [ ] E. Use the AWS Service Catalog TagOption Library to maintain a list of tags required by the company. Apply the TagOption to AWS Service Catalog products or portfolios.
    - [ ] F. Use the AWS CloudFormation Resource Tags property to enforce the application of tags to any CloudFormation templates that will be created for users.

    <details>
       <summary>Answer</summary>

       答案BDE

    </details>

96. A media company has a static web application that is generated programmatically. The company has a build pipeline that generates HTML content that is uploaded to an Amazon S3 bucket served by Amazon CloudFront. The build pipeline runs inside a Build Account. The S3 bucket and CloudFront distribution are in a Distribution Account. The build pipeline uploads the files to Amazon S3 using an IAM role in the Build Account. The S3 bucket has a bucket policy that only allows CloudFront to read objects using an origin access identity (OAI). During testing all attempts to access the application using the CloudFront URL result in an HTTP 403 Access Denied response. What should a solutions architect suggest to the company to allow access the objects in Amazon S3 through CloudFront?
    - [ ] A. Modify the S3 upload process in the Build Account to add the bucket-owner-full-control ACL to the objects at upload.
    - [ ] B. Create a new cross-account IAM role in the Distribution Account with write access to the S3 bucket. Modify the build pipeline to assume this role to upload the files to the Distribution Account.
    - [ ] C. Modify the S3 upload process in the Build Account to set the object owner to the Distribution Account.
    - [ ] D. Create a new IAM role in the Distribution Account with read access to the S3 bucket. Configure CloudFront to use this new role as its OAI. Modify the build pipeline to assume this role when uploading files from the Build Account.

    <details>
       <summary>Answer</summary>

       这题答案是A

    </details>

97. A solutions architect is implementing infrastructure as code for a two-tier web application in an AWS CloudFormation template. The web frontend application will be deployed on Amazon EC2 instances in an Auto Scaling group. The backend database will be an Amazon RDS for MySQL DB instance. The database password will be rotated every 60 days. How can the solutions architect MOST securely manage the configuration of the application's database credentials?
    - [ ] A. Provide the database password as a parameter in the CloudFormation template. Create an initialization script in the Auto Scaling group's launch configuration UserData property to reference the password parameter using the Ref intrinsic function. Store the password on the EC2 instances. Reference the parameter for the value of the MasterUserPassword property in the AWS::RDS::DBInstance resource using the Ref intrinsic function.
    - [ ] B. Create a new AWS Secrets Manager secret resource in the CloudFormation template to be used as the database password. Configure the application to retrieve the password from Secrets Manager when needed. Reference the secret resource for the value of the MasterUserPassword property in the AWS::RDS::DBInstance resource using a dynamic reference.
    - [ ] C. Create a new AWS Secrets Manager secret resource in the CloudFormation template to be used as the database password. Create an initialization script in the Auto Scaling group's launch configuration UserData property to reference the secret resource using the Ref intrinsic function. Reference the secret resource for the value of the MasterUserPassword property in the AWS::RDS::DBInstance resource using the Ref intrinsic function.
    - [ ] D. Create a new AWS Systems Manager Parameter Store parameter in the CloudFormation template to be used as the database password. Create an initialization script in the Auto Scaling group's launch configuration UserData property to reference the parameter. Reference the parameter for the value of the MasterUserPassword property in the AWS::RDS::DBInstance resource using the Fn::GetAtt intrinsic function.

    <details>
       <summary>Answer</summary>

       UserData很不好维护，直接排除ACD，答案B

    </details>

98. A weather service provides high-resolution weather maps from a web application hosted on AWS in the eu-west-1 Region. The weather maps are updated frequently and stored in Amazon S3 along with static HTML content. The web application is fronted by Amazon CloudFront. The company recently expanded to serve users in the us-east-1 Region, and these new users report that viewing their respective weather maps is slow from time to time. Which combination of steps will resolve the us-east-1 performance issues? (Choose two.)
    - [ ] A. Configure the AWS Global Accelerator endpoint for the S3 bucket in eu-west-1. Configure endpoint groups for TCP ports 80 and 443 in us-east-1.
    - [ ] B. Create a new S3 bucket in us-east-1. Configure S3 cross-Region replication to synchronize from the S3 bucket in eu-west-1.
    - [ ] C. Use Lambda@Edge to modify requests from North America to use the S3 Transfer Acceleration endpoint in us-east-1.
    - [ ] D. Use Lambda@Edge to modify requests from North America to use the S3 bucket in us-east-1.
    - [ ] E. Configure the AWS Global Accelerator endpoint for us-east-1 as an origin on the CloudFront distribution. Use Lambda@Edge to modify requests from North America to use the new origin.

    <details>
       <summary>Answer</summary>

       答案BD -> [ref](https://aws.amazon.com/cn/blogs/apn/using-amazon-cloudfront-with-multi-region-amazon-s3-origins/)

    </details>

99. A company is using AWS CloudFormation as its deployment tool for all application. It stages all application binaries and templates within Amazon S3 bucket with versioning enabled. Developers have access to an Amazon EC2 instance that hosts the integrated development (IDE). The Developers download the application binaries from Amazon S3 to the EC2 instance, make changes, and upload the binaries to an S3 bucket after running the unit tests locally. The developers want to improve the existing deployment mechanism and implement CI/CD using AWS CodePipeline. The developers have the following requirements: -Use AWS CodeCommit for source control. -Automate unit testing and security scanning. -Alert the Developers when unit tests fail. -Turn application features on and off, and customize deployment dynamically as part of CI/CD. -Have the lead Developer provide approval before deploying an application. Which solution will meet these requirements?
    - [ ] A. Use AWS CodeBuild to run tests and security scans. Use an Amazon EventBridge rule to send Amazon SNS alerts to the Developers when unit tests fail. Write AWS Cloud Developer kit (AWS CDK) constructs for different solution features, and use a manifest file to turn features on and off in the AWS CDK application. Use a manual approval stage in the pipeline to allow the lead Developer to approve applications.
    - [ ] B. Use AWS Lambda to run unit tests and security scans. Use Lambda in a subsequent stage in the pipeline to send Amazon SNS alerts to the developers when unit tests fail. Write AWS Amplify plugins for different solution features and utilize user prompts to turn features on and off. Use Amazon SES in the pipeline to allow the lead developer to approve applications.
    - [ ] C. Use Jenkins to run unit tests and security scans. Use an Amazon EventBridge rule in the pipeline to send Amazon SES alerts to the developers when unit tests fail. Use AWS CloudFormation nested stacks for different solution features and parameters to turn features on and off. Use AWS Lambda in the pipeline to allow the lead developer to approve applications.
    - [ ] D. Use AWS CodeDeploy to run unit tests and security scans. Use an Amazon CloudWatch alarm in the pipeline to send Amazon SNS alerts to the developers when unit tests fail. Use Docker images for different solution features and the AWS CLI to turn features on and off. Use a manual approval stage in the pipeline to allow the lead developer to approve applications.

    <details>
       <summary>Answer</summary>

       简单题，答案A

    </details>

100. An ecommerce website running on AWS uses an Amazon RDS for MySQL DB instance with General Purpose SSD storage. The developers chose an appropriate instance type based on demand, and configured 100 GB of storage with a sufficient amount of free space. The website was running smoothly for a few weeks until a marketing campaign launched. On the second day of the campaign, users reported long wait times and time outs. Amazon CloudWatch metrics indicated that both reads and writes to the DB instance were experiencing long response times. The CloudWatch metrics show 40% to 50% CPU and memory utilization, and sufficient free storage space is still available. The application server logs show no evidence of database connectivity issues. What could be the root cause of the issue with the marketing campaign?
     - [ ] A. It exhausted the I/O credit balance due to provisioning low disk storage during the setup phase.
     - [ ] B. It caused the data in the tables to change frequently, requiring indexes to be rebuilt to optimize queries.
     - [ ] C. It exhausted the maximum number of allowed connections to the database instance.
     - [ ] D. It exhausted the network bandwidth available to the RDS for MySQL DB instance.

     <details>
       <summary>Answer</summary>

       答案A，gp2的IOPS太小了。

     </details>
