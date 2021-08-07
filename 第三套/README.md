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

      不知道为啥，答案D

   </details>
  
5. A company recently transformed its legacy infrastructure provisioning scripts to AWS CloudFormation templates. The newly developed templates are hosted in the company’s private GitHub repository. Since adopting Cloud Formation, the company has encountered several issues with updates to the CloudFormation templates, causing failed executions or creating unstable environments, Management is concerned by the increase in errors and has asked a Solutions Architect to design the automated testing of CloudFormation template updates. What should the solutions architect do to meet these requirements?
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
   - [ ] A. Rehost the Db database in Amazon Fargate Migrate all e data Enable caching in Fargate. Refactor the API to use the Fargate Db2 database Implement Amazon API Gateway and enable API caching.
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
    - [ ] A. Use AWS Data Pipeline to schedule a DynamoDB cross region copy once a day, create a "LastUpdated" attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter
    - [ ] B. Use AWS Data Pipeline to schedule an export of the DynamoDB table to S3 in the current region once a day, then schedule another task Immediately after it that will import data from S3 to DynamoDB in the other region
    - [ ] C. Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to DynamoDB in the second region
    - [ ] D. Send also each write into an SQS queue in the second region, use an auto-scaling group behind the SQS queue to replay the write in the second region
22. Your company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past few months resulting in significant financial losses. Your CIO is strongly considering moving the application to AWS. While working on achieving buy-In from the other company executives, he asks you to develop a disaster recovew plan to help improve business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of I hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?
    - [ ] A. Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template which includes your AMI and the required EC2, AutoScaling, and ELB resources to support deploying the application across Multiple-Availability-Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
    - [ ] B. Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
    - [ ] C. Create an EBS backed private AMI which includes a fresh install ofyour application. Setup a script in your data center to backup the local database every I hour and to encrypt and copy the resulting file to an S3 bucket using multi-part upload.
    - [ ] D. Install your application on a compute-optimized EC2 instance capable of supporting the application's average load. Synchronously replicate transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.
23. During a security audit ofa Service team's application, a Solutions Architect discovers that a username and password for an Amazon RDS database and a set ofAWS IAMuser credentials can be viewed in the AWS Lambda function code. The Lambda function uses the username and password to run queries on the database, and it uses the IAM credentials to call AWS services in a separate management account. The Solutions Architect concerned that the credentials could grant inappropriate access to anyone who can view the Lambda code. The management account and the Sewice team's account are in separate AWS Organizations organizational units (OUs). Which combination of changes should the Solutions Architect make to improve the solution's security? (Choose two.)
    - [ ] A. Configure Lambda to assume a role in the management account with appropriate access to AWS.
    - [ ] B. Configure Lambda to use the stored database credentials in AWS Secrets Manager and enable automatic rotation.
    - [ ] C. Create a Lambda function to rotate the credentials every hour by deploying a new Lambda version with the updated credentials.
    - [ ] D. Use an SCP on the management account's OU to prevent IAM users from accessing resources in the Service team's account.
    - [ ] E. Enable AWS Shield Advanced on the management account to shield sensitive resources from unauthorized IANI access.
24. Your company runs a customer facing event registration site. This site is built with a 3-tier architecture with web and application tier servers and a MySQL database. The application requires 6 web tier servers and 6 applie provides high availability?
    - [ ] A. A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each A2 inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances In each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the other AZ.
    - [ ] B. A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 3 AZs with 2 EC2 instances In each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment.
    - [ ] C. A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment
    - [ ] D. A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the two other AZs.
25. An administrator is using Amazon CloudFormation to deploy a three tier web application that consists ofa web tier and application tier that will utilize Amazon DynamoDB for storage. When creating the CloudFormation template which of the following would allow the application Instance access to the DynamoDB tables without exposing API credentials?
    - [ ] A. Create an Identity and Access Management Role that has the required permissions to read and write from the .required DynamoDB table and associate the Role to the application instances by referencing an instance profile.
    - [ ] B. Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.
    - [ ] C. Use the Parameter section in the CloudFormation template to have the user input Access and Secret keys from an already created IAM user that has the permissions required to read and write from the required DynamoDB table.
    - [ ] D. Create an Identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and Secret keys and pass them to the application instance through user-data.
